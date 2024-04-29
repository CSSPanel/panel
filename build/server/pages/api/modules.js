"use strict";(()=>{var e={};e.id=1889,e.ids=[1889],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},56657:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>u,default:()=>c,routeModule:()=>d});var a=r(44614),n=r(49531),i=r(55621),l=r(19973),o=e([l]);l=(o.then?(await o)():o)[0];let c=(0,i.l)(l,"default"),u=(0,i.l)(l,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/modules",pathname:"/api/modules",bundlePath:"",filename:""},userland:l});s()}catch(e){s(e)}})},19973:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l});var a=r(18391),n=r(10474),i=e([a,n]);[a,n]=i.then?(await i)():i;let l=async(e,t)=>{await n.Z.run(e,t);let{method:r}=e;if("GET"===r)try{let e=await (0,a.By)(),r=await Promise.all(e.map(async e=>{let{enabled:t,settings:r}=await (0,a.ed)(e.identifier)||{enabled:!1,settings:{}};return{identifier:e.identifier,enabled:t,settings:r}}));return t.status(200).json(r)}catch(e){return error(e),t.status(500).json(e)}return t.status(405).end()};s()}catch(e){s(e)}})},18391:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{$6:()=>c,By:()=>u,GQ:()=>h,ZW:()=>o,ed:()=>m});var a=r(73907),n=r(99648),i=e([a,n]);[a,n]=i.then?(await i)():i;let l=process.env.DOMAIN?.replace("http://","").replace("https://",""),o=async()=>await g.post("/hosts",{identifier:l}).then(()=>{log("Registered/Logged in to liceses API")}),c=async({method:e,moduleId:t})=>{try{let{data:r}=await g.post("/licenses/start",{cycle:e,hostId:l,moduleId:t,returnUrl:`${process.env.DOMAIN}/admin/modules`});return log(`Created license process for ${t}, method: ${e}`),log(r,typeof r),r}catch(e){throw e}},u=async()=>{try{let{data:e}=await g.get("/modules/css-panel");return log(`Loaded ${e.length} modules`),e}catch(e){return error(e),[]}},d=null,p=null,y=async()=>{if(d&&p&&Date.now()<p)return d;try{let{data:e}=await g.get(`/licenses/active/${l}`);return log(`Loaded ${e.length} licenses`),d=e,p=Date.now()+1e4,e}catch(e){return error("GetLicenses",e),[]}},h=async e=>{try{return(await y()).find(t=>t.module?.identifier===e)||null}catch(e){return error("GetLicense",e),null}},m=async e=>{try{if(!a.Z)return{enabled:!1,settings:{},license:null};let t=await h(e);if(!t)return{enabled:!1,settings:{},license:null};let r=await a.Z.settings.getByKey("modules",!1),s=r?.find(t=>t.identifier===e),n=!!s?.enabled,i=s?.settings||{};return{enabled:n,settings:i,license:t}}catch(e){return error(e),{enabled:!1,settings:{},license:null}}},g=n.default.create({baseURL:"https://li.csspanel.dev/v1"});s()}catch(e){s(e)}})},10474:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>u});var a=r(60276),n=r(45616),i=r(429),l=r.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let c=(0,n.default)();c.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),c.use(a.Z.initialize()),c.use(a.Z.session());let u=c;s()}catch(e){s(e)}})},60276:(e,t,r)=>{r.d(t,{Z:()=>l});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let l=a()}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2867],()=>r(56657));module.exports=s})();