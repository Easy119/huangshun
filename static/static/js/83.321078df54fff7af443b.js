webpackJsonp([83],{N7Hp:function(t,a){},Qiib:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("3cXf"),s=i.n(e),l=i("2hMI"),o=i("lzZH"),c=i("yclV"),n={data:function(){return{projectCompanyList:[],loading:!1,tianyan_id:"",moneyTypeList:[{id:1,name:"人民币"},{id:2,name:"美元"}],creatorList:[],projectStatusList:[],plateList:[],commitData:{project_name:"",project_com_name:"",unit:1,project_manager_id:"",industry:"",is_monitor:1,project_status:"",quote_infos:[{share_code:"",quoted_date:"",list_plate_id:""}],contacts:[{name:"",tel:"",identify_id:"",email:"",other_info:""}],tianyan_id:"",multiple:""}}},created:function(){this.getModuleInfo(),this.getAllUserList(),this.toGetProjectStatusList()},mounted:function(){},components:{},methods:{changeHideStatus:function(t){this.commitData.is_monitor=1==t?1:0},getModuleInfo:function(){var t=this;Object(o._7)({keyword:""}).then(function(a){if(1==a.data.msgNo){var i=a.data.payload;t.plateList=i}})},getAllUserList:function(){var t=this;Object(l._240)({number:1e4,page:1}).then(function(a){1==a.data.msgNo&&(t.creatorList=a.data.payload.data,t.commitData.project_manager_id=parseInt(window.localStorage.getItem("htcx_uid")))})},toGetProjectStatusList:function(){var t=this;Object(o._6)().then(function(a){1==a.data.msgNo&&(t.projectStatusList=a.data.payload,t.projectStatusList=t.projectStatusList.splice(0,3),t.projectStatusList.length>0&&(t.commitData.project_status=t.projectStatusList[0].id))})},addData:function(t){1===t?this.commitData.subscription_infos.push({subscription_fund_type:"",subscription_fund_ids:[],subscribeFundList:[]}):2===t?this.commitData.quote_infos.push({share_code:"",quoted_date:"",list_plate_id:""}):3===t&&this.commitData.contacts.push({name:"",tel:"",identify_id:"",email:"",other_info:""})},deleteData:function(t,a){1===a?this.commitData.subscription_infos.splice(t,1):2===a?this.commitData.quote_infos.splice(t,1):3===a&&this.commitData.contacts.splice(t,1)},cancleAddSubFundProject:function(){this.$router.push({name:"directInvestProjectHome"})},toAddSubFundProject:function(){var t=this;if(this.commitData.project_name&&this.commitData.project_com_name){var a=JSON.parse(s()(this.commitData)),i=!0;if(a.contacts.forEach(function(t,a){i&&(t.tel&&i&&(Object(c.r)(t.tel)||(Object(c.g)("info","手机号码格式错误!"),i=!1)),t.identify_id&&i&&(Object(c.o)(t.identify_id)||(Object(c.g)("info","身份证号格式错误!"),i=!1)))}),!i)return!1;a.quote_infos=s()(a.quote_infos),a.contacts=s()(a.contacts),Object(o.C)(a).then(function(a){if(1==a.data.msgNo){a.data.payload;Object(c.g)("success","保存成功"),t.$router.push({name:"directInvestProjectHome"})}else Object(c.g)("info",a.data.message)})}else this.commitData.project_name?this.commitData.project_com_name||Object(c.g)("info","项目企业名称不能为空"):Object(c.g)("info","项目名称不能为空")},remoteMethod:function(t){var a=this;""!==t?(this.loading=!0,Object(l._243)({name:t}).then(function(i){if(a.loading=!1,1==i.data.msgNo)if(0==i.data.payload.length)a.projectCompanyList=[{name:t,tianyan_id:0}];else{var e={name:t,tianyan_id:0};i.data.payload.push(e),a.projectCompanyList=i.data.payload}})):this.projectCompanyList=[]},getProjectCompany:function(t){var a=this;this.projectCompanyList.forEach(function(i,e){i.id==t&&(a.commitData.tianyan_id=i.id,a.commitData.project_com_name=i.name)})}}},r={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"body"},[t._m(0),t._v(" "),i("div",{staticClass:"form_box"},[i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目名称\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:t.commitData.project_name,callback:function(a){t.$set(t.commitData,"project_name",a)},expression:"commitData.project_name"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目企业名称\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"请填写","remote-method":t.remoteMethod,loading:t.loading},on:{change:function(a){t.getProjectCompany(a)}},model:{value:t.tianyan_id,callback:function(a){t.tianyan_id=a},expression:"tianyan_id"}},t._l(t.projectCompanyList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t币种\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.commitData.unit,callback:function(a){t.$set(t.commitData,"unit",a)},expression:"commitData.unit"}},t._l(t.moneyTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目经理\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.commitData.project_manager_id,callback:function(a){t.$set(t.commitData,"project_manager_id",a)},expression:"commitData.project_manager_id"}},t._l(t.creatorList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t行业\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:t.commitData.industry,callback:function(a){t.$set(t.commitData,"industry",a)},expression:"commitData.industry"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目负责人\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.commitData.project_charge_id,callback:function(a){t.$set(t.commitData,"project_charge_id",a)},expression:"commitData.project_charge_id"}},t._l(t.creatorList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目状态\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.commitData.project_status,callback:function(a){t.$set(t.commitData,"project_status",a)},expression:"commitData.project_status"}},t._l(t.projectStatusList,function(t){return i("el-option",{key:t.id,attrs:{label:t.status,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目倍数\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:t.commitData.multiple,callback:function(a){t.$set(t.commitData,"multiple",a)},expression:"commitData.multiple"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t是否舆情监测\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right flex_start"},[i("div",{staticClass:"radio_btn cursor",class:[t.commitData.is_monitor?"radio_btn_active":""],on:{click:function(a){t.changeHideStatus(1)}}},[t._v("\n\t\t\t\t\t\t\t是\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"radio_btn cursor",class:[t.commitData.is_monitor?"":"radio_btn_active"],on:{click:function(a){t.changeHideStatus(2)}}},[t._v("\n\t\t\t\t\t\t\t否\n\t\t\t\t\t\t")])])]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目简介\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right form_list_right_textarea"},[i("el-input",{attrs:{placeholder:"请填写",type:"textarea",rows:3},model:{value:t.commitData.discription,callback:function(a){t.$set(t.commitData,"discription",a)},expression:"commitData.discription"}})],1)])]),t._v(" "),t._l(t.commitData.quote_infos,function(a,e){return i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t项目企业股票代码\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:a.share_code,callback:function(i){t.$set(a,"share_code",i)},expression:"item.share_code"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t上市/挂牌板块\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:a.list_plate_id,callback:function(i){t.$set(a,"list_plate_id",i)},expression:"item.list_plate_id"}},t._l(t.plateList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t上市时间\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",editable:!1},model:{value:a.quoted_date,callback:function(i){t.$set(a,"quoted_date",i)},expression:"item.quoted_date"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[t.commitData.quote_infos.length>1?i("span",{on:{click:function(a){t.deleteData(e,2)}}},[t._v("删除")]):t._e(),t._v(" "),e==t.commitData.quote_infos.length-1?i("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:function(a){t.addData(2)}}},[t._v("\n\t\t\t\t\t\t   新增数据  \n\t\t\t\t\t")]):t._e()])])}),t._v(" "),t._l(t.commitData.contacts,function(a,e){return i("div",{staticClass:"form flex_between form_bottom"},[i("div",{staticClass:"realation_title"},[t._v("\n\t\t\t\t\t项目公司联系人\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t姓名\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:a.name,callback:function(i){t.$set(a,"name",i)},expression:"item.name"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t手机\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",maxlength:"11"},model:{value:a.tel,callback:function(i){t.$set(a,"tel",i)},expression:"item.tel"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t身份证号\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:"",maxlength:"18"},model:{value:a.identify_id,callback:function(i){t.$set(a,"identify_id",i)},expression:"item.identify_id"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t邮箱\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写（选填）",clearable:""},model:{value:a.email,callback:function(i){t.$set(a,"email",i)},expression:"item.email"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[i("div",{staticClass:"form_list_left"},[t._v("\n\t\t\t\t\t\t其他\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"form_list_right"},[i("el-input",{attrs:{placeholder:"请填写",clearable:""},model:{value:a.other_info,callback:function(i){t.$set(a,"other_info",i)},expression:"item.other_info"}})],1)]),t._v(" "),i("div",{staticClass:"form_list flex_start"},[t.commitData.contacts.length>1?i("span",{on:{click:function(a){t.deleteData(e,3)}}},[t._v("删除")]):t._e(),t._v(" "),e==t.commitData.contacts.length-1?i("div",{staticClass:"table-group-title-btn btn-blue-border",on:{click:function(a){t.addData(3)}}},[t._v("\n\t\t\t\t\t\t   新增数据  \n\t\t\t\t\t")]):t._e()])])})],2),t._v(" "),i("div",{staticClass:"form_submit flex_center"},[i("button",{on:{click:function(a){t.cancleAddSubFundProject()}}},[t._v("取消")]),t._v(" "),i("button",{on:{click:function(a){t.toAddSubFundProject()}}},[t._v("保存")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"company_name flex_between"},[a("div",{staticClass:"company_name_left"},[a("i",{staticClass:"icon iconfont icon-gongsixiangqinglogo"}),this._v(" "),a("span",[this._v("新增项目")])])])}]};var _=i("C7Lr")(n,r,!1,function(t){i("N7Hp")},"data-v-8ee1f488",null);a.default=_.exports}});
//# sourceMappingURL=83.321078df54fff7af443b.js.map