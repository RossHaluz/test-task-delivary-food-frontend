"use strict";(self.webpackChunkclear=self.webpackChunkclear||[]).push([[517],{8517:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var r,t,o,d,a,c,s,l=i(9439),p=i(9434),u=i(168),x=i(5706),f=x.Z.li(r||(r=(0,u.Z)(["\n  flex-basis: calc((100% - 30px * (1 - 1)) / 1);\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 30px * (2 - 1)) / 2);\n  }\n  @media (min-width: 1280px) {\n    flex-basis: calc((100% - 30px * (3 - 1)) / 3);\n  }\n"]))),h=x.Z.p(t||(t=(0,u.Z)(["\n  max-width: 440px;\n"]))),g=x.Z.button(o||(o=(0,u.Z)(["\n  background: none;\n  border: none;\n  background-color: #2196f3;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 10px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n"]))),m=i(7309),b=i(5218),j=i(184),v=function(n){var e=n.title,i=n.img,r=n.desc,t=n.price,o=n.id,d=(0,p.I0)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(f,{children:[(0,j.jsx)("img",{src:i,alt:e,width:"426",height:"294px"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:e}),(0,j.jsx)(h,{children:r})]}),(0,j.jsx)("p",{children:t}),(0,j.jsx)(g,{type:"button",onClick:function(){d((0,m.dm)({title:e,img:i,desc:r,price:t,id:o,amount:1})),b.Am.success("Success add")},children:"\u041a\u0443\u043f\u0438\u0442\u0438"})]})})},Z=x.Z.div(d||(d=(0,u.Z)(["\n  display: flex;\n"]))),w=x.Z.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-top: 30px;\n"]))),k=i(2791),C=x.Z.button(c||(c=(0,u.Z)(["\n  background: none;\n  border: none;\n  padding: 20px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n  background-color: #2196f3;\n  cursor: pointer;\n  border-radius: 20px;\n"]))),y=x.Z.div(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 40px;\n  border: 1px solid #030303;\n  border-radius: 10px;\n  max-height: 400px;\n  margin-top: 30px;\n  margin-right: 30px;\n"]))),S=function(n){var e=n.setCurrentCategory,i=(0,k.useState)([{id:1,name:"Kegler"},{id:2,name:"Green House"},{id:3,name:"Dioscuri Mini"},{id:4,name:"Cook drive"}]),r=(0,l.Z)(i,1)[0];return(0,j.jsxs)(y,{children:[(0,j.jsx)("h3",{children:"Shops"}),r.map((function(n){return(0,j.jsx)(C,{type:"button",onClick:function(){return i=n.name,void e(i);var i},children:n.name},n.id)}))]})},z=function(n){return n.food.foods||[]},L=function(n){return n.food.isLoading},W=i(8966),A=function(){var n=(0,p.v9)(z),e=(0,p.v9)(L),i=(0,k.useState)("Cook drive"),r=(0,l.Z)(i,2),t=r[0],o=r[1];return(0,j.jsxs)(Z,{children:[(0,j.jsx)(S,{setCurrentCategory:function(n){o(n)}}),(0,j.jsx)(w,{children:e?(0,j.jsx)(W.iT,{height:80,width:80,color:"#2196f3",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#2196f3",strokeWidth:2,strokeWidthSecondary:2}):n.filter((function(n){return n.name===t})).map((function(n){var e=n.title,i=n.img,r=n.desc,t=n.price,o=n._id;return(0,j.jsx)(v,{id:o,title:e,img:i,desc:r,price:t},o)}))})]})},D=function(){return(0,j.jsx)(A,{})}}}]);
//# sourceMappingURL=517.75382448.chunk.js.map