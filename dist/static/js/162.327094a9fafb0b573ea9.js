webpackJsonp([162],{"8j1q":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("2hMI"),i=(n("9rMa"),n("yclV")),r={name:"HelloWorld",data:function(){return{phoneNum:"",newPwd:"",newPwdMsg:"",newPwdMsg1:"",newPwd1:""}},created:function(){this.$route.query.phoneNum?this.phoneNum=this.$route.query.phoneNum:this.$router.push({path:"/findpwd"})},components:{},computed:{newPwdError:function(){return""!=this.newPwd&&this.newPwd.length<6},newPwdError1:function(){return""!=this.newPwd1&&!this.newPwdError&&this.newPwd1!=this.newPwd},submitOk:function(){return""!=this.newPwd1&&""!=this.newPwd&&!this.newPwdError1&&!this.newPwdError}},methods:{checkNewpwd:function(){this.newPwdError?this.newPwdMsg="密码不少于6位":this.newPwdMsg=""},checkNewpwd2:function(){return this.newPwdError1?"两次输入的密码不一致":""},submitClick:function(){var e=this;this.submitOk&&Object(s.P)({phone:this.phoneNum,password:this.newPwd}).then(function(t){1==t.data.msgNo&&(Object(i.g)("success","密码修改成功"),e.$router.push({path:"/login"}))})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[e._m(0),e._v(" "),n("div",{staticClass:"login-box"},[n("div",{staticClass:"title"},[e._v("\n      输入新密码\n    ")]),e._v(" "),n("div",{staticClass:"login-form margint_50"},[n("div",{staticClass:"login-Item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPwd,expression:"newPwd"}],staticClass:"login-input",attrs:{type:"password",placeholder:"输入新密码",name:""},domProps:{value:e.newPwd},on:{blur:e.checkNewpwd,input:function(t){t.target.composing||(e.newPwd=t.target.value)}}}),e._v(" "),e.newPwdError?n("em",{staticClass:"error"},[e._v(e._s(e.newPwdMsg))]):e._e()]),e._v(" "),n("div",{staticClass:"login-Item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPwd1,expression:"newPwd1"}],staticClass:"login-input",attrs:{type:"password",placeholder:"再次输入新密码",name:""},domProps:{value:e.newPwd1},on:{blur:e.checkNewpwd2,input:function(t){t.target.composing||(e.newPwd1=t.target.value)}}}),e._v(" "),e.newPwdError1?n("em",{staticClass:"error"},[e._v(e._s(e.newPwdMsg1))]):e._e()]),e._v(" "),n("div",[n("input",{staticClass:"login-btn",class:{"login-btn-disabled":e.submitOk},attrs:{type:"button",value:"确  认"},on:{click:e.submitClick}})]),e._v(" "),n("router-link",{attrs:{to:"/login"}},[n("a",{staticClass:"login-link"},[e._v("已有账号，去登录>>")])])],1)]),e._v(" "),n("vue-particles",{attrs:{color:"#e1e1e1",particleOpacity:.5,particlesNumber:15,shapeType:"circle",particleSize:15,linesColor:"#cfcfcf",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:650,moveSpeed:2,hoverEffect:!0,hoverMode:"grab",clickEffect:!1,clickMode:"push"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-header"},[t("div",{staticClass:"login-logo"},[t("img",{attrs:{src:n("Y2Td"),alt:""}}),this._v("\n      XPE 智能办公平台\n    ")])])}]};var a=n("C7Lr")(r,o,!1,function(e){n("9rbZ")},"data-v-38b74152",null);t.default=a.exports},"9rbZ":function(e,t){}});
//# sourceMappingURL=162.327094a9fafb0b573ea9.js.map