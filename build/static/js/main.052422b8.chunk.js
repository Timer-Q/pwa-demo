(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(57)},30:function(e,t,n){},31:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=(n(30),n(31),n(60)),u=n(62),s=n(58),l=n(59),m=n(12);function f(e){var t=e.data,n=e.onClick;return r.a.createElement("div",{onClick:function(){n()},className:"movie-item"},r.a.createElement("img",{className:"movie-item-cover",src:t.images.medium,alt:t.title}),r.a.createElement("p",{className:"movie-item-title"},t.title))}f.defaultProps={onClick:function(){}};var p=n(6),v=n.n(p),d=n(7),h=n(13),E=n.n(h);E.a.defaults.baseURL="http://localhost:3030";var w=function(){return new Promise(function(){var e=Object(d.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/movies");case 2:n=e.sent,a=n.data.subjects,t(a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},b=function(e){return new Promise(function(){var t=Object(d.a)(v.a.mark(function t(n){var a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("/detail",{id:e});case 2:a=t.sent,r=a.data,n(r);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},k=n(61);n(53);var j=Object(k.a)(function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)(function(){w().then(function(e){o(e)}).catch(function(e){return console.error(e)})},[]),r.a.createElement("div",{className:"movie"},c.map(function(t){return r.a.createElement(f,{onClick:function(){return function(t){e.history.push({pathname:"/subject/".concat(t.id)})}(t)},data:t,key:t.id})}))});var g=Object(k.a)(function(e){var t=Object(a.useState)({images:[],genres:[],aka:[]}),n=Object(m.a)(t,2),c=n[0],o=n[1],i=function(){var t=Object(d.a)(v.a.mark(function t(){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.match,new Promise(function(e,t){"caches"in window?caches.match("http://localhost:3030/detail").then(function(t){t?e(t.json()):e()}):t()}).then(function(e){console.log(e),e&&o(e)}).then(Object(d.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n.params.id);case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}},e)})));case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){i()},[]),r.a.createElement("div",null,r.a.createElement("img",{src:c.images.medium,alt:c.title}),r.a.createElement("p",null,c.title),r.a.createElement("p",null,c.genres.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement("p",null,c.aka.map(function(e,t){return r.a.createElement("span",{key:t},e)})))});var O=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/movies",component:j}),r.a.createElement(s.a,{path:"/subject/:id",component:g}),r.a.createElement(s.a,{path:"/",render:function(){return r.a.createElement(l.a,{to:"/movies"})}})))};var x=function(){return r.a.createElement(O,null)};o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(){console.log("Service Worker \u6ce8\u518c\u6210\u529f")})}},[[24,1,2]]]);
//# sourceMappingURL=main.052422b8.chunk.js.map