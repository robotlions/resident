(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{26:function(e,t,n){},45:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(28),c=n.n(i),r=(n(45),n(7)),o=n(8),d=n(10),l=n(9),u=n(5),h=n(12),j=n(63),b=n(11),m=n.n(b),p=(n(26),n(1)),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"navbar navRow",children:[Object(p.jsx)(h.b,{to:"/",children:"home"}),Object(p.jsx)(h.b,{to:"/menu/",children:"menu"}),Object(p.jsx)(h.b,{to:"/schedule/",children:"schedule"}),Object(p.jsx)(h.b,{to:"/about/",children:"about"}),Object(p.jsx)(h.b,{to:"/catering/",children:"catering"})]})}}]),n}(a.Component),g=n(18),x=n(19),v=n(21),f=(n(54),Object(p.jsx)(g.a,{icon:x.b})),w=Object(p.jsx)(g.a,{icon:v.b}),y=Object(p.jsx)(g.a,{icon:v.c}),I=Object(p.jsx)(g.a,{icon:x.c}),k=Object(p.jsx)(g.a,{icon:x.a}),C=Object(p.jsx)(g.a,{icon:x.d}),N=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=Object(p.jsxs)("p",{children:[f," ",I," ",k," ",C," ",w," ",y]});return Object(p.jsxs)("div",{className:"About",children:[e,Object(p.jsx)("h1",{style:{marginTop:"5vh"},children:"About Us:"}),Object(p.jsx)("p",{children:"Hi! This is where the ABOUT US information will go! It will be informative and entertaining and will touch the heart. Add new information again."})]})}}]),n}(a.Component),S=n(20),A=n(6),T=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={data:[]},a.handleInput=a.handleInput.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/schedule/").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=Object(p.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13095.739881393612!2d-82.40860492380443!3d34.85786128630853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scommunity%20tap!5e0!3m2!1sen!2sus!4v1620316041963!5m2!1sen!2sus",style:{border:"0",maxWidth:"100vw"},allowFullScreen:"",loading:"lazy",title:"map"});return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{style:{marginTop:"3vh"},children:"Where we are today:"}),Object(p.jsx)("p",{children:"Location Information"}),Object(p.jsx)("p",{children:"Time - Lunch or Dinner"}),e]})}}]),n}(a.Component),E=n(17),L=n.n(E),D=n(22),R=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!m.a.get("Authorization"),data:[],editWindow:"",isEditing:!1,isAdding:!1,editText:"",name:"",image:""},a.editArticle=a.editArticle.bind(Object(A.a)(a)),a.submitEdit=a.submitEdit.bind(Object(A.a)(a)),a.handleInput=a.handleInput.bind(Object(A.a)(a)),a.handleImage=a.handleImage.bind(Object(A.a)(a)),a.addItem=a.addItem.bind(Object(A.a)(a)),a.deleteItem=a.deleteItem.bind(Object(A.a)(a)),a.cancelEdit=a.cancelEdit.bind(Object(A.a)(a)),a.cancelAdd=a.cancelAdd.bind(Object(A.a)(a)),a.doAdd=a.doAdd.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/menuitems/").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"editArticle",value:function(e){this.setState({editWindow:e.id}),this.setState({isEditing:!0}),this.setState({image:e.image,id:e.id,description:e.description,name:e.name,price:e.price,vegan:e.vegan,vegetarian:e.vegetarian})}},{key:"submitEdit",value:function(){var e=Object(D.a)(L.a.mark((function e(t){var n,a,s,i,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in n=new FormData,t)n.append(a,this.state[a]);return n.delete("image"),this.setState({isEditing:!1}),s={method:"PUT",headers:{"X-CSRFToken":m.a.get("csrftoken")},body:n},i=function(e){return console.warn(e)},e.next=8,fetch("/menuitems/edit/".concat(t.id,"/"),s);case 8:return c=e.sent,e.next=11,c.json().catch(i);case 11:window.location.reload();case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addItem",value:function(){var e=Object(D.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),n.append("name",this.state.name),n.append("price",this.state.price),n.append("description",this.state.description),n.append("vegan",this.state.vegan),n.append("vegetarian",this.state.vegetarian),a={method:"POST",headers:{"X-CSRFToken":m.a.get("csrftoken")},body:n},e.next=11,fetch("/menuitems/",a);case 11:window.location.reload();case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(D.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"X-CSRFToken":m.a.get("csrftoken")}},e.next=3,fetch("/menuitems/edit/".concat(t.id),n);case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"cancelEdit",value:function(){this.setState({isEditing:!1})}},{key:"cancelAdd",value:function(){this.setState({isAdding:!1})}},{key:"doAdd",value:function(){this.setState({isAdding:!0})}},{key:"render",value:function(){var e=this,t=Object(p.jsx)("button",{style:{marginTop:"2vh"},onClick:this.doAdd,children:"Add New Item"}),n=this.state.data.map((function(t){return!0===e.state.isEditing&&e.state.editWindow===t.id?Object(p.jsxs)("form",{children:["Name:",Object(p.jsx)("input",{className:"input-window",value:e.state.name,name:"name",onChange:e.handleInput}),Object(p.jsx)("br",{}),"Price:",Object(p.jsx)("input",{className:"input-window",value:e.state.price,name:"price",onChange:e.handleInput}),Object(p.jsx)("br",{}),"Description:",Object(p.jsx)("textarea",{className:"input-window",rows:"5",type:"text",value:e.state.description,name:"description",onChange:e.handleInput}),Object(p.jsx)("br",{}),"Vegan y/n:",Object(p.jsx)("input",{className:"input-window",value:e.state.vegan,name:"vegan",onChange:e.handleInput}),Object(p.jsx)("br",{}),"Vegetarian y/n:",Object(p.jsx)("input",{className:"input-window",value:e.state.vegetarian,name:"vegetarian",onChange:e.handleInput}),Object(p.jsx)("br",{}),"Image:",Object(p.jsx)("input",{type:"file",className:"input-window",name:"image",onChange:e.handleImage}),e.state.image&&Object(p.jsx)("img",{style:{maxWidth:"100%"},src:e.state.preview,alt:"preview"}),Object(p.jsx)("button",{onClick:function(){return e.submitEdit(t)},children:"Submit Edit"})," ",Object(p.jsx)("button",{onClick:e.cancelEdit,children:"Cancel Edit"})]},t.id):Object(p.jsxs)("section",{className:"menuCard",children:[t.image?Object(p.jsx)("img",{style:{minWidth:"100%",maxWidth:"100%",borderRadius:"3px"},src:t.image,alt:"menu item"}):null,Object(p.jsxs)("h4",{style:{paddingTop:"1vh"},children:[t.name,Object(p.jsx)("br",{}),"$",t.price]}),Object(p.jsx)("p",{children:t.description}),e.state.isLoggedIn?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{onClick:function(){return e.editArticle(t)},children:"Edit"}),"\xa0\xa0\xa0",Object(p.jsx)("button",{onClick:function(){return e.deleteItem(t)},children:"Delete"})]}):null,!0===e.state.isEditing&&e.state.editWindow===t.id?Object(p.jsxs)("p",{children:[Object(p.jsx)("textarea",{className:"input-window",rows:"5",type:"text",name:"editText",value:e.state.editText,onChange:e.handleInput}),Object(p.jsx)("button",{className:"btn",onClick:function(){return e.submitEdit(t)},children:"Submit Edit"})]}):null]},t.id)})),a=Object(p.jsxs)("form",{children:["Name:",Object(p.jsx)("input",{className:"input-window",value:this.state.name,name:"name",onChange:this.handleInput}),Object(p.jsx)("br",{}),"Price:",Object(p.jsx)("input",{className:"input-window",value:this.state.price,name:"price",onChange:this.handleInput}),Object(p.jsx)("br",{}),"Description:",Object(p.jsx)("textarea",{className:"input-window",rows:"5",type:"text",value:this.state.description,name:"description",onChange:this.handleInput}),Object(p.jsx)("br",{}),"Vegan y/n:",Object(p.jsx)("input",{className:"input-window",value:this.state.vegan,name:"vegan",onChange:this.handleInput}),Object(p.jsx)("br",{}),"Vegetarian y/n:",Object(p.jsx)("input",{className:"input-window",value:this.state.vegetarian,name:"vegetarian",onChange:this.handleInput}),Object(p.jsx)("br",{}),"Image:",Object(p.jsx)("input",{type:"file",className:"input-window",name:"image",onChange:this.handleImage}),this.state.image&&Object(p.jsx)("img",{style:{maxWidth:"100%"},src:this.state.preview,alt:"preview"}),Object(p.jsx)("button",{onClick:this.addItem,children:"Add Item"})," ",Object(p.jsx)("button",{onClick:this.cancelAdd,children:"Cancel Add"})]});return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"row justify-content-center",children:n}),Object(p.jsxs)("div",{children:[this.state.isLoggedIn&&!1===this.state.isAdding?t:null,this.state.isLoggedIn&&!0===this.state.isAdding?a:null]})]})}}]),n}(a.Component),F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!m.a.get("Authorization"),username:"",email:"",password:"",data:[]},a.handleInput=a.handleInput.bind(Object(A.a)(a)),a.handleLogin=a.handleLogin.bind(Object(A.a)(a)),a.reset=a.reset.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"reset",value:function(){this.setState({username:""}),this.setState({password:""}),window.location.reload()}},{key:"handleLogin",value:function(){var e=Object(D.a)(L.a.mark((function e(t){var n,a,s,i,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:this.state.username,password:this.state.password},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=6,fetch("/rest-auth/login/",a);case 6:return i=e.sent,e.next=9,i.json().catch(s);case 9:(c=e.sent).key&&(m.a.set("Authorization","Token ".concat(c.key)),alert("Logged in!"));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleInputName",value:function(e){this.setState({username:e.target.value})}},{key:"handleLogout",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")}};fetch("/rest-auth/logout/",t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})),m.a.remove("Authorization"),m.a.remove("sessionid"),localStorage.clear()}},{key:"render",value:function(){var e=this,t=Object(p.jsxs)("form",{onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(p.jsx)("input",{className:"",type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(p.jsx)("input",{className:"",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"logButton",onClick:function(t){return e.handleLogin(t,e.state)},type:"submit",children:"Log In"})]}),n=Object(p.jsx)("form",{onSubmit:function(t){return e.handleLogout(t,e.state)},children:Object(p.jsx)("button",{className:"logButton",type:"submit",children:"Log Out"})});return Object(p.jsxs)("div",{children:[t,n]})}}]),n}(a.Component),P=n.p+"static/media/menu01.e74f0cd1.png",q=n.p+"static/media/about2.8fb54186.png",W=n.p+"static/media/location3.c2c4375b.png",z=n.p+"static/media/catering4.fb740d44.png",B=n.p+"static/media/merch5.aa2fdbc1.png",X=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.b,{to:"/menu/",children:Object(p.jsx)("img",{className:"splashPhoto",src:P,alt:"splash"})}),Object(p.jsx)(h.b,{to:"/about/",children:Object(p.jsx)("img",{className:"splashPhoto",src:q,alt:"splash"})}),Object(p.jsx)(h.b,{to:"/schedule/",children:Object(p.jsx)("img",{className:"splashPhoto",src:W,alt:"splash"})}),Object(p.jsx)(h.b,{to:"/catering/",children:Object(p.jsx)("img",{className:"splashPhoto",src:z,alt:"splash"})}),Object(p.jsx)("img",{className:"splashPhoto",src:B,alt:"splash"})]})}}]),n}(a.Component),M=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"",phone:"",email:"",dayTime:"",numAttendees:"",description:"",requests:""},a.submitRequest=a.submitRequest.bind(Object(A.a)(a)),a.handleInput=a.handleInput.bind(Object(A.a)(a)),a}return Object(o.a)(n,[{key:"submitRequest",value:function(e){e.preventDefault();var t={name:"Name: ".concat(this.state.name),phone:"Phone: ".concat(this.state.phone),email:"Email: ".concat(this.state.email),dayTime:"Day and Time: ".concat(this.state.dayTime),numAttendees:"No. of Attendees: ".concat(this.state.numAttendees),description:"Description: ".concat(this.state.description),requests:"Special Requests: ".concat(this.state.requests)};fetch("/contact/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(t)})}},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=Object(p.jsxs)("form",{onSubmit:this.submitRequest,children:[Object(p.jsx)("textarea",{placeholder:"Contact Name",className:"form-control",value:this.state.name,name:"name",rows:"1",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Phone",className:"form-control",value:this.state.phone,name:"phone",type:"tel",rows:"1",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Email",className:"form-control",value:this.state.email,name:"email",type:"email",rows:"1",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Event Date and Time",className:"form-control",value:this.state.dayTime,name:"dayTime",type:"datetime-local",rows:"1",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Number of Attendees",className:"form-control",value:this.state.numAttendees,name:"numAttendees",rows:"1",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Please describe the event",className:"form-control",rows:"5",type:"text",value:this.state.description,name:"description",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Special Requests",className:"form-control",rows:"5",type:"text",value:this.state.requests,name:"requests",onChange:this.handleInput}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]});return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Catering Request Form"}),Object(p.jsx)("p",{children:"This is only a request for information, not a confirmation of booking. We'll contact you if we want to handle your shitty kid's birthday party."}),e]})}}]),n}(a.Component),U=n.p+"static/media/bannerlg.96032a49.png",J=(n(56),Object(p.jsx)(g.a,{icon:v.a})),V=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!m.a.get("Authorization")},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row titleRow",children:Object(p.jsx)("img",{className:"titleBanner",src:U,alt:"title banner"})}),Object(p.jsxs)(j.a,{className:"burgerMenu",children:[Object(p.jsx)(j.a.Toggle,{style:{backgroundColor:"transparent",color:"#CD3700",fontSize:"xxx-large",border:"none"},children:J}),Object(p.jsxs)(j.a.Menu,{children:[Object(p.jsx)(j.a.Item,{href:"/menu/",children:"menu"}),Object(p.jsx)(j.a.Item,{href:"/schedule",children:"schedule"}),Object(p.jsx)(j.a.Item,{href:"/about/",children:"about"}),Object(p.jsx)(j.a.Item,{href:"/catering/",children:"catering"}),Object(p.jsx)(j.a.Item,{href:"/",children:"home"})]})]}),Object(p.jsx)("div",{className:"row navLinks sticky-top",children:Object(p.jsx)(O,{})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 frontSplash",children:Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/about/",component:N}),Object(p.jsx)(u.a,{path:"/schedule/",component:T}),Object(p.jsx)(u.a,{path:"/menu/",component:R}),Object(p.jsx)(u.a,{path:"/login/",component:F}),Object(p.jsx)(u.a,{path:"/catering/",component:M}),Object(p.jsx)(u.a,{path:"/",component:X})]})})})}),Object(p.jsxs)("div",{className:"row navbar bottomNav",children:[Object(p.jsx)("span",{children:"Contact"}),Object(p.jsx)(h.b,{to:"/login/",children:!0===this.state.isLoggedIn?"Log Out":"Log In"})]})]})})}}]),n}(a.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(V,{})})}),document.getElementById("root")),H()}},[[58,1,2]]]);
//# sourceMappingURL=main.316e34ed.chunk.js.map