(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2jbH6",dialogItems:"Dialogs_dialogItems__3EmmG",active:"Dialogs_active__2t4e7",messages:"Dialogs_messages__3kUnN"}},294:function(e,a,t){},295:function(e,a,t){e.exports={message:"Message_message__1_e6t"}},300:function(e,a,t){"use strict";t.r(a);var n=t(127),s=t(0),i=t.n(s),o=t(293),c=t.n(o),m=t(12),l=t(294),r=t.n(l),d=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:r.a.dialog+" "+r.a.active},i.a.createElement(m.b,{to:a},e.name))},g=t(295),u=t.n(g),b=function(e){return i.a.createElement("div",{className:u.a.message},e.message)},f=t(87),_=t(128),E=t(32),v=t(84),p=Object(v.a)(50),j=Object(_.a)({form:"dialogAddMessageForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(f.a,{name:"newMessageBody",component:E.b,validate:[v.b,p],placeholder:"Enter your message..."})),i.a.createElement("button",null,"Send"))}),w=function(e){var a=e.dialogsPage,t=a.dialogs,n=a.messages;return i.a.createElement("div",{className:c.a.dialogs},i.a.createElement("div",{className:c.a.dialogItems},t.map(function(e){return i.a.createElement(d,{key:e.id,id:e.id,name:e.name})})),i.a.createElement("div",{className:c.a.messages},n.map(function(e){return i.a.createElement(b,{key:e.id,message:e.message})})),i.a.createElement(j,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},O=t(11),M=t(106),N=t(7),k=function(e){return{dialogsPage:e.dialogsPage}},y=function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}};Object(N.d)(Object(O.b)(k,y),M.a)(w);a.default=Object(N.d)(Object(O.b)(k,y),M.a)(w)}}]);
//# sourceMappingURL=3.ce9f363c.chunk.js.map