"use strict";(()=>{var e={};e.id=6106,e.ids=[6106],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},7157:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>u,default:()=>l,routeModule:()=>d});var a=r(44614),n=r(49531),i=r(55621),o=r(98294),c=e([o]);o=(c.then?(await c)():c)[0];let l=(0,i.l)(o,"default"),u=(0,i.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/skins",pathname:"/api/skins/skins",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},98294:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d});var a=r(22567),n=r(18391),i=r(88022),o=r(52497),c=r(73907),l=r(10474),u=e([a,n,i,o,c,l]);[a,n,i,o,c,l]=u.then?(await u)():u;let d=async(e,t)=>{if(!c.Z)return t.status(500).json({message:"Database not connected"});if(!(await (0,n.ed)("skins")).enabled)return t.status(404).json({message:"Module not found"});await l.Z.run(e,t);let{method:r}=e,s=await (0,i.Z)(e,t);if(s)switch(r){case"GET":try{let e=s.id,r=await c.Z.skins.skins.getBySteamId(e);return t.status(200).json(r)}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}case"POST":try{let r=s.id,n=o.Z.parse(e.body);return await c.Z.skins.skins.setBySteamId({steamid:r,...n}),(0,a.x)(`css_fexec ${s.id} css_wp`),t.status(200).json({message:"Skin set"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};s()}catch(e){s(e)}})},22567:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>l,x:()=>c});var a=r(43582),n=r(73907),i=e([n]);n=(i.then?(await i)():i)[0];let o=async(e,t)=>{if(!n.Z)throw Error("Database not connected");try{let r=await n.Z.servers.getById(Number(e));if(!r)throw Error("Server not found");let{address:s,rcon:i}=r,[o,c]=s.split(":");if(!i)throw Error("Server has no rcon password");let l=await (0,a.RCON)({ip:o,port:Number(c),password:i,enableWarns:!0,retries:2,timeout:2e3});l.authenticate();let u=await l.exec(t);if(!u)return"No response from server";return u}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.Z)throw Error("Database not connected");let t=await n.Z.servers.getAll();return await Promise.all(t.map(async t=>{try{let r=await o(t.id,e);return{server:t.hostname,response:r}}catch(e){return{server:t.hostname,response:e}}}))},l=o;s()}catch(e){s(e)}})},18391:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{$6:()=>l,By:()=>u,GQ:()=>y,ZW:()=>c,ed:()=>m});var a=r(73907),n=r(99648),i=e([a,n]);[a,n]=i.then?(await i)():i;let o=process.env.DOMAIN?.replace("http://","").replace("https://",""),c=async()=>await w.post("/hosts",{identifier:o}).then(()=>{log("Registered/Logged in to liceses API")}),l=async({method:e,moduleId:t})=>{try{let{data:r}=await w.post("/licenses/start",{cycle:e,hostId:o,moduleId:t,returnUrl:`${process.env.DOMAIN}/admin/modules`});return log(`Created license process for ${t}, method: ${e}`),log(r,typeof r),r}catch(e){throw e}},u=async()=>{try{let{data:e}=await w.get("/modules/css-panel");return log(`Loaded ${e.length} modules`),e}catch(e){return error(e),[]}},d=null,p=null,h=async()=>{if(d&&p&&Date.now()<p)return d;try{let{data:e}=await w.get(`/licenses/active/${o}`);return log(`Loaded ${e.length} licenses`),d=e,p=Date.now()+1e4,e}catch(e){return error("GetLicenses",e),[]}},y=async e=>{try{return(await h()).find(t=>t.module?.identifier===e)||null}catch(e){return error("GetLicense",e),null}},m=async e=>{try{if(!a.Z)return{enabled:!1,settings:{},license:null};let t=await y(e);if(!t)return{enabled:!1,settings:{},license:null};let r=await a.Z.settings.getByKey("modules",!1),s=r?.find(t=>t.identifier===e),n=!!s?.enabled,i=s?.settings||{};return{enabled:n,settings:i,license:t}}catch(e){return error(e),{enabled:!1,settings:{},license:null}}},w=n.default.create({baseURL:"https://li.csspanel.dev/v1"});s()}catch(e){s(e)}})},10474:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>u});var a=r(60276),n=r(45616),i=r(429),o=r.n(i),c=e([n]);n=(c.then?(await c)():c)[0];let l=(0,n.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let u=l;s()}catch(e){s(e)}})},60276:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},88022:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(73907),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t)=>new Promise(async(r,s)=>a.Z?e.user?void r(e.user):s(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})},52497:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).z.object({weapon_defindex:a.z.number(),weapon_paint_id:a.z.number(),weapon_wear:a.z.number(),weapon_seed:a.z.number()});s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2867],()=>r(7157));module.exports=s})();