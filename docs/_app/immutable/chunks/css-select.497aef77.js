import{r as F,c as A}from"./boolbase.d0cdbeca.js";import{r as te}from"./domutils.ef6c0a51.js";import{r as D}from"./css-what.79fc31aa.js";import{r as ae}from"./nth-check.93f6769c.js";var V={},C={},R={},I={},H;function G(){return H||(H=1,function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.isTraversal=c.procedure=void 0,c.procedure={universal:50,tag:30,attribute:1,pseudo:0,"pseudo-element":0,"column-combinator":-1,descendant:-1,child:-1,parent:-1,sibling:-1,adjacent:-1,_flexibleDescendant:-1};function y(d){return c.procedure[d.type]<0}c.isTraversal=y}(I)),I}var W;function ne(){if(W)return R;W=1,Object.defineProperty(R,"__esModule",{value:!0});var c=D,y=G(),d={exists:10,equals:8,not:7,start:6,end:6,any:5,hyphen:4,element:4};function g(a){for(var e=a.map(h),s=1;s<a.length;s++){var n=e[s];if(!(n<0))for(var r=s-1;r>=0&&n<e[r];r--){var u=a[r+1];a[r+1]=a[r],a[r]=u,e[r+1]=e[r],e[r]=n}}}R.default=g;function h(a){var e=y.procedure[a.type];if(a.type===c.SelectorType.Attribute)e=d[a.action],e===d.equals&&a.name==="id"&&(e=9),a.ignoreCase&&(e>>=1);else if(a.type===c.SelectorType.Pseudo)if(!a.data)e=3;else if(a.name==="has"||a.name==="contains")e=0;else if(Array.isArray(a.data)){e=0;for(var s=0;s<a.data.length;s++)if(a.data[s].length===1){var n=h(a.data[s][0]);if(n===0){e=0;break}n>e&&(e=n)}a.data.length>1&&e>0&&(e-=1)}else e=1;return e}return R}var L={},N={},K;function ue(){if(K)return N;K=1,Object.defineProperty(N,"__esModule",{value:!0}),N.attributeRules=void 0;var c=F(),y=/[-[\]{}()*+?.,\\^$|#\s]/g;function d(a){return a.replace(y,"\\$&")}var g=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function h(a,e){return typeof a.ignoreCase=="boolean"?a.ignoreCase:a.ignoreCase==="quirks"?!!e.quirksMode:!e.xmlMode&&g.has(a.name)}return N.attributeRules={equals:function(a,e,s){var n=s.adapter,r=e.name,u=e.value;return h(e,s)?(u=u.toLowerCase(),function(i){var v=n.getAttributeValue(i,r);return v!=null&&v.length===u.length&&v.toLowerCase()===u&&a(i)}):function(i){return n.getAttributeValue(i,r)===u&&a(i)}},hyphen:function(a,e,s){var n=s.adapter,r=e.name,u=e.value,i=u.length;return h(e,s)?(u=u.toLowerCase(),function(l){var o=n.getAttributeValue(l,r);return o!=null&&(o.length===i||o.charAt(i)==="-")&&o.substr(0,i).toLowerCase()===u&&a(l)}):function(l){var o=n.getAttributeValue(l,r);return o!=null&&(o.length===i||o.charAt(i)==="-")&&o.substr(0,i)===u&&a(l)}},element:function(a,e,s){var n=s.adapter,r=e.name,u=e.value;if(/\s/.test(u))return c.falseFunc;var i=new RegExp("(?:^|\\s)".concat(d(u),"(?:$|\\s)"),h(e,s)?"i":"");return function(l){var o=n.getAttributeValue(l,r);return o!=null&&o.length>=u.length&&i.test(o)&&a(l)}},exists:function(a,e,s){var n=e.name,r=s.adapter;return function(u){return r.hasAttrib(u,n)&&a(u)}},start:function(a,e,s){var n=s.adapter,r=e.name,u=e.value,i=u.length;return i===0?c.falseFunc:h(e,s)?(u=u.toLowerCase(),function(v){var l=n.getAttributeValue(v,r);return l!=null&&l.length>=i&&l.substr(0,i).toLowerCase()===u&&a(v)}):function(v){var l;return!!(!((l=n.getAttributeValue(v,r))===null||l===void 0)&&l.startsWith(u))&&a(v)}},end:function(a,e,s){var n=s.adapter,r=e.name,u=e.value,i=-u.length;return i===0?c.falseFunc:h(e,s)?(u=u.toLowerCase(),function(v){var l;return((l=n.getAttributeValue(v,r))===null||l===void 0?void 0:l.substr(i).toLowerCase())===u&&a(v)}):function(v){var l;return!!(!((l=n.getAttributeValue(v,r))===null||l===void 0)&&l.endsWith(u))&&a(v)}},any:function(a,e,s){var n=s.adapter,r=e.name,u=e.value;if(u==="")return c.falseFunc;if(h(e,s)){var i=new RegExp(d(u),"i");return function(l){var o=n.getAttributeValue(l,r);return o!=null&&o.length>=u.length&&i.test(o)&&a(l)}}return function(v){var l;return!!(!((l=n.getAttributeValue(v,r))===null||l===void 0)&&l.includes(u))&&a(v)}},not:function(a,e,s){var n=s.adapter,r=e.name,u=e.value;return u===""?function(i){return!!n.getAttributeValue(i,r)&&a(i)}:h(e,s)?(u=u.toLowerCase(),function(i){var v=n.getAttributeValue(i,r);return(v==null||v.length!==u.length||v.toLowerCase()!==u)&&a(i)}):function(i){return n.getAttributeValue(i,r)!==u&&a(i)}}},N}var U={},$={},z;function ie(){return z||(z=1,function(c){var y=A&&A.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.filters=void 0;var d=y(ae()),g=F();function h(e,s){return function(n){var r=s.getParent(n);return r!=null&&s.isTag(r)&&e(n)}}c.filters={contains:function(e,s,n){var r=n.adapter;return function(i){return e(i)&&r.getText(i).includes(s)}},icontains:function(e,s,n){var r=n.adapter,u=s.toLowerCase();return function(v){return e(v)&&r.getText(v).toLowerCase().includes(u)}},"nth-child":function(e,s,n){var r=n.adapter,u=n.equals,i=(0,d.default)(s);return i===g.falseFunc?g.falseFunc:i===g.trueFunc?h(e,r):function(l){for(var o=r.getSiblings(l),b=0,m=0;m<o.length&&!u(l,o[m]);m++)r.isTag(o[m])&&b++;return i(b)&&e(l)}},"nth-last-child":function(e,s,n){var r=n.adapter,u=n.equals,i=(0,d.default)(s);return i===g.falseFunc?g.falseFunc:i===g.trueFunc?h(e,r):function(l){for(var o=r.getSiblings(l),b=0,m=o.length-1;m>=0&&!u(l,o[m]);m--)r.isTag(o[m])&&b++;return i(b)&&e(l)}},"nth-of-type":function(e,s,n){var r=n.adapter,u=n.equals,i=(0,d.default)(s);return i===g.falseFunc?g.falseFunc:i===g.trueFunc?h(e,r):function(l){for(var o=r.getSiblings(l),b=0,m=0;m<o.length;m++){var t=o[m];if(u(l,t))break;r.isTag(t)&&r.getName(t)===r.getName(l)&&b++}return i(b)&&e(l)}},"nth-last-of-type":function(e,s,n){var r=n.adapter,u=n.equals,i=(0,d.default)(s);return i===g.falseFunc?g.falseFunc:i===g.trueFunc?h(e,r):function(l){for(var o=r.getSiblings(l),b=0,m=o.length-1;m>=0;m--){var t=o[m];if(u(l,t))break;r.isTag(t)&&r.getName(t)===r.getName(l)&&b++}return i(b)&&e(l)}},root:function(e,s,n){var r=n.adapter;return function(u){var i=r.getParent(u);return(i==null||!r.isTag(i))&&e(u)}},scope:function(e,s,n,r){var u=n.equals;return!r||r.length===0?c.filters.root(e,s,n):r.length===1?function(i){return u(r[0],i)&&e(i)}:function(i){return r.includes(i)&&e(i)}},hover:a("isHovered"),visited:a("isVisited"),active:a("isActive")};function a(e){return function(n,r,u){var i=u.adapter,v=i[e];return typeof v!="function"?g.falseFunc:function(o){return v(o)&&n(o)}}}}($)),$}var E={},X;function se(){if(X)return E;X=1,Object.defineProperty(E,"__esModule",{value:!0}),E.verifyPseudoArgs=E.pseudos=void 0,E.pseudos={empty:function(y,d){var g=d.adapter;return!g.getChildren(y).some(function(h){return g.isTag(h)||g.getText(h)!==""})},"first-child":function(y,d){var g=d.adapter,h=d.equals,a=g.getSiblings(y).find(function(e){return g.isTag(e)});return a!=null&&h(y,a)},"last-child":function(y,d){for(var g=d.adapter,h=d.equals,a=g.getSiblings(y),e=a.length-1;e>=0;e--){if(h(y,a[e]))return!0;if(g.isTag(a[e]))break}return!1},"first-of-type":function(y,d){for(var g=d.adapter,h=d.equals,a=g.getSiblings(y),e=g.getName(y),s=0;s<a.length;s++){var n=a[s];if(h(y,n))return!0;if(g.isTag(n)&&g.getName(n)===e)break}return!1},"last-of-type":function(y,d){for(var g=d.adapter,h=d.equals,a=g.getSiblings(y),e=g.getName(y),s=a.length-1;s>=0;s--){var n=a[s];if(h(y,n))return!0;if(g.isTag(n)&&g.getName(n)===e)break}return!1},"only-of-type":function(y,d){var g=d.adapter,h=d.equals,a=g.getName(y);return g.getSiblings(y).every(function(e){return h(y,e)||!g.isTag(e)||g.getName(e)!==a})},"only-child":function(y,d){var g=d.adapter,h=d.equals;return g.getSiblings(y).every(function(a){return h(y,a)||!g.isTag(a)})}};function c(y,d,g){if(g===null){if(y.length>2)throw new Error("pseudo-selector :".concat(d," requires an argument"))}else if(y.length===2)throw new Error("pseudo-selector :".concat(d," doesn't have any arguments"))}return E.verifyPseudoArgs=c,E}var M={},J;function le(){return J||(J=1,Object.defineProperty(M,"__esModule",{value:!0}),M.aliases=void 0,M.aliases={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:`:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"}),M}var k={},Q;function B(){return Q||(Q=1,function(c){var y=A&&A.__spreadArray||function(s,n,r){if(r||arguments.length===2)for(var u=0,i=n.length,v;u<i;u++)(v||!(u in n))&&(v||(v=Array.prototype.slice.call(n,0,u)),v[u]=n[u]);return s.concat(v||Array.prototype.slice.call(n))};Object.defineProperty(c,"__esModule",{value:!0}),c.subselects=c.getNextSiblings=c.ensureIsTag=c.PLACEHOLDER_ELEMENT=void 0;var d=F(),g=G();c.PLACEHOLDER_ELEMENT={};function h(s,n){return s===d.falseFunc?d.falseFunc:function(r){return n.isTag(r)&&s(r)}}c.ensureIsTag=h;function a(s,n){var r=n.getSiblings(s);if(r.length<=1)return[];var u=r.indexOf(s);return u<0||u===r.length-1?[]:r.slice(u+1).filter(n.isTag)}c.getNextSiblings=a;var e=function(s,n,r,u,i){var v={xmlMode:!!r.xmlMode,adapter:r.adapter,equals:r.equals},l=i(n,v,u);return function(o){return l(o)&&s(o)}};c.subselects={is:e,matches:e,where:e,not:function(s,n,r,u,i){var v={xmlMode:!!r.xmlMode,adapter:r.adapter,equals:r.equals},l=i(n,v,u);return l===d.falseFunc?s:l===d.trueFunc?d.falseFunc:function(b){return!l(b)&&s(b)}},has:function(s,n,r,u,i){var v=r.adapter,l={xmlMode:!!r.xmlMode,adapter:v,equals:r.equals},o=n.some(function(f){return f.some(g.isTraversal)})?[c.PLACEHOLDER_ELEMENT]:void 0,b=i(n,l,o);if(b===d.falseFunc)return d.falseFunc;if(b===d.trueFunc)return function(f){return v.getChildren(f).some(v.isTag)&&s(f)};var m=h(b,v),t=b.shouldTestNextSiblings,p=t===void 0?!1:t;return o?function(f){o[0]=f;var _=v.getChildren(f),T=p?y(y([],_,!0),a(f,v),!0):_;return s(f)&&v.existsOne(m,T)}:function(f){return s(f)&&v.existsOne(m,v.getChildren(f))}}}}(k)),k}var Y;function re(){return Y||(Y=1,function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.compilePseudoSelector=c.aliases=c.pseudos=c.filters=void 0;var y=F(),d=D,g=ie();Object.defineProperty(c,"filters",{enumerable:!0,get:function(){return g.filters}});var h=se();Object.defineProperty(c,"pseudos",{enumerable:!0,get:function(){return h.pseudos}});var a=le();Object.defineProperty(c,"aliases",{enumerable:!0,get:function(){return a.aliases}});var e=B();function s(n,r,u,i,v){var l=r.name,o=r.data;if(Array.isArray(o))return e.subselects[l](n,o,u,i,v);if(l in a.aliases){if(o!=null)throw new Error("Pseudo ".concat(l," doesn't have any arguments"));var b=(0,d.parse)(a.aliases[l]);return e.subselects.is(n,b,u,i,v)}if(l in g.filters)return g.filters[l](n,o,u,i);if(l in h.pseudos){var m=h.pseudos[l];return(0,h.verifyPseudoArgs)(m,l,o),m===y.falseFunc?y.falseFunc:n===y.trueFunc?function(t){return m(t,u,o)}:function(t){return m(t,u,o)&&n(t)}}throw new Error("unmatched pseudo-class :".concat(l))}c.compilePseudoSelector=s}(U)),U}var Z;function oe(){if(Z)return L;Z=1,Object.defineProperty(L,"__esModule",{value:!0}),L.compileGeneralSelector=void 0;var c=ue(),y=re(),d=D;function g(h,a,e,s,n){var r=e.adapter,u=e.equals;switch(a.type){case d.SelectorType.PseudoElement:throw new Error("Pseudo-elements are not supported by css-select");case d.SelectorType.ColumnCombinator:throw new Error("Column combinators are not yet supported by css-select");case d.SelectorType.Attribute:{if(a.namespace!=null)throw new Error("Namespaced attributes are not yet supported by css-select");return(!e.xmlMode||e.lowerCaseAttributeNames)&&(a.name=a.name.toLowerCase()),c.attributeRules[a.action](h,a,e)}case d.SelectorType.Pseudo:return(0,y.compilePseudoSelector)(h,a,e,s,n);case d.SelectorType.Tag:{if(a.namespace!=null)throw new Error("Namespaced tag names are not yet supported by css-select");var i=a.name;return(!e.xmlMode||e.lowerCaseTags)&&(i=i.toLowerCase()),function(o){return r.getName(o)===i&&h(o)}}case d.SelectorType.Descendant:{if(e.cacheResults===!1||typeof WeakSet>"u")return function(o){for(var b=o;b=r.getParent(b);)if(r.isTag(b)&&h(b))return!0;return!1};var v=new WeakSet;return function(o){for(var b=o;b=r.getParent(b);)if(!v.has(b)){if(r.isTag(b)&&h(b))return!0;v.add(b)}return!1}}case"_flexibleDescendant":return function(o){var b=o;do if(r.isTag(b)&&h(b))return!0;while(b=r.getParent(b));return!1};case d.SelectorType.Parent:return function(o){return r.getChildren(o).some(function(b){return r.isTag(b)&&h(b)})};case d.SelectorType.Child:return function(o){var b=r.getParent(o);return b!=null&&r.isTag(b)&&h(b)};case d.SelectorType.Sibling:return function(o){for(var b=r.getSiblings(o),m=0;m<b.length;m++){var t=b[m];if(u(o,t))break;if(r.isTag(t)&&h(t))return!0}return!1};case d.SelectorType.Adjacent:return r.prevElementSibling?function(o){var b=r.prevElementSibling(o);return b!=null&&h(b)}:function(o){for(var b=r.getSiblings(o),m,t=0;t<b.length;t++){var p=b[t];if(u(o,p))break;r.isTag(p)&&(m=p)}return!!m&&h(m)};case d.SelectorType.Universal:{if(a.namespace!=null&&a.namespace!=="*")throw new Error("Namespaced universal selectors are not yet supported by css-select");return h}}}return L.compileGeneralSelector=g,L}var x;function ce(){if(x)return C;x=1;var c=A&&A.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(C,"__esModule",{value:!0}),C.compileToken=C.compileUnsafe=C.compile=void 0;var y=D,d=F(),g=c(ne()),h=G(),a=oe(),e=B();function s(t,p,f){var _=n(t,p,f);return(0,e.ensureIsTag)(_,p.adapter)}C.compile=s;function n(t,p,f){var _=typeof t=="string"?(0,y.parse)(t):t;return o(_,p,f)}C.compileUnsafe=n;function r(t){return t.type==="pseudo"&&(t.name==="scope"||Array.isArray(t.data)&&t.data.some(function(p){return p.some(r)}))}var u={type:y.SelectorType.Descendant},i={type:"_flexibleDescendant"},v={type:y.SelectorType.Pseudo,name:"scope",data:null};function l(t,p,f){for(var _=p.adapter,T=!!(f!=null&&f.every(function(P){var O=_.isTag(P)&&_.getParent(P);return P===e.PLACEHOLDER_ELEMENT||O&&_.isTag(O)})),q=0,w=t;q<w.length;q++){var S=w[q];if(!(S.length>0&&(0,h.isTraversal)(S[0])&&S[0].type!=="descendant"))if(T&&!S.some(r))S.unshift(u);else continue;S.unshift(v)}}function o(t,p,f){var _;t=t.filter(function(P){return P.length>0}),t.forEach(g.default),f=(_=p.context)!==null&&_!==void 0?_:f;var T=Array.isArray(f),q=f&&(Array.isArray(f)?f:[f]);l(t,p,q);var w=!1,S=t.map(function(P){if(P.length>=2){var O=P[0],j=P[1];O.type!=="pseudo"||O.name!=="scope"||(T&&j.type==="descendant"?P[1]=i:(j.type==="adjacent"||j.type==="sibling")&&(w=!0))}return b(P,p,q)}).reduce(m,d.falseFunc);return S.shouldTestNextSiblings=w,S}C.compileToken=o;function b(t,p,f){var _;return t.reduce(function(T,q){return T===d.falseFunc?d.falseFunc:(0,a.compileGeneralSelector)(T,q,p,f,o)},(_=p.rootFunc)!==null&&_!==void 0?_:d.trueFunc)}function m(t,p){return p===d.falseFunc||t===d.trueFunc?t:t===d.falseFunc||p===d.trueFunc?p:function(_){return t(_)||p(_)}}return C}var ee;function ge(){return ee||(ee=1,function(c){var y=A&&A.__createBinding||(Object.create?function(t,p,f,_){_===void 0&&(_=f);var T=Object.getOwnPropertyDescriptor(p,f);(!T||("get"in T?!p.__esModule:T.writable||T.configurable))&&(T={enumerable:!0,get:function(){return p[f]}}),Object.defineProperty(t,_,T)}:function(t,p,f,_){_===void 0&&(_=f),t[_]=p[f]}),d=A&&A.__setModuleDefault||(Object.create?function(t,p){Object.defineProperty(t,"default",{enumerable:!0,value:p})}:function(t,p){t.default=p}),g=A&&A.__importStar||function(t){if(t&&t.__esModule)return t;var p={};if(t!=null)for(var f in t)f!=="default"&&Object.prototype.hasOwnProperty.call(t,f)&&y(p,t,f);return d(p,t),p};Object.defineProperty(c,"__esModule",{value:!0}),c.aliases=c.pseudos=c.filters=c.is=c.selectOne=c.selectAll=c.prepareContext=c._compileToken=c._compileUnsafe=c.compile=void 0;var h=g(te()),a=F(),e=ce(),s=B(),n=function(t,p){return t===p},r={adapter:h,equals:n};function u(t){var p,f,_,T,q=t??r;return(p=q.adapter)!==null&&p!==void 0||(q.adapter=h),(f=q.equals)!==null&&f!==void 0||(q.equals=(T=(_=q.adapter)===null||_===void 0?void 0:_.equals)!==null&&T!==void 0?T:n),q}function i(t){return function(f,_,T){var q=u(_);return t(f,q,T)}}c.compile=i(e.compile),c._compileUnsafe=i(e.compileUnsafe),c._compileToken=i(e.compileToken);function v(t){return function(f,_,T){var q=u(T);typeof f!="function"&&(f=(0,e.compileUnsafe)(f,q,_));var w=l(_,q.adapter,f.shouldTestNextSiblings);return t(f,w,q)}}function l(t,p,f){return f===void 0&&(f=!1),f&&(t=o(t,p)),Array.isArray(t)?p.removeSubsets(t):p.getChildren(t)}c.prepareContext=l;function o(t,p){for(var f=Array.isArray(t)?t.slice(0):[t],_=f.length,T=0;T<_;T++){var q=(0,s.getNextSiblings)(f[T],p);f.push.apply(f,q)}return f}c.selectAll=v(function(t,p,f){return t===a.falseFunc||!p||p.length===0?[]:f.adapter.findAll(t,p)}),c.selectOne=v(function(t,p,f){return t===a.falseFunc||!p||p.length===0?null:f.adapter.findOne(t,p)});function b(t,p,f){var _=u(f);return(typeof p=="function"?p:(0,e.compile)(p,_))(t)}c.is=b,c.default=c.selectAll;var m=re();Object.defineProperty(c,"filters",{enumerable:!0,get:function(){return m.filters}}),Object.defineProperty(c,"pseudos",{enumerable:!0,get:function(){return m.pseudos}}),Object.defineProperty(c,"aliases",{enumerable:!0,get:function(){return m.aliases}})}(V)),V}export{ge as r};
