(this.webpackJsonppruebasreact=this.webpackJsonppruebasreact||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),o=n.n(r),d=(n(11),n(12),n(3)),i=n(2),s=n(5),j=n(0),b=function(e){var t=e.todo,n=e.index,c=e.deleteTodo;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{classname:"list",children:[Object(j.jsxs)("h3",{children:[t.cantidad,"-",t.todo]}),Object(j.jsx)("button",{className:"btn-delete",onClick:function(){return c(n)},children:"x"})]})})},u=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({list:[{todo:"Manzanas",cantidad:5},{todo:"Gaseosas",cantidad:6},{todo:"Detergente",cantidad:4},{todo:"Jugo de manzana",cantidad:6}]}),o=Object(s.a)(r,2),u=o[0],l=o[1],O=function(e){var t=Object(i.a)({},u);t.list.splice(e,1),l(t)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(j.jsxs)("center",{children:[Object(j.jsx)("label",{children:"Nombre de producto"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"todo",onChange:function(e){return a(Object(i.a)(Object(i.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}}),Object(j.jsx)("label",{children:"Cantidad de producto"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",name:"cantidad",onChange:function(e){return a(Object(i.a)(Object(i.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}}),Object(j.jsx)("button",{onClick:function(e){0!==Object.keys(n).length&&""!==n.todo.trim()?0!==n.cantidad.length?n.cantidad<=0?alert("El campo cantidad deber ser mayor a 0"):(u.list.push(n),l(Object(i.a)({},u))):alert("El campo cantidad no puede estar vac\xedo"):alert("El campo de nombre de producto no puede estar vacio")},children:"Agregar"})]})}),u.list.map((function(e,t){return Object(j.jsx)(b,{todo:e,index:t,deleteTodo:O},t)}))]})},l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"App-content",children:[Object(j.jsx)("p",{children:"Aqu\xed haremos nuestra lista de compras"}),Object(j.jsx)(u,{})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.a52f8be2.chunk.js.map