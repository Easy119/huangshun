webpackJsonp([35],{"4lV8":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("3cXf"),s=e.n(a),l=e("yclV"),o=e("2hMI"),n=e("AJab"),p=e("ksh9"),r=e("405r"),c=e.n(r),d={data:function(){return{id:"",template_id:2,type:"",showright:!1,allVisibleStr:[],hasCopyapplier:!1,copyAplier:[],filter:0,notice:1,clearRepeatList:[{id:0,name:"不启用自动去重"},{id:1,name:"同一个审批人在流程中出现多次时，仅保留第一个"},{id:2,name:"同一个审批人在流程中出现多次时，仅保留最后一个"},{id:3,name:"同一个审批人仅在连续出现时，自动去重"}],noticCopyList:[{id:1,name:"仅全部同意后通知"},{id:2,name:"仅发起时通知"},{id:3,name:"发起时和全部同意后均通知"}],applierItem:{name:"",class:1,pattern:1,uid:[],uidList:[]},applierList:[],conditionChange:!1,conditionList:[],copierVisibleDialog:!1,copierList:[],copierIdList:[],operatorVisibleDialog:!1,operatorList:[],operatorIdList:[]}},created:function(){void 0!=this.$route.query.template_id&&void 0!=this.$route.query.type&&""!=this.$route.query.template_id&&""!=this.$route.query.type?(this.template_id=this.$route.query.template_id,this.type=this.$route.query.type,this.getUserRule()):this.$router.push({name:"applytempList"})},components:{applyTempRight:n.a,draggable:c.a,addPeopleModal:p.a},computed:{},mounted:function(){},methods:{initData:function(){var t=this;Object(o._327)({template_id:this.template_id}).then(function(i){1==i.data.msgNo&&(t.conditionList=JSON.parse(s()(i.data.payload.condition)),t.filter=i.data.payload.set.filter,t.notice=i.data.payload.set.notice,t.applierList=i.data.payload.default.sp,t.copierList=i.data.payload.default.copier,t.copierIdList=[],t.copierList.forEach(function(i){t.copierIdList.push(i.id)}),t.operatorList=[],t.operatorIdList=[],void 0==i.data.payload.default.handle.user||0==i.data.payload.default.handle.user.length||(t.operatorList=i.data.payload.default.handle.user,t.operatorList.forEach(function(i){t.operatorIdList.push(i.id)})))})},removeHandle:function(t){this.conditionChange=!0},commitApplyProcess:function(){var t=this;if(0!=this.applierList.length){var i={},e=[],a={};if(this.applierList.forEach(function(t){var i={};i.name=t.name,i.uid=t.uid.toString(),i.class=t.class,i.pattern=t.pattern,e.push(i)}),a.sp=e,a.copier=this.copierIdList.toString(),2!=this.type&&3!=this.type||(a.handle=this.operatorIdList.toString()),i.default=a,i.filter=this.filter,i.notice=this.notice,this.conditionChange){var n=[];this.conditionList.forEach(function(i){var e={},a=[];i.sp.forEach(function(t){var i={};i.name=t.name,i.uid=t.uid.toString(),i.class=t.class,i.pattern=t.pattern,a.push(i)}),e.type=i.type.toString(),e.data_id=i.data_id,e.sp=a,2!=t.type&&3!=t.type||(e.handle=i.handle.uid),n.push(e)}),i.condition=n}Object(o._319)({template_id:this.template_id,data:s()(i)}).then(function(i){1==i.data.msgNo?(Object(l.g)("success","修改成功"),t.initData()):Object(l.g)("fail",i.data.message)})}else Object(l.g)("info","审批人不能为空")},getUserRule:function(){var t=this;Object(o._235)({is_all:1}).then(function(i){if(1==i.data.msgNo){var e=[];i.data.payload.forEach(function(t){void 0!=t.children&&t.children.forEach(function(t){e.push(t)})}),t.initData(),t.allVisibleStr=e}else Object(l.g)("fail",i.data.message)})},changeArrayString:function(t){var i=[];return t.toString().split(",").forEach(function(t){i.push(parseInt(t))}),i},copyAplierFun:function(t){this.copyAplier=this.conditionList[t].sp,Object(l.g)("success","复制成功"),this.hasCopyapplier=!0},pasteAplierFun:function(t){var i=this;if(0!=this.hasCopyapplier){var e=this.conditionList[t].sp.concat(this.copyAplier);if(0!=this.copyAplier.length){var a={},n=[];e.forEach(function(t){var i={};i.name=t.name,i.uid=t.uid.toString(),i.class=t.class,i.pattern=t.pattern,n.push(i)}),a.sp=n,a.type=this.conditionList[t].type.toString(),a.data_id=this.conditionList[t].data_id,a.handle=this.conditionList[t].handle.uid,Object(o._91)({id:this.conditionList[t].id,data:s()(a)}).then(function(a){1==a.data.msgNo?(Object(l.g)("success","粘贴成功"),i.conditionList[t].sp=e):Object(l.g)("fail",a.data.message)})}else Object(l.g)("success","粘贴成功")}else Object(l.g)("info","请先复制审批人")},deleteConditionFun:function(t,i){var e=this;Object(l.h)("确认删除吗？").then(function(a){Object(o._49)({id:t}).then(function(t){1==t.data.msgNo&&(Object(l.g)("success","删除成功"),e.conditionList.splice(i,1))})}).catch(function(){})},addCondition:function(){this.$router.push({name:"applytempProcessCondition",query:{edittype:1,type:this.type,template_id:this.template_id}})},editCondition:function(t){Object(l.u)("htcx_applyCondition",this.conditionList[t]),this.$router.push({name:"applytempProcessCondition",query:{edittype:2,type:this.type,template_id:this.template_id}})},addApplyPeople:function(){this.showright=!0,this.applierItem={rightType:1,name:"",class:1,pattern:1,uid:[],user:[]}},editApplyPeople:function(t,i){this.applierItem=i,this.applierItem.rightType=2,this.applierItem.rightIndex=t,this.showright=!0},deleteApplyPeople:function(t){this.applierList.splice(t,1)},changerightshow:function(t){this.showright=t},setApplyData:function(t){var i={};i.class=t.class,i.name=t.name,i.pattern=t.pattern,i.uid=t.uid,i.user=t.user,1==t.rightType?this.applierList.push(i):this.applierList[t.rightIndex]=i,this.showright=!1},addCopyPeople:function(){this.copierVisibleDialog=!0},addOperatorPeople:function(){this.operatorVisibleDialog=!0},deleteUser:function(t,i,e){var a=t+"IdList";this[t+"List"].splice(e,1),this[a]=this[a].filter(function(t){return t!=i})},changeModalShow:function(t,i){this[i+"VisibleDialog"]=t},getModaldata:function(t,i){this[t]=i},getImgurl:function(t){t.currentTarget.src="../../static/images/header_userimg.png",t.onerror=null}}},_={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"personal-content-body"},[a("div",{staticClass:"applytempbox"},[a("div",{staticClass:"table-content",class:{"table-content-hide":t.showright}},[t._m(0),t._v(" "),a("div",{staticClass:"table-group"},[a("div",{staticClass:"table-group-content"},[a("div",{staticClass:"clear table-group-title"},[a("div",{staticClass:"left breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/applytempList"}}},[t._v("审批模版列表")]),t._v(" "),a("el-breadcrumb-item",[t._v("审批流程配置")])],1)],1),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"applytemppro_box"},[a("div",{staticClass:"atp_group"},[a("div",{staticClass:"atp_group_title"},[t._v("默认审批流程")]),t._v(" "),a("div",{staticClass:"atp_group_content"},[a("div",{staticClass:"atp_peoplelist"},[a("div",{staticClass:"atp_peopleitem"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("默认审批人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[a("draggable",{attrs:{options:{group:{name:"control"}}},model:{value:t.applierList,callback:function(i){t.applierList=i},expression:"applierList"}},[a("transition-group",{staticClass:"flex flex_wrap",attrs:{tag:"div",id:"apply"}},t._l(t.applierList,function(i,s){return a("div",{key:s,staticClass:"flex"},[a("div",{staticClass:"atp_peopleitem_addeditem",on:{click:function(e){t.editApplyPeople(s,i)}}},[a("span",{staticClass:"iconfont icon-guanbi",on:{click:function(i){i.stopPropagation(),t.deleteApplyPeople(s)}}}),t._v(" "),a("div",{staticClass:"atp_peopleitem_addeditem_top"},[1==i.class?a("div",{staticClass:"atp_peopleitem_peoplebox"},[a("img",{attrs:{src:e("0IK3")}}),t._v(" "),a("span",[t._v("主管理员")])]):t._e(),t._v(" "),t._l(i.user,function(s){return 2==i.class||3==i.class?a("div",{staticClass:"atp_peopleitem_peoplebox"},[2==i.class?a("img",{attrs:{src:s.url}}):a("img",{attrs:{src:e("0IK3")}}),t._v(" "),a("span",[t._v(t._s(s.name))])]):t._e()})],2),t._v(" "),""!=i.name?a("div",{staticClass:"atp_peopleitem_addeditem_bottom"},[t._v("\n                                "+t._s(i.name)+"\n                              ")]):t._e()]),t._v(" "),a("div",{staticClass:"atp_peopleitem_icon marginlr_10"},[a("span",{staticClass:"iconfont icon-xiajiantou"})]),t._v(" "),s==t.applierList.length-1?a("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addApplyPeople}},[a("div",{staticClass:"atp_peopleitem_addicon"})]):t._e()])}))],1),t._v(" "),0==t.applierList.length?a("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addApplyPeople}},[a("div",{staticClass:"atp_peopleitem_addicon"})]):t._e()],1)]),t._v(" "),a("div",{staticClass:"atp_peopleitem"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("默认抄送人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[t._l(t.copierList,function(i,e){return 0!=t.copierList.length?a("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[a("span",{staticClass:"iconfont icon-guanbi",on:{click:function(a){t.deleteUser("copier",i.id,e)}}}),t._v(" "),a("div",{staticClass:"atp_peopleitem_addeditem_top"},[a("div",{staticClass:"atp_peopleitem_peoplebox"},[a("img",{attrs:{src:i.url},on:{error:t.getImgurl}}),t._v(" "),a("span",[t._v(t._s(i.name))])])])]):t._e()}),t._v(" "),a("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addCopyPeople}},[a("div",{staticClass:"atp_peopleitem_addicon"})])],2)]),t._v(" "),2==t.type||3==t.type?a("div",{staticClass:"atp_peopleitem"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("默认经办人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[t._l(t.operatorList,function(i,e){return 0!=t.operatorList.length?a("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[a("span",{staticClass:"iconfont icon-guanbi",on:{click:function(a){t.deleteUser("operator",i.id,e)}}}),t._v(" "),a("div",{staticClass:"atp_peopleitem_addeditem_top"},[a("div",{staticClass:"atp_peopleitem_peoplebox"},[a("img",{attrs:{src:i.url},on:{error:t.getImgurl}}),t._v(" "),a("span",[t._v(t._s(i.name))])])])]):t._e()}),t._v(" "),a("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addOperatorPeople}},[a("div",{staticClass:"atp_peopleitem_addicon"})])],2)]):t._e()])])]),t._v(" "),a("div",{staticClass:"full_line"}),t._v(" "),a("div",{staticClass:"atp_group"},[a("div",{staticClass:"atp_group_title"},[a("div",{staticClass:"atp_group_title_left"},[t._v("分条件审批\n                  "),a("el-tooltip",{staticClass:"atp_group_title_tip",attrs:{effect:"dark",content:"Top Left 提示文字",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("div",{staticClass:"atp_group_title_right"},[a("span",{staticClass:"btn-blue-border",on:{click:t.addCondition}},[t._v("添加")]),t._v(" "),a("span",{},[t._v("审批单首先匹配优先级高的条件，拖拽可调整以下条件的优先级")])])])]),t._v(" "),a("draggable",{attrs:{options:{group:"people",animation:120}},on:{update:t.removeHandle},model:{value:t.conditionList,callback:function(i){t.conditionList=i},expression:"conditionList"}},[a("transition-group",{attrs:{tag:"div",classs:"atp_conditionlist"}},t._l(t.conditionList,function(i,s){return a("div",{key:s,staticClass:"atp_conditionitem"},[a("div",{staticClass:"atp_conditionitem_left"},[a("div",{staticClass:"atp_conditionitem_leftspan"},[a("div",{staticClass:"title"},[t._v("优先级")]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(s+1))])])]),t._v(" "),a("div",{staticClass:"atp_conditionitem_right atp_conditionbox"},[a("div",{staticClass:"atp_conditionbox_top"},[a("div",{staticClass:"atp_conditionbox_top_left"},[a("div",{staticClass:"text"},[t._v(t._s(i.category))])]),t._v(" "),a("div",{staticClass:"atp_conditionbox_top_right"},[a("span",{staticClass:"hoverlink",on:{click:function(i){t.copyAplierFun(s)}}},[t._v("复制审批人")]),t._v(" "),a("span",{staticClass:"hoverlink",on:{click:function(i){t.pasteAplierFun(s)}}},[t._v("粘贴审批人")]),t._v(" "),a("span",{on:{click:function(i){t.editCondition(s)}}},[t._v("编辑")]),t._v(" "),a("span",{on:{click:function(e){t.deleteConditionFun(i.id,s)}}},[t._v("删除")])])]),t._v(" "),a("div",{staticClass:"atp_peopleitem atp_conditionbox_bottom"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("审批人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[t._l(i.sp,function(s,l){return 0!=i.sp.length?a("div",{staticClass:"flex"},[a("div",{staticClass:"atp_peopleitem_addeditem"},[a("div",{staticClass:"atp_peopleitem_addeditem_top"},[1==s.class?a("div",{staticClass:"atp_peopleitem_peoplebox"},[a("img",{attrs:{src:e("0IK3")}}),t._v(" "),a("span",[t._v("主管理员")])]):t._e(),t._v(" "),t._l(s.user,function(i){return 2==s.class||3==s.class?a("div",{staticClass:"atp_peopleitem_peoplebox"},[2==s.class?a("img",{attrs:{src:i.url}}):a("img",{attrs:{src:e("0IK3")}}),t._v(" "),a("span",[t._v(t._s(i.name))])]):t._e()})],2),t._v(" "),""!=s.name?a("div",{staticClass:"atp_peopleitem_addeditem_bottom"},[t._v("\n                              "+t._s(s.name)+"\n                            ")]):t._e()]),t._v(" "),l!=i.sp.length-1?a("div",{staticClass:"atp_peopleitem_icon"},[a("span",{staticClass:"iconfont icon-xiajiantou"})]):t._e()]):t._e()}),t._v(" "),0==i.sp.length?a("div",{staticClass:"atp_peopleitem_text"},[t._v("当前条件下未设置审批人，匹配该条件时，可在审批单发起时自由添加审批人")]):t._e()],2)]),t._v(" "),a("div",{staticClass:"atp_peopleitem atp_conditionbox_bottom"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("经办人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[void 0!=i.handle.user&&0!=i.handle.user.length?a("div",{staticClass:"flex"},t._l(i.handle.user,function(i,e){return a("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[a("div",{staticClass:"atp_peopleitem_addeditem_top"},[a("div",{staticClass:"atp_peopleitem_peoplebox"},[a("img",{attrs:{src:i.url}}),t._v(" "),a("span",[t._v(t._s(i.name))])])])])})):a("div",{staticClass:"atp_peopleitem_text"},[t._v("未设置（不抄送给任何人)")])])])])])}))],1),t._v(" "),a("div",{staticClass:"full_line"}),t._v(" "),a("div",{staticClass:"atp_group"},[a("div",{staticClass:"atp_group_title"},[t._v("\n                更多设置\n              ")]),t._v(" "),a("div",{staticClass:"atp_group_content"},[a("div",{staticClass:"atp_peoplelist"},[a("div",{staticClass:"atp_peopleitem marginb_30"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("审批人去重")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[a("div",{staticClass:"atp_peopleitem_inputbox"},[a("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.filter,callback:function(i){t.filter=i},expression:"filter"}},t._l(t.clearRepeatList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]),t._v(" "),a("div",{staticClass:"atp_peopleitem marginb_30"},[a("div",{staticClass:"atp_peopleitem_left"},[t._v("通知抄送人")]),t._v(" "),a("div",{staticClass:"atp_peopleitem_right"},[a("div",{staticClass:"atp_peopleitem_inputbox"},[a("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.notice,callback:function(i){t.notice=i},expression:"notice"}},t._l(t.noticCopyList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])])])])]),t._v(" "),a("div",{staticClass:"full_line"}),t._v(" "),a("div",{staticClass:"btn_box"},[a("div",{staticClass:"btn-blue",on:{click:t.commitApplyProcess}},[t._v("保存")])])],1)])]),t._v(" "),a("add-people-modal",{attrs:{visibleDialog:t.copierVisibleDialog,name:"copier",selectedId:t.copierIdList,title:"选择默认抄送人"},on:{changeshow:t.changeModalShow,setData:t.getModaldata}}),t._v(" "),a("add-people-modal",{attrs:{visibleDialog:t.operatorVisibleDialog,name:"operator",title:"选择默认经办人",selectedId:t.operatorIdList},on:{changeshow:t.changeModalShow,setData:t.getModaldata}})],1),t._v(" "),a("apply-temp-right",{attrs:{showright:t.showright,data:t.applierItem},on:{changeshow:t.changerightshow,setData:t.setApplyData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"clear table-content-title"},[i("div",{staticClass:"left"},[this._v("审批流程配置")])])}]};var u=e("C7Lr")(d,_,!1,function(t){e("Qy5K")},"data-v-7c340db4",null);i.default=u.exports},AJab:function(t,i,e){"use strict";var a=e("3cXf"),s=e.n(a),l=e("ksh9"),o=e("yclV"),n=e("2hMI"),p={name:"draglist",data:function(){return{radio2:"",currentApplierItem:{name:"",class:1,pattern:1,uid:[],uidList:[]},roleid:"",userList:[],userIdList:[],userVisibleDialog:!1,applierTypeId:1,applierTypeList:[{id:1,name:"主管"},{id:2,name:"指定成员"},{id:3,name:"角色"}],roleList:[{id:1,name:"主管"},{id:2,name:"指定成员"},{id:3,name:"角色"}],applyTypeId:1,applyTypeList:[{id:1,name:"依次审批（本环节内审批人依次审批）"},{id:2,name:"会签（须所有审批人同意）"},{id:3,name:"或签（一名审批人同意或拒绝即可）"}]}},props:["showright","data"],components:{addPeopleModal:l.a},watch:{showright:function(){this.currentApplierItem=JSON.parse(s()(this.data)),2==this.data.class?(this.userIdList=this.data.uid.toString().split(","),this.userList=this.data.user):(this.userIdList=[],this.userList=[]),3==this.data.class?this.roleid=this.data.uid:this.roleid="",this.initData()}},methods:{initData:function(){var t=this;Object(n._144)().then(function(i){1==i.data.msgNo&&(t.roleList=i.data.payload,0==t.roleList.length?t.roleid="":""==t.roleid&&(t.roleid=t.roleList[0].id))})},changeshow:function(t){this.$emit("changeshow",t)},commitData:function(){var t=this,i=JSON.parse(s()(this.currentApplierItem));if(1==i.class)i.user=[],i.uid=[];else if(2==i.class){if(0==this.userIdList.length)return void Object(o.g)("info","指定成员不能为空～");i.uid=this.userIdList,i.user=this.userList}else{if(""==this.roleid||null==this.roleid)return void Object(o.g)("info","角色不能为空～");i.uid=this.roleid,i.user=this.roleList.filter(function(i){return i.id==t.roleid})}this.$emit("setData",i),this.changeshow(!1)},clearApplier:function(){this.userIdList=[],this.userList=[]},addCopyPeople:function(){this.userVisibleDialog=!0},changeModalShow:function(t,i){this[i+"VisibleDialog"]=t},getModaldata:function(t,i){this[t]=i},getImgurl:function(t){t.currentTarget.src="../../static/images/header_userimg.png",t.onerror=null}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"foldbox"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showright,expression:"showright"}],staticClass:"table_right"},[e("div",{staticClass:"table_right_cover",on:{click:function(i){t.changeshow(!1)}}}),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showright,expression:"showright"}],staticClass:"table_right_body"},[e("div",{staticClass:"table_right_title"},[t._v("\n            设置审批人\n          ")]),t._v(" "),e("div",{staticClass:"full_line marginb_30"}),t._v(" "),e("div",{staticClass:"table_right_content"},[e("div",{staticClass:"atp_peoplelist"},[e("div",{staticClass:"atp_peopleitem"},[e("div",{staticClass:"atp_peopleitem_left"},[t._v("审批名称")]),t._v(" "),e("div",{staticClass:"atp_peopleitem_right"},[e("div",{staticClass:"atp_peopleitem_inputbox marginb_20"},[e("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.currentApplierItem.name,callback:function(i){t.$set(t.currentApplierItem,"name",i)},expression:"currentApplierItem.name"}})],1)])]),t._v(" "),e("div",{staticClass:"full_line marginb_20"}),t._v(" "),e("div",{staticClass:"atp_peopleitem marginb_30"},[e("div",{staticClass:"atp_peopleitem_left"},[t._v("审批人类别")]),t._v(" "),e("div",{staticClass:"atp_peopleitem_right"},[e("div",{staticClass:"marginb_20"},[e("el-radio-group",{staticClass:"atp_radiogroup flex",model:{value:t.currentApplierItem.class,callback:function(i){t.$set(t.currentApplierItem,"class",i)},expression:"currentApplierItem.class"}},t._l(t.applierTypeList,function(i,a){return e("el-radio",{key:a,staticClass:"atp_radioitem",attrs:{label:i.id}},[t._v(t._s(i.name))])}))],1),t._v(" "),1!=t.currentApplierItem.class?e("div",{staticClass:"full_line marginb_20"}):t._e(),t._v(" "),2==t.currentApplierItem.class?e("div",{staticClass:"flex"},[0!=t.userList.length?e("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[e("span",{staticClass:"iconfont icon-guanbi",on:{click:t.clearApplier}}),t._v(" "),e("div",{staticClass:"atp_peopleitem_addeditem_top"},t._l(t.userList,function(i){return e("div",{staticClass:"atp_peopleitem_peoplebox"},[e("img",{attrs:{src:i.url},on:{error:t.getImgurl}}),t._v(" "),e("span",[t._v(t._s(i.name))])])}))]):t._e(),t._v(" "),e("div",{staticClass:"atp_btnbox flex_shrink"},[0==t.userList.length?e("div",{staticClass:"btn-blue",on:{click:t.addCopyPeople}},[t._v("添加成员")]):e("div",{staticClass:"btn-blue",on:{click:t.addCopyPeople}},[t._v("修改成员")])])]):t._e(),t._v(" "),3==t.currentApplierItem.class?e("div",{staticClass:"atp_peopleitem_inputbox"},[e("el-select",{attrs:{placeholder:"请选择角色",size:"small"},model:{value:t.roleid,callback:function(i){t.roleid=i},expression:"roleid"}},t._l(t.roleList,function(t,i){return e("el-option",{key:i,attrs:{label:t.name,value:t.id}})}))],1):t._e()])]),t._v(" "),e("div",{staticClass:"full_line marginb_20"}),t._v(" "),e("div",{staticClass:"atp_peopleitem marginb_30"},[e("div",{staticClass:"atp_peopleitem_left"},[t._v("审批方式\n                  "),e("el-tooltip",{staticClass:"atp_group_title_tip",attrs:{effect:"dark",content:"当审批人含有多人时的审批方式",placement:"top"}},[e("i",{staticClass:"el-icon-question"})])],1),t._v(" "),e("div",{staticClass:"atp_peopleitem_right"},[e("div",[e("el-radio-group",{staticClass:"atp_radiogroup_column flex_column",model:{value:t.currentApplierItem.pattern,callback:function(i){t.$set(t.currentApplierItem,"pattern",i)},expression:"currentApplierItem.pattern"}},t._l(t.applyTypeList,function(i,a){return e("el-radio",{key:a,staticClass:"atp_radioitem",attrs:{label:i.id}},[t._v(t._s(i.name))])}))],1)])])])]),t._v(" "),e("div",{staticClass:"table_right_bottom flex"},[e("div",{staticClass:"btn-blue",on:{click:t.commitData}},[t._v("确定")]),t._v(" "),e("div",{staticClass:"btn-blue-border",on:{click:function(i){t.changeshow(!1)}}},[t._v("取消")])])])])],1)]),t._v(" "),e("add-people-modal",{attrs:{visibleDialog:t.userVisibleDialog,name:"user",selectedId:t.userIdList,title:"选择指定成员"},on:{changeshow:t.changeModalShow,setData:t.getModaldata}})],1)},staticRenderFns:[]};var c=e("C7Lr")(p,r,!1,function(t){e("OYBE")},"data-v-38290961",null);i.a=c.exports},OYBE:function(t,i){},Qy5K:function(t,i){}});
//# sourceMappingURL=35.09f776d7383de0783e9e.js.map