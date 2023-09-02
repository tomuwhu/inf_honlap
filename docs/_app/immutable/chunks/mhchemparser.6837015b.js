var S={};/*!
 *************************************************************************
 *
 *  mhchemParser.ts
 *  4.2.1
 *
 *  Parser for the \ce command and \pu command for MathJax and Co.
 *
 *  mhchem's \ce is a tool for writing beautiful chemical equations easily.
 *  mhchem's \pu is a tool for writing physical units easily.
 *
 *  ----------------------------------------------------------------------
 *
 *  Copyright (c) 2015-2023 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  ----------------------------------------------------------------------
 *
 *  https://github.com/mhchem/mhchemParser
 *
 */Object.defineProperty(S,"__esModule",{value:!0});S.mhchemParser=void 0;var A=function(){function t(){}return t.toTex=function(e,n){return p.go(o.go(e,n),n!=="tex")},t}();S.mhchemParser=A;function d(t){var e,n,a={};for(e in t)for(n in t[e]){var i=n.split("|");t[e][n].stateArray=i;for(var r=0;r<i.length;r++)a[i[r]]=[]}for(e in t)for(n in t[e])for(var i=t[e][n].stateArray||[],r=0;r<i.length;r++){var c=t[e][n];c.action_=[].concat(c.action_);for(var u=0;u<c.action_.length;u++)typeof c.action_[u]=="string"&&(c.action_[u]={type_:c.action_[u]});for(var s=e.split("|"),h=0;h<s.length;h++)if(i[r]==="*"){var m=void 0;for(m in a)a[m].push({pattern:s[h],task:c})}else a[i[r]].push({pattern:s[h],task:c})}return a}var o={go:function(t,e){if(!t)return[];e===void 0&&(e="ce");var n="0",a={};a.parenthesisLevel=0,t=t.replace(/\n/g," "),t=t.replace(/[\u2212\u2013\u2014\u2010]/g,"-"),t=t.replace(/[\u2026]/g,"...");for(var i,r=10,c=[];;){i!==t?(r=10,i=t):r--;var u=o.stateMachines[e],s=u.transitions[n]||u.transitions["*"];t:for(var h=0;h<s.length;h++){var m=o.patterns.match_(s[h].pattern,t);if(m){for(var l=s[h].task,_=0;_<l.action_.length;_++){var g=void 0;if(u.actions[l.action_[_].type_])g=u.actions[l.action_[_].type_](a,m.match_,l.action_[_].option);else if(o.actions[l.action_[_].type_])g=o.actions[l.action_[_].type_](a,m.match_,l.action_[_].option);else throw["MhchemBugA","mhchem bug A. Please report. ("+l.action_[_].type_+")"];o.concatArray(c,g)}if(n=l.nextState||n,t.length>0){if(l.revisit||(t=m.remainder),!l.toContinue)break t}else return c}}if(r<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.slice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/,"state of aggregation $":function(t){var e=o.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;var n=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return n?{match_:n[0],remainder:t.substr(n[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". __* ":/^([.\u22C5\u00B7\u2022]|[*])\s*/,"...":/^\.\.\.(?=$|[^.])/,"^{(...)}":function(t){return o.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return o.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return o.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return o.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return o.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return o.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return o.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return o.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}^":/^\{\}(?=\^)/,"{}":/^\{\}/,"{...}":function(t){return o.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return o.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return o.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$__$(...)$":function(t){return o.patterns.findObserveGroups(t,"${","","","}$")||o.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return o.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return o.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return o.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")||o.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\ce{","","","}")},"\\pu{(...)}":function(t){return o.patterns.findObserveGroups(t,"\\pu{","","","}")},oxidation$:/^(?:[+-][IVX]+|(?:\\pm|\$\\pm\$|\+-|\+\/-)\s*0)$/,"d-oxidation$":/^(?:[+-]?[IVX]+|(?:\\pm|\$\\pm\$|\+-|\+\/-)\s*0)$/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){var e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/),e)return{match_:e[0],remainder:t.substr(e[0].length)};var n=o.patterns.findObserveGroups(t,"","$","$","");return n&&(e=n.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/),e)?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;var e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,n,a,i,r,c,u,s,h){var m=function(v,x){if(typeof x=="string")return v.indexOf(x)!==0?null:x;var $=v.match(x);return $?$[0]:null},l=function(v,x,$){for(var y=0;x<v.length;){var w=v.charAt(x),z=m(v.substr(x),$);if(z!==null&&y===0)return{endMatchBegin:x,endMatchEnd:x+z.length};if(w==="{")y++;else if(w==="}"){if(y===0)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];y--}x++}return y>0,null},_=m(t,e);if(_===null||(t=t.substr(_.length),_=m(t,n),_===null))return null;var g=l(t,_.length,a||i);if(g===null)return null;var f=t.substring(0,a?g.endMatchEnd:g.endMatchBegin);if(r||c){var q=this.findObserveGroups(t.substr(g.endMatchEnd),r,c,u,s);if(q===null)return null;var k=[f,q.match_];return{match_:h?k.join(""):k,remainder:q.remainder}}else return{match_:f,remainder:t.substr(g.endMatchEnd)}},match_:function(t,e){var n=o.patterns.patterns[t];if(n===void 0)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if(typeof n=="function")return o.patterns.patterns[t](e);var a=e.match(n);return a?a.length>2?{match_:a.slice(1),remainder:e.substr(a[0].length)}:{match_:a[1]||a[0],remainder:e.substr(a[0].length)}:null}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"o=+p1":function(t,e,n){t.o=(t.o||"")+n},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,n){return{type_:n}},"insert+p1":function(t,e,n){return{type_:n,p1:e}},"insert+p1+p2":function(t,e,n){return{type_:n,p1:e[0],p2:e[1]}},copy:function(t,e){return e},write:function(t,e,n){return n},rm:function(t,e){return{type_:"rm",p1:e}},text:function(t,e){return o.go(e,"text")},"tex-math":function(t,e){return o.go(e,"tex-math")},"tex-math tight":function(t,e){return o.go(e,"tex-math tight")},bond:function(t,e,n){return{type_:"bond",kind_:n||e}},"color0-output":function(t,e){return{type_:"color0",color:e}},ce:function(t,e){return o.go(e,"ce")},pu:function(t,e){return o.go(e,"pu")},"1/2":function(t,e){var n=[];e.match(/^[+\-]/)&&(n.push(e.substr(0,1)),e=e.substr(1));var a=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return a[1]=a[1].replace(/\$/g,""),n.push({type_:"frac",p1:a[1],p2:a[2]}),a[3]&&(a[3]=a[3].replace(/\$/g,""),n.push({type_:"tex-math",p1:a[3]})),n},"9,9":function(t,e){return o.go(e,"9,9")}},stateMachines:{tex:{transitions:d({empty:{0:{action_:"copy"}},"\\ce{(...)}":{0:{action_:[{type_:"write",option:"{"},"ce",{type_:"write",option:"}"}]}},"\\pu{(...)}":{0:{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},else:{0:{action_:"copy"}}}),actions:{}},ce:{transitions:d({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},"-9":{"3|o":{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"3"}},"- orbital overlap":{o:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},d:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"}},"-":{"0|1|2":{action_:[{type_:"output",option:1},"beginsWithBond=true",{type_:"bond",option:"-"}],nextState:"3"},3:{action_:{type_:"bond",option:"-"}},a:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},as:{action_:[{type_:"output",option:2},{type_:"bond",option:"-"}],nextState:"3"},b:{action_:"b="},o:{action_:{type_:"- after o/d",option:!1},nextState:"2"},q:{action_:{type_:"- after o/d",option:!1},nextState:"2"},"d|qd|dq":{action_:{type_:"- after o/d",option:!0},nextState:"2"},"D|qD|p":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},amount2:{"1|3":{action_:"a=",nextState:"a"}},letters:{"0|1|2|3|a|as|b|p|bp|o":{action_:"o=",nextState:"o"},"q|dq":{action_:["output","o="],nextState:"o"},"d|D|qd|qD":{action_:"o after d",nextState:"o"}},digits:{o:{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},q:{action_:["output","o="],nextState:"o"},a:{action_:"o=",nextState:"o"}},"space A":{"b|p|bp":{action_:[]}},space:{a:{action_:[],nextState:"as"},0:{action_:"sb=false"},"1|2":{action_:"sb=true"},"r|rt|rd|rdt|rdq":{action_:"output",nextState:"0"},"*":{action_:["output","sb=true"],nextState:"1"}},"1st-level escape":{"1|2":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}]},"*":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}],nextState:"0"}},"[(...)]":{"r|rt":{action_:"rd=",nextState:"rd"},"rd|rdt":{action_:"rq=",nextState:"rdq"}},"...":{"o|d|D|dq|qd|qD":{action_:["output",{type_:"bond",option:"..."}],nextState:"3"},"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"ellipsis"}],nextState:"1"}},". __* ":{"*":{action_:["output",{type_:"insert",option:"addition compound"}],nextState:"1"}},"state of aggregation $":{"*":{action_:["output","state of aggregation"],nextState:"1"}},"{[(":{"a|as|o":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"0|1|2|3":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"*":{action_:["output","o=","output","parenthesisLevel++"],nextState:"2"}},")]}":{"0|1|2|3|b|p|bp|o":{action_:["o=","parenthesisLevel--"],nextState:"o"},"a|as|d|D|q|qd|qD|dq":{action_:["output","o=","parenthesisLevel--"],nextState:"o"}},", ":{"*":{action_:["output","comma"],nextState:"0"}},"^_":{"*":{action_:[]}},"^{(...)}|^($...$)":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"D"},q:{action_:"d=",nextState:"qD"},"d|D|qd|qD|dq":{action_:["output","d="],nextState:"D"}},"^a|^\\x{}{}|^\\x{}|^\\x|'":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"d"},q:{action_:"d=",nextState:"qd"},"d|qd|D|qD":{action_:"d="},dq:{action_:["output","d="],nextState:"d"}},"_{(state of aggregation)}$":{"d|D|q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x":{"0|1|2|as":{action_:"p=",nextState:"p"},b:{action_:"p=",nextState:"bp"},"3|o":{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},"q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"=<>":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"#":{"0|1|2|3|a|as|o":{action_:[{type_:"output",option:2},{type_:"bond",option:"#"}],nextState:"3"}},"{}^":{"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"tinySkip"}],nextState:"1"}},"{}":{"*":{action_:{type_:"output",option:1},nextState:"1"}},"{...}":{"0|1|2|3|a|as|b|p|bp":{action_:"o=",nextState:"o"},"o|d|D|q|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"$...$":{a:{action_:"a="},"0|1|2|3|as|b|p|bp|o":{action_:"o=",nextState:"o"},"as|o":{action_:"o="},"q|d|D|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"\\bond{(...)}":{"*":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"\\frac{(...)}":{"*":{action_:[{type_:"output",option:1},"frac-output"],nextState:"3"}},"\\overset{(...)}":{"*":{action_:[{type_:"output",option:2},"overset-output"],nextState:"3"}},"\\underset{(...)}":{"*":{action_:[{type_:"output",option:2},"underset-output"],nextState:"3"}},"\\underbrace{(...)}":{"*":{action_:[{type_:"output",option:2},"underbrace-output"],nextState:"3"}},"\\color{(...)}{(...)}":{"*":{action_:[{type_:"output",option:2},"color-output"],nextState:"3"}},"\\color{(...)}":{"*":{action_:[{type_:"output",option:2},"color0-output"]}},"\\ce{(...)}":{"*":{action_:[{type_:"output",option:2},"ce"],nextState:"3"}},"\\,":{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"1"}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}],nextState:"3"}},"\\x{}{}|\\x{}|\\x":{"0|1|2|3|a|as|b|p|bp|o|c0":{action_:["o=","output"],nextState:"3"},"*":{action_:["output","o=","output"],nextState:"3"}},others:{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"3"}},else2:{a:{action_:"a to o",nextState:"o",revisit:!0},as:{action_:["output","sb=true"],nextState:"1",revisit:!0},"r|rt|rd|rdt|rdq":{action_:["output"],nextState:"0",revisit:!0},"*":{action_:["output","copy"],nextState:"3"}}}),actions:{"o after d":function(t,e){var n;if((t.d||"").match(/^[1-9][0-9]*$/)){var a=t.d;t.d=void 0,n=this.output(t),n.push({type_:"tinySkip"}),t.b=a}else n=this.output(t);return o.actions["o="](t,e),n},"d= kv":function(t,e){t.d=e,t.dType="kv"},"charge or bond":function(t,e){if(t.beginsWithBond){var n=[];return o.concatArray(n,this.output(t)),o.concatArray(n,o.actions.bond(t,e,"-")),n}else{t.d=e;return}},"- after o/d":function(t,e,n){var a=o.patterns.match_("orbital",t.o||""),i=o.patterns.match_("one lowercase greek letter $",t.o||""),r=o.patterns.match_("one lowercase latin letter $",t.o||""),c=o.patterns.match_("$one lowercase latin letter$ $",t.o||""),u=e==="-"&&(a&&a.remainder===""||i||r||c);u&&!t.a&&!t.b&&!t.p&&!t.d&&!t.q&&!a&&r&&(t.o="$"+t.o+"$");var s=[];return u?(o.concatArray(s,this.output(t)),s.push({type_:"hyphen"})):(a=o.patterns.match_("digits",t.d||""),n&&a&&a.remainder===""?(o.concatArray(s,o.actions["d="](t,e)),o.concatArray(s,this.output(t))):(o.concatArray(s,this.output(t)),o.concatArray(s,o.actions.bond(t,e,"-")))),s},"a to o":function(t){t.o=t.a,t.a=void 0},"sb=true":function(t){t.sb=!0},"sb=false":function(t){t.sb=!1},"beginsWithBond=true":function(t){t.beginsWithBond=!0},"beginsWithBond=false":function(t){t.beginsWithBond=!1},"parenthesisLevel++":function(t){t.parenthesisLevel++},"parenthesisLevel--":function(t){t.parenthesisLevel--},"state of aggregation":function(t,e){return{type_:"state of aggregation",p1:o.go(e,"o")}},comma:function(t,e){var n=e.replace(/\s*$/,""),a=n!==e;return a&&t.parenthesisLevel===0?{type_:"comma enumeration L",p1:n}:{type_:"comma enumeration M",p1:n}},output:function(t,e,n){var a;if(!t.r)a=[],!t.a&&!t.b&&!t.p&&!t.o&&!t.q&&!t.d&&!n||(t.sb&&a.push({type_:"entitySkip"}),!t.o&&!t.q&&!t.d&&!t.b&&!t.p&&n!==2?(t.o=t.a,t.a=void 0):!t.o&&!t.q&&!t.d&&(t.b||t.p)?(t.o=t.a,t.d=t.b,t.q=t.p,t.a=t.b=t.p=void 0):t.o&&t.dType==="kv"&&o.patterns.match_("d-oxidation$",t.d||"")?t.dType="oxidation":t.o&&t.dType==="kv"&&!t.q&&(t.dType=void 0),a.push({type_:"chemfive",a:o.go(t.a,"a"),b:o.go(t.b,"bd"),p:o.go(t.p,"pq"),o:o.go(t.o,"o"),q:o.go(t.q,"pq"),d:o.go(t.d,t.dType==="oxidation"?"oxidation":"bd"),dType:t.dType}));else{var i=void 0;t.rdt==="M"?i=o.go(t.rd,"tex-math"):t.rdt==="T"?i=[{type_:"text",p1:t.rd||""}]:i=o.go(t.rd,"ce");var r=void 0;t.rqt==="M"?r=o.go(t.rq,"tex-math"):t.rqt==="T"?r=[{type_:"text",p1:t.rq||""}]:r=o.go(t.rq,"ce"),a={type_:"arrow",r:t.r,rd:i,rq:r}}for(var c in t)c!=="parenthesisLevel"&&c!=="beginsWithBond"&&delete t[c];return a},"oxidation-output":function(t,e){var n=["{"];return o.concatArray(n,o.go(e,"oxidation")),n.push("}"),n},"frac-output":function(t,e){return{type_:"frac-ce",p1:o.go(e[0],"ce"),p2:o.go(e[1],"ce")}},"overset-output":function(t,e){return{type_:"overset",p1:o.go(e[0],"ce"),p2:o.go(e[1],"ce")}},"underset-output":function(t,e){return{type_:"underset",p1:o.go(e[0],"ce"),p2:o.go(e[1],"ce")}},"underbrace-output":function(t,e){return{type_:"underbrace",p1:o.go(e[0],"ce"),p2:o.go(e[1],"ce")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:o.go(e[1],"ce")}},"r=":function(t,e){t.r=e},"rdt=":function(t,e){t.rdt=e},"rd=":function(t,e){t.rd=e},"rqt=":function(t,e){t.rqt=e},"rq=":function(t,e){t.rq=e},operator:function(t,e,n){return{type_:"operator",kind_:n||e}}}},a:{transitions:d({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math tight",nextState:"1"}},",":{"*":{action_:{type_:"insert",option:"commaDecimal"}}},else2:{"*":{action_:"copy"}}}),actions:{}},o:{transitions:d({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},letters:{"*":{action_:"rm"}},"\\ca":{"*":{action_:{type_:"insert",option:"circa"}}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:[{type_:"write",option:"{"},"text",{type_:"write",option:"}"}]}},else2:{"*":{action_:"copy"}}}),actions:{}},text:{transitions:d({empty:{"*":{action_:"output"}},"{...}":{"*":{action_:"text="}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"\\greek":{"*":{action_:["output","rm"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:["output","copy"]}},else:{"*":{action_:"text="}}}),actions:{output:function(t){if(t.text_){var e={type_:"text",p1:t.text_};for(var n in t)delete t[n];return e}}}},pq:{transitions:d({empty:{"*":{action_:[]}},"state of aggregation $":{"*":{action_:"state of aggregation"}},i$:{0:{action_:[],nextState:"!f",revisit:!0}},"(KV letters),":{0:{action_:"rm",nextState:"0"}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"a-z":{f:{action_:"tex-math"}},letters:{"*":{action_:"rm"}},"-9.,9":{"*":{action_:"9,9"}},",":{"*":{action_:{type_:"insert+p1",option:"comma enumeration S"}}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"state of aggregation":function(t,e){return{type_:"state of aggregation subscript",p1:o.go(e,"o")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:o.go(e[1],"pq")}}}},bd:{transitions:d({empty:{"*":{action_:[]}},x$:{0:{action_:[],nextState:"!f",revisit:!0}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"-9.,9 no missing 0":{"*":{action_:"9,9"}},".":{"*":{action_:{type_:"insert",option:"electron dot"}}},"a-z":{f:{action_:"tex-math"}},x:{"*":{action_:{type_:"insert",option:"KV x"}}},letters:{"*":{action_:"rm"}},"'":{"*":{action_:{type_:"insert",option:"prime"}}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"color-output":function(t,e){return{type_:"color",color1:e[0],color2:o.go(e[1],"bd")}}}},oxidation:{transitions:d({empty:{"*":{action_:"roman-numeral"}},"pm-operator":{"*":{action_:{type_:"o=+p1",option:"\\pm"}}},else:{"*":{action_:"o="}}}),actions:{"roman-numeral":function(t){return{type_:"roman numeral",p1:t.o||""}}}},"tex-math":{transitions:d({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},else:{"*":{action_:"o="}}}),actions:{output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var n in t)delete t[n];return e}}}},"tex-math tight":{transitions:d({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},"-|+":{"*":{action_:"tight operator"}},else:{"*":{action_:"o="}}}),actions:{"tight operator":function(t,e){t.o=(t.o||"")+"{"+e+"}"},output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var n in t)delete t[n];return e}}}},"9,9":{transitions:d({empty:{"*":{action_:[]}},",":{"*":{action_:"comma"}},else:{"*":{action_:"copy"}}}),actions:{comma:function(){return{type_:"commaDecimal"}}}},pu:{transitions:d({empty:{"*":{action_:"output"}},space$:{"*":{action_:["output","space"]}},"{[(|)]}":{"0|a":{action_:"copy"}},"(-)(9)^(-9)":{0:{action_:"number^",nextState:"a"}},"(-)(9.,9)(e)(99)":{0:{action_:"enumber",nextState:"a"}},space:{"0|a":{action_:[]}},"pm-operator":{"0|a":{action_:{type_:"operator",option:"\\pm"},nextState:"0"}},operator:{"0|a":{action_:"copy",nextState:"0"}},"//":{d:{action_:"o=",nextState:"/"}},"/":{d:{action_:"o=",nextState:"/"}},"{...}|else":{"0|d":{action_:"d=",nextState:"d"},a:{action_:["space","d="],nextState:"d"},"/|q":{action_:"q=",nextState:"q"}}}),actions:{enumber:function(t,e){var n=[];return e[0]==="+-"||e[0]==="+/-"?n.push("\\pm "):e[0]&&n.push(e[0]),e[1]&&(o.concatArray(n,o.go(e[1],"pu-9,9")),e[2]&&(e[2].match(/[,.]/)?o.concatArray(n,o.go(e[2],"pu-9,9")):n.push(e[2])),(e[3]||e[4])&&(e[3]==="e"||e[4]==="*"?n.push({type_:"cdot"}):n.push({type_:"times"}))),e[5]&&n.push("10^{"+e[5]+"}"),n},"number^":function(t,e){var n=[];return e[0]==="+-"||e[0]==="+/-"?n.push("\\pm "):e[0]&&n.push(e[0]),o.concatArray(n,o.go(e[1],"pu-9,9")),n.push("^{"+e[2]+"}"),n},operator:function(t,e,n){return{type_:"operator",kind_:n||e}},space:function(){return{type_:"pu-space-1"}},output:function(t){var e,n=o.patterns.match_("{(...)}",t.d||"");n&&n.remainder===""&&(t.d=n.match_);var a=o.patterns.match_("{(...)}",t.q||"");if(a&&a.remainder===""&&(t.q=a.match_),t.d&&(t.d=t.d.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.d=t.d.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F")),t.q){t.q=t.q.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.q=t.q.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F");var i={d:o.go(t.d,"pu"),q:o.go(t.q,"pu")};t.o==="//"?e={type_:"pu-frac",p1:i.d,p2:i.q}:(e=i.d,i.d.length>1||i.q.length>1?e.push({type_:" / "}):e.push({type_:"/"}),o.concatArray(e,i.q))}else e=o.go(t.d,"pu-2");for(var r in t)delete t[r];return e}}},"pu-2":{transitions:d({empty:{"*":{action_:"output"}},"*":{"*":{action_:["output","cdot"],nextState:"0"}},"\\x":{"*":{action_:"rm="}},space:{"*":{action_:["output","space"],nextState:"0"}},"^{(...)}|^(-1)":{1:{action_:"^(-1)"}},"-9.,9":{0:{action_:"rm=",nextState:"0"},1:{action_:"^(-1)",nextState:"0"}},"{...}|else":{"*":{action_:"rm=",nextState:"1"}}}),actions:{cdot:function(){return{type_:"tight cdot"}},"^(-1)":function(t,e){t.rm+="^{"+e+"}"},space:function(){return{type_:"pu-space-2"}},output:function(t){var e=[];if(t.rm){var n=o.patterns.match_("{(...)}",t.rm||"");n&&n.remainder===""?e=o.go(n.match_,"pu"):e={type_:"rm",p1:t.rm}}for(var a in t)delete t[a];return e}}},"pu-9,9":{transitions:d({empty:{0:{action_:"output-0"},o:{action_:"output-o"}},",":{0:{action_:["output-0","comma"],nextState:"o"}},".":{0:{action_:["output-0","copy"],nextState:"o"}},else:{"*":{action_:"text="}}}),actions:{comma:function(){return{type_:"commaDecimal"}},"output-0":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var n=t.text_.length%3;n===0&&(n=3);for(var a=t.text_.length-3;a>0;a-=3)e.push(t.text_.substr(a,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(0,n)),e.reverse()}else e.push(t.text_);for(var i in t)delete t[i];return e},"output-o":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var n=t.text_.length-3,a=void 0;for(a=0;a<n;a+=3)e.push(t.text_.substr(a,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(a))}else e.push(t.text_);for(var i in t)delete t[i];return e}}}}},p={go:function(t,e){if(!t)return"";for(var n="",a=!1,i=0;i<t.length;i++){var r=t[i];typeof r=="string"?n+=r:(n+=p._go2(r),r.type_==="1st-level escape"&&(a=!0))}return e&&!a&&n&&(n="{"+n+"}"),n},_goInner:function(t){return p.go(t,!1)},_go2:function(t){var e;switch(t.type_){case"chemfive":e="";var n={a:p._goInner(t.a),b:p._goInner(t.b),p:p._goInner(t.p),o:p._goInner(t.o),q:p._goInner(t.q),d:p._goInner(t.d)};n.a&&(n.a.match(/^[+\-]/)&&(n.a="{"+n.a+"}"),e+=n.a+"\\,"),(n.b||n.p)&&(e+="{\\vphantom{A}}",e+="^{\\hphantom{"+(n.b||"")+"}}_{\\hphantom{"+(n.p||"")+"}}",e+="\\mkern-1.5mu",e+="{\\vphantom{A}}",e+="^{\\smash[t]{\\vphantom{2}}\\llap{"+(n.b||"")+"}}",e+="_{\\vphantom{2}\\llap{\\smash[t]{"+(n.p||"")+"}}}"),n.o&&(n.o.match(/^[+\-]/)&&(n.o="{"+n.o+"}"),e+=n.o),t.dType==="kv"?((n.d||n.q)&&(e+="{\\vphantom{A}}"),n.d&&(e+="^{"+n.d+"}"),n.q&&(e+="_{\\smash[t]{"+n.q+"}}")):t.dType==="oxidation"?(n.d&&(e+="{\\vphantom{A}}",e+="^{"+n.d+"}"),n.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+n.q+"}}")):(n.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+n.q+"}}"),n.d&&(e+="{\\vphantom{A}}",e+="^{"+n.d+"}"));break;case"rm":e="\\mathrm{"+t.p1+"}";break;case"text":t.p1.match(/[\^_]/)?(t.p1=t.p1.replace(" ","~").replace("-","\\text{-}"),e="\\mathrm{"+t.p1+"}"):e="\\text{"+t.p1+"}";break;case"roman numeral":e="\\mathrm{"+t.p1+"}";break;case"state of aggregation":e="\\mskip2mu "+p._goInner(t.p1);break;case"state of aggregation subscript":e="\\mskip1mu "+p._goInner(t.p1);break;case"bond":if(e=p._getBond(t.kind_),!e)throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+t.kind_+")"];break;case"frac":var a="\\frac{"+t.p1+"}{"+t.p2+"}";e="\\mathchoice{\\textstyle"+a+"}{"+a+"}{"+a+"}{"+a+"}";break;case"pu-frac":var i="\\frac{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";e="\\mathchoice{\\textstyle"+i+"}{"+i+"}{"+i+"}{"+i+"}";break;case"tex-math":e=t.p1+" ";break;case"frac-ce":e="\\frac{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"overset":e="\\overset{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"underset":e="\\underset{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"underbrace":e="\\underbrace{"+p._goInner(t.p1)+"}_{"+p._goInner(t.p2)+"}";break;case"color":e="{\\color{"+t.color1+"}{"+p._goInner(t.color2)+"}}";break;case"color0":e="\\color{"+t.color+"}";break;case"arrow":var r={rd:p._goInner(t.rd),rq:p._goInner(t.rq)},c=p._getArrow(t.r);r.rd||r.rq?t.r==="<=>"||t.r==="<=>>"||t.r==="<<=>"||t.r==="<-->"?(c="\\long"+c,r.rd&&(c="\\overset{"+r.rd+"}{"+c+"}"),r.rq&&(t.r==="<-->"?c="\\underset{\\lower2mu{"+r.rq+"}}{"+c+"}":c="\\underset{\\lower6mu{"+r.rq+"}}{"+c+"}"),c=" {}\\mathrel{"+c+"}{} "):(r.rq&&(c+="[{"+r.rq+"}]"),c+="{"+r.rd+"}",c=" {}\\mathrel{\\x"+c+"}{} "):c=" {}\\mathrel{\\long"+c+"}{} ",e=c;break;case"operator":e=p._getOperator(t.kind_);break;case"1st-level escape":e=t.p1+" ";break;case"space":e=" ";break;case"tinySkip":e="\\mkern2mu";break;case"entitySkip":e="~";break;case"pu-space-1":e="~";break;case"pu-space-2":e="\\mkern3mu ";break;case"1000 separator":e="\\mkern2mu ";break;case"commaDecimal":e="{,}";break;case"comma enumeration L":e="{"+t.p1+"}\\mkern6mu ";break;case"comma enumeration M":e="{"+t.p1+"}\\mkern3mu ";break;case"comma enumeration S":e="{"+t.p1+"}\\mkern1mu ";break;case"hyphen":e="\\text{-}";break;case"addition compound":e="\\,{\\cdot}\\,";break;case"electron dot":e="\\mkern1mu \\bullet\\mkern1mu ";break;case"KV x":e="{\\times}";break;case"prime":e="\\prime ";break;case"cdot":e="\\cdot ";break;case"tight cdot":e="\\mkern1mu{\\cdot}\\mkern1mu ";break;case"times":e="\\times ";break;case"circa":e="{\\sim}";break;case"^":e="uparrow";break;case"v":e="downarrow";break;case"ellipsis":e="\\ldots ";break;case"/":e="/";break;case" / ":e="\\,/\\,";break;default:throw["MhchemBugT","mhchem bug T. Please report."]}return e},_getArrow:function(t){switch(t){case"->":return"rightarrow";case"→":return"rightarrow";case"⟶":return"rightarrow";case"<-":return"leftarrow";case"<->":return"leftrightarrow";case"<-->":return"leftrightarrows";case"<=>":return"rightleftharpoons";case"⇌":return"rightleftharpoons";case"<=>>":return"Rightleftharpoons";case"<<=>":return"Leftrightharpoons";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getBond:function(t){switch(t){case"-":return"{-}";case"1":return"{-}";case"=":return"{=}";case"2":return"{=}";case"#":return"{\\equiv}";case"3":return"{\\equiv}";case"~":return"{\\tripledash}";case"~-":return"{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";case"~=":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";case"~--":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";case"-~-":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";case"...":return"{{\\cdot}{\\cdot}{\\cdot}}";case"....":return"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";case"->":return"{\\rightarrow}";case"<-":return"{\\leftarrow}";case"<":return"{<}";case">":return"{>}";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getOperator:function(t){switch(t){case"+":return" {}+{} ";case"-":return" {}-{} ";case"=":return" {}={} ";case"<":return" {}<{} ";case">":return" {}>{} ";case"<<":return" {}\\ll{} ";case">>":return" {}\\gg{} ";case"\\pm":return" {}\\pm{} ";case"\\approx":return" {}\\approx{} ";case"$\\approx$":return" {}\\approx{} ";case"v":return" \\downarrow{} ";case"(v)":return" \\downarrow{} ";case"^":return" \\uparrow{} ";case"(^)":return" \\uparrow{} ";default:throw["MhchemBugT","mhchem bug T. Please report."]}}};export{S as m};