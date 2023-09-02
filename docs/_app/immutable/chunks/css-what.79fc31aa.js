import{g as O}from"./boolbase.d0cdbeca.js";var e;(function(a){a.Attribute="attribute",a.Pseudo="pseudo",a.PseudoElement="pseudo-element",a.Tag="tag",a.Universal="universal",a.Adjacent="adjacent",a.Child="child",a.Descendant="descendant",a.Parent="parent",a.Sibling="sibling",a.ColumnCombinator="column-combinator"})(e||(e={}));const Q={Unknown:null,QuirksMode:"quirks",IgnoreCase:!0,CaseSensitive:!1};var s;(function(a){a.Any="any",a.Element="element",a.End="end",a.Equals="equals",a.Exists="exists",a.Hyphen="hyphen",a.Not="not",a.Start="start"})(s||(s={}));const N=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,z=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,L=new Map([[126,s.Element],[94,s.Start],[36,s.End],[42,s.Any],[33,s.Not],[124,s.Hyphen]]),B=new Set(["has","not","matches","is","where","host","host-context"]);function F(a){switch(a.type){case e.Adjacent:case e.Child:case e.Descendant:case e.Parent:case e.Sibling:case e.ColumnCombinator:return!0;default:return!1}}const G=new Set(["contains","icontains"]);function J(a,t,n){const i=parseInt(t,16)-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)}function d(a){return a.replace(z,J)}function b(a){return a===39||a===34}function j(a){return a===32||a===9||a===10||a===12||a===13}function K(a){const t=[],n=M(t,`${a}`,0);if(n<a.length)throw new Error(`Unmatched selector: ${a.slice(n)}`);return t}function M(a,t,n){let i=[];function c(h){const r=t.slice(n+h).match(N);if(!r)throw new Error(`Expected name, found ${t.slice(n)}`);const[u]=r;return n+=h+u.length,d(u)}function f(h){for(n+=h;n<t.length&&j(t.charCodeAt(n));)n++}function $(){n+=1;const h=n;let r=1;for(;r>0&&n<t.length;n++)t.charCodeAt(n)===40&&!l(n)?r++:t.charCodeAt(n)===41&&!l(n)&&r--;if(r)throw new Error("Parenthesis not matched");return d(t.slice(h,n-1))}function l(h){let r=0;for(;t.charCodeAt(--h)===92;)r++;return(r&1)===1}function v(){if(i.length>0&&F(i[i.length-1]))throw new Error("Did not expect successive traversals.")}function g(h){if(i.length>0&&i[i.length-1].type===e.Descendant){i[i.length-1].type=h;return}v(),i.push({type:h})}function y(h,r){i.push({type:e.Attribute,name:h,action:r,value:c(1),namespace:null,ignoreCase:"quirks"})}function P(){if(i.length&&i[i.length-1].type===e.Descendant&&i.pop(),i.length===0)throw new Error("Empty sub-selector");a.push(i)}if(f(0),t.length===n)return n;a:for(;n<t.length;){const h=t.charCodeAt(n);switch(h){case 32:case 9:case 10:case 12:case 13:{(i.length===0||i[0].type!==e.Descendant)&&(v(),i.push({type:e.Descendant})),f(1);break}case 62:{g(e.Child),f(1);break}case 60:{g(e.Parent),f(1);break}case 126:{g(e.Sibling),f(1);break}case 43:{g(e.Adjacent),f(1);break}case 46:{y("class",s.Element);break}case 35:{y("id",s.Equals);break}case 91:{f(1);let r,u=null;t.charCodeAt(n)===124?r=c(1):t.startsWith("*|",n)?(u="*",r=c(2)):(r=c(0),t.charCodeAt(n)===124&&t.charCodeAt(n+1)!==61&&(u=r,r=c(1))),f(0);let o=s.Exists;const S=L.get(t.charCodeAt(n));if(S){if(o=S,t.charCodeAt(n+1)!==61)throw new Error("Expected `=`");f(2)}else t.charCodeAt(n)===61&&(o=s.Equals,f(1));let A="",E=null;if(o!=="exists"){if(b(t.charCodeAt(n))){const w=t.charCodeAt(n);let C=n+1;for(;C<t.length&&(t.charCodeAt(C)!==w||l(C));)C+=1;if(t.charCodeAt(C)!==w)throw new Error("Attribute value didn't end");A=d(t.slice(n+1,C)),n=C+1}else{const w=n;for(;n<t.length&&(!j(t.charCodeAt(n))&&t.charCodeAt(n)!==93||l(n));)n+=1;A=d(t.slice(w,n))}f(0);const q=t.charCodeAt(n)|32;q===115?(E=!1,f(1)):q===105&&(E=!0,f(1))}if(t.charCodeAt(n)!==93)throw new Error("Attribute selector didn't terminate");n+=1;const H={type:e.Attribute,name:r,action:o,value:A,namespace:u,ignoreCase:E};i.push(H);break}case 58:{if(t.charCodeAt(n+1)===58){i.push({type:e.PseudoElement,name:c(2).toLowerCase(),data:t.charCodeAt(n)===40?$():null});continue}const r=c(1).toLowerCase();let u=null;if(t.charCodeAt(n)===40)if(B.has(r)){if(b(t.charCodeAt(n+1)))throw new Error(`Pseudo-selector ${r} cannot be quoted`);if(u=[],n=M(u,t,n+1),t.charCodeAt(n)!==41)throw new Error(`Missing closing parenthesis in :${r} (${t})`);n+=1}else{if(u=$(),G.has(r)){const o=u.charCodeAt(0);o===u.charCodeAt(u.length-1)&&b(o)&&(u=u.slice(1,-1))}u=d(u)}i.push({type:e.Pseudo,name:r,data:u});break}case 44:{P(),i=[],f(1);break}default:{if(t.startsWith("/*",n)){const o=t.indexOf("*/",n+2);if(o<0)throw new Error("Comment was not terminated");n=o+2,i.length===0&&f(0);break}let r=null,u;if(h===42)n+=1,u="*";else if(h===124){if(u="",t.charCodeAt(n+1)===124){g(e.ColumnCombinator),f(2);break}}else if(N.test(t.slice(n)))u=c(0);else break a;t.charCodeAt(n)===124&&t.charCodeAt(n+1)!==124&&(r=u,t.charCodeAt(n+1)===42?(u="*",n+=2):u=c(1)),i.push(u==="*"?{type:e.Universal,namespace:r}:{type:e.Tag,name:u,namespace:r})}}}return P(),n}const U=["\\",'"'],W=[...U,"(",")"],R=new Set(U.map(a=>a.charCodeAt(0))),D=new Set(W.map(a=>a.charCodeAt(0))),p=new Set([...W,"~","^","$","*","+","!","|",":","[","]"," ","."].map(a=>a.charCodeAt(0)));function _(a){return a.map(t=>t.map(X).join("")).join(", ")}function X(a,t,n){switch(a.type){case e.Child:return t===0?"> ":" > ";case e.Parent:return t===0?"< ":" < ";case e.Sibling:return t===0?"~ ":" ~ ";case e.Adjacent:return t===0?"+ ":" + ";case e.Descendant:return" ";case e.ColumnCombinator:return t===0?"|| ":" || ";case e.Universal:return a.namespace==="*"&&t+1<n.length&&"name"in n[t+1]?"":`${T(a.namespace)}*`;case e.Tag:return V(a);case e.PseudoElement:return`::${m(a.name,p)}${a.data===null?"":`(${m(a.data,D)})`}`;case e.Pseudo:return`:${m(a.name,p)}${a.data===null?"":`(${typeof a.data=="string"?m(a.data,D):_(a.data)})`}`;case e.Attribute:{if(a.name==="id"&&a.action===s.Equals&&a.ignoreCase==="quirks"&&!a.namespace)return`#${m(a.value,p)}`;if(a.name==="class"&&a.action===s.Element&&a.ignoreCase==="quirks"&&!a.namespace)return`.${m(a.value,p)}`;const i=V(a);return a.action===s.Exists?`[${i}]`:`[${i}${Y(a.action)}="${m(a.value,R)}"${a.ignoreCase===null?"":a.ignoreCase?" i":" s"}]`}}}function Y(a){switch(a){case s.Equals:return"";case s.Element:return"~";case s.Start:return"^";case s.End:return"$";case s.Any:return"*";case s.Not:return"!";case s.Hyphen:return"|";case s.Exists:throw new Error("Shouldn't be here")}}function V(a){return`${T(a.namespace)}${m(a.name,p)}`}function T(a){return a!==null?`${a==="*"?"*":m(a,p)}|`:""}function m(a,t){let n=0,i="";for(let c=0;c<a.length;c++)t.has(a.charCodeAt(c))&&(i+=`${a.slice(n,c)}\\${a.charAt(c)}`,n=c+1);return i.length>0?i+a.slice(n):a}const Z=Object.freeze(Object.defineProperty({__proto__:null,get AttributeAction(){return s},IgnoreCaseMode:Q,get SelectorType(){return e},isTraversal:F,parse:K,stringify:_},Symbol.toStringTag,{value:"Module"})),x=O(Z);export{x as r};