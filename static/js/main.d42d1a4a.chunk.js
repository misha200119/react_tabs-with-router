(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c.n(a),s=c(5),i=c(4),j=c(0),b=c.n(j),l=c(1),r=(c(13),c(2)),o=Object(j.memo)((function(){return Object(r.jsx)("div",{className:"HomePage",children:Object(r.jsx)("h1",{className:"HomePage__title",children:"HOME___PAGE"})})})),m=Object(j.memo)((function(){return Object(r.jsx)("div",{className:"HomePage",children:Object(r.jsx)("h1",{className:"HomePage__title",children:"NOT__FOUND__PAGE"})})})),O=(c(15),b.a.memo((function(){return Object(r.jsx)("div",{className:"Navigation",children:Object(r.jsx)("nav",{className:"Navigation__nav",children:Object(r.jsxs)("ul",{className:"nav nav-tabs justify-content-center",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(s.b,{to:"/home",className:"nav-link",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(s.b,{to:"/tabs",className:"nav-link",children:"Tabs"})})]})})})}))),d=Object(j.memo)((function(e){var t=e.tabs,c=Object(l.g)().tabId,a=Object(j.useState)(null),n=Object(i.a)(a,2),b=n[0],o=n[1],m=Object(j.useMemo)((function(){var e=t.find((function(e){return e.id===c}));return!!e&&(o(e),!0)}),[c,b]);return Object(r.jsxs)("div",{className:"Tabs",children:[!m&&Object(r.jsx)("p",{children:"Please select a tab"}),Object(r.jsx)("ul",{className:"nav nav-tabs",children:t.map((function(e){return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(s.b,{to:e.id,className:"nav-link",onClick:function(){o(e)},children:e.title})},e.id)}))}),m&&Object(r.jsx)("p",{className:"Tabs__tab-content",children:null===b||void 0===b?void 0:b.content})]})})),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e=Object(j.useState)(h),t=Object(i.a)(e,1)[0];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(O,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/home",element:Object(r.jsx)(o,{})}),Object(r.jsx)(l.a,{path:"/tabs/*",element:Object(r.jsx)(d,{tabs:t}),children:Object(r.jsx)(l.a,{path:":tabId",element:Object(r.jsx)(d,{tabs:t})})}),Object(r.jsx)(l.a,{path:"*",element:Object(r.jsx)(m,{})})]})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d42d1a4a.chunk.js.map