(()=>{var e={};e.id=506,e.ids=[506],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},92761:e=>{"use strict";e.exports=require("node:async_hooks")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},59692:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>o,routeModule:()=>u,tree:()=>d}),s(72473),s(45548),s(19967),s(35866),s(32029);var a=s(23191),r=s(88716),n=s(37922),l=s.n(n),i=s(95231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);s.d(t,c);let d=["",{children:["(dashboard)",{children:["list",{children:["teachers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,72473)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/teachers/page.tsx"]}]},{}]},{loading:[()=>Promise.resolve().then(s.bind(s,45548)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,19967)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"/Users/Light/Desktop/School Managment/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/teachers/page.tsx"],h="/(dashboard)/list/teachers/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard)/list/teachers/page",pathname:"/list/teachers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},18591:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.t.bind(s,79404,23)),Promise.resolve().then(s.bind(s,89310)),Promise.resolve().then(s.bind(s,91704)),Promise.resolve().then(s.bind(s,74351))},91704:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var a=s(10326),r=s(35047);let n=({page:e,count:t})=>{let s=(0,r.useRouter)(),n=e=>{let t=new URLSearchParams(window.location.search);t.set("page",e.toString()),s.push(`${window.location.pathname}?${t}`)};return(0,a.jsxs)("div",{className:"p-4 flex items-center justify-between text-gray-500",children:[a.jsx("button",{disabled:!(10*(e-1)>0),className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>{n(e-1)},children:"Prev"}),a.jsx("div",{className:"flex items-center gap-2 text-sm",children:Array.from({length:Math.ceil(t/10)},(t,s)=>{let r=s+1;return a.jsx("button",{className:`px-2 rounded-sm ${e===r?"bg-lamaSky":""}`,onClick:()=>{n(r)},children:r},r)})}),a.jsx("button",{className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",disabled:!(10*(e-1)+10<t),onClick:()=>{n(e+1)},children:"Next"})]})}},74351:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(10326),r=s(46226),n=s(35047);let l=()=>{let e=(0,n.useRouter)();return(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault();let s=t.currentTarget[0].value,a=new URLSearchParams(window.location.search);a.set("search",s),e.push(`${window.location.pathname}?${a}`)},className:"w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",children:[a.jsx(r.default,{src:"/search.png",alt:"",width:14,height:14}),a.jsx("input",{type:"text",placeholder:"Search...",className:"w-[200px] p-2 bg-transparent outline-none"})]})}},72473:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var a=s(19510),r=s(40165),n=s(40914),l=s(23553),i=s(81857),c=s(13538),d=s(17710),o=s(57371),h=s(93247),m=s(92700);let u=async({searchParams:e})=>{let{sessionClaims:t}=await (0,m.I)(),s=t?.metadata?.role,u=[{header:"Info",accessor:"info"},{header:"Teacher ID",accessor:"teacherId",className:"hidden md:table-cell"},{header:"Subjects",accessor:"subjects",className:"hidden md:table-cell"},{header:"Classes",accessor:"classes",className:"hidden md:table-cell"},{header:"Phone",accessor:"phone",className:"hidden lg:table-cell"},{header:"Address",accessor:"address",className:"hidden lg:table-cell"},..."admin"===s?[{header:"Actions",accessor:"action"}]:[]],{page:x,...p}=e,g=x?parseInt(x):1,b={};if(p){for(let[e,t]of Object.entries(p))if(void 0!==t)switch(e){case"classId":b.lessons={some:{classId:parseInt(t)}};break;case"search":b.name={contains:t,mode:"insensitive"}}}let[f,j]=await c.Z.$transaction([c.Z.teacher.findMany({where:b,include:{subjects:!0,classes:!0},take:h.B,skip:h.B*(g-1)}),c.Z.teacher.count({where:b})]);return(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md flex-1 m-4 mt-0",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx("h1",{className:"hidden md:block text-lg font-semibold",children:"All Teachers"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4 w-full md:w-auto",children:[a.jsx(i.ZP,{}),(0,a.jsxs)("div",{className:"flex items-center gap-4 self-end",children:[a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(d.default,{src:"/filter.png",alt:"",width:14,height:14})}),a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(d.default,{src:"/sort.png",alt:"",width:14,height:14})}),"admin"===s&&a.jsx(r.Z,{table:"teacher",type:"create"})]})]})]}),a.jsx(l.Z,{columns:u,renderRow:e=>(0,a.jsxs)("tr",{className:"border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight",children:[(0,a.jsxs)("td",{className:"flex items-center gap-4 p-4",children:[a.jsx(d.default,{src:e.img||"/noAvatar.png",alt:"",width:40,height:40,className:"md:hidden xl:block w-10 h-10 rounded-full object-cover"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("h3",{className:"font-semibold",children:e.name}),a.jsx("p",{className:"text-xs text-gray-500",children:e?.email})]})]}),a.jsx("td",{className:"hidden md:table-cell",children:e.username}),a.jsx("td",{className:"hidden md:table-cell",children:e.subjects.map(e=>e.name).join(",")}),a.jsx("td",{className:"hidden md:table-cell",children:e.classes.map(e=>e.name).join(",")}),a.jsx("td",{className:"hidden md:table-cell",children:e.phone}),a.jsx("td",{className:"hidden md:table-cell",children:e.address}),a.jsx("td",{children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[a.jsx(o.default,{href:`/list/teachers/${e.id}`,children:a.jsx("button",{className:"w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky",children:a.jsx(d.default,{src:"/view.png",alt:"",width:16,height:16})})}),"admin"===s&&a.jsx(r.Z,{table:"teacher",type:"delete",id:e.id})]})})]},e.id),data:f}),a.jsx(n.ZP,{page:g,count:j})]})}},40165:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(19510),r=s(13538),n=s(26609),l=s(92700);let i=async({table:e,type:t,data:s,id:i})=>{let c={},{userId:d,sessionClaims:o}=await (0,l.I)(),h=o?.metadata?.role;if("delete"!==t)switch(e){case"subject":c={teachers:await r.Z.teacher.findMany({select:{id:!0,name:!0,surname:!0}})};break;case"class":let m=await r.Z.grade.findMany({select:{id:!0,level:!0}});c={teachers:await r.Z.teacher.findMany({select:{id:!0,name:!0,surname:!0}}),grades:m};break;case"teacher":c={subjects:await r.Z.subject.findMany({select:{id:!0,name:!0}})};break;case"student":let u=await r.Z.grade.findMany({select:{id:!0,level:!0}});c={classes:await r.Z.class.findMany({include:{_count:{select:{students:!0}}}}),grades:u};break;case"exam":c={lessons:await r.Z.lesson.findMany({where:{..."teacher"===h?{teacherId:d}:{}},select:{id:!0,name:!0}})}}return a.jsx("div",{className:"",children:a.jsx(n.ZP,{table:e,type:t,data:s,id:i,relatedData:c})})}},40914:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var a=s(68570);let r=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/Pagination.tsx`),{__esModule:n,$$typeof:l}=r;r.default;let i=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/Pagination.tsx#default`)},23553:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(19510);let r=({columns:e,renderRow:t,data:s})=>(0,a.jsxs)("table",{className:"w-full mt-4",children:[a.jsx("thead",{children:a.jsx("tr",{className:"text-left text-gray-500 text-sm",children:e.map(e=>a.jsx("th",{className:e.className,children:e.header},e.accessor))})}),a.jsx("tbody",{children:s.map(e=>t(e))})]})},81857:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var a=s(68570);let r=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/TableSearch.tsx`),{__esModule:n,$$typeof:l}=r;r.default;let i=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/TableSearch.tsx#default`)},93247:(e,t,s)=>{"use strict";s.d(t,{B:()=>a});let a=10}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,608,79,626,178,611,606],()=>s(59692));module.exports=a})();