webpackJsonp([124],{TQX3:function(t,a){},"m/j1":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("lzZH"),i={data:function(){return{total:3,currentPage:1,pageSize:10,tableHeader:[{param:"unit",text:"币种",width:"120",type:"text"},{param:"event_name",text:"事件",width:"150"},{param:"type",text:"缴款基金类别",width:"180"},{param:"name",text:"基金名称",width:"250"},{param:"invest_date",text:"出资日期",width:"200"},{param:"subscribe",text:"当期应缴金额(万元)",width:"200"},{param:"fee",text:"当期实缴金额(万元)",width:"200"}],tableData:[]}},created:function(){this.getListCashFlowData()},computed:{},mounted:function(){},methods:{getListCashFlowData:function(){var t=this;Object(s.X)({id:this.$route.query.jkId,c_type:this.$route.query.c_type}).then(function(a){if(1==a.data.msgNo){var e=a.data.payload,s=[];s.push(e),t.tableData=s}})}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"body"},[a("div",{staticClass:"cash_flow_table_box"},[this._m(0),this._v(" "),a("div",{staticClass:"cash_flow_table"},[a("div",{staticClass:"under_fund_main table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:this.tableData,border:"","max-height":"350"}},[this._l(this.tableHeader,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.param,label:t.text,width:t.width}})}),this._v(" "),a("template",{slot:"empty"},[a("div",{staticClass:"table-nodata"},[a("img",{attrs:{src:e("urJZ")}}),this._v(" 没有对应数据\n\t\t\t\t\t\t")])])],2)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"cash_flow_table_title flex_between"},[a("div",{staticClass:"flex_start"},[a("span",{staticClass:"name"},[this._v("缴款")])])])}]};var l=e("C7Lr")(i,r,!1,function(t){e("TQX3")},"data-v-57673600",null);a.default=l.exports}});
//# sourceMappingURL=124.66c1ddd0d01229a8b132.js.map