(this["webpackJsonpajm-banking"]=this["webpackJsonpajm-banking"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),a=n.n(o),i=n(18),s=n.n(i),r=(n(25),n(7)),j=(n(26),n(9)),l=n(2),h=function(t,e){var n=Object(o.useState)(0),a=Object(r.a)(n,2),i=a[0],s=a[1],l=Object(o.useState)(0),h=Object(r.a)(l,2),b=h[0],u=h[1],d=Object(o.useState)(0),O=Object(r.a)(d,2),p=O[0],x=O[1];function m(){t||e(localStorage.getItem("token")),fetch("http://localhost:3552/balance",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"token=".concat(t.token)}).then((function(t){return t.text()})).then((function(e){s(e),localStorage.setItem("token",t.token)})).catch((function(t){return console.error(t)}))}function f(t){"deposit-amount"===t.target.name?u(t.target.value):x(t.target.value)}return Object(o.useEffect)(m,[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(j.b,{to:"/",children:"Home"}),Object(c.jsx)("h1",{children:"Welcome to Your Bank Account"}),Object(c.jsxs)("h2",{children:["Your balance is: $",i,"."]}),Object(c.jsx)("h3",{children:"Deposit"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"deposit-amount",children:"Amount:"}),Object(c.jsx)("input",{type:"number",name:"deposit-amount",id:"deposit-amount",onChange:f,value:b})]}),Object(c.jsx)("button",{onClick:function(e){fetch("http://localhost:3552/deposit",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"token=".concat(t.token,"&amount=").concat(b)}).then((function(t){u(0),m()}))},children:"Deposit"}),Object(c.jsx)("h3",{children:"Withdrawal"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"withdrawal-amount",children:"Amount:"}),Object(c.jsx)("input",{type:"number",name:"withdrawal-amount",id:"withdrawal-amount",value:p,onChange:f})]}),Object(c.jsx)("button",{onClick:function(e){fetch("http://localhost:3552/withdraw",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"token=".concat(t.token,"&amount=").concat(p)}).then((function(t){x(0),m()}))},disabled:+i>p?"":"true",children:+i>p?"Withdraw":"Amount Too High"}),Object(c.jsx)("span",{id:"withdrawal-response"})]})},b=n(11),u=n(16);var d=function(t){var e=t.isLoggedIn,n=t.setIsLoggedIn,a=(t.token,t.setToken),i=Object(o.useState)({}),s=Object(r.a)(i,2),j=s[0],h=s[1];function d(t){h(Object(u.a)(Object(u.a)({},j),{},Object(b.a)({},t.target.name,t.target.value)))}return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Log in to AJM Banking"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{htmlFor:"IBAN",children:"IBAN:"}),Object(c.jsx)("input",{type:"text",name:"IBAN",id:"IBAN",onChange:d}),Object(c.jsx)("label",{htmlFor:"PIN",children:"PIN:"}),Object(c.jsx)("input",{type:"password",name:"PIN",id:"PIN",onChange:d})]}),Object(c.jsx)("button",{onClick:function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)};fetch("http://localhost:3552/authenticate",t).then((function(t){200==t.status&&t.text().then((function(t){a(t),n(!0)}))})).catch((function(t){return console.log(t)}))},children:"Log In"}),e?Object(c.jsx)(l.a,{to:"/myaccount"}):null]})};var O=function(){var t=Object(o.useState)(!1),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),b=s[0],u=s[1];return Object(c.jsx)("div",{class:"App",children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/myaccount",children:Object(c.jsx)(h,{token:b})}),Object(c.jsx)(l.b,{path:"/login",children:Object(c.jsx)(d,{isLoggedIn:n,setIsLoggedIn:a,token:b,setToken:u})}),Object(c.jsxs)(l.b,{path:"/",children:[Object(c.jsxs)(j.b,{to:"/login",children:[" ",n?"Account":"Log In"]}),Object(c.jsx)("br",{}),n?Object(c.jsx)("a",{href:"",onClick:function(){return a(!1)},children:"Log Out"}):"",Object(c.jsx)("br",{})]})]})})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.408ad7cf.chunk.js.map