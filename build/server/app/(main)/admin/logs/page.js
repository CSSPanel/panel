(()=>{var e={};e.id=6567,e.ids=[6567],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},41218:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>u});var n=r(8605),s=r(1403),i=r(49663),l=r.n(i),o=r(66381),a={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>o[e]);r.d(t,a);let u=["",{children:["(main)",{children:["admin",{children:["logs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15882)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\logs\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,94906)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,89672,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,91090)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,89672,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\logs\\page.tsx"],d="/(main)/admin/logs/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(main)/admin/logs/page",pathname:"/admin/logs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},17667:(e,t,r)=>{Promise.resolve().then(r.bind(r,68888)),Promise.resolve().then(r.bind(r,88547))},33272:(e,t,r)=>{Promise.resolve().then(r.bind(r,55506))},68888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(98284),s=r(37297),i=r(36065),l=r(22173),o=r(46705);let a=({children:e,flags:t})=>{let{admin:r,isLoading:a}=(0,o.ZP)(),u=(0,i.useRouter)();return(0,l.useEffect)(()=>{if(!a){if(!r)return u.push("/");if(t.length>0&&!t.some(e=>r.flags?.includes(e)))return u.push("/admin")}},[r,a,u,t]),a?n.jsx(s.c,{}):r?n.jsx(n.Fragment,{children:e}):n.jsx(n.Fragment,{children:"No Access"})}},88547:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ADMIN_TABS:()=>a,default:()=>o});var n=r(98284),s=r(36065),i=r(85265),l=r(77003);let o=()=>{let e=(0,s.usePathname)(),t=(0,s.useRouter)();return n.jsx(i.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:a,children:e=>n.jsx(l.r,{title:e.title},e.path)})},a=[{path:"/admin",title:"Statistics",permissions:[]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},55506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var n=r(98284),s=r(22173),i=r(68290),l=r(11076),o=r(53167),a=r(12141),u=r(86276),c=r(37297),d=r(36065),p=r(88547),m=r(61756);function f(e,t){return e===t}function h(e,t){return t}var g=r(68888),x=r(31755),y=r(85615),v=r(77602),b=r(98539),w=r(96607);let j=({admin:e,message:t,title:r,time:s})=>(0,n.jsxs)(i.w,{fullWidth:!0,children:[e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.u,{className:"flex gap-3",children:[n.jsx(v.J,{alt:e.user?.personaname||e.player_name,height:40,radius:"sm",src:e.user?.avatarmedium,width:40}),(0,n.jsxs)("div",{className:"flex flex-col",children:[n.jsx("p",{className:"text-md font-medium",children:e.user?.personaname||e.player_name}),n.jsx("p",{className:"text-small text-default-500",children:"Flags"})]})]}),n.jsx(b.j,{})]}),(0,n.jsxs)(o.G,{children:[n.jsx("h4",{className:"text-lg font-medium",children:r}),n.jsx("p",{className:"text-sm",children:t})]}),n.jsx(b.j,{}),n.jsx(a.i,{className:"text-sm",children:(0,w.Q)(s)+" ago"})]}),M=()=>{let[e,t]=(0,s.useState)(1),[r,v]=(0,s.useState)(""),[b]=function(e,t,r){var n=r&&r.equalityFn||f,i=(0,s.useReducer)(h,e),l=i[0],o=i[1],a=function(e,t,r){var n=this,i=(0,s.useRef)(null),l=(0,s.useRef)(0),o=(0,s.useRef)(null),a=(0,s.useRef)([]),u=(0,s.useRef)(),c=(0,s.useRef)(),d=(0,s.useRef)(e),p=(0,s.useRef)(!0);d.current=e;var m=!t&&0!==t&&!1;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var f=!!(r=r||{}).leading,h=!("trailing"in r)||!!r.trailing,g="maxWait"in r,x="debounceOnServer"in r&&!!r.debounceOnServer,y=g?Math.max(+r.maxWait||0,t):null;return(0,s.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),(0,s.useMemo)(function(){var e=function(e){var t=a.current,r=u.current;return a.current=u.current=null,l.current=e,c.current=d.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(o.current),o.current=m?requestAnimationFrame(e):setTimeout(e,t)},s=function(e){if(!p.current)return!1;var r=e-i.current;return!i.current||r>=t||r<0||g&&e-l.current>=y},v=function(t){return o.current=null,h&&a.current?e(t):(a.current=u.current=null,c.current)},b=function e(){var n=Date.now();if(s(n))return v(n);if(p.current){var o=t-(n-i.current);r(e,g?Math.min(o,y-(n-l.current)):o)}},w=function(){if(x){var d=Date.now(),m=s(d);if(a.current=[].slice.call(arguments),u.current=n,i.current=d,m){if(!o.current&&p.current)return l.current=i.current,r(b,t),f?e(i.current):c.current;if(g)return r(b,t),e(i.current)}return o.current||r(b,t),c.current}};return w.cancel=function(){o.current&&(m?cancelAnimationFrame(o.current):clearTimeout(o.current)),l.current=0,a.current=i.current=u.current=o.current=null},w.isPending=function(){return!!o.current},w.flush=function(){return o.current?v(Date.now()):c.current},w},[f,g,t,y,h,m,!1,x])}((0,s.useCallback)(function(e){return o(e)},[o]),1e3,r),u=(0,s.useRef)(e);return n(u.current,e)||(a(e),u.current=e),[l,a]}(r,0),{data:w,isLoading:M}=(0,y.ZP)(`/api/admin/logs?page=${e}&rows=20&query=${b}`,x.Z,{keepPreviousData:!0}),S=(0,s.useMemo)(()=>w?.count?Math.ceil(w.count/20):0,[w?.count,20]),P=(0,d.usePathname)(),C=p.ADMIN_TABS.find(e=>e.path===P);return n.jsx(g.default,{flags:C?.permissions||[],children:(0,n.jsxs)(i.w,{children:[(0,n.jsxs)(l.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[n.jsx("div",{children:"Logs"}),n.jsx(m.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:r,onValueChange:v,isClearable:!0})]}),n.jsx(o.G,{className:"grid lg:grid-cols-3 gap-4",children:M?n.jsx(c.c,{}):w&&w.results?.map(e=>s.createElement(j,{...e,key:e.id}))}),n.jsx(a.i,{children:n.jsx(u.g,{color:"primary",page:e,total:S,onChange:e=>t(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},94906:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,metadata:()=>m});var n=r(88640),s=r(11728);let i=(0,s.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx`),{__esModule:l,$$typeof:o}=i,a=i.default;(0,s.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx#ADMIN_TABS`);let u=(0,s.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\AdminCheck.tsx`),{__esModule:c,$$typeof:d}=u,p=u.default,m={title:"Admin Panel"},f=({children:e})=>(0,n.jsxs)(p,{flags:[],children:[n.jsx(a,{}),e]})},15882:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>l});let n=(0,r(11728).createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\logs\page.tsx`),{__esModule:s,$$typeof:i}=n,l=n.default},12141:(e,t,r)=>{"use strict";r.d(t,{i:()=>u});var n=r(80854),s=r(29853),i=r(71711),l=r(3411),o=r(98284),a=(0,s.Gp)((e,t)=>{var r;let{as:s,className:a,children:u,...c}=e,d=(0,i.gy)(t),{slots:p,classNames:m}=(0,n.R)(),f=(0,l.W)(null==m?void 0:m.footer,a);return(0,o.jsx)(s||"div",{ref:d,className:null==(r=p.footer)?void 0:r.call(p,{class:f}),...c,children:u})});a.displayName="NextUI.CardFooter";var u=a},8694:(e,t,r)=>{"use strict";r.d(t,{BA:()=>u,n_:()=>a});var n=r(9784),s=r(22173),i=r(44984),l=r(80547);class o{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)r(t)};for(let t of e)r(t);let n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=n++),(t=r).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function a(e){let{filter:t}=e,r=(0,n.q)(e),l=(0,s.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=(0,s.useCallback)(e=>new o(t?t(e):e),[t]),u=(0,s.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),c=(0,i.Kx)(e,a,u),d=(0,s.useMemo)(()=>new n.Z(c,r),[c,r]),p=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null!=r.focusedKey&&!c.getItem(r.focusedKey)){let e;let t=p.current.getItem(r.focusedKey),n=[...p.current.getKeys()].map(e=>{let t=p.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),s=[...c.getKeys()].map(e=>{let t=c.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),i=n.length-s.length,l=Math.min(i>1?Math.max(t.index-i+1,0):t.index,s.length-1);for(;l>=0;){if(!d.isDisabled(s[l].key)){e=s[l];break}l<s.length-1?l++:(l>t.index&&(l=t.index),l--)}r.setFocusedKey(e?e.key:null)}p.current=c},[c,d,r,r.focusedKey]),{collection:c,disabledKeys:l,selectionManager:d}}function u(e){var t;let[r,n]=(0,l.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),i=(0,s.useMemo)(()=>null!=r?[r]:[],[r]),{collection:o,disabledKeys:u,selectionManager:c}=a({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:t=>{var s;let i=null!==(s=t.values().next().value)&&void 0!==s?s:null;i===r&&e.onSelectionChange&&e.onSelectionChange(i),n(i)}}),d=null!=r?o.getItem(r):null;return{collection:o,disabledKeys:u,selectionManager:c,selectedKey:r,setSelectedKey:n,selectedItem:d}}},58258:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});let n=e=>"object"==typeof e&&null!=e&&1===e.nodeType,s=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,i=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return s(r.overflowY,t)||s(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},l=(e,t,r,n,s,i,l,o)=>i<e&&l>t||i>e&&l<t?0:i<=e&&o<=r||l>=t&&o>=r?i-e-n:l>t&&o<r||i<e&&o>r?l-t+s:0,o=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},a=(e,t)=>{var r,s,a,u;if("undefined"==typeof document)return[];let{scrollMode:c,block:d,inline:p,boundary:m,skipOverflowHiddenElements:f}=t,h="function"==typeof m?m:e=>e!==m;if(!n(e))throw TypeError("Invalid target");let g=document.scrollingElement||document.documentElement,x=[],y=e;for(;n(y)&&h(y);){if((y=o(y))===g){x.push(y);break}null!=y&&y===document.body&&i(y)&&!i(document.documentElement)||null!=y&&i(y,f)&&x.push(y)}let v=null!=(s=null==(r=window.visualViewport)?void 0:r.width)?s:innerWidth,b=null!=(u=null==(a=window.visualViewport)?void 0:a.height)?u:innerHeight,{scrollX:w,scrollY:j}=window,{height:M,width:S,top:P,right:C,bottom:q,left:K}=e.getBoundingClientRect(),{top:k,right:N,bottom:_,left:W}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),R="start"===d||"nearest"===d?P-k:"end"===d?q+_:P+M/2-k+_,A="center"===p?K+S/2-W+N:"end"===p?C+N:K-W,I=[];for(let e=0;e<x.length;e++){let t=x[e],{height:r,width:n,top:s,right:i,bottom:o,left:a}=t.getBoundingClientRect();if("if-needed"===c&&P>=0&&K>=0&&q<=b&&C<=v&&P>=s&&q<=o&&K>=a&&C<=i)break;let u=getComputedStyle(t),m=parseInt(u.borderLeftWidth,10),f=parseInt(u.borderTopWidth,10),h=parseInt(u.borderRightWidth,10),y=parseInt(u.borderBottomWidth,10),k=0,N=0,_="offsetWidth"in t?t.offsetWidth-t.clientWidth-m-h:0,W="offsetHeight"in t?t.offsetHeight-t.clientHeight-f-y:0,E="offsetWidth"in t?0===t.offsetWidth?0:n/t.offsetWidth:0,T="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(g===t)k="start"===d?R:"end"===d?R-b:"nearest"===d?l(j,j+b,b,f,y,j+R,j+R+M,M):R-b/2,N="start"===p?A:"center"===p?A-v/2:"end"===p?A-v:l(w,w+v,v,m,h,w+A,w+A+S,S),k=Math.max(0,k+j),N=Math.max(0,N+w);else{k="start"===d?R-s-f:"end"===d?R-o+y+W:"nearest"===d?l(s,o,r,f,y+W,R,R+M,M):R-(s+r/2)+W/2,N="start"===p?A-a-m:"center"===p?A-(a+n/2)+_/2:"end"===p?A-i+h+_:l(a,i,n,m,h+_,A,A+S,S);let{scrollLeft:e,scrollTop:u}=t;k=0===T?0:Math.max(0,Math.min(u+k/T,t.scrollHeight-r/T+W)),N=0===E?0:Math.max(0,Math.min(e+N/E,t.scrollWidth-n/E+_)),R+=u-k,A+=e-N}I.push({el:t,top:k,left:N})}return I},u=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function c(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(a(e,t));let r="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:n,top:s,left:i}of a(e,u(t)))n.scroll({top:s,left:i,behavior:r})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[4070,7206,7530,6276,9858,7567,5822],()=>r(41218));module.exports=n})();