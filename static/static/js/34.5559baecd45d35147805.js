webpackJsonp([34],{QDZ2:function(t,i,e){"use strict";var o=e("3cXf"),s=e.n(o),r=e("yclV"),n={data:function(){return{createReportDialogTitle:"新增年度报表",createReportDialog:!1,newFolderName:"",reportEditId:-2,reportList:[{name:"2018年度已投项目报表"}],newReport:{name:""}}},components:{},props:["data"],created:function(){},computed:{},mounted:function(){},methods:{editReport:function(t){this.reportEditId=t},cancelAdd:function(){this.reportEditId=-2,this.newReport.name=""},addReport:function(){if(""===this.newReport.name)Object(r.g)("info","报表名称不能为空");else{var t=JSON.parse(s()(this.newReport));this.reportList.push(t),this.reportEditId=-2,this.newReport.name=""}},saveReport:function(){this.reportEditId=-2},deleteReport:function(t){var i=this;Object(r.h)("确定删除吗？").then(function(e){i.reportList.splice(t,1)}).catch(function(){})},createReportDialogClick:function(){},createReport:function(){this.reportEditId=-1}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"fundRun-body-box"},[e("div",{staticClass:"fundRun-body-title clear"},[t._v("\n      各年份已投项目报表\n    ")]),t._v(" "),e("div",{staticClass:"fundRun-body-tab-box"},[e("div",{staticClass:"fundrun_reportlist"},[t._l(t.reportList,function(i,o){return e("div",{staticClass:"fundrun_reportitem"},[e("div",{staticClass:"iconfont icon-wendang1"}),t._v(" "),o!=t.reportEditId?e("div",{staticClass:"fundrun_reportitem_text"},[t._v(t._s(i.name))]):t._e(),t._v(" "),o==t.reportEditId?e("div",{staticClass:"fundrun_reportitem_inputbox"},[e("el-input",{staticClass:"fundrun_reportitem_input module_ckmx_td_input",attrs:{size:"mini"},model:{value:i.name,callback:function(e){t.$set(i,"name",e)},expression:"item.name"}})],1):t._e(),t._v(" "),e("div",{staticClass:"fundrun_reportitem_btn"},[t._v("查看")]),t._v(" "),o==t.reportEditId?e("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.saveReport}},[t._v("保存")]):t._e(),t._v(" "),o!=t.reportEditId?e("div",{staticClass:"fundrun_reportitem_btn",on:{click:function(i){t.editReport(o)}}},[t._v("编辑")]):t._e(),t._v(" "),e("div",{staticClass:"fundrun_reportitem_btn",on:{click:function(i){t.deleteReport(o)}}},[t._v("删除")])])}),t._v(" "),-1==t.reportEditId?e("div",{staticClass:"fundrun_reportitem"},[e("div",{staticClass:"iconfont icon-wendang1"}),t._v(" "),e("div",{staticClass:"fundrun_reportitem_inputbox"},[e("el-input",{staticClass:"fundrun_reportitem_input module_ckmx_td_input",attrs:{size:"mini",placeholder:"请输入报表名称"},model:{value:t.newReport.name,callback:function(i){t.$set(t.newReport,"name",i)},expression:"newReport.name"}})],1),t._v(" "),e("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.addReport}},[t._v("新增")]),t._v(" "),e("div",{staticClass:"fundrun_reportitem_btn",on:{click:t.cancelAdd}},[t._v("取消")])]):t._e()],2),t._v(" "),e("div",{staticClass:"fundrun_report_btnbox"},[e("div",{staticClass:"fundrun_report_btn",on:{click:t.createReport}},[e("span",{staticClass:"iconfont icon-add"}),t._v(" 新增年度报表\n        ")])])])]),t._v(" "),e("el-dialog",{staticClass:"dialog-content-movefile applyfun-modal",attrs:{title:t.createReportDialogTitle,visible:t.createReportDialog,width:"570px",center:"","append-to-body":!0},on:{"update:visible":function(i){t.createReportDialog=i}}},[e("div",{staticClass:"dialog_content"},[e("div",{staticClass:"form-group margin-bottom-none"},[e("div",{staticClass:"form-group-inputboxgroup clear"},[e("div",{staticClass:"form-group-inputbox"},[e("h2",{staticClass:"form-group-inputbox-title"},[e("span",{staticClass:"account-icon icon-required"}),t._v("报表名称")]),t._v(" "),e("div",{staticClass:"form-group-inputbox-selectbox select-normal-40 left"},[e("el-input",{model:{value:t.newFolderName,callback:function(i){t.newFolderName=i},expression:"newFolderName"}})],1),t._v(" "),e("span",{staticClass:"form-group-inputbox-error"})])])])]),t._v(" "),e("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"dialog-btn-submit marginl_10 btn-blue",on:{click:t.createReportDialogClick}},[t._v("确认")]),t._v(" "),e("button",{staticClass:"dialog-btn-submit btn-blue-border",on:{click:function(i){t.createReportDialog=!1}}},[t._v("取消")])])])],1)},staticRenderFns:[]};var d=e("C7Lr")(n,a,!1,function(t){e("uQOq")},"data-v-3aabb6c5",null);i.a=d.exports},dVQN:function(t,i){},hLB2:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("3cXf"),s=e.n(o),r=e("2hMI"),n=(e("ij9N"),e("yclV")),a=e("W6QZ"),d=e("QDZ2"),c={data:function(){return{type:1,fundName:"",fundId:"",noData1:!1,noData2:!1,selectTime:"",editor:!1,selectId:"",toShowArrOne:[],showListStatusArrOne:[],toShowArrTwo:[],showListStatusArrTwo:[],editorArrOne:[],editorArrTwo:[],showEditorArrTwo:[],isShow:!1,step:3,stepOneData:[],copyStepOneData:[],stepTwoData:[],navList:[{name:"基金资产和费用信息",step:1},{name:"基金投资信息",step:2},{name:"已投项目情况",step:3}],record:[],copyArr:[],hid:"",page:1}},components:{fundLead:a.a,fundReportList:d.a},watch:{$route:function(t,i){this.init()}},created:function(){this.$route.query.page&&(this.page=this.$route.query.page),this.init()},computed:{},mounted:function(){},methods:{init:function(){var t=this.$route.name;"fundRun"==t?this.type=1:"fundRunSr"==t&&(this.type=2,this.step=3),void 0!=this.$route.query.id&&(this.fundName=decodeURIComponent(this.$route.query.name),this.fundId=this.$route.query.id),this.initialData()},toCutnav:function(t){this.step=t,this.noData1=!1,this.noData2=!1,this.record=[],this.initialData()},showChildren:function(t){var i=[];1==this.step?i=this.showListStatusArrOne:2==this.step&&(i=this.showListStatusArrTwo);var e=i.indexOf(t);-1==e?i.push(t):i.splice(e,1)},searchToShow:function(t){var i=[],e=[];return 1==this.step?(i=this.showListStatusArrOne,e=this.toShowArrOne):2==this.step&&(i=this.showListStatusArrTwo,e=this.toShowArrTwo),-1==e.indexOf(t)||-1!=i.indexOf(t)},searchIndex:function(t,i){var e=[];return 1==this.step?(this.showListStatusArrOne,e=this.toShowArrOne):2==this.step&&(this.showListStatusArrTwo,e=this.toShowArrTwo),-1!=e.indexOf(t)&&(void 0==i||5==i)},toEditor:function(t,i){if(1==this.step)this.editor=!this.editor,this.copyStepOneData=JSON.parse(s()(this.stepOneData));else if(2==this.step){var e=this.showEditorArrTwo.indexOf(t);-1==e?this.showEditorArrTwo.push(t):this.showEditorArrTwo.splice(e,1);var o={id:t,data:JSON.parse(s()(i.child))};this.copyArr.push(o)}},toCancle:function(t){var i=this;if(1==this.step)this.editor=!this.editor,this.stepOneData=JSON.parse(s()(this.copyStepOneData)),this.record=[];else if(2==this.step){var e=this.showEditorArrTwo.indexOf(t);-1==e?this.showEditorArrTwo.push(t):this.showEditorArrTwo.splice(e,1);var o=[];this.copyArr.forEach(function(e,r){e.id==t&&(o=JSON.parse(s()(e.data)),i.copyArr.splice(r,1))}),this.stepTwoData.forEach(function(i,e){i.id==t&&(i.child=o)}),this.record.forEach(function(e,o){e.id==t&&i.record.splice(o,1)})}},toConmmit:function(t){var i=this,e=[];if(1==this.step?e=this.record:this.record.forEach(function(i){if(i.id==t){var o={sid:i.sid,fmid:i.fmid,contents:i.contents};e.push(o)}}),0==e.length)return Object(n.g)("info","请修改后再提交!"),!1;Object(r._203)({flag:this.step,hid:this.hid,label:2,record:e,fundId:this.fundId}).then(function(e){if(1==e.data.msgNo){if(Object(n.g)("success","修改成功"),1==i.step)i.editor=!i.editor,i.record=[];else if(2==i.step){var o=i.showEditorArrTwo.indexOf(t);-1==o?i.showEditorArrTwo.push(t):i.showEditorArrTwo.splice(o,1),i.record.forEach(function(e,o){e.id==t&&i.record.splice(o,1)}),i.copyArr.forEach(function(e,o){e.id==t&&i.copyArr.splice(o,1)})}i.initialData()}else Object(n.g)("info",e.data.message)})},searchEditorId:function(t){return-1!=this.showEditorArrTwo.indexOf(t)},initialData:function(){var t=this;Object(r._203)({flag:this.step,fundId:this.fundId,label:1}).then(function(i){if(1==i.data.msgNo){var e=i.data.payload.data;t.hid=i.data.payload.hid,null==t.hid||void 0==t.hid||""==t.hid?t.isShow=!1:t.isShow=!0,1==t.step?(e.forEach(function(i,o){if(void 0!=i.child&&0!=i.child.length){t.toShowArrOne.push(i.id),t.showListStatusArrOne.push(i.id);var s=i.child;s.unshift(o+1,0),Array.prototype.splice.apply(e,s)}}),t.stepOneData=e):2==t.step&&(e.forEach(function(i,e){void 0!=i.child&&0!=i.child.length&&i.child.forEach(function(e,o){if(void 0!=e.child&&0!=e.child.length){t.toShowArrTwo.push(e.id),t.showListStatusArrTwo.push(i.id);var s=e.child;s.unshift(o+1,0),Array.prototype.splice.apply(i.child,s)}})}),t.stepTwoData=e)}else 1==t.step?(t.noData1=!0,t.noData2=!1):(t.noData1=!1,t.noData2=!0)})},getChangeData:function(t,i,e,o){var s={sid:i,contents:t,fmid:e};2==this.step&&(s.id=o);var r=!0;this.record.forEach(function(i){i.fmid==e&&(i.contents=t,r=!1)}),r&&this.record.push(s)}}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"body"},[i("div",{staticClass:"fundRun-box"},[i("div",{staticClass:"fundRun-body-box"},[3==this.step?i("div",{staticClass:"fundRun-body-tab-box"},[i("fund-lead",{attrs:{fundId:this.fundId}})],1):this._e()])])])},staticRenderFns:[]};var p=e("C7Lr")(c,u,!1,function(t){e("dVQN")},"data-v-6910deb7",null);i.default=p.exports},uQOq:function(t,i){}});
//# sourceMappingURL=34.5559baecd45d35147805.js.map