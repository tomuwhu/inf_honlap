var a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e){if(e.__esModule)return e;var o=e.default;if(typeof o=="function"){var t=function r(){return this instanceof r?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};t.prototype=o.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var u=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,u.get?u:{enumerable:!0,get:function(){return e[r]}})}),t}var n,f;function c(){return f||(f=1,n={trueFunc:function(){return!0},falseFunc:function(){return!1}}),n}export{s as a,a as c,l as g,c as r};