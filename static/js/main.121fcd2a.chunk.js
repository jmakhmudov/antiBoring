(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),i=(a(13),a(15),a(1));a(17);function o(){var e=c.a.useState({}),t=Object(i.a)(e,2),a=t[0],n=t[1],l=c.a.useState(0),r=Object(i.a)(l,2),o=r[0],s=r[1];return c.a.useEffect(function(){fetch("https://www.boredapi.com/api/activity").then(function(e){return e.json()}).then(function(e){return n(e)})},[o]),c.a.createElement("div",{className:"activity-box"},c.a.createElement("div",{className:"activity-info"},c.a.createElement("h1",null,a.activity),c.a.createElement("div",{className:"activity-description"},c.a.createElement("p",null,"Type: ",c.a.createElement("span",null,a.type)),c.a.createElement("p",null,"Participants: ",c.a.createElement("span",null,a.participants)),c.a.createElement("p",null,"Price: ",c.a.createElement("span",null,a.price," / 1"))),c.a.createElement("button",{className:"next-btn",onClick:function(){s(function(e){return e+1})}},"Next")))}var s=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"objects"},c.a.createElement("p",{className:"logo"},"anti",c.a.createElement("span",null,"Boring")),c.a.createElement(o,null),c.a.createElement("p",{className:"made-by"},"Made by ",c.a.createElement("a",{href:"https://github.com/jmakhmudov",target:"_blank"},"JM"))))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(s,null))},4:function(e,t,a){e.exports=a(19)}},[[4,2,1]]]);
//# sourceMappingURL=main.121fcd2a.chunk.js.map