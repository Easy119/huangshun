webpackJsonp([111],{"1YkC":function(t,e){},Txlm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("a3Yh"),s=a.n(o),n=a("xg4f"),i=a("2hMI"),l=a("yclV"),r={data:function(){var t;return t={currentPage:1,pageSize:10,total:0,allCompanyList:[],allCreaterList:[],allFilingStatus:[],searchCompanyValue:"",searchCreaterValue:"",searchStatusValue:"",searchStatusId:"",company_id:"",datalist:[]},s()(t,"total",""),s()(t,"BeginDate",""),s()(t,"LastDate",""),s()(t,"isSetPowerDialogShow",!1),s()(t,"havePowerUserIds",[]),s()(t,"subComponentPostIds",[]),s()(t,"ids",""),t},created:function(){this.$route.query.from?this.from="":this.from=this.$route.query.from,this.getCompantDatalist()},components:{setPower:n.a},computed:{},mounted:function(){},methods:{getCompantDatalist:function(t){var e=this;t&&(this.currentPage=1),Object(i._171)({page:this.currentPage,size:this.pageSize,company_name:this.searchCompanyValue,create_user_name:this.searchCreaterValue,record_state:this.searchStatusValue,start_founding_time:this.BeginDate,end_founding_time:this.LastDate}).then(function(t){console.log(t),1==t.data.msgNo?(e.total=t.data.payload.count,e.datalist=t.data.payload.data,e.allCompanyList.length||(e.allCompanyList=t.data.payload.all_company_name,e.allCreaterList=t.data.payload.all_create_user_name,e.allFilingStatus=t.data.payload.all_record_state)):Object(l.g)("info",t.data.message)})},searchCompany:function(){var t=new Date(this.BeginDate),e=new Date(this.LastDate);if(t.getTime()>e.getTime())return Object(l.g)("info","开始时间不能大于结束时间"),!1;this.getCompantDatalist(1)},chooseCompanyName:function(t){console.log(this.searchCompanyValue),console.log(t)},querySearch1:function(t,e){var a=this.allCompanyList;e(t?a.filter(this.createFilter(t)):a)},querySearch2:function(t,e){var a=this.allCreaterList;e(t?a.filter(this.createFilter(t)):a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},getStatusId:function(t){console.log(t),this.searchStatusId=t.id},deleteCompany:function(t,e){var a=this;console.log(e);var o=e.id;e.auth.delete_operate?Object(l.h)("确定要删除管理公司吗？").then(function(){a.toDeleteCompany(o)}).catch(function(){}):Object(l.g)("info","您无权限操作该条数据")},toDeleteCompany:function(t){var e=this;Object(i._53)({id:t}).then(function(t){1==t.data.msgNo?(Object(l.g)("success",t.data.message),e.getCompantDatalist()):Object(l.g)("info",t.data.message)})},viewCompany:function(t){var e=t.id;t.auth.check_operate?this.$router.push({name:"manageCompanyDetail",query:{id:e}}):Object(l.g)("info","您无权限操作该条数据")},toCompanyRun:function(t){var e=t.id;t.auth.auth_operate?this.$router.push({name:"manageCompanyRun",query:{id:e}}):Object(l.g)("info","您无权限操作该条数据")},setUserPower:function(t){this.company_id=t.id,t.auth.auth_operate?this.getHavePowerUsers(t.id):Object(l.g)("info","您没有设置权限，请联系管理员！")},getHavePowerUsers:function(t){var e=this;Object(i._176)({type:1,data_id:t}).then(function(t){console.log(t.data),1==t.data.msgNo?(e.havePowerUserIds=t.data.payload.ids,e.ids=t.data.payload.ids.join(","),e.isSetPowerDialogShow=!0):Object(l.g)("info",t.data.message)})},getSetPowerIds:function(t){console.log(t),this.subComponentPostIds=[];for(var e=0,a=t.length;e<a;e++)-1==this.subComponentPostIds.indexOf(t[e])&&this.subComponentPostIds.push(t[e]);var o=this.decodeSelectedUserId(this.subComponentPostIds);this.ids=o.join(",")},decodeSelectedUserId:function(t){for(var e=[],a=[],o=0,s=t.length;o<s;o++)a=t[o].id.split("-"),-1==e.indexOf(a[0])&&e.push(a[0]);return e},setPowerSubmit:function(){var t=this;Object(i._322)({table_name:"sg_company_manager",type:1,data_id:this.company_id,ids:this.ids}).then(function(e){console.log(e.data),1==e.data.msgNo?(t.isSetPowerDialogShow=!1,Object(l.g)("success",e.data.message)):Object(l.g)("info",e.data.message)})},downloadManageCompanyTempletExcel:function(){Object(i._82)()},downloadManageCompanyInfoExcel:function(){Object(i._81)({}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload.url:Object(l.g)("info",t.data.message)})},uploadManageCompanyInfoExcel:function(){var t=this,e=this.$refs.inputer,a=e.files[0];return void 0!=a&&(/\.xl(s[xmb]|t[xm]|am|s)$/.test(a.name)?void Object(i._363)({},a).then(function(a){1==a.data.msgNo?(Object(l.g)("success","导入成功"),t.getCompantDatalist()):Object(l.g)("info",a.data.message),e.value=""}):(Object(l.g)("info","请选择Excel格式文件"),e.value="",!1))},addManageCompany:function(){this.$router.push({name:"manageCompanyAdd"})},dialogClose:function(){var t=this,e=this.dialogParam;""!=e.name||""!=e.phone||""!=e.email||""!=e.leader||""!=e.depart_id||""!=e.position||""!=e.entryTime?Object(l.h)("确定放弃修改吗？").then(function(){t.fileuploadDialog=!1}).catch(function(){}):this.fileuploadDialog=!1},commitRule:function(){var t=this,e=this.$refs.tree.getCheckedKeys();e.forEach(function(a){t.ruleList.forEach(function(t){void 0!=t.child&&t.child.forEach(function(o){o.id==a?-1==e.indexOf(t.id)&&e.push(t.id):void 0!=o.child&&o.child.forEach(function(t){t.id==a&&-1==e.indexOf(o.id)&&e.push(o.id)})})})}),e=e.join(","),editUserRule({user_id:this.setRuleId,rule:e}).then(function(e){1==e.data.msgNo?(Object(l.g)("success","权限设置成功！"),t.ruleDialog=!1):Object(l.g)("info",e.data.message)})},ruleClose:function(){this.ruleDialog=!1},changeCurrentPage:function(t){this.currentPage=t,this.getCompantDatalist()},everyPageSizeChange:function(t){this.pageSize=t,this.getCompantDatalist()}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"body"},[t._m(0),t._v(" "),o("div",{staticClass:"search_row_box flex_start"},[o("div",{staticClass:"search_box"},[o("el-autocomplete",{staticClass:"search_select",attrs:{"fetch-suggestions":t.querySearch1,clearable:!0,"prefix-icon":"el-icon-search",placeholder:"公司名称"},model:{value:t.searchCompanyValue,callback:function(e){t.searchCompanyValue=e},expression:"searchCompanyValue"}})],1),t._v(" "),o("div",{staticClass:"search_box"},[o("el-autocomplete",{staticClass:"search_select",attrs:{"fetch-suggestions":t.querySearch2,clearable:!0,placeholder:"数据创建人"},model:{value:t.searchCreaterValue,callback:function(e){t.searchCreaterValue=e},expression:"searchCreaterValue"}})],1),t._v(" "),o("div",{staticClass:"search_box"},[o("el-select",{attrs:{clearable:"",placeholder:"备案状态"},model:{value:t.searchStatusValue,callback:function(e){t.searchStatusValue=e},expression:"searchStatusValue"}},t._l(t.allFilingStatus,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),o("div",{staticClass:"date_box"},[o("el-date-picker",{attrs:{type:"date",placeholder:"开始日期","value-format":"yyyy-MM-dd",clearable:!1,editable:!1},model:{value:t.BeginDate,callback:function(e){t.BeginDate=e},expression:"BeginDate"}})],1),t._v(" "),o("div",{staticClass:"date_middle_text"},[t._v("\n\t\t\t\t至\n\t\t\t")]),t._v(" "),o("div",{staticClass:"date_box"},[o("el-date-picker",{attrs:{type:"date",placeholder:"结束日期","value-format":"yyyy-MM-dd",clearable:!1,editable:!1},model:{value:t.LastDate,callback:function(e){t.LastDate=e},expression:"LastDate"}})],1),t._v(" "),o("div",{staticClass:"search_btn cursor",on:{click:t.searchCompany}},[t._v("\n\t\t\t\t搜索\n\t\t\t")])]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"title_group_box"},[o("div",{staticClass:"page_name "},[t._v("基金管理公司总数（ "+t._s(t.total)+" ）")]),t._v(" "),o("div",{staticClass:"flex_end"},[o("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:t.downloadManageCompanyInfoExcel}},[o("span",{staticClass:"iconfont icon-daoru"}),t._v("导出excel表格\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:t.downloadManageCompanyTempletExcel}},[o("span",{staticClass:"iconfont icon-daoru"}),t._v("下载管理公司信息模版\n\t\t\t\t")]),t._v(" "),o("div",{},[t._m(2),t._v(" "),o("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",id:"upload-fund-input"},on:{change:function(e){t.uploadManageCompanyInfoExcel(e)}}})]),t._v(" "),o("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.addManageCompany}},[o("span",{staticClass:"iconfont icon-jia"}),t._v("添加管理公司\n\t\t\t\t")])])]),t._v(" "),o("div",{staticClass:"historyapply-group-tablebox table-group-tablebox"},[o("div",{staticClass:"table"},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.datalist,border:""}},[o("el-table-column",{attrs:{prop:"",label:"序号",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(e.$index+1+(t.currentPage-1)*t.pageSize)+"\n\t\t\t\t\t\t")]}}])}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"company_name",label:"公司名称",width:"300"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"id",label:"ID",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"legal_representative",label:"法定代表人",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"reg_capital",label:"注册资本",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"windcontrol_name",label:"运营风控负责人",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"manager_code",label:"私募基金管理人编号",width:"200"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"manage_fund_num",label:"在管基金数量",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"manage_scale",label:"管理总规模（人民币/万元）",width:"220"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"founding_time",label:"成立时间",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"create_user_name",label:"数据创建人",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"record_state_name",label:"备案状态",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.setUserPower(e.row)}}},[t._v("设置权限")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.toCompanyRun(e.row)}}},[t._v("公司运行")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.viewCompany(e.row)}}},[t._v("查看")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteCompany(e.$index,e.row)}}},[t._v("删除")])]}}])}),t._v(" "),o("template",{slot:"empty"},[o("div",{staticClass:"table-nodata"},[o("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t\t")])])],2),t._v(" "),t.total?o("el-pagination",{attrs:{"prev-text":"上一页","next-text":"下一页",background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.everyPageSizeChange,"current-change":t.changeCurrentPage}}):t._e()],1)]),t._v(" "),o("el-dialog",{attrs:{title:"设置可见人员",visible:t.isSetPowerDialogShow,width:"813px",center:"","append-to-body":!0},on:{"update:visible":function(e){t.isSetPowerDialogShow=e}}},[o("set-power",{attrs:{"have-power-user-ids":t.havePowerUserIds},on:{"get-set-power-id":t.getSetPowerIds}}),t._v(" "),o("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"dialog_btn dialog_btn_cancel",on:{click:function(e){t.isSetPowerDialogShow=!1}}},[t._v("取消")]),t._v(" "),o("button",{staticClass:"dialog_btn dialog_btn_submit",on:{click:t.setPowerSubmit}},[t._v("确定")])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body_header flex_start"},[e("i",{staticClass:"icon iconfont icon-guanligongsigaikuang"}),this._v(" "),e("span",[this._v("管理公司概况")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line_box"},[e("div",{staticClass:"line"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"upload-fund-input"}},[e("div",{staticClass:"table-group-title-btn btn-blue-border"},[e("span",{staticClass:"iconfont icon-daochu"}),this._v("导入管理公司信息模块\n\t\t\t\t\t\t")])])}]};var d=a("C7Lr")(r,c,!1,function(t){a("1YkC")},"data-v-6521a1aa",null);e.default=d.exports}});
//# sourceMappingURL=111.75361a6767cdd1e71a92.js.map