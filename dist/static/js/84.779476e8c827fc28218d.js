webpackJsonp([84],{"0udc":function(t,a){},Kd4o:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("2hMI"),s=e("yclV"),i=e("ij9N"),o={data:function(){return{currentPage:1,total:null,pageSize:10,searchText:"",datalist:[],isNoInfoShow:!1}},created:function(){this.$route.query.page&&(this.currentPage=parseInt(this.$route.query.page)),this.initData()},computed:{},mounted:function(){},methods:{initData:function(){var t=this;this.datalist=[],Object(n._35)({number:this.pageSize,page:this.currentPage,search:this.searchText}).then(function(a){1==a.data.msgNo&&(t.datalist=a.data.payload.data,t.total=a.data.payload.total,0==a.data.payload.data.length?t.isNoInfoShow=!0:t.isNoInfoShow=!1)})},currentChange:function(t){this.total>this.pageSize&&(this.currentPage=t,this.initData())},deleteInfo:function(t){var a=this;Object(s.h)("确定要删除该投资人信息？").then(function(){a.addaccountDialogVisible=!1,Object(n._50)({id:t}).then(function(t){1==t.data.msgNo?(Object(s.g)("success","删除成功"),1==a.datalist.length&&a.currentPage>1&&(a.currentPage=a.currentPage-1),a.initData()):Object(s.g)("fail",t.data.message)})}).catch(function(){})},goEditorInfo:function(t){this.$router.push({path:"/home/investorsInfo",query:{id:t,page:this.currentPage}})},goCreatnew:function(){this.$router.push({path:"/home/investorsInfo"})},toDownloadCusExcel:function(){Object(n._118)({fileName:"tzrxx"}).then(function(t){console.log(t),1==t.data.msgNo?window.location.href=t.data.payload:Object(s.g)("info",t.data.message)})},toDownloadCusInfo:function(){var t=window.localStorage.getItem("htcx_server_table_token");window.location.href=i.a.url+"/web/Customer/exportCusExcel?table_token="+t},uploadFundExcel:function(t){var a=this,e=this.$refs.inputer,i=e.files[0];return void 0!=i&&(console.log(i),console.log(i.name),/\.xl(s[xmb]|t[xm]|am|s)$/.test(i.name)?void Object(n._34)({},i).then(function(t){1==t.data.msgNo?(Object(s.g)("success","导入成功"),a.currentPage=1,a.initData()):Object(s.g)("info",t.data.message)}):(Object(s.g)("info","请选择Excel格式文件"),e.value="",!1))}}},l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"personal-content-body"},[n("div",{staticClass:"table-content"},[n("div",{staticClass:"clear table-content-title"},[n("div",{staticClass:"left"},[t._v("基本信息")]),t._v(" "),n("el-input",{staticClass:"header-right-time right",attrs:{placeholder:"搜索",clearable:!0},on:{change:function(a){t.initData()}},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}},[n("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),n("div",{staticClass:"table-group"},[n("div",{staticClass:"table-group-content"},[n("div",{staticClass:"clear table-group-title"},[n("div",{staticClass:"left breadcrumb"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",[t._v("基本信息（"+t._s(t.total)+"）")])],1)],1),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.goCreatnew}},[n("span",{staticClass:"iconfont icon-add"}),t._v("添加新投资人\n            ")])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.toDownloadCusInfo}},[n("span",{staticClass:"iconfont icon-daoru"}),t._v("导出投资人信息\n            ")])]),t._v(" "),n("div",{staticClass:"right"},[t._m(0),t._v(" "),n("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",id:"upload-fund-input"},on:{change:function(a){t.uploadFundExcel(a)}}})]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.toDownloadCusExcel}},[n("span",{staticClass:"iconfont icon-daoru"}),t._v("下载投资人模版\n            ")])])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"historyapply-group-tablebox table-group-tablebox"},[n("div",{staticClass:"table-normal-box"},[n("table",{staticClass:"table-normal"},[t._m(2),t._v(" "),t._l(t.datalist,function(a,e){return n("tr",{key:e},[n("td",[t._v(t._s(t.pageSize*(t.currentPage-1)+e+1))]),t._v(" "),n("td",[t._v(t._s(a.name))]),t._v(" "),""==a.cell?n("td",[t._v("无")]):n("td",[t._v(t._s(a.cell))]),t._v(" "),""==a.email?n("td",[t._v("无")]):n("td",[t._v(t._s(a.email))]),t._v(" "),n("td",[1==a.status?n("span",[t._v("已开启")]):n("span",[t._v("未开启")])]),t._v(" "),n("td",[n("span",{staticClass:"table-link",on:{click:function(e){t.goEditorInfo(a.id)}}},[t._v("编辑")]),t._v(" "),n("span",{staticClass:"table-link",on:{click:function(e){t.deleteInfo(a.id)}}},[t._v("删除")])])])})],2),t._v(" "),0==t.total?n("div",{staticClass:"table-nodata"},[n("img",{attrs:{src:e("urJZ")}}),t._v(" 没有对应数据\n            ")]):t._e()]),t._v(" "),0!=t.total?n("div",{staticClass:"pagination-normal"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"prev-text":"上一页","next-text":"下一页","current-page":t.currentPage},on:{"current-change":t.currentChange}})],1):t._e()])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"upload-fund-input"}},[a("div",{staticClass:"table-group-title-btn btn-blue"},[a("span",{staticClass:"iconfont icon-daochu2"}),this._v("导入投资人信息\n              ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"table-group-tab"},[a("div",{staticClass:"clear"}),this._v(" "),a("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("投资人")]),t._v(" "),e("th",[t._v("手机号")]),t._v(" "),e("th",[t._v("邮箱")]),t._v(" "),e("th",[t._v("客户端账号")]),t._v(" "),e("th",[t._v("操作")])])}]};var c=e("C7Lr")(o,l,!1,function(t){e("0udc")},"data-v-83f2a472",null);a.default=c.exports}});
//# sourceMappingURL=84.779476e8c827fc28218d.js.map