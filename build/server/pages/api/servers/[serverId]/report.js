"use strict";(()=>{var e={};e.id=2291,e.ids=[2291],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},28700:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>d,routeModule:()=>p});var a=r(20114),n=r(32128),i=r(57797),o=r(24870),u=e([o]);o=(u.then?(await u)():u)[0];let d=(0,i.l)(o,"default"),l=(0,i.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/servers/[serverId]/report",pathname:"/api/servers/[serverId]/report",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},24870:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>p});var a=r(2782),n=r(88061),i=r(48874),o=r(78260),u=r(38910),d=r(59236),l=e([a,n,i,o,u,d]);[a,n,i,o,u,d]=l.then?(await l)():l;let p=async(e,t)=>{if(!i.Z)return t.status(500).json({message:"Database not connected"});await o.Z.run(e,t);let{method:r}=e,s=await (0,n.Z)(e,t);if(!s)return;let l=await (0,d.ed)("player-reports");if(!l.enabled)return t.status(404).json({error:"Module not enabled"});if("POST"===r)try{let{serverId:r}=e.query,n=await i.Z.servers.getById(Number(r));if(!n)return t.status(404).send("Server not found");let{address:o,rcon:d}=n;if(!o||!d)return t.status(400).send("Internal server error");let[p,c]=o.split(":"),{userId:m,reason:f}=e.body;if(!f||f.length<3)return t.status(400).send("Reason is required and must be at least 3 characters long!");let h=await (0,a.From64ToUser)(m);if(console.log({reportedUser:h}),!h||!h.length)return t.status(500).send("Error getting reported user!");if(h[0].steamid===s.id)return t.status(400).send("You cannot report yourself!");let g=await i.Z.reports.getByMinutes(10);if(g.find(e=>e.userId===s.id&&e.targetId===h[0].steamid))return t.status(400).send("You already reported this user!");if(g.filter(e=>e.userId===s.id).length>=3)return t.status(400).send("Please wait before reporting again!");let y=await i.Z.reports.create({userId:s.id,targetId:h[0].steamid,reason:f,serverId:r,handlerId:null}),v=l.settings["webhook-url"];return v&&(0,u.Z)({url:v,embeds:[{title:`Report #${y}`,color:16765287,description:`**Reporter:** [${s.displayName}](https://steamcommunity.com/profiles/${s.id}) (${s.id})
**Suspect:** [${h[0].personaname}](https://steamcommunity.com/profiles/${h[0].steamid}) (${h[0].steamIds[0]})
**Reason:** ${f}
**Status:** Pending
**Server:** ${n.hostname||n.address||"Unknown"}
**Connect:** steam://connect/${n.address}`,timestamp:new Date().toISOString()}],addFooter:!0}),t.status(201).send("")}catch(e){return error(`[REPORT] Error while creating report: ${error}`),t.status(500).send("Internal server error")}};s()}catch(e){s(e)}})},78260:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>l});var a=r(9014),n=r(45616),i=r(429),o=r.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let d=(0,n.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(a.Z.initialize()),d.use(a.Z.session());let l=d;s()}catch(e){s(e)}})},9014:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},88061:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(48874),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t)=>new Promise(async(r,s)=>a.Z?e.user?void r(e.user):s(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[6941],()=>r(28700));module.exports=s})();