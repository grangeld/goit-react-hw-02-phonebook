(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=(n(14),n(9)),u=n(6),s=n(3),l=n.n(s),b=n(0),d=function(e){var t=e.onAddContact;return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\xd7\u2102\u2103\u2104\u2105\u2106\u2107\u2108\u2109\u210a\u210b\u210c\u210d\u210e\u210f\u2110\u2111\u2112\u2113\u2114\u2115\u2116\u2117\u2118\u2119\u211a\u211b\u211c\u211d\u211e\u211f\u2120\u2121\u2122\u2123\u2124\u2125\u03a9\u2127\u2128\u2129K\xc5\u212c\u212d\u212e\u212f \u2134\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215a\u215b\u215c\u215d\u215e\u215f\u2135\u2136\u213b\u213d\u213e\u213f\u2140\u2141\u2142\u2143\u2144\u2145\u2146\u2147\u2148\u2149\u214a\u214b\u214d\u214e\u216d\u216e\u216f\u2200\u2201\u2202\u2203\u2204\u2205\u2206\u2207",a=+new Date+n.charAt(Math.floor(Math.random()*n.length));""!==e.target.name.value&&t({id:a,name:e.target.name.value,number:e.target.number.value})&&(e.target.name.value="",e.target.number.value="")},className:l.a.decor,children:[Object(b.jsxs)("label",{className:l.a.label,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(b.jsxs)("label",{className:l.a.label,children:["Number",Object(b.jsx)("input",{type:"text",name:"number",required:!0})]}),Object(b.jsx)("input",{type:"submit",value:"Add contact",className:l.a.buttonSubmit})]})},m=function(e){var t=e.phoneList,n=e.onDelete;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[e.name,": ",e.number,Object(b.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},j=function(e){var t=e.onFilter;return Object(b.jsxs)("label",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"name",onChange:t})]})},h=n(8),f=n.n(h);var x=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],l=i[1],h=s.toLowerCase(),x=n.filter((function(e){return e.name.toLowerCase().includes(h)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:f.a.heading,children:"Phonebook"}),Object(b.jsx)(d,{onAddContact:function(e){return!n.filter((function(t){return t.name===e.name})).length>0?(c([].concat(Object(o.a)(n),[e])),!0):(alert("".concat(e.name," is already in contacts")),!1)}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(j,{onFilter:function(e){l(e.currentTarget.value)}}),Object(b.jsx)(m,{phoneList:x,onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={decor:"contactForm_decor__28d1b",label:"contactForm_label__2zD8P",buttonSubmit:"contactForm_buttonSubmit__Ss8P4"}},8:function(e,t,n){e.exports={heading:"app_heading__2QRAg"}}},[[16,1,2]]]);
//# sourceMappingURL=main.99544c71.chunk.js.map