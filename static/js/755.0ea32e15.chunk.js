"use strict";(self.webpackChunkclear=self.webpackChunkclear||[]).push([[755],{7755:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var i,t,s,o,c,d,l,a,p,x,u,h,f,m,j,Z=r(5705),g=r(168),y=r(6088),b=(0,y.Z)(Z.l0)(i||(i=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 350px;\n"]))),v=(0,y.Z)(Z.gN)(t||(t=(0,g.Z)(["\n    padding: 20px;\n    font-size: 16px;\n    font-weight: 600;\n    border: 1px solid orange;\n"]))),k=y.Z.button(s||(s=(0,g.Z)(["\n    background-color: #2196f3;\n    border: none;\n    padding: 20px;\n    font-size: 16px;\n    font-weight: 700;\n    color: white;\n    border-radius: 20px;\n    cursor: pointer;\n"]))),w=(0,y.Z)(Z.Bc)(o||(o=(0,g.Z)(["\n    color: red;\n    font-size: 16px;\n"]))),T=r(6727),q=r(2548),z=r(9434),C=r(184),I=T.Ry({name:T.Z_("Type a name").required("Name is require"),phone:T.Rx("Type a number").min(8,"Number must be min 8 length").required("Phone is require"),address:T.Z_("Type your address").required("Address is require")}),F=function(){var n=(0,z.I0)();return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Z.J9,{initialValues:{name:"",phone:"",address:""},validationSchema:I,onSubmit:function(e,r){var i=r.resetForm;n((0,q.c)(e)),i()},children:(0,C.jsxs)(b,{children:[(0,C.jsx)(v,{type:"text",name:"name",placeholder:"Type your name"}),(0,C.jsx)(w,{component:"p",name:"name"}),(0,C.jsx)(v,{type:"text",name:"phone",placeholder:"Type your phone"}),(0,C.jsx)(w,{component:"p",name:"phone"}),(0,C.jsx)(v,{type:"text",name:"address",placeholder:"Type your address"}),(0,C.jsx)(w,{component:"p",name:"address"}),(0,C.jsx)(k,{type:"submit",children:"Order now"})]})})})},N=r(6502),S=y.Z.div(c||(c=(0,g.Z)(["\n  display: flex;\n  gap: 40px;\n  margin: 0 auto;\n  margin-top: 30px;\n"]))),O=y.Z.ul(d||(d=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),P=y.Z.li(l||(l=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  max-width: 150px;\n"]))),R=y.Z.p(a||(a=(0,g.Z)(["\n  margin-top: auto;\n"]))),_=y.Z.div(p||(p=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  width: 200px;\n"]))),A=y.Z.div(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),B=y.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n"]))),E=y.Z.button(h||(h=(0,g.Z)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: #030303;\n\n  :hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"]))),G=y.Z.h3(f||(f=(0,g.Z)(["\n      margin-left: auto;\n    margin-top: 35px;\n"]))),J=r(7425),K=r(7309),L=r(7689),Q=r(1087),V=r(9439),X=r(2791),D=r(7692),H=y.Z.div(m||(m=(0,g.Z)(["\n        display: flex;\n    align-items: center;\n"]))),M=y.Z.button(j||(j=(0,g.Z)(["\ndisplay: flex;\njustify-content: center;\n    background: none;\n    border: none;\n    font-size: 27px;\n    cursor: pointer\n"]))),U=function(n){var e=n.count,r=n.id,i=(0,X.useState)(e),t=(0,V.Z)(i,2),s=t[0],o=t[1],c=(0,z.I0)();return(0,C.jsxs)(H,{children:[(0,C.jsx)(M,{type:"button",onClick:function(){1!==s&&(o((function(n){return n-1})),c((0,K.ig)(r)))},children:(0,C.jsx)(D.Xcu,{})}),(0,C.jsx)("span",{children:s}),(0,C.jsx)(M,{type:"button",onClick:function(){o((function(n){return n+1})),c((0,K.Ix)(r))},children:(0,C.jsx)(D.ite,{})})]})},W=function(){var n=(0,z.I0)(),e=(0,z.v9)(N.ny),r=(0,z.v9)(N.gK),i=(0,z.v9)(N.F8),t=(0,z.v9)(N.m8),s=(0,L.s0)();return(0,X.useEffect)((function(){n((0,K.I3)())}),[n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(S,{children:[(0,C.jsx)(F,{}),0===e.length?(0,C.jsxs)("div",{children:[(0,C.jsx)("p",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430..."}),(0,C.jsx)(Q.OL,{to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433"})]}):(0,C.jsxs)(O,{children:[e&&e.map((function(e){var r=e.id,i=e.img,t=e.title,s=e.price,o=e.desc,c=e.count;return(0,C.jsxs)(P,{children:[(0,C.jsx)("img",{src:i,alt:t}),(0,C.jsxs)(A,{children:[(0,C.jsxs)(B,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)("h3",{children:t}),(0,C.jsx)("p",{children:o}),(0,C.jsx)(U,{count:c,id:r})]}),(0,C.jsx)(E,{type:"button",onClick:function(){return n((0,K.cl)(r))},children:(0,C.jsx)(J.GnT,{})})]}),(0,C.jsxs)(R,{children:[(0,C.jsx)("strong",{children:"Price:"})," ",s*c]})]})]},r)})),(0,C.jsxs)("p",{children:["Quantity: ",t]}),(0,C.jsxs)(G,{children:["Total price: ",r]})]})]}),i&&s("/success-order",{replace:!0})]})},Y=function(){return(0,C.jsx)(W,{})}}}]);
//# sourceMappingURL=755.0ea32e15.chunk.js.map