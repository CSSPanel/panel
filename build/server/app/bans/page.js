(()=>{var e={};e.id=2923,e.ids=[2923],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},77913:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>d});var s=r(8605),n=r(1403),i=r(49663),l=r.n(i),a=r(66381),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let d=["",{children:["bans",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13103)),"C:\\Projects\\CSS-Panel\\app\\bans\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,91090)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,89672,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Projects\\CSS-Panel\\app\\bans\\page.tsx"],c="/bans/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/bans/page",pathname:"/bans",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},37122:(e,t,r)=>{Promise.resolve().then(r.bind(r,9016))},80131:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(98284),n=r(34002),i=r(76425),l=r(1902),a=r(16490),o=r(61524),d=r(72150);let u=({open:e,children:t,action:r,handleClose:u,isLoading:c,actionText:p})=>s.jsx(n.R,{isOpen:e,onOpenChange:!c&&u||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:s.jsx(i.A,{children:e=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(l.k,{className:"flex flex-col gap-1",children:"Confirmation"}),s.jsx(a.I,{children:t}),(0,s.jsxs)(o.R,{children:[s.jsx(d.A,{color:"primary",variant:"light",onPress:e,isLoading:c,children:"Cancel"}),s.jsx(d.A,{color:"primary",onPress:r,isLoading:c,children:p||"Confirm"})]})]})})})},83201:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(98284),n=r(92300),i=r(12759),l=r(52183),a=r(22173);let o=(e,t)=>{(0,a.useEffect)(()=>{let r=r=>{let s=e?.current;!s||s?.contains(r.target)||t(r)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[e,t])};var d=r(99804);let u=({open:e,x:t,y:r,handleCloseMenu:u,items:c})=>{let p=(0,a.useRef)(null);return o(p,u),e&&s.jsx(d.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:t,top:r},ref:p,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:s.jsx(n.X,{variant:"flat","aria-label":"Listbox menu with sections",items:c,children:c.map(({category:e,items:t})=>s.jsx(i.y,{title:e,children:t.map(({key:e,description:t,icon:r,color:n,onClick:i})=>s.jsx(l.R,{description:s.jsx("span",{className:"text-foreground-700",children:t}),startContent:s.jsx(r,{}),color:n||"default",onClick:()=>{i&&i(),u()},children:e},e))},e))})})}},66819:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var s=(0,r(15544).Z)("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]])},11082:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},70059:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(22173);let n=()=>{let[e,t]=(0,s.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,r)=>{e.preventDefault();let{pageX:s,pageY:n}=e;t({open:!0,x:s,y:n,info:r})},info:e.info}}},42737:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>l});let s=(0,r(11728).createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Bans\index.tsx`),{__esModule:n,$$typeof:i}=s,l=s.default},42686:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(88640),n=r(44118),i=r(91576);let l=({image:e,html:t,css:r,height:n})=>"0"===n?s.jsx(s.Fragment,{}):(0,s.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-center bg-cover relative",style:{backgroundImage:`url(${e})`,height:`${n}px`},children:[s.jsx("div",{className:"h-full w-full flex flex-col justify-center items-center",dangerouslySetInnerHTML:{__html:t}}),s.jsx("style",{children:r})]}),a=(0,n.Rb)(),o=async()=>{let e=await i.Z?.settings.getByKey("headerImage")||a.headerImage,t=await i.Z?.settings.getByKey("headerCodeHTML")||a.headerCodeHTML,r=await i.Z?.settings.getByKey("headerCodeCSS")||a.headerCodeCSS,n=await i.Z?.settings.getByKey("headerHeight")||a.headerHeight;return s.jsx(l,{image:e||"",html:t||"",css:r||"",height:n||""})}},13103:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(88640),n=r(42686),i=r(42737);let l=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{}),s.jsx(i.ZP,{type:"NORMAL"})]})},12759:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var s=r(93530).$0},58510:(e,t,r)=>{"use strict";r.d(t,{W:()=>x});var s=r(29853),n=(0,r(14090).tv)({slots:{base:"flex flex-col gap-2 w-full",label:"",labelWrapper:"flex justify-between",value:"",track:"z-0 relative bg-default-300/50 overflow-hidden",indicator:"h-full"},variants:{color:{default:{indicator:"bg-default-400"},primary:{indicator:"bg-primary"},secondary:{indicator:"bg-secondary"},success:{indicator:"bg-success"},warning:{indicator:"bg-warning"},danger:{indicator:"bg-danger"}},size:{sm:{label:"text-small",value:"text-small",track:"h-1"},md:{label:"text-medium",value:"text-medium",track:"h-3"},lg:{label:"text-large",value:"text-large",track:"h-5"}},radius:{none:{track:"rounded-none",indicator:"rounded-none"},sm:{track:"rounded-small",indicator:"rounded-small"},md:{track:"rounded-medium",indicator:"rounded-medium"},lg:{track:"rounded-large",indicator:"rounded-large"},full:{track:"rounded-full",indicator:"rounded-full"}},isStriped:{true:{indicator:"bg-stripe-gradient bg-[length:1.25rem_1.25rem]"}},isIndeterminate:{true:{indicator:["absolute","w-full","origin-left","animate-indeterminate-bar"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:{},false:{indicator:"transition-transform !duration-500"}}},defaultVariants:{color:"primary",size:"md",radius:"full",isStriped:!1,isIndeterminate:!1,isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!0,isIndeterminate:!1,class:{indicator:"!transition-none motion-reduce:transition-none"}}]},{twMerge:!1}),i=r(71711),l=r(3411),a=r(86038),o=r(31865),d=r(76729),u=r(22173),c=r(82863),p=r(80547),h=r(21837),m=r(14246),g=r(98284),f=(0,s.Gp)((e,t)=>{let{Component:r,slots:f,classNames:x,label:y,percentage:b,showValueLabel:v,getProgressBarProps:w,getLabelProps:k}=function(e){let[t,r]=(0,s.oe)(e,n.variantKeys),{ref:g,as:f,id:x,className:y,classNames:b,label:v,valueLabel:w,value:k=0,minValue:M=0,maxValue:j=100,showValueLabel:K=!1,formatOptions:C={style:"percent"},...q}=t,P=(0,i.gy)(g),S=(0,l.W)(null==b?void 0:b.base,y),[,I]=(0,c.t)({rerender:!0,delay:100}),N=e.isIndeterminate,{progressBarProps:W,labelProps:E}=function(e){let{value:t=0,minValue:r=0,maxValue:s=100,valueLabel:n,isIndeterminate:i,formatOptions:l={style:"percent"}}=e,a=(0,d.zL)(e,{labelable:!0}),{labelProps:o,fieldProps:u}=(0,h.N)({...e,labelElementType:"span"}),c=((t=(0,p.uZ)(t,r,s))-r)/(s-r),g=(0,m.Ux)(l);if(!i&&!n){let e="percent"===l.style?c:t;n=g.format(e)}return{progressBarProps:(0,d.dG)(a,{...u,"aria-valuenow":i?void 0:t,"aria-valuemin":r,"aria-valuemax":s,"aria-valuetext":i?void 0:n,role:"progressbar"}),labelProps:o}}({id:x,label:v,value:k,minValue:M,maxValue:j,valueLabel:w,formatOptions:C,isIndeterminate:N,"aria-labelledby":e["aria-labelledby"],"aria-label":e["aria-label"]}),L=(0,u.useMemo)(()=>n({...r}),[...Object.values(r)]),_=!!e.disableAnimation||I,H=(0,u.useMemo)(()=>N||!_?void 0:(0,a.E)((k-M)/(j-M)*100),[_,N,k,M,j]),Z=(0,u.useCallback)((t={})=>({ref:P,"data-indeterminate":(0,o.PB)(N),"data-disabled":(0,o.PB)(e.isDisabled),className:L.base({class:S}),...(0,d.dG)(W,q,t)}),[P,L,N,e.isDisabled,S,W,q]),A=(0,u.useCallback)((e={})=>({className:L.label({class:null==b?void 0:b.label}),...(0,d.dG)(E,e)}),[L,b,E]);return{Component:f||"div",domRef:P,slots:L,classNames:b,label:v,percentage:H,showValueLabel:K,getProgressBarProps:Z,getLabelProps:A}}({...e,ref:t}),M=w(),j=y||v;return(0,g.jsxs)(r,{...M,children:[j?(0,g.jsxs)("div",{className:f.labelWrapper({class:null==x?void 0:x.labelWrapper}),children:[y&&(0,g.jsx)("span",{...k(),children:y}),v&&(0,g.jsx)("span",{className:f.value({class:null==x?void 0:x.value}),children:M["aria-valuetext"]})]}):null,(0,g.jsx)("div",{className:f.track({class:null==x?void 0:x.track}),children:(0,g.jsx)("div",{className:f.indicator({class:null==x?void 0:x.indicator}),style:{transform:`translateX(-${100-(b||0)}%)`}})})]})});f.displayName="NextUI.Progress";var x=f},8694:(e,t,r)=>{"use strict";r.d(t,{BA:()=>d,n_:()=>o});var s=r(9784),n=r(22173),i=r(44984),l=r(80547);class a{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)r(t)};for(let t of e)r(t);let s=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=s++),(t=r).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function o(e){let{filter:t}=e,r=(0,s.q)(e),l=(0,n.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),o=(0,n.useCallback)(e=>new a(t?t(e):e),[t]),d=(0,n.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),u=(0,i.Kx)(e,o,d),c=(0,n.useMemo)(()=>new s.Z(u,r),[u,r]),p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(null!=r.focusedKey&&!u.getItem(r.focusedKey)){let e;let t=p.current.getItem(r.focusedKey),s=[...p.current.getKeys()].map(e=>{let t=p.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),n=[...u.getKeys()].map(e=>{let t=u.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),i=s.length-n.length,l=Math.min(i>1?Math.max(t.index-i+1,0):t.index,n.length-1);for(;l>=0;){if(!c.isDisabled(n[l].key)){e=n[l];break}l<n.length-1?l++:(l>t.index&&(l=t.index),l--)}r.setFocusedKey(e?e.key:null)}p.current=u},[u,c,r,r.focusedKey]),{collection:u,disabledKeys:l,selectionManager:c}}function d(e){var t;let[r,s]=(0,l.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),i=(0,n.useMemo)(()=>null!=r?[r]:[],[r]),{collection:a,disabledKeys:d,selectionManager:u}=o({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:t=>{var n;let i=null!==(n=t.values().next().value)&&void 0!==n?n:null;i===r&&e.onSelectionChange&&e.onSelectionChange(i),s(i)}}),c=null!=r?a.getItem(r):null;return{collection:a,disabledKeys:d,selectionManager:u,selectedKey:r,setSelectedKey:s,selectedItem:c}}},58258:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});let s=e=>"object"==typeof e&&null!=e&&1===e.nodeType,n=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,i=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return n(r.overflowY,t)||n(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},l=(e,t,r,s,n,i,l,a)=>i<e&&l>t||i>e&&l<t?0:i<=e&&a<=r||l>=t&&a>=r?i-e-s:l>t&&a<r||i<e&&a>r?l-t+n:0,a=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},o=(e,t)=>{var r,n,o,d;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:p,boundary:h,skipOverflowHiddenElements:m}=t,g="function"==typeof h?h:e=>e!==h;if(!s(e))throw TypeError("Invalid target");let f=document.scrollingElement||document.documentElement,x=[],y=e;for(;s(y)&&g(y);){if((y=a(y))===f){x.push(y);break}null!=y&&y===document.body&&i(y)&&!i(document.documentElement)||null!=y&&i(y,m)&&x.push(y)}let b=null!=(n=null==(r=window.visualViewport)?void 0:r.width)?n:innerWidth,v=null!=(d=null==(o=window.visualViewport)?void 0:o.height)?d:innerHeight,{scrollX:w,scrollY:k}=window,{height:M,width:j,top:K,right:C,bottom:q,left:P}=e.getBoundingClientRect(),{top:S,right:I,bottom:N,left:W}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),E="start"===c||"nearest"===c?K-S:"end"===c?q+N:K+M/2-S+N,L="center"===p?P+j/2-W+I:"end"===p?C+I:P-W,_=[];for(let e=0;e<x.length;e++){let t=x[e],{height:r,width:s,top:n,right:i,bottom:a,left:o}=t.getBoundingClientRect();if("if-needed"===u&&K>=0&&P>=0&&q<=v&&C<=b&&K>=n&&q<=a&&P>=o&&C<=i)break;let d=getComputedStyle(t),h=parseInt(d.borderLeftWidth,10),m=parseInt(d.borderTopWidth,10),g=parseInt(d.borderRightWidth,10),y=parseInt(d.borderBottomWidth,10),S=0,I=0,N="offsetWidth"in t?t.offsetWidth-t.clientWidth-h-g:0,W="offsetHeight"in t?t.offsetHeight-t.clientHeight-m-y:0,H="offsetWidth"in t?0===t.offsetWidth?0:s/t.offsetWidth:0,Z="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(f===t)S="start"===c?E:"end"===c?E-v:"nearest"===c?l(k,k+v,v,m,y,k+E,k+E+M,M):E-v/2,I="start"===p?L:"center"===p?L-b/2:"end"===p?L-b:l(w,w+b,b,h,g,w+L,w+L+j,j),S=Math.max(0,S+k),I=Math.max(0,I+w);else{S="start"===c?E-n-m:"end"===c?E-a+y+W:"nearest"===c?l(n,a,r,m,y+W,E,E+M,M):E-(n+r/2)+W/2,I="start"===p?L-o-h:"center"===p?L-(o+s/2)+N/2:"end"===p?L-i+g+N:l(o,i,s,h,g+N,L,L+j,j);let{scrollLeft:e,scrollTop:d}=t;S=0===Z?0:Math.max(0,Math.min(d+S/Z,t.scrollHeight-r/Z+W)),I=0===H?0:Math.max(0,Math.min(e+I/H,t.scrollWidth-s/H+N)),E+=d-S,L+=e-I}_.push({el:t,top:S,left:I})}return _},d=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function u(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(o(e,t));let r="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:s,top:n,left:i}of o(e,d(t)))s.scroll({top:n,left:i,behavior:r})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7448,7206,6794,4517,524,2117,5394,5822,9016],()=>r(77913));module.exports=s})();