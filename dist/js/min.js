/**
 * FingerprintJS v4.2.1 - Copyright (c) FingerprintJS, Inc, 2023 (https://fingerprint.com)
 *
 * Licensed under Business Source License 1.1 https://mariadb.com/bsl11/
 * Licensor: FingerprintJS, Inc.
 * Licensed Work: FingerprintJS browser fingerprinting library
 * Additional Use Grant: None
 * Change Date: Four years from first release for the specific version.
 * Change License: MIT, text at https://opensource.org/license/mit/ with the following copyright notice:
 * Copyright 2015-present FingerprintJS, Inc.
 */
var FingerprintJS=function(e){"use strict";var n=function(){return n=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)};function t(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function r(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(u){c=[6,u],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function o(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function i(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))}function a(){return i(0)}function c(e){return!!e&&"function"==typeof e.then}function u(e,n){try{var t=e();c(t)?t.then((function(e){return n(!0,e)}),(function(e){return n(!1,e)})):n(!0,t)}catch(r){n(!1,r)}}function s(e,n,o){return void 0===o&&(o=16),t(this,void 0,void 0,(function(){var t,a,c,u;return r(this,(function(r){switch(r.label){case 0:t=Array(e.length),a=Date.now(),c=0,r.label=1;case 1:return c<e.length?(t[c]=n(e[c],c),(u=Date.now())>=a+o?(a=u,[4,i(0)]):[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return++c,[3,1];case 4:return[2,t]}}))}))}function l(e){e.then(void 0,(function(){}))}function d(e){return parseInt(e)}function f(e){return parseFloat(e)}function m(e,n){return"number"==typeof e&&isNaN(e)?n:e}function v(e){return e.reduce((function(e,n){return e+(n?1:0)}),0)}function h(e,n){if(void 0===n&&(n=1),Math.abs(n)>=1)return Math.round(e/n)*n;var t=1/n;return Math.round(e*t)/t}function p(e,n){var t=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=n[0]>>>16,c=65535&n[0],u=n[1]>>>16,s=0,l=0,d=0,f=0;d+=(f+=i+(65535&n[1]))>>>16,f&=65535,l+=(d+=o+u)>>>16,d&=65535,s+=(l+=r+c)>>>16,l&=65535,s+=t+a,s&=65535,e[0]=s<<16|l,e[1]=d<<16|f}function b(e,n){var t=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=n[0]>>>16,c=65535&n[0],u=n[1]>>>16,s=65535&n[1],l=0,d=0,f=0,m=0;f+=(m+=i*s)>>>16,m&=65535,d+=(f+=o*s)>>>16,f&=65535,d+=(f+=i*u)>>>16,f&=65535,l+=(d+=r*s)>>>16,d&=65535,l+=(d+=o*u)>>>16,d&=65535,l+=(d+=i*c)>>>16,d&=65535,l+=t*s+r*u+o*c+i*a,l&=65535,e[0]=l<<16|d,e[1]=f<<16|m}function y(e,n){var t=e[0];32===(n%=64)?(e[0]=e[1],e[1]=t):n<32?(e[0]=t<<n|e[1]>>>32-n,e[1]=e[1]<<n|t>>>32-n):(n-=32,e[0]=e[1]<<n|t>>>32-n,e[1]=t<<n|e[1]>>>32-n)}function g(e,n){0!==(n%=64)&&(n<32?(e[0]=e[1]>>>32-n,e[1]=e[1]<<n):(e[0]=e[1]<<n-32,e[1]=0))}function w(e,n){e[0]^=n[0],e[1]^=n[1]}var L=[4283543511,3981806797],k=[3301882366,444984403];function V(e){var n=[0,e[0]>>>1];w(e,n),b(e,L),n[1]=e[0]>>>1,w(e,n),b(e,k),n[1]=e[0]>>>1,w(e,n)}var S=[2277735313,289559509],W=[1291169091,658871167],Z=[0,5],x=[0,1390208809],M=[0,944331445];function F(e,n){var t=function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r>127)return(new TextEncoder).encode(e);n[t]=r}return n}(e);n=n||0;var r,o=[0,t.length],i=o[1]%16,a=o[1]-i,c=[0,n],u=[0,n],s=[0,0],l=[0,0];for(r=0;r<a;r+=16)s[0]=t[r+4]|t[r+5]<<8|t[r+6]<<16|t[r+7]<<24,s[1]=t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24,l[0]=t[r+12]|t[r+13]<<8|t[r+14]<<16|t[r+15]<<24,l[1]=t[r+8]|t[r+9]<<8|t[r+10]<<16|t[r+11]<<24,b(s,S),y(s,31),b(s,W),w(c,s),y(c,27),p(c,u),b(c,Z),p(c,x),b(l,W),y(l,33),b(l,S),w(u,l),y(u,31),p(u,c),b(u,Z),p(u,M);s[0]=0,s[1]=0,l[0]=0,l[1]=0;var d=[0,0];switch(i){case 15:d[1]=t[r+14],g(d,48),w(l,d);case 14:d[1]=t[r+13],g(d,40),w(l,d);case 13:d[1]=t[r+12],g(d,32),w(l,d);case 12:d[1]=t[r+11],g(d,24),w(l,d);case 11:d[1]=t[r+10],g(d,16),w(l,d);case 10:d[1]=t[r+9],g(d,8),w(l,d);case 9:d[1]=t[r+8],w(l,d),b(l,W),y(l,33),b(l,S),w(u,l);case 8:d[1]=t[r+7],g(d,56),w(s,d);case 7:d[1]=t[r+6],g(d,48),w(s,d);case 6:d[1]=t[r+5],g(d,40),w(s,d);case 5:d[1]=t[r+4],g(d,32),w(s,d);case 4:d[1]=t[r+3],g(d,24),w(s,d);case 3:d[1]=t[r+2],g(d,16),w(s,d);case 2:d[1]=t[r+1],g(d,8),w(s,d);case 1:d[1]=t[r],w(s,d),b(s,S),y(s,31),b(s,W),w(c,s)}return w(c,o),w(u,o),p(c,u),p(u,c),V(c),V(u),p(c,u),p(u,c),("00000000"+(c[0]>>>0).toString(16)).slice(-8)+("00000000"+(c[1]>>>0).toString(16)).slice(-8)+("00000000"+(u[0]>>>0).toString(16)).slice(-8)+("00000000"+(u[1]>>>0).toString(16)).slice(-8)}function R(e){return"function"!=typeof e}function G(e,n,o){var i=Object.keys(e).filter((function(e){return!function(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return!0;return!1}(o,e)})),a=s(i,(function(t){return function(e,n){var t=new Promise((function(t){var r=Date.now();u(e.bind(null,n),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=Date.now()-r;if(!e[0])return t((function(){return{error:e[1],duration:o}}));var i=e[1];if(R(i))return t((function(){return{value:i,duration:o}}));t((function(){return new Promise((function(e){var n=Date.now();u(i,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=o+Date.now()-n;if(!t[0])return e({error:t[1],duration:i});e({value:t[1],duration:i})}))}))}))}))}));return l(t),function(){return t.then((function(e){return e()}))}}(e[t],n)}));return l(a),function(){return t(this,void 0,void 0,(function(){var e,n,t,o;return r(this,(function(r){switch(r.label){case 0:return[4,a];case 1:return[4,s(r.sent(),(function(e){var n=e();return l(n),n}))];case 2:return e=r.sent(),[4,Promise.all(e)];case 3:for(n=r.sent(),t={},o=0;o<i.length;++o)t[i[o]]=n[o];return[2,t]}}))}))}}function I(){var e=window,n=navigator;return v(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in n,"msPointerEnabled"in n])>=4}function Y(){var e=window,n=navigator;return v(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in n,"msSaveBlob"in n])>=3&&!I()}function j(){var e=window,n=navigator;return v(["webkitPersistentStorage"in n,"webkitTemporaryStorage"in n,0===n.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function X(){var e=window,n=navigator;return v(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===n.vendor.indexOf("Apple"),"getStorageUpdates"in n,"WebKitMediaKeys"in e])>=4}function P(){var e=window,n=e.HTMLElement,t=e.Document;return v(["safari"in e,!("ongestureend"in e),!("TouchEvent"in e),!("orientation"in e),n&&!("autocapitalize"in n.prototype),t&&"pointerLockElement"in t.prototype])>=4}function C(){var e,n=window;return e=n.print,!!/^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))&&v(["[object WebPageNamespace]"===String(n.browser),"MicrodataExtractor"in n])>=1}function E(){var e,n,t=window;return v(["buildID"in navigator,"MozAppearance"in(null!==(n=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==n?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}function H(){var e=window,n=navigator,t=e.CSS,r=e.HTMLButtonElement;return v([!("getStorageUpdates"in n),r&&"popover"in r.prototype,"CSSCounterStyleRule"in e,t.supports("font-size-adjust: ex-height 0.5"),t.supports("text-transform: full-width")])>=4}function A(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function N(){var e=j(),n=E(),t=window,r=navigator,o="connection";return e?v([!("SharedWorker"in t),r[o]&&"ontypechange"in r[o],!("sinkId"in new window.Audio)])>=2:!!n&&v(["onorientationchange"in t,"orientation"in t,/android/i.test(navigator.appVersion)])>=2}function J(e,n,o){var a,c,u;return void 0===o&&(o=50),t(this,void 0,void 0,(function(){var t,s;return r(this,(function(r){switch(r.label){case 0:t=document,r.label=1;case 1:return t.body?[3,3]:[4,i(o)];case 2:return r.sent(),[3,1];case 3:s=t.createElement("iframe"),r.label=4;case 4:return r.trys.push([4,,10,11]),[4,new Promise((function(e,r){var o=!1,i=function(){o=!0,e()};s.onload=i,s.onerror=function(e){o=!0,r(e)};var a=s.style;a.setProperty("display","block","important"),a.position="absolute",a.top="0",a.left="0",a.visibility="hidden",n&&"srcdoc"in s?s.srcdoc=n:s.src="about:blank",t.body.appendChild(s);var c=function(){var e,n;o||("complete"===(null===(n=null===(e=s.contentWindow)||void 0===e?void 0:e.document)||void 0===n?void 0:n.readyState)?i():setTimeout(c,10))};c()}))];case 5:r.sent(),r.label=6;case 6:return(null===(c=null===(a=s.contentWindow)||void 0===a?void 0:a.document)||void 0===c?void 0:c.body)?[3,8]:[4,i(o)];case 7:return r.sent(),[3,6];case 8:return[4,e(s,s.contentWindow)];case 9:return[2,r.sent()];case 10:return null===(u=s.parentNode)||void 0===u||u.removeChild(s),[7];case 11:return[2]}}))}))}function T(e){for(var n=function(e){for(var n,t,r="Unexpected syntax '".concat(e,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(e),i=o[1]||void 0,a={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,n){a[e]=a[e]||[],a[e].push(n)};;){var s=c.exec(o[2]);if(!s)break;var l=s[0];switch(l[0]){case".":u("class",l.slice(1));break;case"#":u("id",l.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(!d)throw new Error(r);u(d[1],null!==(t=null!==(n=d[4])&&void 0!==n?n:d[5])&&void 0!==t?t:"");break;default:throw new Error(r)}}return[i,a]}(e),t=n[0],r=n[1],o=document.createElement(null!=t?t:"div"),i=0,a=Object.keys(r);i<a.length;i++){var c=a[i],u=r[c].join(" ");"style"===c?D(o.style,u):o.setAttribute(c,u)}return o}function D(e,n){for(var t=0,r=n.split(";");t<r.length;t++){var o=r[t],i=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(i){var a=i[1],c=i[2],u=i[4];e.setProperty(a,c,u||"")}}}var _=44100;function z(){return t(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(a){switch(a.label){case 0:return n=new Promise((function(e){var n=document,t="visibilitychange",r=function(){n.hidden||(n.removeEventListener(t,r),e())};n.addEventListener(t,r),r()})).then((function(){return i(500)})),o=function(){return t(this,void 0,void 0,(function(){var e,n,t,o,i,a,c;return r(this,(function(r){switch(r.label){case 0:return e=window,(n=e.OfflineAudioContext||e.webkitOfflineAudioContext)?B()?[2,-1]:[4,O(n)]:[2,-2];case 1:return(t=r.sent())?(o=new n(1,t.length-1+4e4,_),(i=o.createBufferSource()).buffer=t,i.loop=!0,i.loopStart=(t.length-1)/_,i.loopEnd=t.length/_,i.connect(o.destination),i.start(),[4,U(o)]):[2,-3];case 2:return(a=r.sent())?(c=function(e,n){for(var t=void 0,r=!1,o=0;o<n.length;o+=Math.floor(n.length/10))if(0===n[o]);else if(void 0===t)t=n[o];else if(t!==n[o]){r=!0;break}void 0===t?t=e.getChannelData(0)[e.length-1]:r&&(t=function(e){for(var n=1/0,t=-1/0,r=0;r<e.length;r++){var o=e[r];0!==o&&(o<n&&(n=o),o>t&&(t=o))}return(n+t)/2}(n));return t}(t,a.getChannelData(0).subarray(t.length-1)),[2,Math.abs(c)]):[2,-3]}}))}))}().then((function(n){return e=[!0,n]}),(function(n){return e=[!1,n]})),[4,Promise.race([n,o])];case 1:return a.sent(),[2,function(){if(!e)return-3;if(!e[0])throw e[1];return e[1]}]}}))}))}function B(){return X()&&!P()&&!(v(["DOMRectList"in(e=window),"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3);var e}function O(e){return t(this,void 0,void 0,(function(){var n,t,o,i;return r(this,(function(r){switch(r.label){case 0:return 3395,n=new e(1,3396,_),(t=n.createOscillator()).type="square",t.frequency.value=1e3,(o=n.createDynamicsCompressor()).threshold.value=-70,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,(i=n.createBiquadFilter()).type="allpass",i.frequency.value=5.239622852977861,i.Q.value=.1,t.connect(o),o.connect(i),i.connect(n.destination),t.start(0),[4,U(n)];case 1:return[2,r.sent()]}}))}))}function U(e){return new Promise((function(n,t){var r=25;e.oncomplete=function(e){return n(e.renderedBuffer)};var o=function(){try{var i=e.startRendering();c(i)&&l(i),"suspended"===e.state&&(document.hidden||r--,r>0?setTimeout(o,200):n(null))}catch(a){t(a)}};o()}))}var Q=["monospace","sans-serif","serif"],K=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function q(e){return t(this,void 0,void 0,(function(){var n,t,o,i,a,c,u;return r(this,(function(r){switch(r.label){case 0:return n=!1,i=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),a=i[0],c=i[1],function(e,n){return!(!n||!e.toDataURL)}(a,c)?[3,1]:(t=o="unsupported",[3,4]);case 1:return n=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(c),e?(t=o="skipped",[3,4]):[3,2];case 2:return[4,$(a,c)];case 3:u=r.sent(),t=u[0],o=u[1],r.label=4;case 4:return[2,{winding:n,geometry:t,text:o}]}}))}))}function $(e,n){return t(this,void 0,void 0,(function(){var t,o,i;return r(this,(function(r){switch(r.label){case 0:return function(e,n){e.width=240,e.height=60,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(100,1,62,20),n.fillStyle="#069",n.font='11pt "Times New Roman"';var t="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(t,4,45)}(e,n),[4,a()];case 1:return r.sent(),t=ee(e),o=ee(e),t!==o?[2,["unstable","unstable"]]:(function(e,n){e.width=122,e.height=110,n.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var o=r[t],i=o[0],a=o[1],c=o[2];n.fillStyle=i,n.beginPath(),n.arc(a,c,40,0,2*Math.PI,!0),n.closePath(),n.fill()}n.fillStyle="#f9c",n.arc(60,60,60,0,2*Math.PI,!0),n.arc(60,60,20,0,2*Math.PI,!0),n.fill("evenodd")}(e,n),[4,a()]);case 2:return r.sent(),i=ee(e),[2,[t,i]]}}))}))}function ee(e){return e.toDataURL()}function ne(){var e=screen,n=function(e){return m(d(e),null)},t=[n(e.width),n(e.height)];return t.sort().reverse(),t}var te,re;function oe(){var e=this;return function(){if(void 0===re){var e=function(){var n=ie();ae(n)?re=setTimeout(e,2500):(te=n,re=void 0)};e()}}(),function(){return t(e,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return ae(e=ie())?te?[2,o([],te,!0)]:A()?[4,(t=document,(t.exitFullscreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen).call(t))]:[3,2]:[3,2];case 1:n.sent(),e=ie(),n.label=2;case 2:return ae(e)||(te=e),[2,e]}var t}))}))}}function ie(){var e=screen;return[m(f(e.availTop),null),m(f(e.width)-f(e.availWidth)-m(f(e.availLeft),0),null),m(f(e.height)-f(e.availHeight)-m(f(e.availTop),0),null),m(f(e.availLeft),null)]}function ae(e){for(var n=0;n<4;++n)if(e[n])return!1;return!0}function ce(e){var n;return t(this,void 0,void 0,(function(){var t,o,c,u,s,l,d;return r(this,(function(r){switch(r.label){case 0:for(t=document,o=t.createElement("div"),c=new Array(e.length),u={},ue(o),d=0;d<e.length;++d)"DIALOG"===(s=T(e[d])).tagName&&s.show(),ue(l=t.createElement("div")),l.appendChild(s),o.appendChild(l),c[d]=s;r.label=1;case 1:return t.body?[3,3]:[4,i(50)];case 2:return r.sent(),[3,1];case 3:return t.body.appendChild(o),[4,a()];case 4:r.sent();try{for(d=0;d<e.length;++d)c[d].offsetParent||(u[e[d]]=!0)}finally{null===(n=o.parentNode)||void 0===n||n.removeChild(o)}return[2,u]}}))}))}function ue(e){e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","block","important")}function se(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function le(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}function de(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function fe(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function me(e){return matchMedia("(prefers-reduced-transparency: ".concat(e,")")).matches}function ve(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var he=Math,pe=function(){return 0};var be={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};function ye(e){if(e instanceof Error){if("InvalidAccessError"===e.name){if(/\bfrom\b.*\binsecure\b/i.test(e.message))return-2;if(/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))return-3}if("SecurityError"===e.name&&/\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message))return-3}throw e}var ge=new Set([10752,2849,2884,2885,2886,2928,2929,2930,2931,2932,2960,2961,2962,2963,2964,2965,2966,2967,2968,2978,3024,3042,3088,3089,3106,3107,32773,32777,32777,32823,32824,32936,32937,32938,32939,32968,32969,32970,32971,3317,33170,3333,3379,3386,33901,33902,34016,34024,34076,3408,3410,3411,3412,3413,3414,3415,34467,34816,34817,34818,34819,34877,34921,34930,35660,35661,35724,35738,35739,36003,36004,36005,36347,36348,36349,37440,37441,37443,7936,7937,7938]),we=new Set([34047,35723,36063,34852,34853,34854,34229,36392,36795,38449]),Le=["FRAGMENT_SHADER","VERTEX_SHADER"],ke=["LOW_FLOAT","MEDIUM_FLOAT","HIGH_FLOAT","LOW_INT","MEDIUM_INT","HIGH_INT"],Ve="WEBGL_debug_renderer_info";function Se(e){if(e.webgl)return e.webgl.context;var n,t=document.createElement("canvas");t.addEventListener("webglCreateContextError",(function(){return n=void 0}));for(var r=0,o=["webgl","experimental-webgl"];r<o.length;r++){var i=o[r];try{n=t.getContext(i)}catch(a){}if(n)break}return e.webgl={context:n},n}function We(e,n,t){var r=e.getShaderPrecisionFormat(e[n],e[t]);return r?[r.rangeMin,r.rangeMax,r.precision]:[]}function Ze(e){return Object.keys(e.__proto__).filter(xe)}function xe(e){return"string"==typeof e&&!e.match(/[^A-Z0-9_x]/)}function Me(){return E()}function Fe(e){return"function"==typeof e.getParameter}var Re={fonts:function(){var e=this;return J((function(n,o){var i=o.document;return t(e,void 0,void 0,(function(){var e,n,t,o,c,u,s,l,d,f,m;return r(this,(function(r){switch(r.label){case 0:return(e=i.body).style.fontSize="48px",(n=i.createElement("div")).style.setProperty("visibility","hidden","important"),t={},o={},c=function(e){var t=i.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,t.textContent="mmMwWLliI0O&1",n.appendChild(t),t},u=function(e,n){return c("'".concat(e,"',").concat(n))},s=function(){for(var e={},n=function(n){e[n]=Q.map((function(e){return u(n,e)}))},t=0,r=K;t<r.length;t++){n(r[t])}return e},l=function(e){return Q.some((function(n,r){return e[r].offsetWidth!==t[n]||e[r].offsetHeight!==o[n]}))},d=function(){return Q.map(c)}(),f=s(),e.appendChild(n),[4,a()];case 1:for(r.sent(),m=0;m<Q.length;m++)t[Q[m]]=d[m].offsetWidth,o[Q[m]]=d[m].offsetHeight;return[2,K.filter((function(e){return l(f[e])}))]}}))}))}))},domBlockers:function(e){var n=(void 0===e?{}:e).debug;return t(this,void 0,void 0,(function(){var e,t,o,i,a;return r(this,(function(r){switch(r.label){case 0:return X()||N()?(c=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},t=Object.keys(e),[4,ce((a=[]).concat.apply(a,t.map((function(n){return e[n]}))))]):[2,void 0];case 1:return o=r.sent(),n&&function(e,n){for(var t="DOM blockers debug:\n```",r=0,o=Object.keys(e);r<o.length;r++){var i=o[r];t+="\n".concat(i,":");for(var a=0,c=e[i];a<c.length;a++){var u=c[a];t+="\n  ".concat(n[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(t,"\n```"))}(e,o),(i=t.filter((function(n){var t=e[n];return v(t.map((function(e){return o[e]})))>.6*t.length}))).sort(),[2,i]}var c}))}))},fontPreferences:function(){return function(e,n){void 0===n&&(n=4e3);return J((function(t,r){var i=r.document,a=i.body,c=a.style;c.width="".concat(n,"px"),c.webkitTextSizeAdjust=c.textSizeAdjust="none",j()?a.style.zoom="".concat(1/r.devicePixelRatio):X()&&(a.style.zoom="reset");var u=i.createElement("div");return u.textContent=o([],Array(n/20<<0),!0).map((function(){return"word"})).join(" "),a.appendChild(u),e(i,a)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,n){for(var t={},r={},o=0,i=Object.keys(be);o<i.length;o++){var a=i[o],c=be[a],u=c[0],s=void 0===u?{}:u,l=c[1],d=void 0===l?"mmMwWLliI0fiflO&1":l,f=e.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var m=0,v=Object.keys(s);m<v.length;m++){var h=v[m],p=s[h];void 0!==p&&(f.style[h]=p)}t[a]=f,n.append(e.createElement("br"),f)}for(var b=0,y=Object.keys(be);b<y.length;b++){r[a=y[b]]=t[a].getBoundingClientRect().width}return r}))},audio:function(){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return[4,z()];case 1:return e=n.sent(),[2,function(){return function(e,n){if(0===e)return e;var t=Math.floor(Math.log10(Math.abs(e)))-Math.floor(n)+1,r=Math.pow(10,-t)*(10*n%10||1);return Math.round(e*r)/r}(e(),6.2)}]}}))}))},screenFrame:function(){var e=this;if(X()&&H()&&C())return function(){return Promise.resolve(void 0)};var n=oe();return function(){return t(e,void 0,void 0,(function(){var e,t;return r(this,(function(r){switch(r.label){case 0:return[4,n()];case 1:return e=r.sent(),[2,[(t=function(e){return null===e?null:h(e,10)})(e[0]),t(e[1]),t(e[2]),t(e[3])]]}}))}))}},canvas:function(){return q(X()&&H()&&C())},osCpu:function(){return navigator.oscpu},languages:function(){var e,n=navigator,t=[],r=n.language||n.userLanguage||n.browserLanguage||n.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(n.languages))j()&&v([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||t.push(n.languages);else if("string"==typeof n.languages){var o=n.languages;o&&t.push(o.split(","))}return t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return m(f(navigator.deviceMemory),void 0)},screenResolution:function(){if(!(X()&&H()&&C()))return ne()},hardwareConcurrency:function(){return m(d(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,n=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(n){var t=(new n).resolvedOptions().timeZone;if(t)return t}var r,o=(r=(new Date).getFullYear(),-Math.max(f(new Date(r,0,1).getTimezoneOffset()),f(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(Math.abs(o))},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!I()&&!Y())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&X()&&!P()?function(){if("iPad"===navigator.platform)return!0;var e=screen,n=e.width/e.height;return v(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,n>.65&&n<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var n=[],t=0;t<e.length;++t){var r=e[t];if(r){for(var o=[],i=0;i<r.length;++i){var a=r[i];o.push({type:a.type,suffixes:a.suffixes})}n.push({name:r.name,description:r.description,mimeTypes:o})}}return n}},touchSupport:function(){var e,n=navigator,t=0;void 0!==n.maxTouchPoints?t=d(n.maxTouchPoints):void 0!==n.msMaxTouchPoints&&(t=n.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(r){e=!1}return{maxTouchPoints:t,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],n=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];n<t.length;n++){var r=t[n],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var n=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(t){return!1}},colorGamut:function(){for(var e=0,n=["rec2020","p3","srgb"];e<n.length;e++){var t=n[e];if(matchMedia("(color-gamut: ".concat(t,")")).matches)return t}},invertedColors:function(){return!!se("inverted")||!se("none")&&void 0},forcedColors:function(){return!!le("active")||!le("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}},contrast:function(){return de("no-preference")?0:de("high")||de("more")?1:de("low")||de("less")?-1:de("forced")?10:void 0},reducedMotion:function(){return!!fe("reduce")||!fe("no-preference")&&void 0},reducedTransparency:function(){return!!me("reduce")||!me("no-preference")&&void 0},hdr:function(){return!!ve("high")||!ve("standard")&&void 0},math:function(){var e,n=he.acos||pe,t=he.acosh||pe,r=he.asin||pe,o=he.asinh||pe,i=he.atanh||pe,a=he.atan||pe,c=he.sin||pe,u=he.sinh||pe,s=he.cos||pe,l=he.cosh||pe,d=he.tan||pe,f=he.tanh||pe,m=he.exp||pe,v=he.expm1||pe,h=he.log1p||pe;return{acos:n(.12312423423423424),acosh:t(1e308),acoshPf:(e=1e154,he.log(e+he.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:function(e){return he.log(e+he.sqrt(e*e+1))}(1),atanh:i(.5),atanhPf:function(e){return he.log((1+e)/(1-e))/2}(.5),atan:a(.5),sin:c(-1e300),sinh:u(1),sinhPf:function(e){return he.exp(e)-1/he.exp(e)/2}(1),cos:s(10.000000000123),cosh:l(1),coshPf:function(e){return(he.exp(e)+1/he.exp(e))/2}(1),tan:d(-1e300),tanh:f(1),tanhPf:function(e){return(he.exp(2*e)-1)/(he.exp(2*e)+1)}(1),exp:m(1),expm1:v(1),expm1Pf:function(e){return he.exp(e)-1}(1),log1p:h(10),log1pPf:function(e){return he.log(1+e)}(10),powPI:function(e){return he.pow(he.PI,e)}(-100)}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var e=new Float32Array(1),n=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],n[3]},applePay:function(){var e=window.ApplePaySession;if("function"!=typeof(null==e?void 0:e.canMakePayments))return-1;try{return e.canMakePayments()?1:0}catch(n){return ye(n)}},privateClickMeasurement:function(){var e,n=document.createElement("a"),t=null!==(e=n.attributionSourceId)&&void 0!==e?e:n.attributionsourceid;return void 0===t?void 0:String(t)},webGlBasics:function(e){var n,t,r,o,i,a,c=Se(e.cache);if(!c)return-1;if(!Fe(c))return-2;var u=Me()?null:c.getExtension(Ve);return{version:(null===(n=c.getParameter(c.VERSION))||void 0===n?void 0:n.toString())||"",vendor:(null===(t=c.getParameter(c.VENDOR))||void 0===t?void 0:t.toString())||"",vendorUnmasked:u?null===(r=c.getParameter(u.UNMASKED_VENDOR_WEBGL))||void 0===r?void 0:r.toString():"",renderer:(null===(o=c.getParameter(c.RENDERER))||void 0===o?void 0:o.toString())||"",rendererUnmasked:u?null===(i=c.getParameter(u.UNMASKED_RENDERER_WEBGL))||void 0===i?void 0:i.toString():"",shadingLanguageVersion:(null===(a=c.getParameter(c.SHADING_LANGUAGE_VERSION))||void 0===a?void 0:a.toString())||""}},webGlExtensions:function(e){var n=Se(e.cache);if(!n)return-1;if(!Fe(n))return-2;var t=n.getSupportedExtensions(),r=n.getContextAttributes(),o=[],i=[],a=[],c=[];if(r)for(var u=0,s=Object.keys(r);u<s.length;u++){var l=s[u];o.push("".concat(l,"=").concat(r[l]))}for(var d=0,f=Ze(n);d<f.length;d++){var m=n[w=f[d]];i.push("".concat(w,"=").concat(m).concat(ge.has(m)?"=".concat(n.getParameter(m)):""))}if(t)for(var v=0,h=t;v<h.length;v++){var p=h[v];if(p!==Ve||!Me()){var b=n.getExtension(p);if(b)for(var y=0,g=Ze(b);y<g.length;y++){var w;m=b[w=g[y]];a.push("".concat(w,"=").concat(m).concat(we.has(m)?"=".concat(n.getParameter(m)):""))}}}for(var L=0,k=Le;L<k.length;L++)for(var V=k[L],S=0,W=ke;S<W.length;S++){var Z=W[S],x=We(n,V,Z);c.push("".concat(V,".").concat(Z,"=").concat(x.join(",")))}return a.sort(),i.sort(),{contextAttributes:o,parameters:i,shaderPrecisions:c,extensions:t,extensionParameters:a}}};function Ge(e){var n=function(e){if(N())return.4;if(X())return!P()||H()&&C()?.3:.5;var n="value"in e.platform?e.platform.value:"";if(/^Win/.test(n))return.6;if(/^Mac/.test(n))return.5;return.7}(e),t=function(e){return h(.99+.01*e,1e-4)}(n);return{score:n,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,"".concat(t))}}function Ie(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?n({name:(r=t).name,message:r.message,stack:null===(o=r.stack)||void 0===o?void 0:o.split("\n")},r):t;var r,o}),2)}function Ye(e){return F(function(e){for(var n="",t=0,r=Object.keys(e).sort();t<r.length;t++){var o=r[t],i=e[o],a="error"in i?"error":JSON.stringify(i.value);n+="".concat(n?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(a)}return n}(e))}function je(e){return void 0===e&&(e=50),function(e,n){void 0===n&&(n=1/0);var t=window.requestIdleCallback;return t?new Promise((function(e){return t.call(window,(function(){return e()}),{timeout:n})})):i(Math.min(e,n))}(e,2*e)}function Xe(e,n){var o=Date.now();return{get:function(i){return t(this,void 0,void 0,(function(){var t,a,c;return r(this,(function(r){switch(r.label){case 0:return t=Date.now(),[4,e()];case 1:return a=r.sent(),c=function(e){var n;return{get visitorId(){return void 0===n&&(n=Ye(this.components)),n},set visitorId(e){n=e},confidence:Ge(e),components:e,version:"4.2.1"}}(a),(n||(null==i?void 0:i.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(t-o,"\nvisitorId: ").concat(c.visitorId,"\ncomponents: ").concat(Ie(a),"\n```")),[2,c]}}))}))}}}function Pe(e){return void 0===e&&(e={}),t(this,void 0,void 0,(function(){var n,t,o;return r(this,(function(r){switch(r.label){case 0:return e.monitoring,n=e.delayFallback,t=e.debug,[4,je(n)];case 1:return r.sent(),o=function(e){return G(Re,e,[])}({cache:{},debug:t}),[2,Xe(o,t)]}}))}))}var Ce={load:Pe,hashComponents:Ye,componentsToDebugString:Ie},Ee=F;return e.componentsToDebugString=Ie,e.default=Ce,e.doesBrowserSuspendAudioContext=B,e.getFullscreenElement=A,e.getUnstableAudioFingerprint=z,e.getUnstableCanvasFingerprint=q,e.getUnstableScreenFrame=oe,e.getUnstableScreenResolution=ne,e.getWebGLContext=Se,e.handleApplePayError=ye,e.hashComponents=Ye,e.isAndroid=N,e.isChromium=j,e.isDesktopWebKit=P,e.isEdgeHTML=Y,e.isGecko=E,e.isTrident=I,e.isWebKit=X,e.load=Pe,e.loadSources=G,e.murmurX64Hash128=Ee,e.prepareForSources=je,e.renderAudio=U,e.sources=Re,e.transformSource=function(e,n){var t=function(e){return R(e)?n(e):function(){var t=e();return c(t)?t.then(n):n(t)}};return function(n){var r=e(n);return c(r)?r.then(t):t(r)}},e.withIframe=J,Object.defineProperty(e,"__esModule",{value:!0}),e}({});