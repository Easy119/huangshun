webpackJsonp([85],{OIhq:function(t,e){},tT48:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("2hMI"),i=(a("yclV"),{data:function(){return{title:"",list:[],routeList:[],pageType:1,projectId:"",projInfo:"",pageSize:10,keyWord:"",total:0,aType:1,template_id:"",status:0,status_str:"全部",applytype1:1,applytypeval:"待我审批",applytypelist:[{id:0,name:"全部"},{id:1,name:"待我审批"},{id:2,name:"我已审批"},{id:3,name:"我发起的审批"},{id:4,name:"抄送我的"}],applyType:{1:"待我审批",2:"我已审批",3:"我发起的审批",4:"抄送我的"},statusList:{"-1":"审批不通过",0:"待审批",1:"审批中",2:"审批人都通过",3:"待处理",4:"审批通过",5:"撤销成功"},currentPage:1}},watch:{},created:function(){var t=this;this.$route.query.aName&&(this.title=this.$route.query.aName),0!=this.routeList.length||(this.routeList=this.$route.meta.routeList,this.routeList.forEach(function(e){"行政管理"==e.name_str&&(e.name_str=t.$route.query.aName)})),this.initData()},mounted:function(){},methods:{initPage:function(){var t=this;this.routeList=this.$route.meta.routeList,this.routeList.forEach(function(e){"行政管理"==e.name_str&&(e.name_str=t.$route.query.aName)}),this.initData()},initData:function(){var t=this;this.$route.query.from&&(this.pageType=this.$route.query.from),2==this.pageType?this.$route.query.projectId?(this.projectId=this.$route.query.projectId,Object(s._300)({page:1,number:10,id:this.projectId}).then(function(e){1==e.data.msgNo&&(t.projInfo=e.data.payload.data[0])})):this.$router.push({name:"investProjectManageList"}):3==this.pageType&&(this.$route.query.template_id?this.template_id=this.$route.query.template_id:this.template_id=""),this.$route.query.aType?this.aType=this.$route.query.aType:this.aType="",this.$route.query.status?(this.status=this.$route.query.status,this.status_str=this.applyType[this.status]):(this.status=0,this.status_str="全部",this.getListData(1)),this.routeList.forEach(function(e){"审批列表"==e.name_str&&(void 0==e.query.current||"NAN"==parseInt(e.query.current)||t.getListData(parseInt(e.query.current)))})},currentChange:function(t){this.total>this.pageSize&&this.getListData(t)},getListData:function(t){var e=this;this.list=[],this.currentPage=t;var a={kind:this.status,status:this.status,page:this.currentPage,pageSize:this.pageSize,query:this.keyWord,type:this.aType,tid:this.template_id,company_id:this.projectId};Object(s._132)(a).then(function(t){e.changeRouterData();var a=t.data.payload;e.total=a.total||0;var s=a.data;0==e.status&&(s=s.slice(e.currentPage*e.pageSize-e.pageSize,e.currentPage*e.pageSize)),s.forEach(function(t){t.add_time=new Date(1e3*t.add_time).Format("yyyy-MM-dd")}),0!=s.length&&(e.list=s)})},changeRouterData:function(){var t=this;this.routeList.forEach(function(e){if("审批列表"==e.name_str){var a=e.query;a.status=t.status,a.current=t.currentPage,t.$router.push({name:e.name,query:a})}})},changeApplyType:function(t){this.status=t,this.currentPage=1,this.getListData(1)},gotoViewapply:function(t,e,a,s,i){e=1==this.status||2==this.status||4==this.status?2:0==this.status?3:1;var r="";r="old"==a?"viewApply":"viewApplyNew",2==this.pageType?this.$router.push({name:r,query:{approval_id:t,status:e,from:this.pageType,template_id:s,aType:i,projectId:this.projectId}}):this.$router.push({name:r,query:{approval_id:t,status:e,from:this.pageType,template_id:s,aType:i,aName:this.$route.query.aName}})},toCreateApply:function(){2==this.pageType||1==this.pageType?this.$router.push({name:"createApplyHomepageNew",query:{projectId:this.projectId,from:this.pageType}}):this.$router.push({name:"createApplyNew",query:{template_id:this.$route.query.template_id,aType:this.$route.query.aType,aName:this.$route.query.aName,from:3}})},everyPageSizeChange:function(t){this.pageSize=t,this.getListData(1)},changeCurrentPage:function(t){this.getListData(t)}}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content-title clear"},[s("div",{staticClass:"left"},[t._v(t._s(t.title)+"列表")])]),t._v(" "),s("div",{staticClass:"historyapply-group"},[s("div",{staticClass:"clear table-group-title"},[s("div",{staticClass:"left"},[s("el-input",{staticClass:"header-right-time left",attrs:{placeholder:"搜索",clearable:!0},on:{change:function(e){t.getListData(1)}},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}},[s("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})]),t._v(" "),s("div",{staticClass:"historyapply-group-top-dropdown select-normal right"},[s("el-select",{attrs:{filterable:"",placeholder:"审批类型"},on:{change:t.changeApplyType},model:{value:t.status_str,callback:function(e){t.status_str=e},expression:"status_str"}},t._l(t.applytypelist,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"right",on:{click:t.toCreateApply}},[t._m(0)])]),t._v(" "),s("div",{staticClass:"clear"}),t._v(" "),s("div",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"historyapply-group-tablebox table"},[s("el-table",{attrs:{data:t.list,border:""}},[s("el-table-column",{attrs:{prop:"",label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"number",label:"审批编号",width:"200"}}),t._v(" "),s("el-table-column",{attrs:{prop:"title",label:"审批标题",width:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"temName",label:"审批类型",width:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"审批申请人",width:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"add_time",label:"审批申请时间",width:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"审批状态",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t.statusList[e.row.status]))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{staticClass:"table-link",attrs:{type:"text",size:"small"},on:{click:function(a){t.gotoViewapply(e.row.approval_id,e.row.status,e.row.mark,e.row.template_id,e.row.type)}}},[t._v("查看")])]}}])}),t._v(" "),s("template",{slot:"empty"},[s("div",{staticClass:"table-nodata flex_start"},[s("img",{attrs:{src:a("urJZ")}}),t._v(" "),s("span",[t._v("没有对应数据")])])])],2),t._v(" "),t.total?s("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",total:t.total,"current-page":t.currentPage,"page-size":t.pageSize},on:{"size-change":t.everyPageSizeChange,"current-change":t.changeCurrentPage}}):t._e()],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-group-title-btn btn-blue"},[e("img",{attrs:{src:a("uVhs")}}),this._v("新建审批\n            ")])}]};var o=a("C7Lr")(i,r,!1,function(t){a("OIhq")},"data-v-7da98a58",null);e.default=o.exports}});
//# sourceMappingURL=85.fbf3807644380f6b4e19.js.map