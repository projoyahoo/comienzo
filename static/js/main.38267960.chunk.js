(this.webpackJsonpcomienzo=this.webpackJsonpcomienzo||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),o=n(4),s=n.n(o),j=(n(11),n(5)),a=n(2),l=(n(12),function(e){var t=e.pokemon,n=e.onClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name.english}),Object(c.jsx)("td",{children:t.type.join(", ")}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return n(t)},children:" Tnfo"})})]},t.id)})}),d=function(e){var t=e.name.english,n=e.base;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:Object.keys(n).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e}),Object(c.jsx)("td",{children:n[e]})]},e)}))})})]})};var u=function(){var e=r.a.useState(""),t=Object(a.a)(e,2),n=t[0],i=t[1],o=r.a.useState(null),s=Object(a.a)(o,2),u=s[0],b=s[1],h=r.a.useState(null),O=Object(a.a)(h,2),x=O[0],f=O[1];return r.a.useEffect((function(){fetch("/comienzo/pokemon.json").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]),u?Object(c.jsxs)("div",{style:{margin:"auto",width:800,paddingTop:"1em"},children:[Object(c.jsx)("h1",{className:"title",children:"Pokemon Search"}),Object(c.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"80% 20%",gridColumnGap:"1rem"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("table",{width:"100%",children:Object(c.jsx)("tbody",{children:u.filter((function(e){return e.name.english.toLocaleLowerCase().includes(n.toLocaleLowerCase())})).slice(0,20).map((function(e){return Object(c.jsx)(l,{pokemon:e,onClick:function(e){return f(e)}})}))})})]}),x&&Object(c.jsx)(d,Object(j.a)({},x))]})]}):Object(c.jsx)("div",{children:"Loading data"})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.38267960.chunk.js.map