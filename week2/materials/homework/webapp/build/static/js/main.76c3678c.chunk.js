(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),i=c.n(a),o=c(2),s=c(4),l=[{id:1,name:"Fruits",imageURL:"https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",description:"Wonderful fruits from all over the world",price:"60",currency:"DKK"},{id:2,name:"Vegetables",imageURL:"https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",description:"Wonderful vegetables from all over the world",price:"50",currency:"DKK"},{id:3,name:"Juice Box",imageURL:"https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",description:"Great box for your juicer",price:"80",currency:"DKK"}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:!1})}));var d=function(){var e=Object(n.useState)(l),t=Object(o.a)(e,1)[0],c=Object(n.useState)([]),r=Object(o.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)([]),d=Object(o.a)(s,2),u=d[0],m=d[1];return Object(n.useEffect)((function(){!function(e){var t=a.reduce((function(e,t){return e+parseInt(t.price)}),0);m(t)}()}),[a]),{products:t,cart:a,addProduct:function(e){var t=a.concat(e);i(t)},removeProduct:function(e){i(a.filter((function(t){return t.id!==e.id})))},totalprice:u}};var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=function(e){setTimeout((function(){r(" you are going to purchase below items : ".concat(e))}),100)};return Object(n.useEffect)((function(){a()}),[]),{notifications:c,createNotification:a}},m=(c(10),c(0)),b=r.a.lazy((function(){return c.e(3).then(c.bind(null,13))}));var j=function(){for(var e=d(),t=e.products,c=e.cart,r=e.addProduct,a=e.removeProduct,i=e.totalprice,s=u(),l=s.notifications,j=s.createNotification,p=Object(n.useState)(" Hello "),f=Object(o.a)(p,2),h=f[0],x=f[1],O=function(e){e.preventDefault,e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate");var t=document.getElementById("exampleModal");t.style.display="none",t.classList.remove("show"),document.querySelector(".modal-backdrop").innerHTML='<div class="danceanimation"><img src="https://i.pinimg.com/originals/57/e2/09/57e209296e586933febadf06e271a3d3.gif" alt="dancer" /></div>'}),300),setTimeout((function(e){window.location.href="/index.html"}),4e3)},v=document.getElementsByClassName("confetti-button"),g=0;g<v.length;g++)v[g].addEventListener("click",O,!1);console.log(c);var w=function(e){return!c.find((function(t){return t.id===e.id}))};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"row",children:t.map((function(e){return Object(m.jsxs)("div",{className:"card col-md-4",children:[Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("img",{style:{width:"400px"},src:e.imageURL,alt:e.name})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsx)("p",{className:"card-text",children:e.description}),Object(m.jsx)("p",{children:Object(m.jsxs)("strong",{children:["price: ",e.price," ",e.currency]})}),w(e)&&Object(m.jsx)("button",{onClick:function(){return r(e)},className:"btn btn-primary",children:"Select"}),!w(e)&&Object(m.jsx)("button",{onClick:function(){return a(e)},className:"btn btn-danger",children:"Remove"})]})]},e.id)}))}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group mt-4 col-md-4",children:[Object(m.jsxs)("p",{className:"mt-4",children:["You will be charged: ? ",i]}),Object(m.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return x(e.target.value)}}),Object(m.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary mt-3","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(){return j(i)},children:"Buy now"}),Object(m.jsx)(n.Suspense,{fallback:Object(m.jsx)("div",{children:"Loading..."}),children:Object(m.jsx)(b,{Emailaddress:h,notifications:l,cart:c,totalprice:i})})]})]})};var p=function(){return Object(m.jsxs)("nav",{className:"navbar navbar-light bg-light justify-content-between p-2",children:[Object(m.jsx)("span",{className:"navbar-brand",children:"Good Green Groceries"}),Object(m.jsx)("span",{className:"navbar-text",children:"We are good - and we are green!"})]})};var f=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(p,{}),Object(m.jsx)("h1",{className:"text-white",children:"Good Green Groceries"}),Object(m.jsx)(j,{})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.76c3678c.chunk.js.map