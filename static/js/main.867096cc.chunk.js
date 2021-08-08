(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,n,e){t.exports={contacts_form:"ContactForm_contacts_form__3rwVh",form_button:"ContactForm_form_button__XIKai",label:"ContactForm_label__kPGNc",input:"ContactForm_input__1gULE"}},23:function(t,n,e){t.exports={stat_list:"ContactList_stat_list__3bDt0",item:"ContactList_item__28Ao6",contact_list:"ContactList_contact_list__3raoh",contact_item:"ContactList_contact_item__36cFt",item_button:"ContactList_item_button__33p0B"}},27:function(t,n,e){t.exports={friend_list:"Filter_friend_list__WcZbJ",item:"Filter_item__1mttl",avatar:"Filter_avatar__4Ph49",name:"Filter_name__3TLjy",status_isOnline:"Filter_status_isOnline__3uerV",status_isOffline:"Filter_status_isOffline__WEsIC",label:"Filter_label__3hROY",input:"Filter_input__3MkT7"}},28:function(t,n,e){t.exports={contact_name:"ElementContactList_contact_name__3IFuo",contact_number:"ElementContactList_contact_number__1mbb8"}},40:function(t,n,e){t.exports={Container:"Container_Container__14iBF"}},71:function(t,n,e){},74:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(19),o=e.n(r),i=e(13),s=e(14),u=e(16),l=e(15),b=e(40),j=e.n(b),m=e(1),d=function(t){var n=t.children;return Object(m.jsx)("div",{className:j.a.Container,children:n})},f=e(5),h=e(9),_=e(26),O=e.n(_),p=e(41),C=e(18),v=e.n(C),x=e(3),g=Object(x.b)("contacts/fetchContactRequest"),y=Object(x.b)("contacts/fetchContactSuccess"),F=Object(x.b)("contacts/fetchContactError"),k=Object(x.b)("contacts/addContactRequest"),N=Object(x.b)("contacts/addContactSuccess"),I=Object(x.b)("contacts/addContactError"),L=Object(x.b)("contacts/deleteContactRequest"),w=Object(x.b)("contacts/deleteContactSuccess"),S=Object(x.b)("contacts/deleteContactError"),A=Object(x.b)("contacts/changeFilter");v.a.defaults.baseURL="http://localhost:4040";var E=e(76),P=e(10),q=e.n(P),z=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(i.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.nameInputId=Object(E.a)(),t.numberInputId=Object(E.a)(),t.handleChange=function(n){var e=n.currentTarget,c=e.name,a=e.value;t.setState(Object(f.a)({},c,a))},t.handleSubmit=function(n){n.preventDefault();var e=t.state,c=e.name,a=e.number;if(""!==c&&""!==a)return t.props.onSubmit(c,a),void t.reset();alert("Please fill empty fields")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:q.a.contacts_form,children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:q.a.label,children:["Name",Object(m.jsx)("input",{type:"text",value:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId,className:q.a.input})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("label",{htmlFor:this.numberInputId,className:q.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",value:e,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId,className:q.a.input})]})}),Object(m.jsx)("button",{type:"submit",className:q.a.form_button,children:"Add contact"})]})})}}]),e}(c.Component);z.defaultProps={name:"",number:""};var R=Object(h.b)(null,(function(t){return{onSubmit:function(n,e){return t(function(t,n){return function(e){var c={name:t,number:n};e(k()),v.a.post("/contacts",c).then((function(t){var n=t.data;return e(N(n))})).catch((function(t){return e(I(t))}))}}(n,e))}}}))(z),B=e(27),D=e.n(B),J=e(21),M=function(t){return t.contacts.loading},T=function(t){return t.contacts.filter},Z=Object(J.a)([function(t){return t.contacts.items},T],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),W=Object(h.b)((function(t){return{value:T(t)}}),(function(t){return{onChange:function(n){return t(A(n.target.value))}}}))((function(t){var n=t.value,e=t.onChange;return Object(m.jsxs)("label",{className:D.a.label,children:["Find contact by name",Object(m.jsx)("input",{type:"text",value:n,onChange:e,className:D.a.input})]})})),U=e(28),V=e.n(U),G=function(t){var n=t.name,e=t.number;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{className:V.a.contact_name,children:[n,": "]}),Object(m.jsx)("span",{className:V.a.contact_number,children:e})]})};G.defaultProps={name:"Hello World",number:123456789};var H,K,X=G,Y=e(23),$=e.n(Y),Q=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(){return Object(i.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.onfetchContacts()}},{key:"render",value:function(){var t=this;return Object(m.jsxs)(m.Fragment,{children:[this.props.isLoadingContacts&&Object(m.jsx)("h1",{children:"....\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c"}),Object(m.jsx)("ul",{className:$.a.contact_list,children:this.props.contacts.map((function(n){var e=n.id,c=n.name,a=n.number;return Object(m.jsxs)("li",{className:$.a.contact_item,children:[Object(m.jsx)(X,{name:c,number:a}),Object(m.jsx)("button",{type:"button",onClick:function(){t.props.onClick(e)},className:$.a.item_button,children:"Delete"})]},e)}))})]})}}]),e}(c.Component),tt=Object(h.b)((function(t){return{contacts:Z(t),isLoadingContacts:M(t)}}),(function(t){return{onClick:function(n){return t(function(t){return function(n){n(L()),v.a.delete("/contacts/".concat(t)).then((function(){return n(w(t))})).catch((function(t){return n(S(t))}))}}(n))},onfetchContacts:function(){return t(function(){var t=Object(p.a)(O.a.mark((function t(n){var e,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g()),t.prev=1,t.next=4,v.a.get("/contacts");case 4:e=t.sent,c=e.data,n(y(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(F(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}())}}}))(Q),nt=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(){return Object(i.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){return Object(m.jsx)(d,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(R,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(W,{}),Object(m.jsx)(tt,{})]})})}}]),e}(a.a.Component),et=e(22),ct=e(4),at=Object(x.c)([],(H={},Object(f.a)(H,y,(function(t,n){return n.payload})),Object(f.a)(H,N,(function(t,n){var e=n.payload;return t.map((function(t){return t.name})).includes(e.name)?alert("".concat(e.name," is already exist")):[].concat(Object(et.a)(t),[e])})),Object(f.a)(H,w,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),H)),rt=Object(x.c)(!1,(K={},Object(f.a)(K,g,(function(){return!0})),Object(f.a)(K,y,(function(){return!1})),Object(f.a)(K,F,(function(){return!1})),Object(f.a)(K,k,(function(){return!0})),Object(f.a)(K,N,(function(){return!1})),Object(f.a)(K,I,(function(){return!1})),Object(f.a)(K,L,(function(){return!0})),Object(f.a)(K,w,(function(){return!1})),Object(f.a)(K,S,(function(){return!1})),K)),ot=Object(x.c)("",Object(f.a)({},A,(function(t,n){return n.payload}))),it=Object(ct.b)({items:at,filter:ot,loading:rt}),st=e(42),ut=e.n(st),lt=e(11),bt=[].concat(Object(et.a)(Object(x.d)({serializableCheck:{ignoredActions:[lt.a,lt.f,lt.b,lt.c,lt.d,lt.e]}})),[ut.a]),jt=Object(x.a)({reducer:{contacts:it},middleware:bt,devTools:!1}),mt=(e(71),e(72),e(43));o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h.a,{store:jt,children:Object(m.jsx)(mt.a,{children:Object(m.jsx)(nt,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.867096cc.chunk.js.map