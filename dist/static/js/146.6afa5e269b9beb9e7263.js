webpackJsonp([146],{N2v2:function(t,a){},uTsL:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("3cXf"),s=i.n(e),o=i("lB47"),c=i("z1F9"),l=i("2hMI"),n=i("lzZH"),r=i("yclV"),_=i("ij9N"),d={data:function(){return{subprojectName:"",subprojectId:"",plateList:[],creatorList:[],projectStatusList:[],moneyTypeList:[{id:1,name:"人民币"},{id:2,name:"美元"}],personFundList:[],motherList:[],commitData:{quote_info:[],project_contacts:[]},copyData:null,isEditor:!1,saveEditorData:{},type:6,showStatusBtn:!1}},created:function(){this.subprojectId=this.$route.query.id,this.getModuleInfo(),this.getAllUserList(),this.toGetSubFundDetail(),this.toGetProjectStatusList()},mounted:function(){},components:{companyDetailBackground:o.a,investProjectManageHome:c.default},methods:{changeHideStatus:function(t){this.isEditor&&(this.commitData.is_monitor=1==t?1:0)},toEnterNextStatus:function(){var t=this;this.isEditor&&Object(n.M)({direct_invest_id:this.subprojectId,status:this.commitData.project_status}).then(function(a){if(1==a.data.msgNo){var i=a.data.payload;i.is_next?Object(r.h)(i.msg).then(function(){t.commitData.project_status=i.status,t.showStatusBtn=!1}).catch(function(){}):t.showStatusBtn=!1}})},addData:function(t){1===t?this.commitData.subscription_info.push({subscription_fund_type:"",subscription_fund_ids:[],subscribeFundList:[]}):2===t?this.commitData.quote_info.push({share_code:"",quoted_date:"",list_plate_id:""}):3===t&&this.commitData.project_contacts.push({name:"",tel:"",identify_id:"",email:"",other_info:""})},deleteData:function(t,a){1===a?this.commitData.subscription_info.splice(t,1):2===a?this.commitData.quote_info.splice(t,1):3===a&&this.commitData.project_contacts.splice(t,1)},changeEditStatus:function(){this.isEditor=!0,this.saveEditorData=JSON.parse(s()(this.commitData))},toCancle:function(){this.isEditor=!1,this.toGetSubFundDetail()},toSave:function(){var t=this;if(this.commitData.project_name&&this.commitData.project_com_name){var a=JSON.parse(s()(this.commitData)),i=!0;if(a.project_contacts.forEach(function(t,a){i&&(t.tel&&i&&(Object(r.r)(t.tel)||(Object(r.g)("info","手机号码格式错误!"),i=!1)),t.identify_id&&i&&(Object(r.o)(t.identify_id)||(Object(r.g)("info","身份证号格式错误!"),i=!1)))}),!i)return!1;delete a.credit_code,a.quote_info=s()(a.quote_info),a.quote_infos=a.quote_info,delete a.quote_info,a.project_contacts=s()(a.project_contacts),a.contacts=a.project_contacts,delete a.project_contacts,Object(n.O)(a).then(function(a){1==a.data.msgNo?(Object(r.g)("success","保存成功"),t.isEditor=!1,t.toGetSubFundDetail()):Object(r.g)("info",a.data.message)})}else this.commitData.project_name?this.commitData.project_com_name||Object(r.g)("info","项目企业名称不能为空"):Object(r.g)("info","项目名称不能为空")},getModuleInfo:function(){var t=this;Object(n._7)({keyword:""}).then(function(a){if(1==a.data.msgNo){var i=a.data.payload;t.plateList=i}})},getAllUserList:function(){var t=this;Object(l._240)({number:1e4,page:1}).then(function(a){1==a.data.msgNo&&(t.creatorList=a.data.payload.data)})},toGetProjectStatusList:function(){var t=this;Object(n._6)().then(function(a){1==a.data.msgNo&&(t.projectStatusList=a.data.payload)})},toGetSubFundDetail:function(){var t=this;Object(n.K)({id:this.subprojectId}).then(function(a){if(1==a.data.msgNo){a.data.payload;t.copyData=a.data.payload,t.commitData=a.data.payload,t.commitData.project_charge_id||(t.commitData.project_charge_id=""),t.commitData.project_manager_id||(t.commitData.project_manager_id=""),t.subprojectName=a.data.payload.project_name,Object(n.M)({direct_invest_id:t.subprojectId,status:t.commitData.project_status}).then(function(a){1==a.data.msgNo&&(a.data.payload.is_next?t.showStatusBtn=!0:t.showStatusBtn=!1)})}})},downLoadCompanyInfo:function(){var t=window.localStorage.getItem("htcx_server_key"),a=_.a.sourceDataUrl+"/web/Company/CompanyInfoExcel?company_id="+this.subprojectId+"&key="+t+"&new_type="+this.type;window.location.href=a},toZxQuery:function(){var t=this,a=[],i={companyId:this.subprojectId,companyName:this.commitData.project_com_name};if(this.commitData.project_contacts.forEach(function(t){if(-1==t.status){var i={idCard:t.identify_id,name:t.name,phone:"",type:0};a.push(i)}}),0==a.length)return Object(r.g)("info","请先添加新的联系人"),!1;i.ae=a,Object(l._350)(i).then(function(a){1==a.data.msgNo?(Object(r.g)("success","查询成功"),t.toGetSubFundDetail()):a.data.msgNo})},toDownloadZx:function(t){if(void 0!=t)this.$router.push({nama:"creditQueryView",query:{id:t,companyId:this.subprojectId,cName:this.commitData.project_com_name}});else{var a=[];JSON.parse(s()(this.commitData.project_contacts)).forEach(function(t){null!=t.credit_id&&2==t.status&&a.push(t.credit_id)}),1==a.length?this.$router.push({name:"creditQueryView",query:{id:a[0],companyId:this.subprojectId,cName:this.commitData.project_com_name}}):a.length>1?this.$router.push({name:"creditQueryView",query:{id:a.join(","),companyId:this.subprojectId,cName:this.commitData.project_com_name}}):Object(r.g)("info","没有可下载的征信报告")}},toFundRunPage:function(){var t="";t=1==this.copyData.unit?"人民币":"美元",this.$router.push({name:"directInvestProjectRun",query:{id:this.subprojectId,name:encodeURIComponent(this.copyData.project_name),unit:encodeURIComponent(t)}})}}},m={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"body"},[t._m(0),t._v(" "),i("div",{staticClass:"company_name  company_name_border  flex_between"},[i("div",{staticClass:"flex_start"},[i("div",{staticClass:"company_name_left"},[i("i",{staticClass:"icon iconfont icon-gongsixiangqing"}),t._v(" "),i("span",[t._v(t._s(t.subprojectName))])]),t._v(" "),t.isEditor?t._e():i("div",{staticClass:"company_name_right cursor flex_start",on:{click:t.changeEditStatus}},[i("span",[t._v("编辑")]),t._v(" "),i("i",{staticClass:"icon iconfont icon-bianji"})])]),t._v(" "),i("div",{staticClass:"flex_start"},[t.isEditor?t._e():i("div",{staticClass:"table-group-title-btn btn-blue-border ",on:{click:function(a){t.toZxQuery()}}},[t._v("\n\t\t\t\t\t征信查询\n\t\t\t\t")]),t._v(" "),t.isEditor?t._e():i("div",{staticClass:"table-group-title-btn btn-blue-border ",on:{click:function(a){t.toDownloadZx()}}},[t._v("\n\t\t\t\t\t征信报告\n\t\t\t\t")]),t._v(" "),t.isEditor?t._e():i("div",{staticClass:"table-group-title-btn btn-blue  ",on:{click:function(a){t.toFundRunPage()}}},[t._v("\n\t\t\t\t\t项目运行\n\t\t\t\t")])])]),t._v(" "),i("div",{staticClass:"form_box"},[i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目名称\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:t.commitData.project_name,callback:function(a){t.$set(t.commitData,"project_name",a)},expression:"commitData.project_name"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t认缴(万元)\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"",clearable:"",disabled:""},model:{value:t.commitData.subscribe,callback:function(a){t.$set(t.commitData,"subscribe",a)},expression:"commitData.subscribe"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目企业名称\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:t.commitData.project_com_name,callback:function(a){t.$set(t.commitData,"project_com_name",a)},expression:"commitData.project_com_name"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t实缴(万元)\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"",clearable:"",disabled:""},model:{value:t.commitData.paied,callback:function(a){t.$set(t.commitData,"paied",a)},expression:"commitData.paied"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t币种\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",disabled:!t.isEditor},model:{value:t.commitData.unit,callback:function(a){t.$set(t.commitData,"unit",a)},expression:"commitData.unit"}},t._l(t.moneyTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目经理\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:!t.isEditor},model:{value:t.commitData.project_manager_id,callback:function(a){t.$set(t.commitData,"project_manager_id",a)},expression:"commitData.project_manager_id"}},t._l(t.creatorList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t行业\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:t.commitData.industry,callback:function(a){t.$set(t.commitData,"industry",a)},expression:"commitData.industry"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目负责人\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:!t.isEditor},model:{value:t.commitData.project_charge_id,callback:function(a){t.$set(t.commitData,"project_charge_id",a)},expression:"commitData.project_charge_id"}},t._l(t.creatorList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目倍数\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:t.commitData.multiple,callback:function(a){t.$set(t.commitData,"multiple",a)},expression:"commitData.multiple"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t是否舆情监测\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right flex_start"},[i("div",{staticClass:"radio_btn cursor",class:[t.commitData.is_monitor?"radio_btn_active":""],on:{click:function(a){t.changeHideStatus(1)}}},[t._v("\n\t\t\t\t\t\t\t是\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"radio_btn cursor",class:[t.commitData.is_monitor?"":"radio_btn_active"],on:{click:function(a){t.changeHideStatus(2)}}},[t._v("\n\t\t\t\t\t\t\t否\n\t\t\t\t\t\t")])])]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t统一社会信用代码\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"",clearable:"",disabled:""},model:{value:t.commitData.credit_code,callback:function(a){t.$set(t.commitData,"credit_code",a)},expression:"commitData.credit_code"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t公允价值(万元)\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:""},model:{value:t.commitData.fair_value,callback:function(a){t.$set(t.commitData,"fair_value",a)},expression:"commitData.fair_value"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目状态\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:" form_list_right_status"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:""},model:{value:t.commitData.project_status,callback:function(a){t.$set(t.commitData,"project_status",a)},expression:"commitData.project_status"}},t._l(t.projectStatusList,function(t){return i("el-option",{key:t.id,attrs:{label:t.status,value:t.id}})})),t._v(" "),t.showStatusBtn?i("div",{staticClass:"radio_btn cursor radio_btn_active",on:{click:function(a){t.toEnterNextStatus()}}},[t._v("\n\t\t\t\t\t\t\t调整状态\n\t\t\t\t\t\t")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目简介\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right form_list_right_textarea"},[i("el-input",{attrs:{placeholder:"请填写",type:"textarea",rows:3,disabled:!t.isEditor},model:{value:t.commitData.discription,callback:function(a){t.$set(t.commitData,"discription",a)},expression:"commitData.discription"}})],1)])]),t._v(" "),t._l(t.commitData.quote_info,function(a,e){return i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目企业股票代码\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:a.share_code,callback:function(i){t.$set(a,"share_code",i)},expression:"item.share_code"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t上市/挂牌板块\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:!t.isEditor},model:{value:a.list_plate_id,callback:function(i){t.$set(a,"list_plate_id",i)},expression:"item.list_plate_id"}},t._l(t.plateList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t上市时间\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",disabled:!t.isEditor,editable:!1},model:{value:a.quoted_date,callback:function(i){t.$set(a,"quoted_date",i)},expression:"item.quoted_date"}})],1)]),t._v(" "),t.isEditor?i("div",{staticClass:"form_list flex_start"},[t.commitData.quote_info.length>1?i("span",{on:{click:function(a){t.deleteData(e,2)}}},[t._v("删除")]):t._e(),t._v(" "),e==t.commitData.quote_info.length-1?i("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:function(a){t.addData(2)}}},[t._v("\n\t\t\t\t\t\t   新增数据  \n\t\t\t\t\t")]):t._e()]):t._e()])}),t._v(" "),t._l(t.commitData.project_contacts,function(a,e){return i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"realation_title"},[t._v("\n\t\t\t\t\t项目公司联系人\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t姓名\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:a.name,callback:function(i){t.$set(a,"name",i)},expression:"item.name"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t手机\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",maxlength:"11",disabled:!t.isEditor},model:{value:a.tel,callback:function(i){t.$set(a,"tel",i)},expression:"item.tel"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t身份证号\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",maxlength:"18",disabled:!t.isEditor},model:{value:a.identify_id,callback:function(i){t.$set(a,"identify_id",i)},expression:"item.identify_id"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t邮箱\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写（选填）",clearable:"",disabled:!t.isEditor},model:{value:a.email,callback:function(i){t.$set(a,"email",i)},expression:"item.email"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t其他\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",disabled:!t.isEditor},model:{value:a.other_info,callback:function(i){t.$set(a,"other_info",i)},expression:"item.other_info"}})],1)]),t._v(" "),t.isEditor?i("div",{staticClass:"form_list flex_start"},[t.commitData.project_contacts.length>1?i("span",{on:{click:function(a){t.deleteData(e,3)}}},[t._v("删除")]):t._e(),t._v(" "),e==t.commitData.project_contacts.length-1?i("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:function(a){t.addData(3)}}},[t._v("\n\t\t\t\t\t\t   新增数据  \n\t\t\t\t\t")]):t._e()]):t._e()])})],2),t._v(" "),t.isEditor?i("div",{staticClass:"form_submit flex_center"},[i("button",{on:{click:function(a){t.toCancle()}}},[t._v("取消")]),t._v(" "),i("button",{on:{click:function(a){t.toSave()}}},[t._v("保存")])]):t._e(),t._v(" "),i("div",{staticClass:"company_background"},[i("div",{staticClass:"block_title flex_between"},[t._m(1),t._v(" "),i("div",{staticClass:"title_right flex_end"},[i("div",{staticClass:"download blue_btn cursor flex_center",on:{click:t.downLoadCompanyInfo}},[i("span",{staticClass:"iconfont icon-daoru cursor"}),t._v(" "),i("span",[t._v("导出企业信息")])])])]),t._v(" "),i("company-detail-background",{attrs:{type:t.type}})],1),t._v(" "),i("div",{staticClass:"company_background"},[t._m(2),t._v(" "),i("invest-project-manage-home")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"body_header"},[a("i",{staticClass:"icon iconfont icon-gongsixiangqing1"}),this._v(" "),a("span",[this._v("项目详情")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title_left flex_start"},[a("div",{staticClass:"radio"}),this._v(" "),a("div",{staticClass:"block_name"},[this._v("\n\t\t\t\t\t\t合伙企业信息\n\t\t\t\t\t")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"block_title flex_between"},[a("div",{staticClass:"title_left flex_start"},[a("div",{staticClass:"radio"}),this._v(" "),a("div",{staticClass:"block_name"},[this._v("\n\t\t\t\t\t\t项目管理\n\t\t\t\t\t")])])])}]};var u=i("C7Lr")(d,m,!1,function(t){i("N2v2")},"data-v-46661254",null);a.default=u.exports}});
//# sourceMappingURL=146.6afa5e269b9beb9e7263.js.map