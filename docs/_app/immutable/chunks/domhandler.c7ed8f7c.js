import{c as m}from"./boolbase.d0cdbeca.js";import{r as L}from"./domelementtype.56ff57a0.js";var D={},o={},S;function A(){if(S)return o;S=1;var d=m&&m.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,s){a.__proto__=s}||function(a,s){for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(a[p]=s[p])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function a(){this.constructor=t}t.prototype=n===null?Object.create(n):(a.prototype=n.prototype,new a)}}(),y=m&&m.__assign||function(){return y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},y.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.cloneNode=o.hasChildren=o.isDocument=o.isDirective=o.isComment=o.isText=o.isCDATA=o.isTag=o.Element=o.Document=o.NodeWithChildren=o.ProcessingInstruction=o.Comment=o.Text=o.DataNode=o.Node=void 0;var c=L(),b=new Map([[c.ElementType.Tag,1],[c.ElementType.Script,1],[c.ElementType.Style,1],[c.ElementType.Directive,1],[c.ElementType.Text,3],[c.ElementType.CDATA,4],[c.ElementType.Comment,8],[c.ElementType.Root,9]]),h=function(){function e(t){this.type=t,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var t;return(t=b.get(this.type))!==null&&t!==void 0?t:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),E(this,t)},e}();o.Node=h;var v=function(e){d(t,e);function t(n,a){var s=e.call(this,n)||this;return s.data=a,s}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),t}(h);o.DataNode=v;var x=function(e){d(t,e);function t(n){return e.call(this,c.ElementType.Text,n)||this}return t}(v);o.Text=x;var T=function(e){d(t,e);function t(n){return e.call(this,c.ElementType.Comment,n)||this}return t}(v);o.Comment=T;var u=function(e){d(t,e);function t(n,a){var s=e.call(this,c.ElementType.Directive,a)||this;return s.name=n,s}return t}(v);o.ProcessingInstruction=u;var r=function(e){d(t,e);function t(n,a){var s=e.call(this,n)||this;return s.children=a,s}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),t}(h);o.NodeWithChildren=r;var i=function(e){d(t,e);function t(n){return e.call(this,c.ElementType.Root,n)||this}return t}(r);o.Document=i;var l=function(e){d(t,e);function t(n,a,s,p){s===void 0&&(s=[]),p===void 0&&(p=n==="script"?c.ElementType.Script:n==="style"?c.ElementType.Style:c.ElementType.Tag);var g=e.call(this,p,s)||this;return g.name=n,g.attribs=a,g}return Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(a){var s,p;return{name:a,value:n.attribs[a],namespace:(s=n["x-attribsNamespace"])===null||s===void 0?void 0:s[a],prefix:(p=n["x-attribsPrefix"])===null||p===void 0?void 0:p[a]}})},enumerable:!1,configurable:!0}),t}(r);o.Element=l;function f(e){return(0,c.isTag)(e)}o.isTag=f;function O(e){return e.type===c.ElementType.CDATA}o.isCDATA=O;function _(e){return e.type===c.ElementType.Text}o.isText=_;function I(e){return e.type===c.ElementType.Comment}o.isComment=I;function P(e){return e.type===c.ElementType.Directive}o.isDirective=P;function j(e){return e.type===c.ElementType.Root}o.isDocument=j;function M(e){return Object.prototype.hasOwnProperty.call(e,"children")}o.hasChildren=M;function E(e,t){t===void 0&&(t=!1);var n;if(_(e))n=new x(e.data);else if(I(e))n=new T(e.data);else if(f(e)){var a=t?C(e.children):[],s=new l(e.name,y({},e.attribs),a);a.forEach(function(q){return q.parent=s}),e.namespace!=null&&(s.namespace=e.namespace),e["x-attribsNamespace"]&&(s["x-attribsNamespace"]=y({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(s["x-attribsPrefix"]=y({},e["x-attribsPrefix"])),n=s}else if(O(e)){var a=t?C(e.children):[],p=new r(c.ElementType.CDATA,a);a.forEach(function(w){return w.parent=p}),n=p}else if(j(e)){var a=t?C(e.children):[],g=new i(a);a.forEach(function(w){return w.parent=g}),e["x-mode"]&&(g["x-mode"]=e["x-mode"]),n=g}else if(P(e)){var N=new u(e.name,e.data);e["x-name"]!=null&&(N["x-name"]=e["x-name"],N["x-publicId"]=e["x-publicId"],N["x-systemId"]=e["x-systemId"]),n=N}else throw new Error("Not implemented yet: ".concat(e.type));return n.startIndex=e.startIndex,n.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(n.sourceCodeLocation=e.sourceCodeLocation),n}o.cloneNode=E;function C(e){for(var t=e.map(function(a){return E(a,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}return o}var W;function z(){return W||(W=1,function(d){var y=m&&m.__createBinding||(Object.create?function(u,r,i,l){l===void 0&&(l=i);var f=Object.getOwnPropertyDescriptor(r,i);(!f||("get"in f?!r.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(u,l,f)}:function(u,r,i,l){l===void 0&&(l=i),u[l]=r[i]}),c=m&&m.__exportStar||function(u,r){for(var i in u)i!=="default"&&!Object.prototype.hasOwnProperty.call(r,i)&&y(r,u,i)};Object.defineProperty(d,"__esModule",{value:!0}),d.DomHandler=void 0;var b=L(),h=A();c(A(),d);var v=/\s+/g,x={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1,xmlMode:!1},T=function(){function u(r,i,l){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof i=="function"&&(l=i,i=x),typeof r=="object"&&(i=r,r=void 0),this.callback=r??null,this.options=i??x,this.elementCB=l??null}return u.prototype.onparserinit=function(r){this.parser=r},u.prototype.onreset=function(){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},u.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},u.prototype.onerror=function(r){this.handleCallback(r)},u.prototype.onclosetag=function(){this.lastNode=null;var r=this.tagStack.pop();this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(r)},u.prototype.onopentag=function(r,i){var l=this.options.xmlMode?b.ElementType.Tag:void 0,f=new h.Element(r,i,void 0,l);this.addNode(f),this.tagStack.push(f)},u.prototype.ontext=function(r){var i=this.options.normalizeWhitespace,l=this.lastNode;if(l&&l.type===b.ElementType.Text)i?l.data=(l.data+r).replace(v," "):l.data+=r,this.options.withEndIndices&&(l.endIndex=this.parser.endIndex);else{i&&(r=r.replace(v," "));var f=new h.Text(r);this.addNode(f),this.lastNode=f}},u.prototype.oncomment=function(r){if(this.lastNode&&this.lastNode.type===b.ElementType.Comment){this.lastNode.data+=r;return}var i=new h.Comment(r);this.addNode(i),this.lastNode=i},u.prototype.oncommentend=function(){this.lastNode=null},u.prototype.oncdatastart=function(){var r=new h.Text(""),i=new h.NodeWithChildren(b.ElementType.CDATA,[r]);this.addNode(i),r.parent=i,this.lastNode=r},u.prototype.oncdataend=function(){this.lastNode=null},u.prototype.onprocessinginstruction=function(r,i){var l=new h.ProcessingInstruction(r,i);this.addNode(l)},u.prototype.handleCallback=function(r){if(typeof this.callback=="function")this.callback(r,this.dom);else if(r)throw r},u.prototype.addNode=function(r){var i=this.tagStack[this.tagStack.length-1],l=i.children[i.children.length-1];this.options.withStartIndices&&(r.startIndex=this.parser.startIndex),this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),i.children.push(r),l&&(r.prev=l,l.next=r),r.parent=i,this.lastNode=null},u}();d.DomHandler=T,d.default=T}(D)),D}export{z as r};
