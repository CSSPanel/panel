"use strict";(()=>{var e={};e.id=248,e.ids=[248],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},68428:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{config:()=>l,default:()=>d,routeModule:()=>u});var i=t(88667),r=t(25828),n=t(38051),o=t(47157),c=e([o]);o=(c.then?(await c)():c)[0];let d=(0,n.l)(o,"default"),l=(0,n.l)(o,"config"),u=new i.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/admin/groups",pathname:"/api/admin/groups",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},47157:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>l});var i=t(6995),r=t(74186),n=t(8505),o=t(73153),c=t(45878),d=e([i,r,n,o,c]);[i,r,n,o,c]=d.then?(await d)():d;let l=async(e,s)=>{await r.Z.run(e,s);let{method:t}=e,a=await (0,o.Z)(e,s,["@web/root","@web/admingroups","@css/root"],"OR");if(a){if(!i.Z)return s.status(500).json({message:"Database not connected"});switch(t){case"GET":{let e=await i.Z.adminGroups.getAll();return s.status(200).json(e)}case"POST":{let{id:t,name:r,flags:o,immunity:d}=n.Z.parse(e.body),l=a.immunity;if("100"!==l&&Number(d)>Number(l))return s.status(403).json({message:"You cannot create an admin group with higher immunity than yours"});let u=await i.Z.adminGroups.create({id:t,name:r,flags:o,immunity:d});return(0,c.Z)("Admin Group Create",`Admin ${e.user?.displayName} (${e.user?.id}) created admin group: ${r}`,e.user?.id),s.status(201).json(u)}default:return s.status(405).json({message:"Method not allowed"})}}};a()}catch(e){a(e)}})},45878:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>o});var i=t(6995),r=t(899),n=e([i,r]);[i,r]=n.then?(await n)():n;let o=async(e,s,t)=>{if(i.Z)try{i.Z.logs.create(e,s,t);let a=await i.Z.settings.getByKey("discordWebhook",!1);a&&(0,r.Z)({url:a,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:s,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};a()}catch(e){a(e)}})},74186:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>l});var i=t(15313),r=t(45616),n=t(429),o=t.n(n),c=e([r]);r=(c.then?(await c)():c)[0];let d=(0,r.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(i.Z.initialize()),d.use(i.Z.session());let l=d;a()}catch(e){a(e)}})},15313:(e,s,t)=>{t.d(s,{Z:()=>o});let a=require("passport");var i=t.n(a);let r=require("passport-steam");i().serializeUser(async(e,s)=>{s(null,e)}),i().deserializeUser(async(e,s)=>{s(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),i().use(new r.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,s,t)=>(s.identifier=e,t(null,s))));let o=i()},73153:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>n});var i=t(6995),r=e([i]);i=(r.then?(await r)():r)[0];let n=(e,s,t,a="AND")=>new Promise(async(r,n)=>{if(!i.Z)return s.status(500).json({message:"Database not connected"});if(!e.user)return n(s.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,c=await i.Z.admins.getBySteam64(o);if(!c)return n(s.status(401).json({success:!1,error:"Protected Route"}));if(!t)return r(c);let d=null;if("object"==typeof c.flags)d=c.flags;else{let e=await i.Z.adminGroups.getById(c.flags);e&&(d=e.flags)}if(null===d||!("AND"===a?t.every(e=>d.includes(e)):t.some(e=>d.includes(e))))return n(s.status(403).json({success:!1,error:"Protected Route"}));r(c)});a()}catch(e){a(e)}})},8505:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>o});var i=t(9926),r=t(42088),n=e([i,r]);[i,r]=n.then?(await n)():n;let o=i.z.object({id:i.z.string().min(3).refine(e=>e.startsWith("#"),{message:"The id must start with #"}),name:i.z.string().min(3),flags:i.z.array(r.bH),immunity:i.z.string().min(0).max(100)});a()}catch(e){a(e)}})},42088:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{ZP:()=>c,bH:()=>o});var i=t(9926),r=e([i]);i=(r.then?(await r)():r)[0];let n=[{id:"@css/reservation",description:"Reserved slot access."},{id:"@css/generic",description:"Generic admin."},{id:"@css/kick",description:"Kick other players."},{id:"@css/ban",description:"Ban other players."},{id:"@css/unban",description:"Remove bans."},{id:"@css/vip",description:"General vip status."},{id:"@css/slay",description:"Slay/harm other players."},{id:"@css/changemap",description:"Change the map or major gameplay features."},{id:"@css/cvar",description:"Change most cvars."},{id:"@css/config",description:"Execute config files."},{id:"@css/chat",description:"Special chat privileges."},{id:"@css/vote",description:"Start or create votes."},{id:"@css/password",description:"Set a password on the server."},{id:"@css/rcon",description:"Use RCON commands."},{id:"@css/cheats",description:"Change sv_cheats or use cheating commands."},{id:"@css/root",description:"Magically enables all flags and ignores immunity values."},{id:"@web/root",description:"Web panel root access."},{id:"@web/admins",description:"Manage web admins."},{id:"@web/admingroups",description:"Manage web admin groups."},{id:"@web/bans",description:"Manage bans."},{id:"@web/mutes",description:"Manage mutes."},{id:"@web/logs",description:"View panel logs."},{id:"@web/stats",description:"View server statistics."},{id:"@web/servers",description:"Manage servers."}].map(e=>e.id),o=i.z.string().refine(e=>n.includes(e)||e.startsWith("#"),{message:"The flag is not valid"}),c=i.z.object({player_name:i.z.string().min(3).regex(/^[\w\s]+$/),player_steamid:i.z.string().regex(/^7656119\d{10}$/),server_id:i.z.array(i.z.string()).nullable(),flags:i.z.union([i.z.array(o),o]),immunity:i.z.string().min(0).max(100)});a()}catch(e){a(e)}})}};var s=require("../../../webpack-api-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[330],()=>t(68428));module.exports=a})();