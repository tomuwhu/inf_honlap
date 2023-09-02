import{c as y}from"./boolbase.d0cdbeca.js";import{r as ee}from"./css-what.79fc31aa.js";import{r as z}from"./css-select.497aef77.js";import{r as re}from"./domutils.ef6c0a51.js";var E={},b={},L={},G;function K(){return G||(G=1,function(u){Object.defineProperty(u,"__esModule",{value:!0}),u.getLimit=u.isFilter=u.filterNames=void 0,u.filterNames=new Set(["first","last","eq","gt","nth","lt","even","odd"]);function g(s){return s.type!=="pseudo"?!1:u.filterNames.has(s.name)?!0:s.name==="not"&&Array.isArray(s.data)?s.data.some(function(_){return _.some(g)}):!1}u.isFilter=g;function m(s,_){var c=_!=null?parseInt(_,10):NaN;switch(s){case"first":return 1;case"nth":case"eq":return isFinite(c)?c>=0?c+1:1/0:0;case"lt":return isFinite(c)?c>=0?c:1/0:0;case"gt":return isFinite(c)?1/0:0;default:return 1/0}}u.getLimit=m}(L)),L}var V;function te(){if(V)return b;V=1,Object.defineProperty(b,"__esModule",{value:!0}),b.groupSelectors=b.getDocumentRoot=void 0;var u=K();function g(s){for(;s.parent;)s=s.parent;return s}b.getDocumentRoot=g;function m(s){for(var _=[],c=[],o=0,S=s;o<S.length;o++){var v=S[o];v.some(u.isFilter)?_.push(v):c.push(v)}return[c,_]}return b.groupSelectors=m,b}var J;function fe(){return J||(J=1,function(u){var g=y&&y.__assign||function(){return g=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},g.apply(this,arguments)},m=y&&y.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),s=y&&y.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),_=y&&y.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&m(e,r,t);return s(e,r),e},c=y&&y.__spreadArray||function(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,f;n<i;n++)(f||!(n in e))&&(f||(f=Array.prototype.slice.call(e,0,n)),f[n]=e[n]);return r.concat(f||Array.prototype.slice.call(e))};Object.defineProperty(u,"__esModule",{value:!0}),u.select=u.filter=u.some=u.is=u.aliases=u.pseudos=u.filters=void 0;var o=ee,S=z(),v=_(re()),O=te(),A=K(),q=z();Object.defineProperty(u,"filters",{enumerable:!0,get:function(){return q.filters}}),Object.defineProperty(u,"pseudos",{enumerable:!0,get:function(){return q.pseudos}}),Object.defineProperty(u,"aliases",{enumerable:!0,get:function(){return q.aliases}});var P={type:o.SelectorType.Pseudo,name:"scope",data:null},Q=g({},P),W={type:o.SelectorType.Universal,namespace:null};function X(r,e,t){return t===void 0&&(t={}),N([r],e,t)}u.is=X;function N(r,e,t){if(t===void 0&&(t={}),typeof e=="function")return r.some(e);var n=(0,O.groupSelectors)((0,o.parse)(e)),i=n[0],f=n[1];return i.length>0&&r.some((0,S._compileToken)(i,t))||f.some(function(a){return R(a,r,t).length>0})}u.some=N;function Y(r,e,t,n){var i=typeof t=="string"?parseInt(t,10):NaN;switch(r){case"first":case"lt":return e;case"last":return e.length>0?[e[e.length-1]]:e;case"nth":case"eq":return isFinite(i)&&Math.abs(i)<e.length?[i<0?e[e.length+i]:e[i]]:[];case"gt":return isFinite(i)?e.slice(i+1):[];case"even":return e.filter(function(a,l){return l%2===0});case"odd":return e.filter(function(a,l){return l%2===1});case"not":{var f=new Set(M(t,e,n));return e.filter(function(a){return!f.has(a)})}}}function Z(r,e,t){return t===void 0&&(t={}),M((0,o.parse)(r),e,t)}u.filter=Z;function M(r,e,t){if(e.length===0)return[];var n=(0,O.groupSelectors)(r),i=n[0],f=n[1],a;if(i.length){var l=I(e,i,t);if(f.length===0)return l;l.length&&(a=new Set(l))}for(var d=0;d<f.length&&(a==null?void 0:a.size)!==e.length;d++){var j=f[d],F=a?e.filter(function(h){return v.isTag(h)&&!a.has(h)}):e;if(F.length===0)break;var l=R(j,e,t);if(l.length)if(a)l.forEach(function(h){return a.add(h)});else{if(d===f.length-1)return l;a=new Set(l)}}return typeof a<"u"?a.size===e.length?e:e.filter(function(D){return a.has(D)}):[]}function R(r,e,t){var n;if(r.some(o.isTraversal)){var i=(n=t.root)!==null&&n!==void 0?n:(0,O.getDocumentRoot)(e[0]),f=c(c([],r,!0),[Q],!1);return T(i,f,t,!0,e)}return T(e,r,t,!1)}function k(r,e,t){if(t===void 0&&(t={}),typeof r=="function")return C(e,r);var n=(0,O.groupSelectors)((0,o.parse)(r)),i=n[0],f=n[1],a=f.map(function(l){return T(e,l,t,!0)});return i.length&&a.push(w(e,i,t,1/0)),a.length===0?[]:a.length===1?a[0]:v.uniqueSort(a.reduce(function(l,d){return c(c([],l,!0),d,!0)}))}u.select=k;var x=new Set([o.SelectorType.Descendant,o.SelectorType.Adjacent]);function U(r){return r!==P&&r.type==="pseudo"&&(r.name==="scope"||Array.isArray(r.data)&&r.data.some(function(e){return e.some(U)}))}function B(r,e,t){return t&&r.some(U)?g(g({},e),{context:t}):e}function T(r,e,t,n,i){var f=e.findIndex(A.isFilter),a=e.slice(0,f),l=e[f],d=(0,A.getLimit)(l.name,l.data);if(d===0)return[];var j=B(a,t,i),F=a.length===0&&!Array.isArray(r)?v.getChildren(r).filter(v.isTag):a.length===0||a.length===1&&a[0]===P?(Array.isArray(r)?r:[r]).filter(v.isTag):n||a.some(o.isTraversal)?w(r,[a],j,d):I(r,[a],j),D=F.slice(0,d),h=Y(l.name,D,l.data,t);if(h.length===0||e.length===f+1)return h;var p=e.slice(f+1),$=p.some(o.isTraversal),H=B(p,t,i);return $&&(x.has(p[0].type)&&p.unshift(W),p.unshift(P)),p.some(A.isFilter)?T(h,p,t,!1,i):$?w(h,[p],H,1/0):I(h,[p],H)}function w(r,e,t,n){if(n===0)return[];var i=(0,S._compileToken)(e,t,r);return C(r,i,n)}function C(r,e,t){t===void 0&&(t=1/0);var n=(0,S.prepareContext)(r,v,e.shouldTestNextSiblings);return v.find(function(i){return v.isTag(i)&&e(i)},n,!0,t)}function I(r,e,t){var n=(Array.isArray(r)?r:[r]).filter(v.isTag);if(n.length===0)return n;var i=(0,S._compileToken)(e,t);return n.filter(i)}}(E)),E}export{fe as r};