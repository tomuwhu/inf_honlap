import{w as Le,o as be,t as Ee,S as gt,i as mt,s as _t,e as He,a as Ge,b as wt,c as Je,d as Ke,f as ze,g as te,h as yt,j as ke,k as Be,l as We,n as Ye,m as vt}from"./svelte.8ff3042a.js";import{u as bt}from"./devalue.888878cb.js";function Et(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function kt(e){return e.split("%25").map(decodeURI).join("%25")}function St(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const xt=["href","pathname","search","searchParams","toString","toJSON"];function Rt(e,n){const o=new URL(e);for(const i of xt)Object.defineProperty(o,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return At(o),o}function At(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Lt="/__data.json";function Pt(e){return e.replace(/\/$/,"")+Lt}function Ut(...e){let n=5381;for(const o of e)if(typeof o=="string"){let i=o.length;for(;i;)n=n*33^o.charCodeAt(--i)}else if(ArrayBuffer.isView(o)){const i=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);let f=i.length;for(;f;)n=n*33^i[--f]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const st=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&oe.delete(Pe(e)),st(e,n));const oe=new Map;function $t(e){const n=atob(e),o=new Uint8Array(n.length);for(let i=0;i<n.length;i++)o[i]=n.charCodeAt(i);return o.buffer}function Ot(e,n){const o=Pe(e,n),i=document.querySelector(o);if(i!=null&&i.textContent){let{body:f,...p}=JSON.parse(i.textContent);const h=i.getAttribute("data-ttl");return h&&oe.set(o,{body:f,init:p,ttl:1e3*Number(h)}),i.getAttribute("data-b64")!==null&&(f=$t(f)),Promise.resolve(new Response(f,p))}return window.fetch(e,n)}function It(e,n,o){if(oe.size>0){const i=Pe(e,o),f=oe.get(i);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(o==null?void 0:o.cache))return new Response(f.body,f.init);oe.delete(i)}}return window.fetch(n,o)}function Pe(e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const f=[];n.headers&&f.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&f.push(n.body),i+=`[data-hash="${Ut(...f)}"]`}return i}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Nt(e).map(i=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(f)return n.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return n.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const h=i.split(/\[(.+?)\](?!\])/);return"/"+h.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(O=>parseInt(O,16))));const d=Tt.exec(_);if(!d)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,N,j,D]=d;return n.push({name:j,matcher:D,optional:!!U,rest:!!N,chained:N?m===1&&h[0]==="":!1}),N?"(.*?)":U?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:n}}function Ct(e){return!/^\([^)]+\)$/.test(e)}function Nt(e){return e.slice(1).split("/").filter(Ct)}function Dt(e,n,o){const i={},f=e.slice(1),p=f.filter(u=>u!==void 0);let h=0;for(let u=0;u<n.length;u+=1){const _=n[u];let m=f[u-h];if(_.chained&&_.rest&&h&&(m=f.slice(u-h,u+1).filter(d=>d).join("/"),h=0),m===void 0){_.rest&&(i[_.name]="");continue}if(!_.matcher||o[_.matcher](m)){i[_.name]=m;const d=n[u+1],U=f[u+1];d&&!d.rest&&d.optional&&U&&_.chained&&(h=0),!d&&!U&&Object.keys(i).length===p.length&&(h=0);continue}if(_.optional&&_.chained){h++;continue}return}if(!h)return i}function Se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt({nodes:e,server_loads:n,dictionary:o,matchers:i}){const f=new Set(n);return Object.entries(o).map(([u,[_,m,d]])=>{const{pattern:U,params:N}=jt(u),j={id:u,exec:D=>{const O=U.exec(D);if(O)return Dt(O,N,i)},errors:[1,...d||[]].map(D=>e[D]),layouts:[0,...m||[]].map(h),leaf:p(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function p(u){const _=u<0;return _&&(u=~u),[_,e[u]]}function h(u){return u===void 0?u:[f.has(u),e[u]]}}function ct(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Xe(e,n){const o=JSON.stringify(n);try{sessionStorage[e]=o}catch{}}var ot;const M=((ot=globalThis.__sveltekit_1rhs2f0)==null?void 0:ot.base)??"/svelteui";var it;const qt=((it=globalThis.__sveltekit_1rhs2f0)==null?void 0:it.assets)??M,Mt="1719432308933",lt="sveltekit:snapshot",ft="sveltekit:scroll",q="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},he=location.origin;function Qe(e){let n=e.baseURI;if(!n){const o=e.getElementsByTagName("base");n=o.length?o[0].href:e.URL}return n}function ae(){return{x:pageXOffset,y:pageYOffset}}function Y(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ze={...pe,"":pe.hover};function ut(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function et(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=ut(e)}}function xe(e,n){let o;try{o=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i=e instanceof SVGAElement?e.target.baseVal:e.target,f=!o||!!i||de(o,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),p=(o==null?void 0:o.origin)===he&&e.hasAttribute("download");return{url:o,external:f,target:i,download:p}}function ue(e){let n=null,o=null,i=null,f=null,p=null,h=null,u=e;for(;u&&u!==document.documentElement;)i===null&&(i=Y(u,"preload-code")),f===null&&(f=Y(u,"preload-data")),n===null&&(n=Y(u,"keepfocus")),o===null&&(o=Y(u,"noscroll")),p===null&&(p=Y(u,"reload")),h===null&&(h=Y(u,"replacestate")),u=ut(u);function _(m){switch(m){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Ze[i??"off"],preload_data:Ze[f??"off"],keep_focus:_(n),noscroll:_(o),reload:_(p),replace_state:_(h)}}function tt(e){const n=Le(e);let o=!0;function i(){o=!0,n.update(h=>h)}function f(h){o=!1,n.set(h)}function p(h){let u;return n.subscribe(_=>{(u===void 0||o&&_!==u)&&h(u=_)})}return{notify:i,set:f,subscribe:p}}function Ft(){const{set:e,subscribe:n}=Le(!1);let o;async function i(){clearTimeout(o);try{const f=await fetch(`${qt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!f.ok)return!1;const h=(await f.json()).version!==Mt;return h&&(e(!0),clearTimeout(o)),h}catch{return!1}}return{subscribe:n,check:i}}function de(e,n){return e.origin!==he||!e.pathname.startsWith(n)}function Ht(e){return e.filter(n=>n!=null)}const dt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...dt];const Gt=new Set([...dt]);[...Gt];async function Jt(e,n){var o;for(const i in e)if(typeof((o=e[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([f,p])=>[f,await p])));return e}class re{constructor(n,o){this.status=n,typeof o=="string"?this.body={message:o}:o?this.body=o:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class nt{constructor(n,o){this.status=n,this.location=o}}class Kt extends Error{constructor(n){super(),this.status=404,this.message=`Not found: ${n}`}}const zt="x-sveltekit-invalidated",Bt="x-sveltekit-trailing-slash";function Wt(e){e.client}const H={url:tt({}),page:tt({}),navigating:Le(null),updated:Ft()},K=ct(ft)??{},ne=ct(lt)??{};function Re(e){K[e]=ae()}function z(e){return location.href=e.href,new Promise(()=>{})}function Yt(e,n){var qe;const o=Vt(e),i=e.nodes[0],f=e.nodes[1];i(),f();const p=document.documentElement,h=[],u=[];let _=null;const m={before_navigate:[],on_navigate:[],after_navigate:[]};let d={branch:[],error:null,url:null},U=!1,N=!1,j=!0,D=!1,O=!1,C=!1,B=!1,F,$=(qe=history.state)==null?void 0:qe[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const ge=K[$];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let G,W,X;async function Ue(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),c=Z(t,!0);_=null;const a=W={},s=c&&await we(c);if(a===W&&s){if(s.type==="redirect")return ie(new URL(s.location,t).href,{},1,a);s.props.page!==void 0&&(G=s.props.page),F.$set(s.props)}}function $e(t){u.some(c=>c==null?void 0:c.snapshot)&&(ne[t]=u.map(c=>{var a;return(a=c==null?void 0:c.snapshot)==null?void 0:a.capture()}))}function Oe(t){var c;(c=ne[t])==null||c.forEach((a,s)=>{var r,l;(l=(r=u[s])==null?void 0:r.snapshot)==null||l.restore(a)})}function Ie(){Re($),Xe(ft,K),$e($),Xe(lt,ne)}async function ie(t,{noScroll:c=!1,replaceState:a=!1,keepFocus:s=!1,state:r={},invalidateAll:l=!1},g,v){return typeof t=="string"&&(t=new URL(t,Qe(document))),fe({url:t,scroll:c?ae():null,keepfocus:s,redirect_count:g,details:{state:r,replaceState:a},nav_token:v,accepted:()=>{l&&(B=!0)},blocked:()=>{},type:"goto"})}async function Te(t){return _={id:t.id,promise:we(t).then(c=>(c.type==="loaded"&&c.state.error&&(_=null),c))},_.promise}async function se(...t){const a=o.filter(s=>t.some(r=>s.exec(r))).map(s=>Promise.all([...s.layouts,s.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(a)}function je(t){var s;d=t.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),G=t.props.page,F=new e.root({target:n,props:{...t.props,stores:H,components:u},hydrate:!0}),Oe($);const a={from:null,to:{params:d.params,route:{id:((s=d.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};m.after_navigate.forEach(r=>r(a)),N=!0}async function Q({url:t,params:c,branch:a,status:s,error:r,route:l,form:g}){let v="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(v=y.slash);t.pathname=Et(t.pathname,v),t.search=t.search;const E={type:"loaded",state:{url:t,params:c,branch:a,error:r,route:l},props:{constructors:Ht(a).map(y=>y.node.component)}};g!==void 0&&(E.props.form=g);let b={},A=!G,x=0;for(let y=0;y<Math.max(a.length,d.branch.length);y+=1){const w=a[y],P=d.branch[y];(w==null?void 0:w.data)!==(P==null?void 0:P.data)&&(A=!0),w&&(b={...b,...w.data},A&&(E.props[`data_${x}`]=b),x+=1)}return(!d.url||t.href!==d.url.href||d.error!==r||g!==void 0&&g!==G.form||A)&&(E.props.page={error:r,params:c,route:{id:(l==null?void 0:l.id)??null},status:s,url:new URL(t),form:g??null,data:A?b:G.data}),E}async function me({loader:t,parent:c,url:a,params:s,route:r,server_data_node:l}){var b,A,x;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((b=E.universal)!=null&&b.load){let L=function(...w){for(const P of w){const{href:I}=new URL(P,a);v.dependencies.add(I)}};const y={route:new Proxy(r,{get:(w,P)=>(v.route=!0,w[P])}),params:new Proxy(s,{get:(w,P)=>(v.params.add(P),w[P])}),data:(l==null?void 0:l.data)??null,url:Rt(a,()=>{v.url=!0}),async fetch(w,P){let I;w instanceof Request?(I=w.url,P={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...P}):I=w;const V=new URL(I,a);return L(V.href),V.origin===a.origin&&(I=V.href.slice(a.origin.length)),N?It(I,V.href,P):Ot(I,P)},setHeaders:()=>{},depends:L,parent(){return v.parent=!0,c()}};g=await E.universal.load.call(null,y)??null,g=g?await Jt(g,r.id):null}return{node:E,loader:t,server:l,universal:(A=E.universal)!=null&&A.load?{type:"data",data:g,uses:v}:null,data:g??(l==null?void 0:l.data)??null,slash:a.pathname===M||a.pathname===M+"/"?"always":((x=E.universal)==null?void 0:x.trailingSlash)??(l==null?void 0:l.slash)}}function Ce(t,c,a,s,r){if(B)return!0;if(!s)return!1;if(s.parent&&t||s.route&&c||s.url&&a)return!0;for(const l of s.params)if(r[l]!==d.params[l])return!0;for(const l of s.dependencies)if(h.some(g=>g(new URL(l))))return!0;return!1}function _e(t,c){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?c??null:null}async function we({id:t,invalidating:c,url:a,params:s,route:r}){if((_==null?void 0:_.id)===t)return _.promise;const{errors:l,layouts:g,leaf:v}=r,E=[...g,v];l.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const A=d.url?t!==d.url.pathname+d.url.search:!1,x=d.route?r.id!==d.route.id:!1;let L=!1;const y=E.map((k,R)=>{var J;const S=d.branch[R],T=!!(k!=null&&k[0])&&((S==null?void 0:S.loader)!==k[1]||Ce(L,x,A,(J=S.server)==null?void 0:J.uses,s));return T&&(L=!0),T});if(y.some(Boolean)){try{b=await at(a,y)}catch(k){return ce({status:k instanceof re?k.status:500,error:await ee(k,{url:a,params:s,route:{id:r.id}}),url:a,route:r})}if(b.type==="redirect")return b}const w=b==null?void 0:b.nodes;let P=!1;const I=E.map(async(k,R)=>{var ye;if(!k)return;const S=d.branch[R],T=w==null?void 0:w[R];if((!T||T.type==="skip")&&k[1]===(S==null?void 0:S.loader)&&!Ce(P,x,A,(ye=S.universal)==null?void 0:ye.uses,s))return S;if(P=!0,(T==null?void 0:T.type)==="error")throw T;return me({loader:k[1],url:a,params:s,route:r,parent:async()=>{var Fe;const Me={};for(let ve=0;ve<R;ve+=1)Object.assign(Me,(Fe=await I[ve])==null?void 0:Fe.data);return Me},server_data_node:_e(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?S==null?void 0:S.server:void 0)})});for(const k of I)k.catch(()=>{});const V=[];for(let k=0;k<E.length;k+=1)if(E[k])try{V.push(await I[k])}catch(R){if(R instanceof nt)return{type:"redirect",location:R.location};let S=500,T;if(w!=null&&w.includes(R))S=R.status??S,T=R.error;else if(R instanceof re)S=R.status,T=R.body;else{if(await H.updated.check())return await z(a);T=await ee(R,{params:s,url:a,route:{id:r.id}})}const J=await Ne(k,V,l);return J?await Q({url:a,params:s,branch:V.slice(0,J.idx).concat(J.node),status:S,error:T,route:r}):await Ve(a,{id:r.id},T,S)}else V.push(void 0);return await Q({url:a,params:s,branch:V,status:200,error:null,route:r,form:c?void 0:null})}async function Ne(t,c,a){for(;t--;)if(a[t]){let s=t;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:c,url:a,route:s}){const r={};let l=null;if(e.server_loads[0]===0)try{const b=await at(a,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;l=b.nodes[0]??null}catch{(a.origin!==he||a.pathname!==location.pathname||U)&&await z(a)}const v=await me({loader:i,url:a,params:r,route:s,parent:()=>Promise.resolve({}),server_data_node:_e(l)}),E={node:await f(),loader:f,universal:null,server:null,data:null};return await Q({url:a,params:r,branch:[v,E],status:t,error:c,route:null})}function Z(t,c){if(de(t,M))return;const a=le(t);for(const s of o){const r=s.exec(a);if(r)return{id:t.pathname+t.search,invalidating:c,route:s,params:St(r),url:t}}}function le(t){return kt(t.pathname.slice(M.length)||"/")}function De({url:t,type:c,intent:a,delta:s}){let r=!1;const l=rt(d,a,t,c);s!==void 0&&(l.navigation.delta=s);const g={...l.navigation,cancel:()=>{r=!0,l.reject(new Error("navigation was cancelled"))}};return O||m.before_navigate.forEach(v=>v(g)),r?null:l}async function fe({url:t,scroll:c,keepfocus:a,redirect_count:s,details:r,type:l,delta:g,nav_token:v={},accepted:E,blocked:b}){var I,V,k;const A=Z(t,!1),x=De({url:t,type:l,delta:g,intent:A});if(!x){b();return}const L=$;E(),O=!0,N&&H.navigating.set(x.navigation),W=v;let y=A&&await we(A);if(!y){if(de(t,M))return await z(t);y=await Ve(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(A==null?void 0:A.url)||t,W!==v)return x.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(s>=20)y=await ce({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(y.location,t).href,{},s+1,v),!1;else((I=y.props.page)==null?void 0:I.status)>=400&&await H.updated.check()&&await z(t);if(h.length=0,B=!1,D=!0,Re(L),$e(L),(V=y.props.page)!=null&&V.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const R=r.replaceState?0:1;if(r.state[q]=$+=R,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let S=$+1;for(;ne[S]||K[S];)delete ne[S],delete K[S],S+=1}}if(_=null,N){d=y.state,y.props.page&&(y.props.page.url=t);const R=(await Promise.all(m.on_navigate.map(S=>S(x.navigation)))).filter(S=>typeof S=="function");if(R.length>0){let S=function(){m.after_navigate=m.after_navigate.filter(T=>!R.includes(T))};R.push(S),m.after_navigate.push(...R)}F.$set(y.props)}else je(y);const{activeElement:w}=document;if(await Ee(),j){const R=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));c?scrollTo(c.x,c.y):R?R.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==w&&document.activeElement!==document.body;!a&&!P&&Ae(),j=!0,y.props.page&&(G=y.props.page),O=!1,l==="popstate"&&Oe($),x.fulfil(void 0),m.after_navigate.forEach(R=>R(x.navigation)),H.navigating.set(null),D=!1}async function Ve(t,c,a,s){return t.origin===he&&t.pathname===location.pathname&&!U?await ce({status:s,error:a,url:t,route:c}):await z(t)}function ht(){let t;p.addEventListener("mousemove",l=>{const g=l.target;clearTimeout(t),t=setTimeout(()=>{s(g,2)},20)});function c(l){s(l.composedPath()[0],1)}p.addEventListener("mousedown",c),p.addEventListener("touchstart",c,{passive:!0});const a=new IntersectionObserver(l=>{for(const g of l)g.isIntersecting&&(se(le(new URL(g.target.href))),a.unobserve(g.target))},{threshold:0});function s(l,g){const v=et(l,p);if(!v)return;const{url:E,external:b,download:A}=xe(v,M);if(b||A)return;const x=ue(v);if(!x.reload)if(g<=x.preload_data){const L=Z(E,!1);L&&Te(L)}else g<=x.preload_code&&se(le(E))}function r(){a.disconnect();for(const l of p.querySelectorAll("a")){const{url:g,external:v,download:E}=xe(l,M);if(v||E)continue;const b=ue(l);b.reload||(b.preload_code===pe.viewport&&a.observe(l),b.preload_code===pe.eager&&se(le(g)))}}m.after_navigate.push(r),r()}function ee(t,c){return t instanceof re?t.body:e.hooks.handleError({error:t,event:c})??{message:c.route.id===null&&t instanceof Kt?"Not Found":"Internal Error"}}return{after_navigate:t=>{be(()=>(m.after_navigate.push(t),()=>{const c=m.after_navigate.indexOf(t);m.after_navigate.splice(c,1)}))},before_navigate:t=>{be(()=>(m.before_navigate.push(t),()=>{const c=m.before_navigate.indexOf(t);m.before_navigate.splice(c,1)}))},on_navigate:t=>{be(()=>(m.on_navigate.push(t),()=>{const c=m.on_navigate.indexOf(t);m.on_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(D||!N)&&(j=!1)},goto:(t,c={})=>ie(t,c,0),invalidate:t=>{if(typeof t=="function")h.push(t);else{const{href:c}=new URL(t,location.href);h.push(a=>a.href===c)}return Ue()},invalidate_all:()=>(B=!0,Ue()),preload_data:async t=>{const c=new URL(t,Qe(document)),a=Z(c,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${c}`);await Te(a)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const c=new URL(location.href),{branch:a,route:s}=d;if(!s)return;const r=await Ne(d.branch.length,a,s.errors);if(r){const l=await Q({url:c,params:d.params,branch:a.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:s});d=l.state,F.$set(l.props),Ee().then(Ae)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},0):(F.$set({form:null,page:{...G,form:t.data,status:t.status}}),await Ee(),F.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var c;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let s=!1;if(Ie(),!O){const r=rt(d,void 0,null,"leave"),l={...r.navigation,cancel:()=>{s=!0,r.reject(new Error("navigation was cancelled"))}};m.before_navigate.forEach(g=>g(l))}s?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(c=navigator.connection)!=null&&c.saveData||ht(),p.addEventListener("click",a=>{var L;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const s=et(a.composedPath()[0],p);if(!s)return;const{url:r,external:l,target:g,download:v}=xe(s,M);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const E=ue(s);if(!(s instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||v)return;if(l||E.reload){De({url:r,type:"link"})?O=!0:a.preventDefault();return}const[A,x]=r.href.split("#");if(x!==void 0&&A===location.href.split("#")[0]){if(d.url.hash===r.hash){a.preventDefault(),(L=s.ownerDocument.getElementById(x))==null||L.scrollIntoView();return}if(C=!0,Re($),t(r),!E.replace_state)return;C=!1,a.preventDefault()}fe({url:r,scroll:E.noscroll?ae():null,keepfocus:E.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:E.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),p.addEventListener("submit",a=>{if(a.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||s.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||s.action);if(de(g,M))return;const v=a.target,{keep_focus:E,noscroll:b,reload:A,replace_state:x}=ue(v);if(A)return;a.preventDefault(),a.stopPropagation();const L=new FormData(v),y=r==null?void 0:r.getAttribute("name");y&&L.append(y,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(L).toString(),fe({url:g,scroll:b?ae():null,keepfocus:E??!1,redirect_count:0,details:{state:{},replaceState:x??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var s,r;if(W={},(s=a.state)!=null&&s[q]){if(a.state[q]===$)return;const l=K[a.state[q]],g=new URL(location.href);if(((r=d.url)==null?void 0:r.href.split("#")[0])===location.href.split("#")[0]){t(g),K[$]=ae(),$=a.state[q],scrollTo(l.x,l.y);return}const v=a.state[q]-$;await fe({url:g,scroll:l,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{$=a.state[q]},blocked:()=>{history.go(-v)},type:"popstate",delta:v,nav_token:W})}else if(!C){const l=new URL(location.href);t(l)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&H.navigating.set(null)});function t(a){d.url=a,H.page.set({...G,url:a}),H.page.notify()}},_hydrate:async({status:t=200,error:c,node_ids:a,params:s,route:r,data:l,form:g})=>{U=!0;const v=new URL(location.href);({params:s={},route:r={id:null}}=Z(v,!1)||{});let E;try{const b=a.map(async(L,y)=>{const w=l[y];return w!=null&&w.uses&&(w.uses=pt(w.uses)),me({loader:e.nodes[L],url:v,params:s,route:r,parent:async()=>{const P={};for(let I=0;I<y;I+=1)Object.assign(P,(await b[I]).data);return P},server_data_node:_e(w)})}),A=await Promise.all(b),x=o.find(({id:L})=>L===r.id);if(x){const L=x.layouts;for(let y=0;y<L.length;y++)L[y]||A.splice(y,0,void 0)}E=await Q({url:v,params:s,branch:A,status:t,error:c,form:g,route:x??null})}catch(b){if(b instanceof nt){await z(new URL(b.location,location.href));return}E=await ce({status:b instanceof re?b.status:500,error:await ee(b,{url:v,params:s,route:r}),url:v,route:r})}je(E)}}}async function at(e,n){var f;const o=new URL(e);o.pathname=Pt(e.pathname),e.pathname.endsWith("/")&&o.searchParams.append(Bt,"1"),o.searchParams.append(zt,n.map(p=>p?"1":"0").join(""));const i=await st(o.href);if((f=i.headers.get("content-type"))!=null&&f.includes("text/html")&&await z(e),!i.ok)throw new re(i.status,await i.json());return new Promise(async p=>{var U;const h=new Map,u=i.body.getReader(),_=new TextDecoder;function m(N){return bt(N,{Promise:j=>new Promise((D,O)=>{h.set(j,{fulfil:D,reject:O})})})}let d="";for(;;){const{done:N,value:j}=await u.read();if(N&&!d)break;for(d+=!j&&d?`
`:_.decode(j);;){const D=d.indexOf(`
`);if(D===-1)break;const O=JSON.parse(d.slice(0,D));if(d=d.slice(D+1),O.type==="redirect")return p(O);if(O.type==="data")(U=O.nodes)==null||U.forEach(C=>{(C==null?void 0:C.type)==="data"&&(C.uses=pt(C.uses),C.data=m(C.data))}),p(O);else if(O.type==="chunk"){const{id:C,data:B,error:F}=O,$=h.get(C);h.delete(C),F?$.reject(m(F)):$.fulfil(m(B))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,o=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),o!==null?n.setAttribute("tabindex",o):n.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const f=[];for(let p=0;p<i.rangeCount;p+=1)f.push(i.getRangeAt(p));setTimeout(()=>{if(i.rangeCount===f.length){for(let p=0;p<i.rangeCount;p+=1){const h=f[p],u=i.getRangeAt(p);if(h.commonAncestorContainer!==u.commonAncestorContainer||h.startContainer!==u.startContainer||h.endContainer!==u.endContainer||h.startOffset!==u.startOffset||h.endOffset!==u.endOffset)return}i.removeAllRanges()}})}}}function rt(e,n,o,i){var _,m;let f,p;const h=new Promise((d,U)=>{f=d,p=U});return h.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((_=e.route)==null?void 0:_.id)??null},url:e.url},to:o&&{params:(n==null?void 0:n.params)??null,route:{id:((m=n==null?void 0:n.route)==null?void 0:m.id)??null},url:o},willUnload:!n,type:i,complete:h},fulfil:f,reject:p}}async function an(e,n,o){const i=Yt(e,n);Wt({client:i}),o?await i._hydrate(o):i.goto(location.href,{replaceState:!0}),i._start_router()}const Xt=()=>{const e=H;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Qt={subscribe(e){return Xt().page.subscribe(e)}};function Zt(e){var _;let n,o=e[0].status+"",i,f,p,h=((_=e[0].error)==null?void 0:_.message)+"",u;return{c(){n=He("h1"),i=Ge(o),f=wt(),p=He("p"),u=Ge(h)},l(m){n=Je(m,"H1",{});var d=Ke(n);i=ze(d,o),d.forEach(te),f=yt(m),p=Je(m,"P",{});var U=Ke(p);u=ze(U,h),U.forEach(te)},m(m,d){ke(m,n,d),Be(n,i),ke(m,f,d),ke(m,p,d),Be(p,u)},p(m,[d]){var U;d&1&&o!==(o=m[0].status+"")&&We(i,o),d&1&&h!==(h=((U=m[0].error)==null?void 0:U.message)+"")&&We(u,h)},i:Ye,o:Ye,d(m){m&&(te(n),te(f),te(p))}}}function en(e,n,o){let i;return vt(e,Qt,f=>o(0,i=f)),[i]}let rn=class extends gt{constructor(n){super(),mt(this,n,en,Zt,_t,{})}};export{rn as E,M as b,an as s};