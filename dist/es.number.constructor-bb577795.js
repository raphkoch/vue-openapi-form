"use strict";var r=require("./entry-aa0d1f47.js"),t=require("./object-create-6302320b.js"),e=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(r){}return function(n,o){return r.b(n),function(t){if(!r.u(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(o),e?t.call(n,o):n.__proto__=o,n}}():void 0),n=function(t,n,o){var a,i;return e&&"function"==typeof(a=n.constructor)&&a!==o&&r.u(i=a.prototype)&&i!==o.prototype&&e(t,i),t},o="[\t\n\v\f\r                　\u2028\u2029\ufeff]",a=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r.q(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(i,"")),n}},u={start:c(1),end:c(2),trim:c(3)},f=r.C.f,s=r.D.f,p=r.o.f,N=u.trim,l=r.x.Number,_=l.prototype,I="Number"==r.y(t.o(_)),y=function(t){var e,n,o,a,i,c,u,f,s=r.F(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=N(s)).charCodeAt(0))||45===e){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+s}for(c=(i=s.slice(2)).length,u=0;u<c;u++)if((f=i.charCodeAt(u))<48||f>a)return NaN;return parseInt(i,o)}return+s};if(r.z("Number",!l(" 0o1")||!l("0b1")||l("+0x1"))){for(var E,g=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof g&&(I?r.E((function(){_.valueOf.call(o)})):"Number"!=r.y(o))?n(new l(y(e)),o,g):y(e)},b=r.d?f(l):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;b.length>A;A++)r.A(l,E=b[A])&&!r.A(g,E)&&p(g,E,s(l,E));g.prototype=_,_.constructor=g,r.B(r.x,"Number",g)}