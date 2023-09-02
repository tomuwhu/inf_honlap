import{R as oe,$ as he,a0 as xe,a1 as ye,Y as ke}from"./scheduler.added118.js";import{w as Se}from"./index.dec80321.js";function xt(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const l=e[o],s=t[o];if(s){for(const a in l)a in s||(r[a]=1);for(const a in s)i[a]||(n[a]=s[a],i[a]=1);e[o]=s}else for(const a in l)i[a]=1}for(const l in r)l in n||(n[l]=void 0);return n}function yt(e){return typeof e=="object"&&e!==null?e:{}}function kt(e,t){const n=[];if(t)for(let r=0;r<t.length;r++){const i=t[r],o=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?n.push(o(e,i[1])):n.push(o(e))}return{update(r){if((r&&r.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(r)for(let i=0;i<r.length;i++){const o=n[i];if(o&&o.update){const l=r[i];Array.isArray(l)&&l.length>1?o.update(l[1]):o.update()}}},destroy(){for(let r=0;r<n.length;r++){const i=n[r];i&&i.destroy&&i.destroy()}}}}const ee="!",$e=new RegExp(`^[^${ee}]+(?:${ee}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function St(e,t=[]){let n;const r=[];e.$on=(o,l)=>{const s=o;let a=()=>{};for(const f of t){if(typeof f=="string"&&f===s){const p=e.$$.callbacks[s]||(e.$$.callbacks[s]=[]);return p.push(l),()=>{const m=p.indexOf(l);m!==-1&&p.splice(m,1)}}if(typeof f=="object"&&f.name===s){const p=l;l=(...m)=>{typeof f=="object"&&f.shouldExclude()||p(...m)}}}return n?a=n(s,l):r.push([s,l]),()=>{a()}};function i(o){he(e,o)}return o=>{const l=[],s={};n=(a,f)=>{let p=a,m=f,c=!1;if(p.match($e)){const S=p.split(ee);p=S[0];const u=Object.fromEntries(S.slice(1).map(x=>[x,!0]));u.passive&&(c=c||{},c.passive=!0),u.nonpassive&&(c=c||{},c.passive=!1),u.capture&&(c=c||{},c.capture=!0),u.once&&(c=c||{},c.once=!0),u.preventDefault&&(m=xe(m)),u.stopPropagation&&(m=ye(m))}const b=oe(o,p,m,c),k=()=>{b();const S=l.indexOf(k);S>-1&&l.splice(S,1)};return l.push(k),p in s||(s[p]=oe(o,p,i)),k};for(let a=0;a<r.length;a++)n(r[a][0],r[a][1]);return{destroy:()=>{for(let a=0;a<l.length;a++)l[a]();for(const a of Object.entries(s))a[1]()}}}}const we={};function X(){return ke(we)}const q=Se("light");var y="colors",z="sizes",d="space",pe={gap:d,gridGap:d,columnGap:d,gridColumnGap:d,rowGap:d,gridRowGap:d,inset:d,insetBlock:d,insetBlockEnd:d,insetBlockStart:d,insetInline:d,insetInlineEnd:d,insetInlineStart:d,margin:d,marginTop:d,marginRight:d,marginBottom:d,marginLeft:d,marginBlock:d,marginBlockEnd:d,marginBlockStart:d,marginInline:d,marginInlineEnd:d,marginInlineStart:d,padding:d,paddingTop:d,paddingRight:d,paddingBottom:d,paddingLeft:d,paddingBlock:d,paddingBlockEnd:d,paddingBlockStart:d,paddingInline:d,paddingInlineEnd:d,paddingInlineStart:d,top:d,right:d,bottom:d,left:d,scrollMargin:d,scrollMarginTop:d,scrollMarginRight:d,scrollMarginBottom:d,scrollMarginLeft:d,scrollMarginX:d,scrollMarginY:d,scrollMarginBlock:d,scrollMarginBlockEnd:d,scrollMarginBlockStart:d,scrollMarginInline:d,scrollMarginInlineEnd:d,scrollMarginInlineStart:d,scrollPadding:d,scrollPaddingTop:d,scrollPaddingRight:d,scrollPaddingBottom:d,scrollPaddingLeft:d,scrollPaddingX:d,scrollPaddingY:d,scrollPaddingBlock:d,scrollPaddingBlockEnd:d,scrollPaddingBlockStart:d,scrollPaddingInline:d,scrollPaddingInlineEnd:d,scrollPaddingInlineStart:d,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:z,minBlockSize:z,maxBlockSize:z,inlineSize:z,minInlineSize:z,maxInlineSize:z,width:z,minWidth:z,maxWidth:z,height:z,minHeight:z,maxHeight:z,flexBasis:z,gridTemplateColumns:z,gridTemplateRows:z,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},ze=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,N=()=>{const e=Object.create(null);return(t,n,...r)=>{const i=(o=>JSON.stringify(o,ze))(t);return i in e?e[i]:e[i]=n(t,...r)}},G=Symbol.for("sxs.internal"),ne=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ae=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Be}=Object.prototype,te=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Re=/\s+(?![^()]*\))/,O=e=>t=>e(...typeof t=="string"?String(t).split(Re):[t]),se={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:O((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:O((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:O((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:O((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:O((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:O((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},K=/([\d.]+)([^]*)/,ve=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):t,Ie=(e,t)=>e in We&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,o)=>r+(i==="stretch"?`-moz-available${o};${te(e)}:${r}-webkit-fill-available`:`-moz-fit-content${o};${te(e)}:${r}fit-content`)+o):String(t),We={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},T=e=>e?e+"-":"",ge=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,o,l,s)=>l=="$"==!!o?r:(i||l=="--"?"calc(":"")+"var(--"+(l==="$"?T(t)+(s.includes("$")?"":T(n))+s.replace(/\$/g,"-"):s)+")"+(i||l=="--"?"*"+(i||"")+(o||"1")+")":"")),Ce=/\s*,\s*(?![^()]*\))/,Ee=Object.prototype.toString,L=(e,t,n,r,i)=>{let o,l,s;const a=(f,p,m)=>{let c,g;const b=k=>{for(c in k){const x=c.charCodeAt(0)===64,R=x&&Array.isArray(k[c])?k[c]:[k[c]];for(g of R){const B=/[A-Z]/.test(u=c)?u:u.replace(/-[^]/g,w=>w[1].toUpperCase()),j=typeof g=="object"&&g&&g.toString===Ee&&(!r.utils[B]||!p.length);if(B in r.utils&&!j){const w=r.utils[B];if(w!==l){l=w,b(w(g)),l=null;continue}}else if(B in se){const w=se[B];if(w!==s){s=w,b(w(g)),s=null;continue}}if(x&&(S=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(w,$,v,W,I,C)=>{const A=K.test($),F=.0625*(A?-1:1),[_,ie]=A?[W,$]:[$,W];return"("+(v[0]==="="?"":v[0]===">"===A?"max-":"min-")+_+":"+(v[0]!=="="&&v.length===1?ie.replace(K,(be,J,Z)=>Number(J)+F*(v===">"?1:-1)+Z):ie)+(I?") and ("+(I[0]===">"?"min-":"max-")+_+":"+(I.length===1?C.replace(K,(be,J,Z)=>Number(J)+F*(I===">"?-1:1)+Z):C):"")+")"})),j){const w=x?m.concat(c):[...m],$=x?[...p]:ve(p,c.split(Ce));o!==void 0&&i(le(...o)),o=void 0,a(g,$,w)}else o===void 0&&(o=[[],p,m]),c=x||c.charCodeAt(0)!==36?c:`--${T(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=j?g:typeof g=="number"?g&&B in Te?String(g)+"px":String(g):ge(Ie(B,g??""),r.prefix,r.themeMap[B]),o[0].push(`${x?`${c} `:`${te(c)}:`}${g}`)}}var S,u};b(f),o!==void 0&&i(le(...o)),o=void 0};a(e,t,n)},le=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,Te={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ce=e=>String.fromCharCode(e+(e>25?39:97)),M=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=ce(n%52)+r;return ce(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),D=["themed","global","styled","onevar","resonevar","allvar","inline"],je=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Me=e=>{let t;const n=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(o,l)=>{const{cssText:s}=o;let a="";if(s.startsWith("--sxs"))return"";if(i[l-1]&&(a=i[l-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const f in t.rules)if(t.rules[f].group===o)return`--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${s}`;return o.cssRules.length?`${a}${s}`:""}return s}).join("")},r=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const f in s)delete s[f]}const i=Object(e).styleSheets||[];for(const s of i)if(je(s)){for(let a=0,f=s.cssRules;f[a];++a){const p=Object(f[a]);if(p.type!==1)continue;const m=Object(f[a+1]);if(m.type!==4)continue;++a;const{cssText:c}=p;if(!c.startsWith("--sxs"))continue;const g=c.slice(14,-3).trim().split(/\s+/),b=D[g[0]];b&&(t||(t={sheet:s,reset:r,rules:{},toString:n}),t.rules[b]={group:m,index:a,cache:new Set(g)})}if(t)break}if(!t){const s=(a,f)=>({type:f,cssRules:[],insertRule(p,m){this.cssRules.splice(m,0,s(p,{import:3,undefined:1}[(p.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,p=>p.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:r,toString:n}}const{sheet:o,rules:l}=t;for(let s=D.length-1;s>=0;--s){const a=D[s];if(!l[a]){const f=D[s+1],p=l[f]?l[f].index:o.cssRules.length;o.insertRule("@media{}",p),o.insertRule(`--sxs{--sxs:${s}}`,p),l[a]={group:o.cssRules[p+1],index:p,cache:new Set([s])}}Ae(l[a])}};return r(),t},Ae=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},H=Symbol(),Oe=N(),Pe=(e,t)=>Oe(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[G]){r.type==null&&(r.type=i[G].type);for(const o of i[G].composers)r.composers.add(o)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(Le(i,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),He(e,r,t)}),Le=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const o=`${T(i.prefix)}c-${M(r)}`,l=[],s=[],a=Object.create(null),f=[];for(const c in n)a[c]=String(n[c]);if(typeof e=="object"&&e)for(const c in e){p=a,m=c,Be.call(p,m)||(a[c]="undefined");const g=e[c];for(const b in g){const k={[c]:String(b)};String(b)==="undefined"&&f.push(c);const S=g[b],u=[k,S,!ae(S)];l.push(u)}}var p,m;if(typeof t=="object"&&t)for(const c of t){let{css:g,...b}=c;g=typeof g=="object"&&g||{};for(const S in b)b[S]=String(b[S]);const k=[b,g,!ae(g)];s.push(k)}return[o,r,l,s,a,f]},He=(e,t,n)=>{const[r,i,o,l]=De(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(m=>{function c(){for(let g=0;g<c[H].length;g++){const[b,k]=c[H][g];m.rules[b].apply(k)}return c[H]=[],null}return c[H]=[],c.rules={},D.forEach(g=>c.rules[g]={apply:b=>c[H].push([g,b])}),c})(n):null,a=(s||n).rules,f=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=m=>{m=typeof m=="object"&&m||Ne;const{css:c,...g}=m,b={};for(const u in o)if(delete g[u],u in m){let x=m[u];typeof x=="object"&&x?b[u]={"@initial":o[u],...x}:(x=String(x),b[u]=x!=="undefined"||l.has(u)?x:o[u])}else b[u]=o[u];const k=new Set([...i]);for(const[u,x,R,B]of t.composers){n.rules.styled.cache.has(u)||(n.rules.styled.cache.add(u),L(x,[`.${u}`],[],e,$=>{a.styled.apply($)}));const j=de(R,b,e.media),w=de(B,b,e.media,!0);for(const $ of j)if($!==void 0)for(const[v,W,I]of $){const C=`${u}-${M(W)}-${v}`;k.add(C);const A=(I?n.rules.resonevar:n.rules.onevar).cache,F=I?a.resonevar:a.onevar;A.has(C)||(A.add(C),L(W,[`.${C}`],[],e,_=>{F.apply(_)}))}for(const $ of w)if($!==void 0)for(const[v,W]of $){const I=`${u}-${M(W)}-${v}`;k.add(I),n.rules.allvar.cache.has(I)||(n.rules.allvar.cache.add(I),L(W,[`.${I}`],[],e,C=>{a.allvar.apply(C)}))}}if(typeof c=="object"&&c){const u=`${r}-i${M(c)}-css`;k.add(u),n.rules.inline.cache.has(u)||(n.rules.inline.cache.add(u),L(c,[`.${u}`],[],e,x=>{a.inline.apply(x)}))}for(const u of String(m.className||"").trim().split(/\s+/))u&&k.add(u);const S=g.className=[...k].join(" ");return{type:t.type,className:S,selector:f,props:g,toString:()=>S,deferredInjector:s}};return ne(p,{className:r,selector:f,[G]:t,toString:()=>(n.rules.styled.cache.has(r)||p(),r)})},De=e=>{let t="";const n=[],r={},i=[];for(const[o,,,,l,s]of e){t===""&&(t=o),n.push(o),i.push(...s);for(const a in l){const f=l[a];(r[a]===void 0||f!=="undefined"||s.includes(f))&&(r[a]=f)}}return[t,n,r,new Set(i)]},de=(e,t,n,r)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let a,f=0,p=!1;for(a in o){const m=o[a];let c=t[a];if(c!==m){if(typeof c!="object"||!c)continue e;{let g,b,k=0;for(const S in c){if(m===String(c[S])){if(S!=="@initial"){const u=S.slice(1);(b=b||[]).push(u in n?n[u]:S.replace(/^@media ?/,"")),p=!0}f+=k,g=!0}++k}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!g)continue e}}}(i[f]=i[f]||[]).push([r?"cv":`${a}-${o[a]}`,l,p])}return i},Ne={},Fe=N(),_e=(e,t)=>Fe(e,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let o=M(i);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in i){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(i["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete i["@import"]}L(i,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ne(r,{toString:r})}),Ue=N(),Ge=(e,t)=>Ue(e,()=>n=>{const r=`${T(e.prefix)}k-${M(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];L(n,[],[],e,s=>o.push(s));const l=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(l)}return r};return ne(i,{get name(){return i()},toString:i})}),Ve=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+T(this.prefix)+T(this.scale)+this.token}toString(){return this.computedValue}},Xe=N(),Ye=(e,t)=>Xe(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${T(e.prefix)}t-${M(r)}`}`,o={},l=[];for(const a in r){o[a]={};for(const f in r[a]){const p=`--${T(e.prefix)}${a}-${f}`,m=ge(String(r[a][f]),e.prefix,a);o[a][f]=new Ve(f,m,a,e.prefix),l.push(`${p}:${m}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const a=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(a)}return n};return{...o,get className(){return s()},selector:i,toString:s}}),Je=N(),Ze=e=>{let t=!1;const n=Je(e,r=>{t=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",o=typeof r.media=="object"&&r.media||{},l=typeof r.root=="object"?r.root||null:globalThis.document||null,s=typeof r.theme=="object"&&r.theme||{},a={prefix:i,media:o,theme:s,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...pe},utils:typeof r.utils=="object"&&r.utils||{}},f=Me(l),p={css:Pe(a,f),globalCss:_e(a,f),keyframes:Ge(a,f),createTheme:Ye(a,f),reset(){f.reset(),p.theme.toString()},theme:{},sheet:f,config:a,prefix:i,getCssText:f.toString,toString:f.toString};return String(p.theme=p.createTheme(s)),p});return t||n.reset(),n};const ue={primary:"#228be6",white:"#ffffff",black:"#000000",dark50:"#C1C2C5",dark100:"#A6A7AB",dark200:"#909296",dark300:"#5c5f66",dark400:"#373A40",dark500:"#2C2E33",dark600:"#25262b",dark700:"#1A1B1E",dark800:"#141517",dark900:"#101113",gray50:"#f8f9fa",gray100:"#f1f3f5",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#868e96",gray700:"#495057",gray800:"#343a40",gray900:"#212529",red50:"#fff5f5",red100:"#ffe3e3",red200:"#ffc9c9",red300:"#ffa8a8",red400:"#ff8787",red500:"#ff6b6b",red600:"#fa5252",red700:"#f03e3e",red800:"#e03131",red900:"#c92a2a",pink50:"#fff0f6",pink100:"#ffdeeb",pink200:"#fcc2d7",pink300:"#faa2c1",pink400:"#f783ac",pink500:"#f06595",pink600:"#e64980",pink700:"#d6336c",pink800:"#c2255c",pink900:"#a61e4d",grape50:"#f8f0fc",grape100:"#f3d9fa",grape200:"#eebefa",grape300:"#e599f7",grape400:"#da77f2",grape500:"#cc5de8",grape600:"#be4bdb",grape700:"#ae3ec9",grape800:"#9c36b5",grape900:"#862e9c",violet50:"#f3f0ff",violet100:"#e5dbff",violet200:"#d0bfff",violet300:"#b197fc",violet400:"#9775fa",violet500:"#845ef7",violet600:"#7950f2",violet700:"#7048e8",violet800:"#6741d9",violet900:"#5f3dc4",indigo50:"#edf2ff",indigo100:"#dbe4ff",indigo200:"#bac8ff",indigo300:"#91a7ff",indigo400:"#748ffc",indigo500:"#5c7cfa",indigo600:"#4c6ef5",indigo700:"#4263eb",indigo800:"#3b5bdb",indigo900:"#364fc7",blue50:"#e7f5ff",blue100:"#d0ebff",blue200:"#a5d8ff",blue300:"#74c0fc",blue400:"#4dabf7",blue500:"#339af0",blue600:"#228be6",blue700:"#1c7ed6",blue800:"#1971c2",blue900:"#1864ab",cyan50:"#e3fafc",cyan100:"#c5f6fa",cyan200:"#99e9f2",cyan300:"#66d9e8",cyan400:"#3bc9db",cyan500:"#22b8cf",cyan600:"#15aabf",cyan700:"#1098ad",cyan800:"#0c8599",cyan900:"#0b7285",teal50:"#e6fcf5",teal100:"#c3fae8",teal200:"#96f2d7",teal300:"#63e6be",teal400:"#38d9a9",teal500:"#20c997",teal600:"#12b886",teal700:"#0ca678",teal800:"#099268",teal900:"#087f5b",green50:"#ebfbee",green100:"#d3f9d8",green200:"#b2f2bb",green300:"#8ce99a",green400:"#69db7c",green500:"#51cf66",green600:"#40c057",green700:"#37b24d",green800:"#2f9e44",green900:"#2b8a3e",lime50:"#f4fce3",lime100:"#e9fac8",lime200:"#d8f5a2",lime300:"#c0eb75",lime400:"#a9e34b",lime500:"#94d82d",lime600:"#82c91e",lime700:"#74b816",lime800:"#66a80f",lime900:"#5c940d",yellow50:"#fff9db",yellow100:"#fff3bf",yellow200:"#ffec99",yellow300:"#ffe066",yellow400:"#ffd43b",yellow500:"#fcc419",yellow600:"#fab005",yellow700:"#f59f00",yellow800:"#f08c00",yellow900:"#e67700",orange50:"#fff4e6",orange100:"#ffe8cc",orange200:"#ffd8a8",orange300:"#ffc078",orange400:"#ffa94d",orange500:"#ff922b",orange600:"#fd7e14",orange700:"#f76707",orange800:"#e8590c",orange900:"#d9480f"},qe={blue:"blue",cyan:"cyan",dark:"dark",grape:"grape",gray:"gray",green:"green",indigo:"indigo",lime:"lime",orange:"orange",pink:"pink",red:"red",teal:"teal",violet:"violet",yellow:"yellow"},{css:re,globalCss:me,keyframes:$t,getCssText:wt,theme:Ke,createTheme:Qe,config:zt,reset:Bt}=Ze({prefix:"svelteui",theme:{colors:ue,space:{0:"0rem",xs:10,sm:12,md:16,lg:20,xl:24,xsPX:"10px",smPX:"12px",mdPX:"16px",lgPX:"20px",xlPX:"24px",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",7:"0.875rem",8:"1rem",9:"1.25rem",10:"1.5rem",11:"1.75rem",12:"2rem",13:"2.25rem",14:"2.5rem",15:"2.75rem",16:"3rem",17:"3.5rem",18:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},fonts:{standard:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fallback:"Segoe UI, system-ui, sans-serif"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeights:{xs:1,sm:1.25,md:1.5,lg:1.625,xl:1.75},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},sizes:{},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"32px",squared:"33%",rounded:"50%",pill:"9999px"},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},zIndices:{1:"100",2:"200",3:"300",4:"400",5:"500",10:"1000",max:"9999"},borderWidths:{light:"1px",normal:"2px",bold:"3px",extrabold:"4px",black:"5px",xs:"1px",sm:"2px",md:"3px",lg:"4px",xl:"5px"},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},borderStyles:{},transitions:{}},media:{xs:"(min-width: 576px)",sm:"(min-width: 768px)",md:"(min-width: 992px)",lg:"(min-width: 1200px)",xl:"(min-width: 1400px)"},utils:{focusRing:e=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:e==="always"||e==="auto"?"2px solid $primary":"none"},"&:focus:not(:focus-visible)":{outline:e==="auto"||e==="never"?"none":void 0}}),p:e=>({padding:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({margin:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),tt:e=>({textTransform:e}),to:e=>({textOverflow:e}),d:e=>({display:e}),dflex:e=>({display:"flex",alignItems:e,justifyContent:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({fontSize:e}),fb:e=>({flexBasis:e}),bc:e=>({backgroundColor:e}),bf:e=>({backdropFilter:e}),bg:e=>({background:e}),bgBlur:e=>({bf:"saturate(180%) blur(10px)",bg:e}),bgColor:e=>({backgroundColor:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),bgClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),br:e=>({borderRadius:e}),bw:e=>({borderWidth:e}),btrr:e=>({borderTopRightRadius:e}),bbrr:e=>({borderBottomRightRadius:e}),bblr:e=>({borderBottomLeftRadius:e}),btlr:e=>({borderTopLeftRadius:e}),bs:e=>({boxShadow:e}),normalShadow:e=>({boxShadow:`0 4px 14px 0 $${e}`}),lh:e=>({lineHeight:e}),ov:e=>({overflow:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),pe:e=>({pointerEvents:e}),events:e=>({pointerEvents:e}),us:e=>({WebkitUserSelect:e,userSelect:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),w:e=>({width:e}),h:e=>({height:e}),minW:e=>({minWidth:e}),minH:e=>({minWidth:e}),mw:e=>({maxWidth:e}),maxW:e=>({maxWidth:e}),mh:e=>({maxHeight:e}),maxH:e=>({maxHeight:e}),size:e=>({width:e,height:e}),minSize:e=>({minWidth:e,minHeight:e,width:e,height:e}),sizeMin:e=>({minWidth:e,minHeight:e,width:e,height:e}),maxSize:e=>({maxWidth:e,maxHeight:e}),sizeMax:e=>({maxWidth:e,maxHeight:e}),appearance:e=>({WebkitAppearance:e,appearance:e}),scale:e=>({transform:`scale(${e})`}),linearGradient:e=>({backgroundImage:`linear-gradient(${e})`}),tdl:e=>({textDecorationLine:e}),textGradient:e=>({backgroundImage:`linear-gradient(${e})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"})},themeMap:{...pe,width:"space",height:"space",minWidth:"space",maxWidth:"space",minHeight:"space",maxHeight:"space",flexBasis:"space",gridTemplateColumns:"space",gridTemplateRows:"space",blockSize:"space",minBlockSize:"space",maxBlockSize:"space",inlineSize:"space",minInlineSize:"space",maxInlineSize:"space",borderWidth:"borderWeights"}}),V=Qe("dark-theme",{colors:ue,shadows:{xs:"-4px 0 15px rgb(0 0 0 / 50%)",sm:"0 5px 20px -5px rgba(20, 20, 20, 0.1)",md:"0 8px 30px rgba(20, 20, 20, 0.15)",lg:"0 30px 60px rgba(20, 20, 20, 0.15)",xl:"0 40px 80px rgba(20, 20, 20, 0.25)"}}),Rt=me({a:{focusRing:"auto"},body:{[`${V.selector} &`]:{backgroundColor:"$dark700",color:"$dark50"},backgroundColor:"$white",color:"$black"}}),vt=me({html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%",margin:0},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em",margin:0},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}});function h(e,t=0){var i,o;const n=((i=X())==null?void 0:i.theme)||Y();let r="50";return et(e)?(t!==0&&(r=`${t.toString()}00`),(o=n.colors[`${e}${r}`])==null?void 0:o.value):e}function et(e){let t=!1;switch(e){case"dark":t=!0;break;case"gray":t=!0;break;case"red":t=!0;break;case"pink":t=!0;break;case"grape":t=!0;break;case"violet":t=!0;break;case"indigo":t=!0;break;case"blue":t=!0;break;case"cyan":t=!0;break;case"teal":t=!0;break;case"green":t=!0;break;case"lime":t=!0;break;case"yellow":t=!0;break;case"orange":t=!0;break;default:t=!1;break}return t}function tt(e){return t=>{if(typeof t=="number")return`${t/16}${e}`;if(typeof t=="string"){const n=t.replace("px","");if(!Number.isNaN(Number(n)))return`${Number(n)/16}${e}`}return t}}const U=tt("rem");function rt(e=0){return{position:"absolute",top:U(e),right:U(e),left:U(e),bottom:U(e)}}function nt(e){var t,n;return typeof e.size=="number"?e.size:typeof e.sizes[e.size]=="number"?e.sizes[e.size]:+((t=e.sizes[e.size])==null?void 0:t.value)||+((n=e.sizes.md)==null?void 0:n.value)}function it(e){var n;const t=((n=X())==null?void 0:n.theme)||Y();return typeof e=="number"?e:t.radii[e].value}function ot(e){const t=e.replace("#","");return typeof t=="string"&&t.length===6&&!Number.isNaN(+`0x${t}`)}function at(e){const t=e.replace("#",""),n=parseInt(t,16),r=n>>16&255,i=n>>8&255,o=n&255;return{r,g:i,b:o,a:1}}function st(e){const[t,n,r,i]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:n,b:r,a:i||1}}function lt(e){return ot(e)?at(e):e.startsWith("rgb")?st(e):{r:0,g:0,b:0,a:1}}function E(e,t=1){if(typeof e!="string"||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:n,g:r,b:i}=lt(e);return`rgba(${n}, ${r}, ${i}, ${t})`}const Q={from:"indigo",to:"cyan",deg:45};function ct({variant:e,color:t,gradient:n}){var o;const r=((o=X())==null?void 0:o.theme)||Y(),i=6;if(e==="light")return{border:"transparent",background:[E(h(t,8),.35),E(h(t,0),1)],color:[t==="dark"?h("dark",0):h(t,2),t==="dark"?h("dark",9):h(t,i)],hover:[E(h(t,7),.45),E(h(t,1),.65)]};if(e==="default")return{border:[h("dark",5),h("gray",4)],background:[h("dark",5),r.colors.white.value],color:[r.colors.white.value,r.colors.black.value],hover:[h("dark",4),h("gray",0)]};if(e==="white")return{border:"transparent",background:r.colors.white.value,color:h(t,i),hover:null};if(e==="outline")return{border:[h(t,4),h(t,i)],background:"transparent",color:[h(t,4),h(t,i)],hover:[E(h(t,4),.05),E(h(t,0),.35)]};if(e==="gradient"){const l={from:(n==null?void 0:n.from)||Q.from,to:(n==null?void 0:n.to)||Q.to,deg:(n==null?void 0:n.deg)||Q.deg};return{background:`linear-gradient(${l.deg}deg, ${h(l.from,i)} 0%, ${h(l.to,i)} 100%)`,color:r.colors.white.value,border:"transparent",hover:null}}return e==="subtle"?{border:"transparent",background:"transparent",color:[t==="dark"?h("dark",0):h(t,2),t==="dark"?h("dark",9):h(t,i)],hover:[E(h(t,8),.35),E(h(t,0),1)]}:{border:"transparent",background:[h(t,8),h(t,i)],color:r.colors.white.value,hover:h(t,7)}}const P={cover:rt,size:nt,radius:it,themeColor:h,variant:ct,rgba:E};function Y(){let e;return q==null||q.subscribe(n=>{e=n}),{...Ke,colorNames:qe,colorScheme:e,dark:V==null?void 0:V.selector,fn:{cover:P.cover,themeColor:P.themeColor,size:P.size,radius:P.radius,rgba:P.rgba,variant:P.variant}}}const dt={}.hasOwnProperty;function ft(...e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];if(!r)continue;const i=typeof r;if(i==="string"||i==="number")t.push(r);else if(Array.isArray(r)){if(r.length){const o={...r};o&&t.push(o)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(const o in r)dt.call(r,o)&&r[o]&&t.push(o);else t.push(r.toString())}return t.join(" ")}function pt(){return{cx:ft}}function gt(e){const t={};return Object.keys(e).forEach(n=>{const[r,i]=e[n];t[r]=i}),t}const fe="svelteui";function ut(e){return`__svelteui-ref-${e||""}`}function mt(e,t){const n=[],r={},i=l=>{const s=l.variation??l,a=Object.keys(s);for(const f of a)o(s[f])},o=l=>{Object.keys(l).map(s=>{if(s==="variants"){i(l[s]);return}if(s==="ref"&&n.push(l.ref),s==="darkMode"&&(l[`${t.dark} &`]=l.darkMode),!(l[s]===null||typeof l[s]!="object")){if(o(l[s]),s==="darkMode")delete l[s];else if(!s.startsWith("@media")){if(!s.startsWith("&")&&!s.startsWith(t.dark)){const a=re(l[s]);r[s]=a().toString(),l[`& .${a().toString()}`]=l[s],delete l[s]}}}})};return o(e),delete e["& .root"],{classMap:r,refs:Array.from(new Set(n))}}function It(e){const t=typeof e=="function"?e:()=>e;function n(r={},i){var u;const o=((u=X())==null?void 0:u.theme)||Y(),{cx:l}=pt(),{override:s,name:a}=i||{},f=t(o,r,ut),p=Object.assign({},f),{classMap:m,refs:c}=mt(p,o),g=f.root??void 0,b=g!==void 0?{...g,...p}:f,k=re(b),S=gt(Object.keys(f).map(x=>{const R=c.find(W=>W.includes(x))??"",B=(R==null?void 0:R.split("-"))??[],j=(R==null?void 0:R.split("-")[(B==null?void 0:B.length)-1])===x,w=x.toString();let $=m[w]??w;R&&j&&($=`${$} ${R}`),x==="root"&&($=k({css:s}).toString());let v=`${fe}-${x.toString()}`;return a&&(v=`${fe}-${a}-${x.toString()}`,$=`${$} ${v}`),[x,$]}));return{cx:l,theme:o,classes:S,getStyles:re(b)}}return n}export{vt as N,Rt as S,Y as a,X as b,q as c,St as d,V as e,It as f,xt as g,re as h,yt as i,P as j,we as k,kt as u};
