(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{37391:function(e,s,i){Promise.resolve().then(i.bind(i,11165))},92891:function(e,s,i){"use strict";var a=i(10401),r=i(32820),n=i(68549),l=i(89478),t=i(90296);s.default=e=>{let{children:s,flags:i}=e,{admin:d,isLoading:o}=(0,t.ZP)(),c=(0,n.useRouter)();return(0,l.useEffect)(()=>{if(!o&&(!d||i.length>0&&!i.some(e=>{var s;return null===(s=d.flags)||void 0===s?void 0:s.includes(e)})))return c.push("/")},[d,o,c,i]),o?(0,a.jsx)(r.c,{}):d?(0,a.jsx)(a.Fragment,{children:s}):(0,a.jsx)(a.Fragment,{children:"No Access"})}},13627:function(e,s,i){"use strict";i.d(s,{r:function(){return o}});var a=i(10401),r=i(69492),n=i(68549),l=i(76322),t=i(71068),d=i(90296);s.default=()=>{let e=(0,n.usePathname)(),s=(0,n.useRouter)(),{admin:i}=(0,d.ZP)(),c=(null==i?void 0:i.flags)||[],m=(0,r.k)(e=>e.modules),u=o.filter(e=>e.permissions.some(e=>c.includes(e))).filter(e=>{if(e.module){let s=m.find(s=>s.identifier===e.module);if(!s||!s.enabled)return!1}return!0});return(0,a.jsx)(l.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>s.push(e),items:u,children:e=>(0,a.jsx)(t.r,{title:e.title},e.path)})};let o=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},11165:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return eu}});var a=i(10401),r=i(36857),n=i(3086),l=i(91495),t=i(71558),d=i(68549),o=i(76322),c=i(71068),m=i(82613),u=i(80083),g=i(13627),p=i(92891),h=i(65277);let f=(0,h.Ue)(e=>({open:!1,setOpen:s=>e({open:s,edit:null}),edit:null,setEdit:s=>e({edit:s,open:!0}),delete:null,setDelete:s=>e({delete:s}),servers:[],setServers:s=>e({servers:s})}));var x=i(61915),v=i(13711),j=i(62484),y=i(34054),b=i(45830),w=i(68818),S=i(69809),A=i(74961),z=i(89478),F=i(62640),_=i(30456),N=i(32820),C=i(94711),Z=i(81454),E=i(27981),W=i(4599),P=i(90296),D=i(75799),G=i(81342),M=i(82187),I=()=>{var e;let s=f(e=>e.setServers),{admin:i,masterAdmin:r}=(0,P.ZP)(),{data:n,isLoading:l}=(0,E.ZP)("/api/admin/admins",D.Z);(0,z.useEffect)(()=>{var e;n&&s(null!==(e=null==n?void 0:n.servers)&&void 0!==e?e:[])},[n,s]);let t=f(e=>e.setEdit),d=f(e=>e.delete),o=f(e=>e.setDelete),c=async()=>{if(d){try{await (0,M.Z)("/api/admin/admins/".concat(d.id),{method:"DELETE"}),C.Am.success("Succesfully deleted admin!"),await (0,E.JG)("/api/admin/admins"),await (0,E.JG)("/api/admin/groups")}catch(s){var e;C.Am.error(null!==(e=s.response.data)&&void 0!==e?e:"Failed to delete admin!")}o(null)}},u=!l&&(null==n?void 0:n.servers)&&(null==n?void 0:n.admins)?"idle":"loading",g=(e,s)=>{switch(s){case"id":return(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:e.id});case"group":{let s="string"==typeof e.flags&&e.flags.startsWith("#")?null==n?void 0:n.groups.find(s=>s.id===e.flags):null;return s?s.name:(0,a.jsx)(a.Fragment,{children:"-"})}case"server":var l,d;if(null===(l=e.servers_groups)||void 0===l?void 0:l.length)return(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-center",children:[(0,a.jsx)("span",{className:"text-xs",children:"Groups:"}),(0,a.jsx)("div",{className:"flex gap-2",children:e.servers_groups.map(e=>{var s;let{name:i,servers:r}=null!==(s=null==n?void 0:n.serversGroups.find(s=>s.id.toString()===e))&&void 0!==s?s:{servers:[],name:"Unknown"},l=r.map(e=>{var s;return null==n?void 0:null===(s=n.servers.find(s=>s.id.toString()===e))||void 0===s?void 0:s.hostname}).filter(Boolean);return(0,a.jsx)(_.e,{content:l.join("\n"),className:"whitespace-pre-wrap",closeDelay:50,color:"success","aria-label":i,children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"success",children:[r.length," Servers (",i,")"]})},e)})})]});{if(!e.server_id)return(0,a.jsx)(a.Fragment,{children:"ALL"});if(e.server_id.length>1){let s=e.server_id.map(e=>{var s;return null==n?void 0:null===(s=n.servers.find(s=>s.id.toString()===e))||void 0===s?void 0:s.hostname});return(0,a.jsx)(_.e,{content:s.join("\n"),className:"whitespace-pre-wrap",closeDelay:50,color:"primary","aria-label":s.join(", "),children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"primary",children:[s.length," Servers"]})})}let s=null==n?void 0:n.servers.find(s=>s.id==(e.server_id||0));return(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:null!==(d=null==s?void 0:s.hostname)&&void 0!==d?d:"Unknown"})}case"player_name":return(0,a.jsx)("div",{children:e.player_name});case"player_steamid":return(0,a.jsx)(G.default,{href:"https://steamcommunity.com/profiles/".concat(e[s]),target:"_blank",children:e.player_steamid});case"flags":let c="string"==typeof e.flags&&e.flags.startsWith("#")?null==n?void 0:n.groups.find(s=>s.id===e.flags):null,u=c?c.flags:e.flags,g=u&&"object"==typeof u?u.join(", "):u,p=u&&"object"==typeof u?u.join("\n"):g,h="string"==typeof g?g.split(", "):g,f=h.filter(e=>e.startsWith("@web")),x=h.filter(e=>!e.startsWith("@web"));return c?(0,a.jsx)(_.e,{content:p,closeDelay:50,color:"secondary",className:"whitespace-pre-wrap","aria-label":c.name,children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"secondary",children:[h.length," Flags from ",null==c?void 0:c.name]})}):e.flags.length>2?(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[f.length?(0,a.jsx)(_.e,{content:f.join("\n"),closeDelay:50,color:"primary",className:"whitespace-pre-wrap","aria-label":f.join(", "),children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"primary",children:[f.length," Web Flags"]})}):(0,a.jsx)(a.Fragment,{}),x.length?(0,a.jsx)(_.e,{content:x.join("\n"),closeDelay:50,color:"secondary",className:"whitespace-pre-wrap","aria-label":x.join(", "),children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"secondary",children:[x.length," Admin Flags"]})}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:h.join(", ")});case"immunity":return(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:e.immunity});case"ends":return e.ends?(0,F.Q)(new Date(e.ends)):"Never";case"actions":let v=!!(Number(i.immunity)<Number(e.immunity)&&(null==i?void 0:i.immunity)!=="100"&&!r);return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>t(e),isDisabled:v,children:[(0,a.jsx)(S.Z,{size:16}),"Edit Admin"]}),(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"danger",onClick:()=>o(e),isDisabled:v,children:[(0,a.jsx)(A.Z,{size:16}),"Delete Admin"]})]});default:return(0,a.jsx)(a.Fragment,{children:"Error!"})}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.b,{isStriped:!0,children:[(0,a.jsxs)(v.J,{children:[(0,a.jsx)(j.j,{children:"ID"},"id"),(0,a.jsx)(j.j,{children:"Name"},"player_name"),(0,a.jsx)(j.j,{children:"SteamId"},"player_steamid"),(0,a.jsx)(j.j,{children:"Group"},"group"),(0,a.jsx)(j.j,{children:"Servers"},"server"),(0,a.jsx)(j.j,{children:"Immunity"},"immunity"),(0,a.jsx)(j.j,{children:"Flags / Group"},"flags"),(0,a.jsx)(j.j,{children:"Ends"},"ends"),(0,a.jsx)(j.j,{children:"Actions"},"actions")]}),(0,a.jsx)(y.y,{loadingContent:(0,a.jsx)(N.c,{}),loadingState:u,isLoading:"loading"===u,items:null!==(e=null==n?void 0:n.admins)&&void 0!==e?e:[],children:e=>(0,a.jsx)(b.g,{children:s=>(0,a.jsx)(w.X,{children:g(e,s)})})})]}),(0,a.jsx)(W.Z,{open:!!d,onAction:c,onCancel:()=>o(null),title:"Delete admin",text:(0,a.jsxs)("p",{children:["Are you sure you want to delete: ",(0,a.jsx)("b",{children:null==d?void 0:d.player_name})," admin?"]})})]})},O=i(78441),k=i(30054),V=i(73727),J=i(8523),L=i(27094),T=i(2068),R=i(53756),Y=i(9201),K=i(73592),U=i(29999),$=i(86794),B=i(18364),H=i(2855),Q=i(75451),X=i(25391),q=i(34121),ee=i(54529),es=i(64347),ei=()=>{var e,s,i,r;let n=f(e=>e.open),l=f(e=>e.edit),t=f(e=>e.setOpen),d=f(e=>e.servers),{admin:o,masterAdmin:c}=(0,P.ZP)(),[u,g]=(0,z.useState)(!l||!l.server_id&&!l.servers_groups),[p,h]=(0,z.useState)(!!l&&!!l.ends),[x,v]=(0,z.useState)(!1),{data:j}=(0,E.ZP)("/api/admin/admins",D.Z),{data:y}=(0,E.ZP)("/api/admin/flags",D.Z),{data:b}=(0,E.ZP)("/api/admin/servers-groups",D.Z),w=async()=>{if(!x){if(S.values.ends&&S.values.ends<new Date){C.Am.error("End date cannot be in the past!");return}v(!0);try{await (0,M.Z)(l?"/api/admin/admins/".concat(l.id):"/api/admin/admins",{method:l?"PUT":"POST",data:{...S.values,server_id:u?null:S.values.server_id,servers_groups:u?null:S.values.servers_groups,ends:p?S.values.ends?S.values.ends:new Date:null}}),await (0,E.JG)("/api/admin/admins"),C.Am.success(l?"Succesfully edited admin!":"Succesfully created admin!"),t(!1)}catch(e){console.error(e),C.Am.error("Failed to ".concat(l?"edit":"create"," admin!"))}v(!1)}},S=(0,B.c)({initialValues:{player_name:l?l.player_name:"",player_steamid:l?l.player_steamid:"",server_id:l?l.server_id:null,servers_groups:l&&(null===(e=l.servers_groups)||void 0===e?void 0:e.length)?l.servers_groups:[],flags:l?l.flags:[],immunity:l?l.immunity:"0",ends:l&&l.ends?new Date(l.ends):null},validate:(0,H.F)(es.ZP)});(0,z.useEffect)(()=>{var e;S.setValues({player_name:l?l.player_name:"",player_steamid:l?l.player_steamid:"",server_id:l?l.server_id:null,servers_groups:l&&(null===(e=l.servers_groups)||void 0===e?void 0:e.length)?l.servers_groups:[],flags:l?l.flags:[],immunity:l?l.immunity:"0",ends:l&&l.ends?new Date(l.ends):null}),g(!l||!l.server_id&&!l.servers_groups),h(!!l&&!!l.ends)},[l]);let A="string"==typeof S.values.flags&&S.values.flags.startsWith("#")&&null!==(i=null==j?void 0:j.groups.find(e=>e.id===S.values.flags))&&void 0!==i?i:void 0,F="string"!=typeof S.values.flags?S.values.flags.join(", "):void 0,_=S.values.server_id?S.values.server_id.length>1?S.values.server_id.length:null!==(r=null===(s=d.find(e=>e.id.toString()===S.values.server_id[0]))||void 0===s?void 0:s.hostname)&&void 0!==r?r:"None":"All";return(0,a.jsx)(O.R,{isOpen:n,onOpenChange:x?void 0:t,children:(0,a.jsx)(k.A,{children:e=>{var s,i,r,n,t,f,v,z;return(0,a.jsxs)("form",{onSubmit:S.onSubmit(w),children:[(0,a.jsx)(V.k,{className:"flex flex-col gap-1",children:l?"Edit admin":"Create new admin"}),(0,a.jsxs)(J.I,{children:[(0,a.jsx)(ee.Y,{...S.getInputProps("player_name"),errorMessage:S.errors.player_name,isInvalid:!!S.errors.player_name,label:"Admin Name",placeholder:"John Doe",variant:"bordered",disabled:x,autoFocus:!0}),(0,a.jsx)(ee.Y,{...S.getInputProps("player_steamid"),errorMessage:S.errors.player_steamid,isInvalid:!!S.errors.player_steamid,label:"SteamId (64)",placeholder:"76561198000000000",type:"text",variant:"bordered",disabled:x}),(0,a.jsx)(X.K,{isSelected:u,onValueChange:g,children:"All Servers"}),!u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"text-xs text-center",children:"You can choose a set of servers or choose a set of servers groups"}),!((S.values.servers_groups||[]).length>0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(T.F,{children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Servers: ",_]})}),(0,a.jsx)(Y.a,{"aria-label":"Servers",items:d,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!==(n=S.values.server_id)&&void 0!==n?n:[]]),onSelectionChange:e=>S.setFieldValue("server_id",Array.from(e)),disallowEmptySelection:!0,children:e=>(0,a.jsx)(K.W,{id:e.id.toString(),color:"default",children:e.hostname},e.id)})]}),S.errors.server_id&&(0,a.jsx)("span",{className:"text-xs text-red-500",children:S.errors.server_id})]}),(0,a.jsxs)(T.F,{children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Servers Group:"," ",(null===(s=S.values.servers_groups)||void 0===s?void 0:s.map(e=>{var s;return null==b?void 0:null===(s=b.find(s=>s.id.toString()===e))||void 0===s?void 0:s.name}).join(", "))||"None"]})}),(0,a.jsx)(Y.a,{"aria-label":"Servers Group",items:b,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!==(t=S.values.servers_groups)&&void 0!==t?t:[]]),onSelectionChange:e=>S.setFieldValue("servers_groups",Array.from(e)),children:e=>(0,a.jsxs)(K.W,{id:e.id.toString(),color:"default",children:[e.name," (Servers: ",e.servers.length,")"]},e.id)})]}),S.errors.serverGroups&&(0,a.jsx)("span",{className:"text-xs text-red-500",children:S.errors.serverGroups}),(0,a.jsx)(q.j,{className:"opacity-50"})]}),(0,a.jsxs)(T.F,{children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Group: ",(null==A?void 0:A.name)||"unset"]})}),(0,a.jsx)(Y.a,{"aria-label":"Flags",items:null!==(f=null==j?void 0:j.groups)&&void 0!==f?f:[],children:(null==j?void 0:j.groups.map(e=>(0,a.jsxs)(K.W,{id:e.id,color:"default",onClick:()=>S.setValues({flags:e.id}),children:[e.name," ",S.values.flags===e.id&&"(Selected)"]},e.id)))||(0,a.jsx)(a.Fragment,{})})]}),S.errors.flags&&(0,a.jsx)("span",{className:"text-xs text-red-500",children:S.errors.flags}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)(T.F,{placement:"right",children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Web Flags:"," ",A?(0,a.jsxs)(a.Fragment,{children:[A.flags.filter(e=>e.startsWith("@web/")).length||0," ","(Group)"]}):(null==F?void 0:F.split(", ").filter(e=>e.startsWith("@web")).length)||0]})}),(0,a.jsx)(Y.a,{"aria-label":"Web Flags",items:es.hn,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!==(v=S.values.flags)&&void 0!==v?v:[]]),onSelectionChange:e=>S.setFieldValue("flags",Array.from(e).filter(e=>es.sm.includes(e)||(null==y?void 0:y.find(s=>s.flag===e)))),disallowEmptySelection:!0,children:[...es.hn.filter(e=>e.id.startsWith("@web/")),...null===(i=y||[])||void 0===i?void 0:i.filter(e=>e.flag.startsWith("@web/"))].concat().map(e=>e.flag?(0,a.jsxs)(K.W,{id:e.flag,color:"default",children:[e.flag," -"," ",e.identifier," ",(0,a.jsx)(Z.z,{color:"primary",variant:"flat",size:"sm",className:"mx-2 text-xs h-5",children:"Custom"})]},e.flag):(0,a.jsxs)(K.W,{id:e.id,color:"default",children:[e.id," - ",e.description]},e.id))})]}),(0,a.jsxs)(T.F,{placement:"right",children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Admin Flags:"," ",A?(0,a.jsxs)(a.Fragment,{children:[A.flags.filter(e=>!e.startsWith("@web/")).length||0," ","(Group)"]}):(null==F?void 0:F.split(", ").filter(e=>!e.startsWith("@web")).length)||0]})}),(0,a.jsx)(Y.a,{"aria-label":"Admin Flags",items:es.hn,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!==(z=S.values.flags)&&void 0!==z?z:[]]),onSelectionChange:e=>S.setFieldValue("flags",Array.from(e).filter(e=>es.sm.includes(e)||(null==y?void 0:y.find(s=>s.flag===e)))),disallowEmptySelection:!0,children:[...es.hn.filter(e=>e.id.startsWith("@css/")),...null===(r=y||[])||void 0===r?void 0:r.filter(e=>!e.flag.startsWith("@web/"))].concat().map(e=>e.flag?(0,a.jsxs)(K.W,{id:e.flag,color:"default",children:[e.flag," -"," ",e.identifier," ",(0,a.jsx)(Z.z,{color:"primary",variant:"flat",size:"sm",className:"mx-2 text-xs h-5",children:"Custom"})]},e.flag):(0,a.jsxs)(K.W,{id:e.id,color:"default",children:[e.id," - ",e.description]},e.id))})]})]}),(0,a.jsx)("span",{className:"text-xs",children:"You can choose either pre defined group, or flags."}),(0,a.jsx)(ee.Y,{value:S.values.immunity,onChange:e=>(null==o?void 0:o.immunity)==="100"?S.setFieldValue("immunity",e.target.value):Number(e.target.value)<Number(null==o?void 0:o.immunity)&&Number(e.target.value)>=0&&S.setFieldValue("immunity",e.target.value),errorMessage:S.errors.immunity,isInvalid:!!S.errors.immunity,label:"Immunity",placeholder:"Example, 99".concat(c?"":", max of ".concat(Number(null==o?void 0:o.immunity)-1)),description:c?"No limit":"Max of ".concat(Number(null==o?void 0:o.immunity)-1," (Your immunity - 1)"),type:"number",variant:"bordered",disabled:x}),(0,a.jsx)(X.K,{isSelected:p,onValueChange:h,children:"Time Restriction"}),(0,a.jsx)(Q.J,{isDisabled:!p,variant:"bordered",label:"End Date",value:S.values.ends?(0,U.sG)(S.values.ends.toISOString().split("T")[0]):null,onChange:e=>S.setFieldValue("ends",e.toDate((0,$.iT)())),errorMessage:S.errors.ends,isInvalid:!!S.errors.ends,showMonthAndYearPickers:!0,hideTimeZone:!0})]}),(0,a.jsxs)(L.R,{children:[(0,a.jsx)(m.A,{color:"danger",variant:"flat",onPress:e,disabled:x,children:"Cancel"}),(0,a.jsx)(m.A,{color:"primary",type:"submit",isLoading:x,children:l?"Edit admin":"Create admin"})]})]})}})})};let ea=(0,h.Ue)(e=>({open:!1,setOpen:s=>e({open:s,edit:null}),edit:null,setEdit:s=>e({edit:s,open:!0}),delete:null,setDelete:s=>e({delete:s})}));var er=()=>{let{admin:e}=(0,P.ZP)(),{data:s,isLoading:i}=(0,E.ZP)("/api/admin/groups",D.Z),{data:r}=(0,E.ZP)("/api/admin/flags",D.Z),n=ea(e=>e.setEdit),l=ea(e=>e.delete),t=ea(e=>e.setDelete),d=async()=>{if(l){try{await (0,M.Z)("/api/admin/groups/".concat(l.id.replace("#","")),{method:"DELETE"}),C.Am.success("Succesfully deleted group!"),await (0,E.JG)("/api/admin/groups"),await (0,E.JG)("/api/admin/admins")}catch(s){var e;C.Am.error(null!==(e=s.response.data)&&void 0!==e?e:"Failed to delete group!")}t(null)}},o=i||!s?"loading":"idle",c=(s,i)=>{switch(i){case"id":return(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:s.id});case"name":return(0,a.jsx)("div",{children:s.name});case"flags":let r=s.flags,l=r.filter(e=>e.startsWith("@web")),d=r.filter(e=>!e.startsWith("@web"));return"string"!=typeof s.flags?s.flags?s.flags.length>2?(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[l.length?(0,a.jsx)(_.e,{content:l.join("\n"),closeDelay:50,color:"primary",className:"whitespace-pre-wrap","aria-label":"Web Flags",children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"primary",children:[l.length," Web Flags"]})}):(0,a.jsx)(a.Fragment,{}),d.length?(0,a.jsx)(_.e,{content:d.join("\n"),closeDelay:50,color:"secondary",className:"whitespace-pre-wrap","aria-label":"Admin Flags",children:(0,a.jsxs)(Z.z,{variant:"flat",size:"sm",color:"secondary",children:[d.length," Admin Flags"]})}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:s.flags.join(", ")}):"":s.flags;case"immunity":return(0,a.jsx)(Z.z,{variant:"flat",size:"sm",children:s.immunity});case"created":return(0,a.jsxs)(a.Fragment,{children:[(0,F.Q)(new Date(s.created||""))," ago"]});case"actions":let o=Number(e.immunity)<Number(s.immunity)&&(null==e?void 0:e.immunity)!=="100";return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>n(s),isDisabled:o,children:[(0,a.jsx)(S.Z,{size:16}),"Edit Admin Group"]}),(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"danger",onClick:()=>t(s),isDisabled:o,children:[(0,a.jsx)(A.Z,{size:16}),"Delete Admin Group"]})]});default:return(0,a.jsx)(a.Fragment,{children:"Error!"})}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.b,{children:[(0,a.jsxs)(v.J,{children:[(0,a.jsx)(j.j,{children:"ID"},"id"),(0,a.jsx)(j.j,{children:"Name"},"name"),(0,a.jsx)(j.j,{children:"Flags"},"flags"),(0,a.jsx)(j.j,{children:"Immunity"},"immunity"),(0,a.jsx)(j.j,{children:"Created"},"created"),(0,a.jsx)(j.j,{children:"Actions"},"actions")]}),(0,a.jsx)(y.y,{loadingContent:(0,a.jsx)(N.c,{}),loadingState:o,isLoading:"loading"===o,items:null!=s?s:[],children:e=>(0,a.jsx)(b.g,{children:s=>(0,a.jsx)(w.X,{children:c(e,s)})})})]}),(0,a.jsx)(W.Z,{open:!!l,onAction:d,onCancel:()=>t(null),title:"Delete group",text:(0,a.jsxs)("p",{children:["Are you sure you want to delete: ",(0,a.jsx)("b",{children:null==l?void 0:l.name})," group?"]})})]})},en=i(81163);let el=en.z.object({id:en.z.string().min(3).refine(e=>e.startsWith("#"),{message:"The id must start with #"}),name:en.z.string().min(3),flags:en.z.array(es.bH),immunity:en.z.string().min(0).max(100)});var et=()=>{let e=ea(e=>e.open),s=ea(e=>e.edit),i=ea(e=>e.setOpen),{data:r}=(0,E.ZP)("/api/admin/flags",D.Z),{admin:n,masterAdmin:l}=(0,P.ZP)(),[t,d]=(0,z.useState)(!1),o=async()=>{if(!t){d(!0);try{await (0,M.Z)(s?"/api/admin/groups/".concat(s.id.replace("#","")):"/api/admin/groups",{method:s?"PUT":"POST",data:c.values}),await (0,E.JG)("/api/admin/groups"),await (0,E.JG)("/api/admin/admins"),C.Am.success(s?"Succesfully edited group!":"Succesfully created group!"),i(!1)}catch(e){console.error(e),C.Am.error("Failed to ".concat(s?"edit":"create"," group!"))}d(!1)}},c=(0,B.c)({initialValues:{id:s?s.id:"#",name:s?s.name:"",flags:s?s.flags:["@css/generic"],immunity:s?s.immunity.toString():"0"},validate:(0,H.F)(el)});return(0,z.useEffect)(()=>{c.setValues({id:s?s.id:"#",name:s?s.name:"",flags:s?s.flags:["@css/generic"],immunity:s?s.immunity.toString():"0"})},[s]),(0,z.useEffect)(()=>{c.values.name&&c.setValues({id:"#".concat(c.values.name.toLowerCase().replace(/\s/g,"-"))})},[c.values.name]),(0,a.jsx)(O.R,{isOpen:e,onOpenChange:t?void 0:i,children:(0,a.jsx)(k.A,{children:e=>{var i,d;return(0,a.jsxs)("form",{onSubmit:c.onSubmit(o),children:[(0,a.jsx)(V.k,{className:"flex flex-col gap-1",children:s?"Edit group":"Create new group"}),(0,a.jsxs)(J.I,{children:[(0,a.jsx)(ee.Y,{...c.getInputProps("name"),errorMessage:c.errors.name,isInvalid:!!c.errors.name,label:"Group Name",placeholder:"Example, Admins",variant:"bordered",disabled:t,autoFocus:!0}),(0,a.jsx)(ee.Y,{...c.getInputProps("id"),errorMessage:c.errors.id,isInvalid:!!c.errors.id,label:"Group ID",placeholder:"Example, #admins",type:"text",variant:"bordered",disabled:t}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)(T.F,{placement:"right",children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Web Flags: ",c.values.flags.filter(e=>e.startsWith("@web")).length]})}),(0,a.jsx)(Y.a,{"aria-label":"Web Flags",items:[...es.hn.filter(e=>e.id.startsWith("@web/")),...null===(i=r||[])||void 0===i?void 0:i.filter(e=>e.flag.startsWith("@web/"))].concat(),closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...c.values.flags]),onSelectionChange:e=>c.setFieldValue("flags",Array.from(e)),disallowEmptySelection:!0,children:e=>e.flag?(0,a.jsxs)(K.W,{id:e.flag,color:"default",children:[e.flag," - ",e.identifier," ",(0,a.jsx)(Z.z,{color:"primary",variant:"flat",size:"sm",className:"mx-2 text-xs h-5",children:"Custom"})]},e.flag):(0,a.jsxs)(K.W,{id:e.id,color:"default",children:[e.id," - ",e.description]},e.id)})]}),(0,a.jsxs)(T.F,{placement:"right",children:[(0,a.jsx)(R.S,{children:(0,a.jsxs)(m.A,{variant:"bordered",children:["Admin Flags:"," ",c.values.flags.filter(e=>!e.startsWith("@web/")).length]})}),(0,a.jsx)(Y.a,{"aria-label":"Admin Flags",items:[...es.hn.filter(e=>!e.id.startsWith("@web/")),...null===(d=r||[])||void 0===d?void 0:d.filter(e=>!e.flag.startsWith("@web/"))].concat(),closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...c.values.flags]),onSelectionChange:e=>c.setFieldValue("flags",Array.from(e)),disallowEmptySelection:!0,children:e=>e.flag?(0,a.jsxs)(K.W,{id:e.flag,color:"default",children:[e.flag," - ",e.identifier," ",(0,a.jsx)(Z.z,{color:"primary",variant:"flat",size:"sm",className:"mx-2 text-xs h-5",children:"Custom"})]},e.flag):(0,a.jsxs)(K.W,{id:e.id,color:"default",children:[e.id," - ",e.description]},e.id)})]})]}),(0,a.jsx)(ee.Y,{value:c.values.immunity,onChange:e=>l?c.setFieldValue("immunity",e.target.value):(null==n?void 0:n.immunity)==="100"?c.setFieldValue("immunity","99"):Number(e.target.value)<Number(null==n?void 0:n.immunity)&&Number(e.target.value)>=0&&c.setFieldValue("immunity",e.target.value),errorMessage:c.errors.immunity,isInvalid:!!c.errors.immunity,label:"Immunity",placeholder:"Example, 99".concat(l?"":", max of ".concat(Number(null==n?void 0:n.immunity)-1)),description:l?"Max of ".concat(Number(null==n?void 0:n.immunity)-1," (Your immunity - 1)"):"No limit",type:"number",variant:"bordered",disabled:t})]}),(0,a.jsxs)(L.R,{children:[(0,a.jsx)(m.A,{color:"danger",variant:"flat",onPress:e,disabled:t,children:"Cancel"}),(0,a.jsx)(m.A,{color:"primary",type:"submit",isLoading:t,children:s?"Edit admin group":"Create admin group"})]})]})}})})};let ed=(0,h.Ue)(e=>({open:!1,setOpen:s=>e({open:s,edit:null}),edit:null,setEdit:s=>e({edit:s,open:!0}),delete:null,setDelete:s=>e({delete:s})}));var eo=()=>{let{data:e,isLoading:s}=(0,E.ZP)("/api/admin/flags",D.Z),i=ed(e=>e.setEdit),r=ed(e=>e.delete),n=ed(e=>e.setDelete),l=async()=>{if(r){try{await (0,M.Z)("/api/admin/flags/".concat(r.flag.replace("@","").replace("/","$")),{method:"DELETE"}),C.Am.success("Succesfully deleted flag!"),await (0,E.JG)("/api/admin/flags"),await (0,E.JG)("/api/admin/groups"),await (0,E.JG)("/api/admin/admins")}catch(s){var e;C.Am.error(null!==(e=s.response.data)&&void 0!==e?e:"Failed to delete flag!")}n(null)}},t=s||!e?"loading":"idle",d=(e,s)=>{switch(s){case"flag":return(0,a.jsx)(Z.z,{color:"primary",variant:"flat",size:"sm",children:e.flag});case"identifier":return(0,a.jsx)("div",{children:e.identifier});case"created":return(0,a.jsxs)(a.Fragment,{children:[(0,F.Q)(new Date(e.created||""))," ago"]});case"actions":return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>i(e),children:[(0,a.jsx)(S.Z,{size:16}),"Edit Flag"]}),(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"danger",onClick:()=>n(e),children:[(0,a.jsx)(A.Z,{size:16}),"Delete Flag"]})]});default:return(0,a.jsx)(a.Fragment,{children:"Error!"})}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.b,{children:[(0,a.jsxs)(v.J,{children:[(0,a.jsx)(j.j,{children:"Flag"},"flag"),(0,a.jsx)(j.j,{children:"Identifier"},"identifier"),(0,a.jsx)(j.j,{children:"Created"},"created"),(0,a.jsx)(j.j,{children:"Actions"},"actions")]}),(0,a.jsx)(y.y,{loadingContent:(0,a.jsx)(N.c,{}),loadingState:t,isLoading:"loading"===t,items:null!=e?e:[],children:e=>(0,a.jsx)(b.g,{children:s=>(0,a.jsx)(w.X,{children:d(e,s)})},e.flag)})]}),(0,a.jsx)(W.Z,{open:!!r,onAction:l,onCancel:()=>n(null),title:"Delete flag",text:(0,a.jsxs)("p",{children:["Are you sure you want to delete: ",(0,a.jsx)("b",{children:null==r?void 0:r.flag})," flag?"]})})]})};let ec=en.z.object({flag:en.z.string().startsWith("@","The flag must start with @").includes("/",{message:"The flag must contain a /"}).min(3),identifier:en.z.string()});var em=()=>{let e=ed(e=>e.open),s=ed(e=>e.edit),i=ed(e=>e.setOpen),[r,n]=(0,z.useState)(!1),l=async()=>{if(!r){n(!0);try{await (0,M.Z)(s?"/api/admin/flags/".concat(s.flag.replace("@","").replace("/","$")):"/api/admin/flags",{method:s?"PUT":"POST",data:t.values}),await (0,E.JG)("/api/admin/flags"),await (0,E.JG)("/api/admin/groups"),await (0,E.JG)("/api/admin/admins"),C.Am.success(s?"Succesfully edited flag!":"Succesfully created flag!"),t.reset(),i(!1)}catch(e){console.error(e),C.Am.error("Failed to ".concat(s?"edit":"create"," flag!"))}n(!1)}},t=(0,B.c)({initialValues:{flag:s?s.flag:"@",identifier:s?s.identifier:""},validate:(0,H.F)(ec)});return(0,z.useEffect)(()=>{t.setValues({flag:s?s.flag:"@",identifier:s?s.identifier:""})},[s]),(0,a.jsx)(O.R,{isOpen:e,onOpenChange:r?void 0:i,children:(0,a.jsx)(k.A,{children:e=>(0,a.jsxs)("form",{onSubmit:t.onSubmit(l),children:[(0,a.jsx)(V.k,{className:"flex flex-col gap-1",children:s?"Edit flag":"Create new flag"}),(0,a.jsxs)(J.I,{children:[(0,a.jsx)(ee.Y,{...t.getInputProps("flag"),errorMessage:t.errors.flag,isInvalid:!!t.errors.flag,label:"Flag",placeholder:"Example, @custom/my-custom-flag",variant:"bordered",disabled:r,autoFocus:!0}),(0,a.jsx)(ee.Y,{...t.getInputProps("identifier"),errorMessage:t.errors.identifier,isInvalid:!!t.errors.identifier,label:"Flag identifier",placeholder:"Example: flag for VIP users",type:"text",variant:"bordered",disabled:r})]}),(0,a.jsxs)(L.R,{children:[(0,a.jsx)(m.A,{color:"danger",variant:"flat",onPress:e,disabled:r,children:"Cancel"}),(0,a.jsx)(m.A,{color:"primary",type:"submit",isLoading:r,children:s?"Edit custom flag":"Create custom flag"})]})]})})})},eu=()=>{let e=f(e=>e.setOpen),s=ea(e=>e.setOpen),i=ed(e=>e.setOpen),h=(0,d.usePathname)(),x=g.r.find(e=>e.path===h);return(0,a.jsx)(p.default,{flags:(null==x?void 0:x.permissions)||[],children:(0,a.jsxs)(o.n,{"aria-label":"Options",children:[(0,a.jsx)(c.r,{title:"Manage Admins",children:(0,a.jsxs)(r.w,{children:[(0,a.jsxs)(n.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Manage Admins",(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>e(!0),children:[(0,a.jsx)(t.Z,{}),"Create new Admin"]})]}),(0,a.jsx)(l.G,{children:(0,a.jsx)(I,{})}),(0,a.jsx)(ei,{})]})},"admins"),(0,a.jsx)(c.r,{title:"Manage Groups",children:(0,a.jsxs)(r.w,{children:[(0,a.jsxs)(n.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Manage Admin Groups",(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>s(!0),children:[(0,a.jsx)(t.Z,{}),"Create new group"]})]}),(0,a.jsxs)(l.G,{children:[(0,a.jsxs)("p",{className:"text-sm mb-6",children:["Admin groups are used to make pre-defined permissions for admins, you can assign an admin to a group and whenever you change the group permissions, the admin will automatically get the new permissions.",(0,a.jsx)("br",{}),"Note that you can also assign a group to an admin by using the command"," ",(0,a.jsx)(u.z,{size:"sm",children:"css_addadmin [steam64] [name] [groupId] [immunity - 0]"})]}),(0,a.jsx)(er,{})]}),(0,a.jsx)(et,{})]})},"groups"),(0,a.jsx)(c.r,{title:"Custom Flags",children:(0,a.jsxs)(r.w,{children:[(0,a.jsxs)(n.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Manage Flags",(0,a.jsxs)(m.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>i(!0),children:[(0,a.jsx)(t.Z,{}),"Create new flag"]})]}),(0,a.jsxs)(l.G,{children:[(0,a.jsxs)("p",{className:"text-sm mb-6",children:["Admin flags are used to give permissions to admins, you can assign an admin to a flag and whenever you change the flag permissions, the admin will automatically get the new permissions.",(0,a.jsx)("br",{}),"The flags will be shown as ",(0,a.jsx)(u.z,{children:"@custom/your-flag"}),(0,a.jsx)("br",{}),"You can also create a flag with a custom prefix, for example,"," ",(0,a.jsx)(u.z,{children:"@web/your-flag"})," and it will also be shown in the dropdown menu."]}),(0,a.jsx)(eo,{})]}),(0,a.jsx)(em,{})]})},"flags")]})})}},4599:function(e,s,i){"use strict";var a=i(10401),r=i(82613),n=i(78441),l=i(30054),t=i(73727),d=i(8523),o=i(27094);s.Z=e=>{let{open:s,title:i,text:c,onAction:m,onCancel:u}=e;return(0,a.jsx)(n.R,{isOpen:s,onOpenChange:u,children:(0,a.jsx)(l.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.k,{className:"flex flex-col gap-1",children:i}),(0,a.jsx)(d.I,{children:c}),(0,a.jsxs)(o.R,{children:[(0,a.jsx)(r.A,{color:"default",variant:"flat",onPress:e,children:"Cancel"}),(0,a.jsx)(r.A,{color:"primary",type:"submit",onClick:m,children:i})]})]})})})}},75799:function(e,s,i){"use strict";var a=i(82187);s.Z=e=>a.Z.get(e).then(e=>e.data)},90296:function(e,s,i){"use strict";i.d(s,{hY:function(){return t},jc:function(){return d}});var a=i(94711),r=i(27981),n=i(75799),l=i(82187);let t=async()=>{await (0,l.Z)("/api/auth/logout"),await (0,r.JG)("/api/auth"),a.Am.success("Logged out successfully")},d=()=>{let e=window.innerWidth/2-300,s=window.innerHeight/2-400,i=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(s,", left=").concat(e)),n=setInterval(async()=>{i&&i.closed&&(await (0,r.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(n))},1e3)};s.ZP=()=>{let{data:e,isLoading:s,error:i}=(0,r.ZP)("/api/auth",n.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:i||!e?null:e.user,admin:i||!e?null:e.admin,masterAdmin:!i&&!!e&&e.masterAdmin,isLoading:s}}},69492:function(e,s,i){"use strict";i.d(s,{k:function(){return d}});var a=i(10401),r=i(89478),n=i(65277),l=i(75799),t=i(27981);let d=(0,n.Ue)(e=>({modules:[],setModules:s=>e(()=>({modules:s,isLoading:!1})),isLoading:!0,setLoading:s=>e(()=>({isLoading:s}))}));s.Z=()=>{let{data:e,isLoading:s}=(0,t.ZP)("/api/modules",l.Z),i=d(e=>e.setModules),n=d(e=>e.setLoading);return(0,r.useEffect)(()=>{e&&(i(e),n(!1))},[e,s,i,n]),(0,a.jsx)(a.Fragment,{})}},64347:function(e,s,i){"use strict";i.d(s,{bH:function(){return l},hn:function(){return r},sm:function(){return n}});var a=i(81163);let r=[{id:"@css/reservation",description:"Reserved slot access."},{id:"@css/generic",description:"Generic admin."},{id:"@css/kick",description:"Kick other players."},{id:"@css/ban",description:"Ban other players."},{id:"@css/permban",description:"Perma ban other players."},{id:"@css/unban",description:"Remove bans."},{id:"@css/vip",description:"General vip status."},{id:"@css/slay",description:"Slay/harm other players."},{id:"@css/changemap",description:"Change the map or major gameplay features."},{id:"@css/cvar",description:"Change most cvars."},{id:"@css/config",description:"Execute config files."},{id:"@css/chat",description:"Special chat privileges."},{id:"@css/vote",description:"Start or create votes."},{id:"@css/password",description:"Set a password on the server."},{id:"@css/rcon",description:"Use RCON commands."},{id:"@css/cheats",description:"Change sv_cheats or use cheating commands."},{id:"@css/root",description:"Magically enables all flags and ignores immunity values."},{id:"@web/root",description:"Web panel root access."},{id:"@web/admins",description:"Manage web admins."},{id:"@web/admingroups",description:"Manage web admin groups."},{id:"@web/bans",description:"Manage bans."},{id:"@web/mutes",description:"Manage mutes."},{id:"@web/logs",description:"View panel logs."},{id:"@web/stats",description:"View server statistics."},{id:"@web/servers",description:"Manage servers."},{id:"@web/rcon",description:"Manage servers via RCON."}],n=r.map(e=>e.id),l=a.z.string().refine(e=>e.startsWith("@")||e.startsWith("#"),{message:"The flag is not valid"}),t=a.z.object({player_name:a.z.string().min(3).regex(/^[\w\s]+$/),player_steamid:a.z.string().regex(/^7656119\d{10}$/),server_id:a.z.array(a.z.string()).nullable(),servers_groups:a.z.array(a.z.string()).nullable(),flags:a.z.union([a.z.array(l),l]),immunity:a.z.union([a.z.string().min(0).max(100),a.z.number().min(0).max(100)]),ends:a.z.union([a.z.string(),a.z.date()]).nullable()});s.ZP=t}},function(e){e.O(0,[629,3660,9548,4711,2613,9242,9807,2781,4529,1342,1273,7060,4015,7668,1163,3870,7558,8364,997,5899,2925,7570,9493,9555,8193,4370,3843,1744],function(){return e(e.s=37391)}),_N_E=e.O()}]);