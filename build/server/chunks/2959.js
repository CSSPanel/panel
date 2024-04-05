"use strict";exports.id=2959,exports.ids=[2959],exports.modules={22702:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var r=a(98284),l=a(34002),t=a(76425),n=a(16490),i=a(61524),c=a(72150),d=a(61756),o=a(22173),m=a(70627),x=a(85615),h=a(27567),u=a(41278),p=a(11168),j=a(31755);let f=()=>{let e=(0,h.Z)(e=>e.chatModal),{open:s,server:a}=e,f=(0,h.Z)(e=>e.setChatModal),{data:g,isLoading:y,mutate:v}=(0,x.ZP)(s&&a?.id?`/api/servers/${a.id}/chat`:void 0,j.Z,{refreshInterval:2e3}),[b,N]=(0,o.useState)(""),[w,C]=(0,o.useState)(!1),[Z,S]=(0,o.useState)(!1),k=async e=>{if(e.preventDefault(),!Z&&a){S(!0),N("");try{await p.Z.post(`/api/servers/${a.id}/chat`,{message:b,hideName:w}),await v(),u.ZP.success("Message sent!")}catch(e){console.error(e)}S(!1)}},z=(0,o.useRef)(null);return(0,o.useEffect)(()=>{z.current&&z.current.scroll({top:1e3})},[g]),a&&r.jsx(l.R,{size:"4xl",isOpen:s,onClose:()=>f({...e,open:!1}),backdrop:"transparent",placement:"bottom",classNames:{base:"bg-cover bg-center bg-no-repeat",body:"min-h-[180px] max-h-[180px] overflow-y-scroll py-4 backdrop-filter backdrop-blur-sm relative",footer:"backdrop-filter backdrop-blur-md border-t-2 border-foreground/20"},children:r.jsx(t.A,{style:{backgroundImage:`url('https://image.gametracker.com/images/maps/160x120/csgo/${a.map}.jpg')`},children:e=>a&&(0,r.jsxs)("form",{onSubmit:k,children:[r.jsx(n.I,{children:r.jsx("div",{ref:z,children:g&&g.length>0&&g.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("b",{children:[e.team?"[TEAM] ":"",e.playerName,":"," "]}),e.message]},e.id))})}),(0,r.jsxs)(i.R,{className:"flex flex-row items-center gap-4",children:[r.jsx(d.Y,{label:"Type a message...",type:"text",size:"sm",value:b,variant:"flat",onValueChange:e=>N(e),disabled:Z||y}),r.jsx(m.e,{content:(0,r.jsxs)(r.Fragment,{children:["Hide your name from the message",r.jsx("br",{}),"Currently: ",w?"Your name is hidden":"Your name is visible"]}),placement:"top",children:r.jsx(c.A,{variant:"flat",size:"sm",color:"secondary",onClick:()=>{C(!w)},children:w?"Hide Name":"Show Name"})})]})]})})})}},71619:(e,s,a)=>{a.r(s),a.d(s,{default:()=>B});var r=a(98284),l=a(44375),t=a(69501),n=a(83701),i=a(78447),c=a(72178),d=a(43807),o=a(34002),m=a(76425),x=a(1902),h=a(16490),u=a(61524),p=a(27083),j=a(73553),f=a(9426),g=a(48768),y=a(61756),v=a(72150),b=a(85615),N=a(77438),w=a(52183),C=a(251),Z=a(70059),S=a(83201),k=a(80823),z=a(27567),A=a(46705),P=a(80131),$=a(11168),M=a(41278),I=a(94608),T=a(2193),L=a(4570);let _=(0,T.Ue)(e=>({action:null,setAction:s=>e({action:s}),isLoading:!1,setIsLoading:s=>e({isLoading:s}),details:null,setDetails:s=>e({details:s}),reset:()=>e({action:null,isLoading:!1,details:null})}));L.z.string(),L.z.object({duration:L.z.number(),reason:L.z.string()}),L.z.object({duration:L.z.number(),reason:L.z.string(),type:I.P});let H=L.z.enum(["kick","ban","mute"]);L.z.object({action:H,userId:L.z.number()});var V=a(11082);let B=()=>{let e=(0,z.Z)(e=>e.modal),s=(0,z.Z)(e=>e.setModal),a=(0,z.Z)(e=>e.setChatModal),I=_(e=>e.action),T=_(e=>e.setAction),L=_(e=>e.details),H=_(e=>e.setDetails),B=_(e=>e.isLoading),O=_(e=>e.setIsLoading),R=_(e=>e.reset),{admin:K}=(0,A.ZP)(),{open:E,server:F}=e,U=()=>s({...e,open:!1}),Y=F?.serverIp,D=F?.address.split(":")[1],J=Y?`${Y}:${D}`:F?.address,G=async()=>{if(I&&!B&&F&&L&&es){O(!0);try{await $.Z.post(`/api/servers/${F.id}/action`,{action:I,userId:es.userId,details:L}),await new Promise(e=>setTimeout(e,4e3));let a=await (0,b.JG)(`/api/servers/${F.id}`);a&&s({...e,server:a}),M.ZP.success(`Player ${I}ed successfully`),R()}catch(e){M.ZP.error(`Error ${I}ing player`)}O(!1)}},{x:W,y:X,open:q,handleCloseMenu:Q,handleOpen:ee,info:es}=(0,Z.Z)(),ea=(e,s)=>{switch(s){case"userId":return(0,r.jsxs)(j.z,{color:"primary",size:"sm",children:["#",e.userId]});case"playerName":return r.jsx(k.default,{href:`https://steamcommunity.com/profiles/${e.steam64}`,target:"_blank",children:(0,r.jsxs)(p.z,{avatarProps:{radius:"sm",src:e.avatar,size:"sm"},name:e.playerName,classNames:{name:"flex flex-col gap-2"},children:[e.playerName,r.jsx("span",{children:e.admin?"(Admin)":""})]})});case"steam64":return r.jsx(k.default,{href:`https://steamcommunity.com/profiles/${e.steam64}`,target:"_blank",className:"underline decoration-blue-500",children:e.steam64});case"kills":return r.jsx("span",{children:e.kills||0});case"deaths":return r.jsx("span",{children:e.deaths||0});case"mvps":return r.jsx("span",{children:e.mvps||0});case"score":return r.jsx("span",{children:e.score});case"ping":return(0,r.jsxs)("span",{children:[e.ping,r.jsx("span",{className:"text-foreground/80",children:"ms"})]});case"admin":return r.jsx("span",{children:e.admin?r.jsx(f.Z,{size:20}):"-"});default:return r.jsx(r.Fragment,{})}};return(0,r.jsxs)(o.R,{size:"4xl",isOpen:E,onOpenChange:()=>{!q&&(I||U())},children:[r.jsx(m.A,{children:e=>F&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.k,{className:"flex flex-col text-center gap-1",children:[r.jsx("h2",{children:F.hostname}),(0,r.jsxs)("span",{className:"font-normal text-foreground-700 text-sm",children:[F.map,r.jsx("br",{}),"number"==typeof F.players?F.players:F.players.length,"/",F.maxPlayers," Players"]})]}),(0,r.jsxs)(h.I,{children:[(0,r.jsxs)(l.b,{isStriped:!0,children:[(0,r.jsxs)(t.J,{children:[r.jsx(n.j,{children:"#"},"userId"),r.jsx(n.j,{children:"Player"},"playerName"),r.jsx(n.j,{children:"SteamID"},"steam64"),r.jsx(n.j,{children:"Kills"},"kills"),r.jsx(n.j,{children:"Deaths"},"deaths"),r.jsx(n.j,{children:"MVP"},"mvps"),r.jsx(n.j,{children:"Score"},"score"),r.jsx(n.j,{children:"Ping"},"ping"),r.jsx(n.j,{children:"Admin"},"admin")]}),r.jsx(i.y,{items:"number"!=typeof F.players?F.players:[],children:e=>r.jsx(c.g,{onContextMenu:s=>K&&ee&&ee(s,e)||void 0,children:s=>r.jsx(d.X,{className:"pb-1 pt-2",children:ea(e,s)})},e.userId)})]}),K&&r.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions, such as kick, ban, and more!"})]}),(0,r.jsxs)(u.R,{children:[K&&r.jsx(v.A,{color:"secondary",variant:"flat",onPress:()=>a({open:!0,server:F}),children:"Open Chat"}),r.jsx(v.A,{color:"danger",variant:"flat",onPress:e,children:"Close"}),r.jsx(k.default,{href:`steam://connect/${J}`,passHref:!0,children:r.jsx(v.A,{color:"primary",children:"Connect"})})]})]})}),K&&(0,r.jsxs)(P.Z,{open:"kick"===I,handleClose:R,action:G,isLoading:B,actionText:"Kick",children:[(0,r.jsxs)("div",{children:["Are you sure you want to kick ",es?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:L||"",onValueChange:e=>H(e)})]}),K&&(0,r.jsxs)(P.Z,{open:"ban"===I,handleClose:R,action:G,isLoading:B,actionText:"Ban",children:[(0,r.jsxs)("div",{children:["Are you sure you want to ban ",es?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:L?.reason||"",onValueChange:e=>H({...L,reason:e})}),r.jsx(y.Y,{placeholder:"Time (in minutes)",type:"number",value:L?.duration?.toString()||"",onValueChange:e=>H({...L,duration:Number(e)}),description:"Time in minutes, 0 = Permanent ban"}),(0,r.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,r.jsxs)("span",{children:["The ban will start at ",r.jsx("b",{children:(0,V.Z)()})]}),(0,r.jsxs)("span",{children:["the ban will end at"," ",r.jsx("b",{children:L?.duration?.toString()==="0"?r.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,V.Z)(new Date().getTime()+6e4*Number(L?.duration))})]})]})]}),K&&(0,r.jsxs)(P.Z,{open:"mute"===I,handleClose:R,action:G,isLoading:B,actionText:"Mute",children:[(0,r.jsxs)("div",{children:["Are you sure you want to mute ",es?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:L?.reason||"",onValueChange:e=>H({...L,reason:e})}),r.jsx(N.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[L?.type],onChange:e=>H({...L,type:e.target.value}),disallowEmptySelection:!0,children:C.MUTE_OPTIONS.map(e=>r.jsx(w.R,{value:e.value,children:e.name},e.value))}),r.jsx(y.Y,{placeholder:"Time (in minutes)",type:"number",value:L?.duration?.toString()||"",onValueChange:e=>H({...L,duration:Number(e)}),description:"Time in minutes, 0 = Permanent mute"}),(0,r.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,r.jsxs)("span",{children:["The mute will start again at ",r.jsx("b",{children:(0,V.Z)()})]}),(0,r.jsxs)("span",{children:["the mute will end at"," ",r.jsx("b",{children:L?.duration?.toString()==="0"?r.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,V.Z)(new Date().getTime()+6e4*Number(L?.duration))})]})]})]}),K&&r.jsx(S.Z,{open:q,x:W,y:X,handleCloseMenu:Q,items:[{category:"Player Actions",items:(es?.admin?.immunity||0)>K.immunity?[]:[{key:"Kick",description:"Kick the player from the server",icon:g.Z,color:"default",onClick:()=>{T("kick"),H("")}},{key:"Ban",description:"Ban the player from the server for specific time",icon:g.Z,color:"danger",onClick:()=>{T("ban"),H({duration:0,reason:""})}},{key:"Mute",description:"Mute the player for specific time",icon:g.Z,color:"danger",onClick:()=>{T("mute"),H({duration:0,reason:"",type:"MUTE"})}}]}]})]})}},7228:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var r=a(98284),l=a(96153),t=a(59518),n=a(60026),i=a(30445),c=a(41184),d=a(68290),o=a(53167),m=a(58510),x=a(70627),h=a(37297),u=a(72150),p=a(77602),j=a(29853),f=a(41278),g=a(27567),y=a(31755),v=a(80823),b=a(85615);let N=({id:e,hostname:s,address:a})=>{let{data:N,isLoading:w,error:C}=(0,b.ZP)(`/api/servers/${e}`,y.Z),Z=(0,g.Z)(e=>e.setModal),{serverIp:S}=N||{},k=a.split(":")[1],z=S?`${S}:${k}`:a;if(w)return r.jsx(d.w,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open(`steam://connect/${z}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(o.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:"de_dust2",className:(0,j.cn)("object-cover h-full bg-center",w?"animate-pulse grayscale-[10]":w),classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:"Loading..."})]}),r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:r.jsx(h.c,{size:"sm"})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"warning",size:"sm",isIndeterminate:!0,isStriped:!0}),r.jsx("div",{className:"flex justify-between",children:r.jsx("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${z}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})});if(C||!N)return r.jsx(d.w,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open(`steam://connect/${z}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(o.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:"de_dust2",className:"object-cover h-full bg-center grayscale-[10]",classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:"Failed to load server info"})]}),r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:r.jsx(n.Z,{})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"danger",size:"sm",isStriped:!0}),r.jsx("div",{className:"flex justify-between",children:r.jsx("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${z}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})});let{game:A,map:P,maxPlayers:$,players:M,vac:I}=N,T=("number"==typeof M?M:M.length)/$*100,L="number"!=typeof M,_="number"==typeof M?M===$:M.length===$;return r.jsx(d.w,{className:"border-none bg-content1",shadow:"sm",onClick:L?()=>Z({open:!0,server:N}):()=>_?f.Am.error("Server is full!"):open(`steam://connect/${z}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(o.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:P,className:"object-cover h-full bg-center",classNames:{wrapper:"h-full"},shadow:"md",src:`https://image.gametracker.com/images/maps/160x120/csgo/${P}.jpg`,height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:A})]}),null!==I&&r.jsx(x.e,{content:I?"The server is secured by VAC":"Not VAC Secured",showArrow:!0,children:r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:I?r.jsx(i.Z,{size:20}):r.jsx(c.Z,{})})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"primary",value:T,size:"sm",isStriped:!0,isIndeterminate:!1}),r.jsx("div",{className:"flex justify-between",children:(0,r.jsxs)("p",{className:"text-small",children:[P," • ",L?M.length:M,"/",$," Players"]})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{if(_)return f.Am.error("Server is full!");navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${z}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})})}},69833:(e,s,a)=>{a.r(s),a.d(s,{default:()=>Z});var r=a(98284),l=a(44375),t=a(69501),n=a(83701),i=a(78447),c=a(72178),d=a(43807),o=a(72150),m=a(30445),x=a(41184),h=a(96153),u=a(59518),p=a(70627),j=a(37297),f=a(41278),g=a(22173),y=a(27567),v=a(31755),b=a(80823),N=a(85615),w=a(71619),C=a(22702);let Z=()=>{let{data:e,isLoading:s,error:a}=(0,N.ZP)("/api/servers",v.Z),Z=(0,y.Z)(e=>e.setModal),S=s||e?.length===0?"loading":"idle",k=e=>Z({open:!0,server:e}),z=(0,g.useCallback)((e,s)=>{let{game:a,map:l,maxPlayers:t,players:n,vac:i,address:c,playersPercentage:d,hostname:j}=e,g="number"!=typeof n,y="number"==typeof n?n===t:n.length===t,v=e.serverIp,N=e.address.split(":")[1],w=v?`${v}:${N}`:e.address;switch(s){case"hostname":return r.jsx("span",{children:j});case"game":return r.jsx("span",{children:a});case"map":return r.jsx("span",{children:l});case"players":return(0,r.jsxs)("span",{children:[g?n.length:n,"/",t]});case"vac":return null!==i&&(r.jsx(p.e,{content:i?"The server is secured by VAC":"Not VAC Secured",showArrow:!0,children:r.jsx(o.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:i?r.jsx(m.Z,{size:20}):r.jsx(x.Z,{})})})||r.jsx(r.Fragment,{}));case"actions":return(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsxs)(o.A,{onClick:()=>{if(y)return f.Am.error("Server is full!");navigator.clipboard.writeText(`connect ${c}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(h.Z,{size:16}),c]}),r.jsx(b.default,{href:`steam://connect/${w}`,passHref:!0,children:(0,r.jsxs)(o.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(u.Z,{size:16}),"Connect"]})})]});default:return r.jsx(r.Fragment,{})}},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.b,{topContent:(0,r.jsxs)("div",{className:"text-start",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Servers"}),(0,r.jsxs)("code",{className:"text-sm font-normal",children:["total: ",e?.length||0]})]}),children:[(0,r.jsxs)(t.J,{children:[r.jsx(n.j,{children:"Server Name"},"hostname"),r.jsx(n.j,{children:"Game"},"game"),r.jsx(n.j,{children:"Map"},"map"),r.jsx(n.j,{children:"Players"},"players"),r.jsx(n.j,{children:"VAC"},"vac"),r.jsx(n.j,{children:"Actions"},"actions")]}),r.jsx(i.y,{items:e||[],loadingContent:r.jsx(j.c,{}),loadingState:S,children:a?r.jsx(c.g,{children:r.jsx(d.X,{colSpan:6,children:r.jsx("div",{className:"text-center",children:"Error fetching servers"})})}):e=>r.jsx(c.g,{className:"cursor-pointer",onClick:()=>k(e),children:s=>r.jsx(d.X,{children:z(e,s)})},e.address)})]}),r.jsx(w.default,{}),r.jsx(C.default,{})]})}},27567:(e,s,a)=>{a.d(s,{Z:()=>r});let r=(0,a(2193).Ue)(e=>({modal:{open:!1,server:null},setModal:s=>e({modal:s}),chatModal:{open:!1,server:null},setChatModal:s=>e({chatModal:s})}))},42686:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(88640),l=a(44118),t=a(91576);let n=({image:e,html:s,css:a,height:l})=>"0"===l?r.jsx(r.Fragment,{}):(0,r.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-center bg-cover relative",style:{backgroundImage:`url(${e})`,height:`${l}px`},children:[r.jsx("div",{className:"h-full w-full flex flex-col justify-center items-center",dangerouslySetInnerHTML:{__html:s}}),r.jsx("style",{children:a})]}),i=(0,l.Rb)(),c=async()=>{let e=await t.Z?.settings.getByKey("headerImage")||i.headerImage,s=await t.Z?.settings.getByKey("headerCodeHTML")||i.headerCodeHTML,a=await t.Z?.settings.getByKey("headerCodeCSS")||i.headerCodeCSS,l=await t.Z?.settings.getByKey("headerHeight")||i.headerHeight;return r.jsx(n,{image:e||"",html:s||"",css:a||"",height:l||""})}},44839:(e,s,a)=>{a.d(s,{ZP:()=>n});let r=(0,a(11728).createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Table\index.tsx`),{__esModule:l,$$typeof:t}=r,n=r.default},8307:(e,s,a)=>{a.d(s,{Z:()=>y});var r=a(88640),l=a(55744),t=a(11728);let n=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Server\SoloServer.tsx`),{__esModule:i,$$typeof:c}=n,d=n.default,o=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\ServerChatModal.tsx`),{__esModule:m,$$typeof:x}=o,h=o.default,u=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\index.tsx`),{__esModule:p,$$typeof:j}=u,f=u.default;var g=a(91576);let y=async()=>{let e=await g.Z?.servers.getAllSafe()||[];return(0,r.jsxs)("div",{className:"grid xl:grid-cols-3 gap-4 flex-wrap items-center min-h-[150px]",children:[e.map(e=>(0,l.createElement)(d,{...e,key:e.id})),r.jsx(f,{}),r.jsx(h,{})]})}}};