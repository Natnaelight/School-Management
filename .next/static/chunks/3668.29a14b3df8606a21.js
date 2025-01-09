"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3668],{38113:function(e,s,r){var a=r(57437);s.Z=e=>{let{label:s,type:r="text",register:i,name:t,defaultValue:n,error:l,hidden:d,inputProps:m}=e;return(0,a.jsxs)("div",{className:d?"hidden":"flex flex-col gap-2 w-full md:w-1/4",children:[(0,a.jsx)("label",{className:"text-xs text-gray-500",children:s}),(0,a.jsx)("input",{type:r,...i(t),className:"ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full",...m,defaultValue:n}),(null==l?void 0:l.message)&&(0,a.jsx)("p",{className:"text-xs text-red-400",children:l.message.toString()})]})}},23668:function(e,s,r){r.r(s);var a=r(57437),i=r(31014),t=r(39343),n=r(38113),l=r(80118),d=r(31721),m=r(54887),o=r(2265),c=r(24648),u=r(16463);s.default=e=>{var s,r;let{type:g,data:x,setOpen:p,relatedData:z}=e,{register:h,handleSubmit:b,formState:{errors:f}}=(0,t.cI)({resolver:(0,i.F)(l.UQ)}),[v,j]=(0,m.useFormState)("create"===g?d.qH:d.a7,{success:!1,error:!1}),y=b(e=>{console.log(e),j(e)}),q=(0,u.useRouter)();(0,o.useEffect)(()=>{v.success&&((0,c.Am)("Subject has been ".concat("create"===g?"created":"updated","!")),p(!1),q.refresh())},[v,q,g,p]);let{teachers:w,grades:I}=z;return(0,a.jsxs)("form",{className:"flex flex-col gap-8",onSubmit:y,children:[(0,a.jsx)("h1",{className:"text-xl font-semibold",children:"create"===g?"Create a new class":"Update the class"}),(0,a.jsxs)("div",{className:"flex justify-between flex-wrap gap-4",children:[(0,a.jsx)(n.Z,{label:"Class name",name:"name",defaultValue:null==x?void 0:x.name,register:h,error:null==f?void 0:f.name}),(0,a.jsx)(n.Z,{label:"Capacity",name:"capacity",defaultValue:null==x?void 0:x.capacity,register:h,error:null==f?void 0:f.capacity}),x&&(0,a.jsx)(n.Z,{label:"Id",name:"id",defaultValue:null==x?void 0:x.id,register:h,error:null==f?void 0:f.id,hidden:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 w-full md:w-1/4",children:[(0,a.jsx)("label",{className:"text-xs text-gray-500",children:"Supervisor"}),(0,a.jsx)("select",{className:"ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full",...h("supervisorId"),defaultValue:null==x?void 0:x.teachers,children:w.map(e=>(0,a.jsx)("option",{value:e.id,selected:x&&e.id===x.supervisorId,children:e.name+" "+e.surname},e.id))}),(null===(s=f.supervisorId)||void 0===s?void 0:s.message)&&(0,a.jsx)("p",{className:"text-xs text-red-400",children:f.supervisorId.message.toString()})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 w-full md:w-1/4",children:[(0,a.jsx)("label",{className:"text-xs text-gray-500",children:"Grade"}),(0,a.jsx)("select",{className:"ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full",...h("gradeId"),defaultValue:null==x?void 0:x.gradeId,children:I.map(e=>(0,a.jsx)("option",{value:e.id,selected:x&&e.id===x.gradeId,children:e.level},e.id))}),(null===(r=f.gradeId)||void 0===r?void 0:r.message)&&(0,a.jsx)("p",{className:"text-xs text-red-400",children:f.gradeId.message.toString()})]})]}),v.error&&(0,a.jsx)("span",{className:"text-red-500",children:"Something went wrong!"}),(0,a.jsx)("button",{className:"bg-blue-400 text-white p-2 rounded-md",children:"create"===g?"Create":"Update"})]})}},80118:function(e,s,r){r.d(s,{Q1:function(){return l},Qu:function(){return d},UQ:function(){return t},iQ:function(){return n},qJ:function(){return i}});var a=r(59772);let i=a.z.object({id:a.z.coerce.number().optional(),name:a.z.string().min(1,{message:"Subject name is required!"}),teachers:a.z.array(a.z.string())}),t=a.z.object({id:a.z.coerce.number().optional(),name:a.z.string().min(1,{message:"Subject name is required!"}),capacity:a.z.coerce.number().min(1,{message:"Capacity name is required!"}),gradeId:a.z.coerce.number().min(1,{message:"Grade name is required!"}),supervisorId:a.z.coerce.string().optional()}),n=a.z.object({id:a.z.string().optional(),username:a.z.string().min(3,{message:"Username must be at least 3 characters long!"}).max(20,{message:"Username must be at most 20 characters long!"}),password:a.z.string().min(8,{message:"Password must be at least 8 characters long!"}).optional().or(a.z.literal("")),name:a.z.string().min(1,{message:"First name is required!"}),surname:a.z.string().min(1,{message:"Last name is required!"}),email:a.z.string().email({message:"Invalid email address!"}).optional().or(a.z.literal("")),phone:a.z.string().optional(),address:a.z.string(),img:a.z.string().optional(),bloodType:a.z.string().min(1,{message:"Blood Type is required!"}),birthday:a.z.coerce.date({message:"Birthday is required!"}),sex:a.z.enum(["MALE","FEMALE"],{message:"Sex is required!"}),subjects:a.z.array(a.z.string()).optional()}),l=a.z.object({id:a.z.string().optional(),username:a.z.string().min(3,{message:"Username must be at least 3 characters long!"}).max(20,{message:"Username must be at most 20 characters long!"}),password:a.z.string().min(8,{message:"Password must be at least 8 characters long!"}).optional().or(a.z.literal("")),name:a.z.string().min(1,{message:"First name is required!"}),surname:a.z.string().min(1,{message:"Last name is required!"}),email:a.z.string().email({message:"Invalid email address!"}).optional().or(a.z.literal("")),phone:a.z.string().optional(),address:a.z.string(),img:a.z.string().optional(),bloodType:a.z.string().min(1,{message:"Blood Type is required!"}),birthday:a.z.coerce.date({message:"Birthday is required!"}),sex:a.z.enum(["MALE","FEMALE"],{message:"Sex is required!"}),gradeId:a.z.coerce.number().min(1,{message:"Grade is required!"}),classId:a.z.coerce.number().min(1,{message:"Class is required!"}),parentId:a.z.string().min(1,{message:"Parent Id is required!"})}),d=a.z.object({id:a.z.coerce.number().optional(),title:a.z.string().min(1,{message:"Title name is required!"}),startTime:a.z.coerce.date({message:"Start time is required!"}),endTime:a.z.coerce.date({message:"End time is required!"}),lessonId:a.z.coerce.number({message:"Lesson is required!"})})}}]);