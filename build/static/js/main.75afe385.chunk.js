(this["webpackJsonptask_1.2.13"]=this["webpackJsonptask_1.2.13"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(17),a=c.n(s),i=c(9),r=c(10),o=c(4),l=c(16),u=c(11),j=c(41),b=c(42),d="DELETE-TASK",m="ONLABEL-CLICK",O="CLEAR-COMPLETED-ITEMS",f="ADD-TASK",p="EDIT-TASK",x="TYPE_CHANGE_TIME_TASK",h={tasks:[{text:"Completed task",time:Date.now(),id:Object(b.a)(),completed:"",dateNow:null,min:0,sec:10},{text:"Editing task",time:Date.now(),id:Object(b.a)(),completed:"",dateNow:null,min:5,sec:10},{text:"Active task",time:Date.now(),id:Object(b.a)(),completed:"",dateNow:null,min:5,sec:10}],itemsLeft:3},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,c=Object(o.a)({},e),n=e.tasks;switch(t.type){case f:var s=Object(b.a)(),a=t.min,i=t.sec;a=Number(a),i=Number(i),(isNaN(a)||isNaN(i))&&(a=0,i=0);var r={text:t.text,id:s,completed:"",time:Date.now(),dateNow:null,min:a,sec:i};c.tasks=Object(u.a)(n),c.tasks.push(r);var l=c.tasks.filter((function(e){return" completed"!==e.completed}));return{tasks:c.tasks,itemsLeft:l.length};case d:var k=n.filter((function(e){return e.id!==t.task.id}));c.tasks=Object(u.a)(k);var v=c.tasks.filter((function(e){return" completed"!==e.completed}));return{tasks:c.tasks,itemsLeft:v.length};case m:var N=c.tasks.map((function(e){return e.id===t.task.id&&""===t.task.completed?Object(o.a)(Object(o.a)({},e),{},{completed:"completed",checkbox:!0}):e.id===t.task.id&&"completed"===t.task.completed?Object(o.a)(Object(o.a)({},e),{},{completed:"",checkbox:!1}):e}));c.tasks=Object(u.a)(N);var y=c.tasks.filter((function(e){return"completed"!==e.completed}));return{tasks:c.tasks,itemsLeft:y.length};case O:var L=n.filter((function(e){return" completed"!==e.completed}));return c.tasks=Object(u.a)(L),{tasks:c.tasks,itemsLeft:c.tasks.length};case p:var C=c.tasks.map((function(e){return e.id===t.itemId?Object(o.a)(Object(o.a)({},e),{},{text:t.text}):e}));return c.tasks=Object(u.a)(C),{tasks:c.tasks,itemsLeft:c.tasks.length};case x:var E=n.map((function(e){return e.time?Object(o.a)(Object(o.a)({},e),{},{dateNow:Object(j.a)(e.time,{addSuffix:!0})}):e}));return c.tasks=Object(u.a)(E),{tasks:c.tasks,itemsLeft:c.tasks.length};default:return e}},v=c(3),N=c(13),y=c(1),L=function(e){var t,c=e.onDeleteItem,s=e.item,a=e.onEditItem,i=e.onLabelClicked,r=e.onChangeTime,o=s.completed,l=s.id,u=s.time,j=s.dateNow,b=s.text,d=s.checkbox,m=s.min,O=s.sec,f=Object(n.useState)(!1),p=Object(N.a)(f,2),x=p[0],h=p[1],k=Object(n.useState)(""),v=Object(N.a)(k,2),L=v[0],C=v[1],E=Object(n.useState)(!1),w=Object(N.a)(E,2),g=w[0],I=w[1],T=Object(n.useState)(O),D=Object(N.a)(T,2),K=D[0],S=D[1],A=Object(n.useState)(m),R=Object(N.a)(A,2),_=R[0],P=R[1];Object(n.useEffect)((function(){return g&&(d||function(){var e=6e4*_+1e3*K;t=setInterval((function(){var c=e-1e3,n=Math.floor(c/6e4),a=Math.floor(c%6e4/1e3);c<0?(i(s,d),clearInterval(t)):(P(n),S(a))}),1e3)}()),function(){return clearInterval(t)}}));return Object(n.useEffect)((function(){var e=setInterval((function(){r(u)}),5e3);return function(){return clearInterval(e)}})),Object(y.jsxs)("li",{className:o,children:[!x&&Object(y.jsxs)("div",{className:"view",children:[!d&&Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{className:"toggle",type:"checkbox",defaultChecked:!1,onClick:function(){i(s,d)}}),Object(y.jsxs)("label",{children:[Object(y.jsx)("span",{className:"description",role:"presentation",onClick:function(){i(s,d)},children:b}),Object(y.jsxs)("span",{className:"timer-description",children:[Object(y.jsx)("button",{className:"icon icon-play",type:"button","aria-label":"play-btn",onClick:function(){I(!0)}}),Object(y.jsx)("button",{className:"icon icon-pause",type:"button","aria-label":"pause-btn",onClick:function(){I(!1)}}),_,":",K]}),Object(y.jsxs)("span",{className:"created",children:["created ",j]})]})]}),d&&Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{className:"toggle",type:"checkbox",defaultChecked:!0,onClick:function(){i(s,d)}}),Object(y.jsxs)("label",{children:[Object(y.jsx)("span",{className:"description",role:"presentation",onClick:function(){i(s,d)},children:b}),Object(y.jsxs)("span",{className:"description",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"icon icon-play",type:"button","aria-label":"icon-play"}),Object(y.jsx)("button",{className:"icon icon-pause",type:"button","aria-label":"icon-pause"})]}),Object(y.jsxs)("div",{children:[_,":",K]})]}),Object(y.jsxs)("span",{className:"created",children:["created ",j]})]})]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"button",className:"icon icon-edit",onClick:function(){return h(!0)},"aria-label":"edit-btn"})}),Object(y.jsx)("button",{type:"button",className:"icon icon-destroy",onClick:function(){c(s)},"aria-label":"destroy-btn"})]}),x&&Object(y.jsx)("div",{children:Object(y.jsx)("input",{className:"new-todo",placeholder:"Edit your message",onKeyPress:function(e){"Enter"===e.key&&(h(!1),a(L,l))},onChange:function(e){C(e.currentTarget.value)}})})]},l)},C=function(e){return Object(y.jsx)(L,Object(o.a)({},e))},E=function(e){var t=e.tasks,c=t.map((function(t){return" completed"!==t.completed?Object(y.jsx)(v.a,{exact:!0,path:"/active",render:function(){return Object(y.jsx)(C,Object(o.a)({item:t},e),t.id)}}):Object(y.jsx)(v.a,{exact:!0,path:"/completed",render:function(){return Object(y.jsx)(C,Object(o.a)({item:t},e),t.id)}})})),n=t.map((function(t){return Object(y.jsx)(v.a,{exact:!0,path:"/all",render:function(){return Object(y.jsx)(C,Object(o.a)({item:t},e),t.id)}})}));return Object(y.jsxs)("ul",{className:"todo-list",children:[n,c]})},w=Object(l.b)(Object(i.b)((function(e){return{tasks:e.taskListReducer.tasks,itemsLeft:e.taskListReducer.itemsLeft}}),(function(e){return{onEditItem:function(t,c){e(function(e,t){return{text:e,itemId:t,type:p}}(t,c))},onDeleteItem:function(t){e({task:t,type:d})},onLabelClicked:function(t,c){e(function(e,t){return{task:e,checkbox:t,type:m}}(t,c))},onChangeTime:function(t){e({type:x})}}})))((function(e){return Object(y.jsx)(E,Object(o.a)({},e))})),g=function(e){var t=e.handleKeyPress,c=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(n.useRef)(null);Object(n.useEffect)((function(){c.current.focus()}));var i=function(e){if("Enter"===e.key){var n=c.current.value,i=s.current.value,r=a.current.value;t(n,i,r),c.current.value="",s.current.value="",a.current.value=""}};return Object(y.jsxs)("header",{className:"header",children:[Object(y.jsx)("h1",{children:"todos"}),Object(y.jsxs)("div",{className:"header-container",children:[Object(y.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",ref:c,onKeyPress:i}),Object(y.jsx)("input",{type:"text",placeholder:"min",className:"new-todo-form__timer",onKeyPress:i,ref:s}),Object(y.jsx)("input",{type:"text",placeholder:"sec",className:"new-todo-form__timer",onKeyPress:i,ref:a})]})]})},I=Object(i.b)((function(e){return{tasks:e.taskListReducer.tasks,itemsLeft:e.taskListReducer.itemsLeft}}),(function(e){return{handleKeyPress:function(t,c,n){e(function(e,t,c){return{text:e,min:t,sec:c,type:f}}(t,c,n))}}}))(g),T=function(){return Object(y.jsxs)("ul",{className:"filters",children:[Object(y.jsx)(r.b,{exact:!0,to:"/all",children:Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"button",children:"All"})})}),Object(y.jsx)(r.b,{to:"/active",children:Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"button",children:"active"})})}),Object(y.jsx)(r.b,{to:"/completed",children:Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"button",children:"completed"})})})]})},D=function(e){var t=e.itemsLeft,c=e.clearCompleted;return Object(y.jsxs)("footer",{className:"footer",children:[Object(y.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(y.jsx)(T,{}),Object(y.jsx)("button",{className:"clear-completed",onClick:c,type:"button",children:"Clear completed"})]})},K=Object(i.b)((function(e){return{itemsLeft:e.taskListReducer.itemsLeft}}),(function(e){return{clearCompleted:function(){var t;e({tasks:t,type:O})}}}))(D),S=function(){return Object(y.jsxs)("section",{className:"todoapp",children:[Object(y.jsx)(I,{}),Object(y.jsxs)("section",{className:"main",children:[Object(y.jsx)(w,{}),Object(y.jsx)(K,{})]})]})},A=Object(l.a)({taskListReducer:k}),R=Object(l.c)(A);window.store=R;var _=R;a.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(i.a,{store:_,children:Object(y.jsx)(S,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.75afe385.chunk.js.map