"use strict";(()=>{var e={};e.id=2150,e.ids=[2150],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},87031:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{config:()=>d,default:()=>l,routeModule:()=>u});var n=t(88667),r=t(25828),o=t(38051),i=t(76210),c=e([i]);i=(c.then?(await c)():c)[0];let l=(0,o.l)(i,"default"),d=(0,o.l)(i,"config"),u=new n.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/skins/collections/[collectionId]",pathname:"/api/skins/collections/[collectionId]",bundlePath:"",filename:""},userland:i});a()}catch(e){a(e)}})},76210:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>l});var n=t(15892),r=t(85607),o=t(6995),i=t(74186),c=e([n,r,o,i]);[n,r,o,i]=c.then?(await c)():c;let l=async(e,s)=>{if(!o.Z)return s.status(500).json({message:"Database not connected"});await i.Z.run(e,s);let{method:t}=e,{collectionId:a}=e.query,c=await o.Z.skins.collections.getById(Number(a));if(!c)return s.status(404).json({message:"Collection not found"});switch(t){case"GET":try{return s.status(200).json(c)}catch(e){return console.error(e),s.status(500).json({message:"Internal server error"})}case"POST":{let t=await (0,r.Z)(e,s);if(!t)return;let a=c.json.skins.map(e=>({...e,steamid:t.id}));for await(let e of(c.json.agents&&(c.json.agents.agent_ct&&await o.Z.skins.agents.setTeamAgent(t.id,c.json.agents.agent_ct),c.json.agents.agent_t&&await o.Z.skins.agents.setTeamAgent(t.id,c.json.agents.agent_t)),c.json.gloves&&c.json.gloves.weapon_defindex&&(console.log("gloves",c.json.gloves.weapon_defindex),await o.Z.skins.gloves.setGloves(t.id,c.json.gloves.weapon_defindex)),c.json.knife&&c.json.knife.knife&&await o.Z.skins.knife.setKnife(t.id,c.json.knife.knife),c.json.music&&c.json.music.music_id&&await o.Z.skins.music.setBySteamId(t.id,c.json.music.music_id),a))e.weapon_defindex&&e.weapon_paint_id&&await o.Z.skins.skins.setBySteamId({steamid:t.id,weapon_defindex:e.weapon_defindex,weapon_paint_id:e.weapon_paint_id,weapon_wear:e.weapon_wear||0,weapon_seed:e.weapon_seed||0});return(0,n.x)(`css_fexec ${t.id} css_wp`),s.status(200).json({message:"Collection copied"})}case"DELETE":try{let t=await (0,r.Z)(e,s);if(!t)return;if(t.id!==c.steamid)return s.status(403).json({message:"Forbidden"});return await o.Z.skins.collections.delete(Number(a)),s.status(200).json({message:"Collection deleted"})}catch(e){return console.error(e),s.status(500).json({message:"Internal server error"})}}};a()}catch(e){a(e)}})},15892:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>l,x:()=>c});var n=t(43582),r=t(6995),o=e([r]);r=(o.then?(await o)():o)[0];let i=async(e,s)=>{if(!r.Z)throw Error("Database not connected");try{let t=await r.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:a,rcon:o}=t,[i,c]=a.split(":");if(!o)throw Error("Server has no rcon password");let l=await (0,n.RCON)({ip:i,port:Number(c),password:o,enableWarns:!0,retries:2,timeout:2e3});l.authenticate();let d=await l.exec(s);if(!d)return"No response from server";return d}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!r.Z)throw Error("Database not connected");let s=await r.Z.servers.getAll();return await Promise.all(s.map(async s=>{try{let t=await i(s.id,e);return{server:s.hostname,response:t}}catch(e){return{server:s.hostname,response:e}}}))},l=i;a()}catch(e){a(e)}})},74186:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>d});var n=t(15313),r=t(45616),o=t(429),i=t.n(o),c=e([r]);r=(c.then?(await c)():c)[0];let l=(0,r.default)();l.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(n.Z.initialize()),l.use(n.Z.session());let d=l;a()}catch(e){a(e)}})},15313:(e,s,t)=>{t.d(s,{Z:()=>i});let a=require("passport");var n=t.n(a);let r=require("passport-steam");n().serializeUser(async(e,s)=>{s(null,e)}),n().deserializeUser(async(e,s)=>{s(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),n().use(new r.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,s,t)=>(s.identifier=e,t(null,s))));let i=n()},85607:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>o});var n=t(6995),r=e([n]);n=(r.then?(await r)():r)[0];let o=(e,s)=>new Promise(async(t,a)=>n.Z?e.user?void t(e.user):a(s.status(400).json({success:!1,error:"Protected Route"})):s.status(500).json({message:"Database not connected"}));a()}catch(e){a(e)}})}};var s=require("../../../../webpack-api-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[6037],()=>t(87031));module.exports=a})();