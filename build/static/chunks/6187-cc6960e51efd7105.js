"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6187],{1848:function(e,t,l){l.d(t,{Cs:function(){return h},_t:function(){return K},dp:function(){return p},gq:function(){return y},ip:function(){return d}});var i=l(8946),n=l(1402),r=l(7069),o=l(8322),s=l(7902),c=l(1938);function u(e){return(0,o.ad)()?e.altKey:e.ctrlKey}function a(e){return(0,o.V5)()?e.metaKey:e.ctrlKey}function d(e){let{keyboardDelegate:t,selectionManager:l,onTypeSelect:i}=e,r=(0,n.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var n;let o=1!==(n=e.key).length&&/^[A-Z]/i.test(n)?"":n;if(!o||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==o||!(r.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),r.search+=o;let s=t.getKeyForSearch(r.search,l.focusedKey);null==s&&(s=t.getKeyForSearch(r.search)),null!=s&&(l.setFocusedKey(s),i&&i(s)),clearTimeout(r.timeout),r.timeout=setTimeout(()=>{r.search=""},1e3)}:null}}}function y(e){let t,{selectionManager:l,keyboardDelegate:y,ref:h,autoFocus:f=!1,shouldFocusWrap:g=!1,disallowEmptySelection:p=!1,disallowSelectAll:K=!1,selectOnFocus:v="replace"===l.selectionBehavior,disallowTypeAhead:m=!1,shouldUseVirtualFocus:S,allowsTabNavigation:k=!1,isVirtualized:w,scrollRef:b=h,linkBehavior:x="action"}=e,{direction:C}=(0,c.bU)(),F=(0,o.tv)(),I=(0,n.useRef)({top:0,left:0});(0,o.zX)(b,"scroll",w?null:()=>{I.current={top:b.current.scrollTop,left:b.current.scrollLeft}});let N=(0,n.useRef)(f);(0,n.useEffect)(()=>{if(N.current){let e=null;"first"===f&&(e=y.getFirstKey()),"last"===f&&(e=y.getLastKey());let t=l.selectedKeys;if(t.size){for(let i of t)if(l.canSelectItem(i)){e=i;break}}l.setFocused(!0),l.setFocusedKey(e),null!=e||S||(0,r.ex)(h.current)}},[]);let M=(0,n.useRef)(l.focusedKey);(0,n.useEffect)(()=>{let e=(0,s.Jz)();if(l.isFocused&&null!=l.focusedKey&&(null==b?void 0:b.current)){let t=b.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);t&&("keyboard"===e||N.current)&&(w||(0,o.zT)(b.current,t),(0,o.Gt)(t,{containingElement:h.current}))}l.isFocused&&null==l.focusedKey&&null!=M.current&&(0,r.ex)(h.current),M.current=l.focusedKey,N.current=!1},[w,b,l.focusedKey,l.isFocused,h]);let E={onKeyDown:e=>{var t,n,s,c,d,f,m,S;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!h.current.contains(e.target))return;let w=(t,n)=>{if(null!=t){if(l.isLink(t)&&"selection"===x&&v&&!u(e)){(0,i.flushSync)(()=>{l.setFocusedKey(t,n)});let r=b.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);F.open(r,e);return}l.setFocusedKey(t,n),l.isLink(t)&&"override"===x||(e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):v&&!u(e)&&l.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(y.getKeyBelow){e.preventDefault();let i=null!=l.focusedKey?y.getKeyBelow(l.focusedKey):null===(t=y.getFirstKey)||void 0===t?void 0:t.call(y);null==i&&g&&(i=null===(n=y.getFirstKey)||void 0===n?void 0:n.call(y,l.focusedKey)),w(i)}break;case"ArrowUp":if(y.getKeyAbove){e.preventDefault();let t=null!=l.focusedKey?y.getKeyAbove(l.focusedKey):null===(s=y.getLastKey)||void 0===s?void 0:s.call(y);null==t&&g&&(t=null===(c=y.getLastKey)||void 0===c?void 0:c.call(y,l.focusedKey)),w(t)}break;case"ArrowLeft":if(y.getKeyLeftOf){e.preventDefault();let t=y.getKeyLeftOf(l.focusedKey);null==t&&g&&(t="rtl"===C?null===(d=y.getFirstKey)||void 0===d?void 0:d.call(y,l.focusedKey):null===(f=y.getLastKey)||void 0===f?void 0:f.call(y,l.focusedKey)),w(t,"rtl"===C?"first":"last")}break;case"ArrowRight":if(y.getKeyRightOf){e.preventDefault();let t=y.getKeyRightOf(l.focusedKey);null==t&&g&&(t="rtl"===C?null===(m=y.getLastKey)||void 0===m?void 0:m.call(y,l.focusedKey):null===(S=y.getFirstKey)||void 0===S?void 0:S.call(y,l.focusedKey)),w(t,"rtl"===C?"last":"first")}break;case"Home":if(y.getFirstKey){e.preventDefault();let t=y.getFirstKey(l.focusedKey,a(e));l.setFocusedKey(t),a(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):v&&l.replaceSelection(t)}break;case"End":if(y.getLastKey){e.preventDefault();let t=y.getLastKey(l.focusedKey,a(e));l.setFocusedKey(t),a(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):v&&l.replaceSelection(t)}break;case"PageDown":y.getKeyPageBelow&&(e.preventDefault(),w(y.getKeyPageBelow(l.focusedKey)));break;case"PageUp":y.getKeyPageAbove&&(e.preventDefault(),w(y.getKeyPageAbove(l.focusedKey)));break;case"a":a(e)&&"multiple"===l.selectionMode&&!0!==K&&(e.preventDefault(),l.selectAll());break;case"Escape":e.preventDefault(),p||l.clearSelection();break;case"Tab":if(!k){if(e.shiftKey)h.current.focus();else{let e,t,l=(0,r.QL)(h.current,{tabbable:!0});do(t=l.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,o.Ao)(e)}}}},onFocus:e=>{if(l.isFocused){e.currentTarget.contains(e.target)||l.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(l.setFocused(!0),null==l.focusedKey){var t,i;let n=e=>{null!=e&&(l.setFocusedKey(e),v&&l.replaceSelection(e))},r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?n(null!==(t=l.lastSelectedKey)&&void 0!==t?t:y.getLastKey()):n(null!==(i=l.firstSelectedKey)&&void 0!==i?i:y.getFirstKey())}else w||(b.current.scrollTop=I.current.top,b.current.scrollLeft=I.current.left);if(!w&&null!=l.focusedKey){let e=b.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,o.Ao)(e),"keyboard"===(0,s.Jz)()&&(0,o.Gt)(e,{containingElement:h.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l.setFocused(!1)},onMouseDown(e){b.current===e.target&&e.preventDefault()}},{typeSelectProps:B}=d({keyboardDelegate:y,selectionManager:l});return m||(E=(0,o.dG)(B,E)),S||(t=null==l.focusedKey?0:-1),{collectionProps:{...E,tabIndex:t}}}function h(e){let{selectionManager:t,key:l,ref:i,shouldSelectOnPressUp:c,shouldUseVirtualFocus:d,focus:y,isDisabled:h,onAction:p,allowsDifferentPressOrigin:K,linkBehavior:v="action"}=e,m=(0,o.tv)(),S=e=>{if("keyboard"===e.pointerType&&u(e))t.toggleSelection(l);else{if("none"===t.selectionMode)return;if(t.isLink(l)){if("selection"===v){m.open(i.current,e),t.setSelectedKeys(t.selectedKeys);return}if("override"===v||"none"===v)return}"single"===t.selectionMode?t.isSelected(l)&&!t.disallowEmptySelection?t.toggleSelection(l):t.replaceSelection(l):e&&e.shiftKey?t.extendSelection(l):"toggle"===t.selectionBehavior||e&&(a(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(l):t.replaceSelection(l)}};(0,n.useEffect)(()=>{l===t.focusedKey&&t.isFocused&&!d&&(y?y():document.activeElement!==i.current&&(0,r.ex)(i.current))},[i,l,t.focusedKey,t.childFocusStrategy,t.isFocused,d]),h=h||t.isDisabled(l);let k={};d||h?h&&(k.onMouseDown=e=>{e.preventDefault()}):k={tabIndex:l===t.focusedKey?0:-1,onFocus(e){e.target===i.current&&t.setFocusedKey(l)}};let w=t.isLink(l)&&"override"===v,b=t.isLink(l)&&"selection"!==v&&"none"!==v,x=!h&&t.canSelectItem(l)&&!w,C=(p||b)&&!h,F=C&&("replace"===t.selectionBehavior?!x:!x||t.isEmpty),I=C&&x&&"replace"===t.selectionBehavior,N=F||I,M=(0,n.useRef)(null),E=N&&x,B=(0,n.useRef)(!1),T=(0,n.useRef)(!1),P=e=>{p&&p(),b&&m.open(i.current,e)},A={};c?(A.onPressStart=e=>{M.current=e.pointerType,B.current=E,"keyboard"===e.pointerType&&(!N||g())&&S(e)},K?(A.onPressUp=F?null:e=>{"keyboard"!==e.pointerType&&x&&S(e)},A.onPress=F?P:null):A.onPress=e=>{F||I&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||f())&&P(e):"keyboard"!==e.pointerType&&x&&S(e)}):(A.onPressStart=e=>{M.current=e.pointerType,B.current=E,T.current=F,x&&("mouse"===e.pointerType&&!F||"keyboard"===e.pointerType&&(!C||g()))&&S(e)},A.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&N&&f()||"mouse"===e.pointerType&&T.current)&&(N?P(e):x&&S(e))}),k["data-key"]=l,A.preventFocusOnPress=d;let{pressProps:D,isPressed:R}=(0,s.r7)(A),$=I?e=>{"mouse"===M.current&&(e.stopPropagation(),e.preventDefault(),P(e))}:void 0,{longPressProps:L}=(0,s.TA)({isDisabled:!E,onLongPress(e){"touch"===e.pointerType&&(S(e),t.setSelectionBehavior("toggle"))}}),O=t.isLink(l)?e=>{o.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,o.dG)(k,x||F?D:{},E?L:{},{onDoubleClick:$,onDragStartCapture:e=>{"touch"===M.current&&B.current&&e.preventDefault()},onClick:O}),isPressed:R,isSelected:t.isSelected(l),isFocused:t.isFocused&&t.focusedKey===l,isDisabled:h,allowsSelection:x,hasAction:N}}function f(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function g(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}class p{getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,l){let i=this.getItem(e);if(!i)return null;let n=i.getBoundingClientRect();do e=t(e),i=this.getItem(e);while(i&&l(n,i.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)}getKeyPageAbove(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,o.a9)(t))return this.getFirstKey();let i=t.getBoundingClientRect(),n=l.getBoundingClientRect();if("horizontal"===this.orientation){let r=i.x-t.scrollLeft,o=Math.max(0,n.x-r+n.width-i.width);for(;l&&n.x-r>o;)n=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let r=i.y-t.scrollTop,o=Math.max(0,n.y-r+n.height-i.height);for(;l&&n.y-r>o;)n=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,o.a9)(t))return this.getLastKey();let i=t.getBoundingClientRect(),n=l.getBoundingClientRect();if("horizontal"===this.orientation){let r=i.x-t.scrollLeft,o=Math.min(t.scrollWidth,n.x-r-n.width+i.width);for(;l&&n.x-r<o;)n=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let r=i.y-t.scrollTop,o=Math.min(t.scrollHeight,n.y-r-n.height+i.height);for(;l&&n.y-r<o;)n=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,i=t||this.getFirstKey();for(;null!=i;){let t=l.getItem(i),n=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(n,e))return i;i=this.getKeyBelow(i)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}function K(e){let{selectionManager:t,collection:l,disabledKeys:i,ref:r,keyboardDelegate:o}=e,s=(0,c.Xe)({usage:"search",sensitivity:"base"}),u=t.disabledBehavior,a=(0,n.useMemo)(()=>o||new p(l,"selection"===u?new Set:i,r,s),[o,l,i,r,s,u]),{collectionProps:d}=y({...e,ref:r,selectionManager:t,keyboardDelegate:a});return{listProps:d}}},7796:function(e,t,l){l.d(t,{Em:function(){return a},Kx:function(){return s},_P:function(){return c},eg:function(){return y},is:function(){return g},l8:function(){return u},s:function(){return d}});var i=l(1402);class n{build(e,t){return this.context=t,r(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let l of e.items)yield*this.getFullNode({value:l},{renderer:t})}else{let e=[];i.Children.forEach(t,t=>{e.push(t)});let l=0;for(let t of e)for(let e of this.getFullNode({element:t,index:l},{}))l++,yield e}}getKey(e,t,l,i){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${i}${t.key}`;let n=t.value;if(null!=n){var r;let e=null!==(r=n.key)&&void 0!==r?r:n.id;if(null==e)throw Error("No key found for item");return e}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,n){let s=e.element;if(!s&&e.value&&t&&t.renderer){let l=this.cache.get(e.value);if(l&&(!l.shouldInvalidate||!l.shouldInvalidate(this.context))){l.index=e.index,l.parentKey=n?n.key:null,yield l;return}s=t.renderer(e.value)}if(i.isValidElement(s)){let i=s.type;if("function"!=typeof i&&"function"!=typeof i.getCollectionNode){let e="function"==typeof s.type?s.type.name:s.type;throw Error(`Unknown element <${e}> in collection.`)}let r=i.getCollectionNode(s.props,this.context),c=e.index,u=r.next();for(;!u.done&&u.value;){let i=u.value;e.index=c;let a=i.key;a||(a=i.element?null:this.getKey(s,e,t,l));let d=[...this.getFullNode({...i,key:a,index:c,wrapper:function(e,t){return e&&t?l=>e(t(l)):e||t||void 0}(e.wrapper,i.wrapper)},this.getChildState(t,i),l?`${l}${s.key}`:s.key,n)];for(let t of d){if(t.value=i.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${o(t.type)}> in <${o(n.type)}>. Only <${o(e.type)}> is supported.`);c++,yield t}u=r.next(d)}return}if(null==e.key)return;let c=this,u={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:r(function*(){if(!e.hasChildNodes)return;let l=0;for(let i of e.childNodes())for(let e of(null!=i.key&&(i.key=`${u.key}${i.key}`),i.index=l,c.getFullNode(i,c.getChildState(t,i),u.key,u)))l++,yield e})};yield u}constructor(){this.cache=new WeakMap}}function r(e){let t=[],l=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let i of(l||(l=e()),l))t.push(i),yield i}}}function o(e){return e[0].toUpperCase()+e.slice(1)}function s(e,t,l){let r=(0,i.useMemo)(()=>new n,[]),{children:o,items:s,collection:c}=e;return(0,i.useMemo)(()=>c||t(r.build({children:o,items:s},l)),[r,o,s,c,l,t])}function c(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function u(e){return a(e,0)}function a(e,t){if(t<0)return;let l=0;for(let i of e){if(l===t)return i;l++}}function d(e){let t;for(let l of e)t=l;return t}function y(e,t,l){if(t.parentKey===l.parentKey)return t.index-l.index;let i=[...h(e,t),t],n=[...h(e,l),l],r=i.slice(0,n.length).findIndex((e,t)=>e!==n[t]);return -1!==r?(t=i[r],l=n[r],t.index-l.index):i.findIndex(e=>e===l)>=0?1:(n.findIndex(e=>e===t),-1)}function h(e,t){let l=[];for(;(null==t?void 0:t.parentKey)!=null;)l.unshift(t=e.getItem(t.parentKey));return l}let f=new WeakMap;function g(e){let t=f.get(e);if(null!=t)return t;t=0;let l=i=>{for(let n of i)"section"===n.type?l(c(n,e)):t++};return l(e),f.set(e,t),t}},5201:function(e,t,l){l.d(t,{$0:function(){return s},Kx:function(){return d},_P:function(){return y},ck:function(){return r},eg:function(){return f},is:function(){return K},l8:function(){return h}});var i=l(1402);function n(e){return null}n.getCollectionNode=function*(e,t){let{childItems:l,title:n,children:r}=e,o=e.title||e.children,s=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&i.Children.count(e.children)>0),*childNodes(){if(l)for(let e of l)yield{type:"item",value:e};else if(n){let e=[];i.Children.forEach(r,t=>{e.push({type:"item",element:t})}),yield*e}}}};let r=n;function o(e){return null}o.getCollectionNode=function*(e){let{children:t,title:l,items:n}=e;yield{type:"section",props:e,hasChildNodes:!0,rendered:l,"aria-label":e["aria-label"],*childNodes(){if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let e of n)yield{type:"item",value:e,renderer:t}}else{let e=[];i.Children.forEach(t,t=>{e.push({type:"item",element:t})}),yield*e}}}};let s=o;class c{build(e,t){return this.context=t,u(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let l of e.items)yield*this.getFullNode({value:l},{renderer:t})}else{let e=[];i.Children.forEach(t,t=>{e.push(t)});let l=0;for(let t of e)for(let e of this.getFullNode({element:t,index:l},{}))l++,yield e}}getKey(e,t,l,i){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${i}${t.key}`;let n=t.value;if(null!=n){var r;let e=null!==(r=n.key)&&void 0!==r?r:n.id;if(null==e)throw Error("No key found for item");return e}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,n){let r=e.element;if(!r&&e.value&&t&&t.renderer){let l=this.cache.get(e.value);if(l&&(!l.shouldInvalidate||!l.shouldInvalidate(this.context))){l.index=e.index,l.parentKey=n?n.key:null,yield l;return}r=t.renderer(e.value)}if(i.isValidElement(r)){let i=r.type;if("function"!=typeof i&&"function"!=typeof i.getCollectionNode){let e="function"==typeof r.type?r.type.name:r.type;throw Error(`Unknown element <${e}> in collection.`)}let o=i.getCollectionNode(r.props,this.context),s=e.index,c=o.next();for(;!c.done&&c.value;){let i=c.value;e.index=s;let u=i.key;u||(u=i.element?null:this.getKey(r,e,t,l));let d=[...this.getFullNode({...i,key:u,index:s,wrapper:function(e,t){return e&&t?l=>e(t(l)):e||t||void 0}(e.wrapper,i.wrapper)},this.getChildState(t,i),l?`${l}${r.key}`:r.key,n)];for(let t of d){if(t.value=i.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${a(t.type)}> in <${a(n.type)}>. Only <${a(e.type)}> is supported.`);s++,yield t}c=o.next(d)}return}if(null==e.key)return;let o=this,s={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:u(function*(){if(!e.hasChildNodes)return;let l=0;for(let i of e.childNodes())for(let e of(null!=i.key&&(i.key=`${s.key}${i.key}`),i.index=l,o.getFullNode(i,o.getChildState(t,i),s.key,s)))l++,yield e})};yield s}constructor(){this.cache=new WeakMap}}function u(e){let t=[],l=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let i of(l||(l=e()),l))t.push(i),yield i}}}function a(e){return e[0].toUpperCase()+e.slice(1)}function d(e,t,l){let n=(0,i.useMemo)(()=>new c,[]),{children:r,items:o,collection:s}=e;return(0,i.useMemo)(()=>s||t(n.build({children:r,items:o},l)),[n,r,o,s,l,t])}function y(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function h(e){return function(e,t){let l=0;for(let t of e){if(0===l)return t;l++}}(e,0)}function f(e,t,l){if(t.parentKey===l.parentKey)return t.index-l.index;let i=[...g(e,t),t],n=[...g(e,l),l],r=i.slice(0,n.length).findIndex((e,t)=>e!==n[t]);return -1!==r?(t=i[r],l=n[r],t.index-l.index):i.findIndex(e=>e===l)>=0?1:(n.findIndex(e=>e===t),-1)}function g(e,t){let l=[];for(;(null==t?void 0:t.parentKey)!=null;)l.unshift(t=e.getItem(t.parentKey));return l}let p=new WeakMap;function K(e){let t=p.get(e);if(null!=t)return t;t=0;let l=i=>{for(let n of i)"section"===n.type?l(y(n,e)):t++};return l(e),p.set(e,t),t}},8058:function(e,t,l){l.d(t,{Z:function(){return u},q:function(){return s}});var i=l(3617),n=l(1402),r=l(7796);class o extends Set{constructor(e,t,l){super(e),e instanceof o?(this.anchorKey=t||e.anchorKey,this.currentKey=l||e.currentKey):(this.anchorKey=t,this.currentKey=l)}}function s(e){let{selectionMode:t="none",disallowEmptySelection:l,allowDuplicateSelectionEvents:r,selectionBehavior:s="toggle",disabledBehavior:u="all"}=e,a=(0,n.useRef)(!1),[,d]=(0,n.useState)(!1),y=(0,n.useRef)(null),h=(0,n.useRef)(null),[,f]=(0,n.useState)(null),g=(0,n.useMemo)(()=>c(e.selectedKeys),[e.selectedKeys]),p=(0,n.useMemo)(()=>c(e.defaultSelectedKeys,new o),[e.defaultSelectedKeys]),[K,v]=(0,i.zk)(g,p,e.onSelectionChange),m=(0,n.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[S,k]=(0,n.useState)(s);"replace"===s&&"toggle"===S&&"object"==typeof K&&0===K.size&&k("replace");let w=(0,n.useRef)(s);return(0,n.useEffect)(()=>{s!==w.current&&(k(s),w.current=s)},[s]),{selectionMode:t,disallowEmptySelection:l,selectionBehavior:S,setSelectionBehavior:k,get isFocused(){return a.current},setFocused(e){a.current=e,d(e)},get focusedKey(){return y.current},get childFocusStrategy(){return h.current},setFocusedKey(e,t="first"){y.current=e,h.current=t,f(e)},selectedKeys:K,setSelectedKeys(e){(r||!function(e,t){if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;return!0}(e,K))&&v(e)},disabledKeys:m,disabledBehavior:u}}function c(e,t){return e?"all"===e?"all":new o(e):t}class u{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&0>(0,r.eg)(this.collection,l,e))&&(e=l)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&(0,r.eg)(this.collection,l,e)>0)&&(e=l)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new o([e],e,e);else{let l=this.state.selectedKeys,i=l.anchorKey||e;for(let n of(t=new o(l,i,e),this.getKeyRange(i,l.currentKey||e)))t.delete(n);for(let l of this.getKeyRange(e,i))this.canSelectItem(l)&&t.add(l)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?0>=(0,r.eg)(this.collection,l,i)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],i=e;for(;i;){let e=this.collection.getItem(i);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&l.push(i),i===t)return l;i=this.collection.getKeyAfter(i)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new o("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new o([e],e,e):new o;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new o;for(let l of e)if(null!=(l=this.getKey(l))&&(t.add(l),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l;){if(this.canSelectItem(l)){let i=this.collection.getItem(l);"item"===i.type&&e.push(l),i.hasChildNodes&&(this.allowsCellSelection||"item"!==i.type)&&t((0,r.l8)((0,r._P)(i,this.collection)).key)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new o)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let t=this.collection.getItem(e);return!!t&&("cell"!==t.type||!!this.allowsCellSelection)}isDisabled(e){return this.state.disabledKeys.has(e)&&"all"===this.state.disabledBehavior}isLink(e){var t,l;return!!(null===(l=this.collection.getItem(e))||void 0===l?void 0:null===(t=l.props)||void 0===t?void 0:t.href)}constructor(e,t,l){var i;this.collection=e,this.state=t,this.allowsCellSelection=null!==(i=null==l?void 0:l.allowsCellSelection)&&void 0!==i&&i,this._isSelectAll=null}}}}]);