webpackJsonp([76],{"O+CQ":function(t,a){},"PiC+":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("aA9S"),i=n.n(e),s=n("lB47"),o=n("yclV"),l=n("ij9N"),c=n("2hMI"),_={name:"manageCompanyDetail",data:function(){return{id:"",isHaveEditePower:0,isDisabledEditable:!0,allFilingStatus:[],allUserList:[],companyInfo:{},companyInfoInit:{},company_name:"",short_name:"",fund_amount:"",area:"",record_state:"",credit_code:"",fund_count:"",create_user_id:"",create_user_name:"",legal_representative:"",founding_time:""}},created:function(){this.id=this.$route.query.id,this.getAllUserList(),this.getBeiAnStatus(),this.getCompanyDetail()},mounted:function(){},components:{companyDetailBackground:s.a},methods:{getCompanyDetail:function(){var t=this;Object(c._150)({id:this.id}).then(function(a){if(1==a.data.msgNo){t.isHaveEditePower=a.data.payload.is_edit;var n=a.data.payload.sg_company_manager;t.companyInfoInit=i()({},n),t.companyInfo=a.data.payload.sg_company_manager}else Object(o.g)("info",a.data.message)})},getAllUserList:function(){var t=this;Object(c._240)({number:1e4,page:1}).then(function(a){1==a.data.msgNo?t.allUserList=a.data.payload.data:Object(o.g)("info",a.data.message)})},getBeiAnStatus:function(){var t=this;Object(c._142)({}).then(function(a){1==a.data.msgNo?t.allFilingStatus=a.data.payload.record_state:Object(o.g)("info",a.data.message)})},changeEditStatus:function(){this.isDisabledEditable=!1,this.$nextTick(function(){this.$refs.input1.$el.querySelector("input").focus()})},cancelEdit:function(){this.companyInfo=i()({},this.companyInfoInit),this.isDisabledEditable=!0},saveSubmit:function(){var t=this;if(this.companyInfo.company_name)Object(c._312)({id:this.id,company_name:this.companyInfo.company_name,short_name:this.companyInfo.short_name,area:this.companyInfo.area,record_state:this.companyInfo.record_state,credit_code:this.companyInfo.credit_code,create_user_id:this.companyInfo.create_user_id,create_user_name:this.$refs.selectProvince.selected.label,legal_representative:this.companyInfo.legal_representative,founding_time:this.companyInfo.founding_time,windcontrol_userid:this.companyInfo.windcontrol_userid,manager_code:this.companyInfo.manager_code}).then(function(a){1==a.data.msgNo?(Object(o.g)("success",a.data.message),t.isDisabledEditable=!0,t.getCompanyDetail()):Object(o.g)("info",a.data.message)});else{Object(o.g)("info","管理公司全称不能为空")}},downLoadCompanyInfo:function(){var t=window.localStorage.getItem("htcx_server_key"),a=l.a.sourceDataUrl+"/web/Company/CompanyInfoExcel?company_id="+this.company_id+"&key="+t+"&new_type=1";window.location.href=a},downloadEquityInfo:function(){Object(c._73)({company_name:this.companyInfo.company_name}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload.url:Object(o.g)("info",t.data.message)})},chooseCreater:function(t){this.$nextTick(function(){this.create_user_name=this.$refs.selectProvince.selected.label})},toFundRunPage:function(){this.$router.push({name:"manageCompanyRun",query:{id:this.id}})}}},d={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"company body"},[t._m(0),t._v(" "),n("div",{staticClass:"company_name flex_between"},[n("div",{staticClass:"flex_start"},[n("div",{staticClass:"company_name_left"},[n("i",{staticClass:"icon iconfont icon-gongsixiangqing"}),t._v(" "),n("span",[t._v(t._s(t.companyInfo.company_name))])]),t._v(" "),t.isDisabledEditable?n("div",{staticClass:"company_name_right cursor",on:{click:t.changeEditStatus}},[n("span",[t._v("编辑")]),t._v(" "),n("i",{staticClass:"icon iconfont icon-bianji"})]):t._e()]),t._v(" "),n("div",{},[n("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.toFundRunPage}},[t._v("\n\t\t\t\t公司运行\n\t\t\t")])])]),t._v(" "),n("div",{staticClass:"company_info form"},[n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t管理公司全称\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{ref:"input1",attrs:{disabled:!0,placeholder:"",clearable:""},model:{value:t.companyInfo.company_name,callback:function(a){t.$set(t.companyInfo,"company_name",a)},expression:"companyInfo.company_name"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t管理总规模（人民币/万元）\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:!0,placeholder:"",clearable:""},model:{value:t.companyInfo.fund_amount,callback:function(a){t.$set(t.companyInfo,"fund_amount",a)},expression:"companyInfo.fund_amount"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t管理公司简称\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{ref:"input1",attrs:{disabled:t.isDisabledEditable,placeholder:"请输入内容",clearable:""},model:{value:t.companyInfo.short_name,callback:function(a){t.$set(t.companyInfo,"short_name",a)},expression:"companyInfo.short_name"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t所属地区\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:t.isDisabledEditable,placeholder:"请输入内容",clearable:""},model:{value:t.companyInfo.area,callback:function(a){t.$set(t.companyInfo,"area",a)},expression:"companyInfo.area"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t备案状态\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-select",{attrs:{clearable:"",placeholder:"请选择",disabled:t.isDisabledEditable},model:{value:t.companyInfo.record_state,callback:function(a){t.$set(t.companyInfo,"record_state",a)},expression:"companyInfo.record_state"}},t._l(t.allFilingStatus,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t统一社会信用代码\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:!0,placeholder:"",clearable:""},model:{value:t.companyInfo.credit_code,callback:function(a){t.$set(t.companyInfo,"credit_code",a)},expression:"companyInfo.credit_code"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t在管基金数量\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:!0,placeholder:"",clearable:""},model:{value:t.companyInfo.fund_count,callback:function(a){t.$set(t.companyInfo,"fund_count",a)},expression:"companyInfo.fund_count"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t数据创建人\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-select",{ref:"selectProvince",attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:t.isDisabledEditable},model:{value:t.companyInfo.create_user_id,callback:function(a){t.$set(t.companyInfo,"create_user_id",a)},expression:"companyInfo.create_user_id"}},t._l(t.allUserList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t法定代表人\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:!0,placeholder:"",clearable:""},model:{value:t.companyInfo.legal_representative,callback:function(a){t.$set(t.companyInfo,"legal_representative",a)},expression:"companyInfo.legal_representative"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t成立时间\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-date-picker",{attrs:{type:"date",disabled:!0,placeholder:"",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd",editable:!1},model:{value:t.companyInfo.founding_time,callback:function(a){t.$set(t.companyInfo,"founding_time",a)},expression:"companyInfo.founding_time"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t注册资本\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:!0,placeholder:"请输入内容",clearable:""},model:{value:t.companyInfo.reg_capital,callback:function(a){t.$set(t.companyInfo,"reg_capital",a)},expression:"companyInfo.reg_capital"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t私募基金管理人编码\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-input",{attrs:{disabled:t.isDisabledEditable,placeholder:"请输入内容",clearable:""},model:{value:t.companyInfo.manager_code,callback:function(a){t.$set(t.companyInfo,"manager_code",a)},expression:"companyInfo.manager_code"}})],1)]),t._v(" "),n("div",{staticClass:"company_info_list flex_start"},[n("div",{staticClass:"company_info_list_left"},[t._v("\n\t\t\t\t运营风控负责人\n\t\t\t")]),t._v(" "),n("div",{staticClass:"company_info_list_right"},[n("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",disabled:t.isDisabledEditable},model:{value:t.companyInfo.windcontrol_userid,callback:function(a){t.$set(t.companyInfo,"windcontrol_userid",a)},expression:"companyInfo.windcontrol_userid"}},t._l(t.allUserList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),t.isDisabledEditable?t._e():n("div",{staticClass:"company_info_edit_btn flex_end"},[n("button",{on:{click:t.cancelEdit}},[t._v("取消")]),t._v(" "),n("button",{on:{click:t.saveSubmit}},[t._v("保存")])])]),t._v(" "),n("div",{staticClass:"company_background"},[n("div",{staticClass:"block_title flex_between"},[t._m(1),t._v(" "),n("div",{staticClass:"title_right flex_end"},[n("div",{staticClass:"download cursor flex_center hover_btn",on:{click:t.downloadEquityInfo}},[n("span",{staticClass:"iconfont icon-daoru cursor"}),t._v(" "),n("span",[t._v("下载股权穿透表")])]),t._v(" "),n("div",{staticClass:"download blue_btn cursor flex_center",on:{click:t.downLoadCompanyInfo}},[n("span",{staticClass:"iconfont icon-daoru cursor"}),t._v(" "),n("span",[t._v("导出企业信息")])])])]),t._v(" "),n("company-detail-background",{attrs:{type:"1"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"body_header flex_start"},[a("i",{staticClass:"icon iconfont icon-gongsixiangqing1"}),this._v(" "),a("span",[this._v("公司详情")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title_left flex_start"},[a("div",{staticClass:"radio"}),this._v(" "),a("div",{staticClass:"block_name"},[this._v("\n\t\t\t\t\t管理公司信息\n\t\t\t\t")])])}]};var r=n("C7Lr")(_,d,!1,function(t){n("O+CQ")},"data-v-9af7a0cc",null);a.default=r.exports}});
//# sourceMappingURL=76.dcaa145e5b9f1dfee430.js.map