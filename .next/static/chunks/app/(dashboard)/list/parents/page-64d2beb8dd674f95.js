(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9832,9151,9676,3964,2832,1056,2008,5659,8409],{91812:function(e,t,a){Promise.resolve().then(a.t.bind(a,38173,23)),Promise.resolve().then(a.bind(a,74257)),Promise.resolve().then(a.bind(a,86625)),Promise.resolve().then(a.bind(a,90266))},66648:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var n=a(55601),r=a.n(n)},55601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=a(99920),r=a(80497),c=a(38173),d=n._(a(21241));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:d.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let s=c.Image},74257:function(e,t,a){"use strict";var n=a(57437),r=a(31721),c=a(57818),d=a(66648),l=a(16463),s=a(2265),o=a(54887),i=a(24648);let u={subject:r.Pl,class:r.ZB,teacher:r.Q2,student:r.MA,exam:r.ZH,parent:r.Pl,lesson:r.Pl,assignment:r.Pl,result:r.Pl,attendance:r.Pl,event:r.Pl,announcement:r.Pl},f=(0,c.default)(()=>Promise.all([a.e(1374),a.e(4703),a.e(7538),a.e(4762)]).then(a.bind(a,74762)),{loadableGenerated:{webpack:()=>[74762]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),b=(0,c.default)(()=>Promise.all([a.e(1374),a.e(4703),a.e(7538),a.e(2047)]).then(a.bind(a,82047)),{loadableGenerated:{webpack:()=>[82047]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),h=(0,c.default)(()=>Promise.all([a.e(1374),a.e(8937)]).then(a.bind(a,98937)),{loadableGenerated:{webpack:()=>[98937]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),m=(0,c.default)(()=>Promise.all([a.e(1374),a.e(3668)]).then(a.bind(a,23668)),{loadableGenerated:{webpack:()=>[23668]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),p=(0,c.default)(()=>Promise.all([a.e(1374),a.e(4588)]).then(a.bind(a,54588)),{loadableGenerated:{webpack:()=>[54588]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),x={subject:(e,t,a,r)=>(0,n.jsx)(h,{type:t,data:a,setOpen:e,relatedData:r}),class:(e,t,a,r)=>(0,n.jsx)(m,{type:t,data:a,setOpen:e,relatedData:r}),teacher:(e,t,a,r)=>(0,n.jsx)(f,{type:t,data:a,setOpen:e,relatedData:r}),student:(e,t,a,r)=>(0,n.jsx)(b,{type:t,data:a,setOpen:e,relatedData:r}),exam:(e,t,a,r)=>(0,n.jsx)(p,{type:t,data:a,setOpen:e,relatedData:r})};t.default=e=>{let{table:t,type:a,data:r,id:c,relatedData:f}=e,b="create"===a?"w-8 h-8":"w-7 h-7",[h,m]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"".concat(b," flex items-center justify-center rounded-full ").concat("create"===a?"bg-lamaYellow":"update"===a?"bg-lamaSky":"bg-lamaPurple"),onClick:()=>m(!0),children:(0,n.jsx)(d.default,{src:"/".concat(a,".png"),alt:"",width:16,height:16})}),h&&(0,n.jsx)("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",children:[(0,n.jsx)(()=>{let[e,d]=(0,o.useFormState)(u[t],{success:!1,error:!1}),b=(0,l.useRouter)();return(0,s.useEffect)(()=>{e.success&&((0,i.Am)("".concat(t," has been deleted!")),m(!1),b.refresh())},[e,b]),"delete"===a&&c?(0,n.jsxs)("form",{action:d,className:"p-4 flex flex-col gap-4",children:[(0,n.jsx)("input",{type:"text | number",name:"id",value:c,hidden:!0}),(0,n.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",t,"?"]}),(0,n.jsx)("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===a||"update"===a?x[t](m,a,r,f):"Form not found!"},{}),(0,n.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>m(!1),children:(0,n.jsx)(d.default,{src:"/close.png",alt:"",width:14,height:14})})]})})]})}},86625:function(e,t,a){"use strict";a.d(t,{default:function(){return c}});var n=a(57437),r=a(16463),c=e=>{let{page:t,count:a}=e,c=(0,r.useRouter)(),d=e=>{let t=new URLSearchParams(window.location.search);t.set("page",e.toString()),c.push("".concat(window.location.pathname,"?").concat(t))};return(0,n.jsxs)("div",{className:"p-4 flex items-center justify-between text-gray-500",children:[(0,n.jsx)("button",{disabled:!(10*(t-1)>0),className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>{d(t-1)},children:"Prev"}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-sm",children:Array.from({length:Math.ceil(a/10)},(e,a)=>{let r=a+1;return(0,n.jsx)("button",{className:"px-2 rounded-sm ".concat(t===r?"bg-lamaSky":""),onClick:()=>{d(r)},children:r},r)})}),(0,n.jsx)("button",{className:"py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",disabled:!(10*(t-1)+10<a),onClick:()=>{d(t+1)},children:"Next"})]})}},90266:function(e,t,a){"use strict";var n=a(57437),r=a(66648),c=a(16463);t.default=()=>{let e=(0,c.useRouter)();return(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault();let a=t.currentTarget[0].value,n=new URLSearchParams(window.location.search);n.set("search",a),e.push("".concat(window.location.pathname,"?").concat(n))},className:"w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",children:[(0,n.jsx)(r.default,{src:"/search.png",alt:"",width:14,height:14}),(0,n.jsx)("input",{type:"text",placeholder:"Search...",className:"w-[200px] p-2 bg-transparent outline-none"})]})}},31721:function(e,t,a){"use strict";a.d(t,{Gc:function(){return m},I5:function(){return c},Jn:function(){return f},LK:function(){return h},MA:function(){return p},Pl:function(){return l},Q2:function(){return b},Y7:function(){return u},ZB:function(){return i},ZH:function(){return r},a7:function(){return o},jZ:function(){return d},qH:function(){return s},un:function(){return x},w0:function(){return g}}),a(74590);var n=a(58064),r=(0,n.$)("53b21435d27efd6cdcb3ec1c91e7a0a62583c036"),c=(0,n.$)("aafff9a4dd5387b87add6bd438f3d6282a56926f"),d=(0,n.$)("418c4f59bdcb1547d5f8f86d6fa46b5cf2ecd257"),l=(0,n.$)("9b386529bc9e345f316128a214ddfaf92e006f9f"),s=(0,n.$)("1b819934dc35360898faf596db6c1447169c64f6"),o=(0,n.$)("7ec4760fccd1fe6b189e3f65781028a1261ec990"),i=(0,n.$)("8e31f194b311b5cd726492d6c0e79ab5accb4db3"),u=(0,n.$)("70a54bdd05fcb4262a326656c1b828430e66323f"),f=(0,n.$)("27ad9a34022b55e2ff183d4fdde091f55b96e541"),b=(0,n.$)("cd825acccb98a91a8405a89fe3b5d69f9a1ef6c3"),h=(0,n.$)("32438258b45ef375618c8e61fdc975e60f2602af"),m=(0,n.$)("5af06c16cc119bacf0fedcbaba8d76d9233dc63d"),p=(0,n.$)("37e01f547e3f38a7e81fa8291b15b8412267a558"),x=(0,n.$)("c1ef5107e0c3fa8ab48f615a62ce3532b33a5498"),g=(0,n.$)("93ffb51c4a474240e4457dcbdd7302db825c9f41")}},function(e){e.O(0,[986,4796,2971,7023,1744],function(){return e(e.s=91812)}),_N_E=e.O()}]);