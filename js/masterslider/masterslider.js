/*! 
 * Master Slider – Responsive Touch Swipe Slider
 * Copyright © 2015 All Rights Reserved. 
 *
 * @author Averta [www.averta.net]
 * @version 2.15.1
 * @date Jul 2015
 */


/* ================== bin-debug/js/pro/tools/base.js =================== */
window.averta = {};
window.averta={},function($){function getVendorPrefix(){if("result"in arguments.callee)return arguments.callee.result;var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=document.getElementsByTagName("script")[0];for(var e in i.style)if(t.test(e))return arguments.callee.result=e.match(t)[0];return"WebkitOpacity"in i.style?arguments.callee.result="Webkit":"KhtmlOpacity"in i.style?arguments.callee.result="Khtml":arguments.callee.result=""}function checkStyleValue(t){var i=document.body||document.documentElement,e=i.style,s=t;if("string"==typeof e[s])return!0;v=["Moz","Webkit","Khtml","O","ms"],s=s.charAt(0).toUpperCase()+s.substr(1);for(var n=0;n<v.length;n++)if("string"==typeof e[v[n]+s])return!0;return!1}function supportsTransitions(){return checkStyleValue("transition")}function supportsTransforms(){return checkStyleValue("transform")}function supports3DTransforms(){if(!supportsTransforms())return!1;var t,i=document.createElement("i"),e={WebkitTransform:"-webkit-transform",OTransform:"-o-transform",MSTransform:"-ms-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",Transform:"transform",transform:"transform"};for(var s in i.style.display="block",document.body.insertBefore(i,null),e)void 0!==i.style[s]&&(i.style[s]="translate3d(1px,1px,1px)",t=window.getComputedStyle(i).getPropertyValue(e[s]));return document.body.removeChild(i),null!=t&&t.length>0&&"none"!==t}window.package=function(t){window[t]||(window[t]={})};var extend=function(t,i){for(var e in i)t[e]=i[e]};Function.prototype.extend=function(t){"function"==typeof t.prototype.constructor?(extend(this.prototype,t.prototype),this.prototype.constructor=this):(this.prototype.extend(t),this.prototype.constructor=this)};var trans={Moz:"-moz-",Webkit:"-webkit-",Khtml:"-khtml-",O:"-o-",ms:"-ms-",Icab:"-icab-"};window._mobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),window._touch="ontouchstart"in document,$(document).ready(function(){window._jcsspfx=getVendorPrefix(),window._csspfx=trans[window._jcsspfx],window._cssanim=supportsTransitions(),window._css3d=supports3DTransforms(),window._css2d=supportsTransforms()}),window.parseQueryString=function(t){var i={};return t.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(t,e,s,n){i[e]=n}),i};var fps60=50/3;if(window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,i){window.setTimeout(t,fps60)}),window.getComputedStyle||(window.getComputedStyle=function(t,i){return this.el=t,this.getPropertyValue=function(i){var e=/(\-([a-z]){1})/g;return"float"==i&&(i="styleFloat"),e.test(i)&&(i=i.replace(e,function(){return arguments[2].toUpperCase()})),t.currentStyle[i]?t.currentStyle[i]:null},t.currentStyle}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var i=this.length>>>0,e=Number(arguments[1])||0;for(e=e<0?Math.ceil(e):Math.floor(e),e<0&&(e+=i);e<i;e++)if(e in this&&this[e]===t)return e;return-1}),window.isMSIE=function(version){if(!$.browser.msie)return!1;if(!version)return!0;var ieVer=$.browser.version.slice(0,$.browser.version.indexOf("."));return"string"==typeof version?-1!==version.indexOf("<")||-1!==version.indexOf(">")?eval(ieVer+version):eval(version+"=="+ieVer):version==ieVer},$.removeDataAttrs=function(t,i){var e,s,n=[],o=t[0].attributes,a=o.length;for(i=i||[],e=0;e<a;e++)s=o[e].name,"data-"===s.substring(0,5)&&-1===i.indexOf(s)&&n.push(o[e].name);$.each(n,function(i,e){t.removeAttr(e)})},jQuery){$.jqLoadFix=function(){if(this.complete){var t=this;setTimeout(function(){$(t).load()},1)}},jQuery.uaMatch=jQuery.uaMatch||function(t){t=t.toLowerCase();var i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}},matched=jQuery.uaMatch(navigator.userAgent),browser={},matched.browser&&(browser[matched.browser]=!0,browser.version=matched.version),browser.chrome?browser.webkit=!0:browser.webkit&&(browser.safari=!0);var isIE11=!!navigator.userAgent.match(/Trident\/7\./);isIE11&&(browser.msie="true",delete browser.mozilla),jQuery.browser=browser,$.fn.preloadImg=function(t,i){return this.each(function(){var e=$(this),s=this,n=new Image;n.onload=function(o){null==o&&(o={}),e.attr("src",t),o.width=n.width,o.height=n.height,e.data("width",n.width),e.data("height",n.height),setTimeout(function(){i.call(s,o)},50),n=null},n.src=t}),this}}}(jQuery),function(){"use strict";averta.EventDispatcher=function(){this.listeners={}},averta.EventDispatcher.extend=function(t){var i=new averta.EventDispatcher;for(var e in i)"constructor"!=e&&(t[e]=averta.EventDispatcher.prototype[e])},averta.EventDispatcher.prototype={constructor:averta.EventDispatcher,addEventListener:function(t,i,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({listener:i,ref:e})},removeEventListener:function(t,i,e){if(this.listeners[t]){for(var s=0;s<this.listeners[t].length;++s)i===this.listeners[t][s].listener&&e===this.listeners[t][s].ref&&this.listeners[t].splice(s--,1);0===this.listeners[t].length&&(this.listeners[t]=null)}},dispatchEvent:function(t){if(t.target=this,this.listeners[t.type])for(var i=0,e=this.listeners[t.type].length;i<e;++i)this.listeners[t.type][i].listener.call(this.listeners[t.type][i].ref,t)}}}(),function(t){"use strict";var i="ontouchstart"in document,e=window.navigator.pointerEnabled,s=!e&&window.navigator.msPointerEnabled,n=e||s,o=(e?"pointerdown ":"")+(s?"MSPointerDown ":"")+(i?"touchstart ":"")+"mousedown",a=(e?"pointermove ":"")+(s?"MSPointerMove ":"")+(i?"touchmove ":"")+"mousemove",r=(e?"pointerup ":"")+(s?"MSPointerUp ":"")+(i?"touchend ":"")+"mouseup",h=(e?"pointercancel ":"")+(s?"MSPointerCancel ":"")+"touchcancel";averta.TouchSwipe=function(t){this.$element=t,this.enabled=!0,t.bind(o,{target:this},this.__touchStart),t[0].swipe=this,this.onSwipe=null,this.swipeType="horizontal",this.noSwipeSelector="input, textarea, button, .no-swipe, .ms-no-swipe",this.lastStatus={}};var l=averta.TouchSwipe.prototype;l.getDirection=function(t,i){switch(this.swipeType){case"horizontal":return t<=this.start_x?"left":"right";case"vertical":return i<=this.start_y?"up":"down";case"all":return Math.abs(t-this.start_x)>Math.abs(i-this.start_y)?t<=this.start_x?"left":"right":i<=this.start_y?"up":"down"}},l.priventDefultEvent=function(t,i){var e=Math.abs(t-this.start_x),s=Math.abs(i-this.start_y),n=e>s;return"horizontal"===this.swipeType&&n||"vertical"===this.swipeType&&!n},l.createStatusObject=function(t){var i,e,s={};return i=this.lastStatus.distanceX||0,e=this.lastStatus.distanceY||0,s.distanceX=t.pageX-this.start_x,s.distanceY=t.pageY-this.start_y,s.moveX=s.distanceX-i,s.moveY=s.distanceY-e,s.distance=parseInt(Math.sqrt(Math.pow(s.distanceX,2)+Math.pow(s.distanceY,2))),s.duration=(new Date).getTime()-this.start_time,s.direction=this.getDirection(t.pageX,t.pageY),s},l.__reset=function(t,e){this.reset=!1,this.lastStatus={},this.start_time=(new Date).getTime(),this.start_x=i?t.touches[0].pageX:n?t.pageX:e.pageX,this.start_y=i?t.touches[0].pageY:n?t.pageY:e.pageY},l.__touchStart=function(e){var s=e.data.target,o=e;if(s.enabled&&!(t(e.target).closest(s.noSwipeSelector,s.$element).length>0))if(e=e.originalEvent,n&&t(this).css("-ms-touch-action","horizontal"===s.swipeType?"pan-y":"pan-x"),s.onSwipe){if(!s.touchStarted){s.start_x=i?e.touches[0].pageX:n?e.pageX:o.pageX,s.start_y=i?e.touches[0].pageY:n?e.pageY:o.pageY,s.start_time=(new Date).getTime(),t(document).bind(r,{target:s},s.__touchEnd).bind(a,{target:s},s.__touchMove).bind(h,{target:s},s.__touchCancel);var l=i?e.touches[0]:n?e:o,d=s.createStatusObject(l);d.phase="start",s.onSwipe.call(null,d),i||o.preventDefault(),s.lastStatus=d,s.touchStarted=!0}}else t.error("Swipe listener is undefined")},l.__touchMove=function(t){var e=t.data.target,s=t;if(t=t.originalEvent,e.touchStarted){clearTimeout(e.timo),e.timo=setTimeout(function(){e.__reset(t,s)},60);var o=i?t.touches[0]:n?t:s,a=e.createStatusObject(o);e.priventDefultEvent(o.pageX,o.pageY)&&s.preventDefault(),a.phase="move",e.lastStatus=a,e.onSwipe.call(null,a)}},l.__touchEnd=function(e){var s=e.data.target,n=e;e=e.originalEvent,clearTimeout(s.timo);i&&e.touches[0];var o=s.lastStatus;i||n.preventDefault(),o.phase="end",s.touchStarted=!1,s.priventEvt=null,t(document).unbind(r,s.__touchEnd).unbind(a,s.__touchMove).unbind(h,s.__touchCancel),o.speed=o.distance/o.duration,s.onSwipe.call(null,o)},l.__touchCancel=function(t){var i=t.data.target;i.__touchEnd(t)},l.enable=function(){this.enabled||(this.enabled=!0)},l.disable=function(){this.enabled&&(this.enabled=!1)}}(jQuery),function(){"use strict";averta.Ticker=function(){};var t=averta.Ticker,i=[],e=0,s=!0;t.add=function(s,n){return i.push([s,n]),1===i.length&&t.start(),e=i.length,e},t.remove=function(s,n){for(var o=0,a=i.length;o<a;++o)i[o]&&i[o][0]===s&&i[o][1]===n&&i.splice(o,1);e=i.length,0===e&&t.stop()},t.start=function(){s&&(s=!1,n())},t.stop=function(){s=!0};var n=function(){if(!t.__stopped){for(var s,o=0;o!==e;o++)s=i[o],s[0].call(s[1]);requestAnimationFrame(n)}}}(),function(){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()}),averta.Timer=function(t,i){this.delay=t,this.currentCount=0,this.paused=!1,this.onTimer=null,this.refrence=null,i&&this.start()},averta.Timer.prototype={constructor:averta.Timer,start:function(){this.paused=!1,this.lastTime=Date.now(),averta.Ticker.add(this.update,this)},stop:function(){this.paused=!0,averta.Ticker.remove(this.update,this)},reset:function(){this.currentCount=0,this.paused=!0,this.lastTime=Date.now()},update:function(){this.paused||Date.now()-this.lastTime<this.delay||(this.currentCount++,this.lastTime=Date.now(),this.onTimer&&this.onTimer.call(this.refrence,this.getTime()))},getTime:function(){return this.delay*this.currentCount}}}(),function(){"use strict";window.CSSTween=function(t,i,e,s){this.$element=t,this.duration=i||1e3,this.delay=e||0,this.ease=s||"linear"};var t=CSSTween.prototype;t.to=function(t,i){return this.to_cb=t,this.to_cb_target=i,this},t.from=function(t,i){return this.fr_cb=t,this.fr_cb_target=i,this},t.onComplete=function(t,i){return this.oc_fb=t,this.oc_fb_target=i,this},t.chain=function(t){return this.chained_tween=t,this},t.reset=function(){clearTimeout(this.start_to),clearTimeout(this.end_to)},t.start=function(){var t=this.$element[0];clearTimeout(this.start_to),clearTimeout(this.end_to),this.fresh=!0,this.fr_cb&&(t.style[window._jcsspfx+"TransitionDuration"]="0ms",this.fr_cb.call(this.fr_cb_target));var i=this;return this.onTransComplete=function(e){i.fresh&&(i.reset(),t.style[window._jcsspfx+"TransitionDuration"]="",t.style[window._jcsspfx+"TransitionProperty"]="",t.style[window._jcsspfx+"TransitionTimingFunction"]="",t.style[window._jcsspfx+"TransitionDelay"]="",i.fresh=!1,i.chained_tween&&i.chained_tween.start(),i.oc_fb&&i.oc_fb.call(i.oc_fb_target))},this.start_to=setTimeout(function(){i.$element&&(t.style[window._jcsspfx+"TransitionDuration"]=i.duration+"ms",t.style[window._jcsspfx+"TransitionProperty"]=i.transProperty||"all",i.delay>0?t.style[window._jcsspfx+"TransitionDelay"]=i.delay+"ms":t.style[window._jcsspfx+"TransitionDelay"]="",t.style[window._jcsspfx+"TransitionTimingFunction"]=i.ease,i.to_cb&&i.to_cb.call(i.to_cb_target),i.end_to=setTimeout(function(){i.onTransComplete()},i.duration+(i.delay||0)))},100),this}}(),function(){"use strict";function t(t,e){if(void 0!==e.x||void 0!==e.y)if(i){var s=window._jcsspfx+"Transform";void 0!==e.x&&(e[s]=(e[s]||"")+" translateX("+e.x+"px)",delete e.x),void 0!==e.y&&(e[s]=(e[s]||"")+" translateY("+e.y+"px)",delete e.y)}else{if(void 0!==e.x){var n="auto"!==t.css("right")?"right":"left";e[n]=e.x+"px",delete e.x}if(void 0!==e.y){var o="auto"!==t.css("bottom")?"bottom":"top";e[o]=e.y+"px",delete e.y}}return e}var i=null;window.CTween={},CTween.setPos=function(i,e){i.css(t(i,e))},CTween.animate=function(e,s,n,o){if(null==i&&(i=window._cssanim),o=o||{},t(e,n),i){var a=new CSSTween(e,s,o.delay,EaseDic[o.ease]);return o.transProperty&&(a.transProperty=o.transProperty),a.to(function(){e.css(n)}),o.complete&&a.onComplete(o.complete,o.target),a.start(),a.stop=a.reset,a}var r;return o.delay&&e.delay(o.delay),o.complete&&(r=function(){o.complete.call(o.target)}),e.stop(!0).animate(n,s,o.ease||"linear",r),e},CTween.fadeOut=function(t,i,e){var s={};!0===e?s.complete=function(){t.remove()}:2===e&&(s.complete=function(){t.css("display","none")}),CTween.animate(t,i||1e3,{opacity:0},s)},CTween.fadeIn=function(t,i,e){!1!==e&&t.css("opacity",0).css("display",""),CTween.animate(t,i||1e3,{opacity:1})}}(),window.EaseDic={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInCubic:"cubic-bezier(.55,.055,.675,.19)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},function(){"use strict";window.MSAligner=function(t,i,e){this.$container=i,this.$img=e,this.type=t||"stretch",this.widthOnly=!1,this.heightOnly=!1};var t=MSAligner.prototype;t.init=function(t,i){switch(this.baseWidth=t,this.baseHeight=i,this.imgRatio=t/i,this.imgRatio2=i/t,this.type){case"tile":this.$container.css("background-image","url("+this.$img.attr("src")+")"),this.$img.remove();break;case"center":this.$container.css("background-image","url("+this.$img.attr("src")+")"),this.$container.css({backgroundPosition:"center center",backgroundRepeat:"no-repeat"}),this.$img.remove();break;case"stretch":this.$img.css({width:"100%",height:"100%"});break;case"fill":case"fit":this.needAlign=!0,this.align()}},t.align=function(){if(this.needAlign){var t=this.$container.width(),i=this.$container.height(),e=t/i;"fill"==this.type?this.imgRatio<e?(this.$img.width(t),this.$img.height(t*this.imgRatio2)):(this.$img.height(i),this.$img.width(i*this.imgRatio)):"fit"==this.type&&(this.imgRatio<e?(this.$img.height(i),this.$img.width(i*this.imgRatio)):(this.$img.width(t),this.$img.height(t*this.imgRatio2))),this.setMargin()}},t.setMargin=function(){var t=this.$container.width(),i=this.$container.height();this.$img.css("margin-top",(i-this.$img[0].offsetHeight)/2+"px"),this.$img.css("margin-left",(t-this.$img[0].offsetWidth)/2+"px")}}(),function(){"use strict";var t={bouncing:!0,snapping:!1,snapsize:null,friction:.05,outFriction:.05,outAcceleration:.09,minValidDist:.3,snappingMinSpeed:2,paging:!1,endless:!1,maxSpeed:160},i=function(i,e,s){if(null===e||null===i)throw new Error("Max and Min values are required.");for(var n in this.options=s||{},t)n in this.options||(this.options[n]=t[n]);this._max_value=e,this._min_value=i,this.value=i,this.end_loc=i,this.current_snap=this.getSnapNum(i),this.__extrStep=0,this.__extraMove=0,this.__animID=-1},e=i.prototype;e.changeTo=function(t,i,e,s,n){if(this.stopped=!1,this._internalStop(),t=this._checkLimits(t),e=Math.abs(e||0),this.options.snapping&&(s=s||this.getSnapNum(t),!1!==n&&this._callsnapChange(s),this.current_snap=s),i){this.animating=!0;var o=this,a=++o.__animID,r=t-o.value,h=0,l=t,d=1-o.options.friction,c=d+(e-20)*d*1.3/o.options.maxSpeed,p=function(){if(a===o.__animID){var i=t-o.value;if(!(Math.abs(i)>o.options.minValidDist&&o.animating))return o.animating&&(o.value=t,o._callrenderer()),o.animating=!1,a!==o.__animID&&(o.__animID=-1),void o._callonComplete("anim");window.requestAnimationFrame(p),o.value=l-r*Math.exp(-++h*c),o._callrenderer()}};p()}else this.value=t,this._callrenderer()},e.drag=function(t){this.start_drag&&(this.drag_start_loc=this.value,this.start_drag=!1),this.animating=!1,this._deceleration=!1,this.value-=t,!this.options.endless&&(this.value>this._max_value||this.value<0)?this.options.bouncing?(this.__isout=!0,this.value+=.6*t):this.value>this._max_value?this.value=this._max_value:this.value=0:!this.options.endless&&this.options.bouncing&&(this.__isout=!1),this._callrenderer()},e.push=function(t){if(this.stopped=!1,this.options.snapping&&Math.abs(t)<=this.options.snappingMinSpeed)this.cancel();else{if(this.__speed=t,this.__startSpeed=t,this.end_loc=this._calculateEnd(),this.options.snapping){var i=this.getSnapNum(this.value),e=this.getSnapNum(this.end_loc);if(this.options.paging)return i=this.getSnapNum(this.drag_start_loc),this.__isout=!1,void(t>0?this.gotoSnap(i+1,!0,t):this.gotoSnap(i-1,!0,t));if(i===e)return void this.cancel();this._callsnapChange(e),this.current_snap=e}this.animating=!1,this.__needsSnap=this.options.endless||this.end_loc>this._min_value&&this.end_loc<this._max_value,this.options.snapping&&this.__needsSnap&&(this.__extraMove=this._calculateExtraMove(this.end_loc)),this._startDecelaration()}},e.bounce=function(t){this.animating||(this.stopped=!1,this.animating=!1,this.__speed=t,this.__startSpeed=t,this.end_loc=this._calculateEnd(),this._startDecelaration())},e.stop=function(){this.stopped=!0,this._internalStop()},e.cancel=function(){this.start_drag=!0,this.__isout?(this.__speed=4e-4,this._startDecelaration()):this.options.snapping&&this.gotoSnap(this.getSnapNum(this.value),!0)},e.renderCallback=function(t,i){this.__renderHook={fun:t,ref:i}},e.snappingCallback=function(t,i){this.__snapHook={fun:t,ref:i}},e.snapCompleteCallback=function(t,i){this.__compHook={fun:t,ref:i}},e.getSnapNum=function(t){return Math.floor((t+this.options.snapsize/2)/this.options.snapsize)},e.nextSnap=function(){this._internalStop();var t=this.getSnapNum(this.value);!this.options.endless&&(t+1)*this.options.snapsize>this._max_value?(this.__speed=8,this.__needsSnap=!1,this._startDecelaration()):this.gotoSnap(t+1,!0)},e.prevSnap=function(){this._internalStop();var t=this.getSnapNum(this.value);!this.options.endless&&(t-1)*this.options.snapsize<this._min_value?(this.__speed=-8,this.__needsSnap=!1,this._startDecelaration()):this.gotoSnap(t-1,!0)},e.gotoSnap=function(t,i,e){this.changeTo(t*this.options.snapsize,i,e,t)},e.destroy=function(){this._internalStop(),this.__renderHook=null,this.__snapHook=null,this.__compHook=null},e._internalStop=function(){this.start_drag=!0,this.animating=!1,this._deceleration=!1,this.__extrStep=0},e._calculateExtraMove=function(t){var i=t%this.options.snapsize;return i<this.options.snapsize/2?-i:this.options.snapsize-i},e._calculateEnd=function(t){for(var i=this.__speed,e=this.value,s=0;Math.abs(i)>this.options.minValidDist;)e+=i,i*=this.options.friction,s++;return t?s:e},e._checkLimits=function(t){return this.options.endless?t:t<this._min_value?this._min_value:t>this._max_value?this._max_value:t},e._callrenderer=function(){this.__renderHook&&this.__renderHook.fun.call(this.__renderHook.ref,this,this.value)},e._callsnapChange=function(t){this.__snapHook&&t!==this.current_snap&&this.__snapHook.fun.call(this.__snapHook.ref,this,t,t-this.current_snap)},e._callonComplete=function(t){this.__compHook&&!this.stopped&&this.__compHook.fun.call(this.__compHook.ref,this,this.current_snap,t)},e._computeDeceleration=function(){if(this.options.snapping&&this.__needsSnap){var t=(this.__startSpeed-this.__speed)/this.__startSpeed*this.__extraMove;this.value+=this.__speed+t-this.__extrStep,this.__extrStep=t}else this.value+=this.__speed;if(this.__speed*=this.options.friction,this.options.endless||this.options.bouncing||(this.value<=this._min_value?(this.value=this._min_value,this.__speed=0):this.value>=this._max_value&&(this.value=this._max_value,this.__speed=0)),this._callrenderer(),!this.options.endless&&this.options.bouncing){var i=0;this.value<this._min_value?i=this._min_value-this.value:this.value>this._max_value&&(i=this._max_value-this.value),this.__isout=Math.abs(i)>=this.options.minValidDist,this.__isout&&(this.__speed*i<=0?this.__speed+=i*this.options.outFriction:this.__speed=i*this.options.outAcceleration)}},e._startDecelaration=function(){if(!this._deceleration){this._deceleration=!0;var t=this,i=function(){t._deceleration&&(t._computeDeceleration(),Math.abs(t.__speed)>t.options.minValidDist||t.__isout?window.requestAnimationFrame(i):(t._deceleration=!1,t.__isout=!1,t.__needsSnap&&t.options.snapping&&!t.options.paging?t.value=t._checkLimits(t.end_loc+t.__extraMove):t.value=Math.round(t.value),t._callrenderer(),t._callonComplete("decel")))};i()}},window.Controller=i}(),function(t,i,e){t.MSLayerController=function(t){this.slide=t,this.slider=t.slider,this.layers=[],this.layersCount=0,this.preloadCount=0,this.$layers=e("<div></div>").addClass("ms-slide-layers"),this.$staticLayers=e("<div></div>").addClass("ms-static-layers"),this.$fixedLayers=e("<div></div>").addClass("ms-fixed-layers"),this.$animLayers=e("<div></div>").addClass("ms-anim-layers")};var s=MSLayerController.prototype;s.addLayer=function(t){switch(t.slide=this.slide,t.controller=this,t.$element.data("position")){case"static":this.hasStaticLayer=!0,t.$element.appendTo(this.$staticLayers);break;case"fixed":this.hasFixedLayer=!0,t.$element.appendTo(this.$fixedLayers);break;default:t.$element.appendTo(this.$animLayers)}t.create(),this.layers.push(t),this.layersCount++,t.parallax&&(this.hasParallaxLayer=!0),t.needPreload&&this.preloadCount++},s.create=function(){this.slide.$element.append(this.$layers),this.$layers.append(this.$animLayers),this.hasStaticLayer&&this.$layers.append(this.$staticLayers),"center"==this.slider.options.layersMode&&(this.$layers.css("max-width",this.slider.options.width+"px"),this.hasFixedLayer&&this.$fixedLayers.css("max-width",this.slider.options.width+"px"))},s.loadLayers=function(t){if(this._onReadyCallback=t,0!==this.preloadCount)for(var i=0;i!==this.layersCount;++i)this.layers[i].needPreload&&this.layers[i].loadImage();else this._onlayersReady()},s.prepareToShow=function(){this.hasParallaxLayer&&this._enableParallaxEffect(),this.hasFixedLayer&&this.$fixedLayers.prependTo(this.slide.view.$element)},s.showLayers=function(){this.layersHideTween&&this.layersHideTween.stop(!0),this.fixedLayersHideTween&&this.fixedLayersHideTween.stop(!0),this._resetLayers(),this.$animLayers.css("opacity","").css("display",""),this.hasFixedLayer&&this.$fixedLayers.css("opacity","").css("display",""),this.ready&&(this._initLayers(),this._locateLayers(),this._startLayers())},s.hideLayers=function(){if(this.slide.selected||this.slider.options.instantStartLayers){var t=this;t.layersHideTween=CTween.animate(this.$animLayers,500,{opacity:0},{complete:function(){t._resetLayers()}}),this.hasFixedLayer&&(this.fixedLayersHideTween=CTween.animate(this.$fixedLayers,500,{opacity:0},{complete:function(){t.$fixedLayers.detach()}})),this.hasParallaxLayer&&this._disableParallaxEffect()}},s.animHideLayers=function(){if(this.ready)for(var t=0;t!==this.layersCount;++t)this.layers[t].hide()},s.setSize=function(t,i,e){if(this.ready&&(this.slide.selected||this.hasStaticLayer)&&(e&&this._initLayers(!0),this._locateLayers(!this.slide.selected)),this.slider.options.autoHeight&&this.updateHeight(),"center"==this.slider.options.layersMode){var s=Math.max(0,(t-this.slider.options.width)/2)+"px";this.$layers[0].style.left=s,this.$fixedLayers[0].style.left=s}},s.updateHeight=function(){var t=this.slide.getHeight()+"px";this.$layers[0].style.height=t,this.$fixedLayers[0].style.height=t},s._onlayersReady=function(){this.ready=!0,this.hasStaticLayer&&!this.slide.isSleeping&&this._initLayers(!1,!0),this._onReadyCallback.call(this.slide)},s.onSlideSleep=function(){},s.onSlideWakeup=function(){this.hasStaticLayer&&this.ready&&this._initLayers(!1,!0)},s.destroy=function(){this.slide.selected&&this.hasParallaxLayer&&this._disableParallaxEffect();for(var t=0;t<this.layersCount;++t)this.layers[t].$element.stop(!0).remove();this.$layers.remove(),this.$staticLayers.remove(),this.$fixedLayers.remove(),this.$animLayers.remove()},s._startLayers=function(){for(var t=0;t!==this.layersCount;++t)this.layers[t].start()},s._initLayers=function(t,i){if(!(this.init&&!t||this.slider.init_safemode)){this.init=!0!==i;var e=0;if(i&&!this.staticsInit)for(this.staticsInit=!0;e!==this.layersCount;++e)this.layers[e].staticLayer&&this.layers[e].init();else if(this.staticsInit&&!t)for(;e!==this.layersCount;++e)this.layers[e].staticLayer||this.layers[e].init();else for(;e!==this.layersCount;++e)this.layers[e].init()}},s._locateLayers=function(t){var i=0;if(t)for(;i!==this.layersCount;++i)this.layers[i].staticLayer&&this.layers[i].locate();else for(;i!==this.layersCount;++i)this.layers[i].locate()},s._resetLayers=function(){this.$animLayers.css("display","none").css("opacity",1);for(var t=0;t!==this.layersCount;++t)this.layers[t].reset()},s._applyParallax=function(t,i,e){for(var s=0;s!==this.layersCount;++s)null!=this.layers[s].parallax&&this.layers[s].moveParallax(t,i,e)},s._enableParallaxEffect=function(){"swipe"===this.slider.options.parallaxMode?this.slide.view.addEventListener(MSViewEvents.SCROLL,this._swipeParallaxMove,this):this.slide.$element.on("mousemove",{that:this},this._mouseParallaxMove).on("mouseleave",{that:this},this._resetParalax)},s._disableParallaxEffect=function(){"swipe"===this.slider.options.parallaxMode?this.slide.view.removeEventListener(MSViewEvents.SCROLL,this._swipeParallaxMove,this):this.slide.$element.off("mousemove",this._mouseParallaxMove).off("mouseleave",this._resetParalax)},s._resetParalax=function(t){var i=t.data.that;i._applyParallax(0,0)},s._mouseParallaxMove=function(t){var i=t.data.that,e=i.slide.$element.offset(),s=i.slider;if("mouse:y-only"!==s.options.parallaxMode)var n=t.pageX-e.left-i.slide.__width/2;else n=0;if("mouse:x-only"!==s.options.parallaxMode)var o=t.pageY-e.top-i.slide.__height/2;else o=0;i._applyParallax(-n,-o)},s._swipeParallaxMove=function(t){var i=this.slide.position-this.slide.view.__contPos;"v"===this.slider.options.dir?this._applyParallax(0,i,!0):this._applyParallax(i,0,!0)}}(window,document,jQuery),function(t){window.MSLayerEffects={};var i,e={opacity:0};MSLayerEffects.setup=function(){if(!i){i=!0;var s=MSLayerEffects,n=window._jcsspfx+"Transform",o=window._jcsspfx+"TransformOrigin",a=t.browser.opera;_2d=window._css2d&&window._cssanim&&!a,s.defaultValues={left:0,top:0,opacity:isMSIE("<=9")?1:"",right:0,bottom:0},s.defaultValues[n]="",s.rf=1,s.presetEffParams={random:"30|300",long:300,short:30,false:!1,true:!0,tl:"top left",bl:"bottom left",tr:"top right",br:"bottom right",rt:"top right",lb:"bottom left",lt:"top left",rb:"bottom right",t:"top",b:"bottom",r:"right",l:"left",c:"center"},s.fade=function(){return e},s.left=_2d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="translateX("+-t*s.rf+"px)",e}:function(t,i){var e=!1===i?{}:{opacity:0};return e.left=-t*s.rf+"px",e},s.right=_2d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="translateX("+t*s.rf+"px)",e}:function(t,i){var e=!1===i?{}:{opacity:0};return e.left=t*s.rf+"px",e},s.top=_2d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="translateY("+-t*s.rf+"px)",e}:function(t,i){var e=!1===i?{}:{opacity:0};return e.top=-t*s.rf+"px",e},s.bottom=_2d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="translateY("+t*s.rf+"px)",e}:function(t,i){var e=!1===i?{}:{opacity:0};return e.top=t*s.rf+"px",e},s.from=_2d?function(t,i,e){var o=!1===e?{}:{opacity:0};return o[n]="translateX("+t*s.rf+"px) translateY("+i*s.rf+"px)",o}:function(t,i,e){var n=!1===e?{}:{opacity:0};return n.top=i*s.rf+"px",n.left=t*s.rf+"px",n},s.rotate=_2d?function(t,i){var e={opacity:0};return e[n]=" rotate("+t+"deg)",i&&(e[o]=i),e}:function(t,i){return e},s.rotateleft=_2d?function(t,i,e,a){var r=s.left(i,a);return r[n]+=" rotate("+t+"deg)",e&&(r[o]=e),r}:function(t,i,e,n){return s.left(i,n)},s.rotateright=_2d?function(t,i,e,a){var r=s.right(i,a);return r[n]+=" rotate("+t+"deg)",e&&(r[o]=e),r}:function(t,i,e,n){return s.right(i,n)},s.rotatetop=_2d?function(t,i,e,a){var r=s.top(i,a);return r[n]+=" rotate("+t+"deg)",e&&(r[o]=e),r}:function(t,i,e,n){return s.top(i,n)},s.rotatebottom=_2d?function(t,i,e,a){var r=s.bottom(i,a);return r[n]+=" rotate("+t+"deg)",e&&(r[o]=e),r}:function(t,i,e,n){return s.bottom(i,n)},s.rotatefrom=_2d?function(t,i,e,a,r){var h=s.from(i,e,r);return h[n]+=" rotate("+t+"deg)",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.from(i,e,o)},s.skewleft=_2d?function(t,i,e){var o=s.left(i,e);return o[n]+=" skewX("+t+"deg)",o}:function(t,i,e){return s.left(i,e)},s.skewright=_2d?function(t,i,e){var o=s.right(i,e);return o[n]+=" skewX("+-t+"deg)",o}:function(t,i,e){return s.right(i,e)},s.skewtop=_2d?function(t,i,e){var o=s.top(i,e);return o[n]+=" skewY("+t+"deg)",o}:function(t,i,e){return s.top(i,e)},s.skewbottom=_2d?function(t,i,e){var o=s.bottom(i,e);return o[n]+=" skewY("+-t+"deg)",o}:function(t,i,e){return s.bottom(i,e)},s.scale=_2d?function(t,i,e,s){var a=!1===s?{}:{opacity:0};return a[n]=" scaleX("+t+") scaleY("+i+")",e&&(a[o]=e),a}:function(t,i,e,s){return!1===s?{}:{opacity:0}},s.scaleleft=_2d?function(t,i,e,a,r){var h=s.left(e,r);return h[n]=" scaleX("+t+") scaleY("+i+")",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.left(e,o)},s.scaleright=_2d?function(t,i,e,a,r){var h=s.right(e,r);return h[n]=" scaleX("+t+") scaleY("+i+")",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.right(e,o)},s.scaletop=_2d?function(t,i,e,a,r){var h=s.top(e,r);return h[n]=" scaleX("+t+") scaleY("+i+")",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.top(e,o)},s.scalebottom=_2d?function(t,i,e,a,r){var h=s.bottom(e,r);return h[n]=" scaleX("+t+") scaleY("+i+")",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.bottom(e,o)},s.scalefrom=_2d?function(t,i,e,a,r,h){var l=s.from(e,a,h);return l[n]+=" scaleX("+t+") scaleY("+i+")",r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.from(e,n,a)},s.rotatescale=_2d?function(t,i,e,a,r){var h=s.scale(i,e,a,r);return h[n]+=" rotate("+t+"deg)",a&&(h[o]=a),h}:function(t,i,e,n,o){return s.scale(i,e,n,o)},s.front=window._css3d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="perspective(2000px) translate3d(0 , 0 ,"+t+"px ) rotate(0.001deg)",e}:function(t){return e},s.back=window._css3d?function(t,i){var e=!1===i?{}:{opacity:0};return e[n]="perspective(2000px) translate3d(0 , 0 ,"+-t+"px ) rotate(0.001deg)",e}:function(t){return e},s.rotatefront=window._css3d?function(t,i,e,s){var a=!1===s?{}:{opacity:0};return a[n]="perspective(2000px) translate3d(0 , 0 ,"+i+"px ) rotate("+(t||.001)+"deg)",e&&(a[o]=e),a}:function(t,i,s,n){return e},s.rotateback=window._css3d?function(t,i,e,s){var a=!1===s?{}:{opacity:0};return a[n]="perspective(2000px) translate3d(0 , 0 ,"+-i+"px ) rotate("+(t||.001)+"deg)",e&&(a[o]=e),a}:function(t,i,s,n){return e},s.rotate3dleft=window._css3d?function(t,i,e,a,r,h){var l=s.left(a,h);return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.left(n,a)},s.rotate3dright=window._css3d?function(t,i,e,a,r,h){var l=s.right(a,h);return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.right(n,a)},s.rotate3dtop=window._css3d?function(t,i,e,a,r,h){var l=s.top(a,h)
;return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.top(n,a)},s.rotate3dbottom=window._css3d?function(t,i,e,a,r,h){var l=s.bottom(a,h);return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.bottom(n,a)},s.rotate3dfront=window._css3d?function(t,i,e,a,r,h){var l=s.front(a,h);return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.front(n,a)},s.rotate3dback=window._css3d?function(t,i,e,a,r,h){var l=s.back(a,h);return l[n]+=(t?" rotateX("+t+"deg)":" ")+(i?" rotateY("+i+"deg)":"")+(e?" rotateZ("+e+"deg)":""),r&&(l[o]=r),l}:function(t,i,e,n,o,a){return s.back(n,a)},s.t=window._css3d?function(t,i,e,a,r,h,l,d,c,p,u,m,f,v,_){var w=!1===t?{}:{opacity:0},g="perspective(2000px) ";"n"!==i&&(g+="translateX("+i*s.rf+"px) "),"n"!==e&&(g+="translateY("+e*s.rf+"px) "),"n"!==a&&(g+="translateZ("+a*s.rf+"px) "),"n"!==r&&(g+="rotate("+r+"deg) "),"n"!==h&&(g+="rotateX("+h+"deg) "),"n"!==l&&(g+="rotateY("+l+"deg) "),"n"!==d&&(g+="rotateZ("+d+"deg) "),"n"!==u&&(g+="skewX("+u+"deg) "),"n"!==m&&(g+="skewY("+m+"deg) "),"n"!==c&&(g+="scaleX("+c+") "),"n"!==p&&(g+="scaleY("+p+")"),w[n]=g;var S="";return S+="n"!==f?f+"% ":"50% ",S+="n"!==v?v+"% ":"50% ",S+="n"!==_?_+"px":"",w[o]=S,w}:function(t,i,e,n,o,a,r,h,l,d,c,p,u,m,f){o=!1===t?{}:{opacity:0};return"n"!==i&&(o.left=i*s.rf+"px"),"n"!==e&&(o.top=e*s.rf+"px"),o}}}}(jQuery),function(t){window.MSLayerElement=function(){this.start_anim={name:"fade",duration:1e3,ease:"linear",delay:0},this.end_anim={duration:1e3,ease:"linear"},this.type="text",this.resizable=!0,this.minWidth=-1,this.isVisible=!0,this.__cssConfig=["margin-top","padding-top","margin-bottom","padding-left","margin-right","padding-right","margin-left","padding-bottom","font-size","line-height","width","left","right","top","bottom"],this.baseStyle={}};var i=MSLayerElement.prototype;i.setStartAnim=function(i){t.extend(this.start_anim,i),t.extend(this.start_anim,this._parseEff(this.start_anim.name)),this.$element.css("visibility","hidden")},i.setEndAnim=function(i){t.extend(this.end_anim,i)},i.create=function(){if(this.$element.css("display","none"),this.resizable=!1!==this.$element.data("resize"),this.fixed=!0===this.$element.data("fixed"),void 0!==this.$element.data("widthlimit")&&(this.minWidth=this.$element.data("widthlimit")),this.end_anim.name||(this.end_anim.name=this.start_anim.name),this.end_anim.time&&(this.autoHide=!0),this.staticLayer="static"===this.$element.data("position"),this.fixedLayer="fixed"===this.$element.data("position"),this.layersCont=this.controller.$layers,this.staticLayer&&this.$element.css("display","").css("visibility",""),void 0!==this.$element.data("action")){var i=this.slide.slider.slideController;this.$element.on("click",function(e){i.runAction(t(this).data("action")),e.preventDefault()}).addClass("ms-action-layer")}t.extend(this.end_anim,this._parseEff(this.end_anim.name)),this.slider=this.slide.slider;var e=this.layerOrigin=this.$element.data("origin");if(e){var s=e.charAt(0),n=e.charAt(1),o=this.$element.data("offset-x"),a=this.$element.data("offset-y");switch(void 0===a&&(a=0),s){case"t":this.$element[0].style.top=a+"px";break;case"b":this.$element[0].style.bottom=a+"px";break;case"m":this.$element[0].style.top=a+"px",this.middleAlign=!0}switch(void 0===o&&(o=0),n){case"l":this.$element[0].style.left=o+"px";break;case"r":this.$element[0].style.right=o+"px";break;case"c":this.$element[0].style.left=o+"px",this.centerAlign=!0}}this.parallax=this.$element.data("parallax"),null!=this.parallax&&(this.parallax/=100,this.$parallaxElement=t("<div></div>").addClass("ms-parallax-layer"),this.link?(this.link.wrap(this.$parallaxElement),this.$parallaxElement=this.link.parent()):(this.$element.wrap(this.$parallaxElement),this.$parallaxElement=this.$element.parent()),this._lastParaX=0,this._lastParaY=0,this._paraX=0,this._paraY=0,this.alignedToBot=this.layerOrigin&&-1!==this.layerOrigin.indexOf("b"),this.alignedToBot&&this.$parallaxElement.css("bottom",0),window._css3d?this.parallaxRender=this._parallaxCSS3DRenderer:window._css2d?this.parallaxRender=this._parallaxCSS2DRenderer:this.parallaxRender=this._parallax2DRenderer,"swipe"!==this.slider.options.parallaxMode&&averta.Ticker.add(this.parallaxRender,this)),t.removeDataAttrs(this.$element,["data-src"])},i.init=function(){var t;this.initialized=!0,this.$element.css("visibility","");for(var i=0,e=this.__cssConfig.length;i<e;i++){var s=this.__cssConfig[i];"text"===this.type&&"width"===s?t=this.$element[0].style.width:(t=this.$element.css(s),"width"!==s&&"height"!==s||"0px"!==t||(t=this.$element.data(s)+"px")),"auto"!=t&&""!=t&&"normal"!=t&&(this.baseStyle[s]=parseInt(t))}this.middleAlign&&(this.baseHeight=this.$element.outerHeight(!1)),this.centerAlign&&(this.baseWidth=this.$element.outerWidth(!1))},i.locate=function(){if(this.slide.ready){var t,i,e=parseFloat(this.layersCont.css("width")),s=parseFloat(this.layersCont.css("height"));for(var n in!this.staticLayer&&"none"===this.$element.css("display")&&this.isVisible&&this.$element.css("display","").css("visibility","hidden"),t=this.resizeFactor=e/this.slide.slider.options.width,this.baseStyle)i="top"===n||"left"===n||"bottom"===n||"right"===n,t=this.fixed&&i?1:this.resizeFactor,(this.resizable||i)&&("top"===n&&this.middleAlign?(this.$element[0].style.top="0px",this.baseHeight=this.$element.outerHeight(!1),this.$element[0].style.top=this.baseStyle.top*t+(s-this.baseHeight)/2+"px"):"left"===n&&this.centerAlign?(this.$element[0].style.left="0px",this.baseWidth=this.$element.outerWidth(!1),this.$element[0].style.left=this.baseStyle.left*t+(e-this.baseWidth)/2+"px"):this.$element.css(n,this.baseStyle[n]*t+"px"));this.visible(this.minWidth<e)}},i.start=function(){if(!this.isShowing&&!this.staticLayer){var t,i;this.isShowing=!0,MSLayerEffects.rf=this.resizeFactor;var e=MSLayerEffects[this.start_anim.eff_name].apply(null,this._parseEffParams(this.start_anim.eff_params)),s={};for(t in e)this._checkPosKey(t,e)||(null!=MSLayerEffects.defaultValues[t]&&(s[t]=MSLayerEffects.defaultValues[t]),t in this.baseStyle&&(i=this.baseStyle[t],this.middleAlign&&"top"===t&&(i+=(parseInt(this.layersCont.height())-this.$element.outerHeight(!1))/2),this.centerAlign&&"left"===t&&(i+=(parseInt(this.layersCont.width())-this.$element.outerWidth(!1))/2),e[t]=i+parseFloat(e[t])+"px",s[t]=i+"px"),this.$element.css(t,e[t]));var n=this;clearTimeout(this.to),this.to=setTimeout(function(){n.$element.css("visibility",""),n._playAnimation(n.start_anim,s)},n.start_anim.delay||.01),this.clTo=setTimeout(function(){n.show_cl=!0},(this.start_anim.delay||.01)+this.start_anim.duration),this.autoHide&&(clearTimeout(this.hto),this.hto=setTimeout(function(){n.hide()},n.end_anim.time))}},i.hide=function(){if(!this.staticLayer){this.isShowing=!1;var t=MSLayerEffects[this.end_anim.eff_name].apply(null,this._parseEffParams(this.end_anim.eff_params));for(key in t)this._checkPosKey(key,t)||(key===window._jcsspfx+"TransformOrigin"&&this.$element.css(key,t[key]),key in this.baseStyle&&(t[key]=this.baseStyle[key]+parseFloat(t[key])+"px"));this._playAnimation(this.end_anim,t),clearTimeout(this.to),clearTimeout(this.hto),clearTimeout(this.clTo)}},i.reset=function(){this.staticLayer||(this.isShowing=!1,this.$element[0].style.display="none",this.$element.css("opacity",""),this.$element[0].style.transitionDuration="",this.show_tween&&this.show_tween.stop(!0),clearTimeout(this.to),clearTimeout(this.hto))},i.destroy=function(){this.reset(),this.$element.remove()},i.visible=function(t){this.isVisible!=t&&(this.isVisible=t,this.$element.css("display",t?"":"none"))},i.moveParallax=function(t,i,e){this._paraX=t,this._paraY=i,e&&(this._lastParaX=t,this._lastParaY=i,this.parallaxRender())},i._playAnimation=function(t,i){var e={};t.ease&&(e.ease=t.ease),e.transProperty=window._csspfx+"transform,opacity",this.show_tween=CTween.animate(this.$element,t.duration,i,e)},i._randomParam=function(t){var i=Number(t.slice(0,t.indexOf("|"))),e=Number(t.slice(t.indexOf("|")+1));return i+Math.random()*(e-i)},i._parseEff=function(t){var i=[];if(-1!==t.indexOf("(")){var e,s=t.slice(0,t.indexOf("(")).toLowerCase();i=t.slice(t.indexOf("(")+1,-1).replace(/\"|\'|\s/g,"").split(","),t=s;for(var n=0,o=i.length;n<o;++n)e=i[n],e in MSLayerEffects.presetEffParams&&(e=MSLayerEffects.presetEffParams[e]),i[n]=e}return{eff_name:t,eff_params:i}},i._parseEffParams=function(t){for(var i=[],e=0,s=t.length;e<s;++e){var n=t[e];"string"==typeof n&&-1!==n.indexOf("|")&&(n=this._randomParam(n)),i[e]=n}return i},i._checkPosKey=function(t,i){return"left"===t&&!(t in this.baseStyle)&&"right"in this.baseStyle?(i.right=-parseInt(i.left)+"px",delete i.left,!0):"top"===t&&!(t in this.baseStyle)&&"bottom"in this.baseStyle&&(i.bottom=-parseInt(i.top)+"px",delete i.top,!0)},i._parallaxCalc=function(){var t=this._paraX-this._lastParaX,i=this._paraY-this._lastParaY;this._lastParaX+=t/12,this._lastParaY+=i/12,Math.abs(t)<.019&&(this._lastParaX=this._paraX),Math.abs(i)<.019&&(this._lastParaY=this._paraY)},i._parallaxCSS3DRenderer=function(){this._parallaxCalc(),this.$parallaxElement[0].style[window._jcsspfx+"Transform"]="translateX("+this._lastParaX*this.parallax+"px) translateY("+this._lastParaY*this.parallax+"px) translateZ(0)"},i._parallaxCSS2DRenderer=function(){this._parallaxCalc(),this.$parallaxElement[0].style[window._jcsspfx+"Transform"]="translateX("+this._lastParaX*this.parallax+"px) translateY("+this._lastParaY*this.parallax+"px)"},i._parallax2DRenderer=function(){this._parallaxCalc(),this.alignedToBot?this.$parallaxElement[0].style.bottom=this._lastParaY*this.parallax+"px":this.$parallaxElement[0].style.top=this._lastParaY*this.parallax+"px",this.$parallaxElement[0].style.left=this._lastParaX*this.parallax+"px"}}(jQuery),function(t){window.MSImageLayerElement=function(){MSLayerElement.call(this),this.needPreload=!0,this.__cssConfig=["width","height","margin-top","padding-top","margin-bottom","padding-left","margin-right","padding-right","margin-left","padding-bottom","left","right","top","bottom"],this.type="image"},MSImageLayerElement.extend(MSLayerElement);var i=MSImageLayerElement.prototype,e=MSLayerElement.prototype;i.create=function(){if(this.link){var i=this.$element.parent();i.append(this.link),this.link.append(this.$element),this.link.removeClass("ms-layer"),this.$element.addClass("ms-layer"),i=null}if(e.create.call(this),null!=this.$element.data("src"))this.img_src=this.$element.data("src"),this.$element.removeAttr("data-src");else{var s=this;this.$element.on("load",function(t){s.controller.preloadCount--,0===s.controller.preloadCount&&s.controller._onlayersReady()}).each(t.jqLoadFix)}t.browser.msie&&this.$element.on("dragstart",function(t){t.preventDefault()})},i.loadImage=function(){var t=this;this.$element.preloadImg(this.img_src,function(i){t.controller.preloadCount--,0===t.controller.preloadCount&&t.controller._onlayersReady()})}}(jQuery),function(t){window.MSVideoLayerElement=function(){MSLayerElement.call(this),this.__cssConfig.push("height"),this.type="video"},MSVideoLayerElement.extend(MSLayerElement);var i=MSVideoLayerElement.prototype,e=MSLayerElement.prototype;i.__playVideo=function(){this.img&&CTween.fadeOut(this.img,500,2),CTween.fadeOut(this.video_btn,500,2),this.video_frame.attr("src","about:blank").css("display","block"),-1==this.video_url.indexOf("?")&&(this.video_url+="?"),this.video_frame.attr("src",this.video_url+"&autoplay=1")},i.start=function(){e.start.call(this),this.$element.data("autoplay")&&this.__playVideo()},i.reset=function(){e.reset.call(this),(this.needPreload||this.$element.data("btn"))&&(this.video_btn.css("opacity",1).css("display","block"),this.video_frame.attr("src","about:blank").css("display","none")),this.needPreload?this.img.css("opacity",1).css("display","block"):this.video_frame.attr("src",this.video_url)},i.create=function(){e.create.call(this),this.video_frame=this.$element.find("iframe").css({width:"100%",height:"100%"}),this.video_url=this.video_frame.attr("src");var i=0!=this.$element.has("img").length;if(i||this.$element.data("btn")){this.video_frame.attr("src","about:blank").css("display","none");var s=this;if(this.video_btn=t("<div></div>").appendTo(this.$element).addClass("ms-video-btn").click(function(){s.__playVideo()}),i){if(this.needPreload=!0,this.img=this.$element.find("img:first").addClass("ms-video-img"),void 0!==this.img.data("src"))this.img_src=this.img.data("src"),this.img.removeAttr("data-src");else{s=this;this.img.attr("src",this.img_src).on("load",function(t){s.controller.preloadCount--,0===s.controller.preloadCount&&s.controller._onlayersReady()}).each(t.jqLoadFix)}t.browser.msie&&this.img.on("dragstart",function(t){t.preventDefault()})}}},i.loadImage=function(){var t=this;this.img.preloadImg(this.img_src,function(i){t.controller.preloadCount--,0===t.controller.preloadCount&&t.controller._onlayersReady()})}}(jQuery),function(t){"use strict";window.MSHotspotLayer=function(){MSLayerElement.call(this),this.__cssConfig=["margin-top","padding-top","margin-bottom","padding-left","margin-right","padding-right","margin-left","padding-bottom","left","right","top","bottom"],this.ease="Expo",this.hide_start=!0,this.type="hotspot"},MSHotspotLayer.extend(MSLayerElement);var i=MSHotspotLayer.prototype,e=MSLayerElement.prototype;i._showTT=function(){this.show_cl&&(clearTimeout(this.hto),this._tween&&this._tween.stop(!0),this.hide_start&&(this.align=this._orgAlign,this._locateTT(),this.tt.css({display:"block"}),this._tween=CTween.animate(this.tt,900,this.to,{ease:"easeOut"+this.ease}),this.hide_start=!1))},i._hideTT=function(){if(this.show_cl){this._tween&&this._tween.stop(!0);var t=this;clearTimeout(this.hto),this.hto=setTimeout(function(){t.hide_start=!0,t._tween=CTween.animate(t.tt,900,t.from,{ease:"easeOut"+t.ease,complete:function(){t.tt.css("display","none")}})},200)}},i._updateClassName=function(t){this._lastClass&&this.tt.removeClass(this._lastClass),this.tt.addClass(t),this._lastClass=t},i._alignPolicy=function(){this.tt.outerHeight(!1);var t=Math.max(this.tt.outerWidth(!1),parseInt(this.tt.css("max-width"))),i=window.innerWidth;window.innerHeight;switch(this.align){case"top":if(this.base_t<0)return"bottom";break;case"right":if(this.base_l+t>i||this.base_t<0)return"bottom";break;case"left":if(this.base_l<0||this.base_t<0)return"bottom"}return null},i._locateTT=function(){var t=this.$element.offset(),i=this.slide.slider.$element.offset(),e=50,s=15;this.pos_x=t.left-i.left-this.slide.slider.$element.scrollLeft(),this.pos_y=t.top-i.top-this.slide.slider.$element.scrollTop(),this.from={opacity:0},this.to={opacity:1},this._updateClassName("ms-tooltip-"+this.align),this.tt_arrow.css("margin-left","");var n=15,o=15;switch(this.align){case"top":var a=Math.min(this.tt.outerWidth(!1),parseInt(this.tt.css("max-width")));this.base_t=this.pos_y-this.tt.outerHeight(!1)-o-s,this.base_l=this.pos_x-a/2,this.base_l+a>window.innerWidth&&(this.tt_arrow.css("margin-left",-n/2+this.base_l+a-window.innerWidth+"px"),this.base_l=window.innerWidth-a),this.base_l<0&&(this.base_l=0,this.tt_arrow.css("margin-left",-n/2+this.pos_x-this.tt.outerWidth(!1)/2+"px")),window._css3d?(this.from[window._jcsspfx+"Transform"]="translateY(-"+e+"px)",this.to[window._jcsspfx+"Transform"]=""):(this.from.top=this.base_t-e+"px",this.to.top=this.base_t+"px");break;case"bottom":a=Math.min(this.tt.outerWidth(!1),parseInt(this.tt.css("max-width")));this.base_t=this.pos_y+o+s,this.base_l=this.pos_x-a/2,this.base_l+a>window.innerWidth&&(this.tt_arrow.css("margin-left",-n/2+this.base_l+a-window.innerWidth+"px"),this.base_l=window.innerWidth-a),this.base_l<0&&(this.base_l=0,this.tt_arrow.css("margin-left",-n/2+this.pos_x-this.tt.outerWidth(!1)/2+"px")),window._css3d?(this.from[window._jcsspfx+"Transform"]="translateY("+e+"px)",this.to[window._jcsspfx+"Transform"]=""):(this.from.top=this.base_t+e+"px",this.to.top=this.base_t+"px");break;case"right":this.base_l=this.pos_x+n+s,this.base_t=this.pos_y-this.tt.outerHeight(!1)/2,window._css3d?(this.from[window._jcsspfx+"Transform"]="translateX("+e+"px)",this.to[window._jcsspfx+"Transform"]=""):(this.from.left=this.base_l+e+"px",this.to.left=this.base_l+"px");break;case"left":this.base_l=this.pos_x-n-this.tt.outerWidth(!1)-s,this.base_t=this.pos_y-this.tt.outerHeight(!1)/2,window._css3d?(this.from[window._jcsspfx+"Transform"]="translateX(-"+e+"px)",this.to[window._jcsspfx+"Transform"]=""):(this.from.left=this.base_l-e+"px",this.to.left=this.base_l+"px")}var r=this._alignPolicy();if(null!==r)return this.align=r,void this._locateTT();this.tt.css("top",parseInt(this.base_t)+"px").css("left",parseInt(this.base_l)+"px"),this.tt.css(this.from)},i.start=function(){e.start.call(this),this.tt.appendTo(this.slide.slider.$element),this.tt.css("display","none")},i.reset=function(){e.reset.call(this),this.tt.detach()},i.create=function(){var i=this;this._orgAlign=this.align=void 0!==this.$element.data("align")?this.$element.data("align"):"top",this.data=this.$element.html(),this.$element.html("").on("mouseenter",function(){i._showTT()}).on("mouseleave",function(){i._hideTT()}),this.point=t('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>').addClass("ms-tooltip-point").appendTo(this.$element);var s=this.$element.data("link"),n=this.$element.data("target");s&&this.point.on("click",function(){window.open(s,n||"_self")}),this.tt=t("<div></div>").addClass("ms-tooltip").css("display","hidden").css("opacity",0),void 0!==this.$element.data("width")&&this.tt.css("width",this.$element.data("width")).css("max-width",this.$element.data("width")),this.tt_arrow=t("<div></div>").addClass("ms-tooltip-arrow").appendTo(this.tt),this._updateClassName("ms-tooltip-"+this.align),this.ttcont=t("<div></div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt),!0===this.$element.data("stay-hover")&&this.tt.on("mouseenter",function(){i.hide_start||(clearTimeout(i.hto),i._tween.stop(!0),i._showTT())}).on("mouseleave",function(){i._hideTT()}),e.create.call(this)}}(jQuery),function(t){window.MSButtonLayer=function(){MSLayerElement.call(this),this.type="button"},MSButtonLayer.extend(MSLayerElement);var i=MSButtonLayer.prototype,e=MSLayerElement.prototype,s=["top","left","bottom","right"];i.create=function(){e.create.call(this),this.$element.wrap('<div class="ms-btn-container"></div>').css("position","relative"),this.$container=this.$element.parent()},i.locate=function(){var t,i;e.locate.call(this);for(var n=0;n<4;n++)t=s[n],t in this.baseStyle&&(i=this.$element.css(t),this.$element.css(t,""),this.$container.css(t,i));this.$container.width(this.$element.outerWidth(!0)).height(this.$element.outerHeight(!0))}}(jQuery),window.MSSliderEvent=function(t){this.type=t},MSSliderEvent.CHANGE_START="ms_changestart",MSSliderEvent.CHANGE_END="ms_changeend",MSSliderEvent.WAITING="ms_waiting",MSSliderEvent.AUTOPLAY_CHANGE="ms_autoplaychange",MSSliderEvent.VIDEO_PLAY="ms_videoPlay",MSSliderEvent.VIDEO_CLOSE="ms_videoclose",MSSliderEvent.INIT="ms_init",MSSliderEvent.HARD_UPDATE="ms_hard_update",MSSliderEvent.RESIZE="ms_resize",MSSliderEvent.RESERVED_SPACE_CHANGE="ms_rsc",MSSliderEvent.DESTROY="ms_destroy",function(t,i,e){"use strict";t.MSSlide=function(){this.$element=null,this.$loading=e("<div></div>").addClass("ms-slide-loading"),this.view=null,this.index=-1,this.__width=0,this.__height=0,this.fillMode="fill",this.selected=!1,this.pselected=!1,this.autoAppend=!0,this.isSleeping=!0,this.moz=e.browser.mozilla};var s=MSSlide.prototype;s.onSwipeStart=function(){this.link&&(this.linkdis=!0),this.video&&(this.videodis=!0)},s.onSwipeMove=function(t){var i=Math.max(Math.abs(t.data.distanceX),Math.abs(t.data.distanceY));this.swipeMoved=i>4},s.onSwipeCancel=function(t){this.swipeMoved?this.swipeMoved=!1:(this.link&&(this.linkdis=!1),this.video&&(this.videodis=!1))},s.setupLayerController=function(){this.hasLayers=!0,this.layerController=new MSLayerController(this)},s.assetsLoaded=function(){this.ready=!0,this.slider.api._startTimer(),(this.selected||this.pselected&&this.slider.options.instantStartLayers)&&(this.hasLayers&&this.layerController.showLayers(),this.vinit&&(this.bgvideo.play(),this.autoPauseBgVid||(this.bgvideo.currentTime=0))),this.isSleeping||this.setupBG(),CTween.fadeOut(this.$loading,300,!0),(0===this.slider.options.preload||"all"===this.slider.options.preload)&&this.index<this.view.slideList.length-1?this.view.slideList[this.index+1].loadImages():"all"===this.slider.options.preload&&this.index===this.view.slideList.length-1&&this.slider._removeLoading()},s.setBG=function(t){this.hasBG=!0;var i=this;this.$imgcont=e("<div></div>").addClass("ms-slide-bgcont"),this.$element.append(this.$loading).append(this.$imgcont),this.$bg_img=e(t).css("visibility","hidden"),this.$imgcont.append(this.$bg_img),this.bgAligner=new MSAligner(i.fillMode,i.$imgcont,i.$bg_img),this.bgAligner.widthOnly=this.slider.options.autoHeight,i.slider.options.autoHeight&&(i.pselected||i.selected)&&i.slider.setHeight(i.slider.options.height),void 0!==this.$bg_img.data("src")?(this.bg_src=this.$bg_img.data("src"),this.$bg_img.removeAttr("data-src")):this.$bg_img.one("load",function(t){i._onBGLoad(t)}).each(e.jqLoadFix)},s.setupBG=function(){!this.initBG&&this.bgLoaded&&(this.initBG=!0,this.$bg_img.css("visibility",""),this.bgWidth=this.bgNatrualWidth||this.$bg_img.width(),this.bgHeight=this.bgNatrualHeight||this.$bg_img.height(),CTween.fadeIn(this.$imgcont,300),this.slider.options.autoHeight&&this.$imgcont.height(this.bgHeight*this.ratio),this.bgAligner.init(this.bgWidth,this.bgHeight),this.setSize(this.__width,this.__height),this.slider.options.autoHeight&&(this.pselected||this.selected)&&this.slider.setHeight(this.getHeight()))},s.loadImages=function(){if(!this.ls){if(this.ls=!0,this.bgvideo&&this.bgvideo.load(),this.hasBG&&this.bg_src){var t=this;this.$bg_img.preloadImg(this.bg_src,function(i){t._onBGLoad(i)})}this.hasLayers&&this.layerController.loadLayers(this._onLayersLoad),this.hasBG||this.hasLayers||this.assetsLoaded()}},s._onLayersLoad=function(){this.layersLoaded=!0,this.hasBG&&!this.bgLoaded||this.assetsLoaded()},s._onBGLoad=function(t){this.bgNatrualWidth=t.width,this.bgNatrualHeight=t.height,this.bgLoaded=!0,e.browser.msie&&this.$bg_img.on("dragstart",function(t){t.preventDefault()}),this.hasLayers&&!this.layerController.ready||this.assetsLoaded()},s.setBGVideo=function(i){if(i[0].play)if(t._mobile)i.remove();else{this.bgvideo=i[0];var s=this;i.addClass("ms-slide-bgvideo"),!1!==i.data("loop")&&this.bgvideo.addEventListener("ended",function(){s.bgvideo.play()}),!1!==i.data("mute")&&(this.bgvideo.muted=!0),!0===i.data("autopause")&&(this.autoPauseBgVid=!0),this.bgvideo_fillmode=i.data("fill-mode")||"fill","none"!==this.bgvideo_fillmode&&(this.bgVideoAligner=new MSAligner(this.bgvideo_fillmode,this.$element,i),this.bgvideo.addEventListener("loadedmetadata",function(){s.vinit||(s.vinit=!0,s.video_aspect=s.bgVideoAligner.baseHeight/s.bgVideoAligner.baseWidth,s.bgVideoAligner.init(s.bgvideo.videoWidth,s.bgvideo.videoHeight),s._alignBGVideo(),CTween.fadeIn(e(s.bgvideo),200),s.selected&&s.bgvideo.play())})),i.css("opacity",0),this.$bgvideocont=e("<div></div>").addClass("ms-slide-bgvideocont").append(i),this.hasBG?this.$imgcont.before(this.$bgvideocont):this.$bgvideocont.appendTo(this.$element)}},s._alignBGVideo=function(){this.bgvideo_fillmode&&"none"!==this.bgvideo_fillmode&&this.bgVideoAligner.align()},s.setSize=function(t,i,e){this.__width=t,this.slider.options.autoHeight&&(this.bgLoaded?(this.ratio=this.__width/this.bgWidth,i=Math.floor(this.ratio*this.bgHeight),this.$imgcont.height(i)):(this.ratio=t/this.slider.options.width,i=this.slider.options.height*this.ratio)),this.__height=i,this.$element.width(t).height(i),this.hasBG&&this.bgLoaded&&this.bgAligner.align(),this._alignBGVideo(),this.hasLayers&&this.layerController.setSize(t,i,e)},s.getHeight=function(){return this.hasBG&&this.bgLoaded?this.bgHeight*this.ratio:Math.max(this.$element[0].clientHeight,this.slider.options.height*this.ratio)},s.__playVideo=function(){this.vplayed||this.videodis||(this.vplayed=!0,this.slider.api.paused||(this.slider.api.pause(),this.roc=!0),this.vcbtn.css("display",""),CTween.fadeOut(this.vpbtn,500,!1),CTween.fadeIn(this.vcbtn,500),CTween.fadeIn(this.vframe,500),this.vframe.css("display","block").attr("src",this.video+"&autoplay=1"),this.view.$element.addClass("ms-def-cursor"),this.moz&&this.view.$element.css("perspective","none"),this.view.swipeControl&&this.view.swipeControl.disable(),this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))},s.__closeVideo=function(){if(this.vplayed){this.vplayed=!1,this.roc&&this.slider.api.resume();var t=this;CTween.fadeIn(this.vpbtn,500),CTween.animate(this.vcbtn,500,{opacity:0},{complete:function(){t.vcbtn.css("display","none")}}),CTween.animate(this.vframe,500,{opacity:0},{complete:function(){t.vframe.attr("src","about:blank").css("display","none")}}),this.moz&&this.view.$element.css("perspective",""),this.view.swipeControl&&this.view.swipeControl.enable(),this.view.$element.removeClass("ms-def-cursor"),this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))}},s.create=function(){var i=this;this.hasLayers&&this.layerController.create(),this.link&&this.link.addClass("ms-slide-link").html("").click(function(t){i.linkdis&&t.preventDefault()}),this.video&&(-1===this.video.indexOf("?")&&(this.video+="?"),this.vframe=e("<iframe></iframe>").addClass("ms-slide-video").css({width:"100%",height:"100%",display:"none"}).attr("src","about:blank").attr("allowfullscreen","true").appendTo(this.$element),this.vpbtn=e("<div></div>").addClass("ms-slide-vpbtn").click(function(){i.__playVideo()}).appendTo(this.$element),this.vcbtn=e("<div></div>").addClass("ms-slide-vcbtn").click(function(){i.__closeVideo()}).appendTo(this.$element).css("display","none"),t._touch&&this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())),!this.slider.options.autoHeight&&this.hasBG&&(this.$imgcont.css("height","100%"),"center"!==this.fillMode&&"stretch"!==this.fillMode||(this.fillMode="fill")),this.slider.options.autoHeight&&this.$element.addClass("ms-slide-auto-height"),this.sleep(!0)},s.destroy=function(){this.hasLayers&&(this.layerController.destroy(),this.layerController=null),this.$element.remove(),this.$element=null},s.prepareToSelect=function(){this.pselected||this.selected||(this.pselected=!0,(this.link||this.video)&&(this.view.addEventListener(MSViewEvents.SWIPE_START,this.onSwipeStart,this),this.view.addEventListener(MSViewEvents.SWIPE_MOVE,this.onSwipeMove,this),this.view.addEventListener(MSViewEvents.SWIPE_CANCEL,this.onSwipeCancel,this),this.linkdis=!1,this.swipeMoved=!1),this.loadImages(),this.hasLayers&&this.layerController.prepareToShow(),this.ready&&(this.bgvideo&&this.bgvideo.play(),this.hasLayers&&this.slider.options.instantStartLayers&&this.layerController.showLayers()),this.moz&&this.$element.css("margin-top",""))},s.select=function(){this.selected||(this.selected=!0,this.pselected=!1,this.$element.addClass("ms-sl-selected"),this.hasLayers&&(this.slider.options.autoHeight&&this.layerController.updateHeight(),this.slider.options.instantStartLayers||this.layerController.showLayers()),this.ready&&this.bgvideo&&this.bgvideo.play(),this.videoAutoPlay&&(this.videodis=!1,this.vpbtn.trigger("click")))},s.unselect=function(){this.pselected=!1,this.moz&&this.$element.css("margin-top","0.1px"),(this.link||this.video)&&(this.view.removeEventListener(MSViewEvents.SWIPE_START,this.onSwipeStart,this),this.view.removeEventListener(MSViewEvents.SWIPE_MOVE,this.onSwipeMove,this),this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL,this.onSwipeCancel,this)),this.bgvideo&&(this.bgvideo.pause(),!this.autoPauseBgVid&&this.vinit&&(this.bgvideo.currentTime=0)),this.hasLayers&&this.layerController.hideLayers(),this.selected&&(this.selected=!1,this.$element.removeClass("ms-sl-selected"),this.video&&this.vplayed&&(this.__closeVideo(),this.roc=!1))},s.sleep=function(t){this.isSleeping&&!t||(this.isSleeping=!0,this.autoAppend&&this.$element.detach(),this.hasLayers&&this.layerController.onSlideSleep())},s.wakeup=function(){this.isSleeping&&(this.isSleeping=!1,this.autoAppend&&this.view.$slideCont.append(this.$element),this.moz&&this.$element.css("margin-top","0.1px"),this.setupBG(),this.hasBG&&this.bgAligner.align(),this.hasLayers&&this.layerController.onSlideWakeup())}}(window,document,jQuery),function(t){"use strict";var i={};window.MSSlideController=function(t){this._delayProgress=0,this._timer=new averta.Timer(100),this._timer.onTimer=this.onTimer,this._timer.refrence=this,this.currentSlide=null,this.slider=t,this.so=t.options,averta.EventDispatcher.call(this)},MSSlideController.registerView=function(t,e){if(t in i)throw new Error(t+", is already registered.");i[t]=e},MSSlideController.SliderControlList={},MSSlideController.registerControl=function(t,i){if(t in MSSlideController.SliderControlList)throw new Error(t+", is already registered.");MSSlideController.SliderControlList[t]=i};var e=MSSlideController.prototype;e.setupView=function(){var e=this;this.resize_listener=function(){e.__resize()};var s={spacing:this.so.space,mouseSwipe:this.so.mouse,loop:this.so.loop,autoHeight:this.so.autoHeight,swipe:this.so.swipe,speed:this.so.speed,dir:this.so.dir,viewNum:this.so.inView,critMargin:this.so.critMargin};this.so.viewOptions&&t.extend(s,this.so.viewOptions),this.so.autoHeight&&(this.so.heightLimit=!1);var n=i[this.slider.options.view]||MSBasicView;if(!n._3dreq||window._css3d&&!t.browser.msie||(n=n._fallback||MSBasicView),this.view=new n(s),this.so.overPause){e=this;this.slider.$element.mouseenter(function(){e.is_over=!0,e._stopTimer()}).mouseleave(function(){e.is_over=!1,e._startTimer()})}},e.onChangeStart=function(){this.change_started=!0,this.currentSlide&&this.currentSlide.unselect(),this.currentSlide=this.view.currentSlide,this.currentSlide.prepareToSelect(),this.so.endPause&&this.currentSlide.index===this.slider.slides.length-1&&(this.pause(),this.skipTimer()),this.so.autoHeight&&this.slider.setHeight(this.currentSlide.getHeight()),this.so.deepLink&&this.__updateWindowHash(),this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))},e.onChangeEnd=function(){if(this.change_started=!1,this._startTimer(),this.currentSlide.select(),this.so.preload>1){var t,i,e,s=this.so.preload-1;for(i=1;i<=s;++i){if(t=this.view.index+i,t>=this.view.slideList.length){if(!this.so.loop){i=s;continue}t-=this.view.slideList.length}e=this.view.slideList[t],e&&e.loadImages()}for(s>this.view.slideList.length/2&&(s=Math.floor(this.view.slideList.length/2)),i=1;i<=s;++i){if(t=this.view.index-i,t<0){if(!this.so.loop){i=s;continue}t=this.view.slideList.length+t}e=this.view.slideList[t],e&&e.loadImages()}}this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))},e.onSwipeStart=function(){this.skipTimer()},e.skipTimer=function(){this._timer.reset(),this._delayProgress=0,this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))},e.onTimer=function(t){if(this._timer.getTime()>=1e3*this.view.currentSlide.delay&&(this.skipTimer(),this.view.next(),this.hideCalled=!1),this._delayProgress=this._timer.getTime()/(10*this.view.currentSlide.delay),this.so.hideLayers&&!this.hideCalled&&1e3*this.view.currentSlide.delay-this._timer.getTime()<=300){var i=this.view.currentSlide;i.hasLayers&&i.layerController.animHideLayers(),this.hideCalled=!0}this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))},e._stopTimer=function(){this._timer&&this._timer.stop()},e._startTimer=function(){
this.paused||this.is_over||!this.currentSlide||!this.currentSlide.ready||this.change_started||this._timer.start()},e.__appendSlides=function(){for(var t,i,e=0,s=this.view.slideList.length-1;e<s;++e)t=this.view.slideList[e],t.detached||(t.$element.detach(),t.detached=!0);for(this.view.appendSlide(this.view.slideList[this.view.index]),s=3,e=1;e<=s;++e){if(i=this.view.index+e,i>=this.view.slideList.length){if(!this.so.loop){e=s;continue}i-=this.view.slideList.length}t=this.view.slideList[i],t.detached=!1,this.view.appendSlide(t)}for(s>this.view.slideList.length/2&&(s=Math.floor(this.view.slideList.length/2)),e=1;e<=s;++e){if(i=this.view.index-e,i<0){if(!this.so.loop){e=s;continue}i=this.view.slideList.length+i}t=this.view.slideList[i],t.detached=!1,this.view.appendSlide(t)}},e.__resize=function(t){this.created&&(this.width=this.slider.$element[0].clientWidth||this.so.width,this.so.fullwidth||(this.width=Math.min(this.width,this.so.width)),this.so.fullheight?(this.so.heightLimit=!1,this.so.autoHeight=!1,this.height=this.slider.$element[0].clientHeight):this.height=this.width/this.slider.aspect,this.so.autoHeight?(this.currentSlide.setSize(this.width,null,t),this.view.setSize(this.width,this.currentSlide.getHeight(),t)):this.view.setSize(this.width,Math.max(this.so.minHeight,this.so.heightLimit?Math.min(this.height,this.so.height):this.height),t),this.slider.$controlsCont&&this.so.centerControls&&this.so.fullwidth&&this.view.$element.css("left",Math.min(0,-(this.slider.$element[0].clientWidth-this.so.width)/2)+"px"),this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))},e.__dispatchInit=function(){this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))},e.__updateWindowHash=function(){var t=window.location.hash,i=this.so.deepLink,e=this.so.deepLinkType,s="path"===e?"/":"=",n="path"===e?"/":"&",o=i+s+(this.view.index+1),a=new RegExp(i+s+"[0-9]+","g");""===t?window.location.hash=n+o:a.test(t)?window.location.hash=t.replace(a,o):window.location.hash=t+n+o},e.__curentSlideInHash=function(){var t=window.location.hash,i=this.so.deepLink,e=this.so.deepLinkType,s="path"===e?"/":"=",n=new RegExp(i+s+"[0-9]+","g");if(n.test(t)){var o=Number(t.match(n)[0].match(/[0-9]+/g).pop());if(!isNaN(o))return o-1}return-1},e.__onHashChanged=function(){var t=this.__curentSlideInHash();-1!==t&&this.gotoSlide(t)},e.setup=function(){this.created=!0,this.paused=!this.so.autoplay,this.view.addEventListener(MSViewEvents.CHANGE_START,this.onChangeStart,this),this.view.addEventListener(MSViewEvents.CHANGE_END,this.onChangeEnd,this),this.view.addEventListener(MSViewEvents.SWIPE_START,this.onSwipeStart,this),this.currentSlide=this.view.slideList[this.so.start-1],this.__resize();var i=this.__curentSlideInHash(),e=-1!==i?i:this.so.start-1;if(this.view.create(e),0===this.so.preload&&this.view.slideList[0].loadImages(),this.scroller=this.view.controller,this.so.wheel){var s=this,n=(new Date).getTime();this.wheellistener=function(i){var e=window.event||i.orginalEvent||i;e.preventDefault();var o=(new Date).getTime();if(!(o-n<400)){n=o;var a=Math.abs(e.detail||e.wheelDelta);t.browser.mozilla&&(a*=100);var r=15;return e.detail<0||e.wheelDelta>0?a>=r&&s.previous(!0):a>=r&&s.next(!0),!1}},t.browser.mozilla?this.slider.$element[0].addEventListener("DOMMouseScroll",this.wheellistener):this.slider.$element.bind("mousewheel",this.wheellistener)}0===this.slider.$element[0].clientWidth&&(this.slider.init_safemode=!0),this.__resize();s=this;this.so.deepLink&&t(window).on("hashchange",function(){s.__onHashChanged()})},e.index=function(){return this.view.index},e.count=function(){return this.view.slidesCount},e.next=function(t){this.skipTimer(),this.view.next(t)},e.previous=function(t){this.skipTimer(),this.view.previous(t)},e.gotoSlide=function(t){t=Math.min(t,this.count()-1),this.skipTimer(),this.view.gotoSlide(t)},e.destroy=function(t){this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)),this.slider.destroy(t)},e._destroy=function(){this._timer.reset(),this._timer=null,t(window).unbind("resize",this.resize_listener),this.view.destroy(),this.view=null,this.so.wheel&&(t.browser.mozilla?this.slider.$element[0].removeEventListener("DOMMouseScroll",this.wheellistener):this.slider.$element.unbind("mousewheel",this.wheellistener),this.wheellistener=null),this.so=null},e.runAction=function(t){var i=[];if(-1!==t.indexOf("(")){var e=t.slice(0,t.indexOf("("));i=t.slice(t.indexOf("(")+1,-1).replace(/\"|\'|\s/g,"").split(","),t=e}t in this?this[t].apply(this,i):console&&console.log('Master Slider Error: Action "'+t+'" not found.')},e.update=function(t){this.slider.init_safemode&&t&&(this.slider.init_safemode=!1),this.__resize(t),t&&this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))},e.locate=function(){this.__resize()},e.resume=function(){this.paused&&(this.paused=!1,this._startTimer())},e.pause=function(){this.paused||(this.paused=!0,this._stopTimer())},e.currentTime=function(){return this._delayProgress},averta.EventDispatcher.extend(e)}(jQuery),function(t){"use strict";var i={image:MSImageLayerElement,text:MSLayerElement,video:MSVideoLayerElement,hotspot:MSHotspotLayer,button:MSButtonLayer};window.MasterSlider=function(){this.options={autoplay:!1,loop:!1,mouse:!0,swipe:!0,grabCursor:!0,space:0,fillMode:"fill",start:1,view:"basic",width:300,height:150,inView:15,critMargin:1,heightLimit:!0,smoothHeight:!0,autoHeight:!1,minHeight:-1,fullwidth:!1,fullheight:!1,autofill:!1,layersMode:"center",hideLayers:!1,endPause:!1,centerControls:!0,overPause:!0,shuffle:!1,speed:17,dir:"h",preload:0,wheel:!1,layout:"boxed",autofillTarget:null,fullscreenMargin:0,instantStartLayers:!1,parallaxMode:"mouse",rtl:!1,deepLink:null,deepLinkType:"path",disablePlugins:[]},this.slides=[],this.activePlugins=[],this.$element=null,this.lastMargin=0,this.leftSpace=0,this.topSpace=0,this.rightSpace=0,this.bottomSpace=0,this._holdOn=0;var i=this;this.resize_listener=function(){i._resize()},t(window).bind("resize",this.resize_listener)},MasterSlider.author="Averta Ltd. (www.averta.net)",MasterSlider.version="2.15.1",MasterSlider.releaseDate="Jul 2015",MasterSlider._plugins=[];var e=MasterSlider;e.registerPlugin=function(t){-1===e._plugins.indexOf(t)&&e._plugins.push(t)};var s=MasterSlider.prototype;s.__setupSlides=function(){var i,e=this,s=0;this.$element.children(".ms-slide").each(function(n){var o=t(this);i=new MSSlide,i.$element=o,i.slider=e,i.delay=void 0!==o.data("delay")?o.data("delay"):3,i.fillMode=void 0!==o.data("fill-mode")?o.data("fill-mode"):e.options.fillMode,i.index=s++;var a=o.children("img:not(.ms-layer)");a.length>0&&i.setBG(a[0]);var r=o.children("video");if(r.length>0&&i.setBGVideo(r),e.controls)for(var h=0,l=e.controls.length;h<l;++h)e.controls[h].slideAction(i);o.children("a").each(function(e){var s=t(this);"video"===this.getAttribute("data-type")?(i.video=this.getAttribute("href"),i.videoAutoPlay=s.data("autoplay"),s.remove()):s.hasClass("ms-layer")||(i.link=t(this))});e.__createSlideLayers(i,o.find(".ms-layer")),e.slides.push(i),e.slideController.view.addSlide(i)})},s.__createSlideLayers=function(e,s){0!=s.length&&(e.setupLayerController(),s.each(function(s,n){var o,a=t(this);"A"===n.nodeName&&"image"===a.find(">img").data("type")&&(o=t(this),a=o.find("img"));var r=new(i[a.data("type")||"text"]);r.$element=a,r.link=o;var h={},l={};void 0!==a.data("effect")&&(h.name=a.data("effect")),void 0!==a.data("ease")&&(h.ease=a.data("ease")),void 0!==a.data("duration")&&(h.duration=a.data("duration")),void 0!==a.data("delay")&&(h.delay=a.data("delay")),a.data("hide-effect")&&(l.name=a.data("hide-effect")),a.data("hide-ease")&&(l.ease=a.data("hide-ease")),void 0!==a.data("hide-duration")&&(l.duration=a.data("hide-duration")),void 0!==a.data("hide-time")&&(l.time=a.data("hide-time")),r.setStartAnim(h),r.setEndAnim(l),e.layerController.addLayer(r)}))},s._removeLoading=function(){t(window).unbind("resize",this.resize_listener),this.$element.removeClass("before-init").css("visibility","visible").css("height","").css("opacity",0),CTween.fadeIn(this.$element),this.$loading.remove(),this.slideController&&this.slideController.__resize()},s._resize=function(t){if(this.$loading){var i=this.$loading[0].clientWidth/this.aspect;i=this.options.heightLimit?Math.min(i,this.options.height):i,this.$loading.height(i),this.$element.height(i)}},s._shuffleSlides=function(){for(var t,i=this.$element.children(".ms-slide"),e=0,s=i.length;e<s;++e)t=Math.floor(Math.random()*(s-1)),e!=t&&(this.$element[0].insertBefore(i[e],i[t]),i=this.$element.children(".ms-slide"))},s._setupSliderLayout=function(){this._updateSideMargins(),this.lastMargin=this.leftSpace;var i=this.options.layout;"boxed"!==i&&"partialview"!==i&&(this.options.fullwidth=!0),"fullscreen"!==i&&"autofill"!==i||(this.options.fullheight=!0,"autofill"===i&&(this.$autofillTarget=t(this.options.autofillTarget),0===this.$autofillTarget.length&&(this.$autofillTarget=this.$element.parent()))),"partialview"===i&&this.$element.addClass("ms-layout-partialview"),"fullscreen"!==i&&"fullwidth"!==i&&"autofill"!==i||(t(window).bind("resize",{that:this},this._updateLayout),this._updateLayout()),t(window).bind("resize",this.slideController.resize_listener)},s._updateLayout=function(i){var e=i?i.data.that:this,s=e.options.layout,n=e.$element,o=t(window);if("fullscreen"===s)document.body.style.overflow="hidden",n.height(o.height()-e.options.fullscreenMargin-e.topSpace-e.bottomSpace),document.body.style.overflow="";else if("autofill"===s)return void n.height(e.$autofillTarget.height()-e.options.fullscreenMargin-e.topSpace-e.bottomSpace).width(e.$autofillTarget.width()-e.leftSpace-e.rightSpace);n.width(o.width()-e.leftSpace-e.rightSpace);var a=-n.offset().left+e.leftSpace+e.lastMargin;n.css("margin-left",a),e.lastMargin=a},s._init=function(){if(!(this._holdOn>0)&&this._docReady){if(this.initialized=!0,"all"!==this.options.preload&&this._removeLoading(),this.options.shuffle&&this._shuffleSlides(),MSLayerEffects.setup(),this.slideController.setupView(),this.view=this.slideController.view,this.$controlsCont=t("<div></div>").addClass("ms-inner-controls-cont"),this.options.centerControls&&this.$controlsCont.css("max-width",this.options.width+"px"),this.$controlsCont.prepend(this.view.$element),this.$msContainer=t("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont),this.controls)for(var i=0,e=this.controls.length;i<e;++i)this.controls[i].setup();if(this._setupSliderLayout(),this.__setupSlides(),this.slideController.setup(),this.controls)for(i=0,e=this.controls.length;i<e;++i)this.controls[i].create();if(this.options.autoHeight&&this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()),this.options.swipe&&!window._touch&&this.options.grabCursor&&this.options.mouse){var s=this.view.$element;s.mousedown(function(){s.removeClass("ms-grab-cursor"),s.addClass("ms-grabbing-cursor"),t.browser.msie&&window.ms_grabbing_curosr&&(s[0].style.cursor="url("+window.ms_grabbing_curosr+"), move")}).addClass("ms-grab-cursor"),t(document).mouseup(function(){s.removeClass("ms-grabbing-cursor"),s.addClass("ms-grab-cursor"),t.browser.msie&&window.ms_grab_curosr&&(s[0].style.cursor="url("+window.ms_grab_curosr+"), move")})}this.slideController.__dispatchInit()}},s.setHeight=function(t){this.options.smoothHeight?(this.htween&&(this.htween.reset?this.htween.reset():this.htween.stop(!0)),this.htween=CTween.animate(this.slideController.view.$element,500,{height:t},{ease:"easeOutQuart"})):this.slideController.view.$element.height(t)},s.reserveSpace=function(t,i){var e=t+"Space",s=this[e];return this[e]+=i,this._updateSideMargins(),s},s._updateSideMargins=function(){this.$element.css("margin",this.topSpace+"px "+this.rightSpace+"px "+this.bottomSpace+"px "+this.leftSpace+"px")},s._realignControls=function(){this.rightSpace=this.leftSpace=this.topSpace=this.bottomSpace=0,this._updateSideMargins(),this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))},s.control=function(t,i){if(t in MSSlideController.SliderControlList){this.controls||(this.controls=[]);var e=new MSSlideController.SliderControlList[t](i);return e.slider=this,this.controls.push(e),this}},s.holdOn=function(){this._holdOn++},s.release=function(){this._holdOn--,this._init()},s.setup=function(i,s){if(this.$element="string"==typeof i?t("#"+i):i.eq(0),this.setupMarkup=this.$element.html(),0!==this.$element.length){this.$element.addClass("master-slider").addClass("before-init"),t.browser.msie?this.$element.addClass("ms-ie").addClass("ms-ie"+t.browser.version.slice(0,t.browser.version.indexOf("."))):t.browser.webkit?this.$element.addClass("ms-wk"):t.browser.mozilla&&this.$element.addClass("ms-moz");var n=navigator.userAgent.toLowerCase(),o=n.indexOf("android")>-1;o&&this.$element.addClass("ms-android");var a=this;t.extend(this.options,s),this.aspect=this.options.width/this.options.height,this.$loading=t("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append(t("<div></div>").addClass("ms-loading")),this.$loading.parent().css("position","relative"),this.options.autofill&&(this.options.fullwidth=!0,this.options.fullheight=!0),this.options.fullheight&&this.$element.addClass("ms-fullheight"),this._resize(),this.slideController=new MSSlideController(this),this.api=this.slideController;for(var r=0,h=e._plugins.length;r!==h;r++){var l=e._plugins[r];-1===this.options.disablePlugins.indexOf(l.name)&&this.activePlugins.push(new l(this))}return t(document).ready(function(){a._docReady=!0,a._init()}),this}},s.destroy=function(i){for(var e=0,s=this.activePlugins.length;e!==s;e++)this.activePlugins[e].destroy();if(this.controls)for(e=0,s=this.controls.length;e!==s;e++)this.controls[e].destroy();this.slideController&&this.slideController._destroy(),this.$loading&&this.$loading.remove(),i?this.$element.html(this.setupMarkup).css("visibility","hidden"):this.$element.remove();var n=this.options.layout;"fullscreen"!==n&&"fullwidth"!==n||t(window).unbind("resize",this._updateLayout),this.view=null,this.slides=null,this.options=null,this.slideController=null,this.api=null,this.resize_listener=null,this.activePlugins=null}}(jQuery),function(t,i,e,s){function n(i,e){this.element=i,this.$element=t(i),this.settings=t.extend({},a,e),this._defaults=a,this._name=o,this.init()}var o="masterslider",a={controls:{}};t.extend(n.prototype,{init:function(){var t=this;for(var i in this._slider=new MasterSlider,this.settings.controls)this._slider.control(i,this.settings.controls[i]);this._slider.setup(this.$element,this.settings);var e=this._slider.api.dispatchEvent;this._slider.api.dispatchEvent=function(i){t.$element.trigger(i.type),e.call(this,i)}},api:function(){return this._slider.api},slider:function(){return this._slider}}),t.fn[o]=function(i){var e,a=arguments,r="plugin_"+o;return i===s||"object"==typeof i?this.each(function(){t.data(this,r)||t.data(this,r,new n(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?(this.each(function(){var s=t.data(this,r);s instanceof n&&"function"==typeof s[i]&&(e=s[i].apply(s,Array.prototype.slice.call(a,1))),s instanceof n&&"function"==typeof s._slider.api[i]&&(e=s._slider.api[i].apply(s._slider.api,Array.prototype.slice.call(a,1))),"destroy"===i&&t.data(this,r,null)}),e!==s?e:this):void 0}}(jQuery,window,document),window.MSViewEvents=function(t,i){this.type=t,this.data=i},MSViewEvents.SWIPE_START="swipeStart",MSViewEvents.SWIPE_END="swipeEnd",MSViewEvents.SWIPE_MOVE="swipeMove",MSViewEvents.SWIPE_CANCEL="swipeCancel",MSViewEvents.SCROLL="scroll",MSViewEvents.CHANGE_START="slideChangeStart",MSViewEvents.CHANGE_END="slideChangeEnd",function(t){"use strict";window.MSBasicView=function(i){this.options={loop:!1,dir:"h",autoHeight:!1,spacing:5,mouseSwipe:!0,swipe:!0,speed:17,minSlideSpeed:2,viewNum:20,critMargin:1},t.extend(this.options,i),this.dir=this.options.dir,this.loop=this.options.loop,this.spacing=this.options.spacing,this.__width=0,this.__height=0,this.__cssProb="h"===this.dir?"left":"top",this.__offset="h"===this.dir?"offsetLeft":"offsetTop",this.__dimension="h"===this.dir?"__width":"__height",this.__translate_end=window._css3d?" translateZ(0px)":"",this.$slideCont=t("<div></div>").addClass("ms-slide-container"),this.$element=t("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont),this.currentSlide=null,this.index=-1,this.slidesCount=0,this.slides=[],this.slideList=[],this.viewSlidesList=[],this.css3=window._cssanim,this.start_buffer=0,this.firstslide_snap=0,this.slideChanged=!1,this.controller=new Controller(0,0,{snapping:!0,snapsize:100,paging:!0,snappingMinSpeed:this.options.minSlideSpeed,friction:(100-.5*this.options.speed)/100,endless:this.loop}),this.controller.renderCallback("h"===this.dir?this._horizUpdate:this._vertiUpdate,this),this.controller.snappingCallback(this.__snapUpdate,this),this.controller.snapCompleteCallback(this.__snapCompelet,this),averta.EventDispatcher.call(this)};var i=MSBasicView.prototype;i.__snapCompelet=function(t,i){this.slideChanged&&(this.slideChanged=!1,this.__locateSlides(),this.start_buffer=0,this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))},i.__snapUpdate=function(i,e,s){if(this.loop){var n=this.index+s;this.updateLoop(n),n>=this.slidesCount&&(n-=this.slidesCount),n<0&&(n=this.slidesCount+n),this.index=n}else{if(e<0||e>=this.slidesCount)return;this.index=e}this._checkCritMargins(),t.browser.mozilla&&(this.slideList[this.index].$element[0].style.marginTop="0.1px",this.currentSlide&&(this.currentSlide.$element[0].style.marginTop=""));var o=this.slideList[this.index];o!==this.currentSlide&&(this.currentSlide=o,this.autoUpdateZIndex&&this.__updateSlidesZindex(),this.slideChanged=!0,this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))},i._checkCritMargins=function(){if(!this.normalMode){var t=Math.floor(this.options.viewNum/2),i=this.viewSlidesList.indexOf(this.slideList[this.index]),e=this[this.__dimension]+this.spacing,s=this.options.critMargin;this.loop?(i<=s||i>=this.viewSlidesList.length-s)&&(e*=i-t,this.__locateSlides(!1,e+this.start_buffer),this.start_buffer+=e):(i<s&&this.index>=s||i>=this.viewSlidesList.length-s&&this.index<this.slidesCount-s)&&this.__locateSlides(!1)}},i._vertiUpdate=function(t,i){this.__contPos=i,this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),this.css3?this.$slideCont[0].style[window._jcsspfx+"Transform"]="translateY("+-i+"px)"+this.__translate_end:this.$slideCont[0].style.top=-i+"px"},i._horizUpdate=function(t,i){this.__contPos=i,this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),this.css3?this.$slideCont[0].style[window._jcsspfx+"Transform"]="translateX("+-i+"px)"+this.__translate_end:this.$slideCont[0].style.left=-i+"px"},i.__updateViewList=function(){if(this.normalMode)this.viewSlidesList=this.slides;else{var t=this.viewSlidesList.slice();this.viewSlidesList=[];var i,e=0,s=Math.floor(this.options.viewNum/2);if(this.loop)for(;e!==this.options.viewNum;e++)this.viewSlidesList.push(this.slides[this.currentSlideLoc-s+e]);else{for(e=0;e!==s&&this.index-e!=-1;e++)this.viewSlidesList.unshift(this.slideList[this.index-e]);for(e=1;e!==s&&this.index+e!==this.slidesCount;e++)this.viewSlidesList.push(this.slideList[this.index+e])}for(e=0,i=t.length;e!==i;e++)-1===this.viewSlidesList.indexOf(t[e])&&t[e].sleep();t=null,this.currentSlide&&this.__updateSlidesZindex()}},i.__locateSlides=function(t,i){this.__updateViewList(),i=this.loop?i||0:this.slides.indexOf(this.viewSlidesList[0])*(this[this.__dimension]+this.spacing);for(var e,s=this.viewSlidesList.length,n=0;n!==s;n++){var o=i+n*(this[this.__dimension]+this.spacing);e=this.viewSlidesList[n],e.wakeup(),e.position=o,e.$element[0].style[this.__cssProb]=o+"px"}!1!==t&&this.controller.changeTo(this.slideList[this.index].position,!1,null,null,!1)},i.__createLoopList=function(){var t=[],i=0,e=this.slidesCount/2,s=this.slidesCount%2==0?e-1:Math.floor(e),n=this.slidesCount%2==0?e:Math.floor(e);for(this.currentSlideLoc=s,i=1;i<=s;++i)t.unshift(this.slideList[this.index-i<0?this.slidesCount-i+this.index:this.index-i]);for(t.push(this.slideList[this.index]),i=1;i<=n;++i)t.push(this.slideList[this.index+i>=this.slidesCount?this.index+i-this.slidesCount:this.index+i]);return t},i.__getSteps=function(t,i){var e=i<t?this.slidesCount-t+i:i-t,s=Math.abs(this.slidesCount-e);return e<s?e:-s},i.__pushEnd=function(){var t=this.slides.shift(),i=this.slides[this.slidesCount-2];if(this.slides.push(t),this.normalMode){var e=i.$element[0][this.__offset]+this.spacing+this[this.__dimension];t.$element[0].style[this.__cssProb]=e+"px",t.position=e}},i.__pushStart=function(){var t=this.slides.pop(),i=this.slides[0];if(this.slides.unshift(t),this.normalMode){var e=i.$element[0][this.__offset]-this.spacing-this[this.__dimension];t.$element[0].style[this.__cssProb]=e+"px",t.position=e}},i.__updateSlidesZindex=function(){var t=this.viewSlidesList.length;Math.floor(t/2);if(this.loop)for(var i=this.viewSlidesList.indexOf(this.currentSlide),e=0;e!==t;e++)this.viewSlidesList[e],this.viewSlidesList[e].$element.css("z-index",e<=i?e+1:t-e);else{var s=this.currentSlide.index-this.viewSlidesList[0].index;for(e=0;e!==t;e++)this.viewSlidesList[e].$element.css("z-index",e<=s?e+1:t-e);this.currentSlide.$element.css("z-index",t)}},i.addSlide=function(t){t.view=this,this.slides.push(t),this.slideList.push(t),this.slidesCount++},i.appendSlide=function(t){this.$slideCont.append(t.$element)},i.updateLoop=function(t){if(this.loop)for(var i=this.__getSteps(this.index,t),e=0,s=Math.abs(i);e<s;++e)i<0?this.__pushStart():this.__pushEnd()},i.gotoSlide=function(t,i){this.updateLoop(t),this.index=t;var e=this.slideList[t];this._checkCritMargins(),this.controller.changeTo(e.position,!i,null,null,!1),e!==this.currentSlide&&(this.slideChanged=!0,this.currentSlide=e,this.autoUpdateZIndex&&this.__updateSlidesZindex(),this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)),i&&this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))},i.next=function(t){t&&!this.loop&&this.index+1>=this.slidesCount?this.controller.bounce(10):this.gotoSlide(this.index+1>=this.slidesCount?0:this.index+1)},i.previous=function(t){t&&!this.loop&&this.index-1<0?this.controller.bounce(-10):this.gotoSlide(this.index-1<0?this.slidesCount-1:this.index-1)},i.setupSwipe=function(){this.swipeControl=new averta.TouchSwipe(this.$element),this.swipeControl.swipeType="h"===this.dir?"horizontal":"vertical";var t=this;"h"===this.dir?this.swipeControl.onSwipe=function(i){t.horizSwipeMove(i)}:this.swipeControl.onSwipe=function(i){t.vertSwipeMove(i)}},i.vertSwipeMove=function(t){var i=t.phase;if("start"===i)this.controller.stop(),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START,t));else if("move"===i&&(!this.loop||Math.abs(this.currentSlide.position-this.controller.value+t.moveY)<this.cont_size/2))this.controller.drag(t.moveY),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE,t));else if("end"===i||"cancel"===i){var e=t.distanceY/t.duration*50/3;Math.abs(e)>.1?(this.controller.push(-e),e>this.controller.options.snappingMinSpeed&&this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END,t))):(this.controller.cancel(),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL,t)))}},i.horizSwipeMove=function(t){var i=t.phase;if("start"===i)this.controller.stop(),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START,t));else if("move"===i&&(!this.loop||Math.abs(this.currentSlide.position-this.controller.value+t.moveX)<this.cont_size/2))this.controller.drag(t.moveX),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE,t));else if("end"===i||"cancel"===i){var e=t.distanceX/t.duration*50/3;Math.abs(e)>.1?(this.controller.push(-e),e>this.controller.options.snappingMinSpeed&&this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END,t))):(this.controller.cancel(),this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL,t)))}},i.setSize=function(t,i,e){if(this.lastWidth!==t||i!==this.lastHeight||e){this.$element.width(t).height(i);for(var s=0;s<this.slidesCount;++s)this.slides[s].setSize(t,i,e);this.__width=t,this.__height=i,this.__created&&(this.__locateSlides(),this.cont_size=(this.slidesCount-1)*(this[this.__dimension]+this.spacing),this.loop||(this.controller._max_value=this.cont_size),this.controller.options.snapsize=this[this.__dimension]+this.spacing,this.controller.changeTo(this.currentSlide.position,!1,null,null,!1),this.controller.cancel(),this.lastWidth=t,this.lastHeight=i)}},i.create=function(t){this.__created=!0,this.index=Math.min(t||0,this.slidesCount-1),this.lastSnap=this.index,this.loop&&(this.slides=this.__createLoopList()),this.normalMode=this.slidesCount<=this.options.viewNum;for(var i=0;i<this.slidesCount;++i)this.slides[i].create();this.__locateSlides(),this.controller.options.snapsize=this[this.__dimension]+this.spacing,this.loop||(this.controller._max_value=(this.slidesCount-1)*(this[this.__dimension]+this.spacing)),this.gotoSlide(this.index,!0),this.options.swipe&&(window._touch||this.options.mouseSwipe)&&this.setupSwipe()},i.destroy=function(){if(this.__created){for(var t=0;t<this.slidesCount;++t)this.slides[t].destroy();this.slides=null,this.slideList=null,this.$element.remove(),this.controller.destroy(),this.controller=null}},averta.EventDispatcher.extend(i),MSSlideController.registerView("basic",MSBasicView)}(jQuery),function(t){"use strict";window.MSWaveView=function(t){MSBasicView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"),this.$slideCont.css(window._csspfx+"transform-style","preserve-3d"),this.autoUpdateZIndex=!0},MSWaveView.extend(MSBasicView),MSWaveView._3dreq=!0,MSWaveView._fallback=MSBasicView;var i=MSWaveView.prototype,e=MSBasicView.prototype;i._horizUpdate=function(t,i){e._horizUpdate.call(this,t,i);for(var s,n,o=-i,a=0;a<this.slidesCount;++a)s=this.slideList[a],n=-o-s.position,this.__updateSlidesHoriz(s,n)},i._vertiUpdate=function(t,i){e._vertiUpdate.call(this,t,i);for(var s,n,o=-i,a=0;a<this.slidesCount;++a)s=this.slideList[a],n=-o-s.position,this.__updateSlidesVertic(s,n)},i.__updateSlidesHoriz=function(t,i){var e=Math.abs(100*i/this.__width);t.$element.css(window._csspfx+"transform","translateZ("+3*-e+"px) rotateY(0.01deg)")},i.__updateSlidesVertic=function(t,i){this.__updateSlidesHoriz(t,i)},MSSlideController.registerView("wave",MSWaveView)}(jQuery),function(){window.MSFadeBasicView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")},MSFadeBasicView.extend(MSWaveView);var t=MSFadeBasicView.prototype;MSFadeBasicView.prototype;t.__updateSlidesHoriz=function(t,i){var e=Math.abs(.6*i/this.__width);e=1-Math.min(e,.6),t.$element.css("opacity",e)},t.__updateSlidesVertic=function(t,i){this.__updateSlidesHoriz(t,i)},MSSlideController.registerView("fadeBasic",MSFadeBasicView),MSWaveView._fallback=MSFadeBasicView}(),function(){window.MSFadeWaveView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")},MSFadeWaveView.extend(MSWaveView),MSFadeWaveView._3dreq=!0,MSFadeWaveView._fallback=MSFadeBasicView;var t=MSFadeWaveView.prototype;MSWaveView.prototype;t.__updateSlidesHoriz=function(t,i){var e=Math.abs(100*i/this.__width);e=Math.min(e,100),t.$element.css("opacity",1-e/300),t.$element[0].style[window._jcsspfx+"Transform"]="scale("+(1-e/800)+") rotateY(0.01deg) "},t.__updateSlidesVertic=function(t,i){this.__updateSlidesHoriz(t,i)},MSSlideController.registerView("fadeWave",MSFadeWaveView)}(),function(t){"use strict";window.MSFlowView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")},MSFlowView.extend(MSWaveView),MSFlowView._3dreq=!0,MSFlowView._fallback=MSFadeBasicView;var i=MSFlowView.prototype;MSWaveView.prototype;i.__updateSlidesHoriz=function(t,i){var e=Math.abs(100*i/this.__width),s=Math.min(.3*e,30)*(i<0?-1:1),n=1.2*e;t.$element[0].style[window._jcsspfx+"Transform"]="translateZ("+5*-n+"px) rotateY("+s+"deg) "},i.__updateSlidesVertic=function(t,i){var e=Math.abs(100*i/this.__width),s=Math.min(.3*e,30)*(i<0?-1:1),n=1.2*e;t.$element[0].style[window._jcsspfx+"Transform"]="translateZ("+5*-n+"px) rotateX("+-s+"deg) "},MSSlideController.registerView("flow",MSFlowView)}(jQuery),function(){window.MSFadeFlowView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")},MSFadeFlowView.extend(MSWaveView),MSFadeFlowView._3dreq=!0;var t=MSFadeFlowView.prototype;MSWaveView.prototype;t.__calculate=function(t){var i=Math.min(Math.abs(100*t/this.__width),100),e=Math.min(.5*i,50)*(t<0?-1:1);return{value:i,rvalue:e}},t.__updateSlidesHoriz=function(t,i){var e=this.__calculate(i);t.$element.css("opacity",1-e.value/300),console.log(window._jcsspfx+"transform","translateZ("+-e.value+"px) rotateY("+e.rvalue+"deg) "),t.$element[0].style[window._jcsspfx+"Transform"]="translateZ("+-e.value+"px) rotateY("+e.rvalue+"deg) "},t.__updateSlidesVertic=function(t,i){var e=this.__calculate(i);t.$element.css("opacity",1-e.value/300),t.$element[0].style[window._jcsspfx+"Transform"]="translateZ("+-e.value+"px) rotateX("+-e.rvalue+"deg) "},MSSlideController.registerView("fadeFlow",MSFadeFlowView)}(),function(t){"use strict";window.MSMaskView=function(t){MSBasicView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")},MSMaskView.extend(MSBasicView);var i=MSMaskView.prototype,e=MSBasicView.prototype;i.addSlide=function(i){i.view=this,i.$frame=t("<div></div>").addClass("ms-mask-frame").append(i.$element),i.$element[0].style.position="relative",i.autoAppend=!1,this.slides.push(i),this.slideList.push(i),this.slidesCount++},i.setSize=function(t,i){for(var s=this.slides[0].slider,n=0;n<this.slidesCount;++n)this.slides[n].$frame[0].style.width=t+"px",s.options.autoHeight||(this.slides[n].$frame[0].style.height=i+"px");e.setSize.call(this,t,i)},i._horizUpdate=function(t,i){e._horizUpdate.call(this,t,i);var s=0;if(this.css3)for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style[window._jcsspfx+"Transform"]="translateX("+(i-this.slideList[s].position)+"px)"+this.__translate_end;else for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style.left=i-this.slideList[s].position+"px"},i._vertiUpdate=function(t,i){e._vertiUpdate.call(this,t,i);var s=0;if(this.css3)for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style[window._jcsspfx+"Transform"]="translateY("+(i-this.slideList[s].position)+"px)"+this.__translate_end;else for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style.top=i-this.slideList[s].position+"px"},i.__pushEnd=function(){var t=this.slides.shift(),i=this.slides[this.slidesCount-2];if(this.slides.push(t),this.normalMode){var e=i.$frame[0][this.__offset]+this.spacing+this[this.__dimension];t.$frame[0].style[this.__cssProb]=e+"px",t.position=e}},i.__pushStart=function(){var t=this.slides.pop(),i=this.slides[0];if(this.slides.unshift(t),this.normalMode){var e=i.$frame[0][this.__offset]-this.spacing-this[this.__dimension];t.$frame[0].style[this.__cssProb]=e+"px",t.position=e}},i.__updateViewList=function(){if(this.normalMode)this.viewSlidesList=this.slides;else{var t=this.viewSlidesList.slice();this.viewSlidesList=[];var i,e=0,s=Math.floor(this.options.viewNum/2);if(this.loop)for(;e!==this.options.viewNum;e++)this.viewSlidesList.push(this.slides[this.currentSlideLoc-s+e]);else{for(e=0;e!==s&&this.index-e!=-1;e++)this.viewSlidesList.unshift(this.slideList[this.index-e]);for(e=1;e!==s&&this.index+e!==this.slidesCount;e++)this.viewSlidesList.push(this.slideList[this.index+e])}for(e=0,i=t.length;e!==i;e++)-1===this.viewSlidesList.indexOf(t[e])&&(t[e].sleep(),t[e].$frame.detach());t=null}},i.__locateSlides=function(t,i){this.__updateViewList(),i=this.loop?i||0:this.slides.indexOf(this.viewSlidesList[0])*(this[this.__dimension]+this.spacing);for(var e,s=this.viewSlidesList.length,n=0;n!==s;n++){var o=i+n*(this[this.__dimension]+this.spacing)
;if(e=this.viewSlidesList[n],this.$slideCont.append(e.$frame),e.wakeup(!1),e.position=o,e.selected&&e.bgvideo)try{e.bgvideo.play()}catch(t){}e.$frame[0].style[this.__cssProb]=o+"px"}!1!==t&&this.controller.changeTo(this.slideList[this.index].position,!1,null,null,!1)},MSSlideController.registerView("mask",MSMaskView)}(jQuery),function(t){"use strict";window.MSParallaxMaskView=function(t){MSMaskView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-parallax-mask-view")},MSParallaxMaskView.extend(MSMaskView),MSParallaxMaskView.parallaxAmount=.5;var i=MSParallaxMaskView.prototype,e=MSBasicView.prototype;i._horizUpdate=function(t,i){e._horizUpdate.call(this,t,i);var s=0;if(this.css3)for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style[window._jcsspfx+"Transform"]="translateX("+(i-this.slideList[s].position)*MSParallaxMaskView.parallaxAmount+"px)"+this.__translate_end;else for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style.left=(i-this.slideList[s].position)*MSParallaxMaskView.parallaxAmount+"px"},i._vertiUpdate=function(t,i){e._vertiUpdate.call(this,t,i);var s=0;if(this.css3)for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style[window._jcsspfx+"Transform"]="translateY("+(i-this.slideList[s].position)*MSParallaxMaskView.parallaxAmount+"px)"+this.__translate_end;else for(s=0;s<this.slidesCount;++s)this.slideList[s].$element[0].style.top=(i-this.slideList[s].position)*MSParallaxMaskView.parallaxAmount+"px"},MSSlideController.registerView("parallaxMask",MSParallaxMaskView)}(jQuery),function(t){"use strict";window.MSFadeView=function(t){MSBasicView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"),this.controller.renderCallback(this.__update,this)},MSFadeView.extend(MSBasicView);var i=MSFadeView.prototype,e=MSBasicView.prototype;i.__update=function(t,i){for(var e,s,n=-i,o=0;o<this.slidesCount;++o)e=this.slideList[o],s=-n-e.position,this.__updateSlides(e,s)},i.__updateSlides=function(t,i){var e=Math.abs(i/this[this.__dimension]);1-e<=0?t.$element.fadeTo(0,0).css("visibility","hidden"):t.$element.fadeTo(0,1-e).css("visibility","")},i.__locateSlides=function(t,i){this.__updateViewList(),i=this.loop?i||0:this.slides.indexOf(this.viewSlidesList[0])*(this[this.__dimension]+this.spacing);for(var e,s=this.viewSlidesList.length,n=0;n!==s;n++){var o=i+n*this[this.__dimension];e=this.viewSlidesList[n],e.wakeup(),e.position=o}!1!==t&&this.controller.changeTo(this.slideList[this.index].position,!1,null,null,!1)},i.__pushEnd=function(){var t=this.slides.shift(),i=this.slides[this.slidesCount-2];this.slides.push(t),t.position=i.position+this[this.__dimension]},i.__pushStart=function(){var t=this.slides.pop(),i=this.slides[0];this.slides.unshift(t),t.position=i.position-this[this.__dimension]},i.create=function(t){e.create.call(this,t),this.spacing=0,this.controller.options.minValidDist=10},MSSlideController.registerView("fade",MSFadeView)}(jQuery),function(t){"use strict";window.MSScaleView=function(t){MSBasicView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"),this.controller.renderCallback(this.__update,this)},MSScaleView.extend(MSFadeView);var i=MSScaleView.prototype,e=MSFadeView.prototype;i.__updateSlides=function(t,i){var e=Math.abs(i/this[this.__dimension]),s=t.$element[0];1-e<=0?(s.style.opacity=0,s.style.visibility="hidden",s.style[window._jcsspfx+"Transform"]=""):(s.style.opacity=1-e,s.style.visibility="",s.style[window._jcsspfx+"Transform"]="perspective(2000px) translateZ("+e*(i<0?-.5:.5)*300+"px)")},i.create=function(t){e.create.call(this,t),this.controller.options.minValidDist=.03},MSSlideController.registerView("scale",MSScaleView)}(jQuery),function(t){"use strict";window.MSStackView=function(t){MSBasicView.call(this,t),this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"),this.controller.renderCallback(this.__update,this),this.autoUpdateZIndex=!0},MSStackView.extend(MSFadeView),MSStackView._3dreq=!0,MSStackView._fallback=MSFadeView;var i=MSStackView.prototype,e=MSFadeView.prototype;i.__updateSlidesZindex=function(){for(var t=this.viewSlidesList.length,i=0;i!==t;i++)this.viewSlidesList[i],this.viewSlidesList[i].$element.css("z-index",t-i)},i.__updateSlides=function(t,i){var e=Math.abs(i/this[this.__dimension]),s=t.$element[0];1-e<=0?(s.style.opacity=1,s.style.visibility="hidden",s.style[window._jcsspfx+"Transform"]=""):(s.style.visibility="",s.style[window._jcsspfx+"Transform"]=i<0?"perspective(2000px) translateZ("+-300*e+"px)":this.__translate+"("+-e*this[this.__dimension]+"px)")},i.create=function(t){e.create.call(this,t),this.controller.options.minValidDist=.03,this.__translate="h"===this.dir?"translateX":"translateY"},MSSlideController.registerView("stack",MSStackView)}(jQuery),function(){"use strict";var t=2e3;window.MSFocusView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"),this.options.centerSpace=this.options.centerSpace||1},MSFocusView.extend(MSWaveView),MSFocusView._3dreq=!0,MSFocusView._fallback=MSFadeBasicView;var i=MSFocusView.prototype;MSWaveView.prototype;i.__calcview=function(i,e){var s=e/2*i/(i+t);return s*(i+t)/t},i.__updateSlidesHoriz=function(t,i){var e=Math.abs(100*i/this.__width);e=15*-Math.min(e,100),t.$element.css(window._csspfx+"transform","translateZ("+(e+1)+"px) rotateY(0.01deg) translateX("+(i<0?1:-1)*(-this.__calcview(e,this.__width)*this.options.centerSpace)+"px)")},i.__updateSlidesVertic=function(t,i){var e=Math.abs(100*i/this.__width);e=15*-Math.min(e,100),t.$element.css(window._csspfx+"transform","translateZ("+(e+1)+"px) rotateY(0.01deg) translateY("+(i<0?1:-1)*(-this.__calcview(e,this.__width)*this.options.centerSpace)+"px)")},MSSlideController.registerView("focus",MSFocusView)}(),function(){window.MSPartialWaveView=function(t){MSWaveView.call(this,t),this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")},MSPartialWaveView.extend(MSWaveView),MSPartialWaveView._3dreq=!0,MSPartialWaveView._fallback=MSFadeBasicView;var t=MSPartialWaveView.prototype;MSWaveView.prototype;t.__updateSlidesHoriz=function(t,i){var e=Math.abs(100*i/this.__width);t.hasBG&&t.$bg_img.css("opacity",(100-Math.abs(120*i/this.__width/3))/100),t.$element.css(window._csspfx+"transform","translateZ("+3*-e+"px) rotateY(0.01deg) translateX("+.75*i+"px)")},t.__updateSlidesVertic=function(t,i){var e=Math.abs(100*i/this.__width);t.hasBG&&t.$bg_img.css("opacity",(100-Math.abs(120*i/this.__width/3))/100),t.$element.css(window._csspfx+"transform","translateZ("+3*-e+"px) rotateY(0.01deg) translateY("+.75*i+"px)")},MSSlideController.registerView("partialWave",MSPartialWaveView)}(),function(t){"use strict";var i=function(){this.options={prefix:"ms-",autohide:!0,overVideo:!0,customClass:null}},e=i.prototype;e.slideAction=function(t){},e.setup=function(){this.cont=this.options.insertTo?t(this.options.insertTo):this.slider.$controlsCont,this.options.overVideo||this._hideOnvideoStarts()},e.checkHideUnder=function(){this.options.hideUnder&&(this.needsRealign=!this.options.insetTo&&("left"===this.options.align||"right"===this.options.align)&&!1===this.options.inset,t(window).bind("resize",{that:this},this.onResize),this.onResize())},e.onResize=function(t){var i=t&&t.data.that||this,e=window.innerWidth;e<=i.options.hideUnder&&!i.detached?(i.hide(!0),i.detached=!0,i.onDetach()):e>=i.options.hideUnder&&i.detached&&(i.detached=!1,i.visible(),i.onAppend())},e.create=function(){this.options.autohide&&(this.hide(!0),this.slider.$controlsCont.mouseenter(t.proxy(this._onMouseEnter,this)).mouseleave(t.proxy(this._onMouseLeave,this)).mousedown(t.proxy(this._onMouseDown,this)),this.$element&&this.$element.mouseenter(t.proxy(this._onMouseEnter,this)).mouseleave(t.proxy(this._onMouseLeave,this)).mousedown(t.proxy(this._onMouseDown,this)),t(document).mouseup(t.proxy(this._onMouseUp,this))),this.options.align&&this.$element.addClass("ms-align-"+this.options.align),this.options.customClass&&this.$element&&this.$element.addClass(this.options.customClass)},e._onMouseEnter=function(){this._disableAH||this.mdown||this.visible(),this.mleave=!1},e._onMouseLeave=function(){this.mdown||this.hide(),this.mleave=!0},e._onMouseDown=function(){this.mdown=!0},e._onMouseUp=function(){this.mdown&&this.mleave&&this.hide(),this.mdown=!1},e.onAppend=function(){this.needsRealign&&this.slider._realignControls()},e.onDetach=function(){this.needsRealign&&this.slider._realignControls()},e._hideOnvideoStarts=function(){var t=this;this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY,function(){t._disableAH=!0,t.hide()}),this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE,function(){t._disableAH=!1,t.visible()})},e.hide=function(t){if(t)this.$element.css("opacity",0),this.$element.css("display","none");else{clearTimeout(this.hideTo);var i=this.$element;this.hideTo=setTimeout(function(){CTween.fadeOut(i,400,!1)},20)}this.$element.addClass("ms-ctrl-hide")},e.visible=function(){this.detached||(clearTimeout(this.hideTo),this.$element.css("display",""),CTween.fadeIn(this.$element,400,!1),this.$element.removeClass("ms-ctrl-hide"))},e.destroy=function(){this.options&&this.options.hideUnder&&t(window).unbind("resize",this.onResize)},window.BaseControl=i}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),t.extend(this.options,i)};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){var i=this;this.$next=t("<div></div>").addClass(this.options.prefix+"nav-next").bind("click",function(){i.slider.api.next(!0)}),this.$prev=t("<div></div>").addClass(this.options.prefix+"nav-prev").bind("click",function(){i.slider.api.previous(!0)}),s.setup.call(this),this.cont.append(this.$next),this.cont.append(this.$prev),this.checkHideUnder()},e.hide=function(t){if(t)return this.$prev.css("opacity",0).css("display","none"),void this.$next.css("opacity",0).css("display","none");CTween.fadeOut(this.$prev,400,!1),CTween.fadeOut(this.$next,400,!1),this.$prev.addClass("ms-ctrl-hide"),this.$next.addClass("ms-ctrl-hide")},e.visible=function(){this.detached||(CTween.fadeIn(this.$prev,400),CTween.fadeIn(this.$next,400),this.$prev.removeClass("ms-ctrl-hide").css("display",""),this.$next.removeClass("ms-ctrl-hide").css("display",""))},e.destroy=function(){s.destroy(),this.$next.remove(),this.$prev.remove()},window.MSArrows=i,MSSlideController.registerControl("arrows",i)}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),this.options.dir="h",this.options.wheel="v"===i.dir,this.options.arrows=!1,this.options.speed=17,this.options.align=null,this.options.inset=!1,this.options.margin=10,this.options.space=10,this.options.width=100,this.options.height=100,this.options.type="thumbs",this.options.hover=!1,t.extend(this.options,i),this.thumbs=[],this.index_count=0,this.__dimen="h"===this.options.dir?"width":"height",this.__alignsize="h"===this.options.dir?"height":"width",this.__jdimen="h"===this.options.dir?"outerWidth":"outerHeight",this.__pos="h"===this.options.dir?"left":"top",this.click_enable=!0};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){if(this.$element=t("<div></div>").addClass(this.options.prefix+"thumb-list"),"tabs"===this.options.type&&this.$element.addClass(this.options.prefix+"tabs"),this.$element.addClass("ms-dir-"+this.options.dir),s.setup.call(this),this.slider.$controlsCont===this.cont?this.$element.appendTo(this.slider.$element):this.$element.appendTo(this.cont),this.$thumbscont=t("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element),this.options.arrows){var i=this;this.$fwd=t("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function(){i.controller.push(-15)}),this.$bwd=t("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function(){i.controller.push(15)})}if(!this.options.insetTo&&this.options.align){var e=this.options.align;this.options.inset?this.$element.css(e,this.options.margin):"top"===e?this.$element.detach().prependTo(this.slider.$element).css({"margin-bottom":this.options.margin,position:"relative"}):"bottom"===e?this.$element.css({"margin-top":this.options.margin,position:"relative"}):(this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.align()),"v"===this.options.dir?this.$element.width(this.options.width):this.$element.height(this.options.height)}this.checkHideUnder()},e.align=function(t){if(!this.detached){var i=this.options.align,e=this.slider.reserveSpace(i,this.options[this.__alignsize]+2*this.options.margin);this.$element.css(i,-e-this.options[this.__alignsize]-this.options.margin)}},e.slideAction=function(i){var e=i.$element.find(".ms-thumb"),s=this,n=t("<div></div>").addClass("ms-thumb-frame").append(e).append(t('<div class="ms-thumb-ol"></div>')).bind(this.options.hover?"hover":"click",function(){s.changeSlide(n)});if(this.options.align&&n.width(this.options.width-("v"===this.options.dir&&"tabs"===this.options.type?12:0)).height(this.options.height).css("margin-"+("v"===this.options.dir?"bottom":"right"),this.options.space),n[0].index=this.index_count++,this.$thumbscont.append(n),this.options.fillMode&&e.is("img")){var o=new window.MSAligner(this.options.fillMode,n,e);e[0].aligner=o,e.one("load",function(i){var e=t(this);e[0].aligner.init(e.width(),e.height()),e[0].aligner.align()}).each(t.jqLoadFix)}t.browser.msie&&e.on("dragstart",function(t){t.preventDefault()}),this.thumbs.push(n)},e.create=function(){s.create.call(this),this.__translate_end=window._css3d?" translateZ(0px)":"",this.controller=new Controller(0,0,{snappingMinSpeed:2,friction:(100-.5*this.options.speed)/100}),this.controller.renderCallback("h"===this.options.dir?this._hMove:this._vMove,this);var i=this;this.resize_listener=function(){i.__resize()},t(window).bind("resize",this.resize_listener),this.thumbSize=this.thumbs[0][this.__jdimen](!0),this.setupSwipe(),this.__resize();i=this;this.options.wheel&&(this.wheellistener=function(t){var e=window.event||t.orginalEvent||t,s=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));return i.controller.push(10*-s),!1},t.browser.mozilla?this.$element[0].addEventListener("DOMMouseScroll",this.wheellistener):this.$element.bind("mousewheel",this.wheellistener)),this.slider.api.addEventListener(MSSliderEvent.CHANGE_START,this.update,this),this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE,this.realignThumbs,this),this.cindex=this.slider.api.index(),this.select(this.thumbs[this.cindex])},e._hMove=function(t,i){this.__contPos=i,window._cssanim?this.$thumbscont[0].style[window._jcsspfx+"Transform"]="translateX("+-i+"px)"+this.__translate_end:this.$thumbscont[0].style.left=-i+"px"},e._vMove=function(t,i){this.__contPos=i,window._cssanim?this.$thumbscont[0].style[window._jcsspfx+"Transform"]="translateY("+-i+"px)"+this.__translate_end:this.$thumbscont[0].style.top=-i+"px"},e.setupSwipe=function(){this.swipeControl=new averta.TouchSwipe(this.$element),this.swipeControl.swipeType="h"===this.options.dir?"horizontal":"vertical";var t=this;"h"===this.options.dir?this.swipeControl.onSwipe=function(i){t.horizSwipeMove(i)}:this.swipeControl.onSwipe=function(i){t.vertSwipeMove(i)}},e.vertSwipeMove=function(t){if(!this.dTouch){var i=t.phase;if("start"===i)this.controller.stop();else if("move"===i)this.controller.drag(t.moveY);else if("end"===i||"cancel"===i){var e=Math.abs(t.distanceY/t.duration*50/3);e>.1?this.controller.push(-t.distanceY/t.duration*50/3):(this.click_enable=!0,this.controller.cancel())}}},e.horizSwipeMove=function(t){if(!this.dTouch){var i=t.phase;if("start"===i)this.controller.stop(),this.click_enable=!1;else if("move"===i)this.controller.drag(t.moveX);else if("end"===i||"cancel"===i){var e=Math.abs(t.distanceX/t.duration*50/3);e>.1?this.controller.push(-t.distanceX/t.duration*50/3):(this.click_enable=!0,this.controller.cancel())}}},e.update=function(){var t=this.slider.api.index();this.cindex!==t&&(null!=this.cindex&&this.unselect(this.thumbs[this.cindex]),this.cindex=t,this.select(this.thumbs[this.cindex]),this.dTouch||this.updateThumbscroll())},e.realignThumbs=function(){this.$element.find(".ms-thumb").each(function(t,i){i.aligner&&i.aligner.align()})},e.updateThumbscroll=function(){var t=this.thumbSize*this.cindex;if(NaN==this.controller.value&&(this.controller.value=0),t-this.controller.value<0)this.controller.gotoSnap(this.cindex,!0);else if(t+this.thumbSize-this.controller.value>this.$element[this.__dimen]()){var i=this.cindex-Math.floor(this.$element[this.__dimen]()/this.thumbSize)+1;this.controller.gotoSnap(i,!0)}else;},e.changeSlide=function(t){this.click_enable&&this.cindex!==t[0].index&&this.slider.api.gotoSlide(t[0].index)},e.unselect=function(t){t.removeClass("ms-thumb-frame-selected")},e.select=function(t){t.addClass("ms-thumb-frame-selected")},e.__resize=function(){var t=this.$element[this.__dimen]();if(this.ls!==t){this.ls=t,this.thumbSize=this.thumbs[0][this.__jdimen](!0);var i=this.slider.api.count()*this.thumbSize;this.$thumbscont[0].style[this.__dimen]=i+"px",i<=t?(this.dTouch=!0,this.controller.stop(),this.$thumbscont[0].style[this.__pos]=.5*(t-i)+"px",this.$thumbscont[0].style[window._jcsspfx+"Transform"]=""):(this.dTouch=!1,this.click_enable=!0,this.$thumbscont[0].style[this.__pos]="",this.controller._max_value=i-t,this.controller.options.snapsize=this.thumbSize,this.updateThumbscroll())}},e.destroy=function(){s.destroy(),this.options.wheel&&(t.browser.mozilla?this.$element[0].removeEventListener("DOMMouseScroll",this.wheellistener):this.$element.unbind("mousewheel",this.wheellistener),this.wheellistener=null),t(window).unbind("resize",this.resize_listener),this.$element.remove(),this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START,this.update,this)},window.MSThumblist=i,MSSlideController.registerControl("thumblist",i)}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),this.options.dir="h",this.options.inset=!0,this.options.margin=10,this.options.space=10,t.extend(this.options,i),this.bullets=[]};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){if(s.setup.call(this),this.$element=t("<div></div>").addClass(this.options.prefix+"bullets").addClass("ms-dir-"+this.options.dir).appendTo(this.cont),this.$bullet_cont=t("<div></div>").addClass("ms-bullets-count").appendTo(this.$element),!this.options.insetTo&&this.options.align){var i=this.options.align;this.options.inset&&this.$element.css(i,this.options.margin)}this.checkHideUnder()},e.create=function(){s.create.call(this);var i=this;this.slider.api.addEventListener(MSSliderEvent.CHANGE_START,this.update,this),this.cindex=this.slider.api.index();for(var e=0;e<this.slider.api.count();++e){var n=t("<div></div>").addClass("ms-bullet");n[0].index=e,n.on("click",function(){i.changeSlide(this.index)}),this.$bullet_cont.append(n),this.bullets.push(n),"h"===this.options.dir?n.css("margin",this.options.space/2):n.css("margin",this.options.space)}"h"===this.options.dir?this.$element.width(n.outerWidth(!0)*this.slider.api.count()):this.$element.css("margin-top",-this.$element.outerHeight(!0)/2),this.select(this.bullets[this.cindex])},e.update=function(){var t=this.slider.api.index();this.cindex!==t&&(null!=this.cindex&&this.unselect(this.bullets[this.cindex]),this.cindex=t,this.select(this.bullets[this.cindex]))},e.changeSlide=function(t){this.cindex!==t&&this.slider.api.gotoSlide(t)},e.unselect=function(t){t.removeClass("ms-bullet-selected")},e.select=function(t){t.addClass("ms-bullet-selected")},e.destroy=function(){s.destroy(),this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START,this.update,this),this.$element.remove()},window.MSBulltes=i,MSSlideController.registerControl("bullets",i)}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),this.options.dir="h",this.options.autohide=!0,this.options.width=4,this.options.color="#3D3D3D",this.options.margin=10,t.extend(this.options,i),this.__dimen="h"===this.options.dir?"width":"height",this.__jdimen="h"===this.options.dir?"outerWidth":"outerHeight",this.__pos="h"===this.options.dir?"left":"top",this.__translate_end=window._css3d?" translateZ(0px)":"",this.__translate_start="h"===this.options.dir?" translateX(":"translateY("};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){if(this.$element=t("<div></div>").addClass(this.options.prefix+"sbar").addClass("ms-dir-"+this.options.dir),s.setup.call(this),this.slider.$controlsCont===this.cont?this.$element.appendTo(this.slider.$element):this.$element.appendTo(this.cont),this.$bar=t("<div></div>").addClass(this.options.prefix+"bar").appendTo(this.$element),this.slider.options.loop&&(console.log("WARNING, MSScrollbar cannot work with looped slider."),this.disable=!0,this.$element.remove()),"v"===this.options.dir?this.$bar.width(this.options.width):this.$bar.height(this.options.width),this.$bar.css("background-color",this.options.color),!this.options.insetTo&&this.options.align){"v"===this.options.dir?this.$element.css({right:"auto",left:"auto"}):this.$element.css({top:"auto",bottom:"auto"});var i=this.options.align;this.options.inset?this.$element.css(i,this.options.margin):"top"===i?this.$element.prependTo(this.slider.$element).css({"margin-bottom":this.options.margin,position:"relative"}):"bottom"===i?this.$element.css({"margin-top":this.options.margin,position:"relative"}):(this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.align())}this.checkHideUnder()},e.align=function(t){if(!this.detached){var i=this.options.align,e=this.slider.reserveSpace(i,2*this.options.margin+this.options.width);this.$element.css(i,-e-this.options.margin-this.options.width)}},e.create=function(){if(!this.disable){this.scroller=this.slider.api.scroller,this.slider.api.view.addEventListener(MSViewEvents.SCROLL,this._update,this),this.slider.api.addEventListener(MSSliderEvent.RESIZE,this._resize,this),this._resize(),this.options.autohide&&this.$bar.css("opacity","0")}},e._resize=function(){this.vdimen=this.$element[this.__dimen](),this.bar_dimen=this.slider.api.view["__"+this.__dimen]*this.vdimen/this.scroller._max_value,this.$bar[this.__dimen](this.bar_dimen)},e._update=function(){var t=this.scroller.value*(this.vdimen-this.bar_dimen)/this.scroller._max_value;if(this.lvalue!==t){if(this.lvalue=t,this.options.autohide){clearTimeout(this.hto),this.$bar.css("opacity","1");var i=this;this.hto=setTimeout(function(){i.$bar.css("opacity","0")},150)}t<0?this.$bar[0].style[this.__dimen]=this.bar_dimen+t+"px":(t>this.vdimen-this.bar_dimen&&(this.$bar[0].style[this.__dimen]=this.vdimen-t+"px"),window._cssanim?this.$bar[0].style[window._jcsspfx+"Transform"]=this.__translate_start+t+"px)"+this.__translate_end:this.$bar[0].style[this.__pos]=t+"px")}},e.destroy=function(){s.destroy(),this.slider.api.view.removeEventListener(MSViewEvents.SCROLL,this._update,this),this.slider.api.removeEventListener(MSSliderEvent.RESIZE,this._resize,this),this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.$element.remove()},window.MSScrollbar=i,MSSlideController.registerControl("scrollbar",i)}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),this.options.autohide=!1,this.options.width=4,this.options.color="#FFFFFF",this.options.inset=!0,this.options.margin=0,t.extend(this.options,i)};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){if(s.setup.call(this),this.$element=t("<div></div>").addClass(this.options.prefix+"timerbar"),s.setup.call(this),this.slider.$controlsCont===this.cont?this.$element.appendTo(this.slider.$element):this.$element.appendTo(this.cont),this.$bar=t("<div></div>").addClass("ms-time-bar").appendTo(this.$element),"v"===this.options.dir?(this.$bar.width(this.options.width),this.$element.width(this.options.width)):(this.$bar.height(this.options.width),this.$element.height(this.options.width)),this.$bar.css("background-color",this.options.color),!this.options.insetTo&&this.options.align){this.$element.css({top:"auto",bottom:"auto"});var i=this.options.align;this.options.inset?this.$element.css(i,this.options.margin):"top"===i?this.$element.prependTo(this.slider.$element).css({"margin-bottom":this.options.margin,position:"relative"}):"bottom"===i?this.$element.css({"margin-top":this.options.margin,position:"relative"}):(this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.align())}this.checkHideUnder()},e.align=function(t){if(!this.detached){var i=this.options.align,e=this.slider.reserveSpace(i,2*this.options.margin+this.options.width);this.$element.css(i,-e-this.options.margin-this.options.width)}},e.create=function(){s.create.call(this),this.slider.api.addEventListener(MSSliderEvent.WAITING,this._update,this),this._update()},e._update=function(){this.$bar[0].style.width=this.slider.api._delayProgress+"%"},e.destroy=function(){s.destroy(),this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.slider.api.removeEventListener(MSSliderEvent.WAITING,this._update,this),this.$element.remove()},window.MSTimerbar=i,MSSlideController.registerControl("timebar",i)}(jQuery),function(t){"use strict";var i=function(i){BaseControl.call(this),this.options.color="#A2A2A2",this.options.stroke=10,this.options.radius=4,this.options.autohide=!1,t.extend(this.options,i)};i.extend(BaseControl);var e=i.prototype,s=BaseControl.prototype;e.setup=function(){if(s.setup.call(this),this.$element=t("<div></div>").addClass(this.options.prefix+"ctimer").appendTo(this.cont),this.$canvas=t("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element),this.$bar=t("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element),!this.$canvas[0].getContext)return this.destroy(),void(this.disable=!0);this.ctx=this.$canvas[0].getContext("2d"),this.prog=0,this.__w=2*(this.options.radius+this.options.stroke/2),this.$canvas[0].width=this.__w,this.$canvas[0].height=this.__w,this.checkHideUnder()},e.create=function(){if(!this.disable){s.create.call(this),this.slider.api.addEventListener(MSSliderEvent.WAITING,this._update,this);var t=this;this.$element.click(function(){t.slider.api.paused?t.slider.api.resume():t.slider.api.pause()}),this._update()}},e._update=function(){var i=this;t(this).stop(!0).animate({prog:.01*this.slider.api._delayProgress},{duration:200,step:function(){i._draw()}})},e._draw=function(){this.ctx.clearRect(0,0,this.__w,this.__w),this.ctx.beginPath(),this.ctx.arc(.5*this.__w,.5*this.__w,this.options.radius,1.5*Math.PI,1.5*Math.PI+2*Math.PI*this.prog,!1),this.ctx.strokeStyle=this.options.color,this.ctx.lineWidth=this.options.stroke,this.ctx.stroke()},e.destroy=function(){s.destroy(),this.disable||(t(this).stop(!0),this.slider.api.removeEventListener(MSSliderEvent.WAITING,this._update,this),this.$element.remove())},window.MSCircleTimer=i,MSSlideController.registerControl("circletimer",i)}(jQuery),function(t){"use strict";window.MSLightbox=function(i){BaseControl.call(this,i),this.options.autohide=!1,t.extend(this.options,i),this.data_list=[]},MSLightbox.fadeDuratation=400,MSLightbox.extend(BaseControl);var i=MSLightbox.prototype,e=BaseControl.prototype;i.setup=function(){e.setup.call(this),this.$element=t("<div></div>").addClass(this.options.prefix+"lightbox-btn").appendTo(this.cont),this.checkHideUnder()},i.slideAction=function(i){t("<div></div>").addClass(this.options.prefix+"lightbox-btn").appendTo(i.$element).append(t(i.$element.find(".ms-lightbox")))},i.create=function(){e.create.call(this)},MSSlideController.registerControl("lightbox",MSLightbox)}(jQuery),function(t){"use strict";window.MSSlideInfo=function(i){BaseControl.call(this,i),this.options.autohide=!1,this.options.align=null,this.options.inset=!1,this.options.margin=10,this.options.size=100,this.options.dir="h",t.extend(this.options,i),this.data_list=[]},MSSlideInfo.fadeDuratation=400,MSSlideInfo.extend(BaseControl);var i=MSSlideInfo.prototype,e=BaseControl.prototype;i.setup=function(){if(this.$element=t("<div></div>").addClass(this.options.prefix+"slide-info").addClass("ms-dir-"+this.options.dir),e.setup.call(this),this.slider.$controlsCont===this.cont?this.$element.appendTo(this.slider.$element):this.$element.appendTo(this.cont),!this.options.insetTo&&this.options.align){var i=this.options.align;this.options.inset?this.$element.css(i,this.options.margin):"top"===i?this.$element.prependTo(this.slider.$element).css({"margin-bottom":this.options.margin,position:"relative"}):"bottom"===i?this.$element.css({"margin-top":this.options.margin,position:"relative"}):(this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.align()),"v"===this.options.dir?this.$element.width(this.options.size):this.$element.css("min-height",this.options.size)}this.checkHideUnder()},i.align=function(t){if(!this.detached){var i=this.options.align,e=this.slider.reserveSpace(i,this.options.size+2*this.options.margin);this.$element.css(i,-e-this.options.size-this.options.margin)}},i.slideAction=function(i){var e=t(i.$element.find(".ms-info"));e.detach(),this.data_list[i.index]=e},i.create=function(){e.create.call(this),this.slider.api.addEventListener(MSSliderEvent.CHANGE_START,this.update,this),this.cindex=this.slider.api.index(),this.switchEle(this.data_list[this.cindex])},i.update=function(){var t=this.slider.api.index();this.switchEle(this.data_list[t]),this.cindex=t},i.switchEle=function(t){if(this.current_ele){this.current_ele[0].tween&&this.current_ele[0].tween.stop(!0),this.current_ele[0].tween=CTween.animate(this.current_ele,MSSlideInfo.fadeDuratation,{opacity:0},{complete:function(){this.detach(),this[0].tween=null,t.css("position","relative")},target:this.current_ele}),t.css("position","absolute")}this.__show(t)},i.__show=function(t){t.appendTo(this.$element).css("opacity","0"),this.current_ele&&t.height(Math.max(t.height(),this.current_ele.height())),clearTimeout(this.tou),this.tou=setTimeout(function(){CTween.fadeIn(t,MSSlideInfo.fadeDuratation),t.css("height","")},MSSlideInfo.fadeDuratation),t[0].tween&&t[0].tween.stop(!0),this.current_ele=t},i.destroy=function(){e.destroy(),clearTimeout(this.tou),this.current_ele&&this.current_ele[0].tween&&this.current_ele[0].tween.stop("true"),this.$element.remove(),this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE,this.align,this),this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START,this.update,this)},MSSlideController.registerControl("slideinfo",MSSlideInfo)}(jQuery),function(t){window.MSGallery=function(i,e){this.id=i,this.slider=e,this.telement=t("#"+i),this.botcont=t("<div></div>").addClass("ms-gallery-botcont").appendTo(this.telement),this.thumbcont=t("<div></div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont),this.playbtn=t("<div></div>").addClass("ms-gal-playbtn").appendTo(this.botcont),this.thumbtoggle=t("<div></div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont),e.control("thumblist",{insertTo:this.thumbcont,autohide:!1,dir:"h"}),e.control("slidenum",{insertTo:this.botcont,autohide:!1}),e.control("slideinfo",{insertTo:this.botcont,autohide:!1}),e.control("timebar",{insertTo:this.botcont,autohide:!1}),e.control("bullets",{insertTo:this.botcont,autohide:!1})};var i=MSGallery.prototype;i._init=function(){var t=this;this.slider.api.paused||this.playbtn.addClass("btn-pause"),this.playbtn.click(function(){t.slider.api.paused?(t.slider.api.resume(),t.playbtn.addClass("btn-pause")):(t.slider.api.pause(),t.playbtn.removeClass("btn-pause"))}),this.thumbtoggle.click(function(){t.vthumbs?(t.thumbtoggle.removeClass("btn-hide"),t.vthumbs=!1,t.thumbcont.addClass("hide-thumbs")):(t.thumbtoggle.addClass("btn-hide"),t.thumbcont.removeClass("hide-thumbs"),t.vthumbs=!0)})},i.setup=function(){var i=this
;t(document).ready(function(){i._init()})}}(jQuery),function(t){var i=function(t,i,e){return"https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+t+"&photoset_id="+i+"&per_page="+e+"&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"},e=function(t,i,e){return"https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key="+t+"&user_id="+i+"&per_page="+e+"&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"},s=function(t,i,e,s,n,o){return"_o"===n&&o?o.url_o:"https://farm"+t+".staticflickr.com/"+i+"/"+e+"_"+s+n+".jpg"};window.MSFlickrV2=function(s,n){var o={count:10,type:"photoset",thumbSize:"q",imgSize:"c"};if(this.slider=s,this.slider.holdOn(),n.key){t.extend(o,n),this.options=o;var a=this;"photoset"===this.options.type?t.getJSON(i(this.options.key,this.options.id,this.options.count),function(t){a._photosData(t)}):t.getJSON(e(this.options.key,this.options.id,this.options.count),function(t){a.options.type="photos",a._photosData(t)}),""!==this.options.imgSize&&"-"!==this.options.imgSize&&(this.options.imgSize="_"+this.options.imgSize),this.options.thumbSize="_"+this.options.thumbSize,this.slideTemplate=this.slider.$element.find(".ms-slide")[0].outerHTML,this.slider.$element.find(".ms-slide").remove()}else this.errMsg("Flickr API Key required. Please add it in settings.")};var n=MSFlickrV2.prototype;n._photosData=function(i){if("fail"!==i.stat){var e=this;this.options.author||this.options.desc;t.each(i[this.options.type].photo,function(i,s){var n=e.slideTemplate.replace(/{{[\w-]+}}/g,function(t){return t=t.replace(/{{|}}/g,""),o[t]?o[t](s,e):"{{"+t+"}}"});t(n).appendTo(e.slider.$element)}),e._initSlider()}else this.errMsg("Flickr API ERROR#"+i.code+": "+i.message)},n.errMsg=function(i){this.slider.$element.css("display","block"),this.errEle||(this.errEle=t('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)),this.errEle.html(i)},n._initSlider=function(){this.slider.release()};var o={image:function(t,i){return s(t.farm,t.server,t.id,t.secret,i.options.imgSize,t)},thumb:function(t,i){return s(t.farm,t.server,t.id,t.secret,i.options.thumbSize)},title:function(t,i){return t.title},"owner-name":function(t,i){return t.ownername},"date-taken":function(t,i){return t.datetaken},views:function(t,i){return t.views},description:function(t,i){return t.description._content}}}(jQuery),function(t){window.MSFacebookGallery=function(i,e){var s={count:10,type:"photostream",thumbSize:"320",imgSize:"orginal",https:!1,token:""};this.slider=i,this.slider.holdOn(),t.extend(s,e),this.options=s,this.graph="https://graph.facebook.com";var n=this;"photostream"===this.options.type?t.getJSON(this.graph+"/"+this.options.username+"/photos/uploaded/?fields=source,name,link,images,from&limit="+this.options.count+"&access_token="+this.options.token,function(t){n._photosData(t)}):t.getJSON(this.graph+"/"+this.options.albumId+"/photos?fields=source,name,link,images,from&limit="+this.options.count+"&access_token="+this.options.token,function(t){n._photosData(t)}),this.slideTemplate=this.slider.$element.find(".ms-slide")[0].outerHTML,this.slider.$element.find(".ms-slide").remove()};var i=MSFacebookGallery.prototype;i._photosData=function(i){if(i.error)this.errMsg("Facebook API ERROR#"+i.error.code+"("+i.error.type+"): "+i.error.message);else{for(var e=this,n=(this.options.author||this.options.desc,0),o=i.data.length;n!==o;n++){var a=e.slideTemplate.replace(/{{[\w-]+}}/g,function(t){return t=t.replace(/{{|}}/g,""),s[t]?s[t](i.data[n],e):"{{"+t+"}}"});t(a).appendTo(e.slider.$element)}e._initSlider()}},i.errMsg=function(i){this.slider.$element.css("display","block"),this.errEle||(this.errEle=t('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)),this.errEle.html(i)},i._initSlider=function(){this.slider.release()};var e=function(t,i){if("orginal"===i)return t[0].source;for(var e=0,s=t.length;e!==s;e++)if(-1!==t[e].source.indexOf(i+"x"+i))return t[e].source;return t[0].source},s={image:function(t,i){return e(t.images,i.options.imgSize)},thumb:function(t,i){return e(t.images,i.options.thumbSize)},name:function(t,i){return t.name},"owner-name":function(t,i){return t.from.name},link:function(t,i){return t.link}}}(jQuery),function(t){"use strict";window.MSScrollParallax=function(t,i,e,s){this.fade=s,this.slider=t,this.parallax=i/100,this.bgparallax=e/100,t.api.addEventListener(MSSliderEvent.INIT,this.init,this),t.api.addEventListener(MSSliderEvent.DESTROY,this.destory,this),t.api.addEventListener(MSSliderEvent.CHANGE_END,this.resetLayers,this),t.api.addEventListener(MSSliderEvent.CHANGE_START,this.updateCurrentSlide,this)},window.MSScrollParallax.setup=function(t,i,e,s){if(!window._mobile)return null==i&&(i=50),null==e&&(e=40),new MSScrollParallax(t,i,e,s)};var i=window.MSScrollParallax.prototype;i.init=function(i){this.slider.$element.addClass("ms-scroll-parallax"),this.sliderOffset=this.slider.$element.offset().top,this.updateCurrentSlide();for(var e,s=this.slider.api.view.slideList,n=0,o=s.length;n!==o;n++)e=s[n],e.hasLayers&&(e.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>'),e.$scrollParallaxCont=e.layerController.$layers.parent());t(window).on("scroll",{that:this},this.moveParallax).trigger("scroll")},i.resetLayers=function(t){if(this.lastSlide){var i=this.lastSlide.$scrollParallaxCont;window._css2d?(i&&(i[0].style[window._jcsspfx+"Transform"]=""),this.lastSlide.hasBG&&(this.lastSlide.$imgcont[0].style[window._jcsspfx+"Transform"]="")):(i&&(i[0].style.top=""),this.lastSlide.hasBG&&(this.lastSlide.$imgcont[0].style.top="0px"))}},i.updateCurrentSlide=function(t){this.lastSlide=this.currentSlide,this.currentSlide=this.slider.api.currentSlide,this.moveParallax({data:{that:this}})},i.moveParallax=function(i){var e=i.data.that,s=e.slider,n=e.sliderOffset,o=t(window).scrollTop(),a=e.currentSlide.$scrollParallaxCont,r=n-o;r<=0?(a&&(window._css3d?a[0].style[window._jcsspfx+"Transform"]="translateY("+-r*e.parallax+"px) translateZ(0.4px)":window._css2d?a[0].style[window._jcsspfx+"Transform"]="translateY("+-r*e.parallax+"px)":a[0].style.top=-r*e.parallax+"px"),e.updateSlidesBG(-r*e.bgparallax+"px",!0),a&&e.fade&&a.css("opacity",1-Math.min(1,-r/s.api.height))):(a&&(window._css2d?a[0].style[window._jcsspfx+"Transform"]="":a[0].style.top=""),e.updateSlidesBG("0px",!1),a&&e.fade&&a.css("opacity",1))},i.updateSlidesBG=function(i,e){for(var s=this.slider.api.view.slideList,n=!e||t.browser.msie||t.browser.opera?"":"fixed",o=0,a=s.length;o!==a;o++)s[o].hasBG&&(s[o].$imgcont[0].style.position=n,s[o].$imgcont[0].style.top=i),s[o].$bgvideocont&&(s[o].$bgvideocont[0].style.position=n,s[o].$bgvideocont[0].style.top=i)},i.destory=function(){slider.api.removeEventListener(MSSliderEvent.INIT,this.init,this),slider.api.removeEventListener(MSSliderEvent.DESTROY,this.destory,this),slider.api.removeEventListener(MSSliderEvent.CHANGE_END,this.resetLayers,this),slider.api.removeEventListener(MSSliderEvent.CHANGE_START,this.updateCurrentSlide,this),t(window).off("scroll",this.moveParallax)}}(jQuery),function(t,i,e){var s=0;if(e.MasterSlider){var n=function(t){this.slider=t,this.PId=s++,this.slider.options.keyboard&&t.api.addEventListener(MSSliderEvent.INIT,this.init,this)};n.name="MSKeyboardNav";var o=n.prototype;o.init=function(){var e=this.slider.api;t(i).on("keydown.kbnav"+this.PId,function(t){var i=t.which;37===i||40===i?e.previous(!0):38!==i&&39!==i||e.next(!0)})},o.destroy=function(){t(i).off("keydown.kbnav"+this.PId),this.slider.api.removeEventListener(MSSliderEvent.INIT,this.init,this)},MasterSlider.registerPlugin(n)}}(jQuery,document,window),function(t,i,e){var s=0,n=t(e),o=t(i);if(e.MasterSlider){var a=function(i){this.PId=s++,this.slider=i,this.$slider=i.$element,this.slider.options.startOnAppear&&(i.holdOn(),o.ready(t.proxy(this.init,this)))};a.name="MSStartOnAppear";var r=a.prototype;r.init=function(){this.slider.api;n.on("scroll.soa"+this.PId,t.proxy(this._onScroll,this)).trigger("scroll")},r._onScroll=function(){var t=n.scrollTop()+n.height(),i=this.$slider.offset().top;i<t&&(n.off("scroll.soa"+this.PId),this.slider.release())},r.destroy=function(){},MasterSlider.registerPlugin(a)}}(jQuery,document,window),function(t,i,e){var s={"hue-rotate":"deg",blur:"px"},n={opacity:1,contrast:1,brightness:1,saturate:1,"hue-rotate":0,invert:0,sepia:0,blur:0,grayscale:0};if(i.MasterSlider){var o=function(t){this.slider=t,this.slider.options.filters&&t.api.addEventListener(MSSliderEvent.INIT,this.init,this)};o.name="MSFilters";var a=o.prototype;a.init=function(){var t=this.slider.api,i=t.view;this.filters=this.slider.options.filters,this.slideList=i.slideList,this.slidesCount=i.slidesCount,this.dimension=i[i.__dimension],this.target="slide"===this.slider.options.filterTarget?"$element":"$bg_img",this.filterName=$.browser.webkit?"WebkitFilter":"filter";var e=i.controller.__renderHook.fun,s=i.controller.__renderHook.ref;i.controller.renderCallback(function(t,i){e.call(s,t,i),this.applyEffect(i)},this),this.applyEffect(i.controller.value)},a.applyEffect=function(t){for(var i,e,s=0;s<this.slidesCount;++s)e=this.slideList[s],i=Math.min(1,Math.abs(t-e.position)/this.dimension),e[this.target]&&($.browser.msie?null!=this.filters.opacity&&e[this.target].opacity(1-this.filters.opacity*i):e[this.target][0].style[this.filterName]=this.generateStyle(i))},a.generateStyle=function(t){var i="";for(var e in this.filters)s[e]||"",i+=e+"("+(n[e]+(this.filters[e]-n[e])*t)+") ";return i},a.destroy=function(){this.slider.api.removeEventListener(MSSliderEvent.INIT,this.init,this)},MasterSlider.registerPlugin(o)}}(document,window,jQuery),function(t,i,e){if(e.MasterSlider){var s=function(t){this.slider=t,t.api.addEventListener(MSSliderEvent.INIT,this.init,this)};s.name="MSScrollToAction";var n=s.prototype;n.init=function(){var t=this.slider.api;t.scrollToEnd=a,t.scrollTo=o},n.destroy=function(){};var o=function(i,e){this.slider.$element,i=t(i).eq(0);0!==i.length&&(console.log(i.offset().top,e),null==e&&(e=1.4),t("html, body").animate({scrollTop:i.offset().top},1e3*e,"easeInOutQuad"))},a=function(i){var e=this.slider.$element;null==i&&(i=1.4),t("html, body").animate({scrollTop:e.offset().top+e.outerHeight(!1)},1e3*i,"easeInOutQuad")};MasterSlider.registerPlugin(s)}}(jQuery,document,window);
;(function($){
	
	//"use strict";
	
	window.package = function(name){
		if(!window[name]) window[name] = {};
	};
	
	var extend = function(target , object){
		for(var key in object)	target[key] = object[key];
	};
	
	Function.prototype.extend = function(superclass){
		if(typeof superclass.prototype.constructor === "function"){
			extend(this.prototype , superclass.prototype);
			this.prototype.constructor = this;
		}else{
			this.prototype.extend(superclass);
			this.prototype.constructor = this;
		}	
	};
	
	// Converts JS prefix to CSS prefix
	var trans = {
		'Moz'    : '-moz-',
		'Webkit' : '-webkit-',
		'Khtml'  : '-khtml-' ,
		'O'		 : '-o-',
		'ms'	 : '-ms-',
		'Icab'   : '-icab-'
	};
	
	window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
	window._touch  = 'ontouchstart' in document;
	$(document).ready(function(){
		window._jcsspfx 		= getVendorPrefix();	   // JS CSS VendorPrefix
		window._csspfx 			= trans[window._jcsspfx];  // CSS VendorPrefix
		window._cssanim 		= supportsTransitions();
		window._css3d   		= supports3DTransforms();
		window._css2d   		= supportsTransforms();
	});
	
	
	// Thanks to LEA VEROU
	// http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
	function getVendorPrefix() {
	
		if('result' in arguments.callee) return arguments.callee.result;
	
		var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
	
		var someScript = document.getElementsByTagName('script')[0];
	
		for(var prop in someScript.style){
			if(regex.test(prop)){
				return arguments.callee.result = prop.match(regex)[0];
			}
		}
	
		if('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
		if('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';
	
		return arguments.callee.result = '';
	}
	
	
	// Thanks to Steven Benner.
	// http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
	window.parseQueryString = function(url){
		var queryString = {};
		url.replace(
		    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		    function($0, $1, $2, $3) { queryString[$1] = $3; }
		);
		
		return queryString;
	};
	
	function checkStyleValue(prop){
		 var b = document.body || document.documentElement;
	    var s = b.style;
	    var p = prop;
	    if(typeof s[p] == 'string') {return true; }
	
	    // Tests for vendor specific prop
	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for(var i=0; i<v.length; i++) {
	      if(typeof s[v[i] + p] == 'string') { return true; }
	    }
	    return false;
	}
	
	function supportsTransitions() {
	   return checkStyleValue('transition');
	}
	
	function supportsTransforms(){
	   return checkStyleValue('transform');
	}
	
	function supports3DTransforms(){
		if(!supportsTransforms()) return false;
	    var el = document.createElement('i'),
	    has3d,
	    transforms = {
	        'WebkitTransform':'-webkit-transform',
	        'OTransform':'-o-transform',
	        'MSTransform':'-ms-transform',
	        'msTransform':'-ms-transform',
	        'MozTransform':'-moz-transform',
	        'Transform':'transform',
	        'transform':'transform'
	    };
		
		el.style.display = 'block';

	    // Add it to the body to get the computed style
	    document.body.insertBefore(el, null);
		
	    for(var t in transforms){
	        if( el.style[t] !== undefined ){
	            el.style[t] = 'translate3d(1px,1px,1px)';
	            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	        }
	    }
	
	    document.body.removeChild(el);
	
	    return (has3d != null && has3d.length > 0 && has3d !== "none");
	}
	
	/**
	 * Provides requestAnimationFrame in a cross browser way.
	 * @author paulirish / http://paulirish.com/
	 */
	var fps60 = 50/3;
	
	if ( !window.requestAnimationFrame ) {
	 
		window.requestAnimationFrame = ( function() {
	 
			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
	 
				window.setTimeout( callback, fps60 );
	 
			};
	 
		} )();
	 
	}
	
	if (!window.getComputedStyle) {
	    window.getComputedStyle = function(el, pseudo) {
	        this.el = el;
	        this.getPropertyValue = function(prop) {
	            var re = /(\-([a-z]){1})/g;
	            if (prop == 'float') prop = 'styleFloat';
	            if (re.test(prop)) {
	                prop = prop.replace(re, function () {
	                    return arguments[2].toUpperCase();
	                });
	            }
	            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
	        };
	        return el.currentStyle;
	    };
	}

	// IE8 Array indexOf fix
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function(elt /*, from*/) {
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}


	/** 
	 * check ie browser
	 * @param  {Number | string}  version 
	 * @return {Boolean} 
	 */
	window.isMSIE = function ( version ) {
		if ( !$.browser.msie ) {
			return false;
		} else if ( !version ) {
			return true;
		}
		var ieVer = $.browser.version.slice(0 , $.browser.version.indexOf('.'));
		if ( typeof version === 'string' ) {
			if ( version.indexOf('<') !== -1  || version.indexOf('>') !== -1) {
				return eval( ieVer + version );
			} else {
				return eval( version + '==' + ieVer );
			}
		} else {
			return version == ieVer;
		}
	}

	$.removeDataAttrs = function($target, exclude) {
	    var i,
	        attrName,
	        dataAttrsToDelete = [],
	        dataAttrs = $target[0].attributes,
	        dataAttrsLen = dataAttrs.length;
	 	
	    exclude = exclude || [];

	    // loop through attributes and make a list of those
	    // that begin with 'data-'
	    for (i=0; i<dataAttrsLen; i++) {
	    	attrName = dataAttrs[i].name;
	        if ( 'data-' === attrName.substring(0,5) && exclude.indexOf(attrName) === -1 ) {
	            // Why don't you just delete the attributes here?
	            // Deleting an attribute changes the indices of the
	            // others wreaking havoc on the loop we are inside
	            // b/c dataAttrs is a NamedNodeMap (not an array or obj)
	            dataAttrsToDelete.push(dataAttrs[i].name);
	        }
	    }
	    // delete each of the attributes we found above
	    // i.e. those that start with "data-"
	    $.each( dataAttrsToDelete, function( index, attrName ) {
	        $target.removeAttr( attrName );
	    })
	};
	
	if(jQuery){
		$.jqLoadFix = function(){
			if(this.complete){
				var that = this;
				setTimeout(function(){$(that).load();} , 1);
			}	
		};
		
		jQuery.uaMatch = jQuery.uaMatch || function( ua ) {
			ua = ua.toLowerCase();
		
			var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
				/(msie) ([\w.]+)/.exec( ua ) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
				[];
		
			return {
				browser: match[ 1 ] || "",
				version: match[ 2 ] || "0"
			};
		};
		
		// Don't clobber any existing jQuery.browser in case it's different
		//if ( !jQuery.browser ) {
			matched = jQuery.uaMatch( navigator.userAgent );
			browser = {};
		
			if ( matched.browser ) {
				browser[ matched.browser ] = true;
				browser.version = matched.version;
			}
		
			// Chrome is Webkit, but Webkit is also Safari.
			if ( browser.chrome ) {
				browser.webkit = true;
			} else if ( browser.webkit ) {
				browser.safari = true;
			}

			// hofix for IE11 detection 
			var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
			if (isIE11) {
				browser.msie = "true";
				delete browser.mozilla;
			}

			jQuery.browser = browser;
			
		//}
		
		$.fn.preloadImg = function(src , _event){
			this.each(function(){
				var $this = $(this);
				var self  = this;
				var img = new Image();
				img.onload = function(event){
					if(event == null) event = {}; // IE8
					$this.attr('src' , src);
					event.width = img.width;
					event.height = img.height;
					$this.data('width', img.width);
					$this.data('height', img.height);
					setTimeout(function(){_event.call(self , event);},50);
					img = null;
				};
				img.src = src;
			});
			return this;
		};
	}
})(jQuery);

/* ================== bin-debug/js/pro/tools/EventDispatcher.js =================== */
;(function(){
	
	"use strict";
	
	averta.EventDispatcher = function(){
		this.listeners = {};
	};
	
	averta.EventDispatcher.extend = function(_proto){
		var instance = new averta.EventDispatcher();
		for(var key in instance)
			if(key != 'constructor') _proto[key] =  averta.EventDispatcher.prototype[key];
	};
	
	averta.EventDispatcher.prototype = {
		
		constructor : averta.EventDispatcher,
		
		addEventListener : function(event , listener , ref){
			if(!this.listeners[event]) this.listeners[event] = [];
			this.listeners[event].push({listener:listener , ref:ref});
			
		},
		
		removeEventListener : function(event , listener , ref){
			if(this.listeners[event]){

				for(var i = 0; i < this.listeners[event].length ; ++i){
					
					if(listener === this.listeners[event][i].listener && ref === this.listeners[event][i].ref){	
						this.listeners[event].splice(i--,1);
					}
				}
				
				if (this.listeners[event].length === 0){
					this.listeners[event] = null;
				}
			}
		},
		
		dispatchEvent : function (event) {
			event.target = this;
			if(this.listeners[event.type]){
				for(var i = 0 , l = this.listeners[event.type].length; i < l ; ++i){
					this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref , event);	
				}
			}
		}
	};

})();

/* ================== bin-debug/js/pro/tools/TouchSwipe.js =================== */
;(function($){
	
	"use strict";
	
	var isTouch 	= 'ontouchstart' in document,
		isPointer 	= window.navigator.pointerEnabled,
		isMSPoiner 	= !isPointer && window.navigator.msPointerEnabled,
		usePointer  = isPointer || isMSPoiner,
	// Events	
		ev_start  = (isPointer ? 'pointerdown ' : '' ) + (isMSPoiner ? 'MSPointerDown ' : '' ) + (isTouch ? 'touchstart ' : '' ) + 'mousedown',
		ev_move   = (isPointer ? 'pointermove ' : '' ) + (isMSPoiner ? 'MSPointerMove ' : '' ) + (isTouch ? 'touchmove '  : '' ) + 'mousemove',
		ev_end    = (isPointer ? 'pointerup '   : '' ) + (isMSPoiner ? 'MSPointerUp '   : '' ) + (isTouch ? 'touchend '   : '' ) + 'mouseup', 
		ev_cancel = (isPointer ? 'pointercancel '   : '' ) + (isMSPoiner ? 'MSPointerCancel ': '' ) + 'touchcancel';
	

	averta.TouchSwipe = function($element){
		this.$element = $element;
		this.enabled = true;

		$element.bind(ev_start  , {target: this} , this.__touchStart);

		$element[0].swipe = this;
		
		this.onSwipe    = null;
		this.swipeType  = 'horizontal';
		this.noSwipeSelector = 'input, textarea, button, .no-swipe, .ms-no-swipe';

		this.lastStatus = {};
	
	};
	
	var p = averta.TouchSwipe.prototype;
	
 	/*-------------- METHODS --------------*/
	
	p.getDirection = function(new_x , new_y){
		switch(this.swipeType){
			case 'horizontal':
				return new_x <= this.start_x ? 'left' : 'right';
			break;
			case 'vertical':
				return new_y <= this.start_y ? 'up' : 'down';
			break;
			case 'all':
				if(Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y))
					return new_x <= this.start_x ? 'left' : 'right';
				else
					return new_y <= this.start_y ? 'up' : 'down';
			break;
		}
	};
	
	p.priventDefultEvent = function(new_x , new_y){
		//if(this.priventEvt != null) return this.priventEvt;
		var dx = Math.abs(new_x - this.start_x);
		var dy = Math.abs(new_y - this.start_y);
		
		var horiz =  dx > dy;
		
		return (this.swipeType === 'horizontal' && horiz) ||
			   (this.swipeType === 'vertical' && !horiz);

		//return this.priventEvt;
	};
	
	p.createStatusObject = function(evt){
		var status_data = {} , temp_x , temp_y;
		
		temp_x = this.lastStatus.distanceX || 0;
		temp_y = this.lastStatus.distanceY || 0;
		
		status_data.distanceX = evt.pageX - this.start_x;
		status_data.distanceY = evt.pageY - this.start_y;
		status_data.moveX = status_data.distanceX - temp_x;
		status_data.moveY = status_data.distanceY - temp_y;
		
		status_data.distance  = parseInt( Math.sqrt(Math.pow(status_data.distanceX , 2) + Math.pow(status_data.distanceY , 2)) );
		
		status_data.duration  = new Date().getTime() - this.start_time;
		status_data.direction = this.getDirection(evt.pageX , evt.pageY);
		
		return status_data;
	};
	
	
	p.__reset = function(event , jqevt){
		this.reset = false;
		this.lastStatus = {};
		this.start_time = new Date().getTime();
		this.start_x = isTouch ? event.touches[0].pageX : (usePointer ? event.pageX : jqevt.pageX);
		this.start_y = isTouch ? event.touches[0].pageY : (usePointer ? event.pageY : jqevt.pageY);
	};
	
	p.__touchStart = function(event){
		
		var swipe = event.data.target;
		var jqevt = event;
		if(!swipe.enabled) return;

		if ( $(event.target).closest(swipe.noSwipeSelector, swipe.$element).length > 0 ) {
			return;
		}

		event = event.originalEvent;
		
		if( usePointer ) {
			$(this).css('-ms-touch-action', swipe.swipeType === 'horizontal' ? 'pan-y' : 'pan-x');
		}

		if(!swipe.onSwipe) {
			$.error('Swipe listener is undefined');
			return;
		}
		
		if(swipe.touchStarted) return;
		
		swipe.start_x = isTouch ? event.touches[0].pageX : (usePointer ? event.pageX : jqevt.pageX);
		swipe.start_y = isTouch ? event.touches[0].pageY : (usePointer ? event.pageY : jqevt.pageY);
		
		swipe.start_time = new Date().getTime(); 
		
		$(document).bind(ev_end    , {target: swipe} , swipe.__touchEnd).
		 		    bind(ev_move   , {target: swipe} , swipe.__touchMove).
					bind(ev_cancel , {target: swipe} , swipe.__touchCancel);

		var evt = isTouch ? event.touches[0] : (usePointer ? event : jqevt);
		var status = swipe.createStatusObject(evt);
		status.phase = 'start';
		
		swipe.onSwipe.call(null , status);
		
		if(!isTouch)
			jqevt.preventDefault();
		
		swipe.lastStatus = status;
		swipe.touchStarted = true;
	};
	
	p.__touchMove = function(event){
		var swipe = event.data.target;
		var jqevt = event;
		event = event.originalEvent;
		
		if(!swipe.touchStarted) return;
		
		clearTimeout(swipe.timo);
		swipe.timo = setTimeout(function(){swipe.__reset(event , jqevt);} , 60);
				
		var evt = isTouch ? event.touches[0] : (usePointer ? event : jqevt);

		var status = swipe.createStatusObject(evt);
		
		if(swipe.priventDefultEvent(evt.pageX , evt.pageY))
			jqevt.preventDefault();
		
		status.phase = 'move';
		
		//if(swipe.lastStatus.direction !== status.direction) swipe.__reset(event , jqevt);
		
		swipe.lastStatus = status;
		
		swipe.onSwipe.call(null , status);
	};
	
	p.__touchEnd = function(event){
		
		var swipe = event.data.target;
		var jqevt = event;
		event = event.originalEvent;
		
		clearTimeout(swipe.timo);
		
		var evt = isTouch ? event.touches[0] : (usePointer ? event : jqevt);
		
		var status = swipe.lastStatus;
		
		if(!isTouch)
			jqevt.preventDefault();
		
		status.phase = 'end';
		
		swipe.touchStarted = false;
		swipe.priventEvt   = null;
		
		$(document).unbind(ev_end     , swipe.__touchEnd).
		 		    unbind(ev_move    , swipe.__touchMove).
					unbind(ev_cancel  , swipe.__touchCancel);
		
		status.speed = status.distance / status.duration;
				
		swipe.onSwipe.call(null , status);
		
	};
	
	p.__touchCancel = function(event){
		var swipe = event.data.target;
		swipe.__touchEnd(event);
	};
	
	p.enable = function(){
		if(this.enabled) return;
		this.enabled = true;
	};
	
	p.disable = function(){
		if(!this.enabled) return;
		this.enabled = false;
	};
	
})(jQuery);

/* ================== bin-debug/js/pro/tools/Timer.js =================== */
/**
 * 	Ticker Class
 * 	Author: Averta Ltd
 */

;(function(){
	"use strict";
	
	averta.Ticker = function(){};
	
	var st = averta.Ticker,
		list = [],
		len = 0,
		__stopped = true;
	
	st.add = function (listener , ref){
		list.push([listener , ref]);
		
		if(list.length === 1) st.start();
		len = list.length;
		return len;
	};
	
	st.remove = function (listener , ref) {
		for(var i = 0 , l = list.length ; i<l ; ++i){
			if(list[i] && list[i][0] === listener && list[i][1] === ref){
				list.splice(i , 1);
			}
		}

		len = list.length;

		if( len === 0 ){
			st.stop();
		}
	};
	
	st.start = function (){
		if(!__stopped) return;
		__stopped = false;
		__tick();
	};
	
	st.stop = function (){
		__stopped = true;
	};
	
	var __tick = function () {
		if(st.__stopped) return;
		var item;
		for(var i = 0; i!==len; i++){
			item = list[i];
			item[0].call(item[1]);
		}

		requestAnimationFrame(__tick);
	};
	
})();

/**
 * 	Timer Class
 * 	Author: Averta Ltd
 */
;(function(){
	"use strict";
	
	if(!Date.now){
		Date.now = function(){
			return new Date().getTime();
		};
	}
	
	averta.Timer = function(delay , autoStart) {
		this.delay = delay;
		this.currentCount = 0;
		this.paused = false;
		this.onTimer = null;
		this.refrence = null;
		
		if(autoStart) this.start();
		
	};
	
	averta.Timer.prototype = {
		
		constructor : averta.Timer,
		
		start : function(){
			this.paused = false;
			this.lastTime = Date.now();
			averta.Ticker.add(this.update , this);
		},
		
		stop : function(){
			this.paused = true;
			averta.Ticker.remove(this.update , this);
		},
		
		reset : function(){
			this.currentCount = 0;
			this.paused = true;
			this.lastTime = Date.now();
		},
		
		update : function(){
			if(this.paused || Date.now() - this.lastTime < this.delay) return;
			this.currentCount ++;
			this.lastTime = Date.now();
			if(this.onTimer)
				this.onTimer.call(this.refrence , this.getTime());

		} ,
		
		getTime : function(){
			return this.delay * this.currentCount;
		}
		
	};
})();

/* ================== bin-debug/js/pro/tools/CSSTweener.js =================== */
;(function(){
	
	"use strict";
	
	var evt = null;
	
	window.CSSTween = function(element , duration , delay , ease){
		
		this.$element 	= element;
		this.duration 	= duration  || 1000;
		this.delay 		= delay 	|| 0;
		this.ease 		= ease 		|| 'linear';
		
		/*if(!evt){
			if(window._jcsspfx === 'O')
				evt = 'otransitionend';
			else if(window._jcsspfx == 'Webkit')
				evt = 'webkitTransitionEnd';
			else 
				evt = 'transitionend' ;
		}*/
		
	};
	
	var p = CSSTween.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.to = function(callback , target){
		this.to_cb 			= callback;
		this.to_cb_target 	= target;
		
		return this;
	};

	p.from = function(callback , target ){
		this.fr_cb 			= callback;
		this.fr_cb_target 	= target;
		
		return this;
	};
	
	p.onComplete = function(callback ,target){
		this.oc_fb 			= callback;
		this.oc_fb_target 	= target;
		
		return this;
	};
	
	p.chain = function(csstween){
		this.chained_tween = csstween;
		return this;
	};
	
	p.reset = function(){
		//element.removeEventListener(evt , this.onTransComplete , true);
		clearTimeout(this.start_to);
		clearTimeout(this.end_to);
	};
	
	p.start = function(){
		var element = this.$element[0];
	
		clearTimeout(this.start_to);
		clearTimeout(this.end_to);
		
		this.fresh = true;
		
		if(this.fr_cb){
			element.style[window._jcsspfx + 'TransitionDuration'] = '0ms';
			this.fr_cb.call(this.fr_cb_target);
		}
		
		var that = this;
		
		this.onTransComplete = function(event){
			
			if(!that.fresh) return;
			
			//that.$element[0].removeEventListener(evt , this.onTransComplete, true);
			//event.stopPropagation();
			

			that.reset();
			
			element.style[window._jcsspfx + 'TransitionDuration'] = '';
			element.style[window._jcsspfx + 'TransitionProperty'] = '';
			element.style[window._jcsspfx + 'TransitionTimingFunction'] = '';
			element.style[window._jcsspfx + 'TransitionDelay'] = '';
						
			that.fresh = false;
			if(that.chained_tween) that.chained_tween.start();
			if(that.oc_fb)	that.oc_fb.call(that.oc_fb_target);
			
		};
			
		this.start_to = setTimeout(function(){
			if ( !that.$element ) return;
			element.style[window._jcsspfx + 'TransitionDuration'] = that.duration + 'ms';
			element.style[window._jcsspfx + 'TransitionProperty'] = that.transProperty || 'all';
						  
			if(that.delay > 0)	element.style[window._jcsspfx + 'TransitionDelay'] = that.delay + 'ms';
			else				element.style[window._jcsspfx + 'TransitionDelay'] = '';
					
			element.style[window._jcsspfx + 'TransitionTimingFunction'] = that.ease;

			if(that.to_cb)	that.to_cb.call(that.to_cb_target);
			
			//that.$element[0].addEventListener(evt , that.onTransComplete , true );
			
			that.end_to = setTimeout(function(){that.onTransComplete();} , that.duration + (that.delay || 0));
		} , 100);
			
		return this;
	};
		
})();

/**
 *	Cross Tween Class
 */
;(function(){
	
	"use strict";
	
	var _cssanim = null;
	window.CTween = {};
	
	function transPos(element, properties){
		if(properties.x !== undefined || properties.y !== undefined){
			if(_cssanim){
				var trans = window._jcsspfx+"Transform";
				if(properties.x !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateX('+properties.x+'px)';
					delete properties.x;
				}
				
				if(properties.y !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateY('+properties.y+'px)';
					delete properties.y;
				}
			}else{
				if(properties.x !== undefined){
					var posx = element.css('right') !== 'auto' ? 'right' : 'left';
					//if(!element[0].bx) element[0].bx = parseInt(element.css(posx));
					properties[posx] = /*element[0].bx + */properties.x + 'px';
					delete properties.x;
				}
				
				if(properties.y !== undefined){
					var posy = element.css('bottom') !== 'auto' ? 'bottom' : 'top';
					//if(!element[0].by) element[0].by = parseInt(element.css(posy));
					properties[posy] = /*element[0].by + */properties.y + 'px';
					delete properties.y;
				}
			}
		}
		return properties;
	}
	
	CTween.setPos = function(element , pos){
		element.css(transPos(element , pos));
	};
	
	CTween.animate = function(element , duration , properties , options){
		if(_cssanim == null) _cssanim = window._cssanim;
		
		options = options || {};
		
		transPos(element , properties);
		
		if(_cssanim){
			var tween = new CSSTween(element , duration , options.delay , EaseDic[options.ease]);
			if ( options.transProperty ) {
				tween.transProperty = options.transProperty;
			}
			tween.to(function(){ element.css(properties);});	
			if(options.complete) tween.onComplete(options.complete , options.target);
			tween.start();
			tween.stop = tween.reset;
			return tween;
		}
		
		var onCl;
		
		if(options.delay) element.delay(options.delay);
		if(options.complete) 
			onCl = function(){
				options.complete.call(options.target);
			};

		element.stop(true).animate(properties , duration , options.ease || 'linear' , onCl);
				
		return element;
	};	
	
	CTween.fadeOut = function(target , duration , remove) {
		var options = {};
		if(remove === true) {
			options.complete = function(){target.remove();};
		} else if ( remove === 2 ) {
			options.complete = function(){target.css('display', 'none');};		
		}	
		
		CTween.animate(target , duration || 1000 , {opacity : 0} , options);
	};
	
	CTween.fadeIn = function(target , duration, reset){
		if( reset !== false ) {
			target.css('opacity' , 0).css('display', '');
		}
		
		CTween.animate(target , duration || 1000 , {opacity : 1});
	};
	
})();

;(function(){
	
	// Thanks to matthewlein
	// https://github.com/matthewlein/Ceaser
	
	window.EaseDic = {
		'linear'            : 'linear',
	    'ease'              : 'ease',
	    'easeIn'            : 'ease-in',
	    'easeOut'           : 'ease-out',
	    'easeInOut'         : 'ease-in-out',
	    
	    'easeInCubic'       : 'cubic-bezier(.55,.055,.675,.19)',
	    'easeOutCubic'      : 'cubic-bezier(.215,.61,.355,1)',
	    'easeInOutCubic'    : 'cubic-bezier(.645,.045,.355,1)',
	    'easeInCirc'        : 'cubic-bezier(.6,.04,.98,.335)',
	    'easeOutCirc'       : 'cubic-bezier(.075,.82,.165,1)',
	    'easeInOutCirc'     : 'cubic-bezier(.785,.135,.15,.86)',
	    'easeInExpo'        : 'cubic-bezier(.95,.05,.795,.035)',
	    'easeOutExpo'       : 'cubic-bezier(.19,1,.22,1)',
	    'easeInOutExpo'     : 'cubic-bezier(1,0,0,1)',
	    'easeInQuad'        : 'cubic-bezier(.55,.085,.68,.53)',
	    'easeOutQuad'       : 'cubic-bezier(.25,.46,.45,.94)',
	    'easeInOutQuad'     : 'cubic-bezier(.455,.03,.515,.955)',
	    'easeInQuart'       : 'cubic-bezier(.895,.03,.685,.22)',
	    'easeOutQuart'      : 'cubic-bezier(.165,.84,.44,1)',
	    'easeInOutQuart'    : 'cubic-bezier(.77,0,.175,1)',
	    'easeInQuint'       : 'cubic-bezier(.755,.05,.855,.06)',
	    'easeOutQuint'      : 'cubic-bezier(.23,1,.32,1)',
	    'easeInOutQuint'    : 'cubic-bezier(.86,0,.07,1)',
	    'easeInSine'        : 'cubic-bezier(.47,0,.745,.715)',
	    'easeOutSine'       : 'cubic-bezier(.39,.575,.565,1)',
	    'easeInOutSine'     : 'cubic-bezier(.445,.05,.55,.95)',
	    'easeInBack'        : 'cubic-bezier(.6,-.28,.735,.045)',
	    'easeOutBack'       : 'cubic-bezier(.175, .885,.32,1.275)',
	    'easeInOutBack'     : 'cubic-bezier(.68,-.55,.265,1.55)'
	};
})();

/* ================== bin-debug/js/pro/tools/Aligner.js =================== */
;(function(){
	
	"use strict";
	
	window.MSAligner = function(type , $container , $img ){
		
		this.$container = $container;
		this.$img	    = $img;	
	
		this.type 		= type || 'stretch'; // fill , fit , stretch , tile , center
		
		this.widthOnly = false;
		this.heightOnly = false;
	};
	
	var p = MSAligner.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.init = function(w , h){
		
		this.baseWidth = w;
		this.baseHeight = h;
		this.imgRatio = w / h;
		this.imgRatio2 = h / w;

		switch(this.type){
			case 'tile':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$img.remove();
			break;
			case 'center':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$container.css({
					backgroundPosition 	: 'center center',
					backgroundRepeat	: 'no-repeat'
				});
				this.$img.remove();
			break;
			case 'stretch':
				this.$img.css({
					width	: 	'100%',
					height	: 	'100%'
				});
			break;
			case 'fill':
			case 'fit' :				
				this.needAlign = true;
				this.align();
			break;
		}
		
	};
	
	p.align = function(){
		if(!this.needAlign) return;

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();

		var contRatio = cont_w / cont_h;
		
		if(this.type == 'fill'){
			if(this.imgRatio < contRatio ){
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);				
			}else{
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);
			}
				
		}else if(this.type == 'fit'){
			
			if(this.imgRatio < contRatio){
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);				
			}else{
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);	
			}
		}
		
		this.setMargin();
		
	};

	p.setMargin = function(){

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();
		
		this.$img.css('margin-top' , (cont_h - this.$img[0].offsetHeight) / 2 + 'px');
		this.$img.css('margin-left', (cont_w - this.$img[0].offsetWidth ) / 2 + 'px');
	}
	
})();

/* ================== bin-debug/js/pro/controls/controller.js =================== */
/**
 *  Touch List Control
 * 	version 1.1.2
 * 	
 * 	Copyright (C) 2014, Averta Ltd. All rights reserved. 	 	
 */

;(function(){	
	
	"use strict";
		
	var _options = {
		bouncing 			: true,
		snapping			: false,
		snapsize			: null,
		friction			: 0.05,
		outFriction			: 0.05,
		outAcceleration		: 0.09,	
		minValidDist		: 0.3,
		snappingMinSpeed	: 2,
		paging				: false,
		endless				: false,
		maxSpeed			: 160
	};
	

	var Controller = function(min , max , options){
		
		if(max === null || min === null) {
			throw new Error('Max and Min values are required.');
		}
		
		this.options = options || {};
		
		for(var key in _options){
			if(!(key in this.options))
				this.options[key] = _options[key];
		}
		
		this._max_value 	= max;
		this._min_value 	= min;
				
		this.value 			= min;
		this.end_loc 		= min;
		
		this.current_snap	= this.getSnapNum(min);
		
		this.__extrStep 	= 0;
		this.__extraMove 	= 0;
		
		this.__animID	 	= -1;
	
	};
	
	var p = Controller.prototype;
	
	/*
	---------------------------------------------------
		PUBLIC METHODS
	----------------------------------------------------
	*/


	p.changeTo = function(value , animate , speed , snap_num , dispatch) {
		this.stopped = false;
		this._internalStop();
		value = this._checkLimits(value);
		speed = Math.abs(speed || 0);
		
		if(this.options.snapping){
			snap_num = snap_num || this.getSnapNum(value);
			if( dispatch !== false )this._callsnapChange(snap_num);
			this.current_snap = snap_num;
		}
		
		if(animate){
			this.animating = true;

			var self = this,
				active_id = ++self.__animID,
				amplitude = value - self.value,
				timeStep = 0,
				targetPosition = value,
				animFrict = 1 - self.options.friction,
				timeconst = animFrict + (speed - 20)  * animFrict * 1.3 / self.options.maxSpeed;

			var tick = function(){
				
				if(active_id !== self.__animID) return;
				
				var dis =  value - self.value;
				
				if( Math.abs(dis) > self.options.minValidDist && self.animating ){
					window.requestAnimationFrame(tick);
				} else {

					if( self.animating ){
						self.value = value;
						self._callrenderer();
					}

					self.animating = false;
					
					if( active_id !== self.__animID ){
						self.__animID = -1;
					}
					
					self._callonComplete('anim');
					
					return;
				}

				//self.value += dis * timeconst
				self.value = targetPosition - amplitude * Math.exp(-++timeStep * timeconst);

				self._callrenderer();
			};
		
			tick();
			
			return;
		}
				
		this.value = value;
		this._callrenderer();
	};
	
	p.drag = function(move){
		
		if(this.start_drag){
			this.drag_start_loc  = this.value;
			this.start_drag = false;
		}
		
		this.animating 		= false;
		this._deceleration 	= false;
		
		this.value -= move;
				
		if ( !this.options.endless && (this.value > this._max_value || this.value < 0)) {
			if (this.options.bouncing) {
				this.__isout = true;
				this.value += move * 0.6;
			} else if (this.value > this._max_value) {
				this.value = this._max_value;
			} else {
				this.value = 0;
			}
		}else if(!this.options.endless && this.options.bouncing){
				this.__isout = false;
		}
		
		this._callrenderer();
		
	};
	
	p.push = function(speed){
		this.stopped = false;
		if(this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed){
			this.cancel();
			return;
		}
		
		this.__speed = speed;
		this.__startSpeed = speed;

		this.end_loc = this._calculateEnd();
		
		if(this.options.snapping){
			
			var snap_loc = this.getSnapNum(this.value),
				end_snap = this.getSnapNum(this.end_loc);

			if(this.options.paging){
				snap_loc = this.getSnapNum(this.drag_start_loc);
				
				this.__isout = false;
				if(speed > 0){
					this.gotoSnap(snap_loc + 1 , true , speed);
				}else{
					this.gotoSnap(snap_loc - 1 , true , speed);
				}
				return;	
			}else if(snap_loc === end_snap){
				this.cancel();
				return;
			}
			
			this._callsnapChange(end_snap);
			this.current_snap = end_snap;
			
		}
		
		this.animating = false;

		this.__needsSnap = this.options.endless || (this.end_loc > this._min_value && this.end_loc < this._max_value) ;
	
		if(this.options.snapping && this.__needsSnap)
			this.__extraMove = this._calculateExtraMove(this.end_loc);
		
		
		this._startDecelaration();
	};
	
	p.bounce = function(speed){
		if(this.animating) return;
		this.stopped = false;
		this.animating = false;
		
		this.__speed = speed;
		this.__startSpeed = speed;
		
		this.end_loc = this._calculateEnd();
		
		//if(this.options.paging){}
		
		this._startDecelaration();
	};
	
	p.stop = function(){
		this.stopped = true;
		this._internalStop();
	};
		
	p.cancel = function(){
		this.start_drag = true; // reset flag for next drag
		if(this.__isout){
			this.__speed = 0.0004;
			this._startDecelaration();
		}else if(this.options.snapping){
			this.gotoSnap(this.getSnapNum(this.value) , true);
		}
		
	};
		
	p.renderCallback = function(listener , ref){
		this.__renderHook = {fun:listener , ref:ref};
	};
	
	p.snappingCallback = function(listener , ref){
		this.__snapHook = {fun:listener , ref:ref};
	};
	
	p.snapCompleteCallback = function(listener , ref){
		this.__compHook = {fun:listener , ref:ref};
	};
	
	p.getSnapNum = function(value){
		return Math.floor(( value + this.options.snapsize / 2 ) / this.options.snapsize);
	};
		
	p.nextSnap = function(){
		this._internalStop();
		
		var curr_snap = this.getSnapNum(this.value);
		
		if(!this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value){
			this.__speed = 8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap + 1 , true);
		}
	
	};
	
	p.prevSnap = function(){
		this._internalStop();
		
		var curr_snap = this.getSnapNum(this.value);
				
		if(!this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value){
			this.__speed = -8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap - 1 , true);
		}
	
	};
	
	p.gotoSnap = function(snap_num , animate , speed){
		this.changeTo(snap_num * this.options.snapsize , animate , speed , snap_num);
	};
	
	p.destroy = function(){
		this._internalStop();
		this.__renderHook = null;
		this.__snapHook = null;
		this.__compHook = null;
	};
	
	/*
	---------------------------------------------------
		PRIVATE METHODS
	----------------------------------------------------
	*/
	
	p._internalStop = function(){
		this.start_drag = true; // reset flag for next drag
		this.animating = false;
		this._deceleration = false;
		this.__extrStep = 0;
	};
	
	p._calculateExtraMove = function(value){
		var m = value % this.options.snapsize;
		return m < this.options.snapsize / 2  ? -m : this.options.snapsize - m;
	};
	
	p._calculateEnd = function(step){
		var temp_speed = this.__speed;
		var temp_value = this.value;
		var i = 0;
		while(Math.abs(temp_speed) > this.options.minValidDist){
			temp_value += temp_speed;
			temp_speed *= this.options.friction;
			i++;
		}
		if(step) return i;
		return temp_value;
	};
	
	p._checkLimits = function(value){
		if(this.options.endless) 	return value;
		if(value < this._min_value) return this._min_value;
		if(value > this._max_value) return this._max_value;
		return value;
	};
	
	p._callrenderer = function(){
		if(this.__renderHook) this.__renderHook.fun.call(this.__renderHook.ref , this , this.value);
	};
	
	p._callsnapChange = function(targetSnap){
		if(!this.__snapHook || targetSnap === this.current_snap) return;
		this.__snapHook.fun.call(this.__snapHook.ref , this , targetSnap , targetSnap - this.current_snap);
	};

	p._callonComplete = function(type){
		if(this.__compHook && !this.stopped){
			this.__compHook.fun.call(this.__compHook.ref , this , this.current_snap , type);
		}
			
	};

	p._computeDeceleration = function(){
		
		if(this.options.snapping && this.__needsSnap){
			var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
			this.value += this.__speed + xtr_move - this.__extrStep;
			this.__extrStep = xtr_move;
		}else{
			this.value += this.__speed;
		}
		
		this.__speed *= this.options.friction; //* 10;
		
		if(!this.options.endless && !this.options.bouncing){
			if(this.value <= this._min_value){
				this.value = this._min_value;
				this.__speed = 0;
			}else if(this.value >= this._max_value){
				this.value = this._max_value;
				this.__speed = 0;
			}
		}
		
		this._callrenderer();
		
		if(!this.options.endless && this.options.bouncing){
			
			var out_value = 0;
			
			if(this.value < this._min_value){
				out_value = this._min_value - this.value;
			}else if(this.value > this._max_value){
				out_value = this._max_value - this.value;
			}
			
			this.__isout =  Math.abs(out_value) >= this.options.minValidDist;
			
			if(this.__isout){
				if(this.__speed * out_value <= 0){
					this.__speed += out_value * this.options.outFriction;
				}else {
					this.__speed = out_value * this.options.outAcceleration;
				}
			}
		}
	};

	p._startDecelaration = function(){
		if(this._deceleration) return;
		this._deceleration = true;
		
		var self = this;
		
		var tick = function (){
			
			if(!self._deceleration) return;
			
			self._computeDeceleration();
			
			if(Math.abs(self.__speed) > self.options.minValidDist || self.__isout){
				window.requestAnimationFrame(tick);
			}else{
				self._deceleration = false;
				self.__isout = false;
				
				if(self.__needsSnap && self.options.snapping && !self.options.paging){
					self.value = self._checkLimits(self.end_loc + self.__extraMove);
				}else{
					self.value = Math.round(self.value);
				}
				
				self._callrenderer();
				self._callonComplete('decel');
			}
		};
		
		tick();
	};
	
	window.Controller = Controller;
	
})();

/* ================== bin-debug/js/pro/layers/LayerController.js =================== */
/**
 * Master Slider Layer Controller 
 * @author averta
 * @package Master Slider jQuery PRO
 * @since 2.11.1
 */
;(function(window, document, $){

	/**
	 * Layer Controller constructor
	 * @param {MSSlide} slide layer controller's slide.
	 */
	window.MSLayerController = function (slide) {
		this.slide = slide;
		this.slider = slide.slider;
		this.layers = [];
		this.layersCount = 0;
		this.preloadCount = 0;
		this.$layers = $('<div></div>').addClass('ms-slide-layers');
		this.$staticLayers = $('<div></div>').addClass('ms-static-layers');
		this.$fixedLayers = $('<div></div>').addClass('ms-fixed-layers');
		this.$animLayers = $('<div></div>').addClass('ms-anim-layers');

	};

	var p = MSLayerController.prototype;


	/*-----------------------------------------*\
		Public Methods								
	\*-----------------------------------------*/

	/**
	 * Adds new layer to the controller and slide
	 * @param {MSLayerElement} layer 
	 */
	p.addLayer = function (layer) {
		layer.slide = this.slide;
		layer.controller = this;

		// append layer element to the layers container based on `data-position` attribute. 
		switch ( layer.$element.data('position') ) {
			case 'static':
				this.hasStaticLayer = true;
				layer.$element.appendTo(this.$staticLayers);
				break;
			case 'fixed':
				this.hasFixedLayer = true;
				layer.$element.appendTo(this.$fixedLayers);
				break;
			default:
				layer.$element.appendTo(this.$animLayers);
				break;
		}
				
		layer.create();
		this.layers.push(layer);
		this.layersCount ++;

		// @since 1.7.0
		if( layer.parallax ){
			this.hasParallaxLayer = true;
		}

		if ( layer.needPreload ) {
			this.preloadCount ++; 
		}	
	};

	/**
	 * add layers over slide
	 * it calls after addLayer
	 */
	p.create = function () {
		this.slide.$element.append(this.$layers);
		this.$layers.append(this.$animLayers);

		if ( this.hasStaticLayer ) { 
			this.$layers.append(this.$staticLayers);
		}

		if(this.slider.options.layersMode == 'center'){
			this.$layers.css('max-width' , this.slider.options.width + 'px');

			if ( this.hasFixedLayer ) {
				this.$fixedLayers.css('max-width' , this.slider.options.width + 'px');
			}
		}
	};

	/**
	 * load layers that requires preloading
	 * @param {Function} callback onload callback function
	 */
	p.loadLayers = function (callback) {
		this._onReadyCallback = callback;

		if ( this.preloadCount === 0 ) {
			this._onlayersReady();
			return;
		}

		for(var i = 0 ; i !== this.layersCount; ++i){
			if(this.layers[i].needPreload) {
				this.layers[i].loadImage();
			}
		}
	};

	/**
	 * prepare layers to show over slide, this method will be called via `prepareToSelect` method of slide.
	 */
	p.prepareToShow = function () {
		if ( this.hasParallaxLayer ) {
			this._enableParallaxEffect();
		}

		if ( this.hasFixedLayer ) {
			this.$fixedLayers.prependTo(this.slide.view.$element);
		}
	};

	/**
	 * show layers over slide
	 */
	p.showLayers = function(){
		if ( this.layersHideTween ) {
			this.layersHideTween.stop(true);
		}

		if ( this.fixedLayersHideTween ) {
			this.fixedLayersHideTween.stop(true);
		}

		this._resetLayers();
		this.$animLayers.css('opacity', '').css('display', '');

		if ( this.hasFixedLayer ){
			this.$fixedLayers.css('opacity', '').css('display', '');
		}

		if ( this.ready ) {
			this._initLayers();
			this._locateLayers();
			this._startLayers();
		} 
	};

	/**
	 * hideLayers this method will be called via slide class. 
	 */
	p.hideLayers = function () {
		
		if( this.slide.selected || this.slider.options.instantStartLayers ){
			var that = this;
			that.layersHideTween = CTween.animate(this.$animLayers, 500, {opacity: 0}, {
				complete:function(){
					that._resetLayers();	
				}
			});

			if ( this.hasFixedLayer ) {
				this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {opacity: 0}, {
					complete:function(){
						that.$fixedLayers.detach();
					}
				});
			}

			// disables parallax effect
			// @since 1.6.0
			if ( this.hasParallaxLayer ) {
				this._disableParallaxEffect();
			}
		}
	};

	/**
	 * hide layers from slide
	 */
	p.animHideLayers = function(){
		if ( !this.ready ) {
			return;
		}

		for(var i = 0; i !== this.layersCount; ++i){
			this.layers[i].hide();
		}
	};

	/**
	 * calculate new size of layers containers and locate layers
	 * @param {Number} width  slider width
	 * @param {Number} height slider height
	 * @param {Boolean} hard  whether call init layers.
	 */
	p.setSize = function (width, height, hard) {

		if ( this.ready && (this.slide.selected || this.hasStaticLayer) ) {
			if ( hard ) {
				this._initLayers(true);
			}
			this._locateLayers(!this.slide.selected);
		} 
		
		if ( this.slider.options.autoHeight ) {
			this.updateHeight();
		}

		if ( this.slider.options.layersMode == 'center' ) {
			var left = Math.max( 0 ,  (width - this.slider.options.width) / 2 ) + 'px';
			this.$layers[0].style.left = left;
			this.$fixedLayers[0].style.left = left;
		}
		
	};

	/**
	 * updates layers container height
	 */
	p.updateHeight = function () {
		var h = this.slide.getHeight() + 'px';
		this.$layers[0].style.height = h;
		this.$fixedLayers[0].style.height = h;
	};

	/**
	 * This method will be called by the last layer after loading all of layers.
	 */
	p._onlayersReady = function(){
		this.ready = true;

		if ( this.hasStaticLayer && !this.slide.isSleeping ) {
			this._initLayers(false, true);
		} 

		this._onReadyCallback.call(this.slide);
	};

	/**
	 * this method will be called by slide when it starts sleeping
	 */
	p.onSlideSleep = function () {

	};

	/**
	 * this method will be called by slide after waking up
	 */
	p.onSlideWakeup = function () {
		if ( this.hasStaticLayer && this.ready ) {
			this._initLayers(false, true);
		} 
	};

	/**
	 * destroy layer controller and stop layer animations
	 */
	p.destroy = function () {
		if ( this.slide.selected && this.hasParallaxLayer ) {
			this._disableParallaxEffect();
		}

		for(var i = 0; i < this.layersCount; ++i){
			this.layers[i].$element.stop(true).remove();
		}

		this.$layers.remove();
		this.$staticLayers.remove();
		this.$fixedLayers.remove();
		this.$animLayers.remove();
	};


	/*-----------------------------------------*\
		Private Methods								
	\*-----------------------------------------*/

	/**
	 * start layer effect
	 */
	p._startLayers = function(){
		for(var i = 0; i !== this.layersCount; ++i){
			this.layers[i].start();
		}
	};
	
	/**
	 * call init method of all layers
	 * @param  {Boolean} force 
	 */
	p._initLayers = function(force, onlyStatics){
		
		if ( this.init && !force || this.slider.init_safemode ) {
			return;
		}
		
		this.init = onlyStatics !== true;
		
		var i = 0;
		if ( onlyStatics && !this.staticsInit ) {  // init only static layers
			this.staticsInit = true;
			for ( ;i !== this.layersCount; ++i ) {
				if ( this.layers[i].staticLayer ) { 
					this.layers[i].init();
				}
			}
		} else if ( this.staticsInit && !force ) { // statics are already initiated, init dynamics
			for ( ;i !== this.layersCount; ++i ) {
				if ( !this.layers[i].staticLayer ){
					this.layers[i].init();	
				} 
			}
		} else {	 // init all
			for ( ;i !== this.layersCount; ++i ) {
				this.layers[i].init();	
			}
		}
	};
	
	/**
	 * locate layers over slide
	 */
	p._locateLayers = function (onlyStatics){
		var i = 0;
		if ( onlyStatics ) {  
			for ( ;i !== this.layersCount; ++i ) {
				if ( this.layers[i].staticLayer ) { 
					this.layers[i].locate();
				}
			}
		} else {
			for ( ;i !== this.layersCount; ++i ) {
				this.layers[i].locate();
			}
		}
	};
	
	/**
	 * rest layers
	 */
	p._resetLayers = function(){
		this.$animLayers.css('display', 'none').css('opacity',  1);
		for ( var i = 0; i !== this.layersCount; ++i ) {
			this.layers[i].reset();
		}
	};

	/**
	 * moves layers based on x and y
	 * @param  {Number} x    
	 * @param  {Number} y    
	 * @param  {Boolean} fast whether animate or not
	 */
	p._applyParallax = function(x, y, fast){
		for(var i = 0 ; i !== this.layersCount; ++i){
			if( this.layers[i].parallax != null ){
				this.layers[i].moveParallax(x, y, fast);
			}  
		}
	};

	/**
	 * enable parallax moving layers
	 */
	p._enableParallaxEffect = function(){ 
		if( this.slider.options.parallaxMode === 'swipe' ){
			this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this);
		} else {
			this.slide.$element.on('mousemove' , {that:this}, this._mouseParallaxMove)
						 .on('mouseleave', {that:this}, this._resetParalax);
			/**
			 * Calculates new position of parallax based on device orintation gamma and beta
			 * @param  {Event} e 
			 * @since 1.6.0
			 */
			/*if( window._mobile && window.DeviceOrientationEvent ){
				
				var that = this;
				this.orientationParallaxMove = function(e){
					var beta = Math.round(e.beta),
						gamma = Math.round(e.gamma);
					
					that._applyParallax(beta * that.__width / 360 , -gamma * that.__height / 360);
				};

				window.addEventListener('deviceorientation', this.orientationParallaxMove, false);
			}*/
		}
	};

	/**
	 * disable parallax effect
	 */
	p._disableParallaxEffect = function(){
		if( this.slider.options.parallaxMode === 'swipe' ){
			this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this);
		} else {
			this.slide.$element.off('mousemove', this._mouseParallaxMove)
						 .off('mouseleave', this._resetParalax);
			
			/*if( window._mobile && window.DeviceOrientationEvent ){
				window.removeEventListener('deviceorientation', this.orientationParallaxMove);
			}*/
		}
	};

	/**
	 * reset layers parallax position to 0, 0 
	 */
	p._resetParalax = function(e){
		var that = e.data.that;
		that._applyParallax(0,0);
	};

	/**
	 * Calculates new mouse position over slide and moves layers
	 * @since 1.6.0
	 */
	p._mouseParallaxMove = function(e){
		var that = e.data.that,
			os = that.slide.$element.offset(),
			slider = that.slider;
			
			if( slider.options.parallaxMode !== 'mouse:y-only' ){
				var x = e.pageX - os.left - that.slide.__width  / 2;
			} else {
				var x = 0;
			}

			if( slider.options.parallaxMode !== 'mouse:x-only' ){
				var y = e.pageY - os.top  - that.slide.__height / 2;
			} else {
				var y = 0;
			}

		that._applyParallax(-x, -y);
	};


	/**
	 * Calculates new position of parallax based on slide position
	 * @param  {Event} e
	 * @since 1.6.0
	 */
	p._swipeParallaxMove = function(e){
		var value = this.slide.position - this.slide.view.__contPos;
		
		if ( this.slider.options.dir === 'v' ) {
			this._applyParallax(0, value, true);
		} else {
			this._applyParallax(value, 0, true);
		}
	};


})(window, document, jQuery);

/* ================== bin-debug/js/pro/layers/LayerEffects.js =================== */
;(function($){
	
	window.MSLayerEffects = {};
	
	var installed,
		_fade = {opacity:0};
		
	MSLayerEffects.setup = function(){
		
		if(installed) return;
		installed = true;
		
		var st 					= MSLayerEffects,
			transform_css 		= window._jcsspfx + 'Transform',
			transform_orig_css  = window._jcsspfx + 'TransformOrigin',
			o					= $.browser.opera; // Opera sucks :|
			_2d					= window._css2d && window._cssanim && !o;
		
		st.defaultValues = {left : 0 , top: 0 , opacity:(isMSIE('<=9')?1:'') , right:0 , bottom:0};
		st.defaultValues[transform_css] 	 = '';
		//st.defaultValues[transform_orig_css] = '';
		st.rf = 1;
		
		st.presetEffParams = {
			random: '30|300',
			long 	: 300,
			short	: 30,
			'false'	:false,
			'true'	:true,
			tl	 : 'top left'	,	bl: 'bottom left',
			tr   : 'top right'	,   br: 'bottom right', 
			rt   : 'top right'	,	lb: 'bottom left',
			lt   : 'top left'	,	rb: 'bottom right',
			t	 : 'top'		,	b : 'bottom',
			r	 : 'right'		,	l : 'left',
			c	 : 'center'	
		};
		
		
		/*
		 ----------------------------------------
		 				2D Effects
		 ----------------------------------------
		 */
		
		st.fade = function(){
			return _fade;
		};
	
		st.left = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = -dist*st.rf + 'px';
			return r;
		};
		
		st.right = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = dist*st.rf + 'px';
			return r;
		};
		
		st.top = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = -dist*st.rf + 'px';
			return r;
		};
		
		st.bottom = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = dist*st.rf + 'px';
			return r;
		};
		
		st.from = (_2d)? function(leftdis , topdis , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX('+leftdis*st.rf+'px) translateY(' + topdis*st.rf + 'px)';
			return r;
		} : function (leftdis , topdis, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = topdis*st.rf + 'px';
			r.left = leftdis*st.rf + 'px';
			return r;
		};
		
		
		// --------------------------------------------------------------------
		
		st.rotate = (_2d)? function(deg , orig ){
			var r = {opacity: 0};
			r[transform_css] = ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg, orig){
			return _fade;
		};
		
		st.rotateleft = (_2d)? function(deg , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.left(dist , fade);
		};
		
		st.rotateright = (_2d)? function(deg , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.right(dist , fade);
		};
		
		st.rotatetop = (_2d)? function(deg , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.top(dist , fade);
		};
		
		st.rotatebottom = (_2d)? function(deg , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.bottom(dist , fade);
		};
			
		st.rotatefrom = (_2d)? function(deg , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};
			
		st.skewleft = (_2d)? function(deg , dist , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' skewX(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.left(dist , fade);
		};	
		
		st.skewright = (_2d)? function(deg , dist , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' skewX(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.right(dist , fade);
		};	
		
		st.skewtop = (_2d)? function(deg , dist , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' skewY(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.top(dist , fade);
		};	
		
		st.skewbottom = (_2d)? function(deg , dist , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' skewY(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.bottom(dist , fade);
		};	
		
		
		st.scale = (_2d)? function(x , y , orig , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , orig , fade){
			return fade === false ? {} : {opacity:0};
		};
		
		st.scaleleft = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.left(dist , fade);
		};
		
		st.scaleright = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.right(dist , fade);
		};
		
		st.scaletop = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.top(dist , fade);
		};
		
		st.scalebottom = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.bottom(dist , fade);
		};
			
		st.scalefrom = (_2d)? function(x , y  , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};
		
		st.rotatescale = (_2d)? function(deg , x , y  ,  orig , fade){
			var r = st.scale(x , y , orig , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , x , y  ,  orig , fade){
			return st.scale(x , y , orig , fade);
		};
		
		
		/*
		 ----------------------------------------
		 				3D Effects
		 ----------------------------------------
		 */
		
		st.front = (window._css3d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};
		
		st.back = (window._css3d)? function(dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};
		
		st.rotatefront = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};
		
		st.rotateback = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};
						
		st.rotate3dleft = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
			
		} : function (x , y , z , dist , orig , fade){
			return st.left(dist , fade);;
		};
		
		st.rotate3dright = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.right(dist , fade);;
		};
		
		st.rotate3dtop = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.top(dist , fade);;
		};
		
		st.rotate3dbottom = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.bottom(dist , fade);
		};
		
		st.rotate3dfront = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.front(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.front(dist , fade);
		};		
		
		st.rotate3dback = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.back(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.back(dist , fade);
		};

		// transform effect
		st.t = (window._css3d)? function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz){
			var _r = fade === false ? {} : {opacity:0};
			var transform = 'perspective(2000px) ';

			tx  !== 'n' && (transform += 'translateX(' + tx * st.rf + 'px) ');
			ty  !== 'n' && (transform += 'translateY(' + ty * st.rf + 'px) ');
			tz  !== 'n' && (transform += 'translateZ(' + tz * st.rf + 'px) ');
			r   !== 'n' && (transform += 'rotate(' + r + 'deg) ');
			rx  !== 'n' && (transform += 'rotateX(' + rx + 'deg) ');
			ry  !== 'n' && (transform += 'rotateY(' + ry + 'deg) ');
			rz  !== 'n' && (transform += 'rotateZ(' + rz + 'deg) ');
			skx !== 'n' && (transform += 'skewX(' + skx + 'deg) ');
			sky !== 'n' && (transform += 'skewY(' + sky + 'deg) ');
			scx !== 'n' && (transform += 'scaleX(' + scx + ') ');
			scy !== 'n' && (transform += 'scaleY(' + scy + ')');

			_r[transform_css] = transform;

			var trans_origin = '';

			trans_origin += (ox !== 'n' ? ox + '% ' : '50% '); 
			trans_origin += (oy !== 'n' ? oy + '% ' : '50% '); 
			trans_origin += (oz !== 'n' ? oz + 'px' : ''); 

			_r[transform_orig_css] = trans_origin;
			
			return _r;

		} : function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz) {

			var r = fade === false ? {} : {opacity:0};
			tx  !== 'n' && (r.left = tx * st.rf + 'px');
			ty  !== 'n' && (r.top  = ty * st.rf + 'px');
			return r;
		}			
	};
})(jQuery);

/* ================== bin-debug/js/pro/layers/LayerElement.js =================== */
/**
 * Master Slider Layer Element
 * @author Averta
 * @package Master Slider jQuery
 */

;(function($){
	
	/**
	 * master slider layer element constructor
	 */
	window.MSLayerElement = function(){
				
		// default layer start animation
		this.start_anim = {
			name		: 'fade',
			duration	: 1000,
			ease 		: 'linear',
			delay		: 0		
		};
		
		// default layer end animation
		this.end_anim = {
			duration	: 1000,
			ease 		: 'linear'
		};
		
		// default layer type
		this.type = 'text'; // video , image
		
		//this.swipe 		= true;
		this.resizable 	= true;
		this.minWidth 	= -1;
		this.isVisible  = true;
		
		// list of styles which should stores initial values and changes based on screen size for resizable layers
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			
			'font-size' 	,  		'line-height'	,
			/*'height'		, */	'width'			,			
			'left'			,       'right'			, 
			'top'			,       'bottom'		
		];
		
		this.baseStyle = {};
	};
	
	var p = MSLayerElement.prototype;
	
	/*--------------------------------------------------*\
		Public Methods
	\*--------------------------------------------------*/
	
	/**
	 * determine start animation for the layer
	 * @param {Objec} anim 
	 */
	p.setStartAnim = function(anim){ 
		$.extend(this.start_anim , anim); $.extend(this.start_anim, this._parseEff(this.start_anim.name)); 
		this.$element.css('visibility' , 'hidden');
	};

	/**
	 * determine end/hide animation for the layer
	 * @param {Object} anim
	 */
	p.setEndAnim = function(anim){
		$.extend(this.end_anim, anim); 
	};
	
	/**
	 * create layer object from layer element
	 */
	p.create = function(){
		this.$element.css('display', 'none');

		// resizable layer
		this.resizable = this.$element.data('resize') !== false;

		// fixed positioning
		this.fixed = this.$element.data('fixed') === true;

		// hide under parameter
		if( this.$element.data('widthlimit') !== undefined ) {
			this.minWidth = this.$element.data('widthlimit');
		}

		if( !this.end_anim.name ) {
			this.end_anim.name = this.start_anim.name;
		}

		if( this.end_anim.time ) {
			this.autoHide = true;//this.end_anim.delay = this.slide.delay * 1000 - this.end_anim.duration;
		}

		// is this layer static?
		this.staticLayer = this.$element.data('position') === 'static';
		this.fixedLayer = this.$element.data('position') === 'fixed';
		this.layersCont = this.controller.$layers;

		// make it visible if it's static
		if ( this.staticLayer ) {
			this.$element.css('display', '')
						 .css('visibility', '');
		}

		// create action event
		// @since v1.7.2
		if( this.$element.data('action') !== undefined ) {
			var slideController = this.slide.slider.slideController;
			this.$element.on('click', function(event){
				slideController.runAction($(this).data('action'));
				event.preventDefault();
			}).addClass('ms-action-layer');
		} 
		
		$.extend(this.end_anim  , this._parseEff(this.end_anim.name));
		this.slider = this.slide.slider;
		
		// new alignment method
		// @since v1.6.1
		var layerOrigin = this.layerOrigin = this.$element.data('origin');
		if ( layerOrigin ){

			var vOrigin  = layerOrigin.charAt(0),
				hOrigin  = layerOrigin.charAt(1),
				offsetX  = this.$element.data('offset-x'),
				offsetY  = this.$element.data('offset-y');

			if( offsetY === undefined ){
				offsetY = 0;
			}

			switch ( vOrigin ){
				case 't':
					this.$element[0].style.top = offsetY + 'px';
					break;
				case 'b':
					this.$element[0].style.bottom = offsetY + 'px';
					break;
				case 'm':
					this.$element[0].style.top = offsetY + 'px';
					this.middleAlign = true;
			}
			
			if( offsetX === undefined ){
				offsetX = 0;
			}

			switch ( hOrigin ){
				case 'l':
					this.$element[0].style.left = offsetX + 'px';
					break;
				case 'r':
					this.$element[0].style.right = offsetX + 'px';
					break;
				case 'c':
					this.$element[0].style.left = offsetX + 'px';
					this.centerAlign = true;
			}
		}

		// parallax effect 
		// @since v1.6.0
		this.parallax = this.$element.data('parallax')
		if( this.parallax != null ) {
			this.parallax /= 100;
			this.$parallaxElement = $('<div></div>').addClass('ms-parallax-layer');
			if( this.link ) { // only for image layer
				this.link.wrap(this.$parallaxElement);
				this.$parallaxElement = this.link.parent();
			} else {
				this.$element.wrap(this.$parallaxElement);
				this.$parallaxElement = this.$element.parent();
			}
			
			this._lastParaX = 0;
			this._lastParaY = 0;
			this._paraX = 0;
			this._paraY = 0;


			// add bottom 0 to the parallax element if layer origin specified to the bottom
			this.alignedToBot = this.layerOrigin && this.layerOrigin.indexOf('b') !== -1;
			if( this.alignedToBot ) {
				this.$parallaxElement.css('bottom', 0);
			}

			if( window._css3d ){
				this.parallaxRender = this._parallaxCSS3DRenderer;	
			} else if ( window._css2d ){
				this.parallaxRender = this._parallaxCSS2DRenderer;
			} else {
				this.parallaxRender = this._parallax2DRenderer;
			}

			if( this.slider.options.parallaxMode !== 'swipe' ){ // mouse mode
				averta.Ticker.add(this.parallaxRender, this);
			}
		}

		// remove all data- attributes excluding data-src
		$.removeDataAttrs(this.$element, ['data-src']);
	};

	/**
	 * initialize layer
	 */
	p.init = function(){
		//if(this.initialized) return;
		this.initialized = true;

		var value;
		
		this.$element.css('visibility' , '');
		// store initial layer styles
		for(var i = 0 , l = this.__cssConfig.length; i < l ; i ++){
			var key = this.__cssConfig[i];
			if( this.type === 'text' && key === 'width'){ // in some browsers using computed style for width in text layer causes unexpected word wrapping 
				value = this.$element[0].style.width;
			} else {
				value = this.$element.css(key);

				// fix for Google Chrome in ios, sometimes image layers over first slide not showing correctly. 
				if ( (key === 'width' || key === 'height') && value === '0px' ) {
					value = this.$element.data(key) + 'px';
				}
			}
			
			if( value != 'auto' && value != "" && value != "normal" ) { 
				this.baseStyle[key] = parseInt(value);
			}
		}

		// @since v1.6.0
		if ( this.middleAlign ){
			this.baseHeight = this.$element.outerHeight(false);//this.$element.height();
		}

		if ( this.centerAlign ){
			// in some browsers using computed style for width in text layer causes unexpected word wrapping 
			//if ( this.type === 'text' ){
			//	this.baseWidth = parseInt(this.$element[0].style.width);
			//} else {
				this.baseWidth = this.$element.outerWidth(false);
			//}
		}

	};
	
	/**
	 * locate layer over slider
	 */
	p.locate = function(){
		// is slide ready?		
		if ( !this.slide.ready ) {
			return;
		}
		
		var width 		= parseFloat(this.layersCont.css('width')),
			height 		= parseFloat(this.layersCont.css('height')),
			factor, isPosition;
		
		if( !this.staticLayer && this.$element.css('display') === 'none' && this.isVisible) {
			this.$element.css('display', '')
						 .css('visibility', 'hidden');
		} 

		factor = this.resizeFactor 	= width / this.slide.slider.options.width;
		// updated @since v1.6.1
		for (var key in this.baseStyle) {

			isPosition = key === 'top' || key === 'left' || key === 'bottom' || key === 'right';

			//switch resize/position factor
			if( this.fixed && isPosition ){
				factor = 1;
			} else {
				factor = this.resizeFactor;
			}

			if( !this.resizable && !isPosition ){
				continue;
			}

			if ( key === 'top' && this.middleAlign ){
				this.$element[0].style.top = '0px';
				this.baseHeight = this.$element.outerHeight(false);
				this.$element[0].style.top = this.baseStyle['top'] * factor + (height - this.baseHeight) / 2  + 'px';
			} else if ( key === 'left' && this.centerAlign ){
				this.$element[0].style.left = '0px';
				this.baseWidth = this.$element.outerWidth(false);
				this.$element[0].style.left = this.baseStyle['left'] * factor + (width - this.baseWidth) / 2  + 'px';
			} else { 
				this.$element.css(key , this.baseStyle[key] * factor + 'px');
			}
		}
		
		this.visible(this.minWidth < width);
	};
	
	/**
	 * start layer animation
	 */
	p.start = function(){
		
		// is it already showing or is it a static layer?
		if ( this.isShowing || this.staticLayer ) {
			return;
		}

		this.isShowing = true;
		
		var key , base;

		// reads css value form LayerEffects
		MSLayerEffects.rf = this.resizeFactor;
		var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(null , this._parseEffParams(this.start_anim.eff_params));
		
		// checkes effect css and defines TO css values
		var start_css_eff = {};
		
		// set from position
		for(key in effect_css){

			// check the position key (top, left, right or bottom) for animatin
			// It mostly will be used in old browsers
			// In effect left:100, layer base style right:300 -> effect changes to right:100
			if( this._checkPosKey(key , effect_css) ){
				continue;
			}

			// set default value from Layer Effects Class
			if( MSLayerEffects.defaultValues[key] != null ){
				start_css_eff[key] = MSLayerEffects.defaultValues[key];
			}

			if( key in this.baseStyle ){
				base = this.baseStyle[key];

				// updated @since v1.6.1
				if ( this.middleAlign && key === 'top' ){
					base += (parseInt(this.layersCont.height()) - this.$element.outerHeight(false)) / 2;				
				}

				if ( this.centerAlign && key === 'left' ){
					base += (parseInt(this.layersCont.width()) - this.$element.outerWidth(false)) / 2;				
				}
				//----------------------

				effect_css[key] = base + parseFloat(effect_css[key]) + 'px';
				start_css_eff[key] = base + 'px';
			}

			this.$element.css(key , effect_css[key]);
		}
		
		var that = this;

		clearTimeout(this.to);
		this.to = setTimeout(function(){
			//that.locate();
			that.$element.css('visibility', '');
			that._playAnimation(that.start_anim , start_css_eff);
		} , that.start_anim.delay || 0.01);
		
		
		this.clTo = setTimeout(function(){
			that.show_cl = true;
		},(this.start_anim.delay || 0.01) + this.start_anim.duration);
		 
		if( this.autoHide ){
			clearTimeout(this.hto);
			this.hto = setTimeout(function(){that.hide();} , that.end_anim.time );
		}

	};
	
	/** 
	 * starts hide animation 
	 */
	p.hide = function(){

		// static layers doesn't support animations
		if ( this.staticLayer ) { 
			return;
		}

		this.isShowing = false;
		
		// reads css value form LayerEffects
		var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(null , this._parseEffParams(this.end_anim.eff_params));
		
		for(key in effect_css){
			
			if(this._checkPosKey(key , effect_css)) continue;
			
			if( key === window._jcsspfx + 'TransformOrigin' ){
				this.$element.css(key , effect_css[key]);
			}

			if(key in this.baseStyle){
				effect_css[key] = this.baseStyle[key] + parseFloat(effect_css[key]) +  'px';
			}
				
		}
		
		this._playAnimation(this.end_anim , effect_css);
		
		clearTimeout(this.to);
		clearTimeout(this.hto);		
		clearTimeout(this.clTo);		
	};
	
	/**
	 * reset layer
	 */
	p.reset = function(){
		if ( this.staticLayer ) {
			return;
		}

		this.isShowing = false;
		//this.$element.css(window._csspfx + 'animation-name', ''	);
		this.$element[0].style.display = 'none';
		this.$element.css('opacity', '');
		this.$element[0].style['transitionDuration'] = '';
		
		if(this.show_tween)
			this.show_tween.stop(true);
		
		clearTimeout(this.to);
		clearTimeout(this.hto);
	};
	
	/**
	 * destroy layer
	 */
	p.destroy = function(){
		this.reset();
		this.$element.remove();
	};
	
	/**
	 * change the visibility status
	 * @param  {Boolean} value 
	 */
	p.visible = function(value){
		if(this.isVisible == value) return;

		this.isVisible = value;
		
		this.$element.css('display' , (value ? '' : 'none'));		
	};

	/**
	 * Change the detestation of parallax position 
	 * @param  {Number} x 
	 * @param  {Number} y
	 * @since  1.6.0
	 */
	p.moveParallax = function(x, y , fast){
		this._paraX = x;
		this._paraY = y;
		if( fast ){
			this._lastParaX = x;
			this._lastParaY = y;
			this.parallaxRender();
		}
	};

	/*------------------------------------*\
		Private Methods
	\*------------------------------------*/

	/**
	 * play layer animation
	 * @param  {Obeject} animation layer animation object
	 * @param  {Object} css       animation css object
	 */
	p._playAnimation = function(animation , css){	
		var options = {};

		if(animation.ease){
			options.ease = animation.ease;
		}
		
		options.transProperty = window._csspfx + 'transform,opacity';

		this.show_tween = CTween.animate(this.$element, animation.duration , css , options);					
	};
	
	/**
	 * generate random value
	 * @param  {String} value the pattern value min|max
	 * @return {Number}
	 */
	p._randomParam = function(value){
		var min = Number(value.slice(0,value.indexOf('|')));
		var max = Number(value.slice(value.indexOf('|')+1));
		
		return min + Math.random() * (max - min);
	};
	
	/**
	 * parse effect function
	 * @param  {String} eff_name effect function
	 * @return {Object}          
	 */
	p._parseEff = function(eff_name){
		
		var eff_params = [];
		
		if ( eff_name.indexOf('(') !== -1 ) {
			var temp   = eff_name.slice(0 , eff_name.indexOf('(')).toLowerCase();
			var	value;
			
			eff_params = eff_name.slice(eff_name.indexOf('(') + 1 , -1).replace(/\"|\'|\s/g , '').split(',');
			eff_name   = temp;
		
			for ( var i = 0, l = eff_params.length; i < l; ++i) {
				value = eff_params[i];
				
				if ( value in MSLayerEffects.presetEffParams) {
					value = MSLayerEffects.presetEffParams[value];
				}
				
				eff_params[i] = value;
			}
		}
		
		return {eff_name:eff_name , eff_params:eff_params};
	};
	
	/**
	 * parse effect function parameters
	 * @param  {Aarray} params effect parameters
	 * @return {Array}        
	 */
	p._parseEffParams = function(params){
		var eff_params = [];
		for(var i = 0 , l = params.length; i < l ; ++i){
			var value = params[i];
			if(typeof value === 'string' && value.indexOf('|') !== -1) value = this._randomParam(value);
			
			eff_params[i] = value;
		}
		
		return eff_params;
	};
	
	/**
	 * calculates layer position based on initial positioning style and layer effect 
	 * @param  {string} key   positioning key
	 * @param  {Object} style style object 
	 * @return {Boolean}    
	 */
	p._checkPosKey = function(key , style){		
		if(key === 'left' && !(key in this.baseStyle) && 'right' in this.baseStyle){
			 style.right = -parseInt(style.left) + 'px';
			 delete style.left;
			 return true;
		}
		
		if(key === 'top'  && !(key in this.baseStyle) && 'bottom' in this.baseStyle){
			style.bottom = -parseInt(style.top) + 'px';
			delete style.top;
			return true;
		} 
		
		return false;
	};

	/**
	 * calculate parallax position
	 */
	p._parallaxCalc = function(){
		var x_def = this._paraX - this._lastParaX,
			y_def = this._paraY - this._lastParaY;

		this._lastParaX += x_def / 12;
		this._lastParaY += y_def / 12;

		if( Math.abs( x_def ) < 0.019 ) {
			this._lastParaX = this._paraX;
		}

		if( Math.abs( y_def ) < 0.019 ) {
			this._lastParaY = this._paraY;
		}

	}

	/**
	 * Parallax move ticker function
	 */
	p._parallaxCSS3DRenderer = function(){
		this._parallaxCalc();
		this.$parallaxElement[0].style[window._jcsspfx + 'Transform'] = 'translateX(' + this._lastParaX * this.parallax + 'px) translateY(' + this._lastParaY * this.parallax + 'px) translateZ(0)';
	};

	/**
	 * parallax move ticker for CSS2 browsers
	 * @return {[type]} [description]
	 */
	p._parallaxCSS2DRenderer = function(){
		this._parallaxCalc();
		this.$parallaxElement[0].style[window._jcsspfx + 'Transform'] = 'translateX(' + this._lastParaX * this.parallax + 'px) translateY(' + this._lastParaY * this.parallax + 'px)';
	};

	/**
	 * parallax move ticker for zombie browsers
	 */
	p._parallax2DRenderer = function(){
		this._parallaxCalc();
		
		// change bottom instead of top if layer aligned to the bottom (origin)
		if( this.alignedToBot ) {
			this.$parallaxElement[0].style.bottom  = this._lastParaY * this.parallax + 'px';
		} else { 
			this.$parallaxElement[0].style.top  = this._lastParaY * this.parallax + 'px';
		}
		
		this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + 'px';
	};
	
})(jQuery);

/* ================== bin-debug/js/pro/layers/ImageLayerElement.js =================== */
;(function($){
	
	window.MSImageLayerElement = function(){
		MSLayerElement.call(this);
		this.needPreload = true;
		
		this.__cssConfig = [
			'width'			,		'height'		,
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			'left'			,       'right'			, 
			'top'			,       'bottom'		
		];
		
		this.type = 'image';
	};
	
	MSImageLayerElement.extend(MSLayerElement);
	
	var p = MSImageLayerElement.prototype;
	var _super = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.create = function(){
		
		if(this.link){
			var p = this.$element.parent();
			p.append(this.link);
			this.link.append(this.$element);
			this.link.removeClass('ms-layer');
			this.$element.addClass('ms-layer');
			p = null;
		}

		_super.create.call(this);
		
		if(this.$element.data('src') != undefined){
			this.img_src = this.$element.data('src');
			this.$element.removeAttr('data-src');
		}else{
			var that = this;
			this.$element.on('load', function(event){
				that.controller.preloadCount--;
				if(that.controller.preloadCount === 0)
					that.controller._onlayersReady();
			}).each($.jqLoadFix);
		}
		
		if($.browser.msie)
			this.$element.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging
	};
	
	p.loadImage = function(){
		var that = this;

		this.$element.preloadImg(this.img_src , function(event){
			//this.$element.width(event.width).height(event.height);
			that.controller.preloadCount--;
			if(that.controller.preloadCount === 0) that.controller._onlayersReady();
		});
	};
	
})(jQuery);

/* ================== bin-debug/js/pro/layers/VideoLayerElement.js =================== */
;(function($){
	
	window.MSVideoLayerElement = function(){
		MSLayerElement.call(this);
		
		this.__cssConfig.push(
				'height'
		);
	
		this.type = 'video';
	};
	
	MSVideoLayerElement.extend(MSLayerElement);
	
	var p  = MSVideoLayerElement.prototype;
	var _super  = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	p.__playVideo = function(){
		if(this.img)CTween.fadeOut(this.img , 500 , 2);
		CTween.fadeOut(this.video_btn , 500 , 2);
		this.video_frame.attr('src' , 'about:blank').css('display' , 'block');
		if(this.video_url.indexOf('?') == -1) this.video_url += '?';
		this.video_frame.attr('src' , this.video_url + '&autoplay=1');
	};

	p.start = function(){
		_super.start.call(this);

		if ( this.$element.data('autoplay') ) {
			this.__playVideo();
		}
	};

	p.reset = function(){
		_super.reset.call(this);
		
		if(this.needPreload || this.$element.data('btn')){
			this.video_btn.css('opacity' , 1).css('display', 'block');
			this.video_frame.attr('src' , 'about:blank').css('display' , 'none');
		}
		
		if(this.needPreload){
			this.img.css('opacity' , 1).css('display', 'block');	
			return;
		}
		
		this.video_frame.attr('src' , this.video_url);
	};

	p.create = function(){
		_super.create.call(this);

		this.video_frame = this.$element.find('iframe').css({width:'100%' , height:'100%'});
		this.video_url   = this.video_frame.attr('src');
		
		var has_img = this.$element.has('img').length != 0;
		
		if(!has_img && !this.$element.data('btn')) return;
		
		this.video_frame.attr('src' , 'about:blank').css('display' , 'none');
		
		var that = this;
		
		this.video_btn = $('<div></div>').appendTo(this.$element).addClass('ms-video-btn').click(function() {
			that.__playVideo();
		});
		
		//this.video_frame.attr('src' , 'about:blank');
		
		if(!has_img) return;
		
		this.needPreload = true;
		this.img = this.$element.find('img:first').addClass('ms-video-img');
		
		if(this.img.data('src') !== undefined){
			this.img_src = this.img.data('src');
			this.img.removeAttr('data-src');
		}else{
			var that = this;
			this.img.attr('src' , this.img_src).on('load', function(event) {
				that.controller.preloadCount--;
				if(that.controller.preloadCount === 0)
					that.controller._onlayersReady();
			}).each($.jqLoadFix);
		}
		
		if($.browser.msie)
			this.img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
	};
	
	p.loadImage = function(){
		var that = this;
		this.img.preloadImg(this.img_src, function(event) {
			that.controller.preloadCount--;
			if(that.controller.preloadCount === 0) that.controller._onlayersReady();
		});
	};
	
})(jQuery);

/* ================== bin-debug/js/pro/layers/HotspotLayer.js =================== */
;(function($){

	"use strict";
	
	window.MSHotspotLayer = function(){
		MSLayerElement.call(this);
		
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			'left'			,       'right'			, 
			'top'			,       'bottom'		
		];
		
		
		this.ease = 'Expo'; 
		this.hide_start = true;
		this.type = 'hotspot';
	};
	
	MSHotspotLayer.extend(MSLayerElement);
	
	var p = MSHotspotLayer.prototype;
	var _super = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	
	p._showTT = function(){
		if(!this.show_cl)  return;
		
		clearTimeout(this.hto);
		if(this._tween)	this._tween.stop(true);	
		
		if( this.hide_start ){
			this.align = this._orgAlign;
			this._locateTT();
			
			this.tt.css({display:'block'});
			this._tween = CTween.animate(this.tt , 900 , this.to , {ease:'easeOut'+this.ease});
			this.hide_start = false;
		}

	};
	
	p._hideTT = function(){
		if(!this.show_cl)  return;
		if(this._tween)	this._tween.stop(true);
		
		var that = this;
		
		clearTimeout(this.hto);
		this.hto = setTimeout(function(){
			that.hide_start = true;
			that._tween = CTween.animate(that.tt , 900 , that.from , {ease:'easeOut'+that.ease , complete:function(){that.tt.css('display' , 'none');}} );
		} , 200);
	};
	
	p._updateClassName = function(name){
		if(this._lastClass)	this.tt.removeClass(this._lastClass);
		this.tt.addClass(name);
		this._lastClass = name;
	}
	
	p._alignPolicy = function(){
		var h = this.tt.outerHeight(false),
		    w = Math.max(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width'))),
		 	ww = window.innerWidth,
		 	wh = window.innerHeight;
		 	
		switch(this.align){
			case 'top':
				if(this.base_t < 0 )
					return 'bottom';
			break;
			case 'right':
				if(this.base_l + w > ww || this.base_t < 0)
					return 'bottom';
			break;
			case 'left':
				if(this.base_l < 0 || this.base_t < 0)
					return 'bottom';
			break;
		}
		
		return null;	
	};
		
	p._locateTT = function(){
		var os = this.$element.offset(),
		os2 = this.slide.slider.$element.offset();
		
		var dist = 50,
			space = 15 //* this.factor;
		
		this.pos_x = os.left - os2.left - this.slide.slider.$element.scrollLeft();
		this.pos_y = os.top - os2.top - this.slide.slider.$element.scrollTop();
		
		this.from = {opacity:0};
		this.to = {opacity:1};
		
		this._updateClassName('ms-tooltip-'+this.align);
		this.tt_arrow.css('margin-left' , '');
		
		var arrow_w = 15,//parseInt(this.tt_arrow.css('border-left')) + parseInt(this.tt_arrow.css('border-right')),
			arrow_h = 15;//parseInt(this.tt_arrow.css('border-top'))  + parseInt(this.tt_arrow.css('border-bottom'));
			
			//console.log(arrow_h,arrow_w);
		//
		switch(this.align){
			case 'top':
				var w = Math.min(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width')));
				this.base_t = this.pos_y - this.tt.outerHeight(false) - arrow_h - space;
				this.base_l = this.pos_x - w/2;
				
				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}
				
				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth(false) / 2 + 'px');
				}
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform']   = '';
				}else{	
					this.from.top = (this.base_t - dist) + 'px';
					this.to.top = this.base_t + 'px';
				}

			break;
			case 'bottom':
				var w = Math.min(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width')));
				
				this.base_t = this.pos_y + arrow_h + space;
				this.base_l = this.pos_x - w/2;
				
				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}
				
				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth(false) / 2 + 'px');
				}
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.top = (this.base_t + dist) + 'px';
					this.to.top = this.base_t + 'px';
				}
				
			break;
			
			case 'right':
				this.base_l = this.pos_x + arrow_w + space;
				this.base_t = this.pos_y - this.tt.outerHeight(false) / 2;
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l + dist) + 'px';
					this.to.left = this.base_l + 'px';
				}
				
			break;
			case 'left':
				this.base_l = this.pos_x - arrow_w - this.tt.outerWidth(false) - space;
				this.base_t = this.pos_y - this.tt.outerHeight(false) / 2;
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l - dist) + 'px';
					this.to.left = this.base_l + 'px';
				}
				
			break;
		}
		
		
		
		var policyAlign = this._alignPolicy();
		if(policyAlign !== null){
			this.align = policyAlign;
			this._locateTT();
			return;
		}
		
		this.tt.css('top'  ,parseInt(this.base_t)+'px').
				css('left' ,parseInt(this.base_l)+'px');
		
		this.tt.css(this.from);		
		
	};
	
	p.start = function(){
		_super.start.call(this);
		this.tt.appendTo(this.slide.slider.$element);
		//this._locateTT();
		this.tt.css('display' , 'none');
	};
	
	p.reset = function(){
		_super.reset.call(this);
		this.tt.detach();
	};
	
	/**
	 * locate hotspot over slide
	 * @override LayerElement.locate
	 * @since 2.2.0
	 */
/*	p.locate = function(){
		_super.locate.call(this);

		if ( this.relativeToBG ) {
			console.log(this.baseOffsetX , this.slide.$bg_img.width()  , this.slide.bgWidth)
			this.$element[0].style.left = this.baseOffsetX * this.slide.$bg_img.width()  / this.slide.bgWidth + 'px';
			this.$element[0].style.top  = this.baseOffsetY * this.slide.$bg_img.height() / this.slide.bgHeight + 'px';
		} 

	};
*/
	p.create = function(){
		var that = this;
		
		//@since 2.2.0
		//chnage offset progin to top left
	/*	this.relativeToBG = this.$element.data('relative') && (this.slide.fillMode === 'fill' || this.slide.fillMode === 'fit');
		if ( this.relativeToBG ) {

			var origin = this.$element.data('origin'),
				osy = this.$element.data('offset-y'), 
				osx = this.$element.data('offset-x');

			if ( origin ) {
				if ( origin.charAt(0) === 'b' ){
					osy = this.slide.slider.options.height - this.$element.data('offset-y');
					this.$element.data('offset-y',  osy);
				}

				if ( origin.charAt(1) === 'r' ){
					osx = this.slide.slider.options.width - this.$element.data('offset-x');
					this.$element.data('offset-x', osx);
				}

			}

			this.$element.data('origin', 'tl');

			this.baseOffsetX = osx;
			this.baseOffsetY = osy;
		}*/

		
		this._orgAlign = this.align = this.$element.data('align') !== undefined ? this.$element.data('align') : 'top';
		
		this.data = this.$element.html();
		
		this.$element.html('').on('mouseenter' , function(){that._showTT();}).on('mouseleave',function(){that._hideTT();});
		
		this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>')
					.addClass('ms-tooltip-point')
					.appendTo(this.$element);

		var link = this.$element.data('link'),
			target = this.$element.data('target');

		if( link ){
			this.point.on('click', function(){window.open(link , target || '_self');});
		}

		this.tt =  $('<div></div>')
					.addClass('ms-tooltip')
					//.addClass('ms-tooltip-'+this.align)
					.css('display','hidden')
					.css('opacity' , 0);

		// @since v1.6.1
		if( this.$element.data('width') !== undefined ){
			this.tt.css('width', this.$element.data('width'))
				   .css('max-width', this.$element.data('width'));
		}
		
		this.tt_arrow = $('<div></div>')
						.addClass('ms-tooltip-arrow')
						.appendTo(this.tt);
		
		this._updateClassName('ms-tooltip-'+this.align);
		
		this.ttcont = $('<div></div>')
					  .addClass('ms-tooltip-cont')
					  .html(this.data)
					  .appendTo(this.tt)


		if( this.$element.data('stay-hover') === true ) {
			this.tt.on('mouseenter' , function(){
				if( that.hide_start ){
					return
				}
				clearTimeout(that.hto);
				that._tween.stop(true);
				that._showTT();
			}).on('mouseleave', function(){
				that._hideTT();
			});
		}

		_super.create.call(this);
	};

})(jQuery);

/* ================== bin-debug/js/pro/layers/ButtonLayer.js =================== */
/**
 * Master Slider Button Layer
 * @author Averta
 * @since 1.7.2
 * @extends {MSLayerElement}
 */
(function($){

	window.MSButtonLayer = function(){
		MSLayerElement.call(this);
		
		this.type = 'button';
	};
	
	MSButtonLayer.extend(MSLayerElement);
	
	var p = MSButtonLayer.prototype;
	var _super = MSLayerElement.prototype;
	
	var positionKies = ['top', 'left', 'bottom', 'right'];

	/*-------------- METHODS --------------*/
	
	p.create = function(){
		_super.create.call(this);
		this.$element.wrap('<div class="ms-btn-container"></div>').css('position', 'relative');
		this.$container = this.$element.parent();
	};

	p.locate = function(){
		_super.locate.call(this);
		var key, tempValue;

		for (var i=0; i<4; i++){
			key = positionKies[i];
			if ( key in this.baseStyle ) {
				tempValue = this.$element.css(key);
				this.$element.css(key, '');
				this.$container.css(key, tempValue);
			}
		}

		this.$container.width(this.$element.outerWidth(true))
					   .height(this.$element.outerHeight(true));
	};
	
})(jQuery);

/* ================== bin-debug/js/pro/controls/SliderEvent.js =================== */
window.MSSliderEvent = function (type){
	this.type = type;
};

MSSliderEvent.CHANGE_START      	= 'ms_changestart';
MSSliderEvent.CHANGE_END       		= 'ms_changeend';
MSSliderEvent.WAITING		      	= 'ms_waiting';
MSSliderEvent.AUTOPLAY_CHANGE   	= 'ms_autoplaychange';
MSSliderEvent.VIDEO_PLAY		   	= 'ms_videoPlay';
MSSliderEvent.VIDEO_CLOSE		   	= 'ms_videoclose';
MSSliderEvent.INIT					= 'ms_init';
MSSliderEvent.HARD_UPDATE			= 'ms_hard_update';
MSSliderEvent.RESIZE				= 'ms_resize';
MSSliderEvent.RESERVED_SPACE_CHANGE = 'ms_rsc'; // internal use
MSSliderEvent.DESTROY				= 'ms_destroy';

/* ================== bin-debug/js/pro/controls/Slide.js =================== */
/**
 * Master Slider Slide Class
 * @author averta
 * @package Master Slider jQuery 
 */
;(function(window, document, $){
	
	"use strict";
	
	window.MSSlide = function(){
		
		this.$element = null;
		this.$loading = $('<div></div>').addClass('ms-slide-loading');

		this.view 		= null;
		this.index 		= -1;
		
		this.__width 	= 0;
		this.__height 	= 0;
		
		this.fillMode = 'fill'; // fill , fit , stretch , tile , center
		
		this.selected = false;
		this.pselected = false;
		this.autoAppend = true;
		this.isSleeping = true;
		
		this.moz = $.browser.mozilla;
	};
	
	var p = MSSlide.prototype;
				
	/**
	 * on swipe start handler
	 */
	p.onSwipeStart = function(){
		//this.$layers.css(window._csspfx + 'transition-duration' , '0ms');
		if ( this.link ) { 
			this.linkdis = true;
		}

		if ( this.video ) { 
			this.videodis = true;
		}
	};

	/**
	 * on swipe move handler
	 */
	p.onSwipeMove = function (e) {
		var move = Math.max(Math.abs(e.data.distanceX), Math.abs(e.data.distanceY));
		this.swipeMoved = move > 4;
	};
	
	/**
	 * on swipe cancel handler
	 */
	p.onSwipeCancel = function(e){
		if ( this.swipeMoved ) { 
			this.swipeMoved = false;
			return;
		}

		if ( this.link ) { 
			this.linkdis = false;
		}
		
		if ( this.video ) { 
			this.videodis = false;
		}
		//this.$layers.css(window._csspfx + 'transition-duration' , this.view.__slideDuration + 'ms');
	};

	/**
	 * setup layer controller for the slide
	 * @since 2.11.0
	 */
	p.setupLayerController = function () {
		this.hasLayers = true;
		this.layerController = new MSLayerController(this);
	};
	/**
	 * this method called after loading all assets related to this slide
	 */
	p.assetsLoaded = function(){
		this.ready = true;
		this.slider.api._startTimer();
		
		if( this.selected || (this.pselected && this.slider.options.instantStartLayers) ){

			if ( this.hasLayers ) {
				this.layerController.showLayers();	
			}

			if(this.vinit){
				this.bgvideo.play();
				if( !this.autoPauseBgVid ) {
					this.bgvideo.currentTime = 0;
				}
			}

		}
		if ( !this.isSleeping ) {
			this.setupBG();
		}

		CTween.fadeOut(this.$loading , 300 , true);
		
		//sequence loading
		if ( (this.slider.options.preload === 0 || this.slider.options.preload === 'all') && this.index < this.view.slideList.length - 1 ) {
			this.view.slideList[this.index + 1].loadImages();
		} else if ( this.slider.options.preload === 'all' && this.index === this.view.slideList.length - 1 ){
			this.slider._removeLoading();
		}
		
	};

	/**
	 * adds backgroun image to the slider
	 * @param {Element} img slide image element
	 */
	p.setBG = function(img){
		this.hasBG = true;	
		var that = this;
		
		this.$imgcont = $('<div></div>').addClass('ms-slide-bgcont');
		
		this.$element.append(this.$loading)
			   		 .append(this.$imgcont);
		
		this.$bg_img = $(img).css('visibility' , 'hidden');
		this.$imgcont.append(this.$bg_img);
		
		this.bgAligner = new MSAligner(that.fillMode , that.$imgcont, that.$bg_img );
		this.bgAligner.widthOnly = this.slider.options.autoHeight;
			
		if ( that.slider.options.autoHeight && (that.pselected || that.selected) ) {
			that.slider.setHeight(that.slider.options.height);
		}
		
		if ( this.$bg_img.data('src') !== undefined ) {
			this.bg_src = this.$bg_img.data('src');
			this.$bg_img.removeAttr('data-src');
		} else {
			this.$bg_img.one('load', function(event) {that._onBGLoad(event);})
						.each($.jqLoadFix);
		}
		
	};

	/**
	 * align and resize backgrund image over slide
	 */
	p.setupBG = function(){

		//if(this.isSettedup) return;
		//this.isSettedup = true;

		if ( !this.initBG && this.bgLoaded ) {
			this.initBG = true;
			this.$bg_img.css('visibility' , '');
			this.bgWidth  = this.bgNatrualWidth  || this.$bg_img.width();
			this.bgHeight = this.bgNatrualHeight || this.$bg_img.height();

			CTween.fadeIn(this.$imgcont , 300);	

			if(this.slider.options.autoHeight){
				this.$imgcont.height(this.bgHeight * this.ratio);
			}
			
			this.bgAligner.init(this.bgWidth  , this.bgHeight);
			this.setSize(this.__width , this.__height);
			
			if(this.slider.options.autoHeight && (this.pselected || this.selected))
			 	this.slider.setHeight(this.getHeight());
		}
		
	};


	
	/**
	 * start loading images
	 */
	p.loadImages = function(){
		if ( this.ls ) {
			return;
		}

		this.ls = true;
		
		if ( this.bgvideo ) {
			this.bgvideo.load();
		}
		if ( this.hasBG && this.bg_src ) {
			var that = this;
			this.$bg_img.preloadImg(this.bg_src , function(event) {that._onBGLoad(event);});
		}

		if ( this.hasLayers ) {
			this.layerController.loadLayers(this._onLayersLoad);
		}
		// There is nothing to preload? so slide is ready to show.
		if( !this.hasBG && !this.hasLayers ) {
			this.assetsLoaded();
		}

	};

	/**
	 * layerController on assets load callback
	 */
	p._onLayersLoad = function () {
		this.layersLoaded = true;
		if ( !this.hasBG || this.bgLoaded ) {
			this.assetsLoaded();
		}
	};
	/**
	 * on background image loaded 
	 * @param  {Event} event 
	 */
	p._onBGLoad = function(event){
		this.bgNatrualWidth = event.width;
		this.bgNatrualHeight = event.height;

		this.bgLoaded = true;
		
		if ( $.browser.msie ) {
			this.$bg_img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
		}
		
		if ( !this.hasLayers || this.layerController.ready ) {
			this.assetsLoaded();
		} 
	};

	/* -----------------------------------------------------*/

	/**
	 * add video background to the slide
	 * @param {jQuery Element} $video 
	 */
	p.setBGVideo = function($video){
		
		if ( !$video[0].play ) { 
			return;
		}

		// disables video in mobile devices
		if ( window._mobile ) {
			$video.remove();
			return;
		}

		this.bgvideo  = $video[0];
		var that = this;

		$video.addClass('ms-slide-bgvideo');
		
		if ( $video.data('loop') !== false ) {
			this.bgvideo.addEventListener('ended' , function(){
				//that.bgvideo.currentTime = -1;
				that.bgvideo.play();
			});
		}	

		if ( $video.data('mute') !== false ) {
			this.bgvideo.muted = true;
		}

		if ( $video.data('autopause') === true ) {
			this.autoPauseBgVid = true;
		}

		this.bgvideo_fillmode = $video.data('fill-mode') || 'fill'; // fill , fit , none
		
		if ( this.bgvideo_fillmode !== 'none' ) {
			this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode , this.$element, $video );
			
			this.bgvideo.addEventListener('loadedmetadata' , function(){
				if(that.vinit) return;

				that.vinit = true;
				that.video_aspect = that.bgVideoAligner.baseHeight/that.bgVideoAligner.baseWidth;
				that.bgVideoAligner.init(that.bgvideo.videoWidth , that.bgvideo.videoHeight);
				that._alignBGVideo();
				CTween.fadeIn($(that.bgvideo) , 200);

				if ( that.selected ) {
					that.bgvideo.play();
				}
			});
		}

		$video.css('opacity' , 0);

		this.$bgvideocont = $('<div></div>').addClass('ms-slide-bgvideocont').append($video);

		if ( this.hasBG ) {
			this.$imgcont.before(this.$bgvideocont);
		} else {
			this.$bgvideocont.appendTo(this.$element);
		}
	};

	/**
	 * align video in slide
	 */
	p._alignBGVideo = function () {
		if ( !this.bgvideo_fillmode || this.bgvideo_fillmode === 'none' ) {
			return;
		}
		this.bgVideoAligner.align();
	};

	/* -----------------------------------------------------*/
	
	/**
	 * resize slide
	 * @param {Number} width  
	 * @param {Number} height 
	 * @param {Boolean} hard   after resizing reinitializes layers 
	 */
	p.setSize = function(width, height, hard) {

		this.__width  = width;
		
		if ( this.slider.options.autoHeight ) {
			if ( this.bgLoaded ) {
				this.ratio = this.__width / this.bgWidth;
				height = Math.floor(this.ratio * this.bgHeight);
				this.$imgcont.height(height);
			} else {
				this.ratio = width / this.slider.options.width;
				height = this.slider.options.height * this.ratio;
			}
		}
	
		this.__height = height;
		this.$element.width(width).height(height);

		if(this.hasBG && this.bgLoaded)this.bgAligner.align();
		
		this._alignBGVideo();

		if ( this.hasLayers ) {
			this.layerController.setSize(width, height, hard);
		}
	};

	/**
	 * calculates slide height
	 * @return {Number} slide height
	 */
	p.getHeight = function(){

		if ( this.hasBG && this.bgLoaded ) {
			return this.bgHeight * this.ratio;
		}

		return Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio);
	};

	/* -----------------------------------------------------*/
	// YouTube and Vimeo videos	
	
	/**
	 * playe embeded video
	 */
	p.__playVideo = function (){

		if ( this.vplayed || this.videodis ) {
			return;
		}

		this.vplayed = true;

		if ( !this.slider.api.paused ) {
			this.slider.api.pause();
			this.roc = true; // resume on close;
		}

		this.vcbtn.css('display' , '');
		CTween.fadeOut(this.vpbtn 	, 500 , false);
		CTween.fadeIn(this.vcbtn 	, 500);
		CTween.fadeIn(this.vframe 	, 500);
		this.vframe.css('display' , 'block').attr('src' , this.video + '&autoplay=1');
		this.view.$element.addClass('ms-def-cursor');
		
		// remove perspective style from view if it's Firefox.
		// it fixes video fullscreen issue in Firefox
		if ( this.moz ) {
			this.view.$element.css('perspective', 'none');
		}

		// if swipe navigation enabled		
		if ( this.view.swipeControl ) {
			this.view.swipeControl.disable();
		}
		
		this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY));
	};
	
	/**
	 * close embeded video 
	 */
	p.__closeVideo = function(){
		
		if ( !this.vplayed ) {
			return;
		}
		
		this.vplayed = false;

		if(this.roc){
			this.slider.api.resume();
		}

		var that = this;
		
		CTween.fadeIn(this.vpbtn	, 500);
		CTween.animate(this.vcbtn   , 500 , {opacity:0} , {complete:function(){	that.vcbtn.css  ('display'  , 'none'); }});
		CTween.animate(this.vframe  , 500 , {opacity:0} , {complete:function(){	that.vframe.attr('src'  , 'about:blank').css('display'  , 'none');}});
		
		//  video fullscreen issue in Firefox
		if ( this.moz ) {
			this.view.$element.css('perspective', '');
		}

		// if swipe navigation enabled		
		if ( this.view.swipeControl ) {
			this.view.swipeControl.enable();
		}
		
		this.view.$element.removeClass('ms-def-cursor');
		this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE));
	};

	/* -----------------------------------------------------*/

	/**
	 * create slide - it adds requierd elements over slide
	 */
	p.create = function(){
		var that = this;

		if ( this.hasLayers ) {			
			this.layerController.create();
		}
 
		if ( this.link ) {
			this.link.addClass('ms-slide-link').html('').click(function(e){
				if ( that.linkdis ) {
					e.preventDefault();
				}
			});

			// this.$element.css('cursor' , 'pointer')
			// 			 .click(function(){ if(!that.linkdis) window.open(that.link , that.link_targ || '_self'); });
		}
		
		if ( this.video ) {

			if ( this.video.indexOf('?') === -1 ) {
				this.video += '?';
			}

			this.vframe = $('<iframe></iframe>')
						  .addClass('ms-slide-video')
						  .css({width:'100%' , height:'100%' , display:'none'})
						  .attr('src' , 'about:blank')
						  .attr('allowfullscreen', 'true')
						  .appendTo(this.$element);
			
			this.vpbtn = $('<div></div>')
						.addClass('ms-slide-vpbtn')
						.click(function(){that.__playVideo();})
						.appendTo(this.$element);	
			
			this.vcbtn = $('<div></div>')
						.addClass('ms-slide-vcbtn')
						.click(function(){that.__closeVideo();})
						.appendTo(this.$element)
						.css('display','none');

			if ( window._touch ) {
				this.vcbtn.removeClass('ms-slide-vcbtn')
						  .addClass('ms-slide-vcbtn-mobile')
						  .append('<div class="ms-vcbtn-txt">Close video</div>')
						  .appendTo(this.view.$element.parent());
			}
		}	
		
		if ( !this.slider.options.autoHeight && this.hasBG ) {
			this.$imgcont.css('height' , '100%');
			
			if ( this.fillMode === 'center' || this.fillMode === 'stretch' ){
				this.fillMode = 'fill';		
			}
		}

		if ( this.slider.options.autoHeight ) { 
			this.$element.addClass('ms-slide-auto-height');
		}

		this.sleep(true);
	};
	
	/**
	 * destory the slide
	 */
	p.destroy = function(){
		if ( this.hasLayers ) {
			this.layerController.destroy();
			this.layerController = null;
		}
		this.$element.remove();
		this.$element = null;
	};
	
	/**
	 * everything require to do before selecting slide
	 */
	p.prepareToSelect = function(){

		if ( this.pselected || this.selected ) {
			return;
		}

		this.pselected = true;		
		
		if ( this.link || this.video ) {
			this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);
			this.view.addEventListener(MSViewEvents.SWIPE_MOVE  , this.onSwipeMove  , this);
			this.view.addEventListener(MSViewEvents.SWIPE_CANCEL , this.onSwipeCancel , this);
			this.linkdis = false;
			this.swipeMoved = false;	
		}

		this.loadImages();

		if ( this.hasLayers ) {
			this.layerController.prepareToShow();
		}
		
		if ( this.ready ) {
			if( this.bgvideo ){
				this.bgvideo.play();
			}

			if ( this.hasLayers && this.slider.options.instantStartLayers ){
				this.layerController.showLayers();
			}
		}
		if( this.moz ){
			this.$element.css('margin-top' , '');
		}


	};
	
	/*p.prepareToUnselect = function(){
		if(!this.pselected || !this.selected) return;
		
		this.pselected = false;
		
	};*/
	
	/**
	 * select slide 
	 */
	p.select = function(){
		if ( this.selected ) {
			return;
		}

		this.selected = true;
		this.pselected = false;
		this.$element.addClass('ms-sl-selected');
		
		if(this.hasLayers){

			if ( this.slider.options.autoHeight ) {
				this.layerController.updateHeight();
			}
			
			if( !this.slider.options.instantStartLayers ) {
				this.layerController.showLayers();
			}

			//this.view.addEventListener(MSViewEvents.SCROLL 		, this.updateLayers  , this)
		} 	
		

		if( this.ready && this.bgvideo ) {
			this.bgvideo.play();
		}
		
		// @since 1.8.0 
		// Autoplay iframe video
		if ( this.videoAutoPlay ) {
			this.videodis = false;
			this.vpbtn.trigger('click');
		}

	};
	
	/**
	 * remove selected status   
	 */
	p.unselect = function(){
		this.pselected = false;

		if ( this.moz ) {
			this.$element.css('margin-top' , '0.1px');
		}

		if ( this.link || this.video ) {
			this.view.removeEventListener(MSViewEvents.SWIPE_START 	 , this.onSwipeStart  , this);
			this.view.removeEventListener(MSViewEvents.SWIPE_MOVE  , this.onSwipeMove  , this);
			this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL  , this.onSwipeCancel , this);
		}

		if (this.bgvideo ) {
			this.bgvideo.pause();
			if(!this.autoPauseBgVid && this.vinit)
				this.bgvideo.currentTime = 0;
		}

		// hide layers
		if ( this.hasLayers ) {
			this.layerController.hideLayers();
		}
			
		if ( !this.selected ) {
			return;
		}

		this.selected = false;

		this.$element.removeClass('ms-sl-selected');		
		if(this.video && this.vplayed){
			this.__closeVideo();
			this.roc = false;
		}	
		
	};	

	/**
	 * remove slide from DOM
	 */
	p.sleep = function(force){
		if ( this.isSleeping && !force ) {
			return;
		}

		this.isSleeping = true;

		if ( this.autoAppend ) {
			this.$element.detach();
		}

		if ( this.hasLayers ) {
			this.layerController.onSlideSleep();
		}
	};
	
	/**
	 * add slide to the DOM
	 */
	p.wakeup = function(){
		if ( !this.isSleeping ) {
			return;
		}
		
		this.isSleeping = false;
		
		if ( this.autoAppend ) {
			this.view.$slideCont.append(this.$element);
		}

		if ( this.moz ){
			this.$element.css('margin-top' , '0.1px');
		}
		
		this.setupBG();

		// aling bg
		if ( this.hasBG ){
			this.bgAligner.align();
		}

		if ( this.hasLayers ) {
			this.layerController.onSlideWakeup();
		}
	};

})(window, document, jQuery);

/* ================== bin-debug/js/pro/controls/SlideController.js =================== */
;(function($){
	
	"use strict";
	
	var SliderViewList = {};
	
	window.MSSlideController = function(slider){
		
		this._delayProgress		= 0;
		
		this._timer 			= new averta.Timer(100);
		this._timer.onTimer 	= this.onTimer;
		this._timer.refrence 	= this;
		
		this.currentSlide		= null;
		
		this.slider 	= slider;
		this.so 		= slider.options;
		
		averta.EventDispatcher.call(this);
		
	};
	
	MSSlideController.registerView = function(name , _class){
		if(name in SliderViewList){
			 throw new Error( name + ', is already registered.');
			 return;
		}
		
		SliderViewList[name] = _class;
	};
	
	MSSlideController.SliderControlList = {};
	MSSlideController.registerControl = function(name , _class){
		if(name in MSSlideController.SliderControlList){
			 throw new Error( name + ', is already registered.');
			 return;
		}
		
		MSSlideController.SliderControlList[name] = _class;
	};	
	
	var p = MSSlideController.prototype;
	
	/*-------------- METHODS --------------*/
	

	p.setupView = function(){

		var that = this;
		this.resize_listener = function(){that.__resize();};
		
		// in @version 1.5.7 it will be added in Masterslider.js _setupSliderLayout function
		//$(window).bind('resize', this.resize_listener);
		
		//if(this.so.smoothHeight) this.so.autoHeight = true;
	
		var viewOptions = {
			spacing: 		this.so.space,
			mouseSwipe:		this.so.mouse,
			loop:			this.so.loop,
			autoHeight:		this.so.autoHeight,
			swipe:			this.so.swipe,
			speed:			this.so.speed,
			dir:			this.so.dir, 
			viewNum: 		this.so.inView,
			critMargin: 	this.so.critMargin
		};	
		
		if(this.so.viewOptions)
			$.extend(viewOptions , this.so.viewOptions);
				
		if(this.so.autoHeight) this.so.heightLimit = false;
	
		//this.view.slideDuration = this.so.duration;

		var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
		if(viewClass._3dreq && (!window._css3d || $.browser.msie) ) viewClass = viewClass._fallback || MSBasicView;
		
		this.view = new viewClass(viewOptions);

		if(this.so.overPause){
			var that = this;
			this.slider.$element.mouseenter(function(){
				that.is_over = true;
				that._stopTimer();
			}).mouseleave(function(){
				that.is_over = false;
				that._startTimer();
			});
		}
	};

	p.onChangeStart = function(){
		
		this.change_started = true;

		if(this.currentSlide) this.currentSlide.unselect();
		this.currentSlide = this.view.currentSlide;
		this.currentSlide.prepareToSelect();
		//this.__appendSlides();
		if(this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1){
			this.pause();
			//this._timer.reset();
			this.skipTimer();
		}
		
		if(this.so.autoHeight){
			this.slider.setHeight(this.currentSlide.getHeight());
		}

		if ( this.so.deepLink ) {
			this.__updateWindowHash();
		}

		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START));
	};
	
	p.onChangeEnd = function(){
		//if(!this.currentSlide.selected)
		//	this._timer.reset();
		this.change_started = false;
		
		this._startTimer();
		this.currentSlide.select();
		
		if(this.so.preload > 1){
			var loc ,i , l = this.so.preload - 1, slide;
			
			// next slides
			for(i=1;i<=l;++i){
				loc = this.view.index + i;
				
				if(loc >= this.view.slideList.length) {
					if(this.so.loop){
						loc = loc - this.view.slideList.length;
					}else{
						i = l; 
						continue;
					}
				}

				slide = this.view.slideList[loc];
				if ( slide ) {
					slide.loadImages();
				}

			}
			
			// previous slides
			if(l > this.view.slideList.length/2) 
				l = Math.floor(this.view.slideList.length/2);
			
			for(i=1;i<=l;++i){
				
				loc = this.view.index - i;
				
				if(loc < 0){
					if(this.so.loop){
						loc = this.view.slideList.length + loc;
					}else{
						i = l;
						continue;
					}
				} 

				slide = this.view.slideList[loc];
				if ( slide ) {
					slide.loadImages();
				}
				
			}
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END));
		
	};
		
	p.onSwipeStart = function(){
		//this._timer.reset();
		this.skipTimer();
	};
	
	p.skipTimer = function(){
		this._timer.reset();
		this._delayProgress  = 0;
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
	};

	p.onTimer = function(time) {
		
		if(this._timer.getTime() >= this.view.currentSlide.delay * 1000){
			//this._timer.reset();
			this.skipTimer();
			this.view.next();
			this.hideCalled = false;
		}
		this._delayProgress = this._timer.getTime() / (this.view.currentSlide.delay * 10);
		
		if(this.so.hideLayers && !this.hideCalled && this.view.currentSlide.delay * 1000 - this._timer.getTime() <= 300){
			var currentSlide = this.view.currentSlide;
			if ( currentSlide.hasLayers ) {
				currentSlide.layerController.animHideLayers();
			}
			this.hideCalled = true;
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
	};
	
	p._stopTimer = function(){
		if(this._timer)
			this._timer.stop();
	};
	
	p._startTimer = function(){
		if(!this.paused && !this.is_over && this.currentSlide && this.currentSlide.ready && !this.change_started)
			this._timer.start();
	};

	p.__appendSlides = function(){
		var slide , loc , i = 0 , l = this.view.slideList.length -1;

		// detach all
		for ( i ; i < l ; ++i){
			slide = this.view.slideList[i];
			if(!slide.detached){
			 	slide.$element.detach();
			 	slide.detached = true;
			}
		}

		// append current slide
		this.view.appendSlide(this.view.slideList[this.view.index]);

		l = 3;

		// next slides
		for(i=1;i<=l;++i){
			loc = this.view.index + i;
			
			if(loc >= this.view.slideList.length) {
				if(this.so.loop){
					loc = loc - this.view.slideList.length;
				}else{
					i = l; 
					continue;
				}
			}

			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);

		}
		
		// previous slides
		if(l > this.view.slideList.length/2) 
			l = Math.floor(this.view.slideList.length/2);
		
		for(i=1;i<=l;++i){
			
			loc = this.view.index - i;
			
			if(loc < 0){
				if(this.so.loop){
					loc = this.view.slideList.length + loc;
				}else{
					i = l;
					continue;
				}
			} 
			
			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);
		}

	}

	p.__resize = function(hard){
		if(!this.created) return;

		this.width = this.slider.$element[0].clientWidth || this.so.width;
		
		if(!this.so.fullwidth){ 
			this.width = Math.min(this.width , this.so.width);
			//this.view.$element.css('left' , (this.slider.$element[0].clientWidth - this.width) / 2 + 'px');
		}

		if( this.so.fullheight ){
			this.so.heightLimit = false;
			this.so.autoHeight = false;
			this.height = this.slider.$element[0].clientHeight;
		} else {
			this.height = this.width / this.slider.aspect;
		}
		if( this.so.autoHeight ){
			this.currentSlide.setSize(this.width , null , hard);
			this.view.setSize(this.width , this.currentSlide.getHeight() , hard);
		} else {
			this.view.setSize(this.width , ( Math.max( this.so.minHeight, ( this.so.heightLimit ? Math.min(this.height , this.so.height) :  this.height ) ) ) , hard);
		}
		
		if(this.slider.$controlsCont){
			if(this.so.centerControls && this.so.fullwidth) {
				this.view.$element.css('left' , Math.min(0,-(this.slider.$element[0].clientWidth - this.so.width) / 2) + 'px');
			}
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE));
	};

	p.__dispatchInit = function(){
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT));
	};

	/**
	 * used by deep link feature, uptades window hash value on slide changes 
	 * @since 2.1.0
	 */
	p.__updateWindowHash = function(){
		var hash = window.location.hash,
			dl = this.so.deepLink,
			dlt = this.so.deepLinkType,
			eq = dlt === 'path' ? '\/' : '=',
			sep = dlt === 'path' ? '\/' : '&',
			sliderHash = dl + eq + (this.view.index + 1),
			regTest = new RegExp( dl + eq + '[0-9]+', 'g');

		if ( hash === '' ) {
			window.location.hash = sep + sliderHash;
		} else if( regTest.test(hash) ) {
			window.location.hash = hash.replace(regTest, sliderHash);
		} else {
			window.location.hash = hash + sep + sliderHash;
		}
	};

	p.__curentSlideInHash = function(){
		var hash = window.location.hash,
			dl = this.so.deepLink,
			dlt = this.so.deepLinkType,
			eq = dlt === 'path' ? '\/' : '=',
			regTest = new RegExp( dl + eq + '[0-9]+', 'g' );

		if ( regTest.test(hash) ) {
			var index = Number(hash.match(regTest)[0].match(/[0-9]+/g).pop());
			if ( !isNaN(index) ) {
				return index - 1;
			}
		}

		return -1;
	};

	p.__onHashChanged = function(){
		var index = this.__curentSlideInHash();
		if ( index !== -1 ){
			this.gotoSlide(index);
		}
	};
	
	p.setup = function(){
		
		this.created = true;
		this.paused = !this.so.autoplay;

		//this.slider.$element.append(this.view.$element);
		this.view.addEventListener(MSViewEvents.CHANGE_START , this.onChangeStart , this);
		this.view.addEventListener(MSViewEvents.CHANGE_END   , this.onChangeEnd   , this);
		this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);	
		
		//this.currentSlide = this.view.slides[this.so.start - 1];
		this.currentSlide = this.view.slideList[this.so.start - 1];
		this.__resize();

		var slideInHash = this.__curentSlideInHash(),
			startSlide = slideInHash !== -1 ? slideInHash : this.so.start - 1;
		this.view.create(startSlide);
		
		if(this.so.preload === 0){
			this.view.slideList[0].loadImages();
		}
			
		this.scroller = this.view.controller;

		if(this.so.wheel){
			var that = this;
			var last_time = new Date().getTime();
			this.wheellistener = function(event){
				
				var e = window.event || event.orginalEvent || event;
				e.preventDefault();
				
				var current_time = new Date().getTime();
				if(current_time - last_time < 400) return;
				last_time = current_time;
				
				var delta = Math.abs(e.detail || e.wheelDelta);
				
				if ( $.browser.mozilla ) {
					delta *= 100;
				}

				var scrollThreshold = 15; 
				
				// --- Scrolling up ---
				if (e.detail < 0 || e.wheelDelta > 0) {
					if ( delta >= scrollThreshold) {
						that.previous(true);
					}
				}
				// --- Scrolling down ---
				else {
					if (delta >= scrollThreshold) {
						that.next(true);
					}
				}

				return false;
			};
			
			if($.browser.mozilla) this.slider.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.bind('mousewheel', this.wheellistener);
		}

		// if(this.so.wheel){
		// 	var that = this;
		// 	var last_time = new Date().getTime();
		// 	this.wheellistener = function(event){
		// 		var current_time = new Date().getTime();
		// 		if(current_time - last_time < 550) return;
		// 		last_time = current_time;
		// 		var e = window.event || event.orginalEvent || event;
		// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		// 		if(delta < 0)		that.next();
		// 		else if(delta > 0)	that.previous();
		// 		return false;
		// 	};
			
		// 	if($.browser.mozilla) this.slider.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
		// 	else this.slider.$element.bind('mousewheel', this.wheellistener);
		// }

		if(this.slider.$element[0].clientWidth === 0)
			this.slider.init_safemode = true;

		this.__resize();

		var that = this;
		if( this.so.deepLink ) {
			$(window).on('hashchange', function() {
			  that.__onHashChanged();
			});
		}
	};
	
	p.index = function(){
		return this.view.index;
	};
	
	p.count = function(){
		return this.view.slidesCount;
	};
	
	p.next = function(checkLoop){
		this.skipTimer();
		this.view.next(checkLoop);
	};
	
	p.previous = function(checkLoop){
		this.skipTimer();
		this.view.previous(checkLoop);
	};
	
	p.gotoSlide = function(index) {
		index = Math.min(index, this.count()-1);
		this.skipTimer();
		this.view.gotoSlide(index);
	};

	p.destroy = function(reset){
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY));
		this.slider.destroy(reset);
	};

	p._destroy = function(){
		this._timer.reset();
		this._timer = null;
		
		$(window).unbind('resize', this.resize_listener);
		this.view.destroy();
		this.view = null;
		
		if(this.so.wheel){
			if($.browser.mozilla) this.slider.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}
			
		this.so = null;
	};

	/**
	 * run layer actions like next, previous,...
	 * @param  {String} action
	 * @since v1.7.2 
	 */
	p.runAction = function(action){
		var actionParams = [];

		if( action.indexOf('(') !== -1 ){
			var temp = action.slice(0 , action.indexOf('('));			
			actionParams = action.slice(action.indexOf('(') + 1 , -1).replace(/\"|\'|\s/g , '').split(',');
			action   = temp;
		}

		if ( action in this ){
			this[action].apply(this, actionParams);
		} else if ( console ){
			console.log('Master Slider Error: Action "'+action+'" not found.');
		}
	};

	p.update = function(hard){
		if(this.slider.init_safemode && hard)
			this.slider.init_safemode = false;
		this.__resize(hard);

		if ( hard ) { 
			this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE));
		}

	};
		
	p.locate = function(){
		this.__resize();
	};
	
	p.resume = function(){
		if(!this.paused) return;
		this.paused = false;
		this._startTimer();
	};
	
	p.pause = function(){
		if(this.paused) return;
		this.paused = true;
		this._stopTimer();
	};

	p.currentTime = function(){
		return this._delayProgress;
	};
	
	averta.EventDispatcher.extend(p);
})(jQuery);

/* ================== bin-debug/js/pro/MasterSlider.js =================== */
/**
 * Master Slider Main JavaScript File
 */

;(function($){
	
	"use strict";

	var LayerTypes = {
		'image' 	: MSImageLayerElement,
		'text'  	: MSLayerElement,
		'video' 	: MSVideoLayerElement,
		'hotspot'	: MSHotspotLayer,
		'button'	: MSButtonLayer
	};
	window.MasterSlider = function(){
		
		// Default Options
		this.options = {
			autoplay 			: false,      // Enables the autoplay slideshow.
			loop 				: false,	  // Enables the continuous sliding mode.
			mouse				: true,		  // Whether the user can use mouse drag navigation.
			swipe				: true,		  // Whether the drag/swipe navigation is enabled.
			grabCursor			: true,		  // Whether the slider uses grab mouse cursor.
			space  				: 0,		  // The spacing value between slides in pixels.
			fillMode			: 'fill',  	  // Specifies the slide background scaling method. Its acceptable values are "fill", "fit", "stretch", "center" and "tile". 
			start				: 1,		  // The slider starting slide number.
			view				: 'basic',	  // The slide changing transition. 
			width				: 300,		  // The base width of slides. It helps the slider to resize in correct ratio.
			height				: 150,		  // The base height of slides, It helps the slider to resize in correct ratio.
			inView				: 15, 		  // Specifies number of slides which will be added at a same time in DOM.
			critMargin			: 1,		  // 
			heightLimit			: true,		  // It force the slide to use max height value as its base specified height value.
			smoothHeight		: true,		  // Whether the slider uses smooth animation while its height changes.
			autoHeight			: false,      // Whether the slider adapts its height to each slide height or not. It overrides heightLimit option.
			minHeight 			: -1,		  // @since 2.13.0, Specifies min height value for the slider, it prevents slider to shows too narrow in small screens.
			fullwidth			: false,	  // It enables the slider to adapt width to its parent element. It's very useful for creating full-width sliders. In default it takes max width as its base width value.
			fullheight			: false,	  // It enables the slider to adapt height to its parent element.
			autofill			: false,	  // It enables the slider to adapt width and height to its parent element, It's very useful for creating fullscreen or fullwindow slider.
			layersMode			: 'center',	  // It accepts two values "center" and "full". The "center" value indicates that the slider aligns layers to the center. This option is only effective in full width mode.
			hideLayers			: false,	  // Whether the slider hides all layers before changing slide.
			endPause			: false,	  // Whether the slider pauses slideshow when it stays at the last slide.
			centerControls 		: true,		  // Whether the slider aligns UI controls to center. This option is only effective in full width mode.
			overPause			: true,		  // Whether the slider pauses slideshow on hover.
			shuffle				: false,	  // Enables the shuffle slide order.
			speed				: 17, 		  // Specifies slide changing speed. It accepts float values between 0 and 100.
			dir					: 'h',		  // Specifies slide changing direction. It accepts two values "h" (horizontal) and "v" (vertical).
			preload				: 0,		  // Specifies number of slides which will be loaded by slider. 0 value means the slider loads slides in sequence.
			wheel				: false,	  // Whether slider uses mouse wheel for navigation.
			layout				: 'boxed',	  // It accepts 'fullwidth', 'fullscreen', 'fillwidth', 'autofill', 'partialview', 'boxed'. It overrides 'fullwidth' and 'autofill' (added in v1.5.6)
			autofillTarget 		: null,		  // @since 2.13.0, Specifies the parent element of slider width jQuery selector, it used for sizing slider with autofill layout. Default value is the first parent element of slider.
			fullscreenMargin	: 0,		  // Specifies margin amount to the bottom of slider, it's only effective on fullscreen slider.
			instantStartLayers	: false, 	  // @since 1.5.0, Whether instantly shows slide layers.
			parallaxMode 		: 'mouse',	  // @since 1.6.0, Specifies mode of parallax effect accepts: "mouse", "mouse:x-only", "mouse:y-only" and "swipe"
			rtl 				: false,	  // @since 1.8.0, Whether Right-to-left direction slider.
			deepLink			: null,       // @since 2.1.0, null value disables slider deep-linking any string values identifies the slider in page's url like /#msslider-1
			deepLinkType 		: 'path', 	  // @since 2.1.0, type of hash value in page's url possible values, path and query (  #gallery/1 || #gallery=4 )
			disablePlugins      : []		  // @since 2.9.6, list of disabled Master Slider plugin names for this instance.
		};
		
		this.slides = [];
		this.activePlugins = [];	
		this.$element = null;

		// used by new layout method. to force fullwidth or fullscreen
		this.lastMargin = 0; 

		// Reserved side spaces of slider
		this.leftSpace = 0;
		this.topSpace = 0;
		this.rightSpace = 0;
		this.bottomSpace = 0;

		// hold on stack
		this._holdOn = 0;

		var that = this;
		this.resize_listener = function(){that._resize();};
		$(window).bind('resize', this.resize_listener);
				
	};
	
	MasterSlider.author  		= 'Averta Ltd. (www.averta.net)';
	MasterSlider.version 		= '2.15.1';
	MasterSlider.releaseDate 	= 'Jul 2015';
	
	// Master Slider plugins.
	MasterSlider._plugins = []
	var MS = MasterSlider;
	MS.registerPlugin = function ( plugin ) {
		if ( MS._plugins.indexOf(plugin) === -1 ) {
			MS._plugins.push(plugin);
		}
	};

	var p = MasterSlider.prototype;
	
	/*-------------- METHODS --------------*/

	/**
	 * create one slide object for each slide and add it to slide controller
	 * @since 1.0
	 * @private
	 */
	p.__setupSlides = function(){
		var that = this,
			new_slide,
			ind = 0;

		this.$element.children('.ms-slide').each(function(index) {
			
			var $slide_ele = $(this);
			
			new_slide 			= new MSSlide();
			new_slide.$element 	= $slide_ele;
			new_slide.slider 	= that;
			new_slide.delay  	= $slide_ele.data('delay') 		!== undefined ? $slide_ele.data('delay') 		: 3;
			new_slide.fillMode 	= $slide_ele.data('fill-mode')	!== undefined ? $slide_ele.data('fill-mode') 	: that.options.fillMode;
			new_slide.index 	= ind++;

			// Slide Background Image
			var slide_img = $slide_ele.children('img:not(.ms-layer)');
			if( slide_img.length > 0 ){
				new_slide.setBG(slide_img[0]);
			}
			
			// Slide Video Background
			var slide_video = $slide_ele.children('video');
			if( slide_video.length > 0 ) new_slide.setBGVideo(slide_video);
			// controls
			if(that.controls){
				for(var i = 0 , l = that.controls.length; i<l ; ++i)
					that.controls[i].slideAction(new_slide);
			}
			
			// Slide Link and Video
			var slide_link = $slide_ele.children('a').each(function(index) {
			  var $this = $(this);
			  if(this.getAttribute('data-type') === 'video'){
				new_slide.video = this.getAttribute('href');

				new_slide.videoAutoPlay = $this.data('autoplay');
				
				$this.remove();
			  }else if(!$this.hasClass('ms-layer')) {
				new_slide.link  = $(this);
				//new_slide.link_targ = this.getAttribute('target');
				//$this.remove();
			  }
			});//.remove();
			
			// Slide Layers
			that.__createSlideLayers(new_slide , $slide_ele.find('.ms-layer'));
			that.slides.push(new_slide);
			that.slideController.view.addSlide(new_slide);

		});
	};
	
	/**
	 * Creates layers of specified layer
	 * @param  {MSSlide} slide  
	 * @param  {Array} layers
	 * @since 1.0
	 * @private
	 */
	p.__createSlideLayers = function(slide , layers) {
		if(layers.length == 0) return;
		slide.setupLayerController();

		layers.each(function(index , domEle){
			var $layer_element = $(this),
				$parent_ele;
			
			if( domEle.nodeName === 'A' && $layer_element.find('>img').data('type') === 'image' ) {
				$parent_ele = $(this);
				$layer_element = $parent_ele.find('img');
			}
			
			var layer = new (LayerTypes[$layer_element.data('type') || 'text']) ();
			layer.$element = $layer_element;
			layer.link = $parent_ele;
			
			var eff_parameters = {},
				end_eff_parameters = {};
		
			if($layer_element.data('effect') 	!== undefined)		eff_parameters.name 			= $layer_element.data('effect');
			if($layer_element.data('ease')		!== undefined) 		eff_parameters.ease 			= $layer_element.data('ease');
			if($layer_element.data('duration')  !== undefined)  	eff_parameters.duration 		= $layer_element.data('duration');
			if($layer_element.data('delay')   	!== undefined)   	eff_parameters.delay			= $layer_element.data('delay');

			if($layer_element.data('hide-effect'))		    		end_eff_parameters.name 		= $layer_element.data('hide-effect');
			if($layer_element.data('hide-ease'))		   			end_eff_parameters.ease 		= $layer_element.data('hide-ease');
			if($layer_element.data('hide-duration') !== undefined)  end_eff_parameters.duration		= $layer_element.data('hide-duration');
			if($layer_element.data('hide-time') 	!== undefined)  end_eff_parameters.time 		= $layer_element.data('hide-time');

			layer.setStartAnim(eff_parameters);
			layer.setEndAnim(end_eff_parameters);
			
			slide.layerController.addLayer(layer);
			
		});
		
	};
	
	/**
	 * remove slider initialize loading
	 * @since 1.0
	 * @private
	 */
	p._removeLoading = function(){
		$(window).unbind('resize', this.resize_listener);
		this.$element.removeClass('before-init')
					.css('visibility', 'visible')
					.css('height','')
					.css('opacity' , 0);
		CTween.fadeIn(this.$element);
		this.$loading.remove();

		if(this.slideController)
			this.slideController.__resize();
	};
	
	/**
	 * resize listener, it only used for aligning slider loading and after slider init it will be removed
	 * @param  {Event} e
	 * @since 1.0
	 * @private
	 */
	p._resize = function(e){
		if(this.$loading){
			var h = this.$loading[0].clientWidth / this.aspect;
			h = this.options.heightLimit ? Math.min(h , this.options.height) : h;
			
			this.$loading.height(h);
			this.$element.height(h);		
		}
	};
	
	/**
	 * changes the order of slides element before setup slides
	 * @since 1.0
	 * @private
	 */
	p._shuffleSlides = function(){
		var slides = this.$element.children('.ms-slide') , r;

		for(var i = 0 , l = slides.length; i < l ; ++i){
			r = Math.floor(Math.random() * (l - 1));
			if(i != r){
				this.$element[0].insertBefore(slides[i] , slides[r]);
				slides = this.$element.children('.ms-slide');
			}
		}
	};

	/**
	 * New method of setting up the layout of slider
	 * @since 1.5.6 
	 */
	p._setupSliderLayout = function(){

		// create side spaces
		this._updateSideMargins();
		this.lastMargin = this.leftSpace;
		
		var lo = this.options.layout;

	
		if( lo !== 'boxed' && lo !== 'partialview' ){
			this.options.fullwidth = true;  // enable slider fullscreen for fullwidth, fillwidth, autofill and fullscreen layouts.
		} 
		if( lo === 'fullscreen' || lo === 'autofill' ){
			this.options.fullheight = true;

			if ( lo === 'autofill' ) {
				this.$autofillTarget = $(this.options.autofillTarget);
				if ( this.$autofillTarget.length === 0 ) {
					this.$autofillTarget = this.$element.parent();
				}
			}

		}

		// partial view 
		if ( lo === 'partialview' ){
			this.$element.addClass('ms-layout-partialview');
		}
		if( lo === 'fullscreen' ||  lo === 'fullwidth' || lo === 'autofill' ){
			$(window).bind('resize', {that:this}, this._updateLayout);
			this._updateLayout();
		}

		// bind resize handler of slidecontroller __resize 
		$(window).bind('resize', this.slideController.resize_listener);
	};

	/**
	 * updates layout of slider based on window size
	 * @param  {Event} event
	 * @since 1.5.6
	 */
	p._updateLayout = function(event){
		var that = event? event.data.that : this,
			lo = that.options.layout,
			$element = that.$element,
			$win = $(window);

		// height
		if( lo === 'fullscreen' ){
			document.body.style.overflow = 'hidden';
			$element.height( $win.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace);
			document.body.style.overflow = '';
		} else if ( lo === 'autofill' ) {
			$element.height(that.$autofillTarget.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace)
					.width(that.$autofillTarget.width() - that.leftSpace - that.rightSpace);
			return;
		}
		// width 
		$element.width($win.width() - that.leftSpace - that.rightSpace);
		var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
		$element.css('margin-left', margin );
		that.lastMargin = margin;
//
	};


	/**
	 * initialize the slider, called by document ready
	 * <code>holdOn</code> property prevents auto initialize slider after document ready it used by plugins of slider like Flickr
	 * @since 1.0
	 * @protected
	 */
	p._init = function(){
	
		if ( this._holdOn > 0 || !this._docReady ) {
			return;
		}
		
		this.initialized = true;

		if(this.options.preload !== 'all'){
			this._removeLoading();
		}
		//else
		//	this.$element.css('width' , this.$loading[0].clientWidth);
		
		if(this.options.shuffle) 	this._shuffleSlides();

		MSLayerEffects.setup();
		this.slideController.setupView();
		this.view = this.slideController.view;
				
		this.$controlsCont = $('<div></div>').addClass('ms-inner-controls-cont');//.appendTo(this.$element);
		if(this.options.centerControls){
			this.$controlsCont.css('max-width' , this.options.width + 'px');
		}

		this.$controlsCont.prepend(this.view.$element);

		this.$msContainer = $('<div></div>').addClass('ms-container').prependTo(this.$element).append(this.$controlsCont);
		
		if(this.controls){
			for(var i = 0 , l = this.controls.length; i<l ; ++i){
				this.controls[i].setup();
			}
		}	
		/*else{
			this.$element.append(this.view.$element);
		}*/

		this._setupSliderLayout();
		this.__setupSlides();
		this.slideController.setup();
		
		if(this.controls){
			for(i = 0 , l = this.controls.length; i<l ; ++i)
				this.controls[i].create();
		}
			
		if(this.options.autoHeight){
			this.slideController.view.$element.height(this.slideController.currentSlide.getHeight());
		}
			
		// add grab cursor
		if(this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse){
			var $view = this.view.$element;
			
			$view.mousedown(function(){
				$view.removeClass('ms-grab-cursor');
				$view.addClass('ms-grabbing-cursor');

				if ( $.browser.msie && window.ms_grabbing_curosr ) {
					$view[0].style.cursor = 'url(' + window.ms_grabbing_curosr + '), move';
				}

			}).addClass('ms-grab-cursor');
			
			$(document).mouseup(function(){
				$view.removeClass('ms-grabbing-cursor');
				$view.addClass('ms-grab-cursor');

				if ( $.browser.msie && window.ms_grab_curosr ) {
					$view[0].style.cursor = 'url(' + window.ms_grab_curosr + '), move';
				}

			});
		}

		this.slideController.__dispatchInit();
	};
	
	/**
	 * changes the height of slider, it used in autoheight slider
	 * @param {Number} value
	 * @since 1.0
	 * @public
	 */
	p.setHeight = function(value){
		if(this.options.smoothHeight){
			if(this.htween){
				if(this.htween.reset)this.htween.reset();
				else	 			 this.htween.stop(true);
			} 
			this.htween = CTween.animate(this.slideController.view.$element , 500 , {height:value} , {ease:'easeOutQuart'});
		}else
			this.slideController.view.$element.height(value);
	};
	
	/**
	 * reserves white space in sides of slider, it used by controls
	 * @param  {String} side  left|right|top|bottom
	 * @param  {Number} space 
	 * @returns {Number} start position in space.
	 * @since 1.5.7
	 * @public
	 */
	p.reserveSpace = function(side, space){
		var sideSpace = side+'Space',
			pos = this[sideSpace];

		this[sideSpace] += space;
		
		this._updateSideMargins();

		return pos;
	};

	/**
	 * returns the reserved space, it used by controls and called when aligned control hides
	 * @param  {String} side  
	 * @param  {Number} space 
	 * @since 1.5.7
	 * @public 
	 */
	/*p.returnSpace = function(side, space){
		var sideSpace = side+'Space';
		this[sideSpace] = Math.max(0 , this[sideSpace] - space);

		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
		this._updateSideMargins();
	};*/

	p._updateSideMargins = function(){
		this.$element.css('margin', this.topSpace + 'px ' + this.rightSpace + 'px ' + this.bottomSpace + 'px ' + this.leftSpace + 'px');
	}

	p._realignControls = function(){
		this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0;
		this._updateSideMargins();
		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
	};

	/*------------------------- Public Methods -----------------------*/

	/**
	 * Adds new control to the slider
	 * @param  {String} control
	 * @param  {Object} options [description]
	 * @since 1.0
	 * @public
	 */
	p.control = function(control , options){
		if(!(control in MSSlideController.SliderControlList)) return;
		if(!this.controls) this.controls = [];
		var ins = new MSSlideController.SliderControlList[control](options);
		ins.slider = this;
		this.controls.push(ins);
		
		return this;
	};

	/**
	 * Hold on slider from initialization
	 * @since 2.9.6
	 * @public
	 */
	p.holdOn = function () {
		this._holdOn ++;
	};

	/**
	 * Let the slider to initialize 
	 * @since 2.9.6
	 */
	p.release = function () { 
		this._holdOn --;
		this._init();
	};

	/**
	 * setup slider
	 * @param  {String|jQuery object} id
	 * @param  {Object} options 
	 * @since 1.0
	 * @public
	 */
	p.setup = function(target , options){
		if(typeof target === 'string'){
			this.$element = $('#' + target);
		} else {
			this.$element = target.eq(0);
		}

		//create a copy from slider markup, it will be used in destroy method.
		this.setupMarkup = this.$element.html();

		if( this.$element.length === 0 ){
			//if(console) console.log('Master Slider Error: #'+id+' not found.');
			return;
		}

		this.$element.addClass('master-slider').addClass('before-init');

		// IE prefix class
		// add browser prefix class name
		if($.browser.msie){
			this.$element.addClass('ms-ie')
						 .addClass('ms-ie' + $.browser.version.slice(0 , $.browser.version.indexOf('.')));
		} else if ( $.browser.webkit ) {
			this.$element.addClass('ms-wk');
		} else if ( $.browser.mozilla ) { 
			this.$element.addClass('ms-moz');
		}

		
		// Android prefix class
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;
		if(isAndroid) {
		  this.$element.addClass('ms-android');
		}

		var that = this;
		$.extend(this.options, options);
		
		this.aspect = this.options.width / this.options.height;
		
		this.$loading = $('<div></div>').
						addClass('ms-loading-container').
						insertBefore(this.$element).
						append($('<div></div>').addClass('ms-loading'));

		this.$loading.parent().css('position' , 'relative');
				
		// old methods 
		if(this.options.autofill){
			this.options.fullwidth = true;
			this.options.fullheight = true;
		}
		
		if(this.options.fullheight){
			this.$element.addClass('ms-fullheight');
		}

		//this._setupSliderLayout();	
		this._resize();
		
		// define slide controller and api
		this.slideController = new MSSlideController(this);
		this.api = this.slideController;

		// setup plugins
		for ( var i = 0, l = MS._plugins.length; i !== l; i++ ) {
			var plugin = MS._plugins[i];

			if ( this.options.disablePlugins.indexOf(plugin.name) === -1 ) {
				this.activePlugins.push(new plugin(this));
			}
		}

		$(document).ready(function(){
			that._docReady = true;
			that._init();
		});

		return this;
	};
	
	/**
	 * destroy the slider instance 
	 * @param  {Boolean} insertMarkup	 whether add slider markup after destroy.
	 * @since 1.4
	 * @public
	 */
	p.destroy = function(insertMarkup){
		
		// destroy active plugins
		for ( var i = 0, l = this.activePlugins.length; i !== l; i++ ) {
			this.activePlugins[i].destroy();
		}

		if(this.controls){
			for( i = 0, l = this.controls.length; i !== l; i++ )
				this.controls[i].destroy();
		}
		
		if(this.slideController) this.slideController._destroy();

		if(this.$loading) this.$loading.remove();

		if ( insertMarkup ) {
			this.$element.html(this.setupMarkup).css('visibility' , 'hidden');
		} else {	 
			this.$element.remove();
		}

		var lo = this.options.layout;
		if( lo === 'fullscreen' ||  lo === 'fullwidth' ){
			$(window).unbind('resize', this._updateLayout);
		}

		this.view = null;
		this.slides = null;
		this.options = null;
		this.slideController = null;
		this.api = null;
		this.resize_listener = null;


		this.activePlugins = null;
	};
		
})(jQuery);

/**
 * Master Slider jQuery Plugin
 * @author Averta
 */
(function ( $, window, document, undefined ) {

		var pluginName = "masterslider",
			defaults = {
				controls:{}
			};

		function MasterSliderPlugin ( element, options ) {
			this.element = element;
			this.$element = $(element);
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		$.extend(MasterSliderPlugin.prototype, {
			init : function () {

				var self = this;
				
				// create new instance form Master Slider	
				this._slider = new MasterSlider();

				// add controls
				for ( var control in this.settings.controls ){
					this._slider.control(control, this.settings.controls[control]);
				}

				this._slider.setup(this.$element, this.settings);

				// override api eventdisaptcher method
				var _superDispatch = this._slider.api.dispatchEvent;
				this._slider.api.dispatchEvent = function(event){
					self.$element.trigger(event.type);
					_superDispatch.call(this, event);
				};

			},

			api : function() { 
				return this._slider.api; 
			},
			
			slider : function() {
				return this._slider;
			}
		
		});

		$.fn[pluginName] = function ( options ) {
			var args = arguments,
				plugin = 'plugin_' + pluginName;

			// Is the first parameter an object (options), or was omitted,
			// instantiate a new instance of the plugin.
			if (options === undefined || typeof options === 'object') {
				return this.each(function () {

					// Only allow the plugin to be instantiated once,
					// so we check that the element has no plugin instantiation yet
					if (!$.data(this, plugin)) {
						$.data(this, plugin, new MasterSliderPlugin( this, options ));
					}
				});

			// If the first parameter is a string and it doesn't start
			// with an underscore or "contains" the `init`-function,
			// treat this as a call to a public method.
			} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

				// Cache the method call
				// to make it possible
				// to return a value
				var returns;

				this.each(function () {
					var instance = $.data(this, plugin);

					// Tests that there's already a plugin-instance
					// and checks that the requested public method exists
					if (instance instanceof MasterSliderPlugin && typeof instance[options] === 'function') {

						// Call the method of our plugin instance,
						// and pass it the supplied arguments.
						returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
					} 

					// Map slider api functions to slider jq plugin
					if ( instance instanceof MasterSliderPlugin && typeof instance._slider.api[options] === 'function' ) {
						returns = instance._slider.api[options].apply( instance._slider.api, Array.prototype.slice.call( args, 1 ) );
					}

					// Allow instances to be destroyed via the 'destroy' method
					if (options === 'destroy') {
					  $.data(this, plugin, null);
					}
				});

				// If the earlier cached method
				// gives a value back return the value,
				// otherwise return this to preserve chainability.
				return returns !== undefined ? returns : this;
			}
		};

})( jQuery, window, document );

/* ================== bin-debug/js/pro/views/ViewEvents.js =================== */
window.MSViewEvents = function (type, data){
	this.type = type;
	this.data = data;
};

MSViewEvents.SWIPE_START      	= 'swipeStart';
MSViewEvents.SWIPE_END       	= 'swipeEnd';
MSViewEvents.SWIPE_MOVE			= 'swipeMove';
MSViewEvents.SWIPE_CANCEL   	= 'swipeCancel';
MSViewEvents.SCROLL 			= 'scroll';
MSViewEvents.CHANGE_START   	= 'slideChangeStart';
MSViewEvents.CHANGE_END	     	= 'slideChangeEnd';

/* ================== bin-debug/js/pro/views/BasicView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSBasicView = function(options){
		
		this.options = {
			loop 			: false,
			dir  			: 'h',
			autoHeight 		: false,
			spacing			: 5,
			mouseSwipe		: true,
			swipe			: true,
			speed			: 17,
			minSlideSpeed	: 2,
			viewNum			: 20,
			critMargin		: 1
		};
		
		$.extend(this.options , options);
		
		this.dir		= this.options.dir;
		this.loop   	= this.options.loop;
		this.spacing	= this.options.spacing;
		
		this.__width  = 0;
		this.__height = 0;

		this.__cssProb 		= this.dir === 'h' ? 'left'    : 'top';
		this.__offset 		= this.dir === 'h' ? 'offsetLeft' : 'offsetTop';
		this.__dimension    = this.dir === 'h' ? '__width' : '__height';

		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';

		this.$slideCont	= $('<div></div>').addClass('ms-slide-container');
		this.$element 	= $('<div></div>').addClass('ms-view').addClass('ms-basic-view').append(this.$slideCont);
	
		this.currentSlide 	= null;
		this.index 			= -1;
		this.slidesCount	= 0;

		this.slides			= [];
		this.slideList		= []; // All of slides with added priority sort;
		this.viewSlidesList = []; 
			
		this.css3 			= window._cssanim;
		this.start_buffer = 0;
		this.firstslide_snap = 0;
		
		this.slideChanged 	= false;

		this.controller 	 = new Controller(0 , 0 , {
			snapping	     : true,
			snapsize		 : 100,
			paging			 : true,
			snappingMinSpeed : this.options.minSlideSpeed,
			friction		 : (100 - this.options.speed * 0.5) / 100,
			endless			 : this.loop
		});
		
		this.controller.renderCallback(this.dir === 'h'? this._horizUpdate : this._vertiUpdate , this);
		this.controller.snappingCallback(this.__snapUpdate , this);
		this.controller.snapCompleteCallback(this.__snapCompelet , this);
		
		averta.EventDispatcher.call(this);
	};
	
	var p = MSBasicView.prototype;
		
	/*-------------- METHODS --------------*/
	
	p.__snapCompelet = function(snap , type){
		// if(this.loop && Math.abs(this.__contPos) > 20000){
		// 	this.__locateSlides();
		// 	this.gotoSlide(this.index , true);
		// }
		// 

		if ( !this.slideChanged ) {
			return;
		}

		this.slideChanged = false;
		
		this.__locateSlides();
		this.start_buffer = 0;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));	
	};
	
	p.__snapUpdate = function(controller , snap , change){

		if(this.loop){
			var target_index = this.index + change;
			this.updateLoop(target_index);

			if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
			if(target_index <  0)					target_index = this.slidesCount + target_index;
		
			this.index = target_index;
		}else{
			if(snap < 0 ||  snap >= this.slidesCount) return
			this.index = snap;
		}
		
		this._checkCritMargins();

		if($.browser.mozilla){
			this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';
			if(this.currentSlide){
				this.currentSlide.$element[0].style.marginTop 	= '';
			}
		}
		var new_slide = this.slideList[this.index];
		if(new_slide === this.currentSlide)return;
		this.currentSlide = new_slide;
		
		if ( this.autoUpdateZIndex ) {
			this.__updateSlidesZindex();
		}
		
		this.slideChanged = true;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));	
	};


	p._checkCritMargins = function(){
		if(this.normalMode) return;

		var hlf 	= Math.floor(this.options.viewNum / 2),
			inView 	= this.viewSlidesList.indexOf(this.slideList[this.index]),
			size 	= (this[this.__dimension] + this.spacing),
			cm 		= this.options.critMargin;

		if(this.loop){
			if(inView <= cm || inView >= this.viewSlidesList.length - cm){
				size *= (inView - hlf);
				this.__locateSlides(false ,  size + this.start_buffer );
				this.start_buffer += size;
			}	

			return;
		}

		if( (inView < cm && this.index >= cm ) || (inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm)){
			this.__locateSlides(false);
		}

	};


	p._vertiUpdate = function(controller , value){
		
		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));
		
		if(this.css3){
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)' + this.__translate_end;
			return;
		}

		this.$slideCont[0].style.top = -value + 'px';
		
	};
	
	p._horizUpdate = function(controller , value){

		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));
		
		if(this.css3) {
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}
		
		this.$slideCont[0].style.left = -value + 'px';
		
	};


	p.__updateViewList = function(){

		if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list 
		this.viewSlidesList = [];	
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);	
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++)
			if( this.viewSlidesList.indexOf(temp[i]) === -1)
				temp[i].sleep();

		temp = null;

		if( this.currentSlide ) {
			this.__updateSlidesZindex();
		}
	};
	
	p.__locateSlides = function(move , start){

		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		// old method
		/*for(i = 0; i < this.slidesCount ; ++i){
			var pos =  i * (this[this.__dimension] + this.spacing);
			
			this.slides[i].position = pos;
			this.slides[i].$element[0].style[this.__cssProb] =  pos + 'px';
		}*/

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
			slide.$element[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
		
	p.__createLoopList = function(){ 
		var return_arr = [];
		var i = 0,
			count = this.slidesCount / 2;
		
		var before_count  = (this.slidesCount % 2 === 0)? count - 1	: Math.floor(count);
		var after_count	  = (this.slidesCount % 2 === 0)? count 	: Math.floor(count);
		
		this.currentSlideLoc = before_count;

		// before
		for(i = 1 ; i <= before_count ; ++i)
			return_arr.unshift(this.slideList[(this.index - i < 0)? this.slidesCount -  i + this.index: this.index - i]);
		
		// current
		return_arr.push(this.slideList[this.index]);
		
		// after
		for(i = 1; i <= after_count; ++i)
			return_arr.push(this.slideList[(this.index + i >= this.slidesCount)? this.index + i - this.slidesCount : this.index + i]);
		
		return return_arr;
		
	};
	
	/*
	 * Calculate shortest distance from index to target.
	 * It will used in loop gesture.
	 * 
	 * Negative values means left direction.
	 */
	
	p.__getSteps = function(index , target){ 
		var right = (target < index)?  this.slidesCount - index + target : target - index;
		var left  = Math.abs(this.slidesCount - right);
		
		return (right < left)? right : -left;		
	};
	
	p.__pushEnd = function(){ 
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		
		this.slides.push(first_slide);
		
		if(!this.normalMode) return;

		var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$element[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};
	
	p.__pushStart = function(){ 
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		
		this.slides.unshift(last_slide);

		if(!this.normalMode) return;

		var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$element[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};

	// @since 1.7.0
	// adds z-index to slides
	p.__updateSlidesZindex = function(){
		

		var slide,
			l = this.viewSlidesList.length,
			hlf = Math.floor( l/2 );

		if( this.loop ){
			var loc = this.viewSlidesList.indexOf(this.currentSlide);
			for ( var i = 0; i!==l; i++ ){
				slide = this.viewSlidesList[i];
				this.viewSlidesList[i].$element.css('z-index', i<=loc ? i+1 : l-i);
			}
		} else {
			
			var beforeNum = this.currentSlide.index - this.viewSlidesList[0].index,
				afterNum = l - beforeNum,
				diff = beforeNum - afterNum; 

			for ( var i = 0; i!==l; i++ ){
				this.viewSlidesList[i].$element.css('z-index', i<=beforeNum ? i+1 : l-i);
			}

			this.currentSlide.$element.css('z-index', l);
		}
		
	};

	p.addSlide = function(slide){ 
		slide.view = this;
		this.slides.push(slide);
		this.slideList.push(slide);
		this.slidesCount++;
	};
	
	p.appendSlide = function(slide){
		this.$slideCont.append(slide.$element);
	};

	p.updateLoop = function(index){
		if(this.loop){
			var steps = this.__getSteps(this.index , index);
			
			for(var i = 0 , l = Math.abs(steps) ; i < l ; ++ i){
				if(steps < 0) 	this.__pushStart();
				else			this.__pushEnd();
			}
		}
	};
	
	p.gotoSlide = function(index , fast){
		this.updateLoop(index);
		this.index = index;
		
		var target_slide = this.slideList[index];

		this._checkCritMargins();

		this.controller.changeTo( target_slide.position , !fast , null , null , false);
		if(target_slide === this.currentSlide) return;
		this.slideChanged = true;
		this.currentSlide = target_slide;

		if ( this.autoUpdateZIndex ) {
			this.__updateSlidesZindex();
		}

		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));
		if(fast)this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));	
	}; 
	
	p.next = function(checkLoop){ 
		if ( checkLoop && !this.loop && this.index + 1 >= this.slidesCount ) {
			this.controller.bounce(10);
			return;
		}

		this.gotoSlide((this.index + 1 >= this.slidesCount)? 0 : this.index + 1);
	};
	
	p.previous = function(checkLoop){ 
		if ( checkLoop && !this.loop && this.index - 1 < 0 ) {
			this.controller.bounce(-10);
			return;
		}

		this.gotoSlide((this.index - 1 < 0)? this.slidesCount - 1 : this.index - 1);
	};
	
	/* --------------- Swipe control ------------------*/	
	
	p.setupSwipe = function(){ 
		
		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.dir === 'h'? 'horizontal' : 'vertical';
		var that = this;
		
		if(this.dir === 'h'){
			this.swipeControl.onSwipe = function(status){
				that.horizSwipeMove(status);
			};
		}else{
			this.swipeControl.onSwipe = function(status){
				that.vertSwipeMove(status);
			};
		}
		
	};
	
	p.vertSwipeMove = function(status){
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));		
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY ) < this.cont_size / 2)){
			this.controller.drag(status.moveY);
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
		}else if(phase === 'end' || phase === 'cancel'){
			
			var speed = status.distanceY / status.duration * 50/3;
			
			if(Math.abs(speed) > 0.1){
				this.controller.push(-speed);
				if(speed > this.controller.options.snappingMinSpeed)
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status));
			}else {
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status));
			}
			
		}
	};
	
	p.horizSwipeMove = function(status){	
		var phase = status.phase;
		//console.log(this.loop)
		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));		
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX ) < this.cont_size / 2)){
			this.controller.drag(status.moveX);
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
		}else if(phase === 'end' || phase === 'cancel'){
			
			var speed = status.distanceX / status.duration * 50/3;
			
			if(Math.abs(speed) > 0.1){
				this.controller.push(-speed );
				if(speed > this.controller.options.snappingMinSpeed)
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status));
			}else{
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status));
			}
			
		}
	};
		
	/* ------------------------------------------------*/	
	
	p.setSize = function(width , height , hard){
		if(this.lastWidth === width && height === this.lastHeight && !hard) return;

		this.$element.width(width).height(height);
		
		for(var i = 0; i < this.slidesCount ; ++i)
				this.slides[i].setSize(width , height , hard);
				
		this.__width 	= width;
		this.__height 	= height;
			
		if(this.__created){	
			this.__locateSlides();
			
			this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);
			if(!this.loop) 	this.controller._max_value = this.cont_size;
				
			this.controller.options.snapsize = this[this.__dimension] + this.spacing;
			this.controller.changeTo(this.currentSlide.position , false , null , null , false );
			this.controller.cancel();
			
			this.lastWidth = width;
			this.lastHeight = height;
		}
	};
	
	p.create = function(index){
		
		this.__created = true;
		
		this.index = Math.min((index || 0), this.slidesCount - 1);
		this.lastSnap = this.index; // it will be used to check snap changed or not on snap complete

		if(this.loop)
			this.slides = this.__createLoopList();

		this.normalMode = this.slidesCount <= this.options.viewNum;
				
		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].create();
		
		this.__locateSlides();
			
		this.controller.options.snapsize = this[this.__dimension] + this.spacing;		
		if(!this.loop)	this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);
		
		this.gotoSlide(this.index , true);
		
		if(this.options.swipe && (window._touch || this.options.mouseSwipe))
			this.setupSwipe();

	};
	
	p.destroy = function(){
		if(!this.__created) return;
		
		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].destroy();
			
		this.slides = null;
		this.slideList = null;
		this.$element.remove();
		
		this.controller.destroy();
		this.controller = null;
	};
	
	averta.EventDispatcher.extend(p);
	
	MSSlideController.registerView('basic' , MSBasicView);
	
})(jQuery);

/* ================== bin-debug/js/pro/views/WaveView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSWaveView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-wave-view');
		this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');

		// Auto update z index of slides 
		// @since 1.7
		this.autoUpdateZIndex = true;
	};
	
	MSWaveView.extend(MSBasicView);
	MSWaveView._3dreq = true;
	MSWaveView._fallback = MSBasicView;
	
	var p  = MSWaveView.prototype;
	var _super  = MSBasicView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	/*p.__setSlideTransDuration = function(value){
		for(var i=0; i<this.slidesCount; ++i)
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , value + 'ms');
	};*/
	
	p._horizUpdate = function(controller , value){
		
		_super._horizUpdate.call(this, controller , value);
		
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesHoriz(slide , distance);
		}
		
	};
	
	p._vertiUpdate = function(controller , value){
		
		_super._vertiUpdate.call(this, controller , value);
		
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesVertic(slide , distance);
		}
		
	};
	
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		//var value2 = Math.min(value , 100);
	//	var sp = Math.min(100 , )
		//slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg)'/* translateX('+(distance < 0 ? 1 : -1) * -value * 5+'px)'*/);
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	/*
	p.swipeMove = function(status){
		
		if(status.phase == 'start'){
			this.__setSlideTransDuration(0);
		}else if(status.phase == 'end'){
			this.__setSlideTransDuration(this.__slideDuration);
		}
		
		_super.swipeMove.call(this , status);
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		
		for(var i = 0; i<this.slidesCount ; ++i){
			this.slides[i].$element.css(window._csspfx + 'transition-property' , window._csspfx 		+ 'transform');
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , this.slideDuration + 'ms');
		}
	};
	*/
	MSSlideController.registerView('wave' , MSWaveView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeBasicView.js =================== */
/**
 * Master Slider Fade Basic view
 * @author averta
 * @version 1.1
 * @package MS
 */

;(function(){
	
	window.MSFadeBasicView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-basic-view');
	};
	
	MSFadeBasicView.extend(MSWaveView);
	
	var p = MSFadeBasicView.prototype;
	var _super = MSFadeBasicView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 0.6 / this.__width);
		value = 1 - Math.min(value , 0.6);
		slide.$element.css('opacity' , value);
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	MSSlideController.registerView('fadeBasic' , MSFadeBasicView);
	MSWaveView._fallback = MSFadeBasicView;
})();

/* ================== bin-debug/js/pro/views/FadeWaveView.js =================== */
/**
 * Master Slider Fade Wave View
 * @author averta
 * @version 1.0
 * @extends {MSWaveView}
 */
;(function(){
	
	window.MSFadeWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-wave-view');
	};
	
	MSFadeWaveView.extend(MSWaveView);
	MSFadeWaveView._3dreq = true;
	MSFadeWaveView._fallback = MSFadeBasicView;
	
	var p = MSFadeWaveView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		 value = Math.min(value , 100);
		slide.$element.css('opacity' , 1-value/300);
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'scale('+ (1 - value/800) +') rotateY(0.01deg) ';
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	MSSlideController.registerView('fadeWave' , MSFadeWaveView);
	
})();

/* ================== bin-debug/js/pro/views/FlowView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-flow-view');
		//this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');
	};
	
	MSFlowView.extend(MSWaveView);
	MSFlowView._3dreq = true;
	MSFlowView._fallback = MSFadeBasicView;
	
	var p  = MSFlowView.prototype;
	var _super  = MSWaveView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateY(' + rvalue + 'deg) ';
	};
	
	p.__updateSlidesVertic  = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateX(' + -rvalue + 'deg) ';
	};
	
	
	MSSlideController.registerView('flow' , MSFlowView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeFlowView.js =================== */
/**
 * Master Slider Fade Flow View
 * @author averta
 * @extends {MSWaveView}
 * @version 1.0
 */
;(function(){
	
	window.MSFadeFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-flow-view');
	};
	
	MSFadeFlowView.extend(MSWaveView);
	MSFadeFlowView._3dreq = true;

	var p = MSFadeFlowView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__calculate = function(distance){
		var value = Math.min(Math.abs(distance * 100 / this.__width) , 100);
		var rvalue =  Math.min(value * 0.5 , 50) * (distance < 0 ? -1 : 1);
		return {value: value, rvalue: rvalue};
	};

	p.__updateSlidesHoriz = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		console.log(window._jcsspfx + 'transform','translateZ('+ -clc.value +'px) rotateY(' + clc.rvalue + 'deg) ')
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -clc.value +'px) rotateY(' + clc.rvalue + 'deg) ';
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -clc.value +'px) rotateX(' + -clc.rvalue + 'deg) ';
	};
	
	MSSlideController.registerView('fadeFlow' , MSFadeFlowView);
	
})();

/* ================== bin-debug/js/pro/views/MaskView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSMaskView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-mask-view');
		
	};
	
	MSMaskView.extend(MSBasicView);
	
	var p  = MSMaskView.prototype;
	var _super  = MSBasicView.prototype;
		
	/*-------------- METHODS --------------*/
	
	p.addSlide = function(slide){ // OK
		slide.view = this;
		
		slide.$frame = $('<div></div>').addClass('ms-mask-frame').append(slide.$element);
		slide.$element[0].style.position = 'relative';
		//this.$slideCont.append(slide.$frame);
		slide.autoAppend = false;

		this.slides.push(slide);
		this.slideList.push(slide);
		
		this.slidesCount++;
	};
	
	p.setSize = function(width , height){
		var slider = this.slides[0].slider;
		
		for(var i = 0; i < this.slidesCount ; ++i){
			this.slides[i].$frame[0].style.width  = width  + 'px';
			if(!slider.options.autoHeight)
				this.slides[i].$frame[0].style.height = height + 'px';
		}
		
		_super.setSize.call(this , width , height);
	};
	
	// p.__snapUpdate = function(controller , snap , change){
		
	// 	if(this.loop){
	// 		var target_index = this.index + change;
	// 		this.updateLoop(target_index);

	// 		if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
	// 		if(target_index <  0)					target_index = this.slidesCount + target_index;
		
	// 		this.index = target_index;
	// 	}else{
	// 		if(snap < 0 ||  snap >= this.slidesCount) return
	// 		this.index = snap;
	// 	}
		
		
	// 	this._checkCritMargins();

	// 	if($.browser.mozilla){
			
	// 		this.slideList[this.index].$frame[0].style.marginTop 	= '0.1px';
	// 		this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';
			
	// 		if(this.currentSlide){
	// 			this.currentSlide.$frame[0].style.marginTop 	= '';
	// 			this.currentSlide.$element[0].style.marginTop 	= '';
	// 		}
	// 	}
		
	// 		var new_slide = this.slideList[this.index];
	// 	if(new_slide === this.currentSlide)return;
		
	// 	this.currentSlide = new_slide;
	// 	this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));		
	// };
	
	p._horizUpdate = function(controller , value){
		
		_super._horizUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateX('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) + 'px';	
		}
			
	};
	
	p._vertiUpdate = function(controller , value){
		
		_super._vertiUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateY('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) + 'px';	
		}
			
	};
	
	p.__pushEnd = function(){ // OK
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		
		this.slides.push(first_slide);
		if(!this.normalMode) return;

		var pos = last_slide.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};
	
	p.__pushStart = function(){ // OK
		
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		
		this.slides.unshift(last_slide);
		
		if(!this.normalMode) return;
		
		var pos = first_slide.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};
	
	p.__updateViewList = function(){

			if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list 
		this.viewSlidesList = [];	
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);	
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++){
			if( this.viewSlidesList.indexOf(temp[i]) === -1){
				temp[i].sleep();
				temp[i].$frame.detach();
			}
		}

		temp = null;
	};


	p.__locateSlides = function(move , start){ // OK

		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	var pos =  i * (this[this.__dimension] + this.spacing);
			
		// 	this.slides[i].position = pos;
		// 	this.slides[i].$frame[0].style[this.__cssProb] =  pos + 'px';
		// }

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];

			this.$slideCont.append(slide.$frame);
			slide.wakeup(false);
			slide.position = pos;

			if ( slide.selected && slide.bgvideo ) {
				try{
					slide.bgvideo.play();
				} catch (e) {}
			}

			slide.$frame[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
	
	MSSlideController.registerView('mask' , MSMaskView);
})(jQuery);

/* ================== bin-debug/js/pro/views/ParallaxMaskView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSParallaxMaskView = function(options){
		MSMaskView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-parallax-mask-view');
		
	};
	
	MSParallaxMaskView.extend(MSMaskView);
	MSParallaxMaskView.parallaxAmount = 0.5;

	var p  = MSParallaxMaskView.prototype;
	var _super  = MSBasicView.prototype;
		
	/*-------------- METHODS --------------*/
	
	p._horizUpdate = function(controller , value){
		_super._horizUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateX('+(value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount +'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount  + 'px';	
		}
			
	};
	
	p._vertiUpdate = function(controller , value){
		
		_super._vertiUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateY('+(value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount +'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount  + 'px';	
		}
			
	};
	
	
	MSSlideController.registerView('parallaxMask' , MSParallaxMaskView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSFadeView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-fade-view');
		this.controller.renderCallback(this.__update , this);
	};
	
	MSFadeView.extend(MSBasicView);
	
	var p  = MSFadeView.prototype;
	var _super  = MSBasicView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	p.__update = function(controller , value){
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			distance = -cont_scroll - slide.position;
			this.__updateSlides(slide , distance);
		}
	};
	
	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]);
		if(1 - value <= 0){
			slide.$element.fadeTo(0 , 0).css('visibility' , 'hidden');	
		}else{
			slide.$element.fadeTo(0 , 1 - value).css('visibility' , '');
		}
	};
	
	p.__locateSlides = function(move , start){

		this.__updateViewList();

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	this.slides[i].position = i * this[this.__dimension];
		// }

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * this[this.__dimension];
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
	
	p.__pushEnd = function(){
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		this.slides.push(first_slide);
		first_slide.position = last_slide.position + this[this.__dimension];
	};
	
	p.__pushStart = function(){
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		this.slides.unshift(last_slide);		
		last_slide.position = first_slide.position - this[this.__dimension];
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		this.spacing = 0;
		this.controller.options.minValidDist = 10;
	};
	
	MSSlideController.registerView('fade' , MSFadeView);
})(jQuery);

/* ================== bin-debug/js/pro/views/ScaleView.js =================== */
;(function($){
	
	"use strict";
	
	window.MSScaleView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-scale-view');
		this.controller.renderCallback(this.__update , this);
	};
	
	MSScaleView.extend(MSFadeView);
	
	var p  = MSScaleView.prototype;
	var _super  = MSFadeView.prototype;
	 
	/*-------------- METHODS --------------*/

	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]),
			element = slide.$element[0]; 

		if(1 - value <= 0){
			element.style.opacity = 0;
			element.style.visibility = 'hidden';
			element.style[window._jcsspfx + 'Transform'] = '';
		}else{
			element.style.opacity = 1 - value;
			element.style.visibility = '';
			element.style[window._jcsspfx + 'Transform'] = 'perspective(2000px) translateZ('+(value* (distance < 0 ? -0.5 : 0.5)) * 300+'px)';
		}
		
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		this.controller.options.minValidDist = 0.03;
	};
	
	MSSlideController.registerView('scale' , MSScaleView);
})(jQuery);

/* ================== bin-debug/js/pro/views/StackView.js =================== */
/**
 * Master Slider Stack View 
 * @package Master Slider jQuery
 * @author Averta
 */

;(function($){
	
	"use strict";
	
	window.MSStackView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-stack-view');
		this.controller.renderCallback(this.__update , this);
		this.autoUpdateZIndex = true;
	};
	
	MSStackView.extend(MSFadeView);
	MSStackView._3dreq = true;
	MSStackView._fallback = MSFadeView;
	
	var p  = MSStackView.prototype;
	var _super  = MSFadeView.prototype;
	 
	/*-------------- METHODS --------------*/

	/**
	 * Updates slides z index
	 */
	p.__updateSlidesZindex = function () {
		var slide,
			l = this.viewSlidesList.length;

		for ( var i = 0; i!==l; i++ ){
			slide = this.viewSlidesList[i];
			this.viewSlidesList[i].$element.css('z-index', l-i);
		}
		
	};

	
	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]),
			element = slide.$element[0]; 

		if(1 - value <= 0){
			element.style.opacity = 1;
			element.style.visibility = 'hidden';
			element.style[window._jcsspfx + 'Transform'] = '';
		}else{
			element.style.visibility = '';
			
			if ( distance < 0 ) {
				element.style[window._jcsspfx + 'Transform'] = 'perspective(2000px) translateZ('+ (value * -300) +'px)';
			} else {
				element.style[window._jcsspfx + 'Transform'] = this.__translate + '(' + ( -value * this[this.__dimension] ) +'px)';
			}

		}
		
	};
	

	p.create = function(index){
		_super.create.call(this , index);
		this.controller.options.minValidDist = 0.03;
		this.__translate = this.dir === 'h' ? 'translateX' : 'translateY';
	};

	
	MSSlideController.registerView('stack' , MSStackView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FocusView.js =================== */
/**
 * Master Slider Focus View
 * @version 1.1
 * @author averta
 * @package MS
 * @extends {MSFadeBasicView}
 */

;(function(){

	'use strict';
	
	var perspective = 2000;

	window.MSFocusView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-focus-view');
		this.options.centerSpace = this.options.centerSpace  || 1;
	};
	
	MSFocusView.extend(MSWaveView);
	MSFocusView._3dreq = true;
	MSFocusView._fallback = MSFadeBasicView;
	
	var p = MSFocusView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__calcview = function(z , w){
		var a =  w / 2 * z / (z + perspective); 
		return a * (z + perspective) / perspective;
	};
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ (value + 1) +'px) rotateY(0.01deg) translateX('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ (value + 1) +'px) rotateY(0.01deg) translateY('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};
	
	MSSlideController.registerView('focus' , MSFocusView);
	
})();

/* ================== bin-debug/js/pro/views/PartialWaveView.js =================== */
/**
 * Master Slider Partial Wave View
 * @version 1.0
 * @author averta
 * @extends {MSWaveView}
 */

;(function(){
	
	window.MSPartialWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-partial-wave-view');
	};
	
	MSPartialWaveView.extend(MSWaveView);
	MSPartialWaveView._3dreq = true;
	MSPartialWaveView._fallback = MSFadeBasicView;
	
	var p = MSPartialWaveView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		if( slide.hasBG ){
			slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);	
		}
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateX('+distance*0.75+'px)');
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		if( slide.hasBG ){
			slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		}
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateY('+distance*0.75+'px)');
	};
	
	MSSlideController.registerView('partialWave' , MSPartialWaveView);
	
})();

/* ================== bin-debug/js/pro/uicontrols/BaseControl.js =================== */
;(function($){
	
	"use strict";
	
	var BaseControl = function(){
		this.options = {
			prefix:'ms-',
			autohide:true,
			overVideo:true,
			customClass: null
		};
	};
	
	var p = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.slideAction = function(slide){

	};
	
	p.setup = function(){		
		this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont;
		if(!this.options.overVideo) this._hideOnvideoStarts();

	};

	p.checkHideUnder = function(){
		if(this.options.hideUnder){
			//this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.onSliderResize, this);
			this.needsRealign = !this.options.insetTo && (this.options.align === 'left' || this.options.align === 'right') && this.options.inset === false;
			$(window).bind('resize', {that:this}, this.onResize);
			this.onResize();

		}
	};

	/**
	 * hide control if width of slider changes to lower that specified value [hideUnder]
	 * @since 1.5.7
	 * @protected
	 */
	p.onResize = function(event){
		var that = (event && event.data.that) || this;
		var w = window.innerWidth;
		if( w <= that.options.hideUnder && !that.detached ){
			that.hide(true);
			that.detached = true;
			that.onDetach();
		}else if( w >= that.options.hideUnder && that.detached ){
			that.detached = false;
			that.visible();
			that.onAppend();
		}
	};
	
	p.create = function(){
		var that = this;
		if(this.options.autohide ){
			
			this.hide(true);
			
			this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this))
									 .mouseleave($.proxy(this._onMouseLeave, this))
									 .mousedown($.proxy(this._onMouseDown, this));

			if ( this.$element ) {
				this.$element.mouseenter($.proxy(this._onMouseEnter, this))
							 .mouseleave($.proxy(this._onMouseLeave, this))
							 .mousedown($.proxy(this._onMouseDown, this));
			}

			$(document).mouseup($.proxy(this._onMouseUp, this));
		}
		
		if ( this.options.align ) {
			this.$element.addClass('ms-align-' + this.options.align);
		}

		// add custom class to control 
		if ( this.options.customClass && this.$element ) {
			this.$element.addClass(this.options.customClass);
		}
	};

	/**
	 * Mouse Enter Listener 
	 * @since 2.2
	 */
	p._onMouseEnter = function(){
		if ( !this._disableAH && !this.mdown ){
			this.visible();
		}
		
		this.mleave = false;
	};

	/**
	 * Mouse Leave Listener 
	 * @since 2.2
	 */
	p._onMouseLeave = function(){
		if ( !this.mdown ){
			this.hide();
		}

		this.mleave = true;
	};

	/**
	 * Mouse Down Listener 
	 * @since 2.2
	 */
	p._onMouseDown = function(){
		this.mdown = true;
	};

	/**
	 * Mouse Up Listener 
	 * @since 2.2
	 */
	p._onMouseUp = function(){
		if ( this.mdown && this.mleave ) { 
			this.hide();
		}
		
		this.mdown = false;
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( this.needsRealign ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( this.needsRealign ){
			this.slider._realignControls();
		}
	};
	
	p._hideOnvideoStarts = function(){
		var that = this;
		this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY , function(){
   			 that._disableAH = true;
   			 that.hide();
		});
		 
		this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE , function(){
		     that._disableAH = false;
   			 that.visible();
		});
	};
	
	p.hide = function(fast){
		if(fast){
			this.$element.css('opacity' , 0);
			this.$element.css('display' , 'none');
		} else {
			clearTimeout(this.hideTo);
			var $element = this.$element;
			this.hideTo = setTimeout(function(){
				CTween.fadeOut($element , 400 , false);
			}, 20);
		}

		this.$element.addClass('ms-ctrl-hide');
	};
	
	p.visible = function(){
		if(this.detached) return;
		clearTimeout(this.hideTo);
		this.$element.css('display' , '');
		CTween.fadeIn(this.$element , 400 , false);
		this.$element.removeClass('ms-ctrl-hide');
	};
	
	p.destroy = function(){

		if(this.options && this.options.hideUnder){
			//this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this.onResize, this);
			$(window).unbind('resize', this.onResize);
		}
	};
	
	window.BaseControl = BaseControl;
	
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Arrows.js =================== */
;(function($){
	
	"use strict";
	
	var MSArrows = function(options){
		BaseControl.call(this);
		$.extend(this.options , options);
	};
	
	MSArrows.extend(BaseControl);
	
	var p = MSArrows.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		
		this.$next = $('<div></div>')
					.addClass(this.options.prefix + 'nav-next')
					//.appendTo(this.cont)
					.bind('click' , function(){
							that.slider.api.next(true);
					});
				
		
		this.$prev = $('<div></div>')
					.addClass(this.options.prefix + 'nav-prev')
					//.appendTo(this.cont)
					.bind('click' , function(){
						that.slider.api.previous(true);
					});
		
		_super.setup.call(this);

		this.cont.append(this.$next);
		this.cont.append(this.$prev);

		this.checkHideUnder(); // super method
	};
	
	p.hide = function(fast){
		if(fast){
			this.$prev.css('opacity' , 0).css('display', 'none');
			this.$next.css('opacity' , 0).css('display', 'none');
			return;
		}
	
		CTween.fadeOut(this.$prev , 400 , false);
		CTween.fadeOut(this.$next , 400 , false);
		
		this.$prev.addClass('ms-ctrl-hide');
		this.$next.addClass('ms-ctrl-hide');
	};
	
	p.visible = function(){
		if(this.detached) return;
		CTween.fadeIn(this.$prev , 400 );
		CTween.fadeIn(this.$next , 400 );
		this.$prev.removeClass('ms-ctrl-hide').css('display', '');
		this.$next.removeClass('ms-ctrl-hide').css('display', '');
	};
	
	p.destroy = function(){
		_super.destroy();
		this.$next.remove();
		this.$prev.remove();
	};
	
	window.MSArrows = MSArrows;
	MSSlideController.registerControl('arrows' , MSArrows);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Thumblist.js =================== */
;(function($){
	
	"use strict";
	
	var MSThumblist = function(options){
		BaseControl.call(this);
		
		// default options
		this.options.dir 	= 'h';
		this.options.wheel	= options.dir === 'v';
		this.options.arrows = false;
		this.options.speed  = 17;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.space = 10;
		this.options.width = 100;
		this.options.height = 100;
		this.options.type = 'thumbs'; // tabs
		this.options.hover = false;
		
		
		$.extend(this.options , options);
		
		this.thumbs = [];
		this.index_count = 0;
		
		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__alignsize 		= this.options.dir === 'h' ? 'height' : 'width';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';		
		
		this.click_enable = true;

	};
	
	MSThumblist.extend(BaseControl);
	
	var p = MSThumblist.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'thumb-list');

		if(this.options.type === 'tabs'){
			this.$element.addClass(this.options.prefix + 'tabs');
		}
		
		this.$element.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);	


		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}
						
		this.$thumbscont = $('<div></div>')
						.addClass('ms-thumbs-cont')
						.appendTo(this.$element);
		
		if(this.options.arrows){
			var that = this;
			this.$fwd = $('<div></div>').addClass('ms-thumblist-fwd').appendTo(this.$element).click(function(){that.controller.push(-15);});
			this.$bwd = $('<div></div>').addClass('ms-thumblist-bwd').appendTo(this.$element).click(function(){that.controller.push(15);});
		}

		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.detach().prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.width);
			}else{
				this.$element.height(this.options.height);
			}
		}

		this.checkHideUnder(); // super method
	
	};
	
	/**
	 * calls by "RESERVED_SPACE_CHANGE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + this.options.margin * 2);
		this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin);
	};

	p.slideAction = function(slide){
		var thumb_ele = slide.$element.find('.ms-thumb');
		var that = this;
		var thumb_frame = $('<div></div>')
					.addClass('ms-thumb-frame')
					.append(thumb_ele)
					.append($('<div class="ms-thumb-ol"></div>'))
					.bind(this.options.hover? 'hover' : 'click' , function(){that.changeSlide(thumb_frame);});

		if( this.options.align ){
			thumb_frame.width(this.options.width - (this.options.dir === 'v' && this.options.type === 'tabs' ? 12 : 0))  // less arrow size 12px
					.height(this.options.height)
					.css('margin-'+(this.options.dir === 'v' ? 'bottom' : 'right'), this.options.space); 
		}			
					
		thumb_frame[0].index =  this.index_count ++;
		
		this.$thumbscont.append(thumb_frame);
		
		// Added Fillmode support to thumblist
		// @since 1.6.0
		if( this.options.fillMode && thumb_ele.is('img') ){
			var aligner = new window.MSAligner(this.options.fillMode, thumb_frame, thumb_ele);
			thumb_ele[0].aligner = aligner;
			thumb_ele.one('load', function(e){
				var $this = $(this); 
				$this[0].aligner.init($this.width(), $this.height());
				$this[0].aligner.align();
			}).each($.jqLoadFix);
		}

		if($.browser.msie)
				thumb_ele.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging
				
		this.thumbs.push(thumb_frame);
	};
	
	p.create = function(){
		_super.create.call(this);
		
		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.controller 	 = new Controller(0 , 0 , {
			//snapping	     : true,
			snappingMinSpeed : 2,
			friction		 : (100 - this.options.speed * 0.5) / 100
		});
				
		this.controller.renderCallback(this.options.dir === 'h'? this._hMove : this._vMove , this);
		//this.controller.snappingCallback(this.__snapUpdate , this);
		//this.controller.snapCompleteCallback(this.__snapCompelet , this);
		
		var that = this;
		this.resize_listener = function(){that.__resize();};
		$(window).bind('resize', this.resize_listener);
		
		this.thumbSize = this.thumbs[0][this.__jdimen](true);
		
		this.setupSwipe();
		this.__resize();
		
		var that = this;
		if(this.options.wheel){
			
			this.wheellistener = function(event){
				var e = window.event || event.orginalEvent || event;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				that.controller.push(-delta*10);
				return false;
			};
			
			if($.browser.mozilla) this.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.bind('mousewheel', this.wheellistener);
		}
		
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this);
		this.cindex =  this.slider.api.index();
		this.select(this.thumbs[this.cindex]);
		
		
	};
	
	p._hMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.left = -value + 'px';
	};
	
	p._vMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.top = -value + 'px';
	};
	
	p.setupSwipe = function(){ 
		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.options.dir === 'h'? 'horizontal' : 'vertical';
		
		var that = this;
		if(this.options.dir === 'h')
			this.swipeControl.onSwipe = function(status){that.horizSwipeMove(status);};
		else
			this.swipeControl.onSwipe = function(status){that.vertSwipeMove(status);};
	};
	
	p.vertSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start')
			this.controller.stop();	
		else if(phase === 'move')
			this.controller.drag(status.moveY);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceY / status.duration * 50/3);
			if(speed > 0.1){
				this.controller.push(-status.distanceY / status.duration * 50/3 );
			}else{
				this.click_enable = true;
				this.controller.cancel();
			} 
		}
	};
	
	p.horizSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();	
			this.click_enable = false;
		}else if(phase === 'move')
			this.controller.drag(status.moveX);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceX / status.duration * 50/3);
			if(speed > 0.1){
				 this.controller.push(-status.distanceX / status.duration * 50/3 );
			}else {
				this.click_enable = true;
				this.controller.cancel();
			}
		}
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;
		
		if(this.cindex != null)this.unselect(this.thumbs[this.cindex]);
		this.cindex = nindex;
		this.select(this.thumbs[this.cindex]);
	
		if(!this.dTouch)this.updateThumbscroll();
	};

	p.realignThumbs = function () {
		this.$element.find('.ms-thumb').each( function (index, thumb) {
			if ( thumb.aligner ) {
				thumb.aligner.align();	
			} 
		} );
	};

	p.updateThumbscroll = function(){
		var thumb_size;
		
		var pos = this.thumbSize * this.cindex;
		
		if(this.controller.value == NaN) this.controller.value = 0;
		
		if(pos -  this.controller.value < 0){
			this.controller.gotoSnap(this.cindex , true);
			return;
		}
				
		if(pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()){
			var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
			this.controller.gotoSnap(first_snap , true);
			return;
		}
	};

	p.changeSlide = function(thumb){
		if(!this.click_enable || this.cindex === thumb[0].index) return;
		this.slider.api.gotoSlide(thumb[0].index);
	};
	
	p.unselect = function(ele){
		ele.removeClass('ms-thumb-frame-selected');
	};
	
	p.select = function(ele){
		ele.addClass('ms-thumb-frame-selected');
	};
	
	p.__resize = function(){
		var size = this.$element[this.__dimen]();

		if(this.ls === size) return;
		
		this.ls = size;
		
		this.thumbSize = this.thumbs[0][this.__jdimen](true);
		var len = this.slider.api.count() * this.thumbSize;
		this.$thumbscont[0].style[this.__dimen] = len + 'px';
		
		if(len <= size){
			this.dTouch = true;
			this.controller.stop();
			this.$thumbscont[0].style[this.__pos] = (size - len)*.5 + 'px';
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = '';			
		}else{
			this.dTouch = false;
			this.click_enable = true;
			this.$thumbscont[0].style[this.__pos] = '';
			this.controller._max_value = len - size;
			this.controller.options.snapsize = this.thumbSize;
			this.updateThumbscroll();
		}
		
	};
	
	p.destroy = function(){
		_super.destroy();
		
		if(this.options.wheel){
			if($.browser.mozilla) this.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}		
		
		$(window).unbind('resize', this.resize_listener);

		this.$element.remove();

		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
	};
	
	window.MSThumblist = MSThumblist;
	MSSlideController.registerControl('thumblist' , MSThumblist);
	
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Bullets.js =================== */
;(function($){
	
	"use strict";
	
	var MSBulltes = function(options){
		BaseControl.call(this);
		
		this.options.dir 	= 'h';
		this.options.inset  = true;
		this.options.margin = 10;
		this.options.space = 10;
		

		$.extend(this.options , options);
		
		this.bullets = [];
		
	};
	
	MSBulltes.extend(BaseControl);
	
	var p = MSBulltes.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'bullets')
						.addClass('ms-dir-' + this.options.dir)
						.appendTo(this.cont);
		
		this.$bullet_cont = $('<div></div>')
						.addClass('ms-bullets-count')
						.appendTo(this.$element);

		if( !this.options.insetTo && this.options.align ){

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin);
			}

		}

		this.checkHideUnder(); // super method
	};
	
	p.create = function(){
		_super.create.call(this);
		var that = this;
									
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		for(var i = 0; i < this.slider.api.count(); ++i){
			var bullet = $('<div></div>').addClass('ms-bullet');
			bullet[0].index = i;
			bullet.on('click', function(){that.changeSlide(this.index);});
			this.$bullet_cont.append(bullet);
			this.bullets.push(bullet);
			if( this.options.dir === 'h' ) {
				bullet.css('margin', this.options.space/2);
			}else {
				bullet.css('margin', this.options.space);
			}
		}
		
		if(this.options.dir === 'h') {
			this.$element.width(bullet.outerWidth(true) * this.slider.api.count());
		} else {
			this.$element.css('margin-top', -this.$element.outerHeight(true)/2);
		}
		
		this.select(this.bullets[this.cindex]);
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;
		
		if(this.cindex != null)this.unselect(this.bullets[this.cindex]);
		this.cindex = nindex;
		this.select(this.bullets[this.cindex]);
	};
	
	p.changeSlide = function(index){
		if(this.cindex === index) return;
		this.slider.api.gotoSlide(index);
	};
	
	p.unselect = function(ele){
		ele.removeClass('ms-bullet-selected');
	};
	
	p.select = function(ele){
		ele.addClass('ms-bullet-selected');
	};
	
	p.destroy = function(){
		_super.destroy();
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.$element.remove();
	};
	
	window.MSBulltes = MSBulltes;
	
	MSSlideController.registerControl('bullets' , MSBulltes);
	
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Scrollbar.js =================== */
;(function($){
	
	"use strict";
	
	var MSScrollbar = function(options){
		BaseControl.call(this);
		
		this.options.dir 		= 'h';
		this.options.autohide	= true;
		this.options.width 		= 4;
		this.options.color 		= '#3D3D3D';
		this.options.margin		= 10;
		
		$.extend(this.options , options);
		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';
		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.__translate_start	= this.options.dir === 'h' ? ' translateX(' : 'translateY(';
	};
	
	MSScrollbar.extend(BaseControl);
	
	var p = MSScrollbar.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'sbar')
						.addClass('ms-dir-' + this.options.dir);
						
		_super.setup.call(this);
	
		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass(this.options.prefix + 'bar')
					.appendTo(this.$element);
					
		if(this.slider.options.loop){
			console.log('WARNING, MSScrollbar cannot work with looped slider.');
			this.disable = true;
			this.$element.remove();
		}
		
		/**
		 * align control
		 * @since 1.5.7
		 */
		// change width 
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);

		if( !this.options.insetTo && this.options.align ){
			
			// reset old versions styles
			if( this.options.dir === 'v' ){
				this.$element.css({
					right:'auto',
					left:'auto'
				});
			} else {
				this.$element.css({
					top:'auto',
					bottom:'auto'
				});
			}

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}

		this.checkHideUnder(); // super method
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};
	
	p.create = function(){
		
		if(this.disable) return;
		
		//_super.create.call(this);
		var that = this;
		
		this.scroller = this.slider.api.scroller;
		
		this.slider.api.view.addEventListener(MSViewEvents.SCROLL , this._update , this);		
		this.slider.api.addEventListener(MSSliderEvent.RESIZE , this._resize , this);
		
		this._resize();
		
		if(this.options.autohide){
			this.$bar.css('opacity' , '0');
		}
	};
	
	p._resize = function(){
		this.vdimen = this.$element[this.__dimen]();
		this.bar_dimen = this.slider.api.view[ '__' + this.__dimen] * this.vdimen / this.scroller._max_value; 
		this.$bar[this.__dimen](this.bar_dimen );
	};
	
	p._update = function(){
		var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
		if(this.lvalue === value) return;
		this.lvalue = value;
		
		if(this.options.autohide){
			clearTimeout(this.hto);
			this.$bar.css('opacity' , '1');
			
			var that = this;
			this.hto = setTimeout(function(){
				//if(!that.slider.api.view.swipeControl.touchStarted)
				that.$bar.css('opacity' , '0');
			} , 150);
		}
		
		if(value < 0){
			this.$bar[0].style[this.__dimen] = this.bar_dimen + value + 'px';
			return;
		}
		
		if(value > this.vdimen - this.bar_dimen)
			this.$bar[0].style[this.__dimen] = this.vdimen - value + 'px';

		if(window._cssanim) {
			this.$bar[0].style[window._jcsspfx + 'Transform'] = this.__translate_start +value+'px)'+ this.__translate_end;
			return;
		}
		
		this.$bar[0].style[this.__pos] = value + 'px';
		
	};
	
	p.destroy = function(){
		_super.destroy();
		this.slider.api.view.removeEventListener(MSViewEvents.SCROLL , this._update , this);		
		this.slider.api.removeEventListener(MSSliderEvent.RESIZE , this._resize , this);
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);

		this.$element.remove();
	};
	
	window.MSScrollbar = MSScrollbar;
	MSSlideController.registerControl('scrollbar' , MSScrollbar);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Timebar.js =================== */
;(function($){
	
	"use strict";
	
	var MSTimerbar = function(options){
		BaseControl.call(this);

		this.options.autohide = false;
		this.options.width 		= 4;
		this.options.color 		= '#FFFFFF';
		this.options.inset 		= true;
		this.options.margin 	= 0;

		$.extend(this.options , options);
	};
	
	MSTimerbar.extend(BaseControl);
	
	var p = MSTimerbar.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		_super.setup.call(this);
		
		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'timerbar');
		
		_super.setup.call(this);
	
		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass('ms-time-bar')
					.appendTo(this.$element);

		// change width 
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
			this.$element.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
			this.$element.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);
		
		if( !this.options.insetTo && this.options.align ){
			
			this.$element.css({
				top:'auto',
				bottom:'auto'
			});

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}

		this.checkHideUnder(); // super method
		
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};
	
	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WAITING , this._update , this);
		this._update();
	};
	
	p._update = function(){
		this.$bar[0].style.width = this.slider.api._delayProgress  + '%';
	};
	
	p.destroy = function(){
		_super.destroy();
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.WAITING , this._update , this);
		this.$element.remove();
	};
	
	window.MSTimerbar = MSTimerbar;
	MSSlideController.registerControl('timebar' , MSTimerbar);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/CircleTimer.js =================== */
;(function($){
	
	"use strict";
	
	var MSCircleTimer = function(options){
		BaseControl.call(this);
		
		this.options.color 	= '#A2A2A2';
		this.options.stroke = 10;
		this.options.radius	= 4;
		
		this.options.autohide = false;
		$.extend(this.options , options);
	};
	
	MSCircleTimer.extend(BaseControl);
	
	var p = MSCircleTimer.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		_super.setup.call(this);
		
		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'ctimer')
					.appendTo(this.cont);
					
		this.$canvas = 	$('<canvas></canvas>')
					.addClass('ms-ctimer-canvas')
					.appendTo(this.$element);		
		
		this.$bar = $('<div></div>')
					.addClass('ms-ctimer-bullet')
					.appendTo(this.$element);
		
		if(!this.$canvas[0].getContext){
			this.destroy();
			this.disable = true;
			return;
		}
		
		
		this.ctx		= this.$canvas[0].getContext('2d');
		this.prog		= 0;
		
		this.__w = (this.options.radius + this.options.stroke/2) * 2;
		this.$canvas[0].width  = this.__w;
		this.$canvas[0].height = this.__w;

		this.checkHideUnder(); // super method
	};
	
	p.create = function(){
		if(this.disable) return;
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WAITING , this._update , this);
		
		var that = this;
		this.$element.click(function(){
			if(that.slider.api.paused)
				that.slider.api.resume();
			else
				that.slider.api.pause();
		});
		
		this._update();
	};
	
	p._update = function(){
		var that = this;
		$(this).stop(true).animate({prog:this.slider.api._delayProgress * 0.01} ,
					 	{duration:200 , step:function(){that._draw();}});
		//this.$bar[0].style.width = this.slider.api._delayProgress/100 * this.$element.width() + 'px';
	};
	
	p._draw = function(){
		this.ctx.clearRect(0 , 0,  this.__w ,  this.__w);
		this.ctx.beginPath(); 
		this.ctx.arc(this.__w * .5 , this.__w * .5 ,this.options.radius , Math.PI * 1.5 , Math.PI * 1.5 + 2 * Math.PI * this.prog, false);
		this.ctx.strokeStyle = this.options.color;
		this.ctx.lineWidth = this.options.stroke;
		this.ctx.stroke();
	};
	
	p.destroy = function(){
		_super.destroy();
		if(this.disable) return;
		$(this).stop(true);
		this.slider.api.removeEventListener(MSSliderEvent.WAITING , this._update , this);
		this.$element.remove();
	};
	
	window.MSCircleTimer = MSCircleTimer;
		MSSlideController.registerControl('circletimer' , MSCircleTimer);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Lightbox.js =================== */
;(function($){
	
	"use strict";
	
	window.MSLightbox = function(options){
		BaseControl.call(this , options);
		
		this.options.autohide	= false;
		$.extend(this.options , options);

		this.data_list = [];
	};
	MSLightbox.fadeDuratation = 400;
	MSLightbox.extend(BaseControl);
	
	var p = MSLightbox.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */	
	p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(this.cont);
		
		this.checkHideUnder(); // super method
	};
	
	p.slideAction = function(slide){
		 $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(slide.$element)
						.append($(slide.$element.find('.ms-lightbox')));
	
	};
	
	p.create = function(){
		_super.create.call(this);
	
	};
	

	MSSlideController.registerControl('lightbox' , MSLightbox);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/SlideInfo.js =================== */
;(function($){
	
	"use strict";
	
	window.MSSlideInfo = function(options){
		BaseControl.call(this , options);
		
		this.options.autohide	= false;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.size = 100;
		this.options.dir = 'h';

		$.extend(this.options , options);

		this.data_list = [];
	};
	MSSlideInfo.fadeDuratation = 400;
	MSSlideInfo.extend(BaseControl);
	
	var p = MSSlideInfo.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */	
	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'slide-info')
						.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);	

		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element); // insert in outer container out of overflow hidden
		}else{
			this.$element.appendTo(this.cont);
		}
		
		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.size);
			}else{
				this.$element.css('min-height', this.options.size);
			}
		}

		this.checkHideUnder(); // super method
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.size + this.options.margin * 2);
		this.$element.css(align, -pos - this.options.size - this.options.margin);
	};
	
	p.slideAction = function(slide){
		var info_ele = $(slide.$element.find('.ms-info'));
		var that = this;
		info_ele.detach();
		
		this.data_list[slide.index] = info_ele;
	};
	
	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		this.switchEle(this.data_list[this.cindex]);
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		this.switchEle(this.data_list[nindex]);
		this.cindex = nindex;
	};
	
	p.switchEle = function(ele){
		if(this.current_ele){
			var that = this;
			
			if(this.current_ele[0].tween)this.current_ele[0].tween.stop(true);
			this.current_ele[0].tween = CTween.animate(this.current_ele , MSSlideInfo.fadeDuratation  , {opacity:0} , {complete:function(){
				this.detach();
				this[0].tween = null; 
				ele.css('position', 'relative');
			} , target:this.current_ele });

			//this.current_ele.css('position', 'absolute');			
			ele.css('position', 'absolute');
		}

		this.__show(ele);
	};
	
	p.__show = function(ele){
		ele.appendTo(this.$element).css('opacity','0');///.css('position', 'relative');
		
		// calculate max height
		if ( this.current_ele ){
			ele.height( Math.max( ele.height(), this.current_ele.height() ) );
		}

		clearTimeout(this.tou);
		this.tou = setTimeout(function(){
			CTween.fadeIn(ele , MSSlideInfo.fadeDuratation );
			ele.css('height', '');	
		}, MSSlideInfo.fadeDuratation);


		if(ele[0].tween)ele[0].tween.stop(true);
		this.current_ele = ele;
	};

	p.destroy = function(){
		_super.destroy();
		clearTimeout(this.tou);
		if(this.current_ele && this.current_ele[0].tween){
			this.current_ele[0].tween.stop('true');
		}
		this.$element.remove();
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
	};
	
	MSSlideController.registerControl('slideinfo' , MSSlideInfo);
})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSGallery.js =================== */
/**
 *	Master Slider, Gallery Template v1.0
 * 	@author: Averta Ltd.
 */

;(function($){
	
	window.MSGallery = function(id , slider){
		this.id = id;
		this.slider = slider;
		
		this.telement = $('#'+id);
		
		this.botcont = $('<div></div>').addClass('ms-gallery-botcont').appendTo(this.telement);
		this.thumbcont = $('<div></div>').addClass('ms-gal-thumbcont hide-thumbs').appendTo(this.botcont);
		this.playbtn  = $('<div></div>').addClass('ms-gal-playbtn').appendTo(this.botcont);
		this.thumbtoggle  = $('<div></div>').addClass('ms-gal-thumbtoggle').appendTo(this.botcont);
		
		// adds required controls to slider
		slider.control('thumblist' , {insertTo:this.thumbcont , autohide:false , dir:'h'});
		slider.control('slidenum'  , {insertTo:this.botcont , autohide:false});
		slider.control('slideinfo' , {insertTo:this.botcont , autohide:false});		
		slider.control('timebar'   , {insertTo:this.botcont , autohide:false});		
		slider.control('bullets'   , {insertTo:this.botcont , autohide:false});		
	};
	
	var p = MSGallery.prototype;
	
	p._init = function(){
		var that = this;
		
		if(!this.slider.api.paused)
			 this.playbtn.addClass('btn-pause');
		 
		this.playbtn.click(function(){
			if(that.slider.api.paused){
				 that.slider.api.resume();
				 that.playbtn.addClass('btn-pause');
			}else{
				 that.slider.api.pause();
				 that.playbtn.removeClass('btn-pause');
			}
		});
		
		
		this.thumbtoggle.click(function(){
			
			if(that.vthumbs){
				//that.hideThumbs();
				that.thumbtoggle.removeClass('btn-hide');
				that.vthumbs = false;
				that.thumbcont.addClass('hide-thumbs');
			}else{
				//that.showThumbs();
				that.thumbtoggle.addClass('btn-hide');
				that.thumbcont.removeClass('hide-thumbs');
				that.vthumbs = true;
			}
		});
		
	};
	
	p.setup = function(){
		var that = this;
		$(document).ready(function(){that._init();});
	};
	
	
})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSFlickrV2.js =================== */
/**
 * Master Slider Flickr Plugin Version 2
 * @version 2.0.0
 * @author Averta Ltd.
 */
;(function($){
	
	/**
	 * Generate Flickr photoset url
	 * @param  {String} key   api key
	 * @param  {String} id    photoset id
	 * @param  {Number} count number of images
	 * @return {String}
	 */
	var getPhotosetURL = function(key , id , count){
		return 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + key + '&photoset_id='+ id +'&per_page='+ count +'&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?';
	};
	
	/**
	 * Generate Flickr user public images url
	 * @param  {String} key   api key
	 * @param  {String} id    user id
	 * @param  {Number} count number of images
	 * @return {String}
	 */
	var getUserPublicURL = function(key , id , count){
		return 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + key + '&user_id='+ id +'&per_page='+ count +'&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?';
	};
	
	/**
	 * Generates image path
	 * @param  {String} fid    
	 * @param  {String} server 
	 * @param  {String} id     
	 * @param  {String} secret 
	 * @param  {String} size   
	 * @return {String}        
	 */
	var getImageSource = function(fid , server , id , secret , size, data){
		if ( size === '_o' && data ) {
			return data.url_o;
		}

		return 'https://farm' + fid + '.staticflickr.com/'+ server + '/' + id + '_' + secret + size + '.jpg';
	};

	window.MSFlickrV2 = function(slider,options){
		var _options = {
			count			:10,
			type			:'photoset',
			/*
			 * s small square 75x75 
			 * q large square 150x150 
			 * t thumbnail, 100 on longest side
			 */ 
			thumbSize	:'q',  
			
			/*
			 * -	medium, 500 on longest side
			 * z	medium 640, 640 on longest side
			 * c	medium 800, 800 on longest side
			 * b	large, 1024 on longest side
			 * o	original image, either a jpg, gif or png, depending on source format
			 */
			imgSize		: 'c'
		};

		this.slider = slider;
		this.slider.holdOn();
		
		if( !options.key ){
			this.errMsg('Flickr API Key required. Please add it in settings.');
			return;
		}
		
		$.extend(_options , options);
		this.options = _options;
		
		var that = this;
		
		if(this.options.type === 'photoset'){
			$.getJSON(getPhotosetURL(this.options.key , this.options.id , this.options.count) , function(data){
				that._photosData(data);
			});
		}else{
			$.getJSON(getUserPublicURL(this.options.key , this.options.id , this.options.count) , function(data){
				that.options.type = 'photos';
				that._photosData(data);
			});
		}
		
		if(this.options.imgSize !== '' && this.options.imgSize !== '-') 
			this.options.imgSize = '_' + this.options.imgSize;
			
		this.options.thumbSize = '_' + this.options.thumbSize;
		
		// grab slide template from slider markup
		this.slideTemplate = this.slider.$element.find('.ms-slide')[0].outerHTML;
		this.slider.$element.find('.ms-slide').remove(); // remove all slides from slider markup
	};

	var p = MSFlickrV2.prototype;

	p._photosData = function(data){
		
		if(data.stat === 'fail'){
			this.errMsg('Flickr API ERROR#' + data.code + ': ' + data.message);
			return;
		}
		
		var that = this;
		var getInfo = this.options.author || this.options.desc;
		$.each(data[this.options.type].photo, function(i,item){

			var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match){
				match = match.replace(/{{|}}/g, '');
				if( shortCodes[match] ) {
					return shortCodes[match](item, that);
				} else {
					return '{{'+match+'}}';
				}

			});

			$(slide_cont).appendTo(that.slider.$element);

		});
		
		that._initSlider();
	};
	
	p.errMsg = function(msg){
		this.slider.$element.css('display', 'block');
		if(!this.errEle)
			this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading);
		
		this.errEle.html(msg);
	};
	
	p._initSlider = function(){
		this.slider.release();
	};

	// a list of functions that generates data from short codes
	var shortCodes = {
		'image': function(data, that){
			return getImageSource(data.farm , data.server , data.id , data.secret , that.options.imgSize, data);
		},

		'thumb': function(data, that){
			return getImageSource(data.farm , data.server , data.id , data.secret , that.options.thumbSize);
		},

		'title': function(data, that){
			return data.title;
		},

		'owner-name': function(data, that){
			return data.ownername;
		},

		'date-taken': function(data, that){
			return data.datetaken;
		},

		'views': function(data, that){
			return data.views;
		},

		'description': function(data, that){
			return data.description._content;
		}
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSFacebookGallery.js =================== */
/**
 * Master Slider Facebook Gallery plugin
 * @author Averta Ltd.
 * @version 1.0.0
 */
;(function($){


	window.MSFacebookGallery = function(slider, options){
		var _options = {
			count			:10,
			type			:'photostream', // album
 			/*
 			orginal/960/720/600/480/320/130
 			 */
			thumbSize	:'320',

			/*
 			orginal/960/720/600/480/320/130
 			 */
			imgSize		: 'orginal',

			https: false,
            token: ''
		};

		this.slider = slider;
		this.slider.holdOn();

		$.extend(_options , options);
		this.options = _options;

        //this.graph = this.options.https ? 'https://graph.facebook.com' : 'http://graph.facebook.com';
		this.graph = 'https://graph.facebook.com';

		var that = this;

		if(this.options.type === 'photostream'){
			$.getJSON(this.graph + '/' + this.options.username + '/photos/uploaded/?fields=source,name,link,images,from&limit=' + this.options.count + '&access_token=' + this.options.token , function(data){
				that._photosData(data);
			});
		}else{
			$.getJSON(this.graph + '/' + this.options.albumId + '/photos?fields=source,name,link,images,from&limit=' + this.options.count + '&access_token=' + this.options.token , function(data){
				that._photosData(data);
			});
		}

		// grab slide template from slider markup
		this.slideTemplate = this.slider.$element.find('.ms-slide')[0].outerHTML;
		this.slider.$element.find('.ms-slide').remove(); // remove all slides from slider markup
	};

	var p = MSFacebookGallery.prototype;

	p._photosData = function(content){

		if(content.error){
			this.errMsg('Facebook API ERROR#' + content.error.code + '(' + content.error.type + ')' + ': ' + content.error.message);
			return;
		}

		var that = this;
		var getInfo = this.options.author || this.options.desc;

		for(var i=0,l=content.data.length;i!==l;i++){

			var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match){
				match = match.replace(/{{|}}/g, '');
				if( shortCodes[match] ) {
					return shortCodes[match](content.data[i], that);
				} else {
					return '{{'+match+'}}';
				}

			});

			$(slide_cont).appendTo(that.slider.$element);
		}

		that._initSlider();
	};

	p.errMsg = function(msg){
		this.slider.$element.css('display', 'block');
		if(!this.errEle)
			this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading);

		this.errEle.html(msg);
	};

	p._initSlider = function(){
		this.slider.release();
	};

	var getImageSource = function(images, size){

		if( size === 'orginal' ) {
			return images[0].source;
		}

		for(var i = 0, l = images.length; i !== l; i++){
			if( images[i].source.indexOf(size + 'x' + size) !== -1 )
				return images[i].source;
		}
      //  console.log(images)
		return images[0].source;
	};

	// a list of functions that generates data from short codes
	var shortCodes = {
		'image': function(data, that){

			return getImageSource(data.images, that.options.imgSize);
		},

		'thumb': function(data, that){
			return getImageSource(data.images, that.options.thumbSize);
		},

		'name': function(data, that){
			return data.name;
		},

		'owner-name': function(data, that){
			return data.from.name;
		},

		'link': function(data, that){
			return data.link;
		}
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSScrollParallax.js =================== */
/**
 * Master Slider Parallax Layers Fade
 * @description Moves and fades layers of current slide while scrolling window.
 * @package MasterSlider
 * @author Averta
 * @since v1.8.0
 */

(function($){

	'use strict';

	window.MSScrollParallax = function (slider, parallax, bgparallax, fade) {
		this.fade = fade;
		this.slider = slider;
		this.parallax = parallax/100;
		this.bgparallax = bgparallax/100;

		slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		slider.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this);	
		slider.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this);
		slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this);
	};

	window.MSScrollParallax.setup = function(slider, parallax, bgparallax, fade){
		// disable in mobile devices
		if ( window._mobile ) {
			return;
		}

		if( parallax == null ) {
			parallax = 50;
		}
		
		if( bgparallax == null ){
			bgparallax = 40;
		}

		return new MSScrollParallax(slider, parallax, bgparallax, fade); 
	};

	var p = window.MSScrollParallax.prototype;

	p.init = function (e) {
		this.slider.$element.addClass('ms-scroll-parallax');
		this.sliderOffset = this.slider.$element.offset().top;
		this.updateCurrentSlide();
		// wrap layers element
		var slides = this.slider.api.view.slideList,
			slide;
		for(var i = 0, l = slides.length; i!==l ; i++) {
			slide = slides[i];
			if( slide.hasLayers ) {
				slide.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>');
				slide.$scrollParallaxCont = slide.layerController.$layers.parent();
			}
		}
		
		$(window).on('scroll', {that:this}, this.moveParallax).trigger('scroll');
	};

	p.resetLayers = function (e) {
		if( !this.lastSlide ) {
			return;
		}

		var layers = this.lastSlide.$scrollParallaxCont;

		if ( window._css2d ) {
			if( layers ){
				layers[0].style[window._jcsspfx + 'Transform'] = '';
			}

			if ( this.lastSlide.hasBG ) {
				this.lastSlide.$imgcont[0].style[window._jcsspfx + 'Transform'] = '';
			}

		} else {
			if( layers ){
				layers[0].style.top = '';
			}

			if ( this.lastSlide.hasBG ) {
				this.lastSlide.$imgcont[0].style.top = '0px';
			}
		}
	};

	p.updateCurrentSlide = function (e) {
		this.lastSlide = this.currentSlide;

		this.currentSlide = this.slider.api.currentSlide;
		this.moveParallax({data:{that:this}});
	};

	p.moveParallax = function (e) {
		var that = e.data.that,
			slider = that.slider,
			offset = that.sliderOffset,
			scrollTop = $(window).scrollTop(),
			layers = that.currentSlide.$scrollParallaxCont,
			out = offset - scrollTop;

		if( out <= 0 ) {
			
			if( layers ){
				if ( window._css3d ) {
					layers[0].style[window._jcsspfx + 'Transform'] = 'translateY(' + -out * that.parallax + 'px) translateZ(0.4px)';
				} else if ( window._css2d ){
					layers[0].style[window._jcsspfx + 'Transform'] = 'translateY(' + -out * that.parallax + 'px)';
				} else {
					layers[0].style.top =  -out * that.parallax + 'px';
				}
			}
			
			that.updateSlidesBG(-out * that.bgparallax + 'px', true);

			if ( layers && that.fade ) { 
				layers.css('opacity',  (1 - Math.min(1, -out / slider.api.height)) );
			}

		} else {
			if( layers ){
				if ( window._css2d ) {
					layers[0].style[window._jcsspfx + 'Transform'] = '';
				} else {
					layers[0].style.top = '';
				}
			}

			that.updateSlidesBG('0px', false);

			if ( layers && that.fade ) { 
				layers.css('opacity',  1 );
			}

		}

	};

	p.updateSlidesBG = function(pos, fixed) {
		var slides = this.slider.api.view.slideList,
			position = ( fixed &&  !$.browser.msie && !$.browser.opera ? 'fixed' : '');

		for(var i = 0, l = slides.length; i!==l ; i++) {
			if ( slides[i].hasBG ) {
				slides[i].$imgcont[0].style.position = position; 
				slides[i].$imgcont[0].style.top = pos;
			}

			if ( slides[i].$bgvideocont ){
				slides[i].$bgvideocont[0].style.position = position; 
				slides[i].$bgvideocont[0].style.top = pos;
			}
		}

	};

	p.destory = function () {
		slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
		slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this);	
		slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this);
		slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this);
		$(window).off('scroll', this.moveParallax);
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSKeyboardNav.js =================== */
/**
 * Keyboard navigation plugin for Master Slider.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */
;(function($, document, window){
	var PId = 0;

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var KeyboardNav = function ( slider ) {
		this.slider = slider;
		this.PId = PId++;

		if ( this.slider.options.keyboard ) {
			slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		}
	};

	KeyboardNav.name = 'MSKeyboardNav';
	var p = KeyboardNav.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;

		$(document).on('keydown.kbnav' + this.PId , function(event){
			var which = event.which;

			if ( which === 37 || which === 40 ) {
				api.previous(true);
			} else if ( which === 38 || which === 39 ) {
				api.next(true);
			}

		});

	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){
		$(document).off('keydown.kbnav' + this.PId);
		this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
	};

	// install plugin to master slider
	MasterSlider.registerPlugin( KeyboardNav );

})(jQuery, document, window);

/* ================== bin-debug/js/pro/plugins/MSStartOnAppear.js =================== */
/**
 * Start on appear plugin for Master Slider.
 * 
 * @description This plugin prevents slider automatically initialization and inits slider when it appears inside of the browser window.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */

;(function($, document, window){
	var PId = 0,
		$window = $(window),
		$doc = $(document);

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var StartOnAppear = function ( slider ) {
		this.PId = PId++;
		this.slider = slider;
		this.$slider = slider.$element;
		
		if ( this.slider.options.startOnAppear ) {
			// hold on slider
			slider.holdOn();
			$doc.ready($.proxy(this.init, this));
		}
	};

	StartOnAppear.name = 'MSStartOnAppear';
	var p = StartOnAppear.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;
		$window.on('scroll.soa' + this.PId , $.proxy(this._onScroll, this)).trigger('scroll');
	};

	p._onScroll = function () {
		// check slider position
		var vpBottom = $window.scrollTop() + $window.height(),
			top = this.$slider.offset().top ;

		if ( top < vpBottom ) {
			$window.off('scroll.soa' + this.PId);
			this.slider.release();
		}
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){};

	// install plugin to master slider
	MasterSlider.registerPlugin( StartOnAppear );

})(jQuery, document, window);

/* ================== bin-debug/js/pro/plugins/MSFilters.js =================== */
/**
 * Master Slider Filters Plugin
 * This plugin adds CSS3 filters to the slides, like brightness, grayscale, sepia, ... It works in major browser and devices but in IE `opacity` only supported.
 * 
 * @package Master Slider jQuery
 * @author Averta
 * @version  1.0.0a
 */

;(function (document, window, jQuery){

	var filterUnits = {
		'hue-rotate' 	: 'deg',
		'blur' 			: 'px'
	}, initialValues = {
		'opacity' 		: 1,
		'contrast'		: 1,
		'brightness'	: 1,
		'saturate'		: 1,
		'hue-rotate'	: 0,
		'invert'		: 0,
		'sepia'			: 0,
		'blur'			: 0,
		'grayscale'		: 0
	}

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var Filters = function ( slider ) {
		this.slider = slider;

		if ( this.slider.options.filters ) {
			slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		}
	};

	Filters.name = 'MSFilters';
	var p = Filters.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api,
			view = api.view;

		this.filters 		= this.slider.options.filters;
		this.slideList 		= view.slideList;
		this.slidesCount 	= view.slidesCount;
		this.dimension 		= view[view.__dimension];
		this.target 		= this.slider.options.filterTarget === 'slide' ? '$element' : '$bg_img';
		this.filterName 	= $.browser.webkit ? 'WebkitFilter' : 'filter';

		// override controller update callback
		var superFun = view.controller.__renderHook.fun,
			superRef = view.controller.__renderHook.ref;
		view.controller.renderCallback( function (controller, value) {
			superFun.call(superRef, controller, value);
			this.applyEffect(value);
		} , this);
		this.applyEffect(view.controller.value);

	};

	/**
	 * Apply css effect to slides based on slide position.
	 * @param  {Number} value Current position of slider controller
	 */
	p.applyEffect = function (value) { 
		var factor, slide;

		for( var i = 0; i < this.slidesCount; ++i ) {
			slide = this.slideList[i];
			factor = Math.min(1 , Math.abs(value - slide.position) / this.dimension);
			
			if ( slide[this.target] ) {
				if ( !$.browser.msie ) {
					slide[this.target][0].style[this.filterName] = this.generateStyle(factor);
				} else if ( this.filters.opacity != null ) {
					slide[this.target].opacity( 1 - this.filters.opacity * factor);
				}
			}		
		}
	};

	/**
	 * Generate filter style based on slide distance factor
	 * @param  {Number} factor 
	 * @return {String} CSS style
	 */
	p.generateStyle = function (factor) {
		var style = '',
			unit;

		for ( var filter in this.filters ) {
			unit = filterUnits[filter] || '';
			style += filter + '(' + ( initialValues[filter] + (this.filters[filter] - initialValues[filter]) * factor) + ') ';			
		}

		return style;
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){
		this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
	};

	// install plugin to master slider
	MasterSlider.registerPlugin( Filters );


})(document, window, jQuery);

/* ================== bin-debug/js/pro/plugins/MSScrollToAction.js =================== */
/**
 * Master Slider Scroll To Action Plugin.
 * 
 * @description This plugins adds page scrolling actions to the layer actions list.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */

;(function($, document, window){

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var ScrollToAction = function ( slider ) {
		this.slider = slider;
		slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
	};

	ScrollToAction.name = 'MSScrollToAction';
	var p = ScrollToAction.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;
		
		// define actions
		api.scrollToEnd = _scrollToEnd;
		api.scrollTo = _scrollTo;
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){};

	/**
	 * Scroll window to the target element in page
	 * @param {Number} duration animation duration (seconds)
	 */
	var _scrollTo = function ( target, duration ) {
		var sliderEle = this.slider.$element,
			target = $(target).eq(0);

		if ( target.length === 0 ) {
			return;
		}
		console.log(target.offset().top, duration )

		if( duration == null ) {
			duration = 1.4;
		}

		$('html, body').animate({
			scrollTop: target.offset().top
		}, duration * 1000, 'easeInOutQuad');
	};

	/**
	 * Scroll window to the bottom of slider
	 * @param {Number} duration animation duration (seconds)
	 */
	var _scrollToEnd = function ( duration ) {
		var sliderEle = this.slider.$element;

		if( duration == null ) {
			duration = 1.4;
		}

		$('html, body').animate({
			scrollTop: sliderEle.offset().top + sliderEle.outerHeight(false)
		}, duration * 1000, 'easeInOutQuad');
	}

	// install plugin to master slider
	MasterSlider.registerPlugin( ScrollToAction );

})(jQuery, document, window);