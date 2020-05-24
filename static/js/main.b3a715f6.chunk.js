(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),s=a(4),l=a(6),i=a.n(l),m=a(10),u=a(3),_=a(2),d=(a(31),a(32),a(33),function(e){var t=e.links;return c.a.createElement("nav",{className:"Nav"},c.a.createElement("ul",{className:"Nav__List"},t.map((function(e){var t=e.name,a=e.url,n=e.exact;return c.a.createElement("li",{className:"Nav__Item",key:t},c.a.createElement(s.c,{to:a,exact:n,className:"Nav__Link",activeClassName:"Nav__Link--active"},t))}))))}),p=(a(39),function(){return c.a.createElement("form",{action:"./",className:"Search"},c.a.createElement("label",{htmlFor:"search",className:"Search__Label"},c.a.createElement("input",{type:"text",className:"Search__Input",placeholder:"Search in phones..."}),c.a.createElement("button",{type:"button",className:"Search__Button"})))}),E=a(1),g=a.n(E),f=(a(40),function(e){var t=e.name,a=e.tag,n=e.size,r=void 0===n?0:n,o=e.border,s=e.inActive;return c.a.createElement("div",{className:g()("Icon Icon__Size".concat(r),{Icon__Border:o})},c.a.createElement("div",{className:g()("Icon__Image","Icon__Image--".concat(t),{"Icon__Image--inactive":s})}),a&&c.a.createElement("div",{className:"Icon__tag"},a))}),v=[{name:"Phones",title:"Mobile Phones",url:"/phones",type:"phone"},{name:"Tablets",title:"Tablets",url:"/tablets",type:"tablet"},{name:"Accessories",title:"Accessories",url:"/accessories",type:"accessories"}],b=[{name:"Github",url:"/github"},{name:"Contacts",url:"/contacts"},{name:"Rights",url:"/rights"}],N=[{alt:"First banner",path:"images/banner.jpg"},{alt:"Second banner",path:"images/banner2.jpg"},{alt:"Third banner",path:"images/banner3.jpg"}],h=[{name:"8"},{name:"12"},{name:"16"}],P="https://mate-academy.github.io/react_phone-catalog/api";function S(e){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return I.apply(this,arguments)}function I(){return(I=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("".concat(P,"/products.json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/products/").concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=a(19),C=[{name:"Price: Low to High",field:"price",typeField:"number",type:"cheap",isReverse:!1},{name:"Price: High to Low",field:"price",typeField:"number",type:"expensive",isReverse:!0,isDefault:!0},{name:"Goods :A to Z",field:"name",typeField:"string",type:"alphabet",isReverse:!1},{name:"Goods: Z to A",field:"name",typeField:"string",type:"betalpha",isReverse:!0}],k=function(){return c.a.createElement("header",{className:"Header",id:"top"},c.a.createElement(s.b,{to:"/",className:"Header__Logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"Logo"})),c.a.createElement(s.c,{to:"/",exact:!0,className:"Nav__Link",activeClassName:"Nav__Link--active"},"Home"),c.a.createElement(d,{links:v}),c.a.createElement(p,null),c.a.createElement(s.b,{to:"/favorites",className:"Header__Button"},c.a.createElement(f,{name:"favorites",tag:7,border:!1,inActive:!1})),c.a.createElement(s.b,{to:"/cart",className:"Header__Button"},c.a.createElement(f,{name:"shopping-bag",border:!1,inActive:!1})))},w=(a(41),function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement("div",{className:"Footer__Content container"},c.a.createElement(s.b,{to:"/",className:"Footer__Logo"},c.a.createElement("img",{src:"./images/logo.svg",alt:"Logo"})),c.a.createElement(d,{links:b}),c.a.createElement(s.b,{to:"#top",className:"Footer__Link",onClick:function(e){e.preventDefault(),window.scrollTo(0,0)}},"Back to top",c.a.createElement(f,{name:"arrow-up",size:2,border:!0,inActive:!1}))))}),x=(a(42),a(43),a(22),function(e){var t=e.text;return c.a.createElement("button",{type:"button",className:"Button Button__Primary"},t)}),L=function(e){var t=e.good,a=Object(_.i)().section;return c.a.createElement("article",{key:t.id,className:"GoodsList__Item GoodItem"},c.a.createElement(s.b,{to:"/".concat(a,"/").concat(t.id),className:"GoodItem__Link"},c.a.createElement("img",{src:t.imageUrl,alt:t.name,className:"GoodItem__Image"}),c.a.createElement("h3",{className:"GoodItem__Heading"},t.name)),c.a.createElement("section",{className:"GoodItem__Price"},c.a.createElement("span",{className:"GoodItem__Price--actual"},t.discount>0?t.price-t.price/t.discount:t.price),t.discount>0&&c.a.createElement("span",{className:"GoodItem__Price--full"},t.price)),c.a.createElement("section",{className:"GoodItem__PropsList"},c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"Screen"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.screen?t.screen:"-")),c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"Capacity"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.capacity?t.capacity:"-")),c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"RAM"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.ram?t.ram:"-"))),c.a.createElement("section",{className:"GoodItem__Buttons"},c.a.createElement("div",{className:"GoodItem__Buttons--main"},c.a.createElement(x,{text:"Add To Cart"})),c.a.createElement("div",{className:"GoodItem__Buttons--favorites"},c.a.createElement(f,{name:"favorites",border:!0,inActive:!1}))))},A=function(e){var t=e.goods;return c.a.createElement("div",{className:"GoodsList"},t.map((function(e){return c.a.createElement(L,{good:e,key:e.id})})))},F=(a(44),function(e){var t=e.qty,a=e.perPage,n=Object(_.h)(),r=Object(_.g)(),o=new URLSearchParams(n.search),s=Number(o.get("page")),l=o.get("sortBy"),i=Array(Math.ceil(t/Number(a))).fill(0,0,t).map((function(e,t){return e+t+1})),m=function(e){l&&o.set("sortBy",l),o.set("page","".concat(e)),r.push({search:o.toString()})};if(s<=0)return c.a.createElement(_.a,{to:{pathname:"".concat(n.pathname),search:"?page=1&perPage=".concat(a)}});if(s>i.length)return c.a.createElement(_.a,{to:{pathname:"".concat(n.pathname),search:"?page=".concat(i.length,"&perPage=").concat(a)}});var u=function(e){return"prev"===e&&s>1?c.a.createElement("button",{type:"button",className:"Pagination__Button Pagination__Button--arrow-left",onClick:function(){return m(s-1)}}):"prev"===e?c.a.createElement("div",{className:" Pagination__Button Pagination__Button--arrow-left Pagination__Button--disabled"}):"next"===e&&s<i.length?c.a.createElement("button",{type:"button",className:"Pagination__Button Pagination__Button--arrow-right",onClick:function(){return m(s+1)}}):"next"===e?c.a.createElement("div",{className:" Pagination__Button Pagination__Button--arrow-right Pagination__Button--disabled"}):""};return c.a.createElement("nav",{className:"Pagination"},c.a.createElement("ul",{className:"Pagination__List"},c.a.createElement("li",{className:"Pagination__Item"},u("prev")),i.map((function(e){return c.a.createElement("li",{className:"Pagination__Item",key:e},c.a.createElement("button",{type:"button",className:g()({Pagination__Button:!0,"Pagination__Button--active":e===s}),onClick:function(){return m(e)}},e))})),c.a.createElement("li",{className:"Pagination__Item"},u("next"))))}),H=function(e){var t=e.options,a=Object(_.g)(),r=Object(_.h)(),o=new URLSearchParams(r.search),s=o.get("perPage"),l=t.find((function(e){return e.name===s}))||t[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1],E=function(){p(!1)};return Object(n.useEffect)((function(){d?document.documentElement.addEventListener("click",E):document.documentElement.removeEventListener("click",E)}),[d]),c.a.createElement("div",{className:g()({Select:!0,Select__Closest:!d})},c.a.createElement("label",{className:g()({"Select__Active--after":d})}),c.a.createElement("button",{type:"button",className:g()({Select__Active:!0,"Select__Active--opened":d}),onClick:function(){return p(!0)}},l.name,c.a.createElement("span",null,c.a.createElement("div",{className:g()({Select__Arrow:!0,"Select__Arrow--opened":d})}))),c.a.createElement("ul",{className:g()({Select__List:!0,"Select__List--opened":d})},t.map((function(e){return e.name!==l.name&&c.a.createElement("li",{key:e.name,className:"Select__Item","data-value":e.name,onClick:function(){return function(e){o.set("perPage",e.name),o.set("page","1"),a.push({search:o.toString()}),p(!1)}(e)}},e.name)}))))},R=(a(45),function(e){var t=e.options,a=t.find((function(e){return e.isDefault}))||t[0],r=Object(_.g)(),o=Object(_.h)(),s=new URLSearchParams(o.search),l=Object(n.useMemo)((function(){return s.get("sortBy")||a}),[s,t,a]),i=Object(n.useMemo)((function(){return s.get("page")}),[s]),m=Object(n.useMemo)((function(){return s.get("perPage")}),[s]),d=t.find((function(e){return e.type===l}))||a,p=Object(n.useState)(!1),E=Object(u.a)(p,2),f=E[0],v=E[1],b=function(){v(!1)};return Object(n.useEffect)((function(){f?document.documentElement.addEventListener("click",b):document.documentElement.removeEventListener("click",b)}),[f]),c.a.createElement("div",{className:g()({Select:!0,Select__Closest:!f})},c.a.createElement("label",{className:g()({"Select__Active--after":f})}),c.a.createElement("button",{type:"button",className:g()({Select__Active:!0,"Select__Active--opened":f}),onClick:function(){return v(!0)}},d.name,c.a.createElement("span",null,c.a.createElement("div",{className:g()({Select__Arrow:!0,"Select__Arrow--opened":f})}))),c.a.createElement("ul",{className:g()({Select__List:!0,"Select__List--opened":f})},t.map((function(e){return e.type!==d.type&&c.a.createElement("li",{key:e.name,className:"Select__Item","data-value":e.type,onClick:function(){return function(e){s.set("sortBy",e.type),i&&s.set("page",i),m&&s.set("perPage",m),r.push({search:s.toString()}),v(!1)}(e)}},e.name)}))))}),T=function(e){var t,a=e.goods,r=Object(_.g)(),o=Object(_.h)(),s=new URLSearchParams(o.search),l=Number(s.get("page")),i=h[0].name,m=Object(n.useMemo)((function(){return s.get("perPage")}),[s]),u=Number(i);h.find((function(e){return e.name===m}))?u=Number(null===(t=h.find((function(e){return e.name===m})))||void 0===t?void 0:t.name):(s.set("perPage",i),r.push({search:s.toString()}));var d=s.get("sortBy"),p=C.find((function(e){return e.type===d}))||C[1];p||(s.set("sortBy",C[1].type),r.push({search:s.toString()}));var E=Object(_.i)().section,g=v.find((function(e){return e.url==="/".concat(E)})),f=Object(n.useMemo)((function(){return a.filter((function(e){return e.type===(null===g||void 0===g?void 0:g.type)}))}),[a,g]),b=Object(n.useMemo)((function(){return function(e,t){return"number"===t.typeField?Object(G.a)(e).sort((function(e,a){var n=t.isReverse?-1:1;return(Number(e[t.field])-Number(a[t.field]))*n})):"string"===t.typeField?Object(G.a)(e).sort((function(e,a){var n=t.isReverse?-1:1;return String(e[t.field]).localeCompare(String(a[t.field]))*n})):e}(f,p)}),[f,p]).slice((l||1)*u-u,(l||1)*u);return c.a.createElement("section",{className:"section GoodsSection"},c.a.createElement("h1",{className:"GoodsSection__Heading"},(null===g||void 0===g?void 0:g.title)||(null===g||void 0===g?void 0:g.name)),c.a.createElement("div",{className:"GoodsSection__Qty"},"".concat(f.length," models")),c.a.createElement("div",{className:"GoodsSection__Control"},f.length>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"GoodsSection__Select"},c.a.createElement("div",{className:"GoodsSection__SelectName"},"Sort by"),c.a.createElement(R,{options:C})),c.a.createElement("div",{className:"GoodSection__Select"},c.a.createElement("div",{className:"GoodsSection__SelectName"},"Items on page"),c.a.createElement(H,{options:h})))),c.a.createElement("div",{className:"GoodsSection__Container"},c.a.createElement(A,{goods:b})),f.length>u&&c.a.createElement("div",{className:"Pagination"},c.a.createElement(F,{qty:f.length,perPage:u})))},M=a(12),D=(a(46),function(e){var t=e.goods,a=Object(_.i)().good,r=Object(n.useState)(),o=Object(u.a)(r,2),s=o[0],l=o[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),E=p[0],g=p[1],v=Object(n.useState)(!1),b=Object(u.a)(v,2),N=b[0],h=b[1],P=Object(n.useState)(!1),S=Object(u.a)(P,2),y=S[0],j=S[1],I=Object(n.useState)(0),B=Object(u.a)(I,2),G=B[0],C=B[1],k=function(){var e=Object(m.a)(i.a.mark((function e(a){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),g(""),e.prev=2,e.next=5,O(a);case 5:n=e.sent,c=t.find((function(e){return e.id===a})),r=Object(M.a)(Object(M.a)({},n),c),l(r),j(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),g(String(e.t0));case 15:h(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){k(a)}),[a]);return c.a.createElement("section",{className:"section"},E&&c.a.createElement("div",null,E),N&&y&&"",s&&c.a.createElement("article",{className:"GoodPage"},c.a.createElement("h1",{className:"GoodPage__Heading"},s.name),c.a.createElement("div",{className:"GoodPage__Content"},c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__Images"},c.a.createElement("ul",{className:"GoodPage__ImageList"},s.images.map((function(e,t){return c.a.createElement("li",{className:"GoodPage__ImageItem",key:e},c.a.createElement("a",{href:"./#",onClick:function(e){return function(e,t){e.preventDefault(),C(t)}(e,t)}},c.a.createElement("img",{src:e,alt:s.name,className:"GoodPage__Image"})))}))),c.a.createElement("img",{src:s.images[G],alt:s.name,className:"GoodPage__ImageBig"}))),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__NarrowBlock"},c.a.createElement("div",{className:"GoodPage__Price"},c.a.createElement("span",{className:"GoodPage__Price--actual"},a.discount>0?a.price-a.price/a.discount:a.price),a.discount>0&&c.a.createElement("span",{className:"GoodPage__Price--full"},a.price)),c.a.createElement("div",{className:"GoodPage__Buttons"},c.a.createElement("div",{className:"GoodPage__Buttons--main"},c.a.createElement(x,{text:"Add To Cart"})),c.a.createElement("div",{className:"GoodPage__Buttons--favorites"},c.a.createElement(f,{name:"favorites",border:!0,inActive:!1}))))),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__Description"},c.a.createElement("h2",{className:"GoodPage__SubHeading"},"About"),s.description)),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__TechSpecs"},c.a.createElement("h2",{className:"GoodPage__SubHeading"},"Tech specs"),c.a.createElement("ul",null,c.a.createElement("li",null,"1")))))))}),U=(a(47),function(){var e=N.map((function(e,t){return Object(M.a)(Object(M.a)({},e),{},{position:t+1})})),t=Object(n.useState)(1),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(0),l=Object(u.a)(s,2),i=l[0],m=l[1],_=function(t){var a=1056*-t;return r===e.length&&1===t?(o(1),void m(0)):1===r&&-1===t?(o(e.length),void m(1056*t*(e.length-1))):(o(r+t),void m(i+a))};return c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"Banner__Slider"},c.a.createElement("button",{type:"button",className:"Banner__Button",onClick:function(){return _(-1)}},c.a.createElement("div",{className:"Banner__Image Banner__Image--arrow-left"})),c.a.createElement("div",{className:"Banner__Container"},c.a.createElement("ul",{className:"Banner__Content",style:{transform:"translateX(".concat(i,"px)")}},e.map((function(e){return c.a.createElement("li",{className:"Banner__Content-image",key:e.position},c.a.createElement("img",{src:e.path,alt:e.alt,className:"Banner__Image-current"}))})))),c.a.createElement("button",{type:"button",className:"Banner__Button",onClick:function(){return _(1)}},c.a.createElement("div",{className:"Banner__Image Banner__Image--arrow-right"}))),c.a.createElement("div",{className:"Banner__Position-container"},e.map((function(e){return c.a.createElement("span",{key:e.position,className:g()({Banner__Position:!0,"Banner__Position--active":e.position===r}),onClick:function(){return function(e){if(1===e)return m(0),void o(1);m(-1*(1040*(e-1)+16*(e-1))),o(e)}(e.position)}})}))))}),z=(a(48),function(e){var t=e.cards,a=e.title,r=Object(n.useState)(0),o=Object(u.a)(r,2),s=o[0],l=o[1],i=t.length,m=Object(n.useState)(4),_=Object(u.a)(m,2),d=_[0],p=_[1],E=function(e){l(s+288*-e),p(d+e)};return c.a.createElement("div",{className:"Card__Container",style:{width:"".concat(1136,"px")}},c.a.createElement("div",{className:"Card__Title-site"},c.a.createElement("div",null,c.a.createElement("h2",{className:"Card__Title"},a)),c.a.createElement("div",{className:"Card__Buttons"},c.a.createElement("button",{className:"Card__Button",type:"button",onClick:function(){return E(-1)},disabled:4===d},c.a.createElement("div",{className:g()({"Card__Button--arrow-left":!0,"Card__Button--arrow":!0,"Card__Button--arrow--disabled":4===d})})),c.a.createElement("button",{className:"Card__Button",type:"button",onClick:function(){return E(1)},disabled:d===i},c.a.createElement("div",{className:g()({"Card__Button--arrow-right":!0,"Card__Button--arrow":!0,"Card__Button--arrow--disabled":d===i})})))),c.a.createElement("ul",{className:"Card",style:{transform:"translateX(".concat(s,"px)")}},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"Card__Item",style:{width:"".concat(272,"px")}},c.a.createElement(L,{good:e}))}))))}),q=function(e){var t=e.goods;return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,null),c.a.createElement(z,{cards:t.slice(0,8),title:"Hot prices"}),c.a.createElement(z,{cards:t.slice(0,8),title:"Brand new models"}))},J=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),l=s[0],d=s[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),g=E[0],f=E[1],v=Object(n.useState)(!1),b=Object(u.a)(v,2),N=b[0],h=b[1],P=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(""),e.prev=2,e.next=5,j();case 5:t=e.sent,r(t),h(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),d(String(e.t0));case 13:f(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){P()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement("div",{className:"container"},l&&c.a.createElement("div",null,l),g&&N&&"",c.a.createElement(_.d,null,c.a.createElement(_.b,{path:"/",exact:!0,render:function(){return c.a.createElement(q,{goods:a})}}),c.a.createElement(_.b,{path:"/:section",exact:!0,render:function(){return c.a.createElement(T,{goods:a})}}),c.a.createElement(_.b,{path:"/:section/:good",exact:!0,render:function(){return c.a.createElement(D,{goods:a})}}))),c.a.createElement(w,null))};o.a.render(c.a.createElement(s.a,null,c.a.createElement(J,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b3a715f6.chunk.js.map