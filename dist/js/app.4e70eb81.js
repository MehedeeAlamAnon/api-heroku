(function(n){function t(t){for(var o,a,u=t[0],i=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),e()}function e(){for(var n,t=0;t<c.length;t++){for(var e=c[t],o=!0,u=1;u<e.length;u++){var i=e[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),n=a(a.s=e[0]))}return n}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=o,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},1:function(n,t){},10:function(n,t){},11:function(n,t){},12:function(n,t){},13:function(n,t){},14:function(n,t){},15:function(n,t){},16:function(n,t){},17:function(n,t){},18:function(n,t){},2:function(n,t){},3:function(n,t){},4:function(n,t){},5:function(n,t){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"row"},n._l(n.branches,(function(t,o){return e("div",{key:o,staticClass:"col-lg-12"},[e("h1",[n._v(n._s(t.name))])])})),0)])},u=[],i=e("bc3a"),s=e.n(i),l=e("852e"),f={name:"HelloWorld",data:function(){return{branches:[],baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).API_URL}},props:{msg:String},methods:{fetchData:function(){var n=this,t="/api/branch";Object(l["b"])(t),s.a.get("/api").then((function(t){console.log(t.data.data),n.branches=t.data.data,console.table(n.branches)})),t="/api/category",Object(l["b"])(t),s.a.get("/api").then((function(t){console.log(t.data.data),n.branches=t.data.data,console.table(n.branches)})),s.a.get("/jokes/random").then((function(n){console.log(n.data)}))}},mounted:function(){localStorage.setItem("jahir","bondhu"),Object(l["a"])(5,6),this.fetchData()}},p=f,d=(e("6f9e"),e("2877")),b=Object(d["a"])(p,a,u,!1,null,"7bb01583",null),g=b.exports,h={name:"App",components:{HelloWorld:g}},m=h,v=(e("034f"),Object(d["a"])(m,r,c,!1,null,null,null)),j=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(j)}}).$mount("#app")},6:function(n,t){},"6f9e":function(n,t,e){"use strict";e("a997")},7:function(n,t){},"7fbc":function(n,t){function e(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="7fbc"},8:function(n,t){},"852e":function(n,t,e){"use strict";(function(n){e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return l}));e("a15b");var o,r=e("b97d"),c=e("a1fd"),a=e("df7c"),u=e("30dc"),i=r();function s(n){o=n}function l(n,t){var e=n+t;console.log(e)}i.use((function(n,t,e){t.header("Access-Control-Allow-Origin","*"),e()})),i.get("/jokes/random",(function(n,t){u({url:"https://joke-api-strict-cors.appspot.com/jokes/random"},(function(n,e,o){if(n||200!==e.statusCode)return t.status(500).json({type:"error",message:n.message});t.json(JSON.parse(o)),console.log("Bondhu Jahir"),console.log(t.json(JSON.parse(o)))}))})),i.get("/api",(function(n,t){u({url:"http://developer.amanabigbazar.com/"+o},(function(n,e,o){if(n||200!==e.statusCode)return t.status(500).json({type:"error",message:n.message});t.json(JSON.parse(o)),console.log("Anon"),console.log(t.json(JSON.parse(o)))}))})),i.use("/",c(a.join(n,"/dist")));var f=Object({NODE_ENV:"production",BASE_URL:"/"}).PORT||3e3;i.listen(f,(function(){return console.log("listening on ".concat(f))}))}).call(this,"/")},"85ec":function(n,t,e){},9:function(n,t){},a997:function(n,t,e){},cf05:function(n,t,e){n.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4e70eb81.js.map