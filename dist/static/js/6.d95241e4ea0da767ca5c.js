webpackJsonp([6],{"/Gh+":function(t,e){},"9Bki":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("3cXf"),n=i.n(s),a=i("2hMI"),o=i("ij9N"),r=i("yclV"),c=i("W6QZ"),d=i("QDZ2"),l={data:function(){return{type:1,fundName:"",fundId:"",noData1:!1,noData2:!1,selectTime:"",editor:!1,selectId:"",toShowArrOne:[],showListStatusArrOne:[],toShowArrTwo:[],showListStatusArrTwo:[],editorArrOne:[],editorArrTwo:[],showEditorArrTwo:[],isShow:!1,step:1,stepOneData:[],copyStepOneData:[],stepTwoData:[],navList:[{name:"基金资产和费用信息",step:1},{name:"基金投资信息",step:2},{name:"已投项目情况",step:3}],record:[],copyArr:[],hid:"",page:1}},components:{fundLead:c.a,fundReportList:d.a},watch:{$route:function(t,e){this.init()}},created:function(){this.$route.query.page&&(this.page=this.$route.query.page),this.init()},computed:{},mounted:function(){},methods:{init:function(){var t=this.$route.name;"fundRun"==t?this.type=1:"fundRunSr"==t&&(this.type=2,this.step=3),void 0!=this.$route.query.id&&(this.fundName=decodeURIComponent(this.$route.query.name),this.fundId=this.$route.query.id),this.initialData()},toCutnav:function(t){this.step=t,this.noData1=!1,this.noData2=!1,this.record=[],this.initialData()},showChildren:function(t){var e=[];1==this.step?e=this.showListStatusArrOne:2==this.step&&(e=this.showListStatusArrTwo);var i=e.indexOf(t);-1==i?e.push(t):e.splice(i,1)},searchToShow:function(t){var e=[],i=[];return 1==this.step?(e=this.showListStatusArrOne,i=this.toShowArrOne):2==this.step&&(e=this.showListStatusArrTwo,i=this.toShowArrTwo),-1==i.indexOf(t)||-1!=e.indexOf(t)},searchIndex:function(t,e){var i=[];return 1==this.step?(this.showListStatusArrOne,i=this.toShowArrOne):2==this.step&&(this.showListStatusArrTwo,i=this.toShowArrTwo),-1!=i.indexOf(t)&&(void 0==e||5==e)},toEditor:function(t,e){if(1==this.step)this.editor=!this.editor,this.copyStepOneData=JSON.parse(n()(this.stepOneData));else if(2==this.step){var i=this.showEditorArrTwo.indexOf(t);-1==i?this.showEditorArrTwo.push(t):this.showEditorArrTwo.splice(i,1);var s={id:t,data:JSON.parse(n()(e.child))};this.copyArr.push(s)}},toCancle:function(t){var e=this;if(1==this.step)this.editor=!this.editor,this.stepOneData=JSON.parse(n()(this.copyStepOneData)),this.record=[];else if(2==this.step){var i=this.showEditorArrTwo.indexOf(t);-1==i?this.showEditorArrTwo.push(t):this.showEditorArrTwo.splice(i,1);var s=[];this.copyArr.forEach(function(i,a){i.id==t&&(s=JSON.parse(n()(i.data)),e.copyArr.splice(a,1))}),this.stepTwoData.forEach(function(e,i){e.id==t&&(e.child=s)}),this.record.forEach(function(i,s){i.id==t&&e.record.splice(s,1)})}},toConmmit:function(t){var e=this,i=[];if(1==this.step?i=this.record:this.record.forEach(function(e){if(e.id==t){var s={sid:e.sid,fmid:e.fmid,contents:e.contents};i.push(s)}}),0==i.length)return Object(r.g)("info","请修改后再提交!"),!1;Object(a._203)({flag:this.step,hid:this.hid,label:2,record:i,fundId:this.fundId}).then(function(i){if(1==i.data.msgNo){if(Object(r.g)("success","修改成功"),1==e.step)e.editor=!e.editor,e.record=[];else if(2==e.step){var s=e.showEditorArrTwo.indexOf(t);-1==s?e.showEditorArrTwo.push(t):e.showEditorArrTwo.splice(s,1),e.record.forEach(function(i,s){i.id==t&&e.record.splice(s,1)}),e.copyArr.forEach(function(i,s){i.id==t&&e.copyArr.splice(s,1)})}e.initialData()}else Object(r.g)("info",i.data.message)})},searchEditorId:function(t){return-1!=this.showEditorArrTwo.indexOf(t)},initialData:function(){var t=this;Object(a._203)({flag:this.step,fundId:this.fundId,label:1}).then(function(e){if(1==e.data.msgNo){var i=e.data.payload.data;t.hid=e.data.payload.hid,null==t.hid||void 0==t.hid||""==t.hid?t.isShow=!1:t.isShow=!0,1==t.step?(i.forEach(function(e,s){if(void 0!=e.child&&0!=e.child.length){t.toShowArrOne.push(e.id),t.showListStatusArrOne.push(e.id);var n=e.child;n.unshift(s+1,0),Array.prototype.splice.apply(i,n)}}),t.stepOneData=i):2==t.step&&(i.forEach(function(e,i){void 0!=e.child&&0!=e.child.length&&e.child.forEach(function(i,s){if(void 0!=i.child&&0!=i.child.length){t.toShowArrTwo.push(i.id),t.showListStatusArrTwo.push(e.id);var n=i.child;n.unshift(s+1,0),Array.prototype.splice.apply(e.child,n)}})}),t.stepTwoData=i)}else 1==t.step?(t.noData1=!0,t.noData2=!1):(t.noData1=!1,t.noData2=!0)})},getChangeData:function(t,e,i,s){var n={sid:e,contents:t,fmid:i};2==this.step&&(n.id=s);var a=!0;this.record.forEach(function(e){e.fmid==i&&(e.contents=t,a=!1)}),a&&this.record.push(n)},uploadFundExcel:function(t){var e=this,i=this.$refs.inputer,s=i.files[0];return void 0!=s&&(/\.xl(s[xmb]|t[xm]|am|s)$/.test(s.name)?void(1==this.type?Object(a._122)({fund_id:this.$route.query.id},s).then(function(t){1==t.data.msgNo?(Object(r.g)("success","导入成功"),e.toCutnav(e.step),e.initialData(),i.value=""):(Object(r.g)("info",t.data.message),i.value="")}):2==this.type&&Object(a._123)({fundId:this.$route.query.id},s).then(function(t){1==t.data.msgNo?(Object(r.g)("success","导入成功"),e.toCutnav(e.step),e.initialData(),i.value=""):(Object(r.g)("info",t.data.message),i.value="")})):(Object(r.g)("info","请选择Excel格式文件"),i.value="",!1))},toDownloadExcel:function(){var t=window.localStorage.getItem("htcx_server_table_token");window.location.href=o.a.url+"/web/fund/exportExcel?projId="+this.$route.query.id+"&table_token="+t},downloadFundFile:function(){1==this.type?Object(a._74)().then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(r.g)("info",t.data.message)}):2==this.type&&Object(a._75)().then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(r.g)("info",t.data.message)})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"fundRun-box"},[s("div",{staticClass:"fundRun-top-box clear"},[s("div",{staticClass:"left breadcrumb"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[1==t.type?s("el-breadcrumb-item",{attrs:{to:{path:"/home/fundManage?page="+t.page}}},[t._v("基金数据")]):t._e(),t._v(" "),2==t.type?s("el-breadcrumb-item",{attrs:{to:{path:"/home/fundManageSr"}}},[t._v("基金数据")]):t._e(),t._v(" "),s("el-breadcrumb-item",[t._v(t._s(this.fundName))])],1)],1),t._v(" "),s("span",[t._v(t._s(this.fundName))])]),t._v(" "),s("div",{staticClass:"fundRun-body-box"},[s("div",{staticClass:"fundRun-body-title clear"},[1==t.type?s("em",[t._v("基金运行监测报表")]):t._e(),t._v(" "),2==t.type?s("em",[t._v("已投项目情况")]):t._e(),t._v(" "),s("div",{staticClass:"right",on:{click:t.downloadFundFile}},[t._m(0)]),t._v(" "),s("div",{staticClass:"right"},[t._m(1),t._v(" "),s("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",id:"upload-fund-input"},on:{change:function(e){t.uploadFundExcel(e)}}})]),t._v(" "),s("div",{staticClass:"right",on:{click:t.toDownloadExcel}},[t._m(2)])]),t._v(" "),1==t.type?s("div",{staticClass:"fundRun-body-nav clear"},[s("div",{staticClass:"fundRun-body-nav-box"},t._l(t.navList,function(e,i){return s("div",{key:i,staticClass:"fundRun-body-nav-item",class:{click:t.step==e.step},on:{click:function(i){t.toCutnav(e.step)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))]):t._e(),t._v(" "),1==t.step?s("div",{staticClass:"fundRun-body-tab-box"},[t.noData1?t._e():s("div",{staticClass:"fundRun-body-tab-btn-box fundRun-body-tab-btn-box1 clear"},[t.editor?t._e():s("div",{staticClass:"fundRun-body-tab-btn right",on:{click:t.toEditor}},[s("img",{attrs:{src:i("CDWC"),alt:""}}),t._v(" "),s("span",[t._v("编辑")])])]),t._v(" "),s("table",{staticClass:"table-normal qynb-table-normal"},[t.noData1?t._e():s("tr",{staticClass:"noColspanTr"},[s("th",{attrs:{width:"300"}},[t._v("项目")]),t._v(" "),s("th",[t._v("初期累计金额")]),t._v(" "),s("th",[t._v("1季度")]),t._v(" "),s("th",[t._v("2季度")]),t._v(" "),s("th",[t._v("3季度")]),t._v(" "),s("th",[t._v("4季度")]),t._v(" "),s("th",{attrs:{width:"217"}},[t._v("期末累计数/时点数")])]),t._v(" "),t._l(t.stepOneData,function(e,i){return s("tr",{directives:[{name:"show",rawName:"v-show",value:t.searchToShow(e.pid),expression:"searchToShow(item.pid)"}],key:i,staticClass:"noColspanTr",class:{secondData:t.searchIndex(e.pid)}},[s("td",{attrs:{width:"300"}},[s("span",[t._v(t._s(e.zhName))])]),t._v(" "),t._l(e.contents,function(i,n){return s("td",{key:n},[t.editor?s("input",{directives:[{name:"model",rawName:"v-model",value:i.contents,expression:"item1.contents"}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:i.contents},on:{change:function(e){t.getChangeData(i.contents,i.sid,i.fmid)},input:function(e){e.target.composing||t.$set(i,"contents",e.target.value)}}}):s("span",[t._v(t._s(""!=i.contents?i.contents:"- -"))]),t._v(" "),t.searchIndex(e.id,n)?s("span",{staticClass:"showIcon right",class:{revolveShowIcon:t.searchToShow(e.id)},on:{click:function(i){t.showChildren(e.id)}}}):t._e()])})],2)})],2),t._v(" "),t.editor?s("div",{staticClass:"clear"},[s("div",{staticClass:"cancle-btn right",on:{click:function(e){t.toConmmit()}}},[t._v("提交")]),t._v(" "),s("div",{staticClass:"cancle-btn right",on:{click:function(e){t.toCancle()}}},[t._v("取消")])]):t._e(),t._v(" "),t.noData1?s("div",{staticClass:"table-nodata"},[s("img",{attrs:{src:i("urJZ")}}),t._v(" 没有对应数据,请先导入Excel\n        ")]):t._e()]):t._e(),t._v(" "),2==t.step?s("div",{staticClass:"fundRun-body-tab-box"},[t._l(t.stepTwoData,function(e,n){return s("div",{key:n,staticClass:"fundRun-body-tab-item-box"},[s("div",{staticClass:"fundRun-body-tab-btn-box clear"},[t.searchEditorId(e.id)?t._e():s("div",{staticClass:"fundRun-body-tab-btn right",on:{click:function(i){t.toEditor(e.id,e)}}},[s("img",{attrs:{src:i("CDWC"),alt:""}}),t._v(" "),s("span",[t._v("编辑")])])]),t._v(" "),s("div",{staticClass:"fundRun-body-tab-title"},[s("span",{staticClass:"cricle"}),t._v(" "),s("span",{staticClass:"fundRun-body-tab-title-name"},[t._v(" "+t._s(e.zhName))])]),t._v(" "),s("table",{staticClass:"table-normal qynb-table-normal"},[t._m(3,!0),t._v(" "),t._l(e.child,function(i,n){return s("tr",{directives:[{name:"show",rawName:"v-show",value:t.searchToShow(i.pid),expression:"searchToShow(item.pid)"}],key:n,staticClass:"noColspanTr",class:{secondData:t.searchIndex(i.pid)}},[s("td",{attrs:{width:"300"}},[s("span",[t._v(t._s(i.zhName))])]),t._v(" "),t._l(i.contents,function(n,a){return s("td",{key:a},[t.searchEditorId(e.id)?s("input",{directives:[{name:"model",rawName:"v-model",value:n.contents,expression:"item1.contents"}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:n.contents},on:{change:function(i){t.getChangeData(n.contents,n.sid,n.fmid,e.id)},input:function(e){e.target.composing||t.$set(n,"contents",e.target.value)}}}):s("span",[t._v(t._s(""!=n.contents?n.contents:"- -"))]),t._v(" "),t.searchIndex(i.id,a)?s("span",{staticClass:"showIcon right",class:{revolveShowIcon:t.searchToShow(i.id)},on:{click:function(e){t.showChildren(i.id)}}}):t._e()])})],2)})],2),t._v(" "),t.searchEditorId(e.id)?s("div",{staticClass:"clear"},[s("div",{staticClass:"cancle-btn right",on:{click:function(i){t.toConmmit(e.id)}}},[t._v("提交")]),t._v(" "),s("div",{staticClass:"cancle-btn right",on:{click:function(i){t.toCancle(e.id)}}},[t._v("取消")])]):t._e()])}),t._v(" "),t.noData2?s("div",{staticClass:"table-nodata"},[s("img",{attrs:{src:i("urJZ")}}),t._v(" 没有对应数据,请先导入Excel\n        ")]):t._e()],2):t._e(),t._v(" "),3==t.step?s("div",{staticClass:"fundRun-body-tab-box"},[s("fund-lead",{attrs:{fundId:t.fundId}})],1):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-group-title-btn btn-blue"},[e("span",{staticClass:"icon_download"}),this._v("下载基金模版\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"upload-fund-input"}},[e("div",{staticClass:"table-group-title-btn btn-blue"},[e("span",{staticClass:"icon_upload"}),this._v("Excel导入\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-group-title-btn btn-blue"},[e("span",{staticClass:"icon_download"}),this._v("Excel导出\n          ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{staticClass:"noColspanTr"},[i("th",{attrs:{width:"300"}},[t._v("项目")]),t._v(" "),i("th",[t._v("初期累计金额")]),t._v(" "),i("th",[t._v("1季度")]),t._v(" "),i("th",[t._v("2季度")]),t._v(" "),i("th",[t._v("3季度")]),t._v(" "),i("th",[t._v("4季度")]),t._v(" "),i("th",{attrs:{width:"217"}},[t._v("期末累计数/时点数")])])}]};var h=i("C7Lr")(l,u,!1,function(t){i("/Gh+")},"data-v-34813c9d",null);e.default=h.exports},QDZ2:function(t,e,i){"use strict";var s=i("3cXf"),n=i.n(s),a=i("yclV"),o={data:function(){return{createReportDialogTitle:"新增年度报表",createReportDialog:!1,newFolderName:"",reportEditId:-2,reportList:[{name:"2018年度已投项目报表"}],newReport:{name:""}}},components:{},props:["data"],created:function(){},computed:{},mounted:function(){},methods:{editReport:function(t){this.reportEditId=t},cancelAdd:function(){this.reportEditId=-2,this.newReport.name=""},addReport:function(){if(""===this.newReport.name)Object(a.g)("info","报表名称不能为空");else{var t=JSON.parse(n()(this.newReport));this.reportList.push(t),this.reportEditId=-2,this.newReport.name=""}},saveReport:function(){this.reportEditId=-2},deleteReport:function(t){var e=this;Object(a.h)("确定删除吗？").then(function(i){e.reportList.splice(t,1)}).catch(function(){})},createReportDialogClick:function(){},createReport:function(){this.reportEditId=-1}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"fundRun-body-box"},[i("div",{staticClass:"fundRun-body-title clear"},[t._v("\n      各年份已投项目报表\n    ")]),t._v(" "),i("div",{staticClass:"fundRun-body-tab-box"},[i("div",{staticClass:"fundrun_reportlist"},[t._l(t.reportList,function(e,s){return i("div",{staticClass:"fundrun_reportitem"},[i("div",{staticClass:"iconfont icon-wendang1"}),t._v(" "),s!=t.reportEditId?i("div",{staticClass:"fundrun_reportitem_text"},[t._v(t._s(e.name))]):t._e(),t._v(" "),s==t.reportEditId?i("div",{staticClass:"fundrun_reportitem_inputbox"},[i("el-input",{staticClass:"fundrun_reportitem_input module_ckmx_td_input",attrs:{size:"mini"},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"item.name"}})],1):t._e(),t._v(" "),i("div",{staticClass:"fundrun_reportitem_btn"},[t._v("查看")]),t._v(" "),s==t.reportEditId?i("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.saveReport}},[t._v("保存")]):t._e(),t._v(" "),s!=t.reportEditId?i("div",{staticClass:"fundrun_reportitem_btn",on:{click:function(e){t.editReport(s)}}},[t._v("编辑")]):t._e(),t._v(" "),i("div",{staticClass:"fundrun_reportitem_btn",on:{click:function(e){t.deleteReport(s)}}},[t._v("删除")])])}),t._v(" "),-1==t.reportEditId?i("div",{staticClass:"fundrun_reportitem"},[i("div",{staticClass:"iconfont icon-wendang1"}),t._v(" "),i("div",{staticClass:"fundrun_reportitem_inputbox"},[i("el-input",{staticClass:"fundrun_reportitem_input module_ckmx_td_input",attrs:{size:"mini",placeholder:"请输入报表名称"},model:{value:t.newReport.name,callback:function(e){t.$set(t.newReport,"name",e)},expression:"newReport.name"}})],1),t._v(" "),i("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.addReport}},[t._v("新增")]),t._v(" "),i("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.cancelAdd}},[t._v("取消")])]):t._e()],2),t._v(" "),i("div",{staticClass:"fundrun_report_btnbox"},[i("div",{staticClass:"fundrun_report_btn",on:{click:t.createReport}},[i("span",{staticClass:"iconfont icon-add"}),t._v(" 新增年度报表\n        ")])])])]),t._v(" "),i("el-dialog",{staticClass:"dialog-content-movefile applyfun-modal",attrs:{title:t.createReportDialogTitle,visible:t.createReportDialog,width:"570px",center:"","append-to-body":!0},on:{"update:visible":function(e){t.createReportDialog=e}}},[i("div",{staticClass:"dialog_content"},[i("div",{staticClass:"form-group margin-bottom-none"},[i("div",{staticClass:"form-group-inputboxgroup clear"},[i("div",{staticClass:"form-group-inputbox"},[i("h2",{staticClass:"form-group-inputbox-title"},[i("span",{staticClass:"account-icon icon-required"}),t._v("报表名称")]),t._v(" "),i("div",{staticClass:"form-group-inputbox-selectbox select-normal-40 left"},[i("el-input",{model:{value:t.newFolderName,callback:function(e){t.newFolderName=e},expression:"newFolderName"}})],1),t._v(" "),i("span",{staticClass:"form-group-inputbox-error"})])])])]),t._v(" "),i("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"dialog-btn-submit marginl_10 btn-blue",on:{click:t.createReportDialogClick}},[t._v("确认")]),t._v(" "),i("button",{staticClass:"dialog-btn-submit btn-blue-border",on:{click:function(e){t.createReportDialog=!1}}},[t._v("取消")])])])],1)},staticRenderFns:[]};var c=i("C7Lr")(o,r,!1,function(t){i("uQOq")},"data-v-3aabb6c5",null);e.a=c.exports},uQOq:function(t,e){}});
//# sourceMappingURL=6.d95241e4ea0da767ca5c.js.map