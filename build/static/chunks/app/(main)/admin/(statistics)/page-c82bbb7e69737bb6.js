(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9589],{5601:function(e,t,r){Promise.resolve().then(r.bind(r,8300))},8300:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(1840),l=r(5458),i=r(673),s=r(1070),o=r(7917),a=r(6800),u=e=>{let t=new Date,r=[];for(let n=0;n<e;n++){let e=new Date(t.getTime()-864e5*n).toISOString().slice(0,10);r.push(e)}return r.reverse()},d=r(3946),c=r(4033),f=r.n(c);let h="hsl(var(--css-primary))",b="hsl(var(--css-secondary))";var m={chart:{id:"views-area-chart",foreColor:"#ccc",fontFamily:"inherit",animations:{enabled:!0,easing:"easeout",dynamicAnimation:{speed:700}},dropShadow:{enabled:!0,opacity:.1,blur:5,left:-7,top:22},toolbar:{show:!1}},xaxis:{axisTicks:{color:"#333"},axisBorder:{color:"#333"}},yaxis:{min:0,tickAmount:10},stroke:{curve:"smooth"},colors:[h,b],fill:{colors:[h,b],type:"gradient",gradient:{shadeIntensity:0,opacityFrom:.1,opacityTo:0}},markers:{size:5,hover:{size:7}},dataLabels:{style:{colors:[h]}}};let p=f()(()=>Promise.all([r.e(9061),r.e(816)]).then(r.bind(r,816)),{loadableGenerated:{webpack:()=>[816]},ssr:!1});var y=e=>{let{categories:t,data:r,isLoading:l,height:i,options:s}=e,{theme:a,systemTheme:u}=(0,d.F)(),c={tooltip:{theme:(null==a?void 0:a.split("-")[0])||u}},f={...m,...s,...c,xaxis:{categories:t}};return l?(0,n.jsx)(o.c,{}):(0,n.jsx)("div",{className:"relative text-foreground-500",children:(0,n.jsx)(p,{options:f,series:r,type:"area",width:"100%",maxWidth:"100%",height:i})})};let g=(0,r(8787).Ue)(e=>({serversMode:"ALL",setServersMode:t=>e({serversMode:t}),servers:[],setServers:t=>e({servers:t}),days:"3",setDays:t=>e({days:t})}));var v=r(8750),x=r(8668),w=r(4406),k=r(9609),j=r(1426),M=r(986),S=r(776),C=r(7463),K=r(175),W=r(917),P=()=>{let{data:e}=(0,W.ZP)("/api/servers",K.Z),t=g(e=>e.days),r=g(e=>e.setDays),l=g(e=>e.serversMode),i=g(e=>e.setServersMode),s=g(e=>e.servers),o=g(e=>e.setServers);return(0,n.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,n.jsx)(C.Y,{label:"Days",labelPlacement:"outside-left",size:"sm",width:30,min:1,max:365,type:"number",variant:"faded",color:"secondary",value:t,onValueChange:r}),(0,n.jsxs)(j.n,{"aria-label":"Servers",selectedKey:l,onSelectionChange:e=>{i(e),"ALL"===e&&o([])},color:"primary",children:[(0,n.jsx)(M.r,{title:"All servers"},"ALL"),(0,n.jsx)(M.r,{title:"Selected servers"},"SELECTED")]}),(0,n.jsxs)(v.F,{children:[(0,n.jsx)(x.S,{children:(0,n.jsxs)(S.A,{isDisabled:!e||"ALL"===l,color:"primary",size:"sm",children:["Servers: ",s.length]})}),(0,n.jsx)(w.a,{"aria-label":"Servers",items:e,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!=s?s:[]]),onSelectionChange:e=>o(Array.from(e)),disallowEmptySelection:!0,children:e=>(0,n.jsx)(k.W,{id:e.id.toString(),color:"default",children:e.hostname},e.id)})]})]})},N=()=>{let e=g(e=>e.serversMode),t=g(e=>e.servers),r=g(e=>e.days),[d]=(0,a.Nr)(r,500),c=u(parseInt(r)),{data:f,isLoading:h,mutate:b}=(0,W.ZP)("/api/admin/statistics?days=".concat(parseInt(d),"&servers=").concat("ALL"===e?"ALL":t.join(",")),K.Z);return(0,n.jsxs)(l.w,{children:[(0,n.jsxs)(i.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Servers Entries",(0,n.jsx)(P,{})]}),(0,n.jsx)(s.G,{children:h?(0,n.jsxs)("div",{children:[(0,n.jsx)(o.c,{})," Loading data..."]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{height:300,categories:c,data:[{data:null==f?void 0:f.servers.map(e=>e.number),name:"Entries"}]}),(0,n.jsx)("p",{className:"text-gray-400 text-sm",children:"Advanced statistics and features such as searching for players by IP, SteamId, date, etc. will be available as a separate module in the future."})]})})]})},A=()=>(0,n.jsx)(N,{})},4033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(5249);r(1840),r(4740);let l=n._(r(9852));function i(e,t){let r={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};return"function"==typeof e&&(r.loader=e),(0,l.default)({...r,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3213:function(e,t,r){"use strict";function n(e){let{reason:t,children:r}=e;return r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),r(1806)},9852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(1840),l=r(4740),i=r(3213);function s(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let o={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},a=function(e){let t={...o,...e},r=(0,l.lazy)(()=>t.loader().then(s)),a=t.loading;function u(e){let s=a?(0,n.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,n.jsx)(r,{...e}):(0,n.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(l.Suspense,{fallback:s,children:o})}return u.displayName="LoadableComponent",u}},6800:function(e,t,r){"use strict";r.d(t,{Nr:function(){return s}});var n=r(4740);function l(e,t){return e===t}function i(e,t){return t}function s(e,t,r){var s=r&&r.equalityFn||l,o=(0,n.useReducer)(i,e),a=o[0],u=o[1],d=function(e,t,r){var l=this,i=(0,n.useRef)(null),s=(0,n.useRef)(0),o=(0,n.useRef)(null),a=(0,n.useRef)([]),u=(0,n.useRef)(),d=(0,n.useRef)(),c=(0,n.useRef)(e),f=(0,n.useRef)(!0);c.current=e;var h=!t&&0!==t;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var b=!!(r=r||{}).leading,m=!("trailing"in r)||!!r.trailing,p="maxWait"in r,y="debounceOnServer"in r&&!!r.debounceOnServer,g=p?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=a.current,r=u.current;return a.current=u.current=null,s.current=e,d.current=c.current.apply(r,t)},r=function(e,t){h&&cancelAnimationFrame(o.current),o.current=h?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-i.current;return!i.current||r>=t||r<0||p&&e-s.current>=g},y=function(t){return o.current=null,m&&a.current?e(t):(a.current=u.current=null,d.current)},v=function e(){var l=Date.now();if(n(l))return y(l);if(f.current){var o=t-(l-i.current);r(e,p?Math.min(o,g-(l-s.current)):o)}},x=function(){var c=Date.now(),h=n(c);if(a.current=[].slice.call(arguments),u.current=l,i.current=c,h){if(!o.current&&f.current)return s.current=i.current,r(v,t),b?e(i.current):d.current;if(p)return r(v,t),e(i.current)}return o.current||r(v,t),d.current};return x.cancel=function(){o.current&&(h?cancelAnimationFrame(o.current):clearTimeout(o.current)),s.current=0,a.current=i.current=u.current=o.current=null},x.isPending=function(){return!!o.current},x.flush=function(){return o.current?y(Date.now()):d.current},x},[b,p,t,g,m,h,!0,y])}((0,n.useCallback)(function(e){return u(e)},[u]),t,r),c=(0,n.useRef)(e);return s(c.current,e)||(d(e),c.current=e),[a,d]}},175:function(e,t,r){"use strict";var n=r(1916);t.Z=e=>n.Z.get(e).then(e=>e.data)},1070:function(e,t,r){"use strict";r.d(t,{G:function(){return u}});var n=r(9226),l=r(6840),i=r(9763),s=r(7614),o=r(1840),a=(0,l.Gp)((e,t)=>{var r;let{as:l,className:a,children:u,...d}=e,c=(0,i.gy)(t),{slots:f,classNames:h}=(0,n.R)(),b=(0,s.W)(null==h?void 0:h.body,a);return(0,o.jsx)(l||"div",{ref:c,className:null==(r=f.body)?void 0:r.call(f,{class:b}),...d,children:u})});a.displayName="NextUI.CardBody";var u=a},5458:function(e,t,r){"use strict";r.d(t,{w:function(){return w}});var n=r(9226),l=r(2419),i=r(9071),s=(0,l.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),o=r(4740),a=r(1808),u=r(8084),d=r(4042),c=r(3309),f=r(6840),h=r(7614),b=r(7232),m=r(6),p=r(9763),y=r(3122),g=r(1033),v=r(1840),x=(0,f.Gp)((e,t)=>{let{children:r,context:l,Component:i,isPressable:x,disableAnimation:w,disableRipple:k,getCardProps:j,getRippleProps:M}=function(e){let[t,r]=(0,f.oe)(e,s.variantKeys),{ref:n,as:l,children:i,disableRipple:g=!1,onClick:v,onPress:x,autoFocus:w,className:k,classNames:j,allowTextSelectionOnPress:M=!0,...S}=t,C=(0,p.gy)(n),K=l||(e.isPressable?"button":"div"),W="string"==typeof K,P=(0,h.W)(null==j?void 0:j.base,k),{onClick:N,onClear:A,ripples:D}=(0,y.i)(),E=t=>{e.disableAnimation||g||!C.current||N(t)},{buttonProps:I,isPressed:L}=(0,c.j)({onPress:x,elementType:l,isDisabled:!e.isPressable,onClick:(0,a.tS)(v,E),allowTextSelectionOnPress:M,...S},C),{hoverProps:R,isHovered:B}=(0,d.XI)({isDisabled:!e.isHoverable,...S}),{isFocusVisible:F,isFocused:H,focusProps:O}=(0,u.Fx)({autoFocus:w}),T=(0,o.useMemo)(()=>s({...r}),[...Object.values(r)]),_=(0,o.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:T,classNames:j}),[T,j,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),z=(0,o.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:C,className:T.base({class:P}),tabIndex:e.isPressable?0:-1,"data-hover":(0,b.PB)(B),"data-pressed":(0,b.PB)(L),"data-focus":(0,b.PB)(H),"data-focus-visible":(0,b.PB)(F),"data-disabled":(0,b.PB)(e.isDisabled),...(0,a.dG)(e.isPressable?{...I,...O,role:"button"}:{},e.isHoverable?R:{},(0,m.z)(S,{enabled:W}),(0,m.z)(t))}},[C,T,P,W,e.isPressable,e.isHoverable,e.isDisabled,B,L,F,I,O,R,S]),V=(0,o.useCallback)(()=>({ripples:D,onClear:A}),[D,A]);return{context:_,domRef:C,Component:K,classNames:j,children:i,isHovered:B,isPressed:L,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:g,handleClick:E,isFocusVisible:F,getCardProps:z,getRippleProps:V}}({...e,ref:t});return(0,v.jsxs)(i,{...j(),children:[(0,v.jsx)(n.k,{value:l,children:r}),x&&!w&&!k&&(0,v.jsx)(g.L,{...M()})]})});x.displayName="NextUI.Card";var w=x},673:function(e,t,r){"use strict";r.d(t,{u:function(){return u}});var n=r(9226),l=r(6840),i=r(9763),s=r(7614),o=r(1840),a=(0,l.Gp)((e,t)=>{var r;let{as:l,className:a,children:u,...d}=e,c=(0,i.gy)(t),{slots:f,classNames:h}=(0,n.R)(),b=(0,s.W)(null==h?void 0:h.header,a);return(0,o.jsx)(l||"div",{ref:c,className:null==(r=f.header)?void 0:r.call(f,{class:b}),...d,children:u})});a.displayName="NextUI.CardHeader";var u=a},9226:function(e,t,r){"use strict";r.d(t,{R:function(){return l},k:function(){return n}});var[n,l]=(0,r(6596).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},755:function(e,t,r){"use strict";r.d(t,{l:function(){return l}});var n=r(7232);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>(function(e,t){if(null!=e){if((0,n.mf)(e)){e(t);return}try{e.current=t}catch(r){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}})(t,e))}}},9584:function(e,t,r){"use strict";r.d(t,{BA:function(){return u},n_:function(){return a}});var n=r(7493),l=r(4740),i=r(7018),s=r(3510);class o{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)r(t)};for(let t of e)r(t);let n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=n++),(t=r).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function a(e){let{filter:t}=e,r=(0,n.q)(e),s=(0,l.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=(0,l.useCallback)(e=>new o(t?t(e):e),[t]),u=(0,l.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),d=(0,i.Kx)(e,a,u),c=(0,l.useMemo)(()=>new n.Z(d,r),[d,r]),f=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(null!=r.focusedKey&&!d.getItem(r.focusedKey)){let e;let t=f.current.getItem(r.focusedKey),n=[...f.current.getKeys()].map(e=>{let t=f.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),l=[...d.getKeys()].map(e=>{let t=d.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),i=n.length-l.length,s=Math.min(i>1?Math.max(t.index-i+1,0):t.index,l.length-1);for(;s>=0;){if(!c.isDisabled(l[s].key)){e=l[s];break}s<l.length-1?s++:(s>t.index&&(s=t.index),s--)}r.setFocusedKey(e?e.key:null)}f.current=d},[d,c,r,r.focusedKey]),{collection:d,disabledKeys:s,selectionManager:c}}function u(e){var t;let[r,n]=(0,s.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),i=(0,l.useMemo)(()=>null!=r?[r]:[],[r]),{collection:o,disabledKeys:u,selectionManager:d}=a({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:t=>{var l;let i=null!==(l=t.values().next().value)&&void 0!==l?l:null;i===r&&e.onSelectionChange&&e.onSelectionChange(i),n(i)}}),c=null!=r?o.getItem(r):null;return{collection:o,disabledKeys:u,selectionManager:d,selectedKey:r,setSelectedKey:n,selectedItem:c}}},5346:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});let n=e=>"object"==typeof e&&null!=e&&1===e.nodeType,l=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,i=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return l(r.overflowY,t)||l(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},s=(e,t,r,n,l,i,s,o)=>i<e&&s>t||i>e&&s<t?0:i<=e&&o<=r||s>=t&&o>=r?i-e-n:s>t&&o<r||i<e&&o>r?s-t+l:0,o=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},a=(e,t)=>{var r,l,a,u;if("undefined"==typeof document)return[];let{scrollMode:d,block:c,inline:f,boundary:h,skipOverflowHiddenElements:b}=t,m="function"==typeof h?h:e=>e!==h;if(!n(e))throw TypeError("Invalid target");let p=document.scrollingElement||document.documentElement,y=[],g=e;for(;n(g)&&m(g);){if((g=o(g))===p){y.push(g);break}null!=g&&g===document.body&&i(g)&&!i(document.documentElement)||null!=g&&i(g,b)&&y.push(g)}let v=null!=(l=null==(r=window.visualViewport)?void 0:r.width)?l:innerWidth,x=null!=(u=null==(a=window.visualViewport)?void 0:a.height)?u:innerHeight,{scrollX:w,scrollY:k}=window,{height:j,width:M,top:S,right:C,bottom:K,left:W}=e.getBoundingClientRect(),{top:P,right:N,bottom:A,left:D}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),E="start"===c||"nearest"===c?S-P:"end"===c?K+A:S+j/2-P+A,I="center"===f?W+M/2-D+N:"end"===f?C+N:W-D,L=[];for(let e=0;e<y.length;e++){let t=y[e],{height:r,width:n,top:l,right:i,bottom:o,left:a}=t.getBoundingClientRect();if("if-needed"===d&&S>=0&&W>=0&&K<=x&&C<=v&&S>=l&&K<=o&&W>=a&&C<=i)break;let u=getComputedStyle(t),h=parseInt(u.borderLeftWidth,10),b=parseInt(u.borderTopWidth,10),m=parseInt(u.borderRightWidth,10),g=parseInt(u.borderBottomWidth,10),P=0,N=0,A="offsetWidth"in t?t.offsetWidth-t.clientWidth-h-m:0,D="offsetHeight"in t?t.offsetHeight-t.clientHeight-b-g:0,R="offsetWidth"in t?0===t.offsetWidth?0:n/t.offsetWidth:0,B="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(p===t)P="start"===c?E:"end"===c?E-x:"nearest"===c?s(k,k+x,x,b,g,k+E,k+E+j,j):E-x/2,N="start"===f?I:"center"===f?I-v/2:"end"===f?I-v:s(w,w+v,v,h,m,w+I,w+I+M,M),P=Math.max(0,P+k),N=Math.max(0,N+w);else{P="start"===c?E-l-b:"end"===c?E-o+g+D:"nearest"===c?s(l,o,r,b,g+D,E,E+j,j):E-(l+r/2)+D/2,N="start"===f?I-a-h:"center"===f?I-(a+n/2)+A/2:"end"===f?I-i+m+A:s(a,i,n,h,m+A,I,I+M,M);let{scrollLeft:e,scrollTop:u}=t;P=0===B?0:Math.max(0,Math.min(u+P/B,t.scrollHeight-r/B+D)),N=0===R?0:Math.max(0,Math.min(e+N/R,t.scrollWidth-n/R+A)),E+=u-P,I+=e-N}L.push({el:t,top:P,left:N})}return L},u=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function d(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(a(e,t));let r="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:n,top:l,left:i}of a(e,u(t)))n.scroll({top:l,left:i,behavior:r})}}},function(e){e.O(0,[1344,3277,6969,917,2299,5792,1698,9638,8176,380,236,4621,7942,1784,1744],function(){return e(e.s=5601)}),_N_E=e.O()}]);