webpackJsonp([1],{"/mIV":function(t,e){},"1/oy":function(t,e){},"16ES":function(t,e){},"7zPv":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},"N/0d":function(t,e,n){"use strict";var s=n("7zPv"),a=n.n(s),i=n("Vy0b");var r=function(t){n("16ES")},o=n("VU/8")(a.a,i.a,!1,r,null,null);e.default=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("fZjL"),i=n.n(a),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-jumbotron",{attrs:{fluid:"",id:"app-header"}},[e("b-row",[e("b-col",[e("h1",[this._v("Can You Make This")]),this._v(" "),e("h1",[this._v("With That")])])],1)],1)},staticRenderFns:[]};var o=n("VU/8")({},r,!1,function(t){n("/mIV")},"data-v-1c91a2ce",null).exports,u={props:{appSubmit:Function},data:function(){return{test:"",against:""}},computed:{testInputState:function(){return this.test.length>=3},invalidFeedback:function(){return this.test.length>=3?"":this.test.length>0?"You should test something with at least 3 characters.":"Please enter something."},validFeedback:function(){return this.testInputState?"Thanks!":""}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form",{on:{submit:function(e){e.preventDefault(),t.appSubmit(t.test,t.against)}}},[n("b-form-group",{attrs:{description:"Enter a word or a phrase (...or even a sentence) that you want to test",label:"What do you want to test","label-for":"test-input","invalid-feedback":t.invalidFeedback,"valid-feedback":t.validFeedback,state:t.testInputState}},[n("b-form-input",{attrs:{size:"lg",id:"test-input",state:t.testInputState},model:{value:t.test,callback:function(e){t.test="string"==typeof e?e.trim():e},expression:"test"}})],1),t._v(" "),n("b-form-group",{attrs:{description:"Enter some text that you want to mine for the letters you're looking for.","label-for":"against-input"}},[n("b-form-input",{attrs:{size:"lg",id:"against-input"},model:{value:t.against,callback:function(e){t.against="string"==typeof e?e.trim():e},expression:"against"}})],1),t._v(" "),n("b-btn",{attrs:{type:"submit",size:"lg"}},[t._v("Submit")])],1)],1)},staticRenderFns:[]};var l=n("VU/8")(u,c,!1,function(t){n("Nsmm")},null,null).exports,h=n("N/0d"),p={props:{result:Boolean},data:function(){return{className:""}},computed:{resultStyle:function(){return this.result?{backgroundColor:"green",color:"black"}:{backgroundColor:"red",color:"white"}}},methods:{showSnackbar:function(){var t=this;this.className="show",setTimeout(function(){t.className=""},3e3)}},created:function(){var t=this;w.$on("showAlert",function(){t.showSnackbar(),t.className="show"})}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:this.resultStyle,attrs:{id:"snackbar"}},[this._v("\n  Some test some message...\n")])},staticRenderFns:[]};var d=n("VU/8")(p,f,!1,function(t){n("rSmh")},null,null).exports,m={name:"App",data:function(){return{result:null,isComputing:!1}},components:{appHeader:o,appInput:l,appResult:h.default,snackBar:d},methods:{canYouMakeThisWithThat:function(t,e){var n=[t,e].reduce(function(t,e){return t.push(e.toLowerCase().replace(" ","").split("").reduce(function(t,e){return t[e]?t[e]+=1:t[e]=1,t},{})),t},[]),s=n[0],a=n[1],r=[],o=i()(s);for(var u in a)s[u]<=a[u]&&r.push(u);var c=this;setTimeout(function(){c.result=r.length==o.length,c.isComputing=!1,w.showResultAlert()},200)},final:function(t,e){this.isComputing=!0;try{this.canYouMakeThisWithThat(t,e)}catch(t){console.error(t)}}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("app-input",{attrs:{appSubmit:this.final}}),this._v(" "),e("snack-bar",{attrs:{result:this.result}})],1)},staticRenderFns:[]};var b=n("VU/8")(m,v,!1,function(t){n("aaBs")},null,null).exports,g=n("e6fC");n("Jmt5"),n("9M+g");n.d(e,"eventBus",function(){return w}),s.a.config.productionTip=!1,s.a.use(g.a);var w=new s.a({data:{},methods:{showResultAlert:function(){this.$emit("showAlert")}}});new s.a({el:"#app",components:{App:b},template:"<App/>"})},Nsmm:function(t,e){},Vy0b:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{attrs:{"align-h":"center",id:"result-alert"}},[n("b-col",{staticClass:"position-fixed",attrs:{cols:"12"}},[n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:t.result?"success":"danger"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t.result?n("span",[n("h1",[t._v("True")])]):n("span",[n("h1",[t._v("False")])])])],1)],1)},staticRenderFns:[]};e.a=s},aaBs:function(t,e){},rSmh:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7e26a6e29ba09e67e263.js.map