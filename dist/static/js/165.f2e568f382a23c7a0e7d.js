webpackJsonp([165],{"194I":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("2hMI"),i=a("yclV"),n={data:function(){return{currentPage:1,total:10,pageSize:10,searchText:"",datalist:[],selectAll:!1,changePermissions:!1,peoplelist:[],value7:"",checkedpersonid:-1,submitType:-1,selectedProjectId:-1}},created:function(){var t=1;this.$route.query.page&&(t=parseInt(this.$route.query.page)),this.currentPage=t,this.initData(),this.getPeopleList()},computed:{selectedProject:function(){var t=[];return this.datalist.forEach(function(e){e.checked&&t.push(e.company_id)}),t}},mounted:function(){},methods:{initData:function(){var t=this;this.selectAll=!1,Object(s._324)({number:this.pageSize,page:this.currentPage,search:this.searchText}).then(function(e){1==e.data.msgNo&&(e.data.payload.data.forEach(function(t){t.checked=!1,null==t.user_id&&(t.user_name="---")}),t.datalist=e.data.payload.data,t.total=e.data.payload.total)})},getPeopleList:function(){var t=this;Object(s._235)().then(function(e){1==e.data.msgNo&&(t.peoplelist=e.data.payload)})},getListData:function(t){this.datalist=[],this.currentPage=t,this.initData()},changemanage:function(t){this.checkedpersonid=t},selectallclick:function(t){this.datalist.forEach(function(e){t&&null==e.user_id?e.checked=t:t||(e.checked=t)})},selectoneclick:function(){var t=0,e=0;this.datalist.forEach(function(a){null==a.user_id&&e++,a.checked&&t++}),this.selectAll=0!=t&&t==e},transferManage:function(t){this.submitType=t,-1!=t?(this.selectedProjectId=t,this.changePermissions=!0):0==this.selectedProject.length?Object(i.g)("info","您还没有选择项目"):this.changePermissions=!0},toTransferManage:function(t,e){this.$router.push({path:"/home/projectPermissionsToSet",query:{id:t,page:this.currentPage,name:encodeURIComponent(e)}})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"table-content"},[s("div",{staticClass:"clear table-content-title"},[s("div",{staticClass:"left"},[t._v("项目权限（"+t._s(t.total)+"）")]),t._v(" "),s("el-input",{staticClass:"header-right-time right",attrs:{placeholder:"搜索",clearable:!0},on:{change:function(e){t.initData()}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}},[s("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),s("div",{staticClass:"table-group"},[s("div",{staticClass:"table-group-content"},[s("div",{staticClass:"historyapply-group-tablebox table-group-tablebox"},[s("div",{staticClass:"table-normal-box"},[s("table",{staticClass:"table-normal"},[t._m(0),t._v(" "),t._l(t.datalist,function(e,a){return s("tr",{key:e.seq},[s("td",[t._v(t._s(t.pageSize*(t.currentPage-1)+a+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.user_name))]),t._v(" "),s("td",[t._v(t._s(e.status))]),t._v(" "),s("td",[s("span",{staticClass:"table-link",on:{click:function(a){t.toTransferManage(e.company_id,e.name)}}},[t._v(t._s(null!=e.user_id?"已分配":"分配管理人"))])])])})],2),t._v(" "),0==t.total?s("div",{staticClass:"table-nodata"},[s("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n            ")]):t._e()]),t._v(" "),0!=t.total?s("div",{staticClass:"pagination-normal"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"prev-text":"上一页","next-text":"下一页","current-page":t.currentPage},on:{"current-change":t.getListData}})],1):t._e()])])]),t._v(" "),s("el-dialog",{attrs:{title:"项目管理权限分配",visible:t.changePermissions,width:"500px",center:"","append-to-body":!0},on:{"update:visible":function(e){t.changePermissions=e}}},[s("div",{staticClass:"dialog_content"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"clear peopleSelectTitle"},[s("div",{staticClass:"left peopleSelectTitle-text"},[t._v("选择管理人")]),t._v(" "),s("el-select",{staticClass:"right peopleSelectTitle-select",attrs:{filterable:"",placeholder:"请选择"},on:{change:function(e){t.changemanage(e)}},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}},t._l(t.peoplelist,function(e){return s("el-option-group",{key:e.name,attrs:{label:e.name}},t._l(e.children,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))}))],1)])]),t._v(" "),s("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[s("button",{staticClass:"dialog-btn-submit btn-blue",on:{click:function(e){t.submitClick()}}},[t._v("提交")])])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("项目名称")]),t._v(" "),a("th",[t._v("管理人")]),t._v(" "),a("th",[t._v("项目状态")]),t._v(" "),a("th",[t._v("操作")])])}]};var c=a("C7Lr")(n,l,!1,function(t){a("J6GX")},"data-v-350749d6",null);e.default=c.exports},J6GX:function(t,e){}});
//# sourceMappingURL=165.f2e568f382a23c7a0e7d.js.map