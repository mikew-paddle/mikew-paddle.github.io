(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.selected?n("div",{staticStyle:{"padding-top":"10px",width:"100%"}},[e._v(" You have selected "),n("code",[e._v(e._s(e.selected.name)+", navigating to: "+e._s(e.selected.url))])]):e._e(),n("div",{staticClass:"autosuggest-container"},[n("vue-autosuggest",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{suggestions:e.filteredOptions,"get-suggestion-value":e.getSuggestionValue,"input-props":{id:"autosuggest__input",placeholder:"Search for anything!"}},on:{focus:e.focusMe,click:e.clickHandler,input:e.onInputChange,selected:e.onSelected},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.suggestion;return n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("img",{style:{display:"flex",width:"25px",height:"25px",borderRadius:"15px",marginRight:"10px"},attrs:{src:r.item.avatar}}),n("div",{staticStyle:{"{ display":"'flex', color: 'navyblue'}"}},[e._v(e._s(r.item.name))])])}}]),model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)])},a=[],s=(n("4de4"),n("c975"),n("b0c0"),n("2831")),o={data:function(){return{query:"test",selected:"",suggestions:[{data:[{id:1,name:"Transactions",url:"/transactions",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png"},{id:2,name:"Subscribers",url:"/subscribers",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Sean_Astin_as_Samwise_Gamgee.png/200px-Sean_Astin_as_Samwise_Gamgee.png"},{id:3,name:"Subscription Plans",url:"/plans",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/220px-Gandalf600ppx.jpg"},{id:4,name:"Products",url:"/products",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Aragorn300ppx.png/150px-Aragorn300ppx.png"}],default:[{id:1,name:'Search Transactions for "'+this.query+'"',url:"/transactions?q="+this.query},{id:2,name:'Search Subscribers for "'+this.query+'"',url:"/subscribers?q="+this.query},{id:3,name:'Search Vendors for "'+this.query+'"',url:"/subscribers?q="+this.query}]}]}},computed:{defaultOptions:function(){return[{id:1,name:'Search Transactions for "'+this.query+'"',url:"/transactions?q="+this.query},{id:2,name:'Search Subscribers for "'+this.query+'"',url:"/subscribers?q="+this.query},{id:3,name:'Search Vendors for "'+this.query+'"',url:"/subscribers?q="+this.query}]},filteredOptions:function(){var e=this,t=this.suggestions[0].data.filter((function(t){try{return t.name.toLowerCase().indexOf(e.query.toLowerCase())>-1}catch(n){return e.suggestions[0].data}}));if(this.query.length>0){console.log(this.defaultOptions);for(var n=0;n<this.defaultOptions.length;n++)t.push(this.defaultOptions[n])}return[{data:t}]}},methods:{clickHandler:function(){},onSelected:function(e){this.selected=e.item},onInputChange:function(e){console.log(e)},getSuggestionValue:function(e){return e.item.name},focusMe:function(e){console.log(e)}},components:{VueAutosuggest:s["a"]}},u=o,c=(n("034f"),n("2877")),l=Object(c["a"])(u,i,a,!1,null,null,null),p=l.exports;r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(e){r["a"].nextTick((function(){e.querySelector("input").click(),e.querySelector("input").focus()}))}}),new r["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f2e39286.js.map