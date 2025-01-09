"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3995],{11205:function(e,n,t){t.d(n,{ClientClerkProvider:function(){return k}});var r=t(5267),i=t(94966),o=t(14654),u=t(57818),a=t(16463),l=t(90755),c=t(2265);let s="undefined"!=typeof window?c.useLayoutEffect:c.useEffect,_=c.createContext(void 0);_.displayName="ClerkNextOptionsCtx";let f=()=>{let e=c.useContext(_);return null==e?void 0:e.value},d=e=>{let{children:n,options:t}=e;return c.createElement(_.Provider,{value:{value:t}},n)};var E=t(52063),v=t(31877);function h(e){let{publishableKey:n,clerkJSUrl:t,clerkJSVersion:i,clerkJSVariant:o,nonce:u}=f(),{domain:a,proxyUrl:l}=(0,r.ll)();if(!n)return null;let s={domain:a,proxyUrl:l,publishableKey:n,clerkJSUrl:t,clerkJSVersion:i,clerkJSVariant:o,nonce:u},_=(0,E.wE)(s),d="app"===e.router?"script":v.default;return c.createElement(d,{src:_,"data-clerk-js-script":!0,async:!0,defer:"pages"!==e.router&&void 0,crossOrigin:"anonymous",strategy:"pages"===e.router?"beforeInteractive":void 0,...(0,E.iv)(s)})}var R=t(80015),C=t(58756),L=t(16130),p=t(20357);let U=e=>{var n;return{...e,publishableKey:e.publishableKey||"pk_test_ZnVsbC1hc3AtNzguY2xlcmsuYWNjb3VudHMuZGV2JA",clerkJSUrl:e.clerkJSUrl||p.env.NEXT_PUBLIC_CLERK_JS_URL,clerkJSVersion:e.clerkJSVersion||p.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||p.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||p.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||(0,C.fQ)(p.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),signInUrl:e.signInUrl||"/",signUpUrl:e.signUpUrl||p.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL||"",signInForceRedirectUrl:e.signInForceRedirectUrl||p.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL||"",signUpForceRedirectUrl:e.signUpForceRedirectUrl||p.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL||"",signInFallbackRedirectUrl:e.signInFallbackRedirectUrl||p.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL||"",signUpFallbackRedirectUrl:e.signUpFallbackRedirectUrl||p.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL||"",afterSignInUrl:e.afterSignInUrl||p.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL||"",afterSignUpUrl:e.afterSignUpUrl||p.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL||"",telemetry:null!=(n=e.telemetry)?n:{disabled:(0,C.fQ)(p.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),debug:(0,C.fQ)(p.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)},sdkMetadata:L.nE}};var g=t(49854);t(74590);var w=(0,t(58064).$)("b936022dddc9073e41d1c945ae313c2420b6d897");let I=e=>{var n;return null!=window.__clerk_internal_navigations||(window.__clerk_internal_navigations={}),null!=(n=window.__clerk_internal_navigations)[e]||(n[e]={}),window.__clerk_internal_navigations[e]},m=e=>{let{windowNav:n,routerNav:t,name:r}=e,i=(0,a.usePathname)(),[o,u]=(0,c.useTransition)();n&&(I(r).fun=(e,i)=>new Promise(o=>{var a,l;null!=(a=I(r)).promisesBuffer||(a.promisesBuffer=[]),null==(l=I(r).promisesBuffer)||l.push(o),u(()=>{var r,o,u;(null==(r=null==i?void 0:i.__internal_metadata)?void 0:r.navigationType)==="internal"?n((null!=(u=null==(o=window.next)?void 0:o.version)?u:"")<"14.1.0"?history.state:null,"",e):t(e)})}));let l=()=>{var e;null==(e=I(r).promisesBuffer)||e.forEach(e=>e()),I(r).promisesBuffer=[]};return(0,c.useEffect)(()=>(l(),l),[]),(0,c.useEffect)(()=>{o||l()},[i,o]),(0,c.useCallback)(e=>I(r).fun(e),[])},T=()=>{let e=(0,a.useRouter)();return m({windowNav:"undefined"!=typeof window?window.history.pushState.bind(window.history):void 0,routerNav:e.push.bind(e),name:"push"})},N=()=>{let e=(0,a.useRouter)();return m({windowNav:"undefined"!=typeof window?window.history.replaceState.bind(window.history):void 0,routerNav:e.replace.bind(e),name:"replace"})},P=(0,u.default)(()=>t.e(9635).then(t.bind(t,49635)).then(e=>e.KeylessCreatorOrReader),{loadableGenerated:{webpack:()=>[49635]}}),S=e=>{if(g.F){let e="Clerk:\nYour current Next.js version (".concat(l.i8,') will be deprecated in the next major release of "@clerk/nextjs". Please upgrade to next@14.1.0 or later.');(0,i._f)()?o.k.warnOnce(e):o.k.logOnce("\n\x1b[43m----------\n".concat(e,"\n----------\x1b[0m\n"))}let{__unstable_invokeMiddlewareOnAuthStateChange:n=!0,children:t}=e,u=(0,a.useRouter)(),_=T(),E=N(),[v,R]=(0,c.useTransition)();if(f())return e.children;(0,c.useEffect)(()=>{var e;v||null==(e=window.__clerk_internal_invalidateCachePromise)||e.call(window)},[v]),s(()=>{window.__unstable__onBeforeSetActive=()=>new Promise(e=>{var n;window.__clerk_internal_invalidateCachePromise=e,(null==(n=window.next)?void 0:n.version)&&"string"==typeof window.next.version&&window.next.version.startsWith("13")?R(()=>{u.refresh()}):w().then(()=>e())}),window.__unstable__onAfterSetActive=()=>{if(n)return u.refresh()}},[]);let C=U({...e,routerPush:_,routerReplace:E});return c.createElement(d,{options:C},c.createElement(r.El,{...C},c.createElement(h,{router:"app"}),t))},k=e=>{let{children:n,...t}=e;return U(t).publishableKey||!R.a?c.createElement(S,{...t},n):c.createElement(P,null,c.createElement(S,{...t},n))}},17945:function(e,n,t){t.r(n),t.d(n,{KeylessCookieSync:function(){return o}});var r=t(2265),i=t(80015);function o(e){return(0,r.useEffect)(()=>{i.a&&t.e(752).then(t.bind(t,50752)).then(n=>n.syncKeylessConfigAction({...e,returnUrl:window.location.href}))},[]),e.children}},19765:function(e,n,t){t.d(n,{PromisifiedAuthProvider:function(){return l},y:function(){return c}});var r=t(5267),i=t(52063),o=t(877),u=t(2265);let a=u.createContext(null);function l(e){let{authPromise:n,children:t}=e;return u.createElement(a.Provider,{value:n},t)}function c(){let e=(0,o.useRouter)(),n=u.useContext(a),t=n;return(n&&"then"in n&&(t=u.use(n)),"undefined"!=typeof window)?(0,r.aC)(t):e?(0,r.aC)():(0,i.aw)(t)}},5565:function(e,n,t){t.d(n,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO}});var r=t(5267);t(52063)},4190:function(e,n,t){t.d(n,{useAuth:function(){return i.y},useClerk:function(){return r.ll},useEmailLink:function(){return r.E2},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useReverification:function(){return r.WZ},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF}});var r=t(5267);t(68351);var i=t(19765)},47471:function(e,n,t){t.d(n,{CreateOrganization:function(){return r.Gp},GoogleOneTap:function(){return r.Kb},OrganizationList:function(){return r.Bg},OrganizationProfile:function(){return d},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return E},SignInButton:function(){return r.$d},SignInWithMetamaskButton:function(){return r.qu},SignOutButton:function(){return r.AM},SignUp:function(){return v},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return f},Waitlist:function(){return r.yk}});var r=t(5267),i=t(2265),o=t(52063),u=t(72662),a=t(877);let l=()=>({pagesRouter:(0,a.useRouter)()}),c=(e,n,t,o=!0)=>{let a=i.useRef(0),{pagesRouter:c}=l(),{session:s,isLoaded:_}=(0,r.kP)();(0,u.rx)()||i.useEffect(()=>{if(!_||t&&"path"!==t||o&&!s)return;let r=new AbortController,i=()=>{let t=c?`${n}/[[...index]].tsx`:`${n}/[[...rest]]/page.tsx`;throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${n}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${t}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${n}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${n}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`)};return c?c.pathname.match(/\[\[\.\.\..+]]/)||i():(async()=>{let n;if(a.current++,!(a.current>1)){try{let t=`${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;n=await fetch(t,{signal:r.signal})}catch(e){}(null==n?void 0:n.status)===404&&i()}})(),()=>{a.current>1&&r.abort()}},[_])},s=()=>{let e=i.useRef(),{pagesRouter:n}=l();if(n)return e.current||(e.current=n.pathname.replace(/\/\[\[\.\.\..*/,"")),e.current;let r=t(16463).usePathname,o=t(16463).useParams,u=(r()||"").split("/").filter(Boolean),a=Object.values(o()||{}).filter(e=>Array.isArray(e)).flat(1/0);return e.current||(e.current=`/${u.slice(0,u.length-a.length).join("/")}`),e.current};function _(e,n,t=!0){let r=s(),i=(0,o.EJ)(e,n,{path:r});return c(e,r,i.routing,t),i}let f=Object.assign(e=>i.createElement(r.Iw,{..._("UserProfile",e)}),{...r.Iw}),d=Object.assign(e=>i.createElement(r.A,{..._("OrganizationProfile",e)}),{...r.A}),E=e=>i.createElement(r.cL,{..._("SignIn",e,!1)}),v=e=>i.createElement(r.Mo,{..._("SignUp",e,!1)})},16130:function(e,n,t){t.d(n,{AZ:function(){return l},nE:function(){return a}});var r=t(5193),i=t(46470);t(37837);var o=t(58756),u=t(20357);u.env.NEXT_PUBLIC_CLERK_JS_VERSION,u.env.NEXT_PUBLIC_CLERK_JS_URL,u.env.CLERK_API_VERSION,u.env.CLERK_SECRET_KEY,u.env.CLERK_ENCRYPTION_KEY,u.env.CLERK_API_URL||(e=>{var n;let t=null==(n=(0,r.nQ)(e))?void 0:n.frontendApi;return(null==t?void 0:t.startsWith("clerk."))&&i.mv.some(e=>null==t?void 0:t.endsWith(e))?i.Xv:i.iF.some(e=>null==t?void 0:t.endsWith(e))?i.Fo:i.cM.some(e=>null==t?void 0:t.endsWith(e))?i.Iq:i.Xv})("pk_test_ZnVsbC1hc3AtNzguY2xlcmsuYWNjb3VudHMuZGV2JA"),u.env.NEXT_PUBLIC_CLERK_DOMAIN,u.env.NEXT_PUBLIC_CLERK_PROXY_URL,(0,o.fQ)(u.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),u.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;let a={name:"@clerk/nextjs",version:"6.9.6",environment:"production"};(0,o.fQ)(u.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),(0,o.fQ)(u.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);let l=(0,o.fQ)(u.env.NEXT_PUBLIC_CLERK_ENABLE_KEYLESS)},80015:function(e,n,t){t.d(n,{a:function(){return u}});var r=t(72662),i=t(16130),o=t(49854);!o.F&&(0,r.vf)()&&i.AZ;let u=!o.F&&i.AZ},49854:function(e,n,t){t.d(n,{F:function(){return i}});var r=t(90755);let i=r.i8.startsWith("13.")||r.i8.startsWith("14.0")},52063:function(e,n,t){t.d(n,{EJ:function(){return o},aw:function(){return r.aw},iv:function(){return i.iv},wE:function(){return i.wE}});var r=t(60979),i=t(18436);function o(e,n,t){let i=n.path||(null==t?void 0:t.path);return"path"===(n.routing||(null==t?void 0:t.routing)||"path")?i?{...t,...n,routing:"path"}:r.RM.throw((0,r.Gv)(e)):n.path?r.RM.throw((0,r.RE)(e)):{...t,...n,path:void 0}}}}]);