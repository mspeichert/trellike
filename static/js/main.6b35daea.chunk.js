(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(n,e,t){n.exports=t(43)},43:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(10),u=t.n(c),i=t(9),o=t(4),l=t(17),f=t(22),d=t(23),m=t.n(d),s=t(1),b=t(2),v="List name shouldn't be empty",j="Add new list",O="List name shouldn't exceed 30 characters",p="Task title shouldn't be empty",E="Add new task",g="Add description",y="Edit title",k="Edit description",h="\u2713",x="\u2715",w="edit",C="Trel",I="like",S=t(3),z=function(n){var e=Object(r.useState)(n),t=Object(S.a)(e,2),a=t[0],c=t[1];return[a,function(n){return c(n.target.value)},function(){return c(n)}]},T=function(n,e){var t=Object(r.useState)(""),a=Object(S.a)(t,2),c=a[0],u=a[1];return[c,function(t){var r=n(t);return r?(u(r),!1):(e(t),!0)},function(){return u("")}]};function A(){var n=Object(s.a)(["\n      @media (","-width: ","px) {\n        ",";\n      }\n    "]);return A=function(){return n},n}var L={lg:1199,md:991,sm:767},D=function(n){return Object.keys(L).reduce(function(e,t){return e[t]=function(){return Object(b.b)(A(),n,L[t],b.b.apply(void 0,arguments))},e},{})},R={min:D("min"),max:D("max")};function F(){var n=Object(s.a)(["\n        font-size: 12px;      \n      "]);return F=function(){return n},n}function N(){var n=Object(s.a)(["\n    body {\n      color: ",";\n      background-color: ",';\n      font-family: "Roboto", sans-serif;\n      font-size: 16px;\n      ',"\n    }\n  "]);return N=function(){return n},n}var U="#F5F5ED",q="#1f1f1f",B="red",J=Object(b.a)(N(),U,q,R.max.md(F()));function K(){var n=Object(s.a)(["\n  font-size: 0.75em;\n  color: ",";\n  margin: 0;\n"]);return K=function(){return n},n}function P(){var n=Object(s.a)(["\n  background-color: transparent;\n  color: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return P=function(){return n},n}function V(){var n=Object(s.a)(["\n  outline: none;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  border-bottom: "," 1px\n    solid;\n  &:focus {\n    border-bottom-width: 2px;\n  }\n"]);return V=function(){return n},n}var G=b.c.input(V(),U,function(n){return n.error?B:U}),H=b.c.button(P(),U),M=b.c.p(K(),B);function Q(){var n=Object(s.a)(["\n  font-size: 2em;\n"]);return Q=function(){return n},n}function W(){var n=Object(s.a)(["\n  font-size: 2em;\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  margin: 2em;\n  display: flex;\n  flex-direction: column;\n"]);return Y=function(){return n},n}var Z=b.c.div(Y()),$=b.c.div(X()),_=Object(b.c)(G)(W()),nn=Object(b.c)(H)(Q()),en=function(n){var e=n.onConfirm,t=n.validate,c=Object(r.useState)(!1),u=Object(S.a)(c,2),i=u[0],o=u[1],l=z(""),f=Object(S.a)(l,3),d=f[0],m=f[1],s=f[2],b=T(t,e),v=Object(S.a)(b,3),O=v[0],p=v[1],E=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(){e.forEach(function(n){return n.call()})}}(s,v[2]);return a.a.createElement(Z,null,O&&a.a.createElement(M,null,O),a.a.createElement(_,{type:"text",placeholder:j,value:d,onChange:m,onFocus:function(){return o(!0)},error:O}),i&&a.a.createElement($,null,a.a.createElement(nn,{onClick:function(){p(d)&&(E(),o(!1))}},h),a.a.createElement(nn,{onClick:function(){o(!1),E()}},x)))};function tn(){var n=Object(s.a)(["\n  font-size: 2em;\n  margin-bottom: 0.75em;\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  font-size: 2.25em;\n  margin-bottom: 0.75em;\n  width: 14rem;\n"]);return rn=function(){return n},n}function an(){var n=Object(s.a)(["\n  margin-top: 0;\n  margin-bottom: 0.75em;\n  font-size: 2.25em;\n"]);return an=function(){return n},n}function cn(){var n=Object(s.a)(["\n  width: 17em;\n  flex-shrink: 0;\n  margin: 2em;\n  padding: 2em;\n  border-radius: 1em;\n  background-color: rgba(245, 245, 237, 0.3);\n"]);return cn=function(){return n},n}function un(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  margin-bottom: 0.75em;\n  margin-left: 0.5em;\n  opacity: 0.75;\n  cursor: pointer;\n"]);return un=function(){return n},n}function on(){var n=Object(s.a)(["\n  display: flex;\n"]);return on=function(){return n},n}var ln=b.c.div(on()),fn=b.c.span(un()),dn=b.c.div(cn()),mn=b.c.h2(an()),sn=Object(b.c)(G)(rn()),bn=Object(b.c)(H)(tn()),vn=function(n){var e=n.name,t=n.children,c=n.validateEdit,u=n.onUpdate,i=Object(r.useState)(!1),o=Object(S.a)(i,2),l=o[0],f=o[1],d=z(e),m=Object(S.a)(d,2),s=m[0],b=m[1],v=T(c,u),j=Object(S.a)(v,3),O=j[0],p=j[1],E=j[2];return a.a.createElement(dn,null,O&&a.a.createElement(M,null,O),a.a.createElement(ln,null,l?a.a.createElement(r.Fragment,null,a.a.createElement(sn,{value:s,onChange:b}),a.a.createElement(bn,{onClick:function(){p(s)&&(f(!1),E())}},h)):a.a.createElement(mn,null,e,a.a.createElement(fn,{onClick:function(){return f(!0)}},w))),t)},jn=t(5),On=t.n(jn);function pn(){var n=Object(s.a)(["\n  font-size: 1.5em;\n"]);return pn=function(){return n},n}function En(){var n=Object(s.a)(["\n  font-size: 1.25em;\n  margin-top: 1em;\n  &::placeholder {\n    opacity: 0.75;\n    color: ",";\n  }\n"]);return En=function(){return n},n}function gn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return gn=function(){return n},n}function yn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return yn=function(){return n},n}var kn=b.c.div(yn()),hn=b.c.div(gn()),xn=Object(b.c)(G)(En(),U),wn=Object(b.c)(H)(pn()),Cn=function(){},In=function(n){var e=n.onConfirm,t=n.validate,c=n.initialValues,u=n.onResign,i=void 0===u?Cn:u,o=Boolean(c),l=Object(r.useState)(o),f=Object(S.a)(l,2),d=f[0],m=f[1],s=z(o?c.title:""),b=Object(S.a)(s,3),v=b[0],j=b[1],O=b[2],p=z(o?c.description:""),w=Object(S.a)(p,3),C=w[0],I=w[1],A=w[2],L=T(t,function(){return e({title:v,description:C})}),D=Object(S.a)(L,3),R=D[0],F=D[1],N=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(){e.forEach(function(n){return n.call()})}}(O,D[2],A);return a.a.createElement(kn,null,R&&a.a.createElement(M,null,R),a.a.createElement(xn,{placeholder:o?y:E,type:"text",value:v,onChange:j,onFocus:function(){return m(!0)}}),d&&a.a.createElement(r.Fragment,null,a.a.createElement(xn,{placeholder:o?k:g,as:"textarea",value:C,onChange:I}),a.a.createElement(hn,null,a.a.createElement(wn,{onClick:function(){return F(v)&&N()}},h),a.a.createElement(wn,{onClick:function(){m(!1),N(),i()}},x))))};function Sn(){var n=Object(s.a)(["\n  font-size: 0.75em;\n  position: absolute;\n  top: 0.25em;\n  right: 0.25em;\n  color: ",";\n"]);return Sn=function(){return n},n}function zn(){var n=Object(s.a)(["\n  position: relative;\n  background-color: ",";\n  border-radius: 0.5em;\n  margin: 0.5em 0;\n  padding: 0.5em 1.25em;\n"]);return zn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  color: ",";\n  margin: 0.25em 0;\n"]);return Tn=function(){return n},n}function An(){var n=Object(s.a)(["\n  color: ",";\n  margin: 0.5em 0;\n"]);return An=function(){return n},n}var Ln,Dn=b.c.h4(An(),q),Rn=b.c.p(Tn(),q),Fn=b.c.div(zn(),U),Nn=Object(b.c)(H)(Sn(),q),Un=function(n){var e=n.title,t=n.description,c=void 0===t?"":t,u=n.onUpdate,i=n.validate,o=Object(r.useState)(!1),l=Object(S.a)(o,2),f=l[0],d=l[1];return f?a.a.createElement(In,{onConfirm:function(n){return u(n)&&d(!1)},onResign:function(){return d(!1)},validate:i,initialValues:{title:e,description:c}}):a.a.createElement(Fn,null,a.a.createElement(Dn,null,e),a.a.createElement(Rn,null,c),a.a.createElement(Nn,{onClick:function(){return d(!0)}},w))},qn=t(6),Bn=t(11),Jn=t.n(Bn),Kn=function(n,e){return{type:n,payload:e}},Pn="TASKS/ADD",Vn="TASKS/UPDATE",Gn=t(7),Hn=t(12),Mn=Object(Hn.createReducer)({},(Ln={},Object(Gn.a)(Ln,Pn,function(n,e){var t=e.payload;return Object(qn.a)({},n,Object(Gn.a)({},t.id,t))}),Object(Gn.a)(Ln,Vn,function(n,e){var t=e.payload;return Object(qn.a)({},n,Object(Gn.a)({},t.id,Object(qn.a)({},n[t.id],t)))}),Ln)),Qn=Object(o.c)({byId:Mn});function Wn(){var n=Object(s.a)([""]);return Wn=function(){return n},n}var Xn=Object(i.b)(function(n,e){var t=e.listId,r=[],a=n.lists.byId[t];return a&&(r=a.tasks.map(function(e){return n.tasks.byId[e]})),{tasks:r}},function(n,e){var t=e.listId;return{addNewTask:function(e){return n(function(n,e){return Kn(Pn,Object(qn.a)({id:Jn()(),listId:n},e))}(t,e))},updateTask:function(e,t){return n(function(n,e){return Kn(Vn,Object(qn.a)({id:n},e))}(e,t))}}}),Yn=function(n){return n?null:p},Zn=b.c.div(Wn()),$n=Xn(function(n){var e=n.tasks,t=n.addNewTask,r=n.updateTask;return a.a.createElement(Zn,null,e.map(function(n){return a.a.createElement(Un,Object.assign({},n,{key:n.id,validate:Yn,onUpdate:function(e){return r(n.id,e)}}))}),a.a.createElement(In,{onConfirm:t,validate:Yn}))});$n.propTypes={items:On.a.array.isRequired,listId:On.a.string.isRequired};var _n,ne=$n,ee="LISTS/ADD",te="LISTS/UPDATE",re=t(26),ae=Object(Hn.createReducer)({},(_n={},Object(Gn.a)(_n,ee,function(n,e){var t=e.payload;return Object(qn.a)({},n,Object(Gn.a)({},t.id,function(n){var e=Object(re.a)({},n);return Object(qn.a)({tasks:[],index:0},e)}(t)))}),Object(Gn.a)(_n,te,function(n,e){var t=e.payload,r=t.id,a=t.name;return Object(qn.a)({},n,Object(Gn.a)({},r,Object(qn.a)({},n[r],{name:a})))}),Object(Gn.a)(_n,Pn,function(n,e){var t=e.payload,r=t.listId,a=t.id;return Object(qn.a)({},n,Object(Gn.a)({},r,Object(qn.a)({},n[r],{tasks:n[r].tasks.concat(a)})))}),_n)),ce=Object(o.c)({byId:ae});function ue(){var n=Object(s.a)(["\n  display: flex;\n  align-items: flex-start;\n  overflow-x: scroll;\n  height: calc(100vh - 6.5em);\n"]);return ue=function(){return n},n}var ie=b.c.div(ue()),oe=Object(i.b)(function(n){return{lists:n.lists.byId}},function(n){return{addNewList:function(e){return n((t=e,Kn(ee,{id:Jn()(),name:t})));var t},updateListName:function(e,t){return n(function(n,e){return Kn(te,{id:n,name:e})}(e,t))}}}),le=function(n){return n?n.length>30?O:null:v},fe=oe(function(n){var e=n.lists,t=n.addNewList,r=n.updateListName;return a.a.createElement(ie,null,Object.keys(e).map(function(n){var t=e[n],c=t.name,u=t.tasks;return a.a.createElement(vn,{name:c,key:n,onUpdate:function(e){return r(n,e)},validateEdit:le},a.a.createElement(ne,{items:u,listId:n}))}),a.a.createElement(en,{onConfirm:t,validate:le}))}),de=Object(o.c)({lists:ce,tasks:Qn}),me=[f.a],se=[o.a.apply(void 0,me)],be={key:"trellike",storage:m.a},ve=o.d,je=Object(l.a)(be,de),Oe=Object(o.e)(je,{},ve.apply(void 0,se)),pe=Object(l.b)(Oe),Ee=Oe,ge=t(27);function ye(){var n=Object(s.a)(["\n  font-weight: 700;\n"]);return ye=function(){return n},n}function ke(){var n=Object(s.a)(["\n  font-weight: 500;\n  font-size: 3em;\n  margin: 0.75em 0 0 1em;\n"]);return ke=function(){return n},n}var he=b.c.h1(ke()),xe=b.c.span(ye()),we=function(){return a.a.createElement(he,null,a.a.createElement(xe,null,C),I)};function Ce(){var n=Object(s.a)([""]);return Ce=function(){return n},n}var Ie=b.c.div(Ce()),Se=function(){return a.a.createElement(Ie,null,a.a.createElement(J,null),a.a.createElement(we,null),a.a.createElement(ge.a,{persistor:pe},a.a.createElement(fe,null)))};u.a.render(a.a.createElement(i.a,{store:Ee},a.a.createElement(Se,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.6b35daea.chunk.js.map