(this["webpackJsonpmain-dz"]=this["webpackJsonpmain-dz"]||[]).push([[3],{15:function(t,e,n){t.exports={headerbox:"header_headerbox__1z4Jp",boxLink:"header_boxLink__aVeVe",headerLink:"header_headerLink__3scb1",hederButtonLogout:"header_hederButtonLogout__N_E5r",nameUser:"header_nameUser__TtPPo",activeLink:"header_activeLink__eplz9"}},25:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return g}));var r=n(16),c=n.n(r),a=n(24),o=n(19),u=n.n(o),i=(n(0),n(48)),s=(n(80),n(81),n(49)),b=(n(82),function(t){Object(i.info)({title:"Button Clicked",text:t,modules:new Map([[s,{confirm:!0,buttons:[{text:"Ok",primary:!0,click:function(t){t.close()}}]}]])})}),j=n(4);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var f=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){u.a.defaults.headers.common.Authorization=""},O=function(t,e){b(400===t?e:"Something went wrong")},l=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(j.k)()),e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,f(a.token),n(Object(j.l)(a)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o=e.t0.response.status,O(o,"such user already exists"),n(Object(j.j)(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(j.e)()),e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:r=e.sent,a=r.data,f(a.token),n(Object(j.f)(a)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o=e.t0.response.status,O(o,"you entered an incorrect email or password, please try again"),n(Object(j.d)(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(j.h)()),t.prev=1,t.next=4,u.a.post("/users/logout");case 4:d(),e(Object(j.i)()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),b("Something went wrong"),e(Object(j.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.authorization.token){t.next=3;break}return t.abrupt("return");case 3:return e(Object(j.b)()),t.prev=4,f(a),t.next=8,u.a.get("/users/current");case 8:o=t.sent,i=o.data,e(Object(j.c)(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),e(Object(j.a)(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},38:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(22),c=function(t){return t.contacts.items},a=function(t){return t.contacts.filter},o=function(t){return t.contacts.logger},u=Object(r.a)([c,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){var e=t.name;return e.toLowerCase().includes(n)}))}))},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return l}));var r=n(2),c=Object(r.b)("authorization/registrationRequest"),a=Object(r.b)("authorization/registrationSuccess"),o=Object(r.b)("authorization/registrationError"),u=Object(r.b)("authorization/loginRequest"),i=Object(r.b)("authorization/loginSuccess"),s=Object(r.b)("authorization/loginError"),b=Object(r.b)("authorization/logoutRequest"),j=Object(r.b)("authorization/logoutSuccess"),f=Object(r.b)("authorization/logoutError"),d=Object(r.b)("authorization/currentRequest"),O=Object(r.b)("authorization/currentSuccess"),l=Object(r.b)("authorization/currentError")},56:function(t,e,n){},57:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var r,c,a,o,u,i,s=n(0),b=n.n(s),j=n(26),f=n.n(j),d=(n(56),n(34)),O=n(35),l=n(37),h=n(36),p=(n(57),n(13)),g=n(38),x=n(25),m=n(6),v=n(20),k=n(29),z=function(t){return t.authorization.authorization},y=function(t){return t.authorization.user.name},L=n(1),w=["component","authorizations","redirect"],C=Object(p.b)((function(t){return{authorizations:z(t)}}))((function(t){var e=t.component,n=t.authorizations,r=t.redirect,c=Object(k.a)(t,w);return Object(L.jsx)(m.b,Object(v.a)(Object(v.a)({},c),{},{render:function(t){return n?Object(L.jsx)(e,Object(v.a)({},t)):Object(L.jsx)(m.a,{to:r})}}))})),_=["component","authorizations","redirect"],S=Object(p.b)((function(t){return{authorizations:z(t)}}))((function(t){var e=t.component,n=t.authorizations,r=t.redirect,c=Object(k.a)(t,_);return Object(L.jsx)(m.b,Object(v.a)(Object(v.a)({},c),{},{render:function(t){return n&&c.restricted?Object(L.jsx)(m.a,{to:r}):Object(L.jsx)(e,Object(v.a)({},t))}}))})),E=n(15),N=n.n(E),R={logout:x.c},U=Object(p.b)((function(t){return{contactsItems:y(t)}}),R)((function(t){var e=t.contactsItems,n=t.logout;return Object(L.jsx)("div",{children:Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{className:N.a.nameUser,children:e}),Object(L.jsx)("button",{className:N.a.hederButtonLogout,onClick:n,children:"logout"})]})})})),q=n(18),B=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(q.b,{className:N.a.headerLink,activeClassName:N.a.activeLink,to:"/Login",children:"sing in"}),Object(L.jsx)(q.b,{className:N.a.headerLink,activeClassName:N.a.activeLink,to:"/register",children:"register"})]})},A=Object(p.b)((function(t){return{UserAction:z(t)}}))((function(t){var e=t.UserAction;return Object(L.jsx)("div",{className:N.a.headerbox,children:Object(L.jsx)("div",{className:N.a.boxLink,children:e?Object(L.jsx)(U,{}):Object(L.jsx)(B,{})})})})),F=Object(s.lazy)((function(){return n.e(2).then(n.bind(null,94))})),I=Object(s.lazy)((function(){return n.e(0).then(n.bind(null,97))})),P=Object(s.lazy)((function(){return n.e(1).then(n.bind(null,95))})),T=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).componentDidMount=function(){t.props.currentUser()},t}return Object(O.a)(n,[{key:"render",value:function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(A,{}),Object(L.jsxs)(m.d,{children:[Object(L.jsx)(S,{path:"/register",restricted:!0,redirect:"/",component:P}),Object(L.jsx)(S,{path:"/Login",restricted:!0,redirect:"/",component:F}),Object(L.jsx)(C,{path:"/",redirect:"/Login",component:I}),Object(L.jsx)(m.a,{to:"/login"})]}),this.props.logger&&Object(L.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a..."})]})}}]),n}(s.Component),J={currentUser:x.a},M=Object(p.b)((function(t){return{logger:Object(g.d)(t)}}),J)(T),D=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,96)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))},V=n(28),G=n(2),H=n(3),K=n(7),Q=n(9),W=Object(G.c)([],(r={},Object(H.a)(r,Q.i,(function(t,e){return e.payload})),Object(H.a)(r,Q.c,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(H.a)(r,Q.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),X=Object(G.c)(!1,(c={},Object(H.a)(c,Q.b,(function(){return!0})),Object(H.a)(c,Q.c,(function(){return!1})),Object(H.a)(c,Q.a,(function(){return!1})),Object(H.a)(c,Q.e,(function(){return!0})),Object(H.a)(c,Q.f,(function(){return!1})),Object(H.a)(c,Q.d,(function(){return!1})),Object(H.a)(c,Q.h,(function(){return!0})),Object(H.a)(c,Q.i,(function(){return!1})),Object(H.a)(c,Q.g,(function(){return!1})),c)),Y=Object(G.c)("",Object(H.a)({},Q.j,(function(t,e){return e.payload}))),Z=Object(K.b)({items:W,filter:Y,logger:X}),$=n(4),tt={name:"",email:""},et=Object(G.c)(tt,(a={},Object(H.a)(a,$.l,(function(t,e){return e.payload.user})),Object(H.a)(a,$.f,(function(t,e){return e.payload.user})),Object(H.a)(a,$.i,(function(){return tt})),Object(H.a)(a,$.c,(function(t,e){return e.payload})),a)),nt=Object(G.c)(null,(o={},Object(H.a)(o,$.l,(function(t,e){return e.payload.token})),Object(H.a)(o,$.f,(function(t,e){return e.payload.token})),Object(H.a)(o,$.i,(function(){return null})),o)),rt=Object(G.c)(null,(u={},Object(H.a)(u,$.j,(function(t,e){return e.payload})),Object(H.a)(u,$.d,(function(t,e){return e.payload})),Object(H.a)(u,$.g,(function(t,e){return e.payload})),Object(H.a)(u,$.a,(function(t,e){return e.payload})),u)),ct=Object(G.c)(!1,(i={},Object(H.a)(i,$.l,(function(){return!0})),Object(H.a)(i,$.f,(function(){return!0})),Object(H.a)(i,$.c,(function(){return!0})),Object(H.a)(i,$.j,(function(){return!1})),Object(H.a)(i,$.d,(function(){return!1})),Object(H.a)(i,$.g,(function(){return!1})),Object(H.a)(i,$.a,(function(){return!1})),Object(H.a)(i,$.i,(function(){return!1})),i)),at=Object(K.b)({user:et,token:nt,error:rt,authorization:ct}),ot=n(17),ut=n(50),it={key:"token",storage:n.n(ut).a,whitelist:["token"]},st=Object(V.a)(Object(G.d)({serializableCheck:{ignoredActions:[ot.a,ot.f,ot.b,ot.c,ot.d,ot.e]}})),bt=Object(G.a)({reducer:{contacts:Z,authorization:Object(ot.g)(it,at)},middleware:st,devTools:!1}),jt={store:bt,persistor:Object(ot.h)(bt)},ft=n(51);f.a.render(Object(L.jsx)(b.a.StrictMode,{children:Object(L.jsx)(q.a,{children:Object(L.jsx)(p.a,{store:jt.store,children:Object(L.jsx)(ft.a,{loading:null,persistor:jt.persistor,children:Object(L.jsx)(M,{})})})})}),document.getElementById("root")),D()},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return f})),n.d(e,"j",(function(){return d}));var r=n(2),c=Object(r.b)("contact/addContactRequest"),a=Object(r.b)("contact/add\u0421ontactSuccess"),o=Object(r.b)("contact/aadContactError"),u=Object(r.b)("contact/deleteContactRequest"),i=Object(r.b)("contact/deleteContactSuccess"),s=Object(r.b)("contact/deleteContactError"),b=Object(r.b)("contact/fetchContactRequest"),j=Object(r.b)("contact/fetch\u0421ontactSuccess"),f=Object(r.b)("contact/fetchContactError"),d=Object(r.b)("filterContact")}},[[87,4,5]]]);
//# sourceMappingURL=main.c2a884f1.chunk.js.map