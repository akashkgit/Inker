;
(self.AMP=self.AMP||[]).push({m:1,v:"2307272333000",n:"amp-ad-exit",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,{isArray:e}=Array,{hasOwnProperty:i,toString:r}=Object.prototype;function o(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,r=new Error(e);for(const n in t)r[n]=t[n];return r.stack=i,r}function s(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=o(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function c(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function u(t){return JSON.parse(t)}var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function a(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function f(t){const{location:n}=t||self;return function(t){const n=function(t){const n=Object.create(null);return n}();if(!t)return n;let e;for(;e=l.exec(t);){const t=a(e[1],e[1]),i=e[2]?a(e[2].replace(/\+/g," "),e[2]):"";n[t]=i}return n}(n.originalHash||n.hash)}var h="";function p(t){var n;return h||(h=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012307272333000"),h}function v(t,n){const e=n||f(t);return["1","actions","amp","amp4ads","amp4email"].includes(e.development)||!!t.AMP_DEV_MODE}new RegExp("^https://([a-zA-Z0-9_-]+.)?cdn.ampproject.org(/.*)?$"),new RegExp("^([a-zA-Z0-9_-]+.)?localhost$"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMP_LOG;function m(t,n){throw new Error("failed to call initLogConstructor")}function b(t){return d.user||(d.user=g()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(d.user.win,t)?d.userForEmbed||(d.userForEmbed=g()):d.user}function g(t){return m()}function y(){return d.dev||(d.dev=m())}function _(t,n,e,i,r,o,s,c,u,l,a){return t}function A(t,n,e,i,r,o,s,c,u,l,a){return b().assert(t,n,e,i,r,o,s,c,u,l,a)}function R(t,n,e,i){const r=j(t),o=E(r);!function(t,n,e,i,r,o){const s=P(t);let c=s[e];c||(c=s[e]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),c.ctor||(c.ctor=i,c.context=n,c.sharedInstance=!1,c.resolve&&S(t,e))}(o,r,n,e),i&&S(o,n)}function I(t,n,e){!function(t,n,e){const i=P(t),r=i[n];r?r.reject&&r.reject(e):(i[n]=x(),i[n].reject(e))}(E(j(t)),n,e)}function T(t,n){return function(t,n){const e=function(t,n){const e=P(t)[n];return e?e.promise?e.promise:(S(t,n),e.promise=Promise.resolve(e.obj)):null}(t,n);if(e)return e;const i=P(t);return i[n]=x(),i[n].promise}(E(t),n)}function O(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function j(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return S(t=O(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function E(t){const n=j(t);return n.isSingleDoc()?n.win:n}function S(t,n){_(w(t,n));const e=P(t)[n];return e.obj||(_(e.ctor),_(e.context),e.obj=new e.ctor(e.context),_(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function P(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function w(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}function x(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:e,resolve:i}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:i,reject:e,context:null,ctor:null}}var C="host-visibility",D="host-fullscreen",F="host-exit",M=class{static isAvailable(t){return!!(n=t,j(n)).getHeadNode().querySelector("script[host-service]");var n}static visibilityForDoc(t){return T(t,C)}static installVisibilityServiceForDoc(t,n){R(t,C,n,!0)}static rejectVisibilityServiceForDoc(t,n){I(t,C,n)}static fullscreenForDoc(t){return T(t,D)}static installFullscreenServiceForDoc(t,n){R(t,D,n,!0)}static rejectFullscreenServiceForDoc(t,n){I(t,D,n)}static exitForDoc(t){return T(t,F)}static installExitServiceForDoc(t,n){R(t,F,n,!0)}static rejectExitServiceForDoc(t,n){I(t,F,n)}},L="clickDelay",N="clickLocation",$="inactiveElement",V=class{constructor(t,n){this.name=t,this.type=n}filter(t){}onLayoutMeasure(){}};function U(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function G(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(Object(e),!0).forEach((function(n){U(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var z={"bg":"https://tpc.googlesyndication.com/b4a/b4a-runner.html","moat":"https://z.moatads.com/ampanalytics093284/iframe.html"},B=(G(G({},z),{},{"bg":"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"}),z);function K(t,n,e){if(A("string"==typeof n.finalUrl,"finalUrl of target '%s' must be a string",t),n.filters&&n.filters.forEach((t=>{A(e.filters[t],"filter '%s' not defined",t)})),n.vars){const t=/^_[a-zA-Z0-9_-]+$/;for(const e in n.vars)A(t.test(e),"'%s' must match the pattern '%s'",e,t)}}function J(t){return b().assertString(B[t],`Unknown or invalid vendor ${t}, note that vendor must use transport: iframe`)}var Z=class extends V{constructor(t,n,e){super(t,n.type),A(n.type==L&&"number"==typeof n.delay&&n.delay>0,"Invalid ClickDelay spec"),this.spec=n,this.intervalStart=Date.now(),n.startTimingEvent&&e.performance&&e.performance.timing&&(null==e.performance.timing[n.startTimingEvent]||(this.intervalStart=e.performance.timing[n.startTimingEvent]))}filter(){return Date.now()-this.intervalStart>=this.spec.delay}};function X(t,n){return{type:L,delay:t,startTimingEvent:n}}var Y,H=class extends V{constructor(t,n,e){super(t,n.type),A(function(t){return!(t.type!=N||void 0!==t.left&&"number"!=typeof t.left||void 0!==t.right&&"number"!=typeof t.right||void 0!==t.top&&"number"!=typeof t.top||void 0!==t.bottom&&"number"!=typeof t.bottom||void 0!==t.relativeTo&&"string"!=typeof t.relativeTo)}(n),"Invaid ClickLocation spec"),this.cR=n.left||0,this.uR=n.right||0,this.lR=n.top||0,this.aR=n.bottom||0,this.fR=n.relativeTo,this.hR=e,this.pR={top:0,right:0,bottom:0,left:0}}filter(t){return t.clientX>=this.pR.left&&t.clientX<=this.pR.right&&t.clientY>=this.pR.top&&t.clientY<=this.pR.bottom}onLayoutMeasure(){this.hR.getVsync().measure((()=>{const{win:t}=this.hR;if(this.fR){const n=t.document.querySelector(this.fR);A(n,`relativeTo element ${this.fR} not found.`);const e=n.getBoundingClientRect();this.pR.left=e.left,this.pR.top=e.top,this.pR.bottom=e.bottom,this.pR.right=e.right}else this.pR.left=0,this.pR.top=0,this.pR.bottom=t.innerHeight,this.pR.right=t.innerWidth;this.pR.left+=this.cR,this.pR.top+=this.lR,this.pR.right-=this.uR,this.pR.bottom-=this.aR}))}},q=class extends V{constructor(t,n){super(t,n.type),A(function(t){return t.type==$&&"string"==typeof t.selector}(n),"Invalid InactiveElementspec"),this.vR=n.selector}filter(t){return n=t.target,e=this.vR,!n.matches(e);var n,e}};function Q(t,n,e){switch(n.type){case L:return new Z(t,n,e.win);case N:return new H(t,n,e);case $:return new q(t,n);default:return}}function W(t,n,e,i){let r;try{r=t.open(n,e,i)}catch(t){y().error("DOM","Failed to open url on target: ",e,t)}var o,s;return!r&&"_top"!=e&&("number"!=typeof s&&(s=0),s+"noopener".length>(o=i||"").length||-1===o.indexOf("noopener",s))&&(r=t.open(n,"_top")),r}function tt(t,n){return Y||(Y=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(Y,t)}var nt="amp-ad-exit",et=class extends t.BaseElement{constructor(t){super(t),this.kn={},this.dR={},this.mR=[],this.bR={beacon:!0,image:!0},this.gR={},this.registerAction("exit",this.exit.bind(this)),this.registerAction("setVariable",this.setVariable.bind(this),1),this.yR={},this.py=null,this._R=null,this.AR={},this.RR=this.detectAttributionReportingSupport()}exit(t){const{args:n}=t;let e,{event:i}=t;A("variable"in n!="target"in n,"One and only one of 'target' and 'variable' must be specified"),"variable"in n?(e=this.dR[n.variable],e||(e=n.default),A(e,`Variable target not found, variable:'${n.variable}', default:'${n.default}'`),delete n.default):e=n.target;const r=this.kn[e];if(A(r,`Exit target not found: '${e}'`),A(i,"Unexpected null event"),i.preventDefault(),!this.IR(this.mR,i)||!this.IR(r.filters,i))return;const o=this.TR(n,i,r);r.trackingUrls&&r.trackingUrls.map(o).forEach((t=>this.OR(t)));const s=o(r.finalUrl);if(M.isAvailable(this.getAmpDoc()))M.exitForDoc(this.getAmpDoc()).then((t=>t.openUrl(s))).catch((t=>{t.fallback&&W(this.win,s,"_blank")}));else{const t=r.behaviors&&r.behaviors.clickTarget&&"_top"==r.behaviors.clickTarget?"_top":"_blank",n=o(r.windowFeatures||"");W(this.win,s,t,n)}}setVariable(t){const{args:n}=t;A(this.kn[n.target],`Exit target not found: '${n.target}'`),this.dR[n.name]=n.target}TR(t,n,e){const i={"ATTRIBUTION_REPORTING_STATUS":()=>function(t,n){var e,i,r;return null!=n&&null!==(e=n.behaviors)&&void 0!==e&&e.browserAdConversion&&t?6:null!=n&&null!==(i=n.behaviors)&&void 0!==i&&null!==(r=i.browserAdConversion)&&void 0!==r&&r.attributionsrc?5:4}(this.RR,e),"CLICK_X":()=>n.clientX,"CLICK_Y":()=>n.clientY},r=function(t,n){const e=E(j(t));return w(e,n)?S(e,n):null}(this.element,"url-replace"),o={"ATTRIBUTION_REPORTING_STATUS":!0,"CLICK_X":!0,"CLICK_Y":!0,"RANDOM":!0,"UACH":!0};if(e.vars)for(const n in e.vars){if("_"!=n[0])continue;const s=e.vars[n];s&&(i[n]=()=>{if(s.iframeTransportSignal){const t=r.expandStringSync(s.iframeTransportSignal,{"IFRAME_TRANSPORT_SIGNAL":(t,n)=>{if(!t||!n)return"";const e=this.yR[t];return e&&n in e?e[n]:void 0}});if(s.iframeTransportSignal==`IFRAME_TRANSPORT_SIGNAL${t}`)y().error(nt,"Invalid IFRAME_TRANSPORT_SIGNAL format:"+t+" (perhaps there is a space after a comma?)");else if(""!=t)return t}return n in t?t[n]:s.defaultValue},o[n]=!0)}return t=>r.expandUrlSync(t,i,o)}OR(t){this.bR.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(t,"")||this.bR.image&&(this.win.document.createElement("img").src=t)}IR(t,n){return t.every((t=>t.filter(n)))}buildCallback(){this.element.setAttribute("aria-hidden","true"),this.mR.push(Q("minDelay",X(1e3),this)),this.mR.push(Q("carouselBtns",{type:$,selector:".amp-carousel-button"},this));const{children:t}=this.element;A(1==t.length,"The tag should contain exactly one <script> child.");const n=t[0];var e,i,o;A("SCRIPT"==(e=n).tagName&&"APPLICATION/JSON"==(null===(i=e.getAttribute("type"))||void 0===i?void 0:i.toUpperCase()),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{const t=function(t){return A("object"==typeof t),t.filters?function(t){const n=[L,N,$];for(const e in t)A("object"==typeof t[e],"Filter specification '%s' is malformed",e),A(-1!=n.indexOf(t[e].type),"Supported filters: "+n.join(", "))}(t.filters):t.filters={},t.transport?function(t){for(const n in t)A("beacon"==n||"image"==n,`Unknown transport option: '${n}'`),A("boolean"==typeof t[n])}(t.transport):t.transport={},function(t,n){A("object"==typeof t,"'targets' must be an object");for(const e in t)K(e,t[e],n)}(t.targets,t),t}(u(n.textContent));let e;o=t.options,"[object Object]"===r.call(o)&&"string"==typeof t.options.startTimingEvent&&(e=t.options.startTimingEvent,this.mR.splice(0,1,_(Q("minDelay",X(1e3,t.options.startTimingEvent),this))));for(const n in t.filters){const i=t.filters[n];i.type==L&&(i.startTimingEvent=i.startTimingEvent||e),this.gR[n]=Q(n,i,this)}for(const n in t.targets){var s;const e=t.targets[n];var c;this.kn[n]={finalUrl:e.finalUrl,vars:e.vars||{},filters:(e.filters||[]).map((t=>this.gR[t])).filter(Boolean),behaviors:e.behaviors||{}},this.RR&&null!=e&&null!==(s=e.behaviors)&&void 0!==s&&s.browserAdConversion?this.kn[n].windowFeatures=this.jR(null==e||null===(c=e.behaviors)||void 0===c?void 0:c.browserAdConversion):this.kn[n].trackingUrls=e.trackingUrls||[];for(const t in e.vars){if(!e.vars[t].iframeTransportSignal)continue;const n=e.vars[t].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(!n||n.length<2)continue;const i=n[1],{origin:r}=tt(J(i));this.AR[r]=this.AR[r]||i}}this.bR.beacon=!1!==t.transport.beacon,this.bR.image=!1!==t.transport.image}catch(t){throw this.user().error(nt,"Invalid JSON config",t),t}this.ER()}detectAttributionReportingSupport(){return null===(t=this.win.document.featurePolicy)||void 0===t?void 0:t.allowedFeatures().includes("attribution-reporting");var t}jR(t){if(!t||!Object.keys(t))return;const n=["noopener"];for(const e of Object.keys(t)){const i=encodeURIComponent(t[e]);n.push(`${e.toLowerCase()}=${i}`)}return n.join(",")}SR(){return function(t,n){try{const e=function(t,n){const e=(t.ownerDocument||t).defaultView,i=n||O(e);if(e&&e!=i&&O(e)==i)try{return e.frameElement}catch(t){}return null}(t,n).parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(t){}return null}(this.element,O(this.win))}resumeCallback(){this.ER()}unlayoutCallback(){return this.py&&(this.py(),this.py=null),super.unlayoutCallback()}ER(){"inabox"!=function(t){const n=self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:v(t,f(t)),esm:!0,test:!1,rtvVersion:p(t),ssrReady:!1}}(n)}().runtime&&(this._R=this._R||this.SR(),this._R&&(_(!this.py),this.py=function(t,e,i,r){let o=t,s=i,c=t=>{try{return s(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const u=function(){if(void 0!==n)return n;n=!1;try{const t={get capture(){return n=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return n}();return o.addEventListener(e,c,!!u&&r),()=>{null==o||o.removeEventListener(e,c,!!u&&r),s=null,o=null,c=null}}(this.getAmpDoc().win,"message",(t=>{if(!this.AR[t.origin])return;const n=function(t){if(!function(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}(t))return null;const n=t.indexOf("{");return function(t,n){try{return u(t)}catch(t){return null==n||n(t),null}}(t.substr(n),(n=>{!function(t){const n=s.apply(null,arguments);setTimeout((()=>{throw c(n),n}))}(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(function(t){return t.data}(t));n&&"iframe-transport-response"==n.type&&(this.PR(n,t.origin),n.creativeId==this._R&&(this.yR[n.vendor]=n.message))}),void 0)))}PR(t,n){A(t.message,"Received empty response from 3p analytics frame"),A(t.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),A(t.vendor,"Received malformed message from 3p analytics frame: vendor missing");const e=tt(J(t.vendor));A(e&&e.origin==n,`Invalid origin for vendor ${t.vendor}: ${n}`)}isLayoutSupported(t){return!0}onLayoutMeasure(){for(const t in this.gR)this.gR[t].onLayoutMeasure()}};t.registerElement(nt,et)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ad-exit-0.1.mjs.map