(this.webpackJsonpmozilla=this.webpackJsonpmozilla||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(7),l=n.n(s),i=(n(15),n(4)),r=n(8),d=n(2);var o=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],l=n[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTask(s),l("")},children:[Object(a.jsx)("h1",{className:"label-wrapper",children:Object(a.jsx)("label",{htmlFor:"new-todo-input",children:"What needs to be done?"})}),Object(a.jsxs)("div",{class:"input-ui",children:[Object(a.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:s,onChange:function(e){l(e.target.value)},placeholder:"Add new task here..."}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})]})};var b=function(e){return Object(a.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(a.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("span",{className:"visually-hidden",children:" tasks"})]})};function j(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),s=n[0],l=n[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),o=r[0],b=r[1];var j=Object(a.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,o),b(""),l(!1)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(a.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:o,onChange:function(e){b(e.target.value)}})]}),Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)},children:["Cancel",Object(a.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(a.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),u=Object(a.jsxs)("div",{className:"stack-small",children:[Object(a.jsxs)("div",{className:"c-cb",children:[Object(a.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(a.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsxs)("button",{type:"button",className:"btn",onClick:function(){return l(!0)},children:["Edit ",Object(a.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(a.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(a.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(a.jsx)("li",{className:"todo",children:s?j:u})}var u=n(9),m={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(m);var O=function(e){var t=Object(c.useState)(e.tasks),n=Object(d.a)(t,2),s=n[0],l=n[1],O=Object(c.useState)("All"),h=Object(d.a)(O,2),x=h[0],f=h[1];function v(e){var t=s.map((function(t){return e===t.id?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}));l(t)}function k(e,t){var n=s.map((function(n){return e===n.id?Object(i.a)(Object(i.a)({},n),{},{name:t}):n}));l(n)}var N=s.filter(m[x]).map((function(e){return Object(a.jsx)(j,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:v,deleteTask:y,editTask:k},e.id)})),g=p.map((function(e){return Object(a.jsx)(b,{name:e,isPressed:e===x,setFilter:f},e)}));function y(e){var t=s.filter((function(t){return e!==t.id}));l(t)}var C=1!==N.length?"tasks":"task",w="".concat(N.length," ").concat(C," remaining");return Object(a.jsxs)("div",{className:"todoapp stack-large",children:[Object(a.jsx)("br",{}),Object(a.jsx)(o,{addTask:function(e){var t={id:"todo-"+Object(u.a)(),name:e,completed:!1};l([].concat(Object(r.a)(s),[t]))}}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"filters btn-group stack-exception",children:g}),Object(a.jsx)("h2",{id:"list-heading",children:w}),Object(a.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:N})]})};l.a.render(Object(a.jsx)(O,{tasks:[{id:"todo-0",name:"Wear a mask",completed:!0},{id:"todo-1",name:"Work on project",completed:!1},{id:"todo-2",name:"Get a web dev job",completed:!1}]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3489f21f.chunk.js.map