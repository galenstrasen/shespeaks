function ssc_init(){if(document.body){var e=document.body,t=document.documentElement,n=window.innerHeight,o=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?t:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(o>n&&(e.offsetHeight<=n||t.offsetHeight<=n)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=n)){var s=document.createElement("div");s.style.clear="both",e.appendChild(s)}ssc_fixedback||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,t,n,o){if(o||(o=1e3),ssc_directionCheck(t,n),ssc_que.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!ssc_pending){var s=function(){for(var r=+new Date,i=0,a=0,c=0;c<ssc_que.length;c++){var l=ssc_que[c],u=r-l.start,f=u>=ssc_animtime,d=f?1:u/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var p=l.x*d-l.lastX>>0,h=l.y*d-l.lastY>>0;i+=p,a+=h,l.lastX+=p,l.lastY+=h,f&&(ssc_que.splice(c,1),c--)}if(t){var m=e.scrollLeft;e.scrollLeft+=i,i&&e.scrollLeft===m&&(t=0)}if(n){var v=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===v&&(n=0)}t||n||(ssc_que=[]),ssc_que.length?setTimeout(s,o/ssc_framerate+1):ssc_pending=!1};setTimeout(s,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var t=e.target,n=ssc_overflowingAncestor(t);if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src))return!0;var o=e.wheelDeltaX||0,s=e.wheelDeltaY||0;o||s||(s=e.wheelDelta||0),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),Math.abs(s)>1.2&&(s*=ssc_stepsize/120),ssc_scrollArray(n,-o,-s),e.preventDefault()}function ssc_keydown(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar)return!0;var o,s=0,r=0,i=ssc_overflowingAncestor(ssc_activeElement),a=i.clientHeight;switch(i==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:r=-ssc_arrowscroll;break;case ssc_key.down:r=ssc_arrowscroll;break;case ssc_key.spacebar:o=e.shiftKey?1:-1,r=-o*a*.9;break;case ssc_key.pageup:r=.9*-a;break;case ssc_key.pagedown:r=.9*a;break;case ssc_key.home:r=-i.scrollTop;break;case ssc_key.end:var c=i.scrollHeight-i.scrollTop-a;r=c>0?c+10:0;break;case ssc_key.left:s=-ssc_arrowscroll;break;case ssc_key.right:s=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(i,s,r),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,t){for(var n=e.length;n--;)ssc_cache[ssc_uniqueID(e[n])]=t;return t}function ssc_overflowingAncestor(e){var t=[],n=ssc_root.scrollHeight;do{var o=ssc_cache[ssc_uniqueID(e)];if(o)return ssc_setCache(t,o);if(t.push(e),n===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<n)return ssc_setCache(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(t,e)}while(e=e.parentNode)}function ssc_addEvent(e,t,n){window.addEventListener(e,t,n||!1)}function ssc_removeEvent(e,t,n){window.removeEventListener(e,t,n||!1)}function ssc_isNodeName(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function ssc_directionCheck(e,t){e=e>0?1:-1,t=t>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==t)&&(ssc_direction.x=e,ssc_direction.y=t,ssc_que=[])}function ssc_pulse_(e){var t,n,o;return e*=ssc_pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var Animated=function(e){var t=function(){e(".animation, .animation-visible").each(function(){var t=e(this);t.waypoint(function(){var e=0;t.attr("data-delay")&&(e=parseInt(t.attr("data-delay"),0)),t.hasClass("animated")||setTimeout(function(){t.addClass("animated "+t.attr("data-animation"))},e),e=0},{offset:"80%"})}),console.log("animated init")},n=function(){e(".animation, .animation-visible").each(function(){e(this).addClass("animated")})};return{init:t,ShowAnimated:n}}(jQuery),Constants=function(e){return{DIRECTION:{UP:"direction_up",DOWN:"direction_down",LEFT:"direction_left",RIGHT:"direction_right"}}}(jQuery),Lightbox=function(e){var t=function(){$(".imagepop").magnificPopup({type:"image"}),$(".js-flex-gallery-img").magnificPopup({type:"image",gallery:{enabled:!0}})};return{init:t}}(jQuery),MobileDetect=function(e){var t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=function(){e("body").addClass(1==t?"mobile":"no-touch")};return{detect:n}}(jQuery),NavtoSelectList=function(e){var t=function(){$("ul.js-selectdropdown").each(function(){var e=$(document.createElement("select")).insertBefore($(this)).addClass("mobile-select").wrap("<div class='select-nav-wrap'></div>");$(">li a",this).each(function(){{var t=$(this).click(function(){"_blank"===$(this).attr("target")?window.open(this.href):window.location.href=this.href});$(document.createElement("option")).appendTo(e).val(this.href).html($(this).html()).click(function(){t.click()})}})})};return{init:t}}(jQuery),Preloader=function(e){var t=function(){e(window).on("load",function(){setTimeout(function(){e(".js-sitewrap").animate({opacity:1},300),e("#preloader").fadeOut(300,function(){Animated.init()})},300)})};return{init:t}}(jQuery),Roadblock=function(){var e=function(){$(window).load(function(){function e(){$.magnificPopup.open({items:{src:"#roadblock",type:"inline"},modal:!0,removalDelay:300,mainClass:"tmbr-overlay -roadblock",fixedContentPos:!0,alignTop:!0,closeOnBgClick:!0,preloader:!1,midClick:!0,closeBtnInside:!1,showCloseBtn:!1}),$(".js-alt-close").on("click",function(e){e.preventDefault(),$.magnificPopup.close()})}{var t=jQuery.cookie("email-complete"),n=jQuery.cookie("form-shown"),o=jQuery.cookie("form-closed");$("#roadblock").length}if(!t){if(n){var s=parseFloat(n);s+=1,jQuery.cookie("form-shown",s,{path:"/"})}else jQuery.cookie("form-shown","1",{path:"/"});"3"!==n||o||e(),$(document).on("click",".js-close",function(e){e.preventDefault(),$.magnificPopup.close(),jQuery.cookie("form-closed","true",{expires:7,path:"/"})})}})};return{init:e}}(jQuery),SlickSlider=function(e){var t=function(){$(".js-hero-slider").slick({autoplay:!0,autoplaySpeed:3e3,speed:3e3,arrows:!0,fade:!0,dots:!0})};return{init:t}}(jQuery),Slider=function(){var e={selector:".flexslider",namespace:"flex-",animation:"slide",easing:"swing",animationLoop:!0,startAt:0,initDelay:0,slideshow:!1,slideshowSpeed:4e3,animationSpeed:600,pauseOnHover:!0,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",randomize:!1,touch:!0,video:!1,pauseOnAction:!0,pauseOnHover:!1},t=function(t){t&&(e=t);var n=$(e.selector);n.each(function(){console.log($(this)),$(this).flexslider({namespace:e.namespace,animation:e.animation,slideshow:e.slideshow,slideshowSpeed:e.slideshowSpeed,animationSpeed:e.animationSpeed,pauseOnHover:e.pauseOnHover,controlNav:e.controlNav,directionNav:e.directionNav,prevText:e.prevText,nextText:e.nextText,randomize:e.randomize,touch:e.touch,video:e.video})})},n=function(t){for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];e.hasOwnProperty(n)?e[n]=o:(Util.log("Options.set() to a property that is not expected"),Util.log("property_name:",n,"property_value:",o))}},o=function(){return e};return{init:t,set:n,get:o}}(jQuery),SmoothScroll=function(e){var t=function(){e('a[href*="#"]:not([href="#"]).scroll-to').on("click","",function(t){if(t.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var n=e(this.hash);if(n=n.length?n:e("[name="+this.hash.slice(1)+"]"),n.length)return e("html,body").animate({scrollTop:n.offset().top},{duration:600,easing:"easeOutCubic"}),!1}})};return{init:t}}(jQuery),Tabs=function(e){var t,n,o,s,r,i,a,c=function(c){t=c.container,n=t.find("[data-tab]"),o=t.find("[data-tab-content]"),s=t.find('[data-tab-content="1"]'),r=e(window).outerWidth(),i=768,a=i>=r,a&&u(s),e(window).on("resize",function(){r=e(window).outerWidth(),r>i&&a===!0?(a=!1,u(o)):i>=r&&a===!1&&(a=!0,u(s))}),e("#checkingtype").on("change",function(){if(c.mobileOnly===!0&&i>=r){var t=e(event.target).find(":selected");l(t)}})},l=function(e){var n=e.data("tab"),o=t.find('[data-tab-content="'+n+'"]');u(o)},u=function(e){o.addClass("hidden"),e.removeClass("hidden")};return{init:c}}(jQuery),Throttle=function(e){var t=50,n=function(){e(window).on("scroll",_throttle(function(){var t=e(window).scrollTop(),n=e(".js-doc-nav-wrapper").height()-50,o=n-t;0>o?e(".navbar-default").addClass("js-nav-scroll-white"):e(".navbar-default").removeClass("js-nav-scroll-white")},t)),e(window).on("resize",_throttle(function(){},t)),console.log("Throttle.init")};return{init:n}}(jQuery),Util=function(){var e=!1,t=function(){return arguments.length?void(e=arguments[0]):e},n=function(){if(e&&"undefined"!=typeof console&&"undefined"!=typeof console.log)for(var t=0;t<arguments.length;t++){arguments[t]}},o=function(e,t){$.ajax({url:e,dataType:"text",success:function(e){data=$.parseJSON(e),t&&"function"==typeof t&&t(data)}})},s=function(e,t){$.ajax({url:e,context:document.body,success:function(e){t&&"function"==typeof t&&t(e)}})},r=function(e,t){return"string"!=typeof e?e:(e=e.replace(/^\s+|\s+$/g,""),e.split(t))},i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})},a=function(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];""!==o&&t.push(o)}return t},c=function(e){for(var t,n,o=e.length;o;t=Math.floor(Math.random()*o),n=e[--o],e[o]=e[t],e[t]=n);return e},l=function(e){for(var t=e.concat(),n=0;n<t.length;++n)for(var o=n+1;o<t.length;++o)t[n]===t[o]&&t.splice(o--,1);return t},u=function(){var e,t,n,o,s,r=[];for(n=arguments.length,e=0;n>e;e++)for(o=arguments[e],s=o.length,t=0;s>t;t++)r.push(o[t]);return r},f=function(e){return e[Math.floor(Math.random()*e.length)]},d=function(e,t){var n=null;return function(){var o=this,s=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,s)},t)}},p=function(e,t,n){t||(t=250);var o,s;return function(){var r=n||this,i=+new Date,a=arguments;o&&o+t>i?(clearTimeout(s),s=setTimeout(function(){o=i,e.apply(r,a)},t)):(o=i,e.apply(r,a))}},h=function(e){if("boolean"==typeof e)return e;if("undefined"==typeof e)return!1;switch(e.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(e)}},m=function(e){var t=e,n=t.split("&"),o={};if(!n.length)return!1;for(var s=0;s<n.length;s++){var r=n[s],i=r.split("=");o[i[0]]=decodeURIComponent(i[1])}return o},v=function(){var e,t,n,o,s=function(e,t){var r;if(isNaN(e)&&isNaN(t)&&"number"==typeof e&&"number"==typeof t)return!0;if(e===t)return!0;if("function"==typeof e&&"function"==typeof t||e instanceof Date&&t instanceof Date||e instanceof RegExp&&t instanceof RegExp||e instanceof String&&t instanceof String||e instanceof Number&&t instanceof Number)return e.toString()===t.toString();if(!(e instanceof Object&&t instanceof Object))return!1;if(e.isPrototypeOf(t)||t.isPrototypeOf(e))return!1;if(e.constructor!==t.constructor)return!1;if(e.prototype!==t.prototype)return!1;if(n.indexOf(e)>-1||o.indexOf(t)>-1)return!1;for(r in t){if(t.hasOwnProperty(r)!==e.hasOwnProperty(r))return!1;if(typeof t[r]!=typeof e[r])return!1}for(r in e){if(t.hasOwnProperty(r)!==e.hasOwnProperty(r))return!1;if(typeof t[r]!=typeof e[r])return!1;switch(typeof e[r]){case"object":case"function":if(n.push(e),o.push(t),!s(e[r],t[r]))return!1;n.pop(),o.pop();break;default:if(e[r]!==t[r])return!1}}return!0};if(arguments.length<1)return!0;for(e=1,t=arguments.length;t>e;e++)if(n=[],o=[],!s(arguments[0],arguments[e]))return!1;return!0};return{debugMode:t,log:n,loadJSON:o,loadBodyHTML:s,String:{split:r,uid:i},Array:{removeBlankStrings:a,shuffle:c,removeDuplicates:l,merge:u,randomItemFromArray:f},debounce:d,throttle:p,booleanHelper:h,getQueryParameters:m,deepCompare:v}}(),ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));var Control=function(e){var t={selector:".flexslider",namespace:"flex-",animation:"slide",slideshow:!1,slideshowSpeed:2e3,animationSpeed:500,pauseOnHover:!0,controlNav:!1,directionNav:!0,prevText:"Previous",nextText:"Next",randomize:!1,touch:!0,video:!0},n=function(){Preloader.init(),SmoothScroll.init(),Animated.init(),Slider.init(t),SlickSlider.init(),Lightbox.init()};return{init:n}}(jQuery);jQuery(document).ready(function(){Control.init()});