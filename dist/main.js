(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(81),r=t.n(i),a=t(645),o=t.n(a),c=t(667),d=t.n(c),s=new URL(t(301),t.b),l=new URL(t(373),t.b),p=new URL(t(972),t.b),u=new URL(t(812),t.b),m=o()(r()),f=d()(s),h=d()(l),g=d()(p),b=d()(u);m.push([e.id,`@font-face {\n    font-family: 'Minecraftia';\n    src: url(${f}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    image-rendering: pixelated;\n    font-family: 'Minecraftia', sans-serif;\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n    overflow: hidden;\n}\n\n.header {\n    height: 8vh;\n    padding: 1rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-image: url(${h});\n    background-size: contain;\n}\n\n.title-text {\n    margin: 0;\n    \n    font-size: 2rem;\n    color: whitesmoke;\n}\n\n.nav-btn {\n    height: 3rem;\n    width: 8rem;\n    margin-left: 1rem;\n\n    border-radius: .5rem;\n    border: 1px solid black;\n\n    color: whitesmoke;\n    background-image: url(${g});\n}\n\n.main-page {\n    background-image: url(${b});\n    background-size: cover; \n    background-repeat: no-repeat;\n    background-position: center;\n    \n    height: 92vh;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.home {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    height: 100%;\n    width: 100%;\n\n    backdrop-filter: blur(10px);\n}\n\n.book {\n    height: 700px;\n    width: 570px;\n}\n\n.page {\n    height: 100%;\n    width: 100%;\n\n    object-fit: fill;\n}\n\n.about-container {\n    position: relative;\n    height: 85%;\n    width: 80%;\n\n    bottom: 92%;\n    left: 10%;\n}\n\n.about {\n    text-align: justify;\n    line-height: 24pt;\n    font-size: 1.1rem;\n\n    margin: 0;\n    height: 100%;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    height: 100%;\n    width: 100%;\n\n    backdrop-filter: blur(10px);\n}\n\n.menu-title {\n    grid-area: title;\n    justify-self: start;\n\n    font-size: 1.2rem;\n\n    background-color: #c6c6c6;\n    margin: 0;\n    padding-left: 1%;\n}\n\n.menu-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-areas: 'title title title title';\n    grid-template-rows: 3%;\n    grid-auto-rows: auto;\n    gap: 1rem;\n    justify-items: center;\n    align-items: center;\n\n    height: 80%;\n    \n    background-color: #c6c6c6;\n    border: 15px solid #c6c6c6;\n    border-radius: 1rem;    \n}\n\n.item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n    width: 100%;\n    height: 100%;\n    \n    background-color: #8b8b8b;\n}\n\n.contact-us {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    height: 100%;\n    width: 100%;\n    \n    backdrop-filter: blur(10px);\n}\n\n.location-container {\n    height: 80%;\n    width: 60%;\n}\n\n.plain-map {\n    height: 100%;\n    width: 100%;\n}\n\n.location {\n    position: relative;\n    font-size: 1.1rem;\n    \n    height: 75%;\n    width: 80%;\n    bottom: 90%;\n    left: 8%;\n\n    overflow: auto;\n    scrollbar-width: none;\n}\n\n.location::-webkit-scrollbar {\n    display: none;\n  }`,""]);const v=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},o=[],c=0;c<e.length;c++){var d=e[c],s=i.base?d[0]+i.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,i);i.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=t(a[o]);n[c].references--}for(var d=i(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},301:(e,n,t)=>{e.exports=t.p+"69fd3db14fbc8b3f7cdb.ttf"},812:(e,n,t)=>{e.exports=t.p+"e01a4322dfbe2405eebe.jpg"},373:(e,n,t)=>{e.exports=t.p+"1567745b67585c1dd2de.jpeg"},972:(e,n,t)=>{e.exports=t.p+"14e0527f572d09481333.png"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),r=t.n(i),a=t(569),o=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"3761fe4451931075489f.svg";function g(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("div");n.classList.add("book");const t=new Image;t.src=h,t.classList.add("page");const i=document.createElement("div");i.classList.add("about-container");const r=document.createElement("p");return r.innerHTML="\n    Welcome to The Logg, your Minecraft-inspired dining escape! Our menu blends real-world flavors with pixelated delights, crafted by passionate chefs who celebrate the creativity of Minecraft. Step into our themed haven, where pixelated landscapes and cozy ambiance create a unique dining adventure. Whether you're a gaming enthusiast or seeking a unique experience, join us at The Logg, where every bite is a celebration of Minecraft's wonders. Welcome to the intersection of gaming and gourmet!",r.classList.add("about"),i.appendChild(r),n.appendChild(t),n.appendChild(i),e.appendChild(n),e}const b=t.p+"cb97a46976092cfe6112.png";function v(){let e=document.createElement("div");e.classList.add("menu");let n=new Image;n.src=b;let t=function(e,n){let t=document.createElement("div"),i=document.createElement("p");i.innerHTML="Menu",i.classList.add("menu-title"),t.appendChild(i);for(let i in e){let r=document.createElement("div"),a=document.createElement("canvas");y(a,n,e[i].index),r.appendChild(a);let o=document.createElement("p");o.innerHTML=`${i}   $${e[i].price}`,r.classList.add("item"),r.appendChild(o),t.appendChild(r)}return t}({Apple:{index:[0,10],price:2},Gapple:{index:[0,11],price:10},Egg:{index:[0,12],price:2},Cake:{index:[1,13],price:6},Stew:{index:[4,7],price:6},"Rabbit Stew":{index:[4,8],price:8},"Cooked Fish":{index:[5,10],price:6},Cookie:{index:[5,12],price:3},"Cooked Meat":{index:[6,10],price:6},"Baked Potato":{index:[7,6],price:4},Bread:{index:[2,9],price:3},Water:{index:[4,11],price:1}},n);return t.classList.add("menu-items"),e.appendChild(t),e}function y(e,n,t){const i=e.getContext("2d"),[r,a]=[...t],o=n.width/16,c=n.height/16;e.width=o,e.height=c,i.drawImage(n,a*o,r*c,o,c,0,0,o,c)}const x=t.p+"d49aff453f0440e778f4.png";function w(){let e=document.getElementsByClassName("main-page")[0];e.firstChild&&e.removeChild(e.firstChild),e.appendChild(g())}function C(){let e=document.getElementsByClassName("main-page")[0];e.firstChild&&e.removeChild(e.firstChild),e.appendChild(v())}function L(){let e=document.getElementsByClassName("main-page")[0];e.firstChild&&e.removeChild(e.firstChild),e.appendChild(function(){let e=document.createElement("div");e.classList.add("contact-us");let n=document.createElement("div");n.classList.add("location-container");const t=new Image;t.src=x,t.classList.add("plain-map"),n.appendChild(t);let i=document.createElement("p");return i.classList.add("location"),i.innerHTML="\n        The Logg Headquarters</br></br>\n        Coordinates: X: 42 Y: 64 Z: -128</br></br>\n        Facing: East</br></br>\n        Biome: Mega Taiga</br></br>        \n        For support, dial 1-800-LOGG-CRAF.</br>\n        For snail mail, send carrier pigeons to the sky block above.</br></br>\n    \n        May your day be filled with endless diamonds and creeper-free adventures!\n    ",n.appendChild(i),e.appendChild(n),e}())}!function(e){let n=function(e,n,t){let i=document.createElement("div");i.classList.add("header");let r=document.createElement("p");r.innerHTML="The Logg",r.classList.add("title-text"),i.appendChild(r);let a=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),d=document.createElement("button");return o.classList.add("nav-btn"),o.innerHTML="Home",o.addEventListener("click",e),a.appendChild(o),c.classList.add("nav-btn"),c.innerHTML="Menu",c.addEventListener("click",n),a.appendChild(c),d.classList.add("nav-btn"),d.innerHTML="Contact Us",d.addEventListener("click",t),a.appendChild(d),i.appendChild(a),i}(w,C,L);e.appendChild(n);let t=document.createElement("div");t.classList.add("main-page"),t.appendChild(g()),e.appendChild(t),v()}(document.getElementById("content"))})()})();