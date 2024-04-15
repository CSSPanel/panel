"use strict";exports.id=8832,exports.ids=[8832],exports.modules={31513:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(28818),s=n(79100),r=n(69436),i=n(70322),l=n(98181),o=n(45867),c=n(37114);let d=({open:e,children:t,action:n,handleClose:d,isLoading:m,actionText:u})=>a.jsx(s.R,{isOpen:e,onOpenChange:!m&&d||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:a.jsx(r.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.k,{className:"flex flex-col gap-1",children:"Confirmation"}),a.jsx(l.I,{children:t}),(0,a.jsxs)(o.R,{children:[a.jsx(c.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),a.jsx(c.A,{color:"primary",onPress:n,isLoading:m,children:u||"Confirm"})]})]})})})},60363:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(28818),s=n(38039),r=n(36438),i=n(84963),l=n(57705);let o=(e,t)=>{(0,l.useEffect)(()=>{let n=n=>{let a=e?.current;!a||a?.contains(n.target)||t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])};var c=n(92965);let d=({open:e,x:t,y:n,handleCloseMenu:d,items:m})=>{let u=(0,l.useRef)(null);return o(u,d),e&&a.jsx(c.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:t,top:n},ref:u,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:a.jsx(s.X,{variant:"flat","aria-label":"Listbox menu with sections",items:m,children:m.map(({category:e,items:t})=>a.jsx(r.y,{title:e,children:t.map(({key:e,description:t,icon:n,color:s,onClick:r})=>a.jsx(i.R,{description:a.jsx("span",{className:"text-foreground-700",children:t}),startContent:a.jsx(n,{}),color:s||"default",onClick:()=>{r&&r(),d()},children:e},e))},e))})})}},88832:(e,t,n)=>{n.d(t,{f:()=>H,default:()=>q});var a=n(28818),s=n(65942),r=n(66435),i=n(63968),l=n(35721),o=n(20086),c=n(82746),d=n(29121),m=n(75220),u=n(98069),h=n(64670),x=n(51981),j=n(84963),p=n(53915),g=n(40060),y=n(45311),v=n(4569),f=n(3166),b=n(37114),w=n(10840),C=n(14507),T=n(57705),z=n(39257),E=n(98471),N=n(19539),P=n(21926),D=n(54506);let S=(0,P.Ue)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));D.z.object({reason:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string(),type:N.P}),D.z.object({comment:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string(),type:N.P}),D.z.enum(["unmute","remute","comment","edit","delete"]);var M=n(96870),R=n(31513),Z=n(3887),L=n(60363),_=n(44568),A=n(75785),k=n(72661),U=n(10048),I=n(33218),X=n(79100),Y=n(69436),F=n(70322),V=n(98181),$=n(45867),G=n(11532);let O=({open:e,setOpen:t,mutate:n})=>{let[s,r]=(0,T.useState)(!1),i=async()=>{if(!s){r(!0);try{await (0,G.Z)("/api/mutes",{method:"POST",data:l.values}),await n(),k.Am.success("Succesfully muted player!"),t(!1)}catch(t){let e=t?.response?.data||t?.message;console.error(t),k.Am.error(`Failed to create mute!
${e||t}`)}r(!1)}},l=(0,U.c)({initialValues:{player_steamid:"",reason:"",duration:"",comment:"",type:"MUTE"},validate:(0,I.F)(N.Z)});return a.jsx(X.R,{isOpen:e,onOpenChange:s?void 0:t,children:a.jsx(Y.A,{children:e=>(0,a.jsxs)("form",{onSubmit:l.onSubmit(i),children:[a.jsx(F.k,{className:"flex flex-col gap-1",children:"Create new mute"}),(0,a.jsxs)(V.I,{children:[a.jsx(C.Y,{...l.getInputProps("player_steamid"),errorMessage:l.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:s,autoFocus:!0}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[l.values.type],onChange:e=>l.setValues({type:e.target.value}),isDisabled:s,disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{...l.getInputProps("reason"),errorMessage:l.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:s}),a.jsx(C.Y,{...l.getInputProps("duration"),errorMessage:l.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:s}),a.jsx(C.Y,{...l.getInputProps("comment"),errorMessage:l.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:s}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start now ",(0,a.jsxs)("b",{children:["(",(0,M.Z)(),")"]})]}),(0,a.jsxs)("span",{children:["and will end at"," ",a.jsx("b",{children:"0"===l.values.duration?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date().getTime()+6e4*Number(l.values.duration))})]})]})]}),(0,a.jsxs)($.R,{children:[a.jsx(b.A,{color:"danger",variant:"flat",onPress:e,isDisabled:s,children:"Cancel"}),a.jsx(b.A,{color:"primary",type:"submit",isLoading:s,children:"Mute player"})]})]})})})},W=e=>{switch(e){case"ACTIVE":return a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return a.jsx(E.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNMUTED":return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var J=n(60562),K=n(56114);let H=[{name:"Gag (Chat)",value:"GAG"},{name:"Mute (Voice)",value:"MUTE"},{name:"Silence (Both)",value:"SILENCE"}],q=({type:e})=>{let[t,n]=(0,T.useState)(!1),[N,P]=(0,T.useState)(1),[D,U]=(0,T.useState)(""),[I]=(0,w.Nr)(D,500),X=10;"/"===(0,v.usePathname)()&&(X=5);let{data:Y,isLoading:F,mutate:V}=(0,K.ZP)(`/api/mutes?page=${N}&rows=${X}&query=${I}`,A.Z,{keepPreviousData:!0}),$=(0,T.useMemo)(()=>Y?.count?Math.ceil(Y.count/X):0,[Y?.count,X]),{admin:q}=(0,_.ZP)(),{x:B,y:Q,open:ee,handleCloseMenu:et,handleOpen:en,info:ea}=(0,Z.Z)(),es=S(e=>e.action),er=S(e=>e.setAction),ei=S(e=>e.details),el=S(e=>e.setDetails),eo=S(e=>e.isLoading),ec=S(e=>e.setIsLoading),ed=S(e=>e.reset),em=async()=>{if(es&&!eo&&ea){ec(!0);try{await G.Z.post(`/api/mutes/${ea.id}`,{action:es,details:ei}),await V(),ed(),k.ZP.success(`Player ${es}ed successfully`)}catch(e){k.ZP.error(`Error ${es} player`)}ec(!1)}},eu=(e,t)=>{switch(t){case"player_name":return a.jsx(J.default,{href:`https://steamcommunity.com/profiles/${e.player_steamid}`,target:"_blank",passHref:!0,children:a.jsx(z.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:e.player_name?.slice(0,10)})});case"status":return W(e.status);case"reason":return e.reason.length>10?a.jsx(f.e,{content:e.reason,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.reason});case"unmute_reason":return e.unmute_reason&&e.unmute_reason.length>10?a.jsx(f.e,{content:e.unmute_reason,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.unmute_reason?.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.unmute_reason});case"type":return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:e.type});case"duration":return a.jsx(E.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":`${e.duration} minutes`});case"admin_name":return e.admin_name?"Console"===e.admin_name?a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):a.jsx(J.default,{href:`https://steamcommunity.com/profiles/${e.admin_steamid}`,target:"_blank",passHref:!0,children:a.jsx(z.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):a.jsx(a.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNMUTED"===e.status||"EXPIRED"===e.status)return a.jsx(g.W,{color:"success",value:100,isStriped:!0});let n=new Date,s=new Date(e.created),r=new Date(e.ends),i=Math.round((n.getTime()-s.getTime())/(r.getTime()-s.getTime())*100)||0,l=Math.round((r.getTime()-n.getTime())/6e4),o=i<50?"warning":i>=100?"success":"primary";return l>0?a.jsx(f.e,{content:`${l} minutes left`,color:o,showArrow:!0,children:a.jsx(g.W,{color:o,value:i,isStriped:!0})}):a.jsx(g.W,{color:o,value:i,isStriped:!0});case"comment":return e.comment?e.comment.length>10?a.jsx(f.e,{content:e.comment,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.comment}):a.jsx(a.Fragment,{children:"-"});case"created":return(0,M.Z)(e.created);default:return a.jsx(a.Fragment,{})}},eh=a.jsx(a.Fragment,{});switch(e){case"MANAGE":eh=(0,a.jsxs)(s.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Admin"},"admin_name"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Remove Reason"},"unmute_reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft"),a.jsx(r.j,{children:"Comment"},"comment")]});break;case"SMALL":eh=(0,a.jsxs)(s.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":eh=(0,a.jsxs)(s.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Admin"},"admin_name"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Remove Reason"},"unmute_reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft")]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.b,{topContent:(0,a.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,a.jsxs)("div",{className:"text-start",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Mutes"}),(0,a.jsxs)("code",{className:"text-sm font-normal",children:["total: ",Y?.count||""]})]}),(0,a.jsxs)("div",{className:"flex",children:[a.jsx(f.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,children:a.jsx(C.Y,{label:"Search",labelPlacement:"outside-left",value:D,onValueChange:U,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},isClearable:!0})}),q&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>n(!0),children:[a.jsx(d.Z,{}),"New mute"]}),a.jsx(O,{open:t,setOpen:n,mutate:V})]})]})]}),bottomContent:(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"flex w-full justify-center",children:a.jsx(p.g,{color:"primary",page:N,total:$,onChange:e=>P(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),q&&"MANAGE"===e&&a.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[eh,a.jsx(l.y,{items:Y?.results??[],loadingContent:a.jsx(y.c,{}),loadingState:F?"loading":"idle",children:e=>a.jsx(o.g,{onContextMenu:t=>q&&en&&en(t,e)||void 0,children:t=>a.jsx(c.X,{children:eu(e,t)})},e.id)})]}),q&&a.jsx(L.Z,{open:ee,x:B,y:Q,handleCloseMenu:et,items:[{category:"Mute Actions",items:[{key:"Comment",description:"Write a comment on this mute, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{er("comment"),el({comment:ea?.comment||""})}},{key:ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?"Re-mute":"Remove Mute (shorten)",description:ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?"Re-mute the player":"Remove the player mute (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?(er("remute"),el({reason:"",duration:"0",type:"MUTE"})):(er("unmute"),el({reason:""}))}},{key:"Edit Mute",description:"Edit the mute duration or reason",icon:m.Z,color:"primary",onClick:()=>{er("edit"),el({reason:ea?.reason||"",duration:ea?.duration.toString()||"0",type:ea?.type||"MUTE"})}},{key:"Delete Mute",description:"Delete the mute from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{er("delete")}}]}]}),q&&(0,a.jsxs)(R.Z,{open:"comment"===es,handleClose:ed,action:em,isLoading:eo,actionText:"Save",children:[a.jsx("div",{children:"Write a comment on this mute, this will be visible to other admins"}),a.jsx(C.Y,{label:"Comment",value:ei?.comment||"",onValueChange:e=>el({comment:e})})]}),q&&(0,a.jsxs)(R.Z,{open:"unmute"===es,handleClose:ed,action:em,isLoading:eo,actionText:"Unmute",children:[a.jsx("div",{children:"You sure you want to unmute the user?"}),a.jsx(C.Y,{label:"Reason",value:ei?.reason||"",onValueChange:e=>el({reason:e})})]}),q&&(0,a.jsxs)(R.Z,{open:"remute"===es,handleClose:ed,action:em,isLoading:eo,actionText:"Remute",children:[a.jsx("div",{children:"You sure you want to remute the user?"}),a.jsx(C.Y,{label:"Reason",value:ei?.reason||"",onValueChange:e=>el({...ei,reason:e})}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[ei?.type],onChange:e=>el({...ei,type:e.target.value}),disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{label:"Time (in minutes)",type:"number",value:ei?.duration||"",onValueChange:e=>el({...ei,duration:e}),description:"Time in minutes, 0 = Permanent mute"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start again at ",a.jsx("b",{children:(0,M.Z)()})]}),(0,a.jsxs)("span",{children:["the mute will end at"," ",a.jsx("b",{children:ei?.duration==="0"?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date().getTime()+6e4*Number(ei?.duration))})]})]})]}),q&&(0,a.jsxs)(R.Z,{open:"edit"===es,handleClose:ed,action:em,isLoading:eo,actionText:"Edit",children:[a.jsx("div",{children:"This will replace the mute duration or reason"}),a.jsx(C.Y,{label:"Mute Reason",value:ei?.reason,onValueChange:e=>el({...ei,reason:e})}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[ei?.type],onChange:e=>el({...ei,type:e.target.value}),disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{label:"Mute Time (in minutes)",type:"number",value:ei?.duration||"",onValueChange:e=>el({...ei,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent mute (will replace the duration)"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute started at ",a.jsx("b",{children:(0,M.Z)(ea?.created)})]}),(0,a.jsxs)("span",{children:["After the edit, the mute will end at"," ",a.jsx("b",{children:ei?.duration==="0"?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date(ea?.created||"").getTime()+6e4*Number(ei?.duration))})]})]})]}),q&&a.jsx(R.Z,{open:"delete"===es,handleClose:ed,action:em,isLoading:eo,actionText:"Delete",children:a.jsx("div",{children:"Are you sure you want to delete the mute? this action is permanent and cannot be undone"})})]})}},96870:(e,t,n)=>{n.d(t,{Z:()=>a});let a=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},3887:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(57705);let s=()=>{let[e,t]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,n)=>{e.preventDefault();let{pageX:a,pageY:s}=e;t({open:!0,x:a,y:s,info:n})},info:e.info}}},19539:(e,t,n)=>{n.d(t,{P:()=>s,Z:()=>r});var a=n(54506);let s=a.z.enum(["GAG","MUTE","SILENCE"]),r=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:s})}};