webpackJsonp([192],{Jl7N:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("2hMI"),i=e("yclV"),s={data:function(){return{currentPage:1,total:null,pageSize:10,searchText:"",datalist:[]}},created:function(){var t=1;this.$route.query.page&&(t=parseInt(this.$route.query.page)),this.currentPage=t,this.initData()},computed:{},mounted:function(){},methods:{initData:function(){var t=this;this.datalist=[],Object(n._126)({number:this.pageSize,page:this.currentPage,search:this.searchText}).then(function(a){1==a.data.msgNo&&(t.datalist=a.data.payload.data,t.total=a.data.payload.total)})},currentChange:function(t){this.total>this.pageSize&&(this.currentPage=t,this.initData())},goEditorInfo:function(t,a){this.$router.push({path:"/home/fundManageDetail",query:{id:t,name:encodeURIComponent(a)}})},goCreatnew:function(){this.$router.push({path:"/home/fundManageDetail"})},downloadFundFile:function(){Object(n._74)().then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(i.g)("info",t.data.message)})},toTransferManage:function(t,a){this.$router.push({path:"/home/fundManageToSet",query:{id:t,page:this.currentPage,name:encodeURIComponent(a)}})}}},r={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"personal-content-body"},[n("div",{staticClass:"table-content"},[n("div",{staticClass:"clear table-content-title"},[n("div",{staticClass:"left"},[t._v("基金管理")]),t._v(" "),n("el-input",{staticClass:"header-right-time right",attrs:{placeholder:"搜索",clearable:!0},on:{change:function(a){t.initData()}},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}},[n("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),n("div",{staticClass:"table-group"},[n("div",{staticClass:"table-group-content"},[n("div",{staticClass:"clear table-group-title"},[n("div",{staticClass:"left breadcrumb"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",[t._v("基金管理（"+t._s(t.total)+"）")])],1)],1),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.goCreatnew}},[n("span",{staticClass:"icon_add"}),t._v("添加新基金\n            ")])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.downloadFundFile}},[n("span",{staticClass:"icon_download"}),t._v("下载基金模版\n            ")])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"historyapply-group-tablebox table-group-tablebox"},[n("div",{staticClass:"table-normal-box"},[n("table",{staticClass:"table-normal"},[t._m(1),t._v(" "),t._l(t.datalist,function(a,e){return n("tr",{key:e},[n("td",[t._v(t._s(t.pageSize*(t.currentPage-1)+e+1))]),t._v(" "),n("td",[t._v(t._s(a.fundName))]),t._v(" "),""==a.actualSize||null==a.actualSize?n("td",[t._v("无")]):n("td",[t._v(t._s(a.actualSize))]),t._v(" "),n("td",[t._v(t._s(a.name))]),t._v(" "),n("td",[t._v(t._s(a.com_count))]),t._v(" "),""==a.regTime||null==a.regTime?n("td",[t._v("无")]):n("td",[t._v(t._s(a.regTime))]),t._v(" "),n("td",[n("span",{staticClass:"table-link",on:{click:function(e){t.toTransferManage(a.id,a.fundName)}}},[t._v("分配管理人")])])])})],2),t._v(" "),0==t.total?n("div",{staticClass:"table-nodata"},[n("img",{attrs:{src:e("urJZ")}}),t._v(" 没有对应数据\n            ")]):t._e()]),t._v(" "),0!=t.total?n("div",{staticClass:"pagination-normal"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"prev-text":"上一页","next-text":"下一页","current-page":t.currentPage},on:{"current-change":t.currentChange}})],1):t._e()])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"table-group-tab"},[a("div",{staticClass:"clear"}),this._v(" "),a("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("基金名称")]),t._v(" "),e("th",[t._v("基金规模（万元）")]),t._v(" "),e("th",[t._v("管理人")]),t._v(" "),e("th",{attrs:{width:"98"}},[t._v("已投项目（个）")]),t._v(" "),e("th",[t._v("成立时间")]),t._v(" "),e("th",[t._v("操作")])])}]};var l=e("C7Lr")(s,r,!1,function(t){e("kQ6l")},"data-v-1a691f1d",null);a.default=l.exports},kQ6l:function(t,a){}});
//# sourceMappingURL=192.0d4f3f5c0a6dd53d0cda.js.map