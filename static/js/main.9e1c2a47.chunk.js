(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(24).concat([function(e,t,a){},,,,,function(e,t,a){e.exports=a(55)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),l=a(4),s=a(8),i=a.n(s),m=a(13),u=a(3),d=a(5),_=(a(35),[{name:"Phones",title:"Mobile Phones",url:"/phones",type:"phone",imgUrl:"images/category/phones.png"},{name:"Tablets",title:"Tablets",url:"/tablets",type:"tablet",imgUrl:"images/category/tablets.png"},{name:"Accessories",title:"Accessories",url:"/accessories",type:"accessories",imgUrl:"images/category/accessoires.png"}]),g=[{name:"Github",url:"https://github.com/fe-feb20-team3"},{name:"Contacts",url:"/contacts"},{name:"Rights",url:"/rights"}],p=[{alt:"First banner",path:"images/banner.jpg"},{alt:"Second banner",path:"images/banner2.jpg"},{alt:"Third banner",path:"images/banner3.jpg"}],f=[{name:"4"},{name:"8"},{name:"12"},{name:"16"}],E="hotPrice",v="alsoLike",N="newModels",b="https://mate-academy.github.io/react_phone-catalog/api";function h(e){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("".concat(b,"/products.json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return I.apply(this,arguments)}function I(){return(I=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/products/").concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=a(7),O=[{name:"Price: Low to High",field:"price",typeField:"number",type:"cheap",isReverse:!1},{name:"Price: High to Low",field:"price",typeField:"number",type:"expensive",isReverse:!0,isDefault:!0},{name:"Goods: A to Z",field:"name",typeField:"string",type:"alphabet",isReverse:!1},{name:"Goods: Z to A",field:"name",typeField:"string",type:"betalpha",isReverse:!0},{name:"Newest",field:"age",typeField:"number",type:"newest",isReverse:!1},{name:"Oldest",field:"age",typeField:"number",type:"oldest",isReverse:!0}],C=function(e,t,a){switch(t){case E:return Object(j.a)(e).filter((function(e){return e.price&&e.discount})).sort((function(e,t){var a=e.discount/100*e.price;return t.discount/100*t.price-a})).slice(0,8);case v:return Object(j.a)(e).sort((function(){return Math.random()-.5})).filter((function(e){return e.id!==a})).slice(0,8);case N:return Object(j.a)(e).sort((function(e,t){return e.age-t.age})).slice(0,8);default:return e}},B=c.a.createContext({favorites:[],addFavorite:function(){},removeFavorite:function(){},isFavorite:function(){return!1}}),k=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(u.a)(a,2),o=r[0],l=r[1];Object(n.useEffect)((function(){localStorage.getItem("favoriteProducts")&&l(Object(j.a)(JSON.parse(localStorage.getItem("favoriteProducts")||"")))}),[]),Object(n.useEffect)((function(){return localStorage.setItem("favoriteProducts",JSON.stringify(Object(j.a)(o)))}),[o]);return c.a.createElement(B.Provider,{value:{favorites:o,addFavorite:function(e){l([].concat(Object(j.a)(o),[e.id]))},removeFavorite:function(e){l(o.filter((function(t){return t!==e.id})))},isFavorite:function(e){return o.some((function(t){return t===e.id}))}}},t)},w=(a(36),a(37),function(e){var t=e.links;return c.a.createElement("nav",{className:"Nav"},c.a.createElement("ul",{className:"Nav__List"},t.map((function(e){var t=e.name,a=e.url,n=e.exact;return c.a.createElement("li",{className:"Nav__Item",key:t},c.a.createElement(l.c,{to:a,exact:n,className:"Nav__Link",activeClassName:"Nav__Link--active"},t))}))))}),F=a(2),L=a.n(F),x=(a(42),function(){var e=Object(d.g)(),t=Object(d.h)(),a=new URLSearchParams(t.search),r=a.get("query")||"",o=Object(n.useState)(r),l=Object(u.a)(o,2),s=l[0],i=l[1],m=Object(n.useRef)(null);Object(n.useEffect)((function(){""===r&&m.current.focus()}),[r]);var _=Object(n.useCallback)(function(e,t){var a;return function(){var n;clearTimeout(a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];a=(n=window).setTimeout.apply(n,[e,t].concat(r))}}((function(t){""===t?a.delete("query"):a.set("query",t),a.set("page","1"),e.push({search:a.toString()})}),1e3),[]);return c.a.createElement("form",{action:"./",className:"Search",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("label",{htmlFor:"search",className:"Search__Label"},c.a.createElement("input",{type:"text",className:"Search__Input",value:s,placeholder:"Search in phones...",ref:m,onChange:function(e){var t=e.target.value;_(t),i(t)}}),c.a.createElement("button",{className:L()({Search__Button:!0,"Search__Button--clear":r.length>0}),onClick:function(){a.set("query",""),e.push({search:a.toString()})}})))}),A=(a(43),function(e){var t=e.name,a=e.tag,n=e.size,r=void 0===n?0:n,o=e.border,l=e.inActive;return c.a.createElement("button",{type:"button",className:L()("Icon Icon__Size".concat(r),{Icon__Border:o})},c.a.createElement("div",{className:L()("Icon__Image","Icon__Image--".concat(t),{"Icon__Image--inactive":l})}),Number(a)>0&&c.a.createElement("div",{className:"Icon__tag"},a))}),T=function(){var e=Object(n.useContext)(B).favorites;return c.a.createElement("header",{className:"Header",id:"top"},c.a.createElement(l.b,{to:"/",className:"Header__Logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"Logo"})),c.a.createElement(l.c,{to:"/",exact:!0,className:"Nav__Link",activeClassName:"Nav__Link--active"},"Home"),c.a.createElement(w,{links:_}),c.a.createElement(d.b,{path:"/:section",exact:!0,component:x}),c.a.createElement(l.b,{to:"/favorites",className:"Header__Button"},c.a.createElement(A,{name:"favorites",tag:e.length,border:!1,inActive:!1})),c.a.createElement(l.b,{to:"/cart",className:"Header__Button"},c.a.createElement(A,{name:"shopping-bag",border:!1,inActive:!1})))},R=(a(44),function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement("div",{className:"Footer__Content container"},c.a.createElement(l.b,{to:"/",className:"Footer__Logo"},c.a.createElement("img",{src:"./images/logo.svg",alt:"Logo"})),c.a.createElement(w,{links:g}),c.a.createElement(l.b,{to:"#top",className:"Footer__Link",onClick:function(e){e.preventDefault(),window.scrollTo(0,0)}},"Back to top",c.a.createElement(A,{name:"arrow-up",size:2,border:!0,inActive:!1}))))}),M=a(12),H=(a(45),a(46),a(24),function(e){var t=e.text;return c.a.createElement("button",{type:"button",className:"Button Button__Primary"},t)}),D=function(e){var t=e.good,a=Object(d.i)().section,r=Object(n.useContext)(B),o=r.isFavorite,s=r.addFavorite,i=r.removeFavorite;return c.a.createElement("article",{key:t.id,className:"GoodsList__Item GoodItem"},c.a.createElement(l.b,{to:"/".concat(a,"/").concat(t.id),className:"GoodItem__Link"},c.a.createElement("img",{src:t.imageUrl,alt:t.name,className:"GoodItem__Image"}),c.a.createElement("h3",{className:"GoodItem__Heading"},t.name)),c.a.createElement("section",{className:"GoodItem__Price"},c.a.createElement("span",{className:"GoodItem__Price--actual"},t.discount>0?t.price-t.price/t.discount:t.price),t.discount>0&&c.a.createElement("span",{className:"GoodItem__Price--full"},t.price)),c.a.createElement("section",{className:"GoodItem__PropsList"},c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"Screen"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.screen?t.screen:"-")),c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"Capacity"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.capacity?t.capacity:"-")),c.a.createElement("div",{className:"GoodItem__PropsItem"},c.a.createElement("span",{className:"GoodItem__PropsItem--title"},"RAM"),c.a.createElement("span",{className:"GoodItem__PropsItem--value"},t.ram?t.ram:"-"))),c.a.createElement("section",{className:"GoodItem__Buttons"},c.a.createElement("div",{className:"GoodItem__Buttons--main"},c.a.createElement(H,{text:"Add To Cart"})),c.a.createElement("label",{onClick:function(){var e;o(e=t)?i(e):s(e)}},c.a.createElement(A,{name:o(t)?"favorites-filled":"favorites",border:!0,inActive:!1}))))},U=function(e){var t=e.goods;return c.a.createElement("div",{className:"GoodsList"},t.map((function(e){return c.a.createElement(D,{good:e,key:e.id})})))},q=(a(47),function(e){var t=e.qty,a=e.perPage,n=Object(d.h)(),r=Object(d.g)(),o=new URLSearchParams(n.search),l=Number(o.get("page")),s=o.get("sortBy"),i=Array(Math.ceil(t/Number(a))).fill(0,0,t).map((function(e,t){return e+t+1})),m=function(e){s&&o.set("sortBy",s),o.set("page","".concat(e)),r.push({search:o.toString()})};if(l<=0)return c.a.createElement(d.a,{to:{pathname:"".concat(n.pathname),search:"?page=1&perPage=".concat(a)}});if(l>i.length)return c.a.createElement(d.a,{to:{pathname:"".concat(n.pathname),search:"?page=".concat(i.length,"&perPage=").concat(a)}});var u=function(e){return"prev"===e&&l>1?c.a.createElement("button",{type:"button",className:"Pagination__Button Pagination__Button--arrow-left",onClick:function(){return m(l-1)}}):"prev"===e?c.a.createElement("div",{className:" Pagination__Button Pagination__Button--arrow-left Pagination__Button--disabled"}):"next"===e&&l<i.length?c.a.createElement("button",{type:"button",className:"Pagination__Button Pagination__Button--arrow-right",onClick:function(){return m(l+1)}}):"next"===e?c.a.createElement("div",{className:" Pagination__Button Pagination__Button--arrow-right Pagination__Button--disabled"}):""};return c.a.createElement("nav",{className:"Pagination"},c.a.createElement("ul",{className:"Pagination__List"},c.a.createElement("li",{className:"Pagination__Item"},u("prev")),i.map((function(e){return c.a.createElement("li",{className:"Pagination__Item",key:e},c.a.createElement("button",{type:"button",className:L()({Pagination__Button:!0,"Pagination__Button--active":e===l}),onClick:function(){return m(e)}},e))})),c.a.createElement("li",{className:"Pagination__Item"},u("next"))))}),z=function(e){var t=e.options,a=Object(d.g)(),r=Object(d.h)(),o=new URLSearchParams(r.search),l=o.get("perPage"),s=t.find((function(e){return e.name===l}))||t[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),_=m[0],g=m[1],p=function(){g(!1)};return Object(n.useEffect)((function(){_?document.documentElement.addEventListener("click",p):document.documentElement.removeEventListener("click",p)}),[_]),c.a.createElement("div",{className:L()({Select:!0,Select__Closest:!_})},c.a.createElement("label",{className:L()({"Select__Active--after":_})}),c.a.createElement("button",{type:"button",className:L()({Select__Active:!0,"Select__Active--opened":_}),onClick:function(){return g(!0)}},s.name,c.a.createElement("span",null,c.a.createElement("div",{className:L()({Select__Arrow:!0,"Select__Arrow--opened":_})}))),c.a.createElement("ul",{className:L()({Select__List:!0,"Select__List--opened":_})},t.map((function(e){return e.name!==s.name&&c.a.createElement("li",{key:e.name,className:"Select__Item","data-value":e.name,onClick:function(){return function(e){o.set("perPage",e.name),o.set("page","1"),a.push({search:o.toString()}),g(!1)}(e)}},e.name)}))))},J=(a(48),function(){return c.a.createElement("div",{className:"NotAvailable"},c.a.createElement("img",{src:"images/notAvailable.jpg",alt:"Goods not found",className:"NotAvailable__Image"}))}),Z=(a(49),function(e){var t=e.options,a=t.find((function(e){return e.isDefault}))||t[0],r=Object(d.g)(),o=Object(d.h)(),l=new URLSearchParams(o.search),s=Object(n.useMemo)((function(){return l.get("sortBy")||a}),[l,a]),i=Object(n.useMemo)((function(){return l.get("perPage")}),[l]),m=t.find((function(e){return e.type===s}))||a,_=Object(n.useState)(!1),g=Object(u.a)(_,2),p=g[0],f=g[1],E=function(){f(!1)};return Object(n.useEffect)((function(){p?document.documentElement.addEventListener("click",E):document.documentElement.removeEventListener("click",E)}),[p]),c.a.createElement("div",{className:L()({Select:!0,Select__Closest:!p})},c.a.createElement("label",{className:L()({"Select__Active--after":p})}),c.a.createElement("button",{type:"button",className:L()({Select__Active:!0,"Select__Active--opened":p}),onClick:function(){return f(!0)}},m.name,c.a.createElement("span",null,c.a.createElement("div",{className:L()({Select__Arrow:!0,"Select__Arrow--opened":p})}))),c.a.createElement("ul",{className:L()({Select__List:!0,"Select__List--opened":p})},t.map((function(e){return e.type!==m.type&&c.a.createElement("li",{key:e.name,className:"Select__Item","data-value":e.type,onClick:function(){return function(e){l.set("sortBy",e.type),l.set("page","1"),i&&l.set("perPage",i),r.push({search:l.toString()}),f(!1)}(e)}},e.name)}))))}),Q=function(e){var t,a,r=e.goods,o=Object(d.g)(),l=Object(d.h)(),s=new URLSearchParams(l.search),i=(null===(t=s.get("query"))||void 0===t?void 0:t.toLowerCase())||"",m=Number(s.get("page")),u=f[0].name,g=Object(n.useMemo)((function(){return s.get("perPage")}),[s]),p=Number(u);f.find((function(e){return e.name===g}))?p=Number(null===(a=f.find((function(e){return e.name===g})))||void 0===a?void 0:a.name):(s.set("perPage",u),o.push({search:s.toString()}));var E=s.get("sortBy"),v=O.find((function(e){return e.type===E}))||O[1];v||(s.set("sortBy",O[1].type),o.push({search:s.toString()}));var N=Object(d.i)().section,b=_.find((function(e){return e.url==="/".concat(N)})),h=Object(n.useMemo)((function(){return r.filter((function(e){return e.type===(null===b||void 0===b?void 0:b.type)}))}),[r,b]),P=Object(n.useMemo)((function(){return h.filter((function(e){return"".concat(e.name," ").concat(e.snippet).toLowerCase().includes(i)}))}),[i,h]),S=Object(n.useMemo)((function(){return function(e,t){return"number"===t.typeField?Object(j.a)(e).sort((function(e,a){var n=t.isReverse?-1:1;return(Number(e[t.field])-Number(a[t.field]))*n})):"string"===t.typeField?Object(j.a)(e).sort((function(e,a){var n=t.isReverse?-1:1;return String(e[t.field]).localeCompare(String(a[t.field]))*n})):e}(P,v)}),[P,v]),y=S.slice((m||1)*p-p,(m||1)*p);return console.log(S.length),c.a.createElement(c.a.Fragment,null,0===S.length&&c.a.createElement(J,null),S.length>=1&&c.a.createElement("section",{className:"section GoodsSection"},c.a.createElement(M.a,null,c.a.createElement("title",null,(null===b||void 0===b?void 0:b.title)||(null===b||void 0===b?void 0:b.name))),c.a.createElement("h1",{className:"GoodsSection__Heading"},(null===b||void 0===b?void 0:b.title)||(null===b||void 0===b?void 0:b.name)),c.a.createElement("div",{className:"GoodsSection__Qty"},"".concat(h.length," models")),c.a.createElement("div",{className:"GoodsSection__Control"},h.length>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"GoodsSection__Select"},c.a.createElement("div",{className:"GoodsSection__SelectName"},"Sort by"),c.a.createElement(Z,{options:O})),c.a.createElement("div",{className:"GoodSection__Select"},c.a.createElement("div",{className:"GoodsSection__SelectName"},"Items on page"),c.a.createElement(z,{options:f})))),c.a.createElement("div",{className:"GoodsSection__Container"},c.a.createElement(U,{goods:y})),P.length>p&&c.a.createElement("div",{className:"Pagination"},c.a.createElement(q,{qty:P.length,perPage:p}))))},X=a(16),W=(a(50),function(e){var t=e.goodInfo,a=e.goodDetail;return c.a.createElement("ul",{className:"GoodPage__InfoList"},c.a.createElement("li",{className:"GoodPage__InfoItem"},c.a.createElement("p",{className:"GoodPage__InfoTitle"},"Screen"),c.a.createElement("p",{className:"GoodPage__InfoFeature"},t&&(t.screen||"No info"))),c.a.createElement("li",{className:"GoodPage__InfoItem"},c.a.createElement("p",{className:"GoodPage__InfoTitle"},"Resolution"),c.a.createElement("p",{className:"GoodPage__InfoFeature"},a&&(a.display.screenResolution||"No info"))),c.a.createElement("li",{className:"GoodPage__InfoItem"},c.a.createElement("p",{className:"GoodPage__InfoTitle"},"Processor"),c.a.createElement("p",{className:"GoodPage__InfoFeature"},a&&(a.hardware.cpu||"No info"))),c.a.createElement("li",{className:"GoodPage__InfoItem"},c.a.createElement("p",{className:"GoodPage__InfoTitle"},"RAM"),c.a.createElement("p",{className:"GoodPage__InfoFeature"},t&&(t.ram||"No info"))))}),Y=function(e){var t=e.goodInfo,a=e.goodDetail;return c.a.createElement("ul",{className:"GoodPage__SpecsList"},c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Screen"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},t&&(t.screen||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Resolution"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},a&&(a.display.screenResolution||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Processor"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},a&&(a.hardware.cpu||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"RAM"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},t&&(t.ram||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Built in memory"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},t&&(t.capacity||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Camera"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},a&&(a.camera.primary||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Zoom"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},a&&(a.camera.zoom||"No info"))),c.a.createElement("li",{className:"GoodPage__SpecsItem"},c.a.createElement("p",{className:"GoodPage__SpecsTitle"},"Cell"),c.a.createElement("p",{className:"GoodPage__SpecsFeature"},a&&(a.connectivity.cell||"No info"))))},K=(a(51),function(e){var t=e.goods,a=e.title,r=Object(n.useState)(0),o=Object(u.a)(r,2),l=o[0],s=o[1],i=Object(n.useRef)(null),m=t.length,d=Object(n.useState)(4),_=Object(u.a)(d,2),g=_[0],p=_[1],f=function(e){s(l+288*-e),p(g+e)};return Object(n.useEffect)((function(){i.current&&console.log(i.current.offsetWidth)}),[i]),c.a.createElement("div",{className:"Card__Container",style:{width:"".concat(1136,"px")},ref:i},c.a.createElement("div",{className:"Card__Title-site"},c.a.createElement("div",null,c.a.createElement("h2",{className:"Card__Title"},a)),c.a.createElement("div",{className:"Card__Buttons"},c.a.createElement("button",{className:"Card__Button",type:"button",onClick:function(){return f(-1)},disabled:4===g},c.a.createElement("div",{className:L()({"Card__Button--arrow-left":!0,"Card__Button--arrow":!0,"Card__Button--arrow--disabled":4===g})})),c.a.createElement("button",{className:"Card__Button",type:"button",onClick:function(){return f(1)},disabled:g===m},c.a.createElement("div",{className:L()({"Card__Button--arrow-right":!0,"Card__Button--arrow":!0,"Card__Button--arrow--disabled":g===m})})))),c.a.createElement("ul",{className:"Card",style:{transform:"translateX(".concat(l,"px)")}},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"Card__Item",style:{width:"".concat(272,"px")}},c.a.createElement(D,{good:e}))}))))}),V=(a(52),function(){return c.a.createElement("div",{className:"lds-roller"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),$=function(e){var t=e.goods,a=Object(d.i)().good,r=Object(d.j)(),o=Object(n.useState)(),l=Object(u.a)(o,2),s=l[0],g=l[1],p=Object(n.useState)(),f=Object(u.a)(p,2),E=f[0],v=f[1],N=Object(n.useState)(""),b=Object(u.a)(N,2),h=b[0],P=b[1],S=Object(n.useState)(!1),y=Object(u.a)(S,2),I=y[0],j=y[1],O=Object(n.useState)(!1),B=Object(u.a)(O,2),k=B[0],w=B[1],F=Object(n.useState)(0),x=Object(u.a)(F,2),T=x[0],R=x[1],D=t.find((function(e){return s&&e.id===s.id})),U=C(t,"alsoLike",r.params.good),q=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),P(""),e.prev=2,e.next=5,G(t);case 5:a=e.sent,n=Object(X.a)({},a),g(n),w(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),P(String(e.t0));case 14:j(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(t.length){var e=t.find((function(e){return e.id===r.params.good}));v(e)}}),[t]),Object(n.useEffect)((function(){q(a)}),[a]);var z=Object(n.useMemo)((function(){return E&&E.discount>0?E.price-E.price/E.discount:E&&E.price}),[E]);if("undefined"===r.params.section&&t&&D){var J=_.find((function(e){return e.type===D.type}));if(J)return c.a.createElement(d.a,{to:"".concat(J.url,"/").concat(r.params.good)})}return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section"},h&&c.a.createElement("div",null,h),I&&c.a.createElement("div",{className:"GoodPage__Loading"},c.a.createElement(V,null)),I&&k&&"",s&&c.a.createElement("article",{className:"GoodPage"},c.a.createElement(M.a,null,c.a.createElement("title",null,s.name)),c.a.createElement("h1",{className:"GoodPage__Heading"},s.name),c.a.createElement("div",{className:"GoodPage__Content"},c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__Images"},c.a.createElement("ul",{className:"GoodPage__ImageList"},s.images.map((function(e,t){return c.a.createElement("li",{className:L()({"GoodPage__Image--current":t===T},"GoodPage__ImageItem"),key:e},c.a.createElement("a",{href:"./#",onClick:function(e){return function(e,t){e.preventDefault(),R(t)}(e,t)}},c.a.createElement("img",{src:e,alt:s.name,className:"GoodPage__Image"})))}))),c.a.createElement("img",{src:s.images[T],alt:s.name,className:"GoodPage__ImageBig"}))),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("span",{className:"GoodPage__Id"},"ID:"," ",E&&E.id),c.a.createElement("section",{className:"GoodPage__NarrowBlock"},c.a.createElement("div",{className:"GoodPage__Price"},c.a.createElement("span",{className:"GoodPage__Price--actual"},z),E&&E.discount>0&&c.a.createElement("span",{className:"GoodPage__Price--full"},E.price)),c.a.createElement("div",{className:"GoodPage__Buttons"},c.a.createElement("div",{className:"GoodPage__Buttons--main"},c.a.createElement(H,{text:"Add To Cart"})),c.a.createElement("div",{className:"GoodPage__Buttons--favorites"},c.a.createElement(A,{name:"favorites",border:!0,inActive:!1})))),c.a.createElement("section",{className:"GoodPage__Info"},c.a.createElement(W,{goodDetail:s,goodInfo:E}))),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__Description"},c.a.createElement("h2",{className:"GoodPage__SubHeading"},"About"),E&&E.snippet,c.a.createElement("div",{className:"GoodPage__MoreInfo"},c.a.createElement("h3",{className:"GoodPage__MoreInfo--SubHeading"},"More info"),s&&s.description))),c.a.createElement("div",{className:"GoodPage__Column"},c.a.createElement("section",{className:"GoodPage__TechSpecs"},c.a.createElement("h2",{className:"GoodPage__SubHeading"},"Tech specs"),c.a.createElement("ul",null,c.a.createElement(Y,{goodDetail:s,goodInfo:E}))))))),c.a.createElement("div",{className:"GoodPage__Slider"},c.a.createElement(K,{goods:U,title:"You may also like"})))},ee=(a(53),function(){var e=p.map((function(e,t){return Object(X.a)(Object(X.a)({},e),{},{position:t+1})})),t=Object(n.useState)(1),a=Object(u.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(0),s=Object(u.a)(l,2),i=s[0],m=s[1],d=function(t){var a=1056*-t;return r===e.length&&1===t?(o(1),void m(0)):1===r&&-1===t?(o(e.length),void m(1056*t*(e.length-1))):(o(r+t),void m(i+a))};return c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"Banner__Slider"},c.a.createElement("button",{type:"button",className:"Banner__Button",onClick:function(){return d(-1)}},c.a.createElement("div",{className:"Banner__Image Banner__Image--arrow-left"})),c.a.createElement("div",{className:"Banner__Container"},c.a.createElement("ul",{className:"Banner__Content",style:{transform:"translateX(".concat(i,"px)")}},e.map((function(e){return c.a.createElement("li",{className:"Banner__Content-image",key:e.position},c.a.createElement("img",{src:e.path,alt:e.alt,className:"Banner__Image--current"}))})))),c.a.createElement("button",{type:"button",className:"Banner__Button",onClick:function(){return d(1)}},c.a.createElement("div",{className:"Banner__Image Banner__Image--arrow-right"}))),c.a.createElement("div",{className:"Banner__Position-container"},e.map((function(e){return c.a.createElement("span",{key:e.position,className:L()({"Banner__Position--active":e.position===r},"Banner__Position"),onClick:function(){return function(e){if(1===e)return m(0),void o(1);m(-1*(1040*(e-1)+16*(e-1))),o(e)}(e.position)}})}))))}),te=(a(54),function(e){var t=e.goods;return c.a.createElement("div",{className:"Category"},c.a.createElement("h2",{className:"Category__Title"},"Shop by category"),c.a.createElement("div",{className:"Category__Container"},c.a.createElement("ul",{className:"Category__List"},_.map((function(e){return c.a.createElement("li",{className:"Category__Item",key:e.name},c.a.createElement(l.b,{to:e.url,className:"Category__Link"},c.a.createElement("div",{className:"Category__ImageContainer"},c.a.createElement("img",{src:e.imgUrl,alt:e.title,className:"Category__Image"})),c.a.createElement("div",{className:"Category__Info"},c.a.createElement("h3",{className:"Category__InfoType Category__Paragraph"},e.title),c.a.createElement("p",{className:"Category__InfoCount Category__Paragraph"},t.filter((function(t){return t.type===e.type})).length," models"))))})))))}),ae=function(e){var t=e.goods,a=C(t,E,""),n=C(t,N,"");return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,null,c.a.createElement("title",null,"Phone Store")),c.a.createElement(ee,null),c.a.createElement(K,{goods:a,title:"Hot prices"}),c.a.createElement(te,{goods:t}),c.a.createElement(K,{goods:n,title:"Brand new models"}))},ne=function(e){var t,a=e.goods,r=Object(d.g)(),o=Object(d.h)(),l=new URLSearchParams(o.search),s=Object(n.useContext)(B).favorites,i=Object(n.useMemo)((function(){return Object(j.a)(a).filter((function(e){return s.some((function(t){return t===e.id}))}))}),[s,a]),m=Number(l.get("page")),u=f[0].name,_=Object(n.useMemo)((function(){return l.get("perPage")}),[l]),g=Number(u);f.find((function(e){return e.name===_}))?g=Number(null===(t=f.find((function(e){return e.name===_})))||void 0===t?void 0:t.name):(l.set("perPage",u),r.push({search:l.toString()}));var p=i.slice((m||1)*g-g,(m||1)*g);return c.a.createElement("section",{className:"section GoodsSection"},c.a.createElement(M.a,null,c.a.createElement("title",null,"Favorite Goods")),c.a.createElement("h1",{className:"GoodsSection__Heading"},"Favorite Goods"),c.a.createElement("div",{className:"GoodsSection__Qty"},"".concat(s.length," items")),c.a.createElement("div",{className:"GoodsSection__Control"},i.length>1&&c.a.createElement("div",{className:"GoodSection__Select"},c.a.createElement("div",{className:"GoodsSection__SelectName"},"Items on page"),c.a.createElement(z,{options:f}))),c.a.createElement(U,{goods:p}),i.length>g&&c.a.createElement("div",{className:"Pagination"},c.a.createElement(q,{qty:i.length,perPage:g})))},ce=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),s=l[0],_=l[1],g=Object(n.useState)(!1),p=Object(u.a)(g,2),f=p[0],E=p[1],v=Object(n.useState)(!1),N=Object(u.a)(v,2),b=N[0],h=N[1],P=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),_(""),e.prev=2,e.next=5,S();case 5:t=e.sent,a=t.filter((function(e){return e.type})),r(a),h(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),_(String(e.t0));case 14:E(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){P()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null,c.a.createElement(T,null),c.a.createElement("div",{className:"container"},s&&c.a.createElement("div",null,s),f&&b&&"",c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/",exact:!0,render:function(){return c.a.createElement(ae,{goods:a})}}),c.a.createElement(d.b,{path:"/favorites",render:function(){return c.a.createElement(ne,{goods:a})}}),c.a.createElement(d.b,{path:"/:section",exact:!0,render:function(){return c.a.createElement(Q,{goods:a})}}),c.a.createElement(d.b,{path:"/:section/:good",exact:!0,render:function(){return c.a.createElement($,{goods:a})}})))),c.a.createElement(R,null))};o.a.render(c.a.createElement(l.a,null,c.a.createElement(ce,null)),document.getElementById("root"))}]),[[29,1,2]]]);
//# sourceMappingURL=main.9e1c2a47.chunk.js.map