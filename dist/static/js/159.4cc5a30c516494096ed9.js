webpackJsonp([159],{TzTy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("yclV"),a=i("2hMI"),d={data:function(){return{id:"",type:1,is_delete:1,add_info:[{fund_id:"",fund_type:"",event:"",invest_date:"",fee:"",should_fee:"",note:"",unit:"",event_count:""}],tableData:[],edit_fund_type:"",edit_fund:"",edit_event:"",edit_invest_date:"",edit_should_fee:"",edit_fee:"",edit_unit:"",edit_note:"",edit_event_count:"",coin_list:[{label:"人民币",value:1},{label:"美元",value:2}],is_add_page:1,is_editable:0,fund_type_list:[],target_list:[],all_target_list:[]}},created:function(){this.is_add_page=this.$route.query.is_add_page,this.is_delete=this.$route.query.is_delete,this.id=this.$route.query.id,this.type=this.$route.query.type,this.is_add_page?this.getAddInfo():(this.count=this.$route.query.count,this.getInitData())},computed:{},mounted:function(){},methods:{getAddInfo:function(){var t=this;Object(a._184)({fof_id:this.id,difference_sign:this.type}).then(function(e){1==e.data.msgNo?(t.fund_type_list=e.data.payload.type,t.all_target_list=e.data.payload.data):Object(n.g)("info",e.data.message)})},addSave:function(){var t=this;Object(n.p)(parseInt(this.add_info[0].should_fee))?Object(n.g)("info","当期认缴金额过大!"):Object(n.p)(parseInt(this.add_info[0].fee))?Object(n.g)("info","当期投资金额过大!"):parseFloat(this.add_info[0].should_fee)<parseFloat(this.add_info[0].fee)?Object(n.g)("info","当期投资金额不能大于当期认缴额!"):Object(a.o)({fof_id:this.id,fund_type:this.add_info[0].fund_type,fund_id:this.add_info[0].fund_id,event:this.add_info[0].event,invest_date:this.add_info[0].invest_date,fee:this.add_info[0].fee,should_fee:this.add_info[0].should_fee,note:this.add_info[0].note,difference_sign:this.type,event_count:this.add_info[0].event_count}).then(function(e){1==e.data.msgNo?(Object(n.g)("success",e.data.message),t.clearData(),t.addCancel()):Object(n.g)("info",e.data.message)})},addCancel:function(){if(1==this.type)var t="motherFunRunDataCashFlowHome";else t="selfAdministerFunRunDataCashFlowHome";this.$router.push({name:t,query:{id:this.id}})},getInitData:function(){var t=this;Object(a._186)({count:this.count,difference_sign:this.type}).then(function(e){1==e.data.msgNo?t.$set(t.tableData,0,e.data.payload.data):Object(n.g)("info",e.data.message)})},edit:function(t){this.is_editable=1,this.getTargetList(this.tableData[0].fund_type),this.makeData(t)},editSave:function(t){var e=this;Object(n.p)(parseInt(this.edit_should_fee))?Object(n.g)("info","当期认缴金额过大!"):Object(n.p)(parseInt(this.edit_fee))?Object(n.g)("info","当期投资金额过大!"):parseFloat(this.edit_should_fee)<parseFloat(this.edit_fee)?Object(n.g)("info","当期投资额不能大于当期认缴额!"):Object(a._93)({id:t.id,fof_id:this.id,fund_id:this.edit_fund,fund_type:this.edit_fund_type,event:this.edit_event,invest_date:this.edit_invest_date,fee:this.edit_fee,should_fee:this.edit_should_fee,note:this.edit_note,difference_sign:this.type,event_count:this.edit_event_count}).then(function(t){1==t.data.msgNo?(Object(n.g)("success",t.data.message),e.is_editable=!1,e.getInitData()):Object(n.g)("info",t.data.message)})},editCancel:function(){this.is_editable=0,this.clearData()},makeData:function(t){this.edit_fund_type=t.fund_type,this.edit_fund=t.fund_id,this.edit_event=t.event,this.edit_invest_date=t.invest_date,this.edit_fee=t.fee,this.edit_should_fee=t.should_fee,this.edit_unit=t.unit,this.edit_note=t.note},clearData:function(){this.edit_fund_type="",this.edit_fund="",this.edit_event="",this.edit_invest_date="",this.edit_fee="",this.edit_should_fee="",this.edit_unit="",this.edit_note="",this.edit_event_count="",this.add_info[0].fund_id="",this.add_info[0].fund_type="",this.add_info[0].event="",this.add_info[0].invest_date="",this.add_info[0].fee="",this.add_info[0].should_fee="",this.add_info[0].note="",this.add_info[0].event_count=""},chooseFundType:function(t){this.add_info[0].fund_id="",this.getTargetList(t)},chooseFund:function(t){if(t){var e=Object(n.l)(this.target_list,"fund_id",t);this.is_add_page?this.add_info[0].unit=e.unit:this.edit_unit=e.unit,this.getEventCountData()}else this.add_info[0].unit="",this.edit_unit="",this.edit_event="",this.add_info[0].event=""},getEventCountData:function(){var t=this;if(this.is_add_page){if(1==this.add_info[0].fund_type)var e=2;else if(2==this.add_info[0].fund_type)e=3;else if(3==this.add_info[0].fund_type)e=5;else if(4==this.add_info[0].fund_type)e=4;else e="";var i=this.add_info[0].invest_date,d=this.add_info[0].fund_id,s=""}else{if(1==this.edit_fund_type)e=2;else if(2==this.edit_fund_type)e=3;else if(3==this.edit_fund_type)e=5;else if(4==this.edit_fund_type)e=4;else e="";i=this.edit_invest_date,d=this.edit_fund,s=this.tableData[0].id}if(1==this.type)var l=2;else l=3;Object(a._169)({type:l,id:this.id,cash_type:2,date:i,fund_type:e,fund_id:d,event_id:s}).then(function(e){1==e.data.msgNo?t.is_add_page?(t.add_info[0].event=e.data.payload.event_name,t.add_info[0].event_count=e.data.payload.event_count):(t.edit_event=e.data.payload.event_name,t.edit_event_count=e.data.payload.event_count):Object(n.g)("info",e.data.message)})},getTargetList:function(t){for(var e=[],i=0,n=this.all_target_list.length;i<n;i++)this.all_target_list[i].type==t&&e.push(this.all_target_list[i]);this.target_list=e},getChoosedItem:function(t,e,i){for(var n=0,a=t.length;n<a;n++)if(t[n][e]==i)return t[n]}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"cash_flow_table_box"},[t._m(0),t._v(" "),1==t.is_add_page?n("div",{staticClass:"table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.add_info,border:""}},[n("el-table-column",{attrs:{prop:"fund_type",label:"投资标的类别",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:t.chooseFundType},model:{value:e.row.fund_type,callback:function(i){t.$set(e.row,"fund_type",i)},expression:"scope.row.fund_type"}},t._l(t.fund_type_list,function(t){return n("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})}))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"fund_id",label:"投资标的名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{change:t.chooseFund},model:{value:e.row.fund_id,callback:function(i){t.$set(e.row,"fund_id",i)},expression:"scope.row.fund_id"}},t._l(t.target_list,function(t){return n("el-option",{key:t.fund_id,attrs:{label:t.name,value:t.fund_id}})}))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"invest_date",label:"出资日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-date-picker",{attrs:{type:"date",editable:!1,"value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.getEventCountData},model:{value:e.row.invest_date,callback:function(i){t.$set(e.row,"invest_date",i)},expression:"scope.row.invest_date"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"event",label:"事件",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"should_fee",label:"当期认缴额（万元）",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{placeholder:"请输入内容",clearable:"",maxlength:"16"},model:{value:e.row.should_fee,callback:function(i){t.$set(e.row,"should_fee",i)},expression:"scope.row.should_fee"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"fee",label:"当期投资额（万元）",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{placeholder:"请输入内容",clearable:"",maxlength:"16"},model:{value:e.row.fee,callback:function(i){t.$set(e.row,"fee",i)},expression:"scope.row.fee"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"unit",label:"币种",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.unit?n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t\t")]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"note",label:"备注",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.row.note,callback:function(i){t.$set(e.row,"note",i)},expression:"scope.row.note"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.addSave(e.row)}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.editCancel(e.row)}}},[t._v("取消")])]}}])})],1)],1):n("div",{staticClass:"table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{prop:"event",label:"投资标的类别",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.type_name)+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"output",label:"投资标的名称",width:"180"},on:{change:t.chooseFund},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.name)+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"date",label:"出资日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[n("el-date-picker",{attrs:{type:"date",editable:!1,"value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.getEventCountData},model:{value:t.edit_invest_date,callback:function(e){t.edit_invest_date=e},expression:"edit_invest_date"}})],1):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.invest_date)+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"output",label:"事件",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.edit_event)+"\n\t\t\t\t\t\t")]):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.event)+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"output",label:"当期认缴额",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:"",maxlength:"16"},model:{value:t.edit_should_fee,callback:function(e){t.edit_should_fee=e},expression:"edit_should_fee"}})],1):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.should_fee)+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"output",label:"当期投资额",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:"",maxlength:"16"},model:{value:t.edit_fee,callback:function(e){t.edit_fee=e},expression:"edit_fee"}})],1):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.fee)+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"unit",label:"币种",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(1==t.edit_unit?"人民币":"美元")+"\n\t\t\t\t\t\t")]):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"output",label:"备注",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("div",{},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.edit_note,callback:function(e){t.edit_note=e},expression:"edit_note"}})],1):n("div",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.note)+"\n\t\t\t\t\t\t")])]}}])}),t._v(" "),t.is_delete?n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_editable?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.editSave(e.row)}}},[t._v("保存")]):t._e(),t._v(" "),t.is_editable?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.editCancel(e.row)}}},[t._v("取消")]):t._e(),t._v(" "),t.is_editable?t._e():n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.edit(e.row)}}},[t._v("编辑")])]}}])}):t._e(),t._v(" "),n("template",{slot:"empty"},[n("div",{staticClass:"table-nodata"},[n("img",{attrs:{src:i("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t")])])],2)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("投资")])])])}]};var l=i("C7Lr")(d,s,!1,function(t){i("cu8c")},"data-v-3a09f63f",null);e.default=l.exports},cu8c:function(t,e){}});
//# sourceMappingURL=159.4cc5a30c516494096ed9.js.map