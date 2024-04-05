"use strict";(()=>{var t={};t.id=6725,t.ids=[6725],t.modules={62418:t=>{t.exports=require("mysql2/promise")},20145:t=>{t.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:t=>{t.exports=import("axios")},97564:t=>{t.exports=import("chalk")},2782:t=>{t.exports=import("steam-api-sdk")},9926:t=>{t.exports=import("zod")},57147:t=>{t.exports=require("fs")},71017:t=>{t.exports=require("path")},91253:(t,e,r)=>{r.a(t,async(t,i)=>{try{r.r(e),r.d(e,{config:()=>d,default:()=>p,routeModule:()=>l});var n=r(88667),s=r(25828),a=r(38051),o=r(15838),m=t([o]);o=(m.then?(await m)():m)[0];let p=(0,a.l)(o,"default"),d=(0,a.l)(o,"config"),l=new n.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/admin/setup",pathname:"/api/admin/setup",bundlePath:"",filename:""},userland:o});i()}catch(t){i(t)}})},15838:(t,e,r)=>{r.a(t,async(t,i)=>{try{r.r(e),r.d(e,{default:()=>u});var n=r(61247),s=r(57147),a=r.n(s),o=r(71017),m=r.n(o),p=r(6995),d=t([n,p]);[n,p]=d.then?(await d)():d;let l=async(t,e)=>{let{method:r}=t;if("POST"===r)try{let r=n.Z.parse(t.body);r.SESSION_SECRET=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),Object.keys(r).forEach(t=>{c(t,r[t])}),await p.Z?.admins.create({player_steamid:r.MASTER_ADMIN,player_name:"Master Admin",flags:["@css/root","@web/root"],immunity:"100",server_id:null}),log("Setup complete!"),e.status(200).send("ok"),process.exit(1)}catch(t){return error(t),e.status(500).json(t)}return e.status(405).end()},c=(t,e)=>{let r=m().join(process.cwd(),".env");a().existsSync(r)||a().writeFileSync(r,"");let i=a().readFileSync(".env","utf8"),n=RegExp(`^${t}=.*$`,"m");n.test(i)?i=i.replace(n,`${t}="${e}"`):i+=`${t}="${e}"
`,a().writeFileSync(".env",i)},u=l;i()}catch(t){i(t)}})},61247:(t,e,r)=>{r.a(t,async(t,i)=>{try{r.d(e,{Z:()=>m,z:()=>o});var n=r(9926),s=t([n]);let a=(n=(s.then?(await s)():s)[0]).z.object({STEAM_API_KEY:n.z.string().min(1),SESSION_SECRET:n.z.string().min(1).optional(),DOMAIN:n.z.string().min(1),DB_HOST:n.z.string().min(1),DB_USER:n.z.string().min(1),DB_PASSWORD:n.z.string().min(1),DB_DATABASE:n.z.string().min(1),DB_PORT:n.z.string().min(1),MASTER_ADMIN:n.z.string().min(1)}),o=n.z.object({DB_HOST:n.z.string().min(1),DB_USER:n.z.string().min(1),DB_PASSWORD:n.z.string().min(1),DB_DATABASE:n.z.string().min(1),DB_PORT:n.z.string().min(1)}),m=a;i()}catch(t){i(t)}})}};var e=require("../../../webpack-api-runtime.js");e.C(t);var r=t=>e(e.s=t),i=e.X(0,[330],()=>r(91253));module.exports=i})();