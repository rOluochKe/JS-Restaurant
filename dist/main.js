!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);var a={setHeader:()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("nav"),a=document.createElement("span");a.classList.add("logo"),a.setAttribute("id","logo"),a.innerText="Deli Restaurant";const c=document.createElement("ul"),d=document.createElement("li"),o=document.createElement("li"),i=document.createElement("li");d.setAttribute("id","home"),o.setAttribute("id","menu"),i.setAttribute("id","contact"),d.innerText="home",o.innerText="menu",i.innerText="contact us",c.appendChild(d),c.appendChild(o),c.appendChild(i),n.appendChild(a),n.appendChild(c),t.appendChild(n),e.appendChild(t)}};var c={setHome:()=>{const e=document.getElementById("content"),t=document.createElement("main");t.classList.add("home-main");const n=document.createElement("div"),a=document.createElement("h2");a.innerText="We are best known for";const c=document.createElement("h1");c.innerHTML="<span>Breakfast</span> <span>Lunch</span> <span>Dinner</span>";const d=document.createElement("button");d.setAttribute("id","menu-btn"),d.classList.add("menu-btn"),d.innerText="Look at our the menu",n.appendChild(a),n.appendChild(c),n.appendChild(d),t.appendChild(n),e.appendChild(t)},setHomeActive:()=>{document.getElementById("home").classList.add("active")}};var d=(()=>{const e=[{title:"Breakfast",items:["Sweet Pancake","Screamed Matoke","Banana Pancake","Viazi Kirai","Uji"]},{title:"Lunch",items:["Tea and Mahamri","The Arrow Root","The Sweet Potato","Kenyan Pilau","Wali wa Nazi"]},{title:"Dinner",items:["Sukuma Wiki","Kenyan Stew","Nyama Choma","Plantain Banana Stew","Kachumbari"]}];return{setMenu:()=>{const t=document.getElementById("content"),n=document.createElement("main");n.classList.add("menu-main"),e.forEach(e=>{const t=(e=>{const t=document.createElement("section"),n=document.createElement("h2");n.innerText=e.title;const a=document.createElement("ul");return e.items.forEach(e=>{const t=document.createElement("li");t.innerText=e,a.appendChild(t)}),t.appendChild(n),t.appendChild(a),t})(e);n.appendChild(t)}),t.appendChild(n)},setMenuActive:()=>{document.getElementById("menu").classList.add("active")}}})(),o=n(0),i=n.n(o);const r=()=>{const e=document.getElementById("content"),t=document.querySelectorAll("header li");e.removeChild(e.lastChild),t.forEach(e=>e.classList.remove("active"))},l=()=>{r(),d.setMenu(),d.setMenuActive()},m=()=>{r(),i.a.setContact(),i.a.setContactActive()},u=()=>{r(),c.setHome(),c.setHomeActive();document.getElementById("menu-btn").addEventListener("click",l)};document.addEventListener("DOMContentLoaded",()=>{a.setHeader(),c.setHome(),c.setHomeActive();const e=document.getElementById("logo"),t=document.getElementById("home"),n=document.getElementById("menu"),d=document.getElementById("contact"),o=document.getElementById("menu-btn");e.addEventListener("click",u),t.addEventListener("click",u),n.addEventListener("click",l),d.addEventListener("click",m),o.addEventListener("click",l)})}]);