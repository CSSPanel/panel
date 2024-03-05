"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8659],{755:function(e,n,t){t.d(n,{l:function(){return r}});var l=t(7232);function r(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>{n.forEach(n=>(function(e,n){if(null!=e){if((0,l.mf)(e)){e(n);return}try{e.current=n}catch(t){throw Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}}})(n,e))}}},8659:function(e,n,t){t.d(n,{e:function(){return C}});var l=t(4740),r=t(3492);let o={},u=0,a=!1,s=null,i=null;var c=t(1808),d=t(4042),p=t(8084),f=t(2331),v=t(6840),m=t(8147),h=t(7232),y=t(7614),b=t(755),g=t(9763),P=t(6651),x=t(2523),E=t(4008),j=t(6097),k=t(2884),w=t(1840),T=(0,v.Gp)((e,n)=>{let t;let{Component:T,children:C,content:O,isOpen:G,portalContainer:B,placement:N,disableAnimation:D,motionProps:I,getTriggerProps:R,getTooltipProps:z,getTooltipContentProps:H}=function(e){let[n,t]=(0,v.oe)(e,m.v.variantKeys),{ref:x,as:E,isOpen:j,content:k,children:w,defaultOpen:T,onOpenChange:C,isDisabled:O,trigger:G,shouldFlip:B=!0,containerPadding:N=12,placement:D="top",delay:I=0,closeDelay:R=500,showArrow:z=!1,offset:H=7,crossOffset:M=0,isDismissable:K,shouldCloseOnBlur:L=!0,portalContainer:S,isKeyboardDismissDisabled:X=!1,updatePositionDeps:_=[],shouldCloseOnInteractOutside:A,className:F,onClose:J,motionProps:U,classNames:V,...W}=n,Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{delay:n=1500,closeDelay:t=500}=e,{isOpen:c,open:d,close:p}=(0,r.d)(e),f=(0,l.useMemo)(()=>"".concat(++u),[]),v=(0,l.useRef)(),m=()=>{o[f]=b},h=()=>{for(let e in o)e!==f&&(o[e](!0),delete o[e])},y=()=>{clearTimeout(v.current),v.current=null,h(),m(),a=!0,d(),s&&(clearTimeout(s),s=null),i&&(clearTimeout(i),i=null)},b=e=>{e||t<=0?(clearTimeout(v.current),v.current=null,p()):v.current||(v.current=setTimeout(()=>{v.current=null,p()},t)),s&&(clearTimeout(s),s=null),a&&(i&&clearTimeout(i),i=setTimeout(()=>{delete o[f],i=null,a=!1},Math.max(500,t)))},g=()=>{h(),m(),c||s||a?c||y():s=setTimeout(()=>{s=null,a=!0,y()},n)};return(0,l.useEffect)(()=>()=>{clearTimeout(v.current),o[f]&&delete o[f]},[f]),{isOpen:c,open:e=>{e||!(n>0)||v.current?y():g()},close:b}}({delay:I,closeDelay:R,isDisabled:O,defaultOpen:T,isOpen:j,onOpenChange:e=>{null==C||C(e),e||null==J||J()}}),Z=(0,l.useRef)(null),q=(0,l.useRef)(null),Q=(0,l.useId)(),$=Y.isOpen&&!O;(0,l.useImperativeHandle)(x,()=>(0,g.fg)(q));let{triggerProps:ee,tooltipProps:en}=function(e,n,t){let{isDisabled:r,trigger:o}=e,u=(0,c.Me)(),a=(0,l.useRef)(!1),s=(0,l.useRef)(!1),i=()=>{(a.current||s.current)&&n.open(s.current)},f=e=>{a.current||s.current||n.close(e)};(0,l.useEffect)(()=>{let e=e=>{t&&t.current&&"Escape"===e.key&&(e.stopPropagation(),n.close(!0))};if(n.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[t,n]);let v=()=>{s.current=!1,a.current=!1,f(!0)},{hoverProps:m}=(0,d.XI)({isDisabled:r,onHoverStart:()=>{"focus"!==o&&("pointer"===(0,d.Jz)()?a.current=!0:a.current=!1,i())},onHoverEnd:()=>{"focus"!==o&&(s.current=!1,a.current=!1,f())}}),{focusableProps:h}=(0,p.kc)({isDisabled:r,onFocus:()=>{(0,d.E)()&&(s.current=!0,i())},onBlur:()=>{s.current=!1,a.current=!1,f(!0)}},t);return{triggerProps:{"aria-describedby":n.isOpen?u:void 0,...(0,c.dG)(h,m,{onPointerDown:v,onKeyDown:v})},tooltipProps:{id:u}}}({isDisabled:O,trigger:G},Y,Z),{tooltipProps:et}=function(e,n){let t=(0,c.zL)(e,{labelable:!0}),{hoverProps:l}=(0,d.XI)({onHoverStart:()=>null==n?void 0:n.open(!0),onHoverEnd:()=>null==n?void 0:n.close()});return{tooltipProps:(0,c.dG)(t,l,{role:"tooltip"})}}({isOpen:$,...(0,c.dG)(n,en)},Y),{overlayProps:el,placement:er,updatePosition:eo}=(0,f.tN)({isOpen:$,targetRef:Z,placement:(0,P.Yx)(D),overlayRef:q,offset:z?H+3:H,crossOffset:M,shouldFlip:B,containerPadding:N});(0,l.useLayoutEffect)(()=>{_.length&&eo()},_);let{overlayProps:eu}=(0,f.Ir)({isOpen:$,onClose:Y.close,isDismissable:K,shouldCloseOnBlur:L,isKeyboardDismissDisabled:X,shouldCloseOnInteractOutside:A},q),ea=(0,l.useMemo)(()=>{var n,l,r;return(0,m.v)({...t,radius:null!=(n=null==e?void 0:e.radius)?n:"md",size:null!=(l=null==e?void 0:e.size)?l:"md",shadow:null!=(r=null==e?void 0:e.shadow)?r:"sm"})},[...Object.values(t),null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),es=(0,l.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...(0,c.dG)(ee,e),ref:(0,b.l)(n,Z),"aria-describedby":$?Q:void 0}},[ee,$,Q,Y]),ei=(0,l.useCallback)(()=>({ref:q,"data-slot":"base","data-open":(0,h.PB)($),"data-arrow":(0,h.PB)(z),"data-disabled":(0,h.PB)(O),"data-placement":(0,P.sK)(er,D),...(0,c.dG)(et,eu,W),style:(0,c.dG)(el.style,W.style,n.style),className:ea.base({class:null==V?void 0:V.base}),id:Q}),[ea,$,z,O,er,D,et,eu,W,el,n,Q]),ec=(0,l.useCallback)(()=>({"data-slot":"content","data-open":(0,h.PB)($),"data-arrow":(0,h.PB)(z),"data-disabled":(0,h.PB)(O),"data-placement":(0,P.sK)(er,D),className:ea.content({class:(0,y.W)(null==V?void 0:V.content,F)})}),[ea,$,z,O,er,D,V]);return{Component:E||"div",content:k,children:w,isOpen:$,triggerRef:Z,showArrow:z,portalContainer:S,placement:D,disableAnimation:null==e?void 0:e.disableAnimation,isDisabled:O,motionProps:U,getTooltipContentProps:ec,getTriggerProps:es,getTooltipProps:ei}}({...e,ref:n});try{let e=l.Children.only(C);t=(0,l.cloneElement)(e,R(e.props,e.ref))}catch(e){t=(0,w.jsx)("span",{}),(0,k.Z)("Tooltip must have only one child node. Please, check your code.")}let{ref:M,id:K,style:L,...S}=z(),X=(0,w.jsx)("div",{ref:M,id:K,style:L,children:(0,w.jsx)(x.E.div,{animate:"enter",exit:"exit",initial:"exit",variants:j.y7.scaleSpring,...(0,c.dG)(I,S),style:{...(0,P.VS)(N)},children:(0,w.jsx)(T,{...H(),children:O})})});return(0,w.jsxs)(w.Fragment,{children:[t,D&&G?(0,w.jsx)(f.Xj,{portalContainer:B,children:(0,w.jsx)("div",{ref:M,id:K,style:L,...S,children:(0,w.jsx)(T,{...H(),children:O})})}):(0,w.jsx)(E.M,{children:G?(0,w.jsx)(f.Xj,{portalContainer:B,children:X}):null})]})});T.displayName="NextUI.Tooltip";var C=T}}]);