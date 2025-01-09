"use strict";exports.id=951,exports.ids=[951],exports.modules={57320:(e,t,s)=>{s.d(t,{f:()=>_});var i,n,r,a,l,o,c,d,u,h,p,f,k,m,y,g,w,b,v,K=s(12122),x=s(46454);s(63544),s(91208);var C=s(8035),M=s(49395),T=s(47877),E=class{constructor(){(0,T.Ko)(this,r),(0,T.Ko)(this,i,"clerk_telemetry_throttler"),(0,T.Ko)(this,n,864e5)}isEventThrottled(e){var t;if(!(0,T.ac)(this,r,o))return!1;let s=Date.now(),c=(0,T.U9)(this,r,a).call(this,e),d=null==(t=(0,T.ac)(this,r,l))?void 0:t[c];if(!d){let e={...(0,T.ac)(this,r,l),[c]:s};localStorage.setItem((0,T.ac)(this,i),JSON.stringify(e))}if(d&&s-d>(0,T.ac)(this,n)){let e=(0,T.ac)(this,r,l);delete e[c],localStorage.setItem((0,T.ac)(this,i),JSON.stringify(e))}return!!d}};i=new WeakMap,n=new WeakMap,r=new WeakSet,a=function(e){let{sk:t,pk:s,payload:i,...n}=e,r={...i,...n};return JSON.stringify(Object.keys({...i,...n}).sort().map(e=>r[e]))},l=function(){let e=localStorage.getItem((0,T.ac)(this,i));return e?JSON.parse(e):{}},o=function(){if("undefined"==typeof window)return!1;let e=window.localStorage;if(!e)return!1;try{let t="test";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&("QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e.length>0&&e.removeItem((0,T.ac)(this,i)),!1}};var S={samplingRate:1,maxBufferSize:5,endpoint:"https://clerk-telemetry.com"},O=class{constructor(e){var t,s,i,n,r,a;(0,T.Ko)(this,f),(0,T.Ko)(this,c),(0,T.Ko)(this,d),(0,T.Ko)(this,u,{}),(0,T.Ko)(this,h,[]),(0,T.Ko)(this,p),(0,T.qx)(this,c,{maxBufferSize:null!=(t=e.maxBufferSize)?t:S.maxBufferSize,samplingRate:null!=(s=e.samplingRate)?s:S.samplingRate,disabled:null!=(i=e.disabled)&&i,debug:null!=(n=e.debug)&&n,endpoint:S.endpoint}),e.clerkVersion||"undefined"!=typeof window?(0,T.ac)(this,u).clerkVersion=null!=(r=e.clerkVersion)?r:"":(0,T.ac)(this,u).clerkVersion="",(0,T.ac)(this,u).sdk=e.sdk,(0,T.ac)(this,u).sdkVersion=e.sdkVersion,(0,T.ac)(this,u).publishableKey=null!=(a=e.publishableKey)?a:"";let l=(0,M.nQ)(e.publishableKey);l&&((0,T.ac)(this,u).instanceType=l.instanceType),e.secretKey&&((0,T.ac)(this,u).secretKey=e.secretKey.substring(0,16)),(0,T.qx)(this,d,new E)}get isEnabled(){var e;return!("development"!==(0,T.ac)(this,u).instanceType||(0,T.ac)(this,c).disabled||"undefined"!=typeof process&&(0,C.fQ)(process.env.CLERK_TELEMETRY_DISABLED))&&("undefined"==typeof window||null==(e=null==window?void 0:window.navigator)||!e.webdriver)}get isDebug(){return(0,T.ac)(this,c).debug||"undefined"!=typeof process&&(0,C.fQ)(process.env.CLERK_TELEMETRY_DEBUG)}record(e){let t=(0,T.U9)(this,f,v).call(this,e.event,e.payload);(0,T.U9)(this,f,w).call(this,t.event,t),(0,T.U9)(this,f,k).call(this,t,e.eventSamplingRate)&&((0,T.ac)(this,h).push(t),(0,T.U9)(this,f,y).call(this))}};c=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakSet,k=function(e,t){return this.isEnabled&&!this.isDebug&&(0,T.U9)(this,f,m).call(this,e,t)},m=function(e,t){let s=Math.random();return!(0,T.ac)(this,d).isEventThrottled(e)&&s<=(0,T.ac)(this,c).samplingRate&&(void 0===t||s<=t)},y=function(){if("undefined"==typeof window){(0,T.U9)(this,f,g).call(this);return}if((0,T.ac)(this,h).length>=(0,T.ac)(this,c).maxBufferSize){(0,T.ac)(this,p)&&("undefined"!=typeof cancelIdleCallback?cancelIdleCallback:clearTimeout)((0,T.ac)(this,p)),(0,T.U9)(this,f,g).call(this);return}(0,T.ac)(this,p)||("requestIdleCallback"in window?(0,T.qx)(this,p,requestIdleCallback(()=>{(0,T.U9)(this,f,g).call(this)})):(0,T.qx)(this,p,setTimeout(()=>{(0,T.U9)(this,f,g).call(this)},0)))},g=function(){fetch(new URL("/v1/event",(0,T.ac)(this,c).endpoint),{method:"POST",body:JSON.stringify({events:(0,T.ac)(this,h)}),headers:{"Content-Type":"application/json"}}).catch(()=>void 0).then(()=>{(0,T.qx)(this,h,[])}).catch(()=>void 0)},w=function(e,t){this.isDebug&&(void 0!==console.groupCollapsed?(console.groupCollapsed("[clerk/telemetry]",e),console.log(t),console.groupEnd()):console.log("[clerk/telemetry]",e,t))},b=function(){let e={name:(0,T.ac)(this,u).sdk,version:(0,T.ac)(this,u).sdkVersion};return"undefined"!=typeof window&&window.Clerk&&(e={...e,...window.Clerk.constructor.sdkMetadata}),e},v=function(e,t){var s,i;let n=(0,T.U9)(this,f,b).call(this);return{event:e,cv:null!=(s=(0,T.ac)(this,u).clerkVersion)?s:"",it:null!=(i=(0,T.ac)(this,u).instanceType)?i:"",sdk:n.name,sdkv:n.version,...(0,T.ac)(this,u).publishableKey?{pk:(0,T.ac)(this,u).publishableKey}:{},...(0,T.ac)(this,u).secretKey?{sk:(0,T.ac)(this,u).secretKey}:{},payload:t}},(0,x.A)(K.WX);var R=s(58516);let U={secretKey:R.Cn,publishableKey:R.Am,apiUrl:R.T5,apiVersion:R.Gn,userAgent:"@clerk/nextjs@6.9.6",proxyUrl:R.NM,domain:R.yK,isSatellite:R.lo,sdkMetadata:R.nE,telemetry:{disabled:R.CY,debug:R.w4}},_=e=>(function(e){let t={...e},s=(0,K.gf)(t),i=(0,K.sA)({options:t,apiClient:s}),n=new O({...e.telemetry,publishableKey:t.publishableKey,secretKey:t.secretKey,...t.sdkMetadata?{sdk:t.sdkMetadata.name,sdkVersion:t.sdkMetadata.version}:{}});return{...s,...i,telemetry:n}})({...U,...e})},53951:(e,t,s)=>{let i,n;s.r(t),s.d(t,{createOrReadKeyless:()=>y});var r=s(22407),a=Object.getOwnPropertyNames;let l=(i={"src/runtime/node/safe-node-apis.js"(e,t){let{existsSync:i,writeFileSync:n,readFileSync:r,appendFileSync:a,mkdirSync:l,rmSync:o}=s(87561),c=s(49411);t.exports={fs:{existsSync:i,writeFileSync:n,readFileSync:r,appendFileSync:a,mkdirSync:l,rmSync:o},path:c}}},function(){return n||(0,i[a(i)[0]])((n={exports:{}}).exports,n),n.exports})();var o=s(57320);let c=".clerk",d="clerk.lock",u=(...e)=>{if(!l.path)throw"Clerk: fsModule.path is missing. This is an internal error. Please contact Clerk's support.";return l.path.join(process.cwd(),c,...e)},h=".tmp",p=()=>u(h,"keyless.json"),f=()=>u(h,"README.md"),k=!1,m=e=>`
\x1b[35m
[Clerk]:\x1b[0m You are running on keyless mode.
You can \x1b[35mclaim your keys\x1b[0m by visiting ${e.claimUrl}
`;async function y(){if(!l.fs)throw"Clerk: fsModule.fs is missing. This is an internal error. Please contact Clerk's support.";let{existsSync:e,writeFileSync:t,mkdirSync:s,rmSync:i}=l.fs;if(k||e(d))return;k=!0,t(d,"This file can be deleted. Please delete this file and refresh your application",{encoding:"utf8",mode:"0777",flag:"w"});let n=p(),a=f();s(u(h),{recursive:!0}),function(){if(!l.fs)throw"Clerk: fsModule.fs is missing. This is an internal error. Please contact Clerk's support.";let{existsSync:e,writeFileSync:t,readFileSync:s,appendFileSync:i}=l.fs;if(!l.path)throw"Clerk: fsModule.path is missing. This is an internal error. Please contact Clerk's support.";let n=l.path.join(process.cwd(),".gitignore");e(n)||t(n,""),s(n,"utf-8").includes(c+"/")||i(n,`
${c}/
`)}();let y=function(){if(!l.fs)throw"Clerk: fsModule.fs is missing. This is an internal error. Please contact Clerk's support.";let{readFileSync:e}=l.fs;try{let t;let s=p();try{t=e(s,{encoding:"utf-8"})||"{}"}catch{t="{}"}return JSON.parse(t)}catch{return}}();if((null==y?void 0:y.publishableKey)&&(null==y?void 0:y.secretKey))return k=!1,i(d,{force:!0,recursive:!0}),r.k.logOnce(m(y)),y;let g=(0,o.f)({}),w=await g.__experimental_accountlessApplications.createAccountlessApplication();return r.k.logOnce(m(w)),t(n,JSON.stringify(w),{encoding:"utf8",mode:"0777",flag:"w"}),t(a,`
## DO NOT COMMIT
This directory is auto-generated from \`@clerk/nextjs\` because you are running on Keyless mode. Avoid committing the \`.clerk/\` directory as it includes the secret key of the unclaimed instance.
  `,{encoding:"utf8",mode:"0777",flag:"w"}),i(d,{force:!0,recursive:!0}),k=!1,w}}};