(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[3],{294:function(e,s,a){e.exports={item:"Dialogs_item__29pPd",dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up"}},295:function(e,s,a){},296:function(e,s,a){},302:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),i=a(130),c=a(294),o=a.n(c),r=a(15),d=a(295),g=a.n(d),l=a(1),j=function(e){var s="/dialogs/".concat(e.id);return Object(l.jsx)("div",{className:g.a.dialog+" "+g.a.active,children:Object(l.jsx)(r.b,{to:s,children:e.name})})},u=a(296),b=a.n(u),m=function(e){return Object(l.jsx)("div",{className:b.a.dialog,children:e.message})},O=a(9),f=a(93),p=a(131),h=a(38),x=a(90),_=Object(x.a)(50),v=Object(p.a)({form:"message"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{component:h.b,validate:[x.b,_],name:"newMessageBody",placeholder:"Enter your message..."})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"send"})})]})})),D=function(e){var s=e.dialogsData.map((function(e){return Object(l.jsx)(j,{name:e.name,id:e.id})})),a=e.messagesData.map((function(e){return Object(l.jsx)(m,{message:e.message,id:e.id})}));return e.isLogin?Object(l.jsxs)("div",{className:o.a.dialogs,children:[Object(l.jsx)("div",{className:o.a.dialogsItems,children:s}),Object(l.jsx)("div",{className:o.a.messages,children:Object(l.jsx)("div",{children:a})}),Object(l.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(l.jsx)(O.a,{to:"/login"})},y=a(18),w=a(5),M=a(28),N=a(29),k=a(31),B=a(30),L=a(10);s.default=Object(L.d)(Object(y.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(k.a)(t,s);var a=Object(B.a)(t);function t(){return Object(M.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return this.props.isLogin?Object(l.jsx)(e,Object(w.a)({},this.props)):Object(l.jsx)(O.a,{to:"/login"})}}]),t}(n.a.Component);return Object(y.b)((function(e){return{isLogin:e.auth.isLogin}}))(s)}))(D)}}]);
//# sourceMappingURL=3.77967a1c.chunk.js.map