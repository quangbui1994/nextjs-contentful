(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;d.has(l)?i=!1:(d.add(l),r[s]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Q35P:function(e,t,n){e.exports={Navbar:"_3GDzK0nLaFibCbGWwCFiQu",active:"_38AL5D4VPA9dcMY3HNM595"}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=i.Children.only(h),x=g&&"object"===typeof g&&g.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),A=w[0],O=w[1],M=i.default.useCallback((function(e){A(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,A]);(0,i.useEffect)((function(){var e=O&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof y?y:n&&n.locale,o=s[f+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,f,p,{locale:r})}),[p,f,O,y,t,n]);var _={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,p,v,m,b,y)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(_.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(g,_)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),o=n("RIqP"),i=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,c=void 0!==i&&i,l=e.priority,f=void 0!==l&&l,p=e.loading,v=e.className,m=e.quality,b=e.width,j=e.height,w=e.objectFit,A=e.objectPosition,O=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),M=n?"responsive":"intrinsic",_=!1;"unsized"in O?(_=Boolean(O.unsized),delete O.unsized):"layout"in O&&(O.layout&&(M=O.layout),delete O.layout);0;var k=!f&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(c=!0,k=!1);var S,I,C,E=(0,d.useIntersection)({rootMargin:"200px",disabled:!k}),z=r(E,2),q=z[0],R=z[1],N=!k||R,P=x(b),H=x(j),L=x(m),D={visibility:N?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:A};if("undefined"!==typeof P&&"undefined"!==typeof H&&"fill"!==M){var U=H/P,W=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===M?(S={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:W}):"intrinsic"===M?(S={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},C='<svg width="'.concat(P,'" height="').concat(H,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===M&&(S={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:P,height:H})}else"undefined"===typeof P&&"undefined"===typeof H&&"fill"===M&&(S={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var B={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};N&&(B=function(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes;if(n)return{src:t};var u=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:h,kind:"w"};return{widths:o(new Set([e,2*e,3*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(i,r),s=u.widths,l=u.kind,d=s.length-1,f=s.map((function(e,n){return"".concat(g({src:t,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", ");c||"w"!==l||(c=s.map((function(e,t){return t===d?"".concat(e,"px"):"(max-width: ".concat(e,"px) ").concat(e,"px")})).join(", "));return{src:t=g({src:t,quality:a,width:s[d]}),sizes:c,srcSet:f}}({src:t,unoptimized:c,layout:M,width:P,quality:L,sizes:n}));_&&(S=void 0,I=void 0,D=void 0);return u.default.createElement("div",{style:S},I?u.default.createElement("div",{style:I},C?u.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(C))}):null):null,u.default.createElement("img",Object.assign({},O,B,{decoding:"async",className:v,ref:q,style:D})))};var a=i(n("8OQS")),c=i(n("pVnL")),u=i(n("q1tI")),s=n("dEHY"),l=n("UWYU"),d=n("vNVm");var f=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(j(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r],a="";o&&i.push("q_"+o);i.length&&(a=i.join(",")+"/");return"".concat(t).concat(a).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,h=p.deviceSizes,v=p.imageSizes,m=p.loader,b=p.path,y=(p.domains,[].concat(o(h),o(v)));function g(e){var t=f.get(m);if(t)return t((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(m))}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},kzqI:function(e,t,n){e.exports={Footer:"_1DfcjAf7ys1HlcCUS22A9k"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},pdCo:function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("8Kt/")),i=n.n(o),a=n("Q35P"),c=n.n(a),u=n("YFqc"),s=n.n(u),l=n("nOHt"),d=function(){var e=Object(l.useRouter)();return Object(r.jsxs)("div",{className:c.a.Navbar,children:[Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("h1",{children:"Juliette van Rhyn"})})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{className:"/"==e.pathname||e.pathname.includes("livingroom")?c.a.active:"",children:"Living Room"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/bathroom",children:Object(r.jsx)("a",{className:e.pathname.includes("bathroom")?c.a.active:"",children:"Bath room"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/bedroom",children:Object(r.jsx)("a",{className:e.pathname.includes("bedroom")?c.a.active:"",children:"Bed room"})})})]})]})},f=(n("yUy/"),n("kzqI")),p=n.n(f),h=function(){return Object(r.jsx)("div",{className:p.a.Footer,children:Object(r.jsxs)("p",{children:["Copyright ",Object(r.jsx)("span",{className:p.a.copyright,children:"\xa9"})," 2020 by Quang Bui."]})})};t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"NextJs + Contentful Blog"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://use.typekit.net/eop6wtq.css"})]}),Object(r.jsx)(d,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(h,{})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,i.useRef)(),s=(0,i.useState)(!1),l=r(s,2),d=l[0],f=l[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){c||d||(0,a.default)((function(){return f(!0)}))}),[d]),[p,d]};var i=n("q1tI"),a=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map},"yUy/":function(e,t,n){}}]);