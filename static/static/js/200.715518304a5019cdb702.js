webpackJsonp([200],{"7U+H":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("3cXf"),n=a.n(l),i=a("2hMI"),s=a("yclV"),d={inject:["reload"],data:function(){return{id:"",is_add_page:"",count:"",is_editable:1,isEditDetailShow:!0,name:"",datalistDetail:[],datalistTotal:[],currentIndex:-1,currentIndexDetail:-1}},created:function(){this.id=this.$route.query.id,this.is_editable=this.$route.query.is_editable,this.$route.query.add?(this.is_add_page=this.$route.query.add,this.getAddInfo()):(this.count=this.$route.query.count,this.getInitData())},computed:{},mounted:function(){this.calculate()},methods:{getAddInfo:function(){var t=this;Object(i._152)({sg_company_manager_id:this.id}).then(function(e){1==e.data.msgNo?(t.datalistDetail=e.data.payload.data,t.datalistTotal=e.data.payload.event):Object(s.g)("info",e.data.message)})},deleteDetailItem:function(t,e){this.datalistDetail.splice(t,1)},saveAddInfo:function(){var t=this,e=!0;if(this.datalistDetail.forEach(function(t,a){t.pay&&t.should_pay&&e&&t.pay>t.should_pay&&(Object(s.g)("info","明细中实缴管理费不能大于应缴管理费!"),e=!1)}),!e)return!1;var a=n()(this.datalistTotal),l=n()(this.datalistDetail);Object(i.h)({sg_company_manager_id:this.id,event:a,detail:l}).then(function(e){1==e.data.msgNo?(Object(s.g)("success",e.data.message),t.$router.push({name:"cashFlowHome",query:{id:t.id}})):Object(s.g)("info",e.data.message)})},addCancel:function(){this.$router.push({name:"cashFlowHome",query:{id:this.id}})},getInitData:function(){var t=this;Object(i._153)({sg_company_manager_id:this.id,count:this.count}).then(function(e){console.log(e),1==e.data.msgNo?(t.datalistTotal=e.data.payload.data.event,t.datalistDetail=e.data.payload.data.detail):Object(s.g)("info",e.data.message)})},editTotal:function(t,e){console.log(e),this.currentIndex=t},editCancelTotal:function(t,e){this.currentIndex=-1,this.getInitData()},editSaveTotal:function(t,e){var a=this;Object(i._106)({id:e.id,event:e.event,note:e.note,unit:e.unit,count:e.count,date:e.date,event_count:e.event_count}).then(function(t){console.log(t),1==t.data.msgNo?(Object(s.g)("success",t.data.message),a.reload()):Object(s.g)("info",t.data.message)})},editDetail:function(t,e){console.log(e),this.currentIndexDetail=t},editCancelDetail:function(t,e){this.currentIndexDetail=-1,this.getInitData()},editSaveDetail:function(t,e){var a=this;console.log(e),Object(i._101)({id:e.id,count:e.count,fund_id:e.fund_id,fund_type:e.fund_type,should_pay:e.should_pay,pay:e.pay,unit:e.unit,date:e.date}).then(function(t){console.log(t),1==t.data.msgNo?(Object(s.g)("success",t.data.message),a.reload()):Object(s.g)("info",t.data.message)})},getEventCountData:function(t,e){var a=this;if(t){if(this.is_add_page)var l="";else l=this.datalistTotal[e].id;Object(i._169)({type:s.i,id:this.id,cash_type:s.b,date:t,fund_type:"",fund_id:"",event_id:l}).then(function(t){1==t.data.msgNo?(a.datalistTotal[e].event=t.data.payload.event_name,a.datalistTotal[e].event_count=t.data.payload.event_count):Object(s.g)("info",t.data.message)})}},calculate:function(){for(var t=this.datalistDetail,e=0,a=0,l=0,n=0,i=0,s=t.length;i<s;i++)t[i].should_pay||(t[i].should_pay=0),t[i].pay||(t[i].pay=0),1==t[i].unit?(e=Number(e)+Number(t[i].should_pay),a=Number(a)+Number(t[i].pay)):(l=Number(l)+Number(t[i].should_pay),n=Number(n)+Number(t[i].pay));(e||a)&&(this.datalistTotal[0].should_pay=e,this.datalistTotal[0].pay=a),(l||n)&&(this.datalistTotal[1].should_pay=l,this.datalistTotal[1].pay=n)}}},o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"body"},[l("div",{staticClass:"cash_flow_table_box"},[t._m(0),t._v(" "),l("div",{staticClass:"cash_flow_table table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalistTotal,border:"","empty-text":""}},[l("el-table-column",{attrs:{prop:"unit",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t\t")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t收入-管理费\n\t\t\t\t\t\t")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"日期",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-date-picker",{attrs:{disabled:e.$index!=t.currentIndex&&!t.is_add_page,editable:!1,type:"date",placeholder:"选择日期",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd"},on:{change:function(a){t.getEventCountData(a,e.$index)}},model:{value:e.row.date,callback:function(a){t.$set(e.row,"date",a)},expression:"scope.row.date"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"event",label:"事件",width:"270"}}),t._v(" "),l("el-table-column",{attrs:{prop:"should_pay",label:"应缴管理费（万元）",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"pay",label:"实缴管理费（万元）",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"note",label:"备注",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndex&&!t.is_add_page,clearable:""},model:{value:e.row.note,callback:function(a){t.$set(e.row,"note",a)},expression:"scope.row.note"}})]}}])}),t._v(" "),!t.is_add_page&&t.is_editable?l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.$index!=t.currentIndex?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editTotal(e.$index,e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),e.$index==t.currentIndex?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editSaveTotal(e.$index,e.row)}}},[t._v("保存")]):t._e(),t._v(" "),e.$index==t.currentIndex?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editCancelTotal(e.$index,e.row)}}},[t._v("取消")]):t._e()]}}])}):t._e(),t._v(" "),l("template",{slot:"empty"},[l("div",{staticClass:"table-nodata"},[l("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t\t")])])],2)],1)]),t._v(" "),l("div",{staticClass:"cash_flow_table_box"},[t._m(1),t._v(" "),l("div",{staticClass:"cash_flow_table"},[l("div",{staticClass:"table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalistDetail,border:"","empty-text":"",sortable:""}},[l("el-table-column",{attrs:{prop:"id",label:"序号",width:"100",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.$index+1)+"\n\t\t\t\t\t\t\t")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"基金名称",width:"250",sortable:""}}),t._v(" "),l("el-table-column",{attrs:{prop:"should_pay",label:"应缴管理费（万元）",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:""},on:{input:t.calculate},model:{value:e.row.should_pay,callback:function(a){t.$set(e.row,"should_pay",t._n(a))},expression:"scope.row.should_pay"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"pay",label:"实缴管理费（万元）",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:""},on:{input:t.calculate},model:{value:e.row.pay,callback:function(a){t.$set(e.row,"pay",t._n(a))},expression:"scope.row.pay"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"unit",label:"币种",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t\t\t")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"实缴日期",sortable:"",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-date-picker",{attrs:{disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,editable:!1,type:"date",placeholder:"选择日期",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd"},model:{value:e.row.date,callback:function(a){t.$set(e.row,"date",a)},expression:"scope.row.date"}})]}}])}),t._v(" "),!t.is_add_page&&t.is_editable?l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.is_add_page?l("div",{}):l("div",{},[e.$index!=t.currentIndexDetail?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editDetail(e.$index,e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),e.$index==t.currentIndexDetail?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editSaveDetail(e.$index,e.row)}}},[t._v("保存")]):t._e(),t._v(" "),e.$index==t.currentIndexDetail?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editCancelDetail(e.$index,e.row)}}},[t._v("取消")]):t._e()],1)]}}])}):t._e(),t._v(" "),l("template",{slot:"empty"},[l("div",{staticClass:"table-nodata"},[l("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t\t\t")])])],2)],1),t._v(" "),t.is_add_page?l("div",{staticClass:"submit_btn_box flex_center"},[l("button",{staticClass:"hover_btn",on:{click:t.addCancel}},[t._v("取消")]),t._v(" "),l("button",{staticClass:"blue_btn",on:{click:t.saveAddInfo}},[t._v("保存")])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("收入-管理费")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("明细")])])])}]};var c=a("C7Lr")(d,o,!1,function(t){a("VIxk")},"data-v-13eebe82",null);e.default=c.exports},VIxk:function(t,e){}});
//# sourceMappingURL=200.715518304a5019cdb702.js.map