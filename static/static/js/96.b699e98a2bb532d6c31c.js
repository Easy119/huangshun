webpackJsonp([96],{JA8T:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("yclV"),s=n("2hMI"),o={name:"fundDataHome",data:function(){return{rootid1:"",rootid2:"",leftNav:[]}},created:function(){this.getRouterList()},methods:{getRouterList:function(){var t=this;Object(s._213)({specMenuId:16}).then(function(e){1==e.data.msgNo?t.leftNav=e.data.payload:Object(a.g)("info",e.data.message)})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"table_content_body"},[n("div",{staticClass:"table_content_body_left"},t._l(t.leftNav,function(e){return n("div",{staticClass:"left_nav cursor"},[n("router-link",{attrs:{to:{name:e.component}}},[n("i",{staticClass:"icon iconfont",class:"icon-"+e.icon}),t._v(" "),n("span",[t._v(t._s(e.text))])])],1)})),t._v(" "),n("div",{staticClass:"table_content_body_right"},[n("router-view")],1),t._v(" "),n("div",{staticClass:"clear"})])])},staticRenderFns:[]};var c=n("C7Lr")(o,i,!1,function(t){n("Pb/Z")},null,null);e.default=c.exports},"Pb/Z":function(t,e){}});
//# sourceMappingURL=96.b699e98a2bb532d6c31c.js.map