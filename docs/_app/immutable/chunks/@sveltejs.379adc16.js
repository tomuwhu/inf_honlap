import{w as Ae,o as He,t as ve,S as pt,i as ht,s as gt,e as Fe,a as Ge,b as mt,c as Je,d as Ke,f as ze,g as ee,h as _t,j as Se,k as Be,l as We,n as Ye,m as yt}from"./svelte.064f55f6.js";import{u as wt}from"./devalue.888878cb.js";function bt(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function vt(e){return e.split("%25").map(decodeURI).join("%25")}function St(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(e,a){const o=new URL(e);for(const i of Et)Object.defineProperty(o,i,{get(){return a(),e[i]},enumerable:!0,configurable:!0});return Rt(o),o}function Rt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const xt="/__data.json";function At(e){return e.replace(/\/$/,"")+xt}function Lt(...e){let a=5381;for(const o of e)if(typeof o=="string"){let i=o.length;for(;i;)a=a*33^o.charCodeAt(--i)}else if(ArrayBuffer.isView(o)){const i=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);let f=i.length;for(;f;)a=a*33^i[--f]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const he=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&re.delete(Le(e)),he(e,a));const re=new Map;function Ut(e,a){const o=Le(e,a),i=document.querySelector(o);if(i!=null&&i.textContent){const{body:f,...d}=JSON.parse(i.textContent),g=i.getAttribute("data-ttl");return g&&re.set(o,{body:f,init:d,ttl:1e3*Number(g)}),Promise.resolve(new Response(f,d))}return he(e,a)}function $t(e,a,o){if(re.size>0){const i=Le(e,o),f=re.get(i);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(o==null?void 0:o.cache))return new Response(f.body,f.init);re.delete(i)}}return he(a,o)}function Le(e,a){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const f=[];a.headers&&f.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&f.push(a.body),i+=`[data-hash="${Lt(...f)}"]`}return i}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Tt(e).map(i=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(f)return a.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return a.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const g=i.split(/\[(.+?)\](?!\])/);return"/"+g.map((w,m)=>{if(m%2){if(w.startsWith("x+"))return Ee(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return Ee(String.fromCharCode(...w.slice(2).split("-").map(U=>parseInt(U,16))));const p=Pt.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,N,C,P]=p;return a.push({name:C,matcher:P,optional:!!I,rest:!!N,chained:N?m===1&&g[0]==="":!1}),N?"(.*?)":I?"([^/]*)?":"([^/]+?)"}return Ee(w)}).join("")}).join("")}/?$`),params:a}}function It(e){return!/^\([^)]+\)$/.test(e)}function Tt(e){return e.slice(1).split("/").filter(It)}function Ct(e,a,o){const i={},f=e.slice(1);let d=0;for(let g=0;g<a.length;g+=1){const u=a[g];let w=f[g-d];if(u.chained&&u.rest&&d&&(w=f.slice(g-d,g+1).filter(m=>m).join("/"),d=0),w===void 0){u.rest&&(i[u.name]="");continue}if(!u.matcher||o[u.matcher](w)){i[u.name]=w;const m=a[g+1],p=f[g+1];m&&!m.rest&&m.optional&&p&&u.chained&&(d=0);continue}if(u.optional&&u.chained){d++;continue}return}if(!d)return i}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt({nodes:e,server_loads:a,dictionary:o,matchers:i}){const f=new Set(a);return Object.entries(o).map(([u,[w,m,p]])=>{const{pattern:I,params:N}=Ot(u),C={id:u,exec:P=>{const U=I.exec(P);if(U)return Ct(U,N,i)},errors:[1,...p||[]].map(P=>e[P]),layouts:[0,...m||[]].map(g),leaf:d(w)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function d(u){const w=u<0;return w&&(u=~u),[w,e[u]]}function g(u){return u===void 0?u:[f.has(u),e[u]]}}function st(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Xe(e,a){const o=JSON.stringify(a);try{sessionStorage[e]=o}catch{}}var rt;const F=((rt=globalThis.__sveltekit_1ooa4j6)==null?void 0:rt.base)??"/svelteui";var ot;const Nt=((ot=globalThis.__sveltekit_1ooa4j6)==null?void 0:ot.assets)??F,Dt="1693647692367",it="sveltekit:snapshot",lt="sveltekit:scroll",V="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function Qe(e){let a=e.baseURI;if(!a){const o=e.getElementsByTagName("base");a=o.length?o[0].href:e.URL}return a}function ne(){return{x:pageXOffset,y:pageYOffset}}function W(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Ze={...pe,"":pe.hover};function ct(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function et(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=ct(e)}}function ke(e,a){let o;try{o=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i=e instanceof SVGAElement?e.target.baseVal:e.target,f=!o||!!i||de(o,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),d=(o==null?void 0:o.origin)===location.origin&&e.hasAttribute("download");return{url:o,external:f,target:i,download:d}}function ue(e){let a=null,o=null,i=null,f=null,d=null,g=null,u=e;for(;u&&u!==document.documentElement;)i===null&&(i=W(u,"preload-code")),f===null&&(f=W(u,"preload-data")),a===null&&(a=W(u,"keepfocus")),o===null&&(o=W(u,"noscroll")),d===null&&(d=W(u,"reload")),g===null&&(g=W(u,"replacestate")),u=ct(u);function w(m){switch(m){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Ze[i??"off"],preload_data:Ze[f??"off"],keep_focus:w(a),noscroll:w(o),reload:w(d),replace_state:w(g)}}function tt(e){const a=Ae(e);let o=!0;function i(){o=!0,a.update(g=>g)}function f(g){o=!1,a.set(g)}function d(g){let u;return a.subscribe(w=>{(u===void 0||o&&w!==u)&&g(u=w)})}return{notify:i,set:f,subscribe:d}}function Vt(){const{set:e,subscribe:a}=Ae(!1);let o;async function i(){clearTimeout(o);try{const f=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!f.ok)return!1;const g=(await f.json()).version!==Dt;return g&&(e(!0),clearTimeout(o)),g}catch{return!1}}return{subscribe:a,check:i}}function de(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}function qt(e){return e.filter(a=>a!=null)}const ft=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ft];const Mt=new Set([...ft]);[...Mt];async function Ht(e){var a;for(const o in e)if(typeof((a=e[o])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([i,f])=>[i,await f])));return e}class ae{constructor(a,o){this.status=a,typeof o=="string"?this.body={message:o}:o?this.body=o:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}}class nt{constructor(a,o){this.status=a,this.location=o}}const Ft="x-sveltekit-invalidated",Gt="x-sveltekit-trailing-slash";function Jt(e){e.client}const M={url:tt({}),page:tt({}),navigating:Ae(null),updated:Vt()},z=st(lt)??{},te=st(it)??{};function Re(e){z[e]=ne()}function Kt(e,a){var Ve;const o=jt(e),i=e.nodes[0],f=e.nodes[1];i(),f();const d=document.documentElement,g=[],u=[];let w=null;const m={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},I=!1,N=!1,C=!0,P=!1,U=!1,G=!1,J=!1,q,T=(Ve=history.state)==null?void 0:Ve[V];T||(T=Date.now(),history.replaceState({...history.state,[V]:T},"",location.href));const ge=z[T];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let H,oe,Y;async function Ue(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const t=new URL(location.href),l=Q(t,!0);w=null;const n=oe={},s=l&&await ye(l);if(n===oe&&s){if(s.type==="redirect")return se(new URL(s.location,t).href,{},[t.pathname],n);s.props.page!==void 0&&(H=s.props.page),q.$set(s.props)}}function $e(t){u.some(l=>l==null?void 0:l.snapshot)&&(te[t]=u.map(l=>{var n;return(n=l==null?void 0:l.snapshot)==null?void 0:n.capture()}))}function Pe(t){var l;(l=te[t])==null||l.forEach((n,s)=>{var r,c;(c=(r=u[s])==null?void 0:r.snapshot)==null||c.restore(n)})}function Oe(){Re(T),Xe(lt,z),$e(T),Xe(it,te)}async function se(t,{noScroll:l=!1,replaceState:n=!1,keepFocus:s=!1,state:r={},invalidateAll:c=!1},h,S){return typeof t=="string"&&(t=new URL(t,Qe(document))),fe({url:t,scroll:l?ne():null,keepfocus:s,redirect_chain:h,details:{state:r,replaceState:n},nav_token:S,accepted:()=>{c&&(J=!0)},blocked:()=>{},type:"goto"})}async function Ie(t){return w={id:t.id,promise:ye(t).then(l=>(l.type==="loaded"&&l.state.error&&(w=null),l))},w.promise}async function ie(...t){const n=o.filter(s=>t.some(r=>s.exec(r))).map(s=>Promise.all([...s.layouts,s.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(n)}function Te(t){var s;p=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),H=t.props.page,q=new e.root({target:a,props:{...t.props,stores:M,components:u},hydrate:!0}),Pe(T);const n={from:null,to:{params:p.params,route:{id:((s=p.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(r=>r(n)),N=!0}async function X({url:t,params:l,branch:n,status:s,error:r,route:c,form:h}){let S="never";for(const _ of n)(_==null?void 0:_.slash)!==void 0&&(S=_.slash);t.pathname=bt(t.pathname,S),t.search=t.search;const v={type:"loaded",state:{url:t,params:l,branch:n,error:r,route:c},props:{constructors:qt(n).map(_=>_.node.component)}};h!==void 0&&(v.props.form=h);let b={},k=!H,R=0;for(let _=0;_<Math.max(n.length,p.branch.length);_+=1){const y=n[_],$=p.branch[_];(y==null?void 0:y.data)!==($==null?void 0:$.data)&&(k=!0),y&&(b={...b,...y.data},k&&(v.props[`data_${R}`]=b),R+=1)}return(!p.url||t.href!==p.url.href||p.error!==r||h!==void 0&&h!==H.form||k)&&(v.props.page={error:r,params:l,route:{id:(c==null?void 0:c.id)??null},status:s,url:new URL(t),form:h??null,data:k?b:H.data}),v}async function me({loader:t,parent:l,url:n,params:s,route:r,server_data_node:c}){var b,k,R;let h=null;const S={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await t();if((b=v.universal)!=null&&b.load){let x=function(...y){for(const $ of y){const{href:O}=new URL($,n);S.dependencies.add(O)}};const _={route:{get id(){return S.route=!0,r.id}},params:new Proxy(s,{get:(y,$)=>(S.params.add($),y[$])}),data:(c==null?void 0:c.data)??null,url:kt(n,()=>{S.url=!0}),async fetch(y,$){let O;y instanceof Request?(O=y.url,$={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...$}):O=y;const D=new URL(O,n);return x(D.href),D.origin===n.origin&&(O=D.href.slice(n.origin.length)),N?$t(O,D.href,$):Ut(O,$)},setHeaders:()=>{},depends:x,parent(){return S.parent=!0,l()}};h=await v.universal.load.call(null,_)??null,h=h?await Ht(h):null}return{node:v,loader:t,server:c,universal:(k=v.universal)!=null&&k.load?{type:"data",data:h,uses:S}:null,data:h??(c==null?void 0:c.data)??null,slash:((R=v.universal)==null?void 0:R.trailingSlash)??(c==null?void 0:c.slash)}}function Ce(t,l,n,s,r){if(J)return!0;if(!s)return!1;if(s.parent&&t||s.route&&l||s.url&&n)return!0;for(const c of s.params)if(r[c]!==p.params[c])return!0;for(const c of s.dependencies)if(g.some(h=>h(new URL(c))))return!0;return!1}function _e(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function ye({id:t,invalidating:l,url:n,params:s,route:r}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:c,layouts:h,leaf:S}=r,v=[...h,S];c.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let b=null;const k=p.url?t!==p.url.pathname+p.url.search:!1,R=p.route?r.id!==p.route.id:!1;let x=!1;const _=v.map((E,L)=>{var K;const A=p.branch[L],j=!!(E!=null&&E[0])&&((A==null?void 0:A.loader)!==E[1]||Ce(x,R,k,(K=A.server)==null?void 0:K.uses,s));return j&&(x=!0),j});if(_.some(Boolean)){try{b=await at(n,_)}catch(E){return le({status:E instanceof ae?E.status:500,error:await Z(E,{url:n,params:s,route:{id:r.id}}),url:n,route:r})}if(b.type==="redirect")return b}const y=b==null?void 0:b.nodes;let $=!1;const O=v.map(async(E,L)=>{var we;if(!E)return;const A=p.branch[L],j=y==null?void 0:y[L];if((!j||j.type==="skip")&&E[1]===(A==null?void 0:A.loader)&&!Ce($,R,k,(we=A.universal)==null?void 0:we.uses,s))return A;if($=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:E[1],url:n,params:s,route:r,parent:async()=>{var Me;const qe={};for(let be=0;be<L;be+=1)Object.assign(qe,(Me=await O[be])==null?void 0:Me.data);return qe},server_data_node:_e(j===void 0&&E[0]?{type:"skip"}:j??null,E[0]?A==null?void 0:A.server:void 0)})});for(const E of O)E.catch(()=>{});const D=[];for(let E=0;E<v.length;E+=1)if(v[E])try{D.push(await O[E])}catch(L){if(L instanceof nt)return{type:"redirect",location:L.location};let A=500,j;if(y!=null&&y.includes(L))A=L.status??A,j=L.error;else if(L instanceof ae)A=L.status,j=L.body;else{if(await M.updated.check())return await B(n);j=await Z(L,{params:s,url:n,route:{id:r.id}})}const K=await je(E,D,c);return K?await X({url:n,params:s,branch:D.slice(0,K.idx).concat(K.node),status:A,error:j,route:r}):await De(n,{id:r.id},j,A)}else D.push(void 0);return await X({url:n,params:s,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function je(t,l,n){for(;t--;)if(n[t]){let s=t;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:t,error:l,url:n,route:s}){const r={};let c=null;if(e.server_loads[0]===0)try{const b=await at(n,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;c=b.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||I)&&await B(n)}const S=await me({loader:i,url:n,params:r,route:s,parent:()=>Promise.resolve({}),server_data_node:_e(c)}),v={node:await f(),loader:f,universal:null,server:null,data:null};return await X({url:n,params:r,branch:[S,v],status:t,error:l,route:null})}function Q(t,l){if(de(t,F))return;const n=ce(t);for(const s of o){const r=s.exec(n);if(r)return{id:t.pathname+t.search,invalidating:l,route:s,params:St(r),url:t}}}function ce(t){return vt(t.pathname.slice(F.length)||"/")}function Ne({url:t,type:l,intent:n,delta:s}){var S,v;let r=!1;const c={from:{params:p.params,route:{id:((S=p.route)==null?void 0:S.id)??null},url:p.url},to:{params:(n==null?void 0:n.params)??null,route:{id:((v=n==null?void 0:n.route)==null?void 0:v.id)??null},url:t},willUnload:!n,type:l};s!==void 0&&(c.delta=s);const h={...c,cancel:()=>{r=!0}};return U||m.before_navigate.forEach(b=>b(h)),r?null:c}async function fe({url:t,scroll:l,keepfocus:n,redirect_chain:s,details:r,type:c,delta:h,nav_token:S={},accepted:v,blocked:b}){var O,D,E;const k=Q(t,!1),R=Ne({url:t,type:c,delta:h,intent:k});if(!R){b();return}const x=T;v(),U=!0,N&&M.navigating.set(R),oe=S;let _=k&&await ye(k);if(!_){if(de(t,F))return await B(t);_=await De(t,{id:null},await Z(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(k==null?void 0:k.url)||t,oe!==S)return!1;if(_.type==="redirect")if(s.length>10||s.includes(t.pathname))_=await le({status:500,error:await Z(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return se(new URL(_.location,t).href,{},[...s,t.pathname],S),!1;else((O=_.props.page)==null?void 0:O.status)>=400&&await M.updated.check()&&await B(t);if(g.length=0,J=!1,P=!0,Re(x),$e(x),(D=_.props.page)!=null&&D.url&&_.props.page.url.pathname!==t.pathname&&(t.pathname=(E=_.props.page)==null?void 0:E.url.pathname),r){const L=r.replaceState?0:1;if(r.state[V]=T+=L,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let A=T+1;for(;te[A]||z[A];)delete te[A],delete z[A],A+=1}}w=null,N?(p=_.state,_.props.page&&(_.props.page.url=t),q.$set(_.props)):Te(_);const{activeElement:y}=document;if(await ve(),C){const L=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):L?L.scrollIntoView():scrollTo(0,0)}const $=document.activeElement!==y&&document.activeElement!==document.body;!n&&!$&&xe(),C=!0,_.props.page&&(H=_.props.page),U=!1,c==="popstate"&&Pe(T),m.after_navigate.forEach(L=>L(R)),M.navigating.set(null),P=!1}async function De(t,l,n,s){return t.origin===location.origin&&t.pathname===location.pathname&&!I?await le({status:s,error:n,url:t,route:l}):await B(t)}function B(t){return location.href=t.href,new Promise(()=>{})}function dt(){let t;d.addEventListener("mousemove",c=>{const h=c.target;clearTimeout(t),t=setTimeout(()=>{s(h,2)},20)});function l(c){s(c.composedPath()[0],1)}d.addEventListener("mousedown",l),d.addEventListener("touchstart",l,{passive:!0});const n=new IntersectionObserver(c=>{for(const h of c)h.isIntersecting&&(ie(ce(new URL(h.target.href))),n.unobserve(h.target))},{threshold:0});function s(c,h){const S=et(c,d);if(!S)return;const{url:v,external:b,download:k}=ke(S,F);if(b||k)return;const R=ue(S);if(!R.reload)if(h<=R.preload_data){const x=Q(v,!1);x&&Ie(x)}else h<=R.preload_code&&ie(ce(v))}function r(){n.disconnect();for(const c of d.querySelectorAll("a")){const{url:h,external:S,download:v}=ke(c,F);if(S||v)continue;const b=ue(c);b.reload||(b.preload_code===pe.viewport&&n.observe(c),b.preload_code===pe.eager&&ie(ce(h)))}}m.after_navigate.push(r),r()}function Z(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{He(()=>(m.after_navigate.push(t),()=>{const l=m.after_navigate.indexOf(t);m.after_navigate.splice(l,1)}))},before_navigate:t=>{He(()=>(m.before_navigate.push(t),()=>{const l=m.before_navigate.indexOf(t);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(P||!N)&&(C=!1)},goto:(t,l={})=>se(t,l,[]),invalidate:t=>{if(typeof t=="function")g.push(t);else{const{href:l}=new URL(t,location.href);g.push(n=>n.href===l)}return Ue()},invalidate_all:()=>(J=!0,Ue()),preload_data:async t=>{const l=new URL(t,Qe(document)),n=Q(l,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Ie(n)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:n,route:s}=p;if(!s)return;const r=await je(p.branch.length,n,s.errors);if(r){const c=await X({url:l,params:p.params,branch:n.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:s});p=c.state,q.$set(c.props),ve().then(xe)}}else t.type==="redirect"?se(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...H,form:t.data,status:t.status}}),await ve(),q.$set({form:t.data}),t.type==="success"&&xe())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var r;let s=!1;if(Oe(),!U){const c={from:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>s=!0};m.before_navigate.forEach(h=>h(c))}s?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(l=navigator.connection)!=null&&l.saveData||dt(),d.addEventListener("click",n=>{var x;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const s=et(n.composedPath()[0],d);if(!s)return;const{url:r,external:c,target:h,download:S}=ke(s,F);if(!r)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const v=ue(s);if(!(s instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||S)return;if(c||v.reload){Ne({url:r,type:"link"})?U=!0:n.preventDefault();return}const[k,R]=r.href.split("#");if(R!==void 0&&k===location.href.split("#")[0]){if(p.url.hash===r.hash){n.preventDefault(),(x=s.ownerDocument.getElementById(R))==null||x.scrollIntoView();return}if(G=!0,Re(T),t(r),!v.replace_state)return;G=!1,n.preventDefault()}fe({url:r,scroll:v.noscroll?ne():null,keepfocus:v.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:v.replace_state??r.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),d.addEventListener("submit",n=>{if(n.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formMethod)||s.method)!=="get")return;const h=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||s.action);if(de(h,F))return;const S=n.target,{keep_focus:v,noscroll:b,reload:k,replace_state:R}=ue(S);if(k)return;n.preventDefault(),n.stopPropagation();const x=new FormData(S),_=r==null?void 0:r.getAttribute("name");_&&x.append(_,(r==null?void 0:r.getAttribute("value"))??""),h.search=new URLSearchParams(x).toString(),fe({url:h,scroll:b?ne():null,keepfocus:v??!1,redirect_chain:[],details:{state:{},replaceState:R??h.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var s;if((s=n.state)!=null&&s[V]){if(n.state[V]===T)return;const r=z[n.state[V]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[T]=ne(),T=n.state[V],scrollTo(r.x,r.y);return}const c=n.state[V]-T;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=n.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!G){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++T},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)});function t(n){p.url=n,M.page.set({...H,url:n}),M.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:n,params:s,route:r,data:c,form:h})=>{I=!0;const S=new URL(location.href);({params:s={},route:r={id:null}}=Q(S,!1)||{});let v;try{const b=n.map(async(x,_)=>{const y=c[_];return y!=null&&y.uses&&(y.uses=ut(y.uses)),me({loader:e.nodes[x],url:S,params:s,route:r,parent:async()=>{const $={};for(let O=0;O<_;O+=1)Object.assign($,(await b[O]).data);return $},server_data_node:_e(y)})}),k=await Promise.all(b),R=o.find(({id:x})=>x===r.id);if(R){const x=R.layouts;for(let _=0;_<x.length;_++)x[_]||k.splice(_,0,void 0)}v=await X({url:S,params:s,branch:k,status:t,error:l,form:h,route:R??null})}catch(b){if(b instanceof nt){await B(new URL(b.location,location.href));return}v=await le({status:b instanceof ae?b.status:500,error:await Z(b,{url:S,params:s,route:r}),url:S,route:r})}Te(v)}}}async function at(e,a){const o=new URL(e);o.pathname=At(e.pathname),e.pathname.endsWith("/")&&o.searchParams.append(Gt,"1"),o.searchParams.append(Ft,a.map(f=>f?"1":"0").join(""));const i=await he(o.href);if(!i.ok)throw new ae(i.status,await i.json());return new Promise(async f=>{var p;const d=new Map,g=i.body.getReader(),u=new TextDecoder;function w(I){return wt(I,{Promise:N=>new Promise((C,P)=>{d.set(N,{fulfil:C,reject:P})})})}let m="";for(;;){const{done:I,value:N}=await g.read();if(I&&!m)break;for(m+=!N&&m?`
`:u.decode(N);;){const C=m.indexOf(`
`);if(C===-1)break;const P=JSON.parse(m.slice(0,C));if(m=m.slice(C+1),P.type==="redirect")return f(P);if(P.type==="data")(p=P.nodes)==null||p.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=ut(U.uses),U.data=w(U.data))}),f(P);else if(P.type==="chunk"){const{id:U,data:G,error:J}=P,q=d.get(U);d.delete(U),J?q.reject(w(J)):q.fulfil(w(G))}}}})}function ut(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function xe(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,o=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),o!==null?a.setAttribute("tabindex",o):a.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const f=[];for(let d=0;d<i.rangeCount;d+=1)f.push(i.getRangeAt(d));setTimeout(()=>{if(i.rangeCount===f.length){for(let d=0;d<i.rangeCount;d+=1){const g=f[d],u=i.getRangeAt(d);if(g.commonAncestorContainer!==u.commonAncestorContainer||g.startContainer!==u.startContainer||g.endContainer!==u.endContainer||g.startOffset!==u.startOffset||g.endOffset!==u.endOffset)return}i.removeAllRanges()}})}}}async function Zt(e,a,o){const i=Kt(e,a);Jt({client:i}),o?await i._hydrate(o):i.goto(location.href,{replaceState:!0}),i._start_router()}const zt=()=>{const e=M;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Bt={subscribe(e){return zt().page.subscribe(e)}};function Wt(e){var w;let a,o=e[0].status+"",i,f,d,g=((w=e[0].error)==null?void 0:w.message)+"",u;return{c(){a=Fe("h1"),i=Ge(o),f=mt(),d=Fe("p"),u=Ge(g)},l(m){a=Je(m,"H1",{});var p=Ke(a);i=ze(p,o),p.forEach(ee),f=_t(m),d=Je(m,"P",{});var I=Ke(d);u=ze(I,g),I.forEach(ee)},m(m,p){Se(m,a,p),Be(a,i),Se(m,f,p),Se(m,d,p),Be(d,u)},p(m,[p]){var I;p&1&&o!==(o=m[0].status+"")&&We(i,o),p&1&&g!==(g=((I=m[0].error)==null?void 0:I.message)+"")&&We(u,g)},i:Ye,o:Ye,d(m){m&&(ee(a),ee(f),ee(d))}}}function Yt(e,a,o){let i;return yt(e,Bt,f=>o(0,i=f)),[i]}let en=class extends pt{constructor(a){super(),ht(this,a,Yt,Wt,gt,{})}};export{en as E,F as b,Zt as s};
