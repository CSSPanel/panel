"use strict";(()=>{var e={};e.id=2811,e.ids=[2811],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},32081:e=>{e.exports=require("child_process")},55053:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>c,default:()=>l,routeModule:()=>p});var a=r(88667),n=r(25828),i=r(38051),o=r(33435),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,i.l)(o,"default"),c=(0,i.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/update",pathname:"/api/admin/update",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},33435:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c});var a=r(32081),n=r(74186),i=r(73153),o=e([n,i]);[n,i]=o.then?(await o)():o;let u=async(e,t)=>{if(await n.Z.run(e,t),!await (0,i.Z)(e,t,["@web/root","@css/root"],"OR"))return;let{method:r}=e;if("POST"===r)try{log("Updating the panel...");let e=await l("pnpm run pull");return log("Panel updated!"),t.status(200).json(e)}catch(e){return error(e),t.status(500).json(e)}return t.status(405).end()},l=e=>new Promise(function(t){(0,a.exec)(e,(e,r,s)=>{if(e){t({stdout:r,stderr:s});return}t({stdout:r,stderr:s})})}),c=u;s()}catch(e){s(e)}})},74186:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>c});var a=r(15313),n=r(45616),i=r(429),o=r.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let l=(0,n.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let c=l;s()}catch(e){s(e)}})},15313:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},73153:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(6995),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,r,s="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await a.Z.admins.getBySteam64(o);if(!u)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!r)return n(u);let l=null;if("object"==typeof u.flags)l=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(l=e.flags)}if(null===l||!("AND"===s?r.every(e=>l.includes(e)):r.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(u)});s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[6037],()=>r(55053));module.exports=s})();