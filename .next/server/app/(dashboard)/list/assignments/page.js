(()=>{var e={};e.id=676,e.ids=[676],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},92761:e=>{"use strict";e.exports=require("node:async_hooks")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},39077:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(6336),s(45548),s(19967),s(35866),s(32029);var a=s(23191),r=s(88716),n=s(37922),l=s.n(n),i=s(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let c=["",{children:["(dashboard)",{children:["list",{children:["assignments",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6336)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/assignments/page.tsx"]}]},{}]},{loading:[()=>Promise.resolve().then(s.bind(s,45548)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,19967)),"/Users/Light/Desktop/School Managment/src/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"/Users/Light/Desktop/School Managment/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/Light/Desktop/School Managment/src/app/(dashboard)/list/assignments/page.tsx"],m="/(dashboard)/list/assignments/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard)/list/assignments/page",pathname:"/list/assignments",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},56657:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.bind(s,89310)),Promise.resolve().then(s.bind(s,91704)),Promise.resolve().then(s.bind(s,74351))},91704:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var a=s(10326),r=s(35047);let n=({page:e,count:t})=>{let s=(0,r.useRouter)(),n=e=>{let t=new URLSearchParams(window.location.search);t.set("page",e.toString()),s.push(`${window.location.pathname}?${t}`)};return(0,a.jsxs)("div",{className:"p-4 flex items-center justify-between text-gray-500",children:[a.jsx("button",{disabled:!(10*(e-1)>0),className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>{n(e-1)},children:"Prev"}),a.jsx("div",{className:"flex items-center gap-2 text-sm",children:Array.from({length:Math.ceil(t/10)},(t,s)=>{let r=s+1;return a.jsx("button",{className:`px-2 rounded-sm ${e===r?"bg-lamaSky":""}`,onClick:()=>{n(r)},children:r},r)})}),a.jsx("button",{className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",disabled:!(10*(e-1)+10<t),onClick:()=>{n(e+1)},children:"Next"})]})}},74351:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(10326),r=s(46226),n=s(35047);let l=()=>{let e=(0,n.useRouter)();return(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault();let s=t.currentTarget[0].value,a=new URLSearchParams(window.location.search);a.set("search",s),e.push(`${window.location.pathname}?${a}`)},className:"w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",children:[a.jsx(r.default,{src:"/search.png",alt:"",width:14,height:14}),a.jsx("input",{type:"text",placeholder:"Search...",className:"w-[200px] p-2 bg-transparent outline-none"})]})}},6336:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(19510),r=s(26609),n=s(40914),l=s(23553),i=s(81857),o=s(13538),c=s(93247),d=s(17710),m=s(92700);let h=async({searchParams:e})=>{let{userId:t,sessionClaims:s}=await (0,m.I)(),h=s?.metadata?.role,u=[{header:"Subject Name",accessor:"name"},{header:"Class",accessor:"class"},{header:"Teacher",accessor:"teacher",className:"hidden md:table-cell"},{header:"Due Date",accessor:"dueDate",className:"hidden md:table-cell"},..."admin"===h||"teacher"===h?[{header:"Actions",accessor:"action"}]:[]],{page:p,...x}=e,g=p?parseInt(p):1,b={};if(b.lesson={},x){for(let[e,t]of Object.entries(x))if(void 0!==t)switch(e){case"classId":b.lesson.classId=parseInt(t);break;case"teacherId":b.lesson.teacherId=t;break;case"search":b.lesson.subject={name:{contains:t,mode:"insensitive"}}}}switch(h){case"admin":break;case"teacher":b.lesson.teacherId=t;break;case"student":b.lesson.class={students:{some:{id:t}}};break;case"parent":b.lesson.class={students:{some:{parentId:t}}}}let[f,j]=await o.Z.$transaction([o.Z.assignment.findMany({where:b,include:{lesson:{select:{subject:{select:{name:!0}},teacher:{select:{name:!0,surname:!0}},class:{select:{name:!0}}}}},take:c.B,skip:c.B*(g-1)}),o.Z.assignment.count({where:b})]);return(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md flex-1 m-4 mt-0",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx("h1",{className:"hidden md:block text-lg font-semibold",children:"All Assignments"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4 w-full md:w-auto",children:[a.jsx(i.ZP,{}),(0,a.jsxs)("div",{className:"flex items-center gap-4 self-end",children:[a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(d.default,{src:"/filter.png",alt:"",width:14,height:14})}),a.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",children:a.jsx(d.default,{src:"/sort.png",alt:"",width:14,height:14})}),"admin"===h||"teacher"===h&&a.jsx(r.ZP,{table:"assignment",type:"create"})]})]})]}),a.jsx(l.Z,{columns:u,renderRow:e=>(0,a.jsxs)("tr",{className:"border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight",children:[a.jsx("td",{className:"flex items-center gap-4 p-4",children:e.lesson.subject.name}),a.jsx("td",{children:e.lesson.class.name}),a.jsx("td",{className:"hidden md:table-cell",children:e.lesson.teacher.name+" "+e.lesson.teacher.surname}),a.jsx("td",{className:"hidden md:table-cell",children:new Intl.DateTimeFormat("en-US").format(e.dueDate)}),a.jsx("td",{children:a.jsx("div",{className:"flex items-center gap-2",children:("admin"===h||"teacher"===h)&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.ZP,{table:"assignment",type:"update",data:e}),a.jsx(r.ZP,{table:"assignment",type:"delete",id:e.id})]})})})]},e.id),data:f}),a.jsx(n.ZP,{page:g,count:j})]})}},40914:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var a=s(68570);let r=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/Pagination.tsx`),{__esModule:n,$$typeof:l}=r;r.default;let i=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/Pagination.tsx#default`)},23553:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(19510);let r=({columns:e,renderRow:t,data:s})=>(0,a.jsxs)("table",{className:"w-full mt-4",children:[a.jsx("thead",{children:a.jsx("tr",{className:"text-left text-gray-500 text-sm",children:e.map(e=>a.jsx("th",{className:e.className,children:e.header},e.accessor))})}),a.jsx("tbody",{children:s.map(e=>t(e))})]})},81857:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var a=s(68570);let r=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/TableSearch.tsx`),{__esModule:n,$$typeof:l}=r;r.default;let i=(0,a.createProxy)(String.raw`/Users/Light/Desktop/School Managment/src/components/TableSearch.tsx#default`)},93247:(e,t,s)=>{"use strict";s.d(t,{B:()=>a});let a=10}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,608,79,626,178,611,606],()=>s(39077));module.exports=a})();