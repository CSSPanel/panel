"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5194],{6387:function(e,t,n){n.d(t,{Z:function(){return _}});var r,o,a,i,s,l,u,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(1402),p="right-scroll-bar-position",m="width-before-scroll-bar";function h(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var v=new WeakMap,g=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),i=[],s=!1,l={read:function(){if(s)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,s);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(s=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){s=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=c({async:!0,ssr:!1},o),l),b=function(){},y=f.forwardRef(function(e,t){var n,r,o,a,i=f.useRef(null),s=f.useState({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:b}),l=s[0],u=s[1],p=e.forwardProps,m=e.children,y=e.className,w=e.removeScrollBar,E=e.enabled,C=e.shards,x=e.sideCar,S=e.noIsolation,O=e.inert,I=e.allowPinchZoom,P=e.as,T=e.gapMode,L=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[i,t],r=function(e){return n.forEach(function(t){return h(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,f.useLayoutEffect(function(){var e=v.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||h(e,null)}),r.forEach(function(e){t.has(e)||h(e,o)})}v.set(a,n)},[n]),a),k=c(c({},L),l);return f.createElement(f.Fragment,null,E&&f.createElement(x,{sideCar:g,removeScrollBar:w,shards:C,noIsolation:S,inert:O,setCallbacks:u,allowPinchZoom:!!I,lockRef:i,gapMode:T}),p?f.cloneElement(f.Children.only(m),c(c({},k),{ref:R})):f.createElement(void 0===P?"div":P,c({},k,{className:y,ref:R}),m))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:m,zeroRight:p};var w=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,c({},n))};w.isSideCarExport=!0;var E=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=E();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},x=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},S={left:0,top:0,right:0,gap:0},O=function(e){return parseInt(e||"",10)||0},I=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[O(n),O(r),O(o)]},P=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return S;var t=I(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},T=x(),L=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(s,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(p," {\n    right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(m," {\n    margin-right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(m," .").concat(m," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},R=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=f.useMemo(function(){return P(o)},[o]);return f.createElement(T,{styles:L(a,!t,o,n?"":"!important")})},k=!1;if("undefined"!=typeof window)try{var N=Object.defineProperty({},"passive",{get:function(){return k=!0,!0}});window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch(e){k=!1}var M=!!k&&{passive:!1},J=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},D=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),B(e,r)){var o=z(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},B=function(e,t){return"v"===e?J(t,"overflowY"):J(t,"overflowX")},z=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},A=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),s=i*r,l=n.target,u=t.contains(l),c=!1,d=s>0,f=0,p=0;do{var m=z(e,l),h=m[0],v=m[1]-m[2]-i*h;(h||v)&&B(e,l)&&(f+=v,p+=h),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&s>f)?c=!0:!d&&(o&&1>Math.abs(p)||!o&&-s>p)&&(c=!0),c},F=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},W=function(e){return[e.deltaX,e.deltaY]},j=function(e){return e&&"current"in e?e.current:e},G=0,H=[],Z=(u=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(G++)[0],a=f.useState(x)[0],i=f.useRef(e);f.useEffect(function(){i.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(j),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=F(e),s=n.current,l="deltaX"in e?e.deltaX:s[0]-a[0],u="deltaY"in e?e.deltaY:s[1]-a[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=D(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=D(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=o),!o)return!0;var p=r.current||o;return A(p,t,e,"h"===p?l:u,!0)},[]),l=f.useCallback(function(e){if(H.length&&H[H.length-1]===a){var n="deltaY"in e?W(e):F(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(j).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=f.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),c=f.useCallback(function(e){n.current=F(e),r.current=void 0},[]),d=f.useCallback(function(t){u(t.type,W(t),t.target,s(t,e.lockRef.current))},[]),p=f.useCallback(function(t){u(t.type,F(t),t.target,s(t,e.lockRef.current))},[]);f.useEffect(function(){return H.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,M),document.addEventListener("touchmove",l,M),document.addEventListener("touchstart",c,M),function(){H=H.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,M),document.removeEventListener("touchmove",l,M),document.removeEventListener("touchstart",c,M)}},[]);var m=e.removeScrollBar,h=e.inert;return f.createElement(f.Fragment,null,h?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?f.createElement(R,{gapMode:e.gapMode}):null)},g.useMedium(u),w),V=f.forwardRef(function(e,t){return f.createElement(y,c({},e,{ref:t,sideCar:Z}))});V.classNames=y.classNames;var _=V},6763:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1402),o=n(3187),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,s=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=i(e,(d=u(function(){function e(e){if(!l){if(l=!0,i=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return s=t}return s=e}if(t=s,a(i,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(i=e,s=n)}var i,s,l=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,o]))[0],d[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}},3454:function(e,t,n){e.exports=n(6763)},8751:function(e,t,n){n.d(t,{A:function(){return x}});var[r,o]=(0,n(5722).k)({name:"ButtonGroupContext",strict:!1}),a=n(5459),i=n(1402),s=n(7069),l=n(8322),u=n(4299),c=n(453),d=n(5220),f=n(1319),p=n(4530),m=(0,f.tv)({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-none","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent",...p.Dh],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",md:"px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",lg:"px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-unit-0 !gap-unit-0",false:"[&>svg]:max-w-[theme(spacing.unit-8)]"},disableAnimation:{true:"!transition-none",false:"data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1,disableAnimation:!1},compoundVariants:[{variant:"solid",color:"default",class:d.J.solid.default},{variant:"solid",color:"primary",class:d.J.solid.primary},{variant:"solid",color:"secondary",class:d.J.solid.secondary},{variant:"solid",color:"success",class:d.J.solid.success},{variant:"solid",color:"warning",class:d.J.solid.warning},{variant:"solid",color:"danger",class:d.J.solid.danger},{variant:"shadow",color:"default",class:d.J.shadow.default},{variant:"shadow",color:"primary",class:d.J.shadow.primary},{variant:"shadow",color:"secondary",class:d.J.shadow.secondary},{variant:"shadow",color:"success",class:d.J.shadow.success},{variant:"shadow",color:"warning",class:d.J.shadow.warning},{variant:"shadow",color:"danger",class:d.J.shadow.danger},{variant:"bordered",color:"default",class:d.J.bordered.default},{variant:"bordered",color:"primary",class:d.J.bordered.primary},{variant:"bordered",color:"secondary",class:d.J.bordered.secondary},{variant:"bordered",color:"success",class:d.J.bordered.success},{variant:"bordered",color:"warning",class:d.J.bordered.warning},{variant:"bordered",color:"danger",class:d.J.bordered.danger},{variant:"flat",color:"default",class:d.J.flat.default},{variant:"flat",color:"primary",class:d.J.flat.primary},{variant:"flat",color:"secondary",class:d.J.flat.secondary},{variant:"flat",color:"success",class:d.J.flat.success},{variant:"flat",color:"warning",class:d.J.flat.warning},{variant:"flat",color:"danger",class:d.J.flat.danger},{variant:"faded",color:"default",class:d.J.faded.default},{variant:"faded",color:"primary",class:d.J.faded.primary},{variant:"faded",color:"secondary",class:d.J.faded.secondary},{variant:"faded",color:"success",class:d.J.faded.success},{variant:"faded",color:"warning",class:d.J.faded.warning},{variant:"faded",color:"danger",class:d.J.faded.danger},{variant:"light",color:"default",class:[d.J.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[d.J.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[d.J.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[d.J.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[d.J.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[d.J.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:d.J.ghost.default},{variant:"ghost",color:"primary",class:d.J.ghost.primary},{variant:"ghost",color:"secondary",class:d.J.ghost.secondary},{variant:"ghost",color:"success",class:d.J.ghost.success},{variant:"ghost",color:"warning",class:d.J.ghost.warning},{variant:"ghost",color:"danger",class:d.J.ghost.danger},{isInGroup:!0,class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,radius:"none",class:"rounded-none first:rounded-s-none last:rounded-e-none"},{isInGroup:!0,radius:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,radius:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,radius:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,radius:"full",class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,variant:["ghost","bordered"],color:"default",className:p.Zs.default},{isInGroup:!0,variant:["ghost","bordered"],color:"primary",className:p.Zs.primary},{isInGroup:!0,variant:["ghost","bordered"],color:"secondary",className:p.Zs.secondary},{isInGroup:!0,variant:["ghost","bordered"],color:"success",className:p.Zs.success},{isInGroup:!0,variant:["ghost","bordered"],color:"warning",className:p.Zs.warning},{isInGroup:!0,variant:["ghost","bordered"],color:"danger",className:p.Zs.danger},{isIconOnly:!0,size:"sm",class:"min-w-unit-8 w-unit-8 h-unit-8"},{isIconOnly:!0,size:"md",class:"min-w-unit-10 w-unit-10 h-unit-10"},{isIconOnly:!0,size:"lg",class:"min-w-unit-12 w-unit-12 h-unit-12"},{variant:["solid","faded","flat","bordered","shadow"],class:"data-[hover=true]:opacity-hover"}]});(0,f.tv)({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}});var h=n(3590),v=n(7902),g=n(1340),b=n(165),y=n(2013),w=n(7923),E=n(2412),C=(0,w.Gp)((e,t)=>{let{Component:n,domRef:r,children:d,styles:f,spinnerSize:p,spinner:w=(0,E.jsx)(b.c,{color:"current",size:p}),spinnerPlacement:C,startContent:x,endContent:S,isLoading:O,disableRipple:I,getButtonProps:P,getRippleProps:T,isIconOnly:L}=function(e){var t,n,r,d,f,p,b,y;let w=o(),E=!!w,{ref:C,as:x,children:S,startContent:O,endContent:I,autoFocus:P,className:T,spinner:L,fullWidth:R=null!=(t=null==w?void 0:w.fullWidth)&&t,size:k=null!=(n=null==w?void 0:w.size)?n:"md",color:N=null!=(r=null==w?void 0:w.color)?r:"default",variant:M=null!=(d=null==w?void 0:w.variant)?d:"solid",disableAnimation:J=null!=(f=null==w?void 0:w.disableAnimation)&&f,radius:D=null==w?void 0:w.radius,disableRipple:B=null!=(p=null==w?void 0:w.disableRipple)&&p,isDisabled:z=null!=(b=null==w?void 0:w.isDisabled)&&b,isIconOnly:A=null!=(y=null==w?void 0:w.isIconOnly)&&y,isLoading:F=!1,spinnerPlacement:W="start",onPress:j,onClick:G,...H}=e,Z=x||"button",V="string"==typeof Z,_=(0,u.gy)(C),{isFocusVisible:U,isFocused:X,focusProps:Y}=(0,s.Fx)({autoFocus:P}),K=z||F,q=(0,i.useMemo)(()=>m({size:k,color:N,variant:M,radius:D,fullWidth:R,isDisabled:K,isInGroup:E,disableAnimation:J,isIconOnly:A,className:T}),[k,N,M,D,R,K,E,A,J,T]),{onClick:$,onClear:Q,ripples:ee}=(0,g.i)(),et=(0,i.useCallback)(e=>{B||K||J||!_.current||$(e)},[B,K,J,_,$]),{buttonProps:en,isPressed:er}=(0,h.j)({elementType:x,isDisabled:K,onPress:j,onClick:(0,l.tS)(G,et),...H},_),{isHovered:eo,hoverProps:ea}=(0,v.XI)({isDisabled:K}),ei=(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-disabled":(0,a.PB)(K),"data-focus":(0,a.PB)(X),"data-pressed":(0,a.PB)(er),"data-focus-visible":(0,a.PB)(U),"data-hover":(0,a.PB)(eo),"data-loading":(0,a.PB)(F),...(0,l.dG)(en,Y,ea,(0,c.z)(H,{enabled:V}),(0,c.z)(e))}},[F,K,X,er,V,U,eo,en,Y,ea,H]),es=e=>(0,i.isValidElement)(e)?(0,i.cloneElement)(e,{"aria-hidden":!0,focusable:!1,tabIndex:-1}):null,el=es(O);return{Component:Z,children:S,domRef:_,spinner:L,styles:q,startContent:el,endContent:es(I),isLoading:F,spinnerPlacement:W,spinnerSize:(0,i.useMemo)(()=>({sm:"sm",md:"sm",lg:"md"})[k],[k]),disableRipple:B,getButtonProps:ei,getRippleProps:(0,i.useCallback)(()=>({ripples:ee,onClear:Q}),[ee,Q]),isIconOnly:A}}({...e,ref:t});return(0,E.jsxs)(n,{ref:r,className:f,...P(),children:[x,O&&"start"===C&&w,O&&L?null:d,O&&"end"===C&&w,S,!I&&(0,E.jsx)(y.L,{...T()})]})});C.displayName="NextUI.Button";var x=C},3609:function(e,t,n){n.d(t,{Lj:function(){return r},y7:function(){return o}});var r={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]};r.easeOut,r.easeIn;var o={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.3}},exit:{transform:"scale(0.6)",opacity:0,transition:{type:"easeOut",duration:.2}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.7)",transition:{type:"easeOut",bounce:0,duration:.18}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:r.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:r.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:r.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:r.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:r.ease}},exit:{opacity:0,transition:{duration:.3,ease:r.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}}},1104:function(e,t,n){n.d(t,{R:function(){return s}});var r=n(8322),o=n(7069),a=n(1402),i=n(1864);function s(e,t){let{role:n="dialog"}=e,s=(0,r.mp)();s=e["aria-label"]?void 0:s;let l=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){(0,o.ex)(t.current);let e=setTimeout(()=>{document.activeElement===t.current&&(l.current=!0,t.current&&(t.current.blur(),(0,o.ex)(t.current)),l.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),(0,i.Bq)(),{dialogProps:{...(0,r.zL)(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||s,onBlur:e=>{l.current&&e.stopPropagation()}},titleProps:{id:s}}}},1864:function(e,t,n){n.d(t,{U4:function(){return ey},aV:function(){return eS},Xj:function(){return eg},N3:function(){return ev},RP:function(){return eC},Ir:function(){return ed},Bq:function(){return eO},tN:function(){return eu},IB:function(){return ef}});var r={};r={dismiss:`\u{62A}\u{62C}\u{627}\u{647}\u{644}`};var o={};o={dismiss:`\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`};var a={};a={dismiss:"Odstranit"};var i={};i={dismiss:"Luk"};var s={};s={dismiss:`Schlie\xdfen`};var l={};l={dismiss:`\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`};var u={};u={dismiss:"Dismiss"};var c={};c={dismiss:"Descartar"};var d={};d={dismiss:`L\xf5peta`};var f={};f={dismiss:`Hylk\xe4\xe4`};var p={};p={dismiss:"Rejeter"};var m={};m={dismiss:`\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`};var h={};h={dismiss:"Odbaci"};var v={};v={dismiss:`Elutas\xedt\xe1s`};var g={};g={dismiss:"Ignora"};var b={};b={dismiss:`\u{9589}\u{3058}\u{308B}`};var y={};y={dismiss:`\u{BB34}\u{C2DC}`};var w={};w={dismiss:"Atmesti"};var E={};E={dismiss:`Ner\u{101}d\u{12B}t`};var C={};C={dismiss:"Lukk"};var x={};x={dismiss:"Negeren"};var S={};S={dismiss:"Zignoruj"};var O={};O={dismiss:"Descartar"};var I={};I={dismiss:"Dispensar"};var P={};P={dismiss:"Revocare"};var T={};T={dismiss:`\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`};var L={};L={dismiss:`Zru\u{161}i\u{165}`};var R={};R={dismiss:"Opusti"};var k={};k={dismiss:"Odbaci"};var N={};N={dismiss:"Avvisa"};var M={};M={dismiss:"Kapat"};var J={};J={dismiss:`\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`};var D={};D={dismiss:`\u{53D6}\u{6D88}`};var B={};B={dismiss:`\u{95DC}\u{9589}`};var z=n(1402),A=n(3617),F=n(8322),W=n(1938),j=n(7069),G=n(7902),H=n(8946),Z=n(6865),V=n(7093);let _={top:"top",bottom:"top",left:"left",right:"left"},U={top:"bottom",bottom:"top",left:"right",right:"left"},X={top:"left",left:"top"},Y={top:"height",left:"width"},K={width:"totalWidth",height:"totalHeight"},q={},$="undefined"!=typeof document&&window.visualViewport;function Q(e){let t=0,n=0,r=0,o=0,a=0,i=0,s={};if("BODY"===e.tagName){var l,u;let a=document.documentElement;r=a.clientWidth,o=a.clientHeight,t=null!==(l=null==$?void 0:$.width)&&void 0!==l?l:r,n=null!==(u=null==$?void 0:$.height)&&void 0!==u?u:o,s.top=a.scrollTop||e.scrollTop,s.left=a.scrollLeft||e.scrollLeft}else({width:t,height:n,top:a,left:i}=eo(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,o=n;return{width:t,height:n,totalWidth:r,totalHeight:o,scroll:s,top:a,left:i}}function ee(e,t,n,r,o,a){let i=o.scroll[e],s=r[Y[e]],l=t-a-i,u=t+a-i+n;return l<0?-l:u>s?Math.max(s-u,-l):0}function et(e){if(q[e])return q[e];let[t,n]=e.split(" "),r=_[t]||"right",o=X[r];_[n]||(n="center");let a=Y[r],i=Y[o];return q[e]={placement:t,crossPlacement:n,axis:r,crossAxis:o,size:a,crossSize:i},q[e]}function en(e,t,n,r,o,a,i,s,l,u){let{placement:c,crossPlacement:d,axis:f,crossAxis:p,size:m,crossSize:h}=r,v={};v[p]=e[p],"center"===d?v[p]+=(e[h]-n[h])/2:d!==p&&(v[p]+=e[h]-n[h]),v[p]+=a;let g=e[p]-n[h]+l+u,b=e[p]+e[h]-l-u;if(v[p]=(0,A.uZ)(v[p],g,b),c===f){let n=s?i[m]:t[K[m]];v[U[f]]=Math.floor(n-e[f]+o)}else v[f]=Math.floor(e[f]+e[m]+o);return v}function er(e,t,n,r,o,a){let{placement:i,axis:s,size:l}=a;return i===s?Math.max(0,n[s]-e[s]-e.scroll[s]+t[s]-r[s]-r[U[s]]-o):Math.max(0,e[l]+e[s]+e.scroll[s]-t[s]-n[s]-n[l]-r[s]-r[U[s]]-o)}function eo(e){let{top:t,left:n,width:r,height:o}=e.getBoundingClientRect(),{scrollTop:a,scrollLeft:i,clientTop:s,clientLeft:l}=document.documentElement;return{top:t+a-s,left:n+i-l,width:r,height:o}}function ea(e,t){let n,r=window.getComputedStyle(e);if("fixed"===r.position){let{top:t,left:r,width:o,height:a}=e.getBoundingClientRect();n={top:t,left:r,width:o,height:a}}else{n=eo(e);let r=eo(t),o=window.getComputedStyle(t);r.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=r.top,n.left-=r.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function ei(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}let es=new WeakMap,el="undefined"!=typeof document&&window.visualViewport;function eu(e){let{direction:t}=(0,W.bU)(),{arrowSize:n=0,targetRef:r,overlayRef:o,scrollRef:a=o,placement:i="bottom",containerPadding:s=12,shouldFlip:l=!0,boundaryElement:u="undefined"!=typeof document?document.body:null,offset:c=0,crossOffset:d=0,shouldUpdatePosition:f=!0,isOpen:p=!0,onClose:m,maxHeight:h,arrowBoundaryOffset:v=0}=e,[g,b]=(0,z.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),y=[f,i,o.current,r.current,a.current,s,l,u,c,d,p,t,h,v,n],w=(0,z.useCallback)(()=>{if(!1===f||!p||!o.current||!r.current||!a.current||!u)return;let e=function(e){let t,{placement:n,targetNode:r,overlayNode:o,scrollNode:a,padding:i,shouldFlip:s,boundaryElement:l,offset:u,crossOffset:c,maxHeight:d,arrowSize:f=0,arrowBoundaryOffset:p=0}=e,m=o instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!ei(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!ei(t);)t=t.parentElement;return t||document.documentElement}(o):document.documentElement,h=m===document.documentElement,v=window.getComputedStyle(m).position,g=h?eo(r):ea(r,m);if(!h){let{marginTop:e,marginLeft:t}=window.getComputedStyle(r);g.top+=parseInt(e,10)||0,g.left+=parseInt(t,10)||0}let b=eo(o),y={top:parseInt((t=window.getComputedStyle(o)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};return b.width+=y.left+y.right,b.height+=y.top+y.bottom,function(e,t,n,r,o,a,i,s,l,u,c,d,f,p,m,h){var v;let g=et(e),{size:b,crossAxis:y,crossSize:w,placement:E,crossPlacement:C}=g,x=en(t,s,n,g,c,d,u,f,m,h),S=c,O=er(s,u,t,o,a+c,g);if(i&&r[b]>O){let e=et(`${U[E]} ${C}`),r=en(t,s,n,e,c,d,u,f,m,h);er(s,u,t,o,a+c,e)>O&&(g=e,x=r,S=c)}let I=ee(y,x[y],n[w],s,l,a);x[y]+=I;let P=null!=(v=x).top?Math.max(0,s.height+s.top+s.scroll.top-(u.top+v.top)-(o.top+o.bottom+a)):Math.max(0,t.top+u.top-(s.top+s.scroll.top)-(o.top+o.bottom+a));p&&p<P&&(P=p),n.height=Math.min(n.height,P),I=ee(y,(x=en(t,s,n,g,S,d,u,f,m,h))[y],n[w],s,l,a),x[y]+=I;let T={},L=t[y]+.5*t[w]-n[y],R=m/2+h,k=n[w]-m/2-h,N=t[y]-n[y]+m/2,M=t[y]+t[w]-n[y]-m/2,J=(0,A.uZ)(L,N,M);return T[y]=(0,A.uZ)(J,R,k),{position:x,maxHeight:P,arrowOffsetLeft:T.left,arrowOffsetTop:T.top,placement:g.placement}}(n,g,b,{top:a.scrollTop,left:a.scrollLeft,width:a.scrollWidth,height:a.scrollHeight},y,i,s,Q(l),Q(m),"BODY"===l.tagName?eo(m):ea(m,l),u,c,!!v&&"static"!==v,d,f,p)}({placement:"rtl"===t?i.replace("start","right").replace("end","left"):i.replace("start","left").replace("end","right"),overlayNode:o.current,targetNode:r.current,scrollNode:a.current,padding:s,shouldFlip:l,boundaryElement:u,offset:c,crossOffset:d,maxHeight:h,arrowSize:n,arrowBoundaryOffset:v});Object.keys(e.position).forEach(t=>o.current.style[t]=e.position[t]+"px"),o.current.style.maxHeight=null!=e.maxHeight?e.maxHeight+"px":void 0,b(e)},y);(0,F.bt)(w,y),(0,F.bt)(()=>(window.addEventListener("resize",w,!1),()=>{window.removeEventListener("resize",w,!1)}),[w]),(0,F.yU)({ref:o,onResize:w});let E=(0,z.useRef)(!1);(0,F.bt)(()=>{let e;let t=()=>{E.current=!0,clearTimeout(e),e=setTimeout(()=>{E.current=!1},500),w()};return null==el||el.addEventListener("resize",t),null==el||el.addEventListener("scroll",t),()=>{null==el||el.removeEventListener("resize",t),null==el||el.removeEventListener("scroll",t)}},[w]);let C=(0,z.useCallback)(()=>{E.current||m()},[m,E]);return!function(e){let{triggerRef:t,isOpen:n,onClose:r}=e;(0,z.useEffect)(()=>{if(!n||null===r)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let o=r||es.get(t.current);o&&o()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,r,t])}({triggerRef:r,isOpen:p,onClose:m&&C}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...g.position,maxHeight:g.maxHeight}},placement:g.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:g.arrowOffsetLeft,top:g.arrowOffsetTop}},updatePosition:w}}let ec=[];function ed(e,t){let{onClose:n,shouldCloseOnBlur:r,isOpen:o,isDismissable:a=!1,isKeyboardDismissDisabled:i=!1,shouldCloseOnInteractOutside:s}=e;(0,z.useEffect)(()=>(o&&ec.push(t),()=>{let e=ec.indexOf(t);e>=0&&ec.splice(e,1)}),[o,t]);let l=()=>{ec[ec.length-1]===t&&n&&n()};(0,G.Fc)({ref:t,onInteractOutside:a&&o?e=>{(!s||s(e.target))&&(ec[ec.length-1]===t&&(e.stopPropagation(),e.preventDefault()),l())}:null,onInteractOutsideStart:e=>{(!s||s(e.target))&&ec[ec.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:u}=(0,G.L_)({isDisabled:!r,onBlurWithin:e=>{!(!e.relatedTarget||(0,j.cW)(e.relatedTarget))&&(!s||s(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||i||(e.stopPropagation(),e.preventDefault(),l())},...u},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}function ef(e,t,n){let r,{type:o}=e,{isOpen:a}=t;(0,z.useEffect)(()=>{n&&n.current&&es.set(n.current,t.close)}),"menu"===o?r=!0:"listbox"===o&&(r="listbox");let i=(0,F.Me)();return{triggerProps:{"aria-haspopup":r,"aria-expanded":a,"aria-controls":a?i:null,onPress:t.toggle},overlayProps:{id:i}}}"undefined"!=typeof document&&window.visualViewport;let ep=z.createContext(null);function em(e){let{children:t}=e,n=(0,z.useContext)(ep),[r,o]=(0,z.useState)(0),a=(0,z.useMemo)(()=>({parent:n,modalCount:r,addModal(){o(e=>e+1),n&&n.addModal()},removeModal(){o(e=>e-1),n&&n.removeModal()}}),[n,r]);return z.createElement(ep.Provider,{value:a},t)}function eh(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,z.useContext)(ep))&&t.modalCount>0||null}};return z.createElement("div",{"data-overlay-container":!0,...e,...n})}function ev(e){return z.createElement(em,null,z.createElement(eh,e))}function eg(e){let t=(0,Z.Av)(),{portalContainer:n=t?null:document.body,...r}=e;if(z.useEffect(()=>{if(null==n?void 0:n.closest("[data-overlay-container]"))throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[n]),!n)return null;let o=z.createElement(ev,r);return H.createPortal(o,n)}var eb={};function ey(e){var t;let{onDismiss:n,...r}=e,o=(0,W.qb)((t=eb)&&t.__esModule?t.default:t,"@react-aria/overlays"),a=(0,F.bE)(r,o.format("dismiss"));return z.createElement(V.T,null,z.createElement("button",{...a,tabIndex:-1,onClick:()=>{n&&n()},style:{width:1,height:1}}))}eb={"ar-AE":r,"bg-BG":o,"cs-CZ":a,"da-DK":i,"de-DE":s,"el-GR":l,"en-US":u,"es-ES":c,"et-EE":d,"fi-FI":f,"fr-FR":p,"he-IL":m,"hr-HR":h,"hu-HU":v,"it-IT":g,"ja-JP":b,"ko-KR":y,"lt-LT":w,"lv-LV":E,"nb-NO":C,"nl-NL":x,"pl-PL":S,"pt-BR":O,"pt-PT":I,"ro-RO":P,"ru-RU":T,"sk-SK":L,"sl-SI":R,"sr-SP":k,"sv-SE":N,"tr-TR":M,"uk-UA":J,"zh-CN":D,"zh-TW":B};let ew=new WeakMap,eE=[];function eC(e,t=document.body){let n=new Set(e),r=new Set,o=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),i=t(e);if(i===NodeFilter.FILTER_ACCEPT&&a(e),i!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)a(e),e=o.nextNode()}},a=e=>{var t;let n=null!==(t=ew.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==n)&&(0===n&&e.setAttribute("aria-hidden","true"),r.add(e),ew.set(e,n+1))};eE.length&&eE[eE.length-1].disconnect(),o(t);let i=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?n.add(e):e instanceof Element&&o(e)}});i.observe(t,{childList:!0,subtree:!0});let s={observe(){i.observe(t,{childList:!0,subtree:!0})},disconnect(){i.disconnect()}};return eE.push(s),()=>{for(let e of(i.disconnect(),r)){let t=ew.get(e);1===t?(e.removeAttribute("aria-hidden"),ew.delete(e)):ew.set(e,t-1)}s===eE[eE.length-1]?(eE.pop(),eE.length&&eE[eE.length-1].observe()):eE.splice(eE.indexOf(s),1)}}let ex=z.createContext(null);function eS(e){let t=(0,Z.Av)(),{portalContainer:n=t?null:document.body,isExiting:r}=e,[o,a]=(0,z.useState)(!1),i=(0,z.useMemo)(()=>({contain:o,setContain:a}),[o,a]);if(!n)return null;let s=e.children;return e.disableFocusManagement||(s=z.createElement(j.MT,{restoreFocus:!0,contain:o&&!r},s)),s=z.createElement(ex.Provider,{value:i},z.createElement(G.mk,null,s)),H.createPortal(s,n)}function eO(){let e=(0,z.useContext)(ex),t=null==e?void 0:e.setContain;(0,F.bt)(()=>{null==t||t(!0)},[t])}},7093:function(e,t,n){n.d(t,{S:function(){return s},T:function(){return l}});var r=n(8322),o=n(1402),a=n(7902);let i={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function s(e={}){let{style:t,isFocusable:n}=e,[r,s]=(0,o.useState)(!1),{focusWithinProps:l}=(0,a.L_)({isDisabled:!n,onFocusWithinChange:e=>s(e)}),u=(0,o.useMemo)(()=>r?t:t?{...i,...t}:i,[r]);return{visuallyHiddenProps:{...l,style:u}}}function l(e){let{children:t,elementType:n="div",isFocusable:a,style:i,...l}=e,{visuallyHiddenProps:u}=s(e);return o.createElement(n,(0,r.dG)(l,u),t)}},3828:function(e,t,n){n.d(t,{d:function(){return a}});var r=n(1402),o=n(3617);function a(e){let[t,n]=(0,o.zk)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),a=(0,r.useCallback)(()=>{n(!0)},[n]),i=(0,r.useCallback)(()=>{n(!1)},[n]),s=(0,r.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:a,close:i,toggle:s}}},2160:function(e,t,n){n.d(t,{Ue:function(){return f}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,o,a);return a},o=e=>e?r(e):r;var a=n(1402),i=n(3454);let{useDebugValue:s}=a,{useSyncExternalStoreWithSelector:l}=i,u=!1,c=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=c,n){n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let r=l(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return s(r),r})(t,e,n);return Object.assign(n,t),n},f=e=>e?d(e):d}}]);