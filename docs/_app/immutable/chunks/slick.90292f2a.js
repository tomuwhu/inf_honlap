var L=/([-.*+?^${}()|[\]\/\\])/g,P=/\\/g,h=function(i){return(i+"").replace(L,"\\$1")},a=function(i){return(i+"").replace(P,"")},Q=RegExp(`^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:(["']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:(["'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)`.replace(/<combinator>/,"["+h(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),F=function(n){this.combinator=n||" ",this.tag="*"};F.prototype.toString=function(){if(!this.raw){var i="",n,t;if(i+=this.tag||"*",this.id&&(i+="#"+this.id),this.classes&&(i+="."+this.classList.join(".")),this.attributes)for(n=0;t=this.attributes[n++];)i+="["+t.name+(t.operator?t.operator+'"'+t.value+'"':"")+"]";if(this.pseudos)for(n=0;t=this.pseudos[n++];)i+=":"+t.name,t.value&&(i+="("+t.value+")");this.raw=i}return this.raw};var E=function(){this.length=0};E.prototype.toString=function(){if(!this.raw){for(var i="",n=0,t;t=this[n++];)n!==1&&(i+=" "),t.combinator!==" "&&(i+=t.combinator+" "),i+=t;this.raw=i}return this.raw};var j=function(i,n,t,f,o,w,u,l,R,q,s,y,v,z,S,c){var r,e;if((n||!this.length)&&(r=this[this.length++]=new E,n))return"";if(r||(r=this[this.length-1]),(t||f||!r.length)&&(e=r[r.length++]=new F(t)),e||(e=r[r.length-1]),o)e.tag=a(o);else if(w)e.id=a(w);else if(u){var g=a(u),d=e.classes||(e.classes={});if(!d[g]){d[g]=h(u);var p=e.classList||(e.classList=[]);p.push(g),p.sort()}}else v?(c=c||S,(e.pseudos||(e.pseudos=[])).push({type:y.length==1?"class":"element",name:a(v),escapedName:h(v),value:c?a(c):null,escapedValue:c?h(c):null})):l&&(s=s?h(s):null,(e.attributes||(e.attributes=[])).push({operator:R,name:a(l),escapedName:h(l),value:s?a(s):null,escapedValue:s?h(s):null}));return""},$=function(n){this.length=0;for(var t=this,f=n,o;n;){if(o=n.replace(Q,function(){return j.apply(t,arguments)}),o===n)throw new Error(f+" is an invalid expression");n=o}};$.prototype.toString=function(){if(!this.raw){for(var i=[],n=0,t;t=this[n++];)i.push(t);this.raw=i.join(", ")}return this.raw};var m={},M=function(i){return i==null?null:(i=(""+i).replace(/^\s+|\s+$/g,""),m[i]||(m[i]=new $(i)))},A=M;export{A as p};
