<?php
// submissions_view.php
// A lightweight viewer for newline-delimited JSON logs like submissions.log

declare(strict_types=1);

// ---------- CONFIG ----------
$LOG_FILE     = __DIR__ . '/submissions.log';
$DEFAULT_PP   = 25; // default per-page
$MAX_PP       = 200; // hard cap
$TIMEZONE     = 'Asia/Kolkata'; // display timezone
// ---------------------------

function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

/**
 * Safely read the log file into an array of associative arrays (one per line).
 */
function read_log(string $path): array {
    if (!is_file($path)) return [];
    $out = [];
    $fh = fopen($path, 'rb');
    if (!$fh) return [];
    while (!feof($fh)) {
        $line = fgets($fh);
        if ($line === false) break;
        $line = trim($line);
        if ($line === '') continue;
        $obj = json_decode($line, true);
        if (is_array($obj)) {
            // normalize a couple fields
            $obj['_ts_raw'] = $obj['ts'] ?? null;
            $out[] = $obj;
        } else {
            // keep malformed line so you can see issues
            $out[] = ['_malformed' => $line];
        }
    }
    fclose($fh);
    return $out;
}

/**
 * Convert timestamp string to DateTimeImmutable in the configured timezone.
 */
function ts_to_dt(?string $ts, string $tz): ?DateTimeImmutable {
    if (!$ts) return null;
    try {
        $dt = new DateTimeImmutable($ts);
        return $dt->setTimezone(new DateTimeZone($tz));
    } catch (Throwable $e) {
        return null;
    }
}

/**
 * Build a flat string for naive search across fields.
 */
function flatten_for_search($val): string {
    if (is_array($val)) {
        $parts = [];
        foreach ($val as $k => $v) {
            $parts[] = (is_string($k) ? $k . ':' : '') . flatten_for_search($v);
        }
        return implode(' ', $parts);
    }
    if (is_scalar($val)) return (string)$val;
    return '';
}

/**
 * Pretty JSON block for <details>.
 */
function pretty_json($data): string {
    return h(json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

/**
 * Read inputs
 */
$pp     = isset($_GET['pp']) ? max(1, min($MAX_PP, (int)$_GET['pp'])) : $DEFAULT_PP;
$page   = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;
$q      = isset($_GET['q']) ? trim((string)$_GET['q']) : '';
$form   = isset($_GET['form']) ? trim((string)$_GET['form']) : '';
$ip     = isset($_GET['ip']) ? trim((string)$_GET['ip']) : '';
$status = isset($_GET['status']) ? trim((string)$_GET['status']) : ''; // '', 'sent', 'failed'
$sort   = isset($_GET['sort']) ? (string)$_GET['sort'] : 'ts_desc'; // 'ts_desc' | 'ts_asc'

// read
$rows = read_log($LOG_FILE);

// filter
$filtered = array_values(array_filter($rows, function($r) use($q, $form, $ip, $status){
    if (isset($r['_malformed'])) {
        // include malformed unless filters would obviously exclude
        if ($q !== '' && stripos($r['_malformed'], $q) === false) return false;
        return true;
    }
    if ($form !== '' && strcasecmp((string)($r['form'] ?? ''), $form) !== 0) return false;
    if ($ip   !== '' && strcasecmp((string)($r['ip'] ?? ''), $ip) !== 0) return false;
    if ($status !== '') {
        $sent = (bool)($r['mail_sent'] ?? false);
        if ($status === 'sent' && !$sent) return false;
        if ($status === 'failed' && $sent) return false;
    }
    if ($q !== '') {
        $hay = strtolower(
            flatten_for_search($r)
        );
        if (strpos($hay, strtolower($q)) === false) return false;
    }
    return true;
}));

// sort
usort($filtered, function($a, $b) use($sort){
    $ats = $a['_ts_raw'] ?? '';
    $bts = $b['_ts_raw'] ?? '';
    if ($sort === 'ts_asc') {
        return strcmp($ats, $bts);
    } else {
        return strcmp($bts, $ats);
    }
});

// pagination
$total    = count($filtered);
$pages    = max(1, (int)ceil($total / $pp));
$page     = min($page, $pages);
$offset   = ($page - 1) * $pp;
$paginated = array_slice($filtered, $offset, $pp);

/**
 * Build query string preserving filters, changing keys
 */
function qs(array $overrides = []): string {
    $params = $_GET;
    foreach ($overrides as $k => $v) {
        if ($v === null) unset($params[$k]);
        else $params[$k] = $v;
    }
    return '?' . http_build_query($params);
}

// Basic stats
$failedCount = 0; $sentCount = 0; $malCount = 0;
foreach ($filtered as $r) {
    if (isset($r['_malformed'])) { $malCount++; continue; }
    if (!empty($r['mail_sent'])) $sentCount++; else $failedCount++;
}

?><!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Submissions Log Viewer</title>
<style>
:root{
  --bg:#0b0e14; --panel:#111522; --muted:#9aa4b2; --text:#e5e7eb;
  --ok:#10b981; --warn:#f59e0b; --bad:#ef4444; --chip:#1f2937; --accent:#38bdf8;
  --row:#0f1421; --rowAlt:#0c111a; --border:#1f2937;
}
*{ box-sizing:border-box; }
body{ margin:0; background:var(--bg); color:var(--text); font:14px/1.4 system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif; }
a{ color:var(--accent); text-decoration:none; }
.header{
  position:sticky; top:0; z-index:10; background:linear-gradient(180deg, rgba(11,14,20,.98), rgba(11,14,20,.92));
  border-bottom:1px solid var(--border);
  padding:14px 16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap;
}
.header h1{ margin:0; font-size:16px; letter-spacing:.3px; }
.summary{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
.badge{ padding:6px 10px; border-radius:999px; background:var(--chip); color:var(--muted); border:1px solid var(--border); font-weight:600; }
.badge.ok{ color:#d1fae5; border-color:rgba(16,185,129,.35); }
.badge.bad{ color:#fee2e2; border-color:rgba(239,68,68,.35); }
.badge.mal{ color:#fde68a; border-color:rgba(245,158,11,.35); }
.container{ padding:16px; max-width:1200px; margin:0 auto; }
.filterbar{ display:grid; grid-template-columns: 1fr repeat(4, minmax(120px, 170px)) 110px; gap:8px; }
input, select, button{
  background:#0f172a; border:1px solid var(--border); color:var(--text);
  border-radius:10px; padding:10px 12px; outline:none;
}
button{ cursor:pointer; }
.table{ margin-top:14px; border:1px solid var(--border); border-radius:14px; overflow:hidden; }
.row{ display:grid; grid-template-columns: 210px 130px 130px 1fr 120px 110px; gap:0; border-top:1px solid var(--border); }
.row.head{ background:#0a0f19; position:sticky; top:74px; z-index:5; font-weight:700; }
.row > div{ padding:10px 12px; }
.row:nth-child(even):not(.head){ background:var(--rowAlt); }
.row:nth-child(odd):not(.head){ background:var(--row); }
.status{ font-weight:700; }
.status.ok{ color:var(--ok); }
.status.bad{ color:var(--bad); }
.chips{ display:flex; gap:6px; flex-wrap:wrap; }
.chip{ background:var(--chip); padding:4px 8px; border-radius:999px; font-size:12px; color:var(--muted); border:1px solid var(--border); }
details{ background:#0b1220; border:1px solid var(--border); border-radius:10px; padding:8px 10px; }
details > summary{ cursor:pointer; color:#cbd5e1; font-weight:600; }
.json{ margin-top:8px; white-space:pre-wrap; font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; font-size:12px; color:#c7d2fe; background:#0a1020; padding:10px; border-radius:8px; overflow:auto; max-height:240px; }
.pager{ display:flex; gap:8px; align-items:center; justify-content:flex-end; margin-top:12px; }
.pager a, .pager span{
  padding:8px 10px; border:1px solid var(--border); border-radius:10px; background:#0a0f19;
}
.pager .current{ font-weight:700; border-color:#334155; }
.kv{ display:grid; grid-template-columns: 140px 1fr; gap:6px; }
.kv b{ color:#cbd5e1; }
hr.sep{ border:0; border-top:1px dashed var(--border); margin:12px 0; }
.toast{ margin-left:auto; color:var(--muted); }
</style>
</head>
<body>
  <div class="header">
    <h1>Submissions Log Viewer</h1>
    <div class="summary">
      <span class="badge">Total: <?=number_format($total)?></span>
      <span class="badge ok">Sent: <?=number_format($sentCount)?></span>
      <span class="badge bad">Failed: <?=number_format($failedCount)?></span>
      <?php if ($malCount): ?><span class="badge mal">Malformed: <?=number_format($malCount)?></span><?php endif; ?>
    </div>
    <div class="toast">Showing page <?=$page?> of <?=$pages?> (<?=$pp?> / page)</div>
  </div>

  <div class="container">
    <form class="filterbar" method="get">
      <input type="search" name="q" placeholder="Search anything (email, message, headers…)" value="<?=h($q)?>">
      <input type="text" name="form" placeholder="Form (e.g., contact, reservation)" value="<?=h($form)?>">
      <input type="text" name="ip" placeholder="IP (e.g., 127.0.0.1)" value="<?=h($ip)?>">
      <select name="status">
        <option value="">Status (any)</option>
        <option value="sent"   <?= $status==='sent'?'selected':''; ?>>mail_sent = true</option>
        <option value="failed" <?= $status==='failed'?'selected':''; ?>>mail_sent = false</option>
      </select>
      <select name="sort">
        <option value="ts_desc" <?=$sort==='ts_desc'?'selected':'';?>>Newest first</option>
        <option value="ts_asc"  <?=$sort==='ts_asc'?'selected':'';?>>Oldest first</option>
      </select>
      <select name="pp" title="Per page">
        <?php foreach ([10,25,50,100,200] as $opt): ?>
          <option value="<?=$opt?>" <?=$pp===$opt?'selected':''?>><?=$opt?>/page</option>
        <?php endforeach; ?>
      </select>
      <button type="submit">Apply</button>
    </form>

    <div class="table">
      <div class="row head">
        <div>
          Time (<?=$TIMEZONE?>)
          <a href="<?=h(qs(['sort'=>'ts_desc','page'=>1]))?>" title="Newest first">↓</a>
          <a href="<?=h(qs(['sort'=>'ts_asc','page'=>1]))?>" title="Oldest first">↑</a>
        </div>
        <div>IP</div>
        <div>Form</div>
        <div>Summary</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      <?php if (!$paginated): ?>
        <div class="row"><div style="grid-column:1/-1; color:#94a3b8;">No results for current filters.</div></div>
      <?php endif; ?>

      <?php foreach ($paginated as $i => $r): ?>
        <?php if (isset($r['_malformed'])): ?>
          <div class="row">
            <div colspan="6" style="grid-column:1/-1">
              <div class="chips"><span class="chip">Malformed JSON</span></div>
              <details open>
                <summary>View raw line</summary>
                <div class="json"><?=h($r['_malformed'])?></div>
              </details>
            </div>
          </div>
          <?php continue; endif; ?>

        <?php
          $dt    = ts_to_dt($r['_ts_raw'] ?? null, $TIMEZONE);
          $tsOut = $dt ? $dt->format('Y-m-d H:i:s') : h((string)($r['_ts_raw'] ?? ''));
          $ipOut = (string)($r['ip'] ?? '');
          $formOut = (string)($r['form'] ?? '');
          $statusOk = !empty($r['mail_sent']);
          $mailErr = $r['mail_error'] ?? '';
          $ua = $r['ua'] ?? '';
          $ref = $r['referer'] ?? '';
          $uri = $r['request_uri'] ?? '';
          $post = $r['post'] ?? [];
          $get  = $r['get'] ?? [];
          $files = $r['files'] ?? [];
          $hdrs = $r['headers'] ?? [];
          $valerr = $r['validation_errors'] ?? null;

          // Build a tiny summary text
          $summaryParts = [];
          if ($ref) $summaryParts[] = 'Ref: ' . $ref;
          if ($uri) $summaryParts[] = 'URI: ' . $uri;
          if (isset($post['email'])) $summaryParts[] = 'Email: ' . $post['email'];
          if (isset($post['phone'])) $summaryParts[] = 'Phone: ' . $post['phone'];
          if (isset($post['username'])) $summaryParts[] = 'Name: ' . $post['username'];
          $summary = implode(' · ', $summaryParts);
        ?>

        <div class="row">
          <div>
            <div><?=$tsOut?></div>
            <?php if ($ua): ?><div style="color:#94a3b8; font-size:12px; margin-top:4px;"><?=h(mb_strimwidth($ua,0,60,'…','UTF-8'))?></div><?php endif; ?>
          </div>
          <div><?=h($ipOut)?></div>
          <div>
            <div><?=h($formOut ?: '—')?></div>
            <div class="chips" style="margin-top:6px;">
              <?php if ($ref): ?><span class="chip">referer</span><?php endif; ?>
              <?php if ($uri): ?><span class="chip">request_uri</span><?php endif; ?>
              <?php if ($valerr !== null): ?><span class="chip"><?= $valerr ? 'validation_errors' : 'validated' ?></span><?php endif; ?>
            </div>
          </div>
          <div><?= $summary ? h($summary) : '<span style="color:#94a3b8">—</span>' ?></div>
          <div class="status <?=$statusOk?'ok':'bad'?>">
            <?=$statusOk?'SENT':'FAILED'?>
            <?php if (!$statusOk && $mailErr): ?>
              <div style="color:#94a3b8; font-size:12px;"><?=h(mb_strimwidth((string)$mailErr,0,50,'…','UTF-8'))?></div>
            <?php endif; ?>
          </div>
          <div>
            <details>
              <summary>POST data</summary>
              <div class="json"><?=pretty_json($post)?></div>
            </details>
            <?php if (!empty($get)): ?>
              <details>
                <summary>GET params</summary>
                <div class="json"><?=pretty_json($get)?></div>
              </details>
            <?php endif; ?>
            <?php if (!empty($files)): ?>
              <details>
                <summary>FILES</summary>
                <div class="json"><?=pretty_json($files)?></div>
              </details>
            <?php endif; ?>
            <details>
              <summary>Headers</summary>
              <div class="json"><?=pretty_json($hdrs)?></div>
            </details>
            <?php if ($ua): ?>
              <details>
                <summary>User-Agent</summary>
                <div class="json"><?=h($ua)?></div>
              </details>
            <?php endif; ?>
            <details>
              <summary>Raw entry</summary>
              <div class="json"><?=pretty_json($r)?></div>
            </details>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <div class="pager">
      <?php if ($page > 1): ?>
        <a href="<?=h(qs(['page'=>1]))?>">« First</a>
        <a href="<?=h(qs(['page'=>$page-1]))?>">‹ Prev</a>
      <?php else: ?>
        <span>« First</span><span>‹ Prev</span>
      <?php endif; ?>
      <span class="current">Page <?=$page?> / <?=$pages?></span>
      <?php if ($page < $pages): ?>
        <a href="<?=h(qs(['page'=>$page+1]))?>">Next ›</a>
        <a href="<?=h(qs(['page'=>$pages]))?>">Last »</a>
      <?php else: ?>
        <span>Next ›</span><span>Last »</span>
      <?php endif; ?>
    </div>

    <hr class="sep">
    <div style="color:#94a3b8; font-size:12px;">
      Tip: Use the global search to find emails/phones/messages/headers quickly. You can bookmark filtered views; all filters are in the URL.
    </div>
  </div>
</body>
</html>
