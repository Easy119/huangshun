webpackJsonp([94],{BIwv:function(t,i){},"t/pP":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("HzJ8"),s=e.n(a),l=e("3cXf"),n=e.n(l),c=e("2hMI"),o=e("lKYg"),d=e("yclV"),r={data:function(){return{commitData:{title:""},isEditing:!1,loading:!1,historyList:[],companyList:[],totalCompanyList:[],oldFile:[],keyWord:"",page:1,number:20,total:0,type:1,historyId:0,historyDetail:"",countTitle:[{name:"已投项目",value:"already"},{name:"全部退出",value:"quitAll"},{name:"部分退出",value:"quitPart"},{name:"已挂牌/已报会",value:"listed"},{name:"拟挂牌",value:"planList"},{name:"本月投资项目",value:"invest_month"},{name:"本月退出项目",value:"quit_month"}],companyId:"",companyVal:"",newFile:[],countList:"",title:"",delOldFilelist:[]}},components:{progressBar:o.a},mounted:function(){},created:function(){this.initData()},computed:{submitOk:function(){return""!=this.title&&""!=this.companyId}},methods:{initData:function(){this.historyList=[],this.getHistory(),this.getCompanyList()},clearData:function(){this.delOldFilelist=[],this.companyId="",this.companyVal="",this.newFile=[],this.oldFile=[],this.countList="",this.title="",this.delOldFilelist=[],this.isEditing=!1},getDatalist:function(){this.page=1,this.getHistory()},commitDataClick:function(){var t=this;if(this.submitOk){var i={fund_id:this.companyId,title:this.title};for(var e in this.countList)i[e]=this.countList[e];2==this.type&&(i.id=this.historyId),Object(c._130)({data:n()(i)},this.newFile).then(function(i){1==i.data.msgNo?(t.delOldFileCommit(),Object(d.g)("success","发布成功"),t.clearData(),t.initData()):Object(d.g)("fail",i.data.message)})}},createFile:function(){var t=this;Object(d.h)("确定要离开编辑页面吗？").then(function(){t.type=1,t.initData(),t.clearData()}).catch(function(){})},getHistory:function(){var t=this;Object(c._129)({search:this.keyWord,page:this.page,number:this.number}).then(function(i){1==i.data.msgNo&&(t.historyList=t.historyList.concat(i.data.payload.data),t.total=i.data.payload.total)})},loadMore:function(){this.historyList.length<this.total&&0!=this.historyList.length&&(this.page++,this.getHistory())},getHistoryDetail:function(){var t=this;Object(c._127)({id:this.historyId}).then(function(i){if(1==i.data.msgNo){var e=i.data.payload.data;t.countList={invest_month:e.invest_month,listed:e.listed,planList:e.planList,quitAll:e.quitAll,quitPart:e.quitPart,quit_month:e.quit_month,already:e.already},t.companyId=e.fund_id,t.companyVal=e.fundName,t.title=e.title,t.oldFile=i.data.payload.file}})},delHistory:function(t){var i=this;Object(d.h)("确定要删除改发布历史吗？").then(function(){Object(c._43)({id:t}).then(function(t){1==t.data.msgNo?Object(d.g)("success","删除成功！"):Object(d.g)("success","删除失败！"),i.page=1,i.initData()})}).catch(function(){})},addFile:function(t,i){var e=!0,a=!1,l=void 0;try{for(var n,c=s()(t.target.files);!(e=(n=c.next()).done);e=!0){var o=n.value;this.newFile.push(o)}}catch(t){a=!0,l=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw l}}-1!=i&&this.delFile(i),t.target.value=""},delFile:function(t){this.newFile.splice(t,1)},delOldFile:function(t,i){this.oldFile.splice(i,1),this.delOldFilelist.push(t)},delOldFileCommit:function(){this.delOldFilelist.length>0&&this.delOldFilelist.forEach(function(t){Object(c._44)({file_id:t}).then(function(t){})})},viewFileClick:function(t){this.type=2,this.historyId=t,this.getHistoryDetail()},getCompanyList:function(){var t=this;Object(c.L)({type:2}).then(function(i){1==i.data.msgNo&&(t.totalCompanyList=i.data.payload.data,t.companyList=t.totalCompanyList.slice(0,20))})},changeCompany:function(t){var i=this;if(this.companyId=this.companyVal,this.getCompanyDetail(),""!=this.companyVal){var e="";this.companyList.forEach(function(t){i.companyId==t.id&&(e=t.name)});var a=(new Date).getMonth();this.title=a+"月"+e+"简报"}},getCompanyDetail:function(){var t=this;""!=this.companyId&&Object(c._128)({fund_id:this.companyId}).then(function(i){if(1==i.data.msgNo){var e=i.data.payload;for(var a in e)""!=e[a]&&null!=e[a]||(e[a]=0);t.countList=e}})},remoteMethod:function(t){var i=this;""!==t?(this.loading=!0,setTimeout(function(){i.loading=!1,i.companyList=i.totalCompanyList.filter(function(i){return i.name.indexOf(t)>-1})},200)):this.companyList=[]}}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"personal-content-body"},[e("div",{staticClass:"content investPersonaInfoPublish scroll-style"},[e("div",{staticClass:"content-title clear"},[e("div",{staticClass:"left"},[t._v("信息发布")]),t._v(" "),e("el-input",{staticClass:"header-right-time right",attrs:{placeholder:"输入文件关键字进行搜索",clearable:!0},on:{change:t.getDatalist},model:{value:t.keyWord,callback:function(i){t.keyWord=i},expression:"keyWord"}},[e("i",{staticClass:"el-input__icon el-icon-search ",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),e("div",{staticClass:"content-body clear"},[e("div",{staticClass:"content-body-left-box left"},[e("div",{staticClass:"content-body-left-box-title"},[e("div",{staticClass:"clear"},[e("div",{staticClass:"text-nav breadcrumb left"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"infoPublishIndex"}}},[t._v("信息发布")]),t._v(" "),e("el-breadcrumb-item",[t._v("基金简报发布")])],1)],1),t._v(" "),e("div",{staticClass:"right"},[2==t.type?e("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.createFile}},[e("span",{staticClass:"icon-createNews"}),t._v("发布新的基金简报\n              ")]):t._e()])]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"content-body-left-box-content"},[e("div",{staticClass:"content-part-box"},[e("div",{staticClass:"content-part-body"},[e("div",{staticClass:"form-group from-inputbox clear"},[t._m(0),t._v(" "),e("div",{staticClass:"form-input left"},[e("el-select",{staticClass:"header-right-time",attrs:{clearable:"",filterable:"","reserve-keyword":"",placeholder:"下拉框只显示部分数据，输入基金名称搜索","remote-method":t.remoteMethod,loading:t.loading},on:{change:t.changeCompany},model:{value:t.companyVal,callback:function(i){t.companyVal=i},expression:"companyVal"}},t._l(t.companyList,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[t._m(1),t._v(" "),e("div",{staticClass:"form-input left"},[e("el-input",{staticClass:"header-right-time input-position",attrs:{placeholder:"请输入基金产品全称",clearable:!0},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}})],1)]),t._v(" "),e("div",{staticClass:"content-part-title"},[t._v("Part 1:项目概况")]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[e("div",{staticClass:"form-group-table-title clear"},[""!=t.companyVal?e("div",{staticClass:"right"},[0==t.isEditing?e("em",{on:{click:function(i){t.isEditing=!0}}},[t._v("信息不准？点击修改")]):t._e(),t._v(" "),1==t.isEditing?e("em",[t._v("信息不准？点击修改")]):t._e(),t._v(" "),0==t.isEditing?e("div",{staticClass:"table-edit-btn right btn-blue",on:{click:function(i){t.isEditing=!0}}},[e("span",{staticClass:"left icon-createNews1"}),t._v("编辑")]):t._e(),t._v(" "),1==t.isEditing?e("div",{staticClass:"table-edit-btn right btn-blue",on:{click:function(i){t.isEditing=!1}}},[e("span",{staticClass:"left icon-createNews1"}),t._v("保存")]):t._e()]):t._e()]),t._v(" "),e("table",{staticClass:"table-normal"},[e("tr",[e("th",{attrs:{colspan:"2"}},[""!=t.companyVal?e("em",[t._v("根据APP中项目状态自动计算得出")]):e("em",[t._v("您还没有选择公司")])])]),t._v(" "),t._l(t.countTitle,function(i,a){return e("tr",[e("td",[t._v(t._s(i.name))]),t._v(" "),e("td",{staticClass:"count-input-td",class:{"count-input-td-disabled":!t.isEditing}},[e("div",{staticClass:"count-text"},[t._v(t._s(t.countList[i.value]))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.countList[i.value],expression:"countList[item.value]"}],staticClass:"count-input",attrs:{type:"text"},domProps:{value:t.countList[i.value]},on:{input:function(e){e.target.composing||t.$set(t.countList,i.value,e.target.value)}}})])])})],2)]),t._v(" "),e("div",{staticClass:"content-part-title"},[t._v("Part 2:上传简报材料(会自动作为附件发送)")]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[t._m(2),t._v(" "),e("div",{staticClass:"form-input form-filebox left"},[e("div",{staticClass:"file-list"},[t._l(t.oldFile,function(i,a){return e("div",{staticClass:"file-item"},[e("div",{staticClass:"file-name"},[e("div",[t._v(t._s(i.file_name))])]),t._v(" "),e("div",{staticClass:"file-click"},[e("input",{staticClass:"file-add-input",attrs:{type:"file"},on:{change:function(e){t.delOldFile(i.file_id,a),t.addFile(e,-1)}}}),t._v("替换\n                      ")]),t._v(" "),e("div",{staticClass:"file-click file-click-del",on:{click:function(e){t.delOldFile(i.file_id,a)}}},[t._v("删除")])])}),t._v(" "),t._l(t.newFile,function(i,a){return e("div",{staticClass:"file-item"},[e("div",{staticClass:"file-name"},[e("div",[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:"file-click"},[e("input",{staticClass:"file-add-input",attrs:{type:"file"},on:{change:function(i){t.addFile(i,a)}}}),t._v("替换\n                      ")]),t._v(" "),e("div",{staticClass:"file-click file-click-del",on:{click:function(i){t.delFile(a)}}},[t._v("删除")])])})],2),t._v(" "),e("div",{staticClass:"file-add"},[e("input",{staticClass:"file-add-input",attrs:{type:"file",multiple:"multiple"},on:{change:function(i){t.addFile(i,-1)}}}),t._v(" "),e("i",{staticClass:"el-icon-plus"}),t._v("添加文件\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"content-confirm"},[e("button",{staticClass:"btn-blue",class:{"btn-blue-disabled":!t.submitOk},on:{click:t.commitDataClick}},[t._v("发布")])])])]),t._v(" "),e("div",{staticClass:"content-body-right-box right"},[e("div",{staticClass:"content-body-right-header"},[e("span",{staticClass:"icon-save"}),t._v(" "),e("span",{staticClass:"header-name"},[t._v("已发布历史（"+t._s(t.total)+"）")])]),t._v(" "),e("div",{staticClass:"scroll-box"},[e("div",{staticClass:"content-body-right-items-box"},t._l(t.historyList,function(i,a){return e("div",{key:i.id,staticClass:"item-box"},[e("div",{staticClass:"item-time"},[e("span",{staticClass:"blue-point"}),t._v(" "+t._s(i.update_time)+"\n                "),e("span",{staticClass:"item-time-right",on:{click:function(e){t.delHistory(i.id)}}},[t._v("删除")]),t._v(" "),e("span",{staticClass:"item-time-right",on:{click:function(e){t.viewFileClick(i.id)}}},[t._v("编辑")])]),t._v(" "),e("div",{staticClass:"item-text"},[t._v(t._s(t._f("texteclipsis")(i.title,60)))])])})),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-distance":"10"}})])])])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"form-title left"},[e("em",{staticClass:"red"},[t._v("*")]),t._v(" "),e("em",[t._v("选")]),t._v(" "),e("em",[t._v("择")]),t._v(" "),e("em",[t._v("基")]),t._v(" "),e("em",[t._v("金")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"form-title left"},[e("em",{staticClass:"red"},[t._v("*")]),t._v(" "),e("em",[t._v("简")]),t._v(" "),e("em",[t._v("报")]),t._v(" "),e("em",[t._v("标")]),t._v(" "),e("em",[t._v("题")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-title left"},[i("em",[this._v("附")]),this._v(" "),i("em",[this._v("件")])])}]};var u=e("C7Lr")(r,v,!1,function(t){e("BIwv")},"data-v-738d6cc4",null);i.default=u.exports}});
//# sourceMappingURL=94.3217fbe1fb3190993fe1.js.map