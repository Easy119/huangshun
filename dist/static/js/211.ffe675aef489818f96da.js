webpackJsonp([211],{DagT:function(t,e){},pMZY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("2hMI"),o=a("yclV"),i={data:function(){return{naveList:[],datalist:[],addaccountDialogVisible1:!1,confirmData:{list:[]},floor:0,current:0,keyWord:"",total:0,isOrderByPeople:!1}},created:function(){this.$route.query.floor&&(this.floor=parseInt(this.$route.query.floor)),this.$route.query.current&&(this.current=parseInt(this.$route.query.current)),void 0!=this.$route.query.id?this.$router.push({query:{id:this.$route.query.id,cName:this.$route.query.cName},name:"newProjectProcess"}):this.getProjecStatus(1)},computed:{},mounted:function(){},methods:{cutNav:function(t,e){var a=this;if(this.current=t,this.floor=e,this.isOrderByPeople)var o=1;else o=0;Object(s._299)({floor:e,search:this.keyWord,is_order_people:o}).then(function(t){1==t.data.msgNo&&(a.datalist=t.data.payload,a.total=t.data.payload.length)})},toNewProjectProcess:function(t,e){this.$router.push({query:{id:t,cName:e,floor:this.floor,current:this.current},name:"newProjectProcess"})},AddPriject:function(){this.$router.push({name:"newProjectProcess"})},getProjecStatus:function(t){var e=this;Object(s._355)().then(function(a){1==a.data.msgNo&&(e.naveList=a.data.payload,1==t&&e.cutNav(e.current,e.floor))})},uploadProjectExcel:function(t){var e=this,a=this.$refs.inputer,i=a.files[0];return void 0!=i&&(/\.xl(s[xmb]|t[xm]|am|s)$/.test(i.name)?void Object(s.x)({},i).then(function(t){1==t.data.msgNo?(Object(o.g)("success","导入成功"),a.value="",e.cutNav(0,1)):9527==t.data.msgNo?(a.value="",e.confirmData=t.data.payload[0],e.addaccountDialogVisible1=!0):(a.value="",Object(o.g)("info",t.data.message))}):(Object(o.g)("info","请选择Excel格式文件"),a.value="",!1))},toDownloadCusExcel:function(){Object(s._118)({fileName:"ytxmqkb"}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(o.g)("info",t.data.message)})},downloadProjectInfo:function(){if(this.isOrderByPeople)var t=1;else t=0;Object(s._83)({floor:this.floor,search:this.keyWord,is_order_people:t}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(o.g)("info",t.data.message)})},toCancleConfirm1:function(){this.addaccountDialogVisible1=!1},goToDelete:function(t,e){var a=this;Object(o.h)("确定要删除该项目？").then(function(){Object(s._59)({type:e,id:t}).then(function(t){1==t.data.msgNo?(Object(o.g)("success","删除成功"),a.cutNav(a.current,a.floor),a.getProjecStatus()):Object(o.g)("info",t.data.message)})}).catch(function(){})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"table-content"},[s("div",{staticClass:"clear table-content-title"},[s("div",{staticClass:"left"},[t._v("项目管理")]),t._v(" "),s("div",{staticClass:"flex_end table-content-title-right"},[s("el-checkbox",{on:{change:function(e){t.cutNav(t.current,t.floor)}},model:{value:t.isOrderByPeople,callback:function(e){t.isOrderByPeople=e},expression:"isOrderByPeople"}},[t._v("人员排序")]),t._v(" "),s("el-input",{staticClass:"header-right-time",attrs:{placeholder:"搜索",clearable:!0},on:{change:function(e){t.cutNav(t.current,t.floor)}},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}},[s("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})])],1)]),t._v(" "),s("div",{staticClass:"table-group"},[s("div",{staticClass:"table-group-content"},[s("div",{staticClass:"clear table-group-title"},[s("div",{staticClass:"left breadcrumb"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",[t._v("项目总数（"+t._s(t.total)+"）")])],1)],1),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.AddPriject}},[s("span",{staticClass:"iconfont icon-add"}),t._v("添加新项目\n              ")])]),t._v(" "),s("div",{staticClass:"right"},[t._m(0),t._v(" "),s("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",id:"upload-project-input"},on:{change:function(e){t.uploadProjectExcel(e)}}})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.toDownloadCusExcel}},[s("span",{staticClass:"iconfont icon-daoru"}),t._v("下载项目信息模版\n              ")])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.downloadProjectInfo}},[s("span",{staticClass:"iconfont icon-daoru"}),t._v("导出excel表格\n              ")])]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"navbox"},t._l(t.naveList,function(e,a){return s("div",{key:a,staticClass:"navItem ",class:{current:a==t.current},on:{click:function(s){t.cutNav(a,e.floor)}}},[e.floor?s("span",{staticClass:"icon"},[t._v(t._s(e.floor))]):t._e(),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),0!=e.num&&void 0!=e.num?s("span",{staticClass:"number"},[t._v(t._s(e.num>99?"..":e.num))]):t._e(),t._v(" "),s("span",{staticClass:"triangle"})])}))]),t._v(" "),s("div",{staticClass:"historyapply-group-tablebox table-group-tablebox"},[s("div",{staticClass:"table-normal-box"},[s("table",{staticClass:"table-normal"},[t._m(1),t._v(" "),t._l(t.datalist,function(e,a){return s("tr",{key:e.data_id},[s("td",[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.companyName))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.add_time))]),t._v(" "),s("td",[-2==e.status?s("em",[t._v("待提交")]):t._e(),t._v(" "),-1==e.status?s("em",[t._v("已否决")]):t._e(),t._v(" "),0==e.status?s("em",{staticStyle:{color:"red"}},[t._v("待审批")]):t._e(),t._v(" "),1==e.status?s("em",[t._v("审批中")]):t._e(),t._v(" "),e.status>=2?s("em",[t._v("同意通过")]):t._e()]),t._v(" "),s("td",[s("span",{staticClass:"table-link",on:{click:function(a){t.toNewProjectProcess(e.company_id,e.companyName)}}},[t._v("查看")]),t._v(" "),s("span",{staticClass:"table-link",on:{click:function(a){t.goToDelete(e.company_id,1)}}},[t._v("删除")])])])})],2),t._v(" "),0==t.datalist.length?s("div",{staticClass:"table-nodata"},[s("img",{attrs:{src:a("urJZ"),alt:""}}),t._v(" 没有对应数据\n              ")]):t._e()])])])]),t._v(" "),s("el-dialog",{staticClass:"zxMoney_alert  project_alert",attrs:{visible:t.addaccountDialogVisible1,width:"680px",center:"","append-to-body":!0,"before-close":t.toCancleConfirm1},on:{"update:visible":function(e){t.addaccountDialogVisible1=e}}},[s("div",{staticClass:"dialog_content1"},[s("h3",[t._v("您的基础版账号"),s("span",[t._v("项目管理数量已达上限")]),t._v(",如需增加请购买"),s("span",[t._v("项目管理扩容包")])]),t._v(" "),s("h2",[t._v("付费套餐")])]),t._v(" "),s("div",{staticClass:"dialog_content_info"},[s("div",{staticClass:"clear"},t._l(t.confirmData.list,function(e,a){return s("div",{key:a,staticClass:"dialog_content_item left"},[s("span"),t._v(" "),s("span",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(e.price))])])}))]),t._v(" "),s("div",{staticClass:"dialog_content_bottom"},[t._v(t._s(t.confirmData.tel))]),t._v(" "),s("div",{staticClass:"dialog_content_bottom1"},[t._v("具体详情请联系我们进行咨询")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"upload-project-input"}},[e("div",{staticClass:"table-group-title-btn btn-blue"},[e("span",{staticClass:"iconfont icon-daochu2"}),this._v("导入项目信息\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("项目名称")]),t._v(" "),a("th",[t._v("项目负责人")]),t._v(" "),a("th",[t._v("创建时间")]),t._v(" "),a("th",[t._v("项目状态")]),t._v(" "),a("th",[t._v("操作")])])}]};var c=a("C7Lr")(i,n,!1,function(t){a("DagT")},"data-v-01bf2152",null);e.default=c.exports}});
//# sourceMappingURL=211.ffe675aef489818f96da.js.map