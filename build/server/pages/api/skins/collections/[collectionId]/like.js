"use strict";(()=>{var e={};e.id=5434,e.ids=[5434],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},43407:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>u,default:()=>c,routeModule:()=>d});var a=t(88667),i=t(25828),n=t(38051),o=t(55263),l=e([o]);o=(l.then?(await l)():l)[0];let c=(0,n.l)(o,"default"),u=(0,n.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/skins/collections/[collectionId]/like",pathname:"/api/skins/collections/[collectionId]/like",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},55263:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>c});var a=t(72535),i=t(85607),n=t(6995),o=t(74186),l=e([i,n,o]);[i,n,o]=l.then?(await l)():l;let c=async(e,s)=>{if(!n.Z)return s.status(500).json({message:"Database not connected"});if(!(0,a.e)("skins-collections"))return s.status(404).json({message:"Module not found"});await o.Z.run(e,s);let{method:t}=e,{collectionId:r}=e.query,l=await n.Z.skins.collections.getById(Number(r));if(!l)return s.status(404).json({message:"Collection not found"});if("POST"===t){let t=await (0,i.Z)(e,s);if(!t)return;let a=l.likes,o=a.includes(t.id)?a.filter(e=>e!==t.id):[...a,t.id];return await n.Z.skins.collections.updateLikes(Number(r),o),s.status(200).json({likes:o})}};r()}catch(e){r(e)}})},72535:(e,s,t)=>{t.d(s,{e:()=>a,g:()=>r});let r=e=>!!process.env.MODULES&&process.env.MODULES.split(",").includes(e),a=e=>r(e)&&!!process.env.MODULES_ENABLED&&process.env.MODULES_ENABLED.split(",").includes(e)},74186:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>u});var a=t(15313),i=t(45616),n=t(429),o=t.n(n),l=e([i]);i=(l.then?(await l)():l)[0];let c=(0,i.default)();c.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),c.use(a.Z.initialize()),c.use(a.Z.session());let u=c;r()}catch(e){r(e)}})},15313:(e,s,t)=>{t.d(s,{Z:()=>o});let r=require("passport");var a=t.n(r);let i=require("passport-steam");a().serializeUser(async(e,s)=>{s(null,e)}),a().deserializeUser(async(e,s)=>{s(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,s,t)=>(s.identifier=e,t(null,s))));let o=a()},85607:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>n});var a=t(6995),i=e([a]);a=(i.then?(await i)():i)[0];let n=(e,s)=>new Promise(async(t,r)=>a.Z?e.user?void t(e.user):r(s.status(400).json({success:!1,error:"Protected Route"})):s.status(500).json({message:"Database not connected"}));r()}catch(e){r(e)}})}};var s=require("../../../../../webpack-api-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[330],()=>t(43407));module.exports=r})();