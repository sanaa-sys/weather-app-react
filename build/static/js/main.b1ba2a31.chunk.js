(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),s=(t(9),t(1)),i="2710e3e8345c891ed06909c16f784be2",l="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),u=m[0],d=(m[1],Object(n.useState)({})),h=Object(s.a)(d,2),p=h[0],y=h[1];return c.a.createElement("div",{className:"undefined"!=typeof p.main&&p.main.temp>16?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=").concat(u,"&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){y(e),r(""),console.log(e)}))}})),c.a.createElement("div",{className:"help-box"},c.a.createElement("p",null,"Please enter the city in the search box in this format: City, Country Code")),"undefined"!=typeof p.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},p.name,", ",p.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(p.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},p.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(10);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(11)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.b1ba2a31.chunk.js.map