webpackJsonp([57],{"7k10":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2hMI"),l=a("yclV"),s={name:"subFundInvestTotal",data:function(){return{fund_name:"",project_name:"",total:0,currentPage:1,pageSize:10,tableData:[],is_dialog_show:!1,currentIndex1:!0,currentIndex2:!0,currentIndex3:!0,currentIndex4:!0,currentIndex5:!0,fund_not_exits:[],project_not_exits:[],miss:[],newly:[],project_differ:[],update_recode:0}},created:function(){this.getInitData()},mounted:function(){},components:{},methods:{getInitData:function(t){var e=this;t&&(this.currentPage=1),Object(n._260)({chidfund:this.fund_name,project:this.project_name,page:this.currentPage,pageSize:this.pageSize}).then(function(t){1==t.data.msgNo?(e.tableData=t.data.payload.data,e.total=t.data.payload.total):Object(l.g)("info",t.data.message)})},downloadTemplet:function(){Object(n._255)({}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(l.g)("info",t.data.message)})},downloadInfo:function(){Object(n._251)({}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload.path:Object(l.g)("info",t.data.message)})},downloadErrorInfo:function(){var t={fund_not_exits:this.fund_not_exits,project_not_exits:this.project_not_exits,miss:this.miss,newly:this.newly,project_differ:this.project_differ};console.log(t),Object(n._250)({data:t}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload.path:Object(l.g)("info",t.data.message)})},uploadInfo:function(){var t=this,e=this.$refs.inputer,a=e.files[0];return void 0!=a&&(/\.xl(s[xmb]|t[xm]|am|s)$/.test(a.name)?void Object(n._262)({},a).then(function(a){1==a.data.msgNo?(t.fund_not_exits=a.data.payload.fund_not_exits,t.project_not_exits=a.data.payload.project_not_exits,t.miss=a.data.payload.miss,t.newly=a.data.payload.newly,t.project_differ=a.data.payload.project_differ,t.update_recode=a.data.payload.update_recode,t.is_dialog_show=!0,t.getInitData(1)):Object(l.g)("info","导入失败，请核对表格数据"),e.value=""}):(Object(l.g)("info","请选择Excel格式文件"),e.value="",!1))},changeDifferenceStatus:function(t){1==t?this.currentIndex1=!this.currentIndex1:2==t?this.currentIndex2=!this.currentIndex2:3==t?this.currentIndex3=!this.currentIndex3:4==t?this.currentIndex4=!this.currentIndex4:5==t&&(this.currentIndex5=!this.currentIndex5)},changeCurrentPage:function(t){this.currentPage=t,this.getInitData()},everyPageSizeChange:function(t){this.pageSize=t,this.getInitData()}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"search_group"},[n("div",{staticClass:"search_group_top"},[n("div",{staticClass:"search_box"},[n("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"子基金全称",clearable:""},model:{value:t.fund_name,callback:function(e){t.fund_name=e},expression:"fund_name"}})],1)]),t._v(" "),n("div",{staticClass:"search_group_bottom flex_start"},[n("div",{staticClass:"search_box"},[n("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:t.project_name,callback:function(e){t.project_name=e},expression:"project_name"}})],1),t._v(" "),n("div",{staticClass:"btn_box"},[n("button",{on:{click:function(e){t.getInitData(1)}}},[t._v("搜索")])])])]),t._v(" "),n("div",{staticClass:"table_title flex_between"},[n("div",{},[t._v("\n\t\t\t\t子基金投资组合总数"),n("span",[t._v("( "+t._s(t.total)+" )")])]),t._v(" "),n("div",{staticClass:"flex_end"},[n("button",{staticClass:"hover_btn flex_center",on:{click:t.downloadTemplet}},[n("span",{staticClass:"iconfont icon-daoru"}),t._v("\n\t\t\t\t\t下载子基金投资组合模板\n\t\t\t\t")]),t._v(" "),n("div",{},[t._m(0),t._v(" "),n("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",id:"upload-fund-input"},on:{change:function(e){t.uploadInfo(e)}}})]),t._v(" "),n("button",{staticClass:"blue_btn flex_center",on:{click:t.downloadInfo}},[n("span",{staticClass:"iconfont icon-daoru"}),t._v("\n\t\t\t\t\t导出excel表格\n\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{sortable:"",prop:"id",label:"序号",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.$index+1+(t.currentPage-1)*t.pageSize)+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"fund_id",label:"ID",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"name",label:"子基金全称",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"short_name",label:"子基金简称",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"number",label:"编号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"company",label:"企业名称",width:"220"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"project",label:"项目名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"first_invest_date",label:"首次投资日期",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"unit",label:"币种",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"invest_money",label:"投资额（万元）",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"invest_evaluate",label:"投资时估值(亿元)",width:"170"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"invest_scale",label:"投资占比",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.invest_scale)+" %\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"fair_value",label:"公允价值(万元)",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"update_time",label:"更新日期",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"back",label:"回款返本（万元）",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"income",label:"回款收益-税后（万元）",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"back_scale",label:"返本比例",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.back_scale)+" %\n\t\t\t\t\t")]}}])}),t._v(" "),n("template",{slot:"empty"},[n("div",{staticClass:"table-nodata flex_start"},[n("img",{attrs:{src:a("urJZ")}}),t._v(" "),n("span",[t._v("没有对应数据")])])])],2),t._v(" "),t.total?n("el-pagination",{attrs:{"prev-text":"上一页","next-text":"下一页",background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.everyPageSizeChange,"current-change":t.changeCurrentPage}}):t._e()],1),t._v(" "),n("el-dialog",{attrs:{title:"导入信息与系统信息差异对照",visible:t.is_dialog_show,width:"1030px",center:"","append-to-body":!0},on:{"update:visible":function(e){t.is_dialog_show=e}}},[n("div",{staticClass:"dialog_body"},[n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t1、系统中不存在的基金，共："+t._s(t.fund_not_exits.length)+"条\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cursor",on:{click:function(e){t.changeDifferenceStatus(1)}}},[t.currentIndex1?n("span",{staticClass:"iconfont icon-xiangshang"}):n("span",{staticClass:"iconfont icon-webicon212"})])]),t._v(" "),t.currentIndex1&&t.fund_not_exits.length?n("div",{staticClass:"difference_main table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.fund_not_exits,stripe:"","max-height":"400"}},[n("el-table-column",{attrs:{prop:"fund_id",label:"序号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"child_fund_name",label:"子基金全称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fund_short_name",label:"子基金简称",width:"250"}})],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t2、系统中不存在的企业，共："+t._s(t.project_not_exits.length)+"条\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cursor",on:{click:function(e){t.changeDifferenceStatus(2)}}},[t.currentIndex2?n("span",{staticClass:"iconfont icon-xiangshang"}):n("span",{staticClass:"iconfont icon-webicon212"})])]),t._v(" "),t.currentIndex2&&t.project_not_exits.length?n("div",{staticClass:"difference_main table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.project_not_exits,stripe:"","max-height":"400"}},[n("el-table-column",{attrs:{prop:"fund_id",label:"序号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company",label:"企业名称"}})],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t3、导入表不存在的企业名称，共："+t._s(t.miss.length)+"条\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cursor",on:{click:function(e){t.changeDifferenceStatus(3)}}},[t.currentIndex3?n("span",{staticClass:"iconfont icon-xiangshang"}):n("span",{staticClass:"iconfont icon-webicon212"})])]),t._v(" "),t.currentIndex3&&t.miss.length?n("div",{staticClass:"difference_main table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.miss,stripe:"","max-height":"400"}},[n("el-table-column",{attrs:{prop:"fund_id",label:"序号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company",label:"企业名称"}})],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t4、系统中和导入表中企业名称与子基金全称对应关系不一致，共："+t._s(t.newly.length)+"条\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cursor",on:{click:function(e){t.changeDifferenceStatus(4)}}},[t.currentIndex4?n("span",{staticClass:"iconfont icon-xiangshang"}):n("span",{staticClass:"iconfont icon-webicon212"})])]),t._v(" "),t.currentIndex4&&t.newly.length?n("div",{staticClass:"difference_main table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.newly,stripe:"","max-height":"400"}},[n("el-table-column",{attrs:{prop:"fund_id",label:"序号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company",label:"企业名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sys_child_fund_name",label:"系统中子基金全称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"child_fund_name",label:"导入表中子基金全称"}})],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t5、项目名称与系统中不一致\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cursor",on:{click:function(e){t.changeDifferenceStatus(5)}}},[t.currentIndex5?n("span",{staticClass:"iconfont icon-xiangshang"}):n("span",{staticClass:"iconfont icon-webicon212"})])]),t._v(" "),t.currentIndex5&&t.project_differ.length?n("div",{staticClass:"difference_main table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.project_differ,stripe:"","max-height":"400"}},[n("el-table-column",{attrs:{prop:"fund_id",label:"序号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"project",label:"项目名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company",label:"企业名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"child_fund_name",label:"子基金全称"}})],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"difference"},[n("div",{staticClass:"difference_title flex_between"},[n("div",{staticClass:"difference_title_left"},[t._v("\n\t\t\t\t\t\t\t6、系统中数据更新，共："+t._s(t.update_recode)+"条\n\t\t\t\t\t\t")])])])]),t._v(" "),n("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"dialog_btn dialog_btn_cancel",on:{click:function(e){t.is_dialog_show=!1}}},[t._v("关闭")]),t._v(" "),n("button",{staticClass:"dialog_btn dialog_btn_submit",on:{click:t.downloadErrorInfo}},[t._v("下载详情")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"upload-fund-input"}},[e("div",{staticClass:"table-group-title-btn btn-blue-border"},[e("span",{staticClass:"iconfont icon-daochu"}),this._v("导入子基金投资组合信息\n\t\t\t\t\t\t")])])}]};var o=a("C7Lr")(s,i,!1,function(t){a("t4F1")},"data-v-d09c9b46",null);e.default=o.exports},t4F1:function(t,e){}});
//# sourceMappingURL=57.f983749f07724e224cbd.js.map