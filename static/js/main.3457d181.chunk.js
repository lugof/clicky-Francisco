(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},17:function(e,a,n){},19:function(e,a,n){},21:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),l=n(2),c=n.n(l),r=n(3),o=n(4),s=n(7),m=n(5),d=n(8);var g=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("a",{className:"navbar-brand",href:"#"},"Clicky Game"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})))),i.a.createElement("div",{className:"collapse navbar-collapse col-lg-6 justify-content-end",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item active "},i.a.createElement("p",{className:"nav-link"},e.whattodo,i.a.createElement("span",{className:"sr-only"},"(current)"))),i.a.createElement("li",{className:"nav-item-4 "},i.a.createElement("p",{className:"nav-link"},"Score : ",e.score," |")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link"},"| Top Score: ",e.topscore)))))};n(15);var u=function(){return i.a.createElement("div",null,i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Clicky Game"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on the same image twice!")))};n(17);var v=function(e){return i.a.createElement("div",{className:"Container"},e.children)},h=n(6);n(19);var p,f,k,b,C,E=function(e){return i.a.createElement("div",{className:"image col-md-3 col-sm-4","data-id":e.id,"data-clicked":e.isClicked,onClick:function(){return e.clickedCartoon(e.id)}},i.a.createElement("img",{className:"img-thumbnail",alt:"image should show up",src:e.image}))},N=[],w=h,y=0,j=function(e){function a(){var e,n;Object(r.a)(this,a);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={theCartoons:w,theScore:0},n.random1=function(){N=[],p=Math.floor(11*Math.random()+1),f=Math.floor(11*Math.random()+1),k=Math.floor(11*Math.random()+1),b=Math.floor(11*Math.random()+1),C=Math.floor(11*Math.random()+1),N.push(p),p!=f&&p!=k&&p!=b&&p!=C&&f!=k&&f!=b&&f!=C&&k!=b&&k!=C&&b!=C?(N.push(f),N.push(k),N.push(b),N.push(C)):n.random1()},n.shuffling=function(e){for(var a=0;a<3;a++){console.log(N);var n;n=e[a],e[a]=e[N[a]],e[N[a]]=n,w=e}},n.clickedCartoon=function(e){n.random1(),console.log(w);for(var a=0;a<12;a++)w[a].id===e?(console.log("comparamos id: "+w[a].id+" con "+e),!1===w[a].isClicked?(console.log("revisamos si "+e+" tiene false o true: "+w[a].isClicked),n.shuffling(w),y=y++,n.setState({theScore:y})):(alert("you selected the same image twice so  Try again"),n.random1(),n.shuffling(w),y=0,n.setState({theScore:y})),w[a].isClicked=!0):console.log("not this one")},n}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,{whattodo:"Click on an image to begin!",score:y,topscore:0}),i.a.createElement(u,null),i.a.createElement(v,null,i.a.createElement("div",{className:"row"},w.map(function(a){return i.a.createElement(E,{id:a.id,key:a.id,image:a.image,clickedCartoon:e.clickedCartoon,isClicked:a.isClicked})}))))}}]),a}(t.Component);c.a.render(i.a.createElement(j,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,image:"/images/arnold.jpg",isClicked:!1},{id:2,image:"/images/bb8.JPG",isClicked:!1},{id:3,image:"/images/dagget.jpg",isClicked:!1},{id:4,image:"/images/disguise.png",isClicked:!1},{id:5,image:"/images/gaz.png",isClicked:!1},{id:6,image:"/images/gir.png",isClicked:!1},{id:7,image:"/images/Heffer.png",isClicked:!1},{id:8,image:"/images/Iz_dib_8618.png",isClicked:!1},{id:9,image:"/images/norbert.png",isClicked:!1},{id:10,image:"/images/r2.jpg",isClicked:!1},{id:11,image:"/images/rocko.png",isClicked:!1},{id:12,image:"/images/zim.jpg",isClicked:!1}]},9:function(e,a,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.3457d181.chunk.js.map