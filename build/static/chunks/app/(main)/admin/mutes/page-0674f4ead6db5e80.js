(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4714],{9129:function(e,s,t){Promise.resolve().then(t.bind(t,6138))},679:function(e,s,t){"use strict";var n=t(2412),i=t(165),r=t(5979),a=t(1402),o=t(4837);s.default=e=>{let{children:s,flags:t}=e,{admin:u,isLoading:l}=(0,o.ZP)(),d=(0,r.useRouter)();return(0,a.useEffect)(()=>{if(!l){if(!u)return d.push("/");if(t.length>0&&!t.some(e=>{var s;return null===(s=u.flags)||void 0===s?void 0:s.includes(e)}))return d.push("/admin")}},[u,l,d,t]),l?(0,n.jsx)(i.c,{}):u?(0,n.jsx)(n.Fragment,{children:s}):(0,n.jsx)(n.Fragment,{children:"No Access"})}},4773:function(e,s,t){"use strict";t.d(s,{r:function(){return o}});var n=t(2412),i=t(5979),r=t(8365),a=t(3327);s.default=()=>{let e=(0,i.usePathname)(),s=(0,i.useRouter)();return(0,n.jsx)(r.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>s.push(e),items:o,children:e=>(0,n.jsx)(a.r,{title:e.title},e.path)})};let o=[{path:"/admin",title:"Statistics",permissions:[]},{path:"/admin/modules",title:"Modules",permissions:[]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},6138:function(e,s,t){"use strict";t.r(s);var n=t(2412),i=t(5979),r=t(4773),a=t(679),o=t(3424);s.default=()=>{let e=(0,i.usePathname)(),s=r.r.find(s=>s.path===e);return(0,n.jsx)(a.default,{flags:(null==s?void 0:s.permissions)||[],children:(0,n.jsx)(o.default,{type:"MANAGE"})})}}},function(e){e.O(0,[687,2879,9208,1281,5414,6187,2163,1094,5440,3806,8663,5226,5204,3182,5522,9097,6116,1973,5396,2364,6805,3424,3866,7416,1744],function(){return e(e.s=9129)}),_N_E=e.O()}]);