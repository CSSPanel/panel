"use strict";exports.id=9016,exports.ids=[9016],exports.modules={9016:(e,a,n)=>{n.r(a),n.d(a,{default:()=>G});var s=n(98284),t=n(69501),r=n(83701),i=n(44375),l=n(78447),o=n(72178),d=n(43807),c=n(42685),m=n(66819),u=n(48768),h=n(73876),x=n(22173),j=n(86221),p=n(58510),b=n(37297),g=n(70627),f=n(36065),y=n(72150),v=n(98987),w=n(61756),N=n(73553),P=n(27083),C=n(2193),_=n(4570);let z=(0,C.Ue)(e=>({action:null,setAction:a=>e({action:a}),isLoading:!1,setIsLoading:a=>e({isLoading:a}),details:null,setDetails:a=>e({details:a}),reset:()=>e({action:null,isLoading:!1,details:null})}));_.z.object({reason:_.z.string()}),_.z.object({reason:_.z.string(),duration:_.z.string()}),_.z.object({comment:_.z.string()}),_.z.object({reason:_.z.string(),duration:_.z.string()}),_.z.enum(["unban","reban","comment","edit","delete"]);var D=n(11082),A=n(80131),T=n(70059),R=n(83201),Z=n(46705),S=n(31755),E=n(41278),L=n(85733),I=n(74591),k=n(34002),M=n(76425),Y=n(1902),B=n(16490),X=n(61524),$=n(11168);let F=_.z.object({player_steamid:_.z.string().optional(),player_ip:_.z.string().optional(),reason:_.z.string().min(3),duration:_.z.string(),comment:_.z.string().optional()}),U=({open:e,setOpen:a,mutate:n})=>{let[t,r]=(0,x.useState)(!1),i=async()=>{if(!t){r(!0);try{await (0,$.Z)("/api/bans",{method:"POST",data:l.values}),await n(),E.Am.success("Succesfully banned player!"),a(!1)}catch(a){let e=a?.response?.data||a?.message;console.error(a),E.Am.error(`Failed to create ban!
${e||a}`)}r(!1)}},l=(0,L.c)({initialValues:{player_steamid:"",player_ip:"",reason:"",duration:"",comment:""},validate:(0,I.F)(F)});return s.jsx(k.R,{isOpen:e,onOpenChange:t?void 0:a,children:s.jsx(M.A,{children:e=>(0,s.jsxs)("form",{onSubmit:l.onSubmit(i),children:[s.jsx(Y.k,{className:"flex flex-col gap-1",children:"Create new ban"}),(0,s.jsxs)(B.I,{children:[s.jsx("p",{children:"You can ban a player by either their Steam64 / SteamId / Profile URL or their IP address."}),s.jsx(w.Y,{...l.getInputProps("player_steamid"),errorMessage:l.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:t||!!l.values.player_ip,autoFocus:!0}),s.jsx(w.Y,{...l.getInputProps("player_ip"),errorMessage:l.errors.player_ip,label:"IP Address",placeholder:"1.1.1.1",variant:"bordered",isDisabled:t||!!l.values.player_steamid}),s.jsx(w.Y,{...l.getInputProps("reason"),errorMessage:l.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:t}),s.jsx(w.Y,{...l.getInputProps("duration"),errorMessage:l.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:t}),s.jsx(w.Y,{...l.getInputProps("comment"),errorMessage:l.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:t}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start now ",(0,s.jsxs)("b",{children:["(",(0,D.Z)(),")"]})]}),(0,s.jsxs)("span",{children:["and will end at"," ",s.jsx("b",{children:"0"===l.values.duration?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,D.Z)(new Date().getTime()+6e4*Number(l.values.duration))})]})]})]}),(0,s.jsxs)(X.R,{children:[s.jsx(y.A,{color:"danger",variant:"flat",onPress:e,isDisabled:t,children:"Cancel"}),s.jsx(y.A,{color:"primary",type:"submit",isLoading:t,children:"Ban player"})]})]})})})},V=e=>{switch(e){case"ACTIVE":return s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return s.jsx(N.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNBANNED":return s.jsx(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return s.jsx(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var W=n(80823),O=n(85615);let G=({type:e})=>{let[a,n]=(0,x.useState)(!1),[C,_]=(0,x.useState)(1),[L,I]=(0,x.useState)(""),[k]=(0,v.Nr)(L,500),M=10;"/"===(0,f.usePathname)()&&(M=5);let{data:Y,isLoading:B,mutate:X}=(0,O.ZP)(`/api/bans?page=${C}&rows=${M}&query=${k}`,S.Z,{keepPreviousData:!0}),F=(0,x.useMemo)(()=>Y?.count?Math.ceil(Y.count/M):0,[Y?.count,M]),{admin:G}=(0,Z.ZP)(),{x:J,y:H,open:q,handleCloseMenu:K,handleOpen:Q,info:ee}=(0,T.Z)(),ea=z(e=>e.action),en=z(e=>e.setAction),es=z(e=>e.details),et=z(e=>e.setDetails),er=z(e=>e.isLoading),ei=z(e=>e.setIsLoading),el=z(e=>e.reset),eo=async()=>{if(ea&&!er&&ee){ei(!0);try{await $.Z.post(`/api/bans/${ee.id}`,{action:ea,details:es}),await X(),el(),E.ZP.success(`Player ${ea}ed successfully`)}catch(e){E.ZP.error(`Error ${ea} player`)}ei(!1)}},ed=(e,a)=>{switch(a){case"player_name":return s.jsx(W.default,{href:`https://steamcommunity.com/profiles/${e.player_steamid}`,target:"_blank",passHref:!0,children:s.jsx(P.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:e.player_name?.slice(0,10)})});case"status":return V(e.status);case"reason":return e.reason.length>10?s.jsx(g.e,{content:e.reason,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.reason});case"unban_reason":return e.unban_reason&&e.unban_reason.length>10?s.jsx(g.e,{content:e.unban_reason,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.unban_reason?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.unban_reason});case"duration":return s.jsx(N.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":`${e.duration} minutes`});case"admin_name":return e.admin_name?"Console"===e.admin_name?s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):s.jsx(W.default,{href:`https://steamcommunity.com/profiles/${e.admin_steamid}`,target:"_blank",passHref:!0,children:s.jsx(P.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):s.jsx(s.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNBANNED"===e.status||"EXPIRED"===e.status)return s.jsx(p.W,{color:"success",value:100,isStriped:!0});let n=new Date,t=new Date(e.created),r=new Date(e.ends),i=Math.round((n.getTime()-t.getTime())/(r.getTime()-t.getTime())*100),l=Math.round((r.getTime()-n.getTime())/6e4),o=i<50?"warning":i>=100?"success":"primary";return l>0?s.jsx(g.e,{content:`${l} minutes left`,color:o,showArrow:!0,children:s.jsx(p.W,{color:o,value:i,isStriped:!0})}):s.jsx(p.W,{color:o,value:i,isStriped:!0});case"comment":return e.comment?e.comment.length>10?s.jsx(g.e,{content:e.comment,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)}):s.jsx(s.Fragment,{children:"-"});case"created":return(0,D.Z)(e.created);default:return s.jsx(s.Fragment,{})}},ec=s.jsx(s.Fragment,{});switch(e){case"MANAGE":ec=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Admin"},"admin_name"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Remove Reason"},"unban_reason"),s.jsx(r.j,{children:"Date/Time"},"created"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft"),s.jsx(r.j,{children:"Comment"},"comment")]});break;case"SMALL":ec=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":ec=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Admin"},"admin_name"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Remove Reason"},"unban_reason"),s.jsx(r.j,{children:"Date/Time"},"created"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft")]})}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.b,{topContent:(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"text-start",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Bans"}),(0,s.jsxs)("code",{className:"text-sm font-normal",children:["total: ",Y?.count||""]})]}),(0,s.jsxs)("div",{className:"flex",children:[s.jsx(g.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,children:s.jsx(w.Y,{label:"Search",labelPlacement:"outside-left",value:L,onValueChange:I,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},isClearable:!0})}),G&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>n(!0),children:[s.jsx(c.Z,{}),"New ban"]}),s.jsx(U,{open:a,setOpen:n,mutate:X})]})]})]}),bottomContent:(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex w-full justify-center",children:s.jsx(j.g,{color:"primary",page:C,total:F,onChange:e=>_(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),G&&"MANAGE"===e&&s.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[ec,s.jsx(l.y,{items:Y?.results??[],loadingContent:s.jsx(b.c,{}),loadingState:B?"loading":"idle",children:e=>s.jsx(o.g,{onContextMenu:a=>G&&Q&&Q(a,e)||void 0,children:a=>s.jsx(d.X,{children:ed(e,a)})},e.id)})]}),G&&s.jsx(R.Z,{open:q,x:J,y:H,handleCloseMenu:K,items:[{category:"Ban Actions",items:[{key:"Comment",description:"Write a comment on this ban, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{en("comment"),et({comment:ee?.comment||""})}},{key:ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?"Reban":"Remove Ban (shorten)",description:ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?"Reban the player":"Remove the player ban (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?(en("reban"),et({reason:"",duration:"0"})):(en("unban"),et({reason:""}))}},{key:"Edit Ban",description:"Edit the ban duration or reason",icon:m.Z,color:"primary",onClick:()=>{en("edit"),et({reason:ee?.reason||"",duration:ee?.duration?.toString()||"0"})}},{key:"Delete Ban",description:"Delete the ban from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{en("delete")}}]}]}),G&&(0,s.jsxs)(A.Z,{open:"comment"===ea,handleClose:el,action:eo,isLoading:er,actionText:"Save",children:[s.jsx("div",{children:"Write a comment on this ban, this will be visible to other admins"}),s.jsx(w.Y,{label:"Comment",value:es?.comment||"",onValueChange:e=>et({comment:e})})]}),G&&(0,s.jsxs)(A.Z,{open:"unban"===ea,handleClose:el,action:eo,isLoading:er,actionText:"Unban",children:[s.jsx("div",{children:"You sure you want to unban the user?"}),s.jsx(w.Y,{label:"Reason",value:es?.reason||"",onValueChange:e=>et({reason:e})})]}),G&&(0,s.jsxs)(A.Z,{open:"reban"===ea,handleClose:el,action:eo,isLoading:er,actionText:"Reban",children:[s.jsx("div",{children:"You sure you want to reban the user?"}),s.jsx(w.Y,{label:"Reason",value:es?.reason||"",onValueChange:e=>et({...es,reason:e})}),s.jsx(w.Y,{label:"Time (in minutes)",type:"number",value:es?.duration||"",onValueChange:e=>et({...es,duration:e}),description:"Time in minutes, 0 = Permanent ban"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start again at ",s.jsx("b",{children:(0,D.Z)()})]}),(0,s.jsxs)("span",{children:["the ban will end at"," ",s.jsx("b",{children:es?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,D.Z)(new Date().getTime()+6e4*Number(es?.duration))})]})]})]}),G&&(0,s.jsxs)(A.Z,{open:"edit"===ea,handleClose:el,action:eo,isLoading:er,actionText:"Edit",children:[s.jsx("div",{children:"This will replace the ban duration or reason"}),s.jsx(w.Y,{label:"Ban Reason",value:es?.reason||"",onValueChange:e=>et({...es,reason:e})}),s.jsx(w.Y,{label:"Ban Time (in minutes)",type:"number",value:es?.duration||"",onValueChange:e=>et({...es,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent ban (will replace the duration)"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban started at ",s.jsx("b",{children:(0,D.Z)(ee?.created)})]}),(0,s.jsxs)("span",{children:["After the edit, the ban will end at"," ",s.jsx("b",{children:es?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,D.Z)(new Date(ee?.created||"").getTime()+6e4*Number(es?.duration))})]})]})]}),G&&s.jsx(A.Z,{open:"delete"===ea,handleClose:el,action:eo,isLoading:er,actionText:"Delete",children:s.jsx("div",{children:"Are you sure you want to delete the ban? this action is permanent and cannot be undone"})})]})}}};