webpackJsonp([81],{RL4e:function(t,i){},wHYG:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("3cXf"),s=e.n(a),n=e("HzJ8"),l=e.n(n),c=e("2hMI"),o=e("lKYg"),r=e("yclV"),d={data:function(){return{newsId:"",createType:"new",totalCompanyList:[],companyList:[],loading:!1,commitData:{title:"",companyId:"",companyVal:"",spanlist:[],content:""},historyFile:[],newFile:[],oldFile:[],delOldFilelist:[],currentspan:""}},components:{progressBar:o.a},computed:{submitOk:function(){if(""!=this.commitData.title&&""!=this.commitData.companyId){return""!=this.$refs.ueditor.getContent()}return!1}},mounted:function(){void 0!=this.$route.query.id&&void 0!=this.$route.query.type?(this.newsId=this.$route.query.id,this.createType=this.$route.query.type,-1!=this.newsId&&("pe"==this.createType?this.getDetail():this.getDetailLp())):this.newsId=-1;var t=this.$refs.ueditor;t.setContent(this.commitData.content),t.upload=function(i,e){var a=i.files[0],s=new Image,n=(document.createElement("canvas").getContext("2d"),new FileReader);n.readAsDataURL(a),n.onload=function(){s.src=this.result;var i="<img src='"+this.result+"'>";i=t.getContent()+i,t.setContent(i),e("")}},this.initData()},created:function(){},methods:{initData:function(){var t=this;Object(c._12)().then(function(i){1==i.data.msgNo&&(t.totalCompanyList=i.data.payload,t.companyList=t.totalCompanyList.slice(0,20))})},getDetail:function(){var t=this;Object(c._295)({data_id:this.newsId}).then(function(i){1==i.data.msgNo&&(t.commitData={title:i.data.payload.title,companyId:i.data.payload.company_id,companyVal:i.data.payload.name,spanlist:i.data.payload.tag,content:i.data.payload.content,source:i.data.payload.source},t.$refs.ueditor.setContent(t.commitData.content))})},getDetailLp:function(){var t=this;Object(c._274)({id:this.newsId}).then(function(i){if(1==i.data.msgNo){var e=i.data.payload.data;t.commitData={title:e.title,companyId:e.cid,companyVal:e.name,spanlist:e.tag,content:e.content,source:e.source},t.$refs.ueditor.setContent(t.commitData.content),t.oldFile=i.data.payload.file}})},addSpan:function(){""!=this.currentspan&&(-1==this.commitData.spanlist.indexOf(this.currentspan)&&this.commitData.spanlist.push(this.currentspan),this.currentspan="")},deleteSpan:function(t){this.commitData.spanlist.splice(t,1)},addFile:function(t,i){var e=!0,a=!1,s=void 0;try{for(var n,c=l()(t.target.files);!(e=(n=c.next()).done);e=!0){var o=n.value;this.newFile.push(o)}}catch(t){a=!0,s=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw s}}-1!=i&&this.delFile(i),t.target.value=""},delFile:function(t){this.newFile.splice(t,1)},delOldFile:function(t,i){this.oldFile.splice(i,1),this.delOldFilelist.push(t)},delOldFileCommit:function(){this.delOldFilelist.length>0&&this.delOldFilelist.forEach(function(t){Object(c._44)({file_id:t}).then(function(t){})})},changeCompany:function(){this.commitData.companyId=this.commitData.companyVal},remoteMethod:function(t){var i=this;""!==t?(this.loading=!0,setTimeout(function(){i.loading=!1,i.companyList=i.totalCompanyList.filter(function(i){return i.name.indexOf(t)>-1})},200)):this.companyList=[]},commitClick:function(){var t=this,i=this.$refs.ueditor;if(this.commitData.content=i.getContent(),""==this.commitData.content&&(this.submitOk=!1),this.submitOk){var e={cid:this.commitData.companyId,tag:this.commitData.spanlist.toString(),title:this.commitData.title,content:this.commitData.content};-1!=this.newsId&&(e="pe"==this.createType?{data_id:this.newsId,cid:this.commitData.companyId,tag:this.commitData.spanlist.toString(),title:this.commitData.title,content:this.commitData.content,source:this.commitData.source}:{id:this.newsId,cid:this.commitData.companyId,tag:this.commitData.spanlist.toString(),title:this.commitData.title,content:this.commitData.content,source:this.commitData.source}),this.delOldFileCommit(),Object(c._290)({data:s()(e)},this.newFile).then(function(i){1==i.data.msgNo?(Object(r.g)("success","发布成功"),t.$router.push({name:"projectInfoPublishList",query:{type:1}})):Object(r.g)("info",i.data.message)})}else Object(r.g)("info","您还有必填项没有填写！")}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"personal-content-body"},[e("div",{staticClass:"content investPersonaInfoPublish scroll-style"},[t._m(0),t._v(" "),e("div",{staticClass:"content-body clear"},[e("div",{staticClass:"content-body-left-box left"},[e("div",{staticClass:"content-body-left-box-title"},[e("div",{staticClass:"clear"},[e("div",{staticClass:"left breadcrumb"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"infoPublishIndex"}}},[t._v("信息发布")]),t._v(" "),e("el-breadcrumb-item",{attrs:{to:{name:"projectInfoPublishList",query:{type:1}}}},[t._v("项目舆情发布历史")]),t._v(" "),e("el-breadcrumb-item",[t._v("项目舆情发布")])],1)],1)]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"content-body-left-box-content"},[e("div",{staticClass:"content-part-box"},[e("div",{staticClass:"content-part-body"},[e("div",{staticClass:"form-group from-inputbox clear"},[t._m(1),t._v(" "),e("div",{staticClass:"form-input left"},[e("el-input",{staticClass:"header-right-time input-position",attrs:{placeholder:"请输入基金产品全称",clearable:!0},model:{value:t.commitData.title,callback:function(i){t.$set(t.commitData,"title",i)},expression:"commitData.title"}})],1)]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[t._m(2),t._v(" "),e("div",{staticClass:"form-input left"},[e("el-select",{staticClass:"header-right-time",attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"下拉框只显示部分数据，输入公司名搜索","remote-method":t.remoteMethod,loading:t.loading},on:{change:t.changeCompany},model:{value:t.commitData.companyVal,callback:function(i){t.$set(t.commitData,"companyVal",i)},expression:"commitData.companyVal"}},t._l(t.companyList,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[t._m(3),t._v(" "),e("div",{staticClass:"form-input left"},[e("div",{staticClass:"form-input-span clear"},[e("el-input",{staticClass:"header-right-time left",attrs:{placeholder:"输入标签，按确定或者回车出现在下方",clearable:!0},on:{change:t.addSpan},model:{value:t.currentspan,callback:function(i){t.currentspan=i},expression:"currentspan"}}),t._v(" "),e("div",{staticClass:"form-input-span-btn btn-blue right",on:{click:t.addSpan}},[t._v("确定")])],1),t._v(" "),e("div",{staticClass:"form-span-box clear"},t._l(t.commitData.spanlist,function(i,a){return e("div",{staticClass:"form-span-item"},[t._v(t._s(i)),e("i",{staticClass:"el-icon-close",on:{click:function(i){t.deleteSpan(a)}}})])}))])]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear"},[t._m(4),t._v(" "),e("div",{staticClass:"form-input form-filebox left"},[e("div",{staticClass:"file-list"},[t._l(t.oldFile,function(i,a){return e("div",{staticClass:"file-item"},[e("div",{staticClass:"file-name"},[e("div",[t._v(t._s(i.file_name))])]),t._v(" "),e("div",{staticClass:"file-click"},[e("input",{attrs:{type:"file"},on:{change:function(e){t.delOldFile(i.file_id,a),t.addFile(e,-1)}}}),t._v("替换\n                      ")]),t._v(" "),e("div",{staticClass:"file-click file-click-del",on:{click:function(e){t.delOldFile(i.file_id,a)}}},[t._v("删除")])])}),t._v(" "),t._l(t.newFile,function(i,a){return e("div",{staticClass:"file-item"},[e("div",{staticClass:"file-name"},[e("div",[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:"file-click"},[e("input",{attrs:{type:"file"},on:{change:function(i){t.addFile(i,a)}}}),t._v("替换\n                      ")]),t._v(" "),e("div",{staticClass:"file-click file-click-del",on:{click:function(i){t.delFile(a)}}},[t._v("删除")])])})],2),t._v(" "),e("div",{staticClass:"file-add"},[e("input",{staticClass:"file-add-input",attrs:{type:"file",multiple:"multiple"},on:{change:function(i){t.addFile(i,-1)}}}),t._v(" "),e("i",{staticClass:"el-icon-plus"}),t._v("添加文件\n                  ")])])]),t._v(" "),e("div",{staticClass:"form-group from-inputbox clear form-editorbox"},[t._m(5),t._v(" "),e("div",{staticClass:"form-input left"},[e("Vueditor",{ref:"ueditor",staticClass:"form-editor"})],1)])])]),t._v(" "),e("div",{staticClass:"content-confirm clear"},[e("div",{staticClass:"content-confirm-btn btn-blue",class:{"btn-blue-disabled":!t.submitOk},on:{click:t.commitClick}},[t._v("提交")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"content-title clear"},[i("div",{staticClass:"left"},[this._v("信息发布")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"form-title left"},[e("em",{staticClass:"red"},[t._v("*")]),t._v(" "),e("em",[t._v("文")]),t._v(" "),e("em",[t._v("章")]),t._v(" "),e("em",[t._v("标")]),t._v(" "),e("em",[t._v("题")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"form-title left"},[e("em",{staticClass:"red"},[t._v("*")]),t._v(" "),e("em",[t._v("选")]),t._v(" "),e("em",[t._v("择")]),t._v(" "),e("em",[t._v("公")]),t._v(" "),e("em",[t._v("司")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-title left"},[i("em",[this._v("标")]),this._v(" "),i("em",[this._v("签")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-title left"},[i("em",[this._v("附")]),this._v(" "),i("em",[this._v("件")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-title left"},[i("em",{staticClass:"red"},[this._v("*")]),this._v(" "),i("em",[this._v("正")]),this._v(" "),i("em",[this._v("文")])])}]};var u=e("C7Lr")(d,m,!1,function(t){e("RL4e")},"data-v-91f2e5c8",null);i.default=u.exports}});
//# sourceMappingURL=81.f88c84646db4174e5877.js.map