webpackJsonp([105],{"4GgW":function(t,e){},YIGL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZLEe"),i=a.n(n),l=a("aA9S"),r=a.n(l),o=a("HzJ8"),s=a.n(o),c=a("3cXf"),d=a.n(c),v=a("2hMI"),u=a("lKYg"),f=a("yclV"),h=(a("IvJb"),{data:function(){return{percent:"0%",moduleId:null,nextMduleId:null,moduleName:null,navList:[],DeatailData:[],historyList:[],projId:null,companyName:null,saveInterval:null}},components:{progressBar:u.a},mounted:function(){var t=this.$route.query;this.moduleId=t.id,this.projId=185,this.getHomedataList();var e=this;this.saveInterval=setInterval(function(){localStorage.setItem(e.projId+"&"+e.moduleId,d()(e.DeatailData))},3e4)},destroyed:function(){window.clearInterval(this.saveInterval)},methods:{getmoduleDetail:function(t){var e=this,a={projId:this.projId,moduleId:this.moduleId};void 0!=t&&(a.hid=t),Object(v._281)(a).then(function(a){if(1==a.data.msgNo){var n=a.data.payload,i=!0,l=!1,r=void 0;try{for(var o,c=s()(n.data);!(i=(o=c.next()).done);i=!0){var d=o.value;if(10==d.control&&null!=d.contents&&""!=d.contents&&(d.contents=JSON.parse(d.contents)),4==d.control&&(d.elsed=d.elsed.split(",")),null==d.star&&(d.star=0),void 0!=d.child&&d.child.length>0){var v=!0,u=!1,f=void 0;try{for(var h,p=s()(d.child);!(v=(h=p.next()).done);v=!0){var y=h.value;10==y.control&&null!=y.contents&&""!=y.contents&&(y.contents=JSON.parse(y.contents)),4==y.control&&(y.elsed=y.elsed.split(",")),null==y.star&&(y.star=0)}}catch(t){u=!0,f=t}finally{try{!v&&p.return&&p.return()}finally{if(u)throw f}}}}}catch(t){l=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(l)throw r}}var m=localStorage.getItem(e.projId+"&"+e.moduleId);e.DeatailData=void 0!=t?n.data:null!=m?JSON.parse(m):n.data,e.historyList=n.history;var _=0;if(e.moduleId!=e.navList.child[e.navList.child.length-1].id){var g=!0,C=!1,x=void 0;try{for(var b,I=s()(e.navList.child);!(g=(b=I.next()).done);g=!0){b.value.id==e.moduleId&&(e.nextMduleId=e.navList.child[_+1].id),_++}}catch(t){C=!0,x=t}finally{try{!g&&I.return&&I.return()}finally{if(C)throw x}}}else e.nextMduleId=null;e.getPercent()}})},getPercent:function(){var t=0,e=0,a=!0,n=!1,i=void 0;try{for(var l,r=s()(this.DeatailData);!(a=(l=r.next()).done);a=!0){var o=l.value;if(0!=o.control&&(null!=o.contents&&""!=o.contents&&t++,e++,1==o.grade&&(e++,0!=o.star&&null!=o.star&&""!=o.star&&t++)),void 0!=o.child){var c=!0,d=!1,v=void 0;try{for(var u,f=s()(o.child);!(c=(u=f.next()).done);c=!0){var h=u.value;0!=h.control&&(null!=h.contents&&""!=h.contents&&t++,e++,1==h.grade&&(e++,0!=h.star&&null!=h.star&&""!=h.star&&t++))}}catch(t){d=!0,v=t}finally{try{!c&&f.return&&f.return()}finally{if(d)throw v}}}}}catch(t){n=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(n)throw i}}this.percent=0==e?"0%":parseInt(t/e*100)+"%"},toConfirm:function(t){var e=this;this.getPercent(),void 0!=this.navList.child&&this.navList.child.forEach(function(t){t.id==e.moduleId&&(t.integrity=e.percent)});var a=[],n=JSON.parse(d()(this.DeatailData)),i=!0,l=!1,r=void 0;try{for(var o,c=s()(n);!(i=(o=c.next()).done);i=!0){var u=o.value;if(4==u.control&&(u.elsed=u.elsed.join(",")),void 0!=u.child&&u.child.length>0){var h=!0,p=!1,y=void 0;try{for(var m,_=s()(u.child);!(h=(m=_.next()).done);h=!0){var g=m.value;4==g.control&&(g.elsed=g.elsed.join(",")),a.push(g)}}catch(t){p=!0,y=t}finally{try{!h&&_.return&&_.return()}finally{if(p)throw y}}delete u.child}a.push(u)}}catch(t){l=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(l)throw r}}var C={};C[this.moduleName]=this.percent,Object(v._313)({projId:this.projId,moduleId:this.moduleId,data:d()(a),integrity:d()(C)}).then(function(a){if(1==a.data.msgNo){localStorage.removeItem(e.projId+"&"+e.moduleId);var n=e.navList.child;e.moduleId==n[n.length-1].id?"number"==typeof t?e.goOtherModule(t):(Object(f.g)("success","提交成功"),e.$router.push({path:"/home/investProjectManageHomepage",query:{id:e.projId}})):"number"==typeof t?e.goOtherModule(t):e.goOtherModule(e.nextMduleId)}})},changefile:function(t,e,a){var n=this,i=a.target.files;Object(v._282)(i).then(function(l){if(1==l.data.msgNo){var o=l.data.payload,c=!0,v=!1,u=void 0;try{for(var f,h=s()(n.DeatailData);!(c=(f=h.next()).done);c=!0){var p=f.value;if(p.id==t){var y={};for(var m in o)y[i[m].name]=o[m];var _=JSON.parse(d()(p.contents));delete _[e];var g=r()(_,y);p.contents=g}else if(void 0!=p.child&&p.child.length>0){var C=!0,x=!1,b=void 0;try{for(var I,j=s()(p.child);!(C=(I=j.next()).done);C=!0){var w=I.value;if(w.id==t){var D={};for(var N in o)D[i[N].name]=o[N];var O=JSON.parse(d()(w.contents));delete O[e];var L=r()(O,D);w.contents=L}}}catch(t){x=!0,b=t}finally{try{!C&&j.return&&j.return()}finally{if(x)throw b}}}}}catch(t){v=!0,u=t}finally{try{!c&&h.return&&h.return()}finally{if(v)throw u}}n.getPercent()}a.target.value=""})},uploadfile:function(t,e){var a=this,n=e.target.files;Object(v._282)(n).then(function(i){if(1==i.data.msgNo){var l=i.data.payload,o=!0,c=!1,v=void 0;try{for(var u,f=s()(a.DeatailData);!(o=(u=f.next()).done);o=!0){var h=u.value;if(h.id==t){var p={};for(var y in l)p[n[y].name]=l[y];var m=JSON.parse(d()(h.contents));null!=m&&""!=m||(m={});var _=r()(m,p);h.contents=_}else if(void 0!=h.child&&h.child.length>0){var g=!0,C=!1,x=void 0;try{for(var b,I=s()(h.child);!(g=(b=I.next()).done);g=!0){var j=b.value;if(j.id==t){var w={};for(var D in l)w[n[D].name]=l[D];var N=JSON.parse(d()(j.contents));null!=N&&""!=N||(N={});var O=r()(N,w);j.contents=O}}}catch(t){C=!0,x=t}finally{try{!g&&I.return&&I.return()}finally{if(C)throw x}}}}}catch(t){c=!0,v=t}finally{try{!o&&f.return&&f.return()}finally{if(c)throw v}}a.getPercent()}e.target.value=""})},uploadfileRequest:function(t){var e=this,a=t.data.id,n=[];""!=Object(f.k)(t.file.name)?(n.push(t.file),Object(v._282)(n).then(function(t){if(1==t.data.msgNo){var i=t.data.payload,l=!0,o=!1,c=void 0;try{for(var v,u=s()(e.DeatailData);!(l=(v=u.next()).done);l=!0){var f=v.value;if(f.id==a){var h={};for(var p in i)h[n[p].name]=i[p];var y=JSON.parse(d()(f.contents));null!=y&&""!=y||(y={});var m=r()(y,h);f.contents=m}else if(void 0!=f.child&&f.child.length>0){var _=!0,g=!1,C=void 0;try{for(var x,b=s()(f.child);!(_=(x=b.next()).done);_=!0){var I=x.value;if(I.id==a){var j={};for(var w in i)j[n[w].name]=i[w];var D=JSON.parse(d()(I.contents));null!=D&&""!=D||(D={});var N=r()(D,j);I.contents=N}}}catch(t){g=!0,C=t}finally{try{!_&&b.return&&b.return()}finally{if(g)throw C}}}}}catch(t){o=!0,c=t}finally{try{!l&&u.return&&u.return()}finally{if(o)throw c}}e.getPercent()}})):Object(f.g)("info","不支持该类型文件上传")},toDelFundFile:function(t,e){var a=!0,n=!1,l=void 0;try{for(var r,o=s()(this.DeatailData);!(a=(r=o.next()).done);a=!0){var c=r.value;if(c.id==t){var v={};delete(v=JSON.parse(d()(c.contents)))[e],0==i()(v).length?c.contents=null:c.contents=v}else if(void 0!=c.child&&c.child.length>0){var u=!0,f=!1,h=void 0;try{for(var p,y=s()(c.child);!(u=(p=y.next()).done);u=!0){var m=p.value;if(m.id==t){var _={};delete(_=JSON.parse(d()(m.contents)))[e],0==i()(_).length?m.contents=null:m.contents=_}}}catch(t){f=!0,h=t}finally{try{!u&&y.return&&y.return()}finally{if(f)throw h}}}}}catch(t){n=!0,l=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}this.getPercent()},goOtherModule:function(t){this.moduleId=t;var e=!0,a=!1,n=void 0;try{for(var i,l=s()(this.navList.child);!(e=(i=l.next()).done);e=!0){var r=i.value;r.id==this.moduleId&&(this.moduleName=r.name)}}catch(t){a=!0,n=t}finally{try{!e&&l.return&&l.return()}finally{if(a)throw n}}var o=!0,c=!1,d=void 0;try{for(var v,u=s()(this.HomedataList);!(o=(v=u.next()).done);o=!0){var f=v.value;if(f.child.length>0){var h=!0,p=!1,y=void 0;try{for(var m,_=s()(f.child);!(h=(m=_.next()).done);h=!0){var g=m.value;g.id==this.moduleId&&(this.moduleName=g.name,this.navList=f)}}catch(t){p=!0,y=t}finally{try{!h&&_.return&&_.return()}finally{if(p)throw y}}}}}catch(t){c=!0,d=t}finally{try{!o&&u.return&&u.return()}finally{if(c)throw d}}this.getmoduleDetail(),this.$router.push({path:"/home/investProjectManageDetail",query:{id:t,projId:this.projId}})},getHomedataList:function(){var t=this;Object(v._298)({projId:this.projId}).then(function(e){if(1==e.data.msgNo){var a=e.data.payload.data;e.data.payload.name?t.companyName=e.data.payload.name:t.companyName="项目名称",t.HomedataList=e.data.payload.data;var n=!0,i=!1,l=void 0;try{for(var r,o=s()(a);!(n=(r=o.next()).done);n=!0){var c=r.value;if(c.child.length>0){var d=!0,v=!1,u=void 0;try{for(var f,h=s()(c.child);!(d=(f=h.next()).done);d=!0){var p=f.value;p.id==t.moduleId&&(t.moduleName=p.name,t.navList=c)}}catch(t){v=!0,u=t}finally{try{!d&&h.return&&h.return()}finally{if(v)throw u}}}}}catch(t){i=!0,l=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw l}}t.getmoduleDetail()}})}}}),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personal-content-body"},[a("div",{staticClass:"content investProjectManageDetail"},[t._m(0),t._v(" "),a("div",{staticClass:"content-body clear"},[a("div",{staticClass:"content-body-left-box left"},[a("div",{staticClass:"text-nav"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{name:"directInvestProjectView",query:{id:this.projId}}}},[t._v("返回项目首页")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(t.companyName))])],1)],1),t._v(" "),a("div",{staticClass:"img-nav clear"},[a("div",{staticClass:"navbox"},t._l(t.navList.child,function(e,n){return a("div",{key:n,staticClass:"nav-item ",class:{current:"0%"!=e.integrity||e.id==t.moduleId},on:{click:function(a){t.toConfirm(e.id)}}},[t._v("\n               "),n!=t.navList.child.length-1?a("i",{staticClass:"icon-check"}):t._e(),t._v(" "),a("span",{staticClass:"triangle"}),t._v(" "),t.navList.child.length>5?a("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t._f("texteclipsis")(e.name,8)))]):a("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.name))])])}))]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"progress-bar-container"},[a("progress-bar",{attrs:{schedule:t.percent}}),t._v(" "),a("div",{staticClass:"progress-bar-ts"},[t._v("信息完成度")])],1),t._v(" "),t._l(t.DeatailData,function(e,n){return a("div",{key:n,staticClass:"content-type-box "},[a("div",{staticClass:"content-type-title"},[t._v(t._s(e.zhName)+"\n            "),1==e.grade?a("div",{staticClass:"content-type-rate-box"},[a("el-rate",{staticClass:"content-type-rate",attrs:{max:5,colors:["#F7BA2A","#F7BA2A","#F7BA2A"],"allow-half":"","show-score":"","text-color":"#F7BA2A"},on:{change:t.getPercent},model:{value:e.star,callback:function(a){t.$set(e,"star",a)},expression:"item.star"}})],1):t._e()]),t._v(" "),10==e.control?a("div",{staticClass:"upload-lists"},[t._l(e.contents,function(n,i){return a("div",{key:i,staticClass:"upload-list clear"},[a("div",{staticClass:"upload-list-name"},[t._v("\n                "+t._s(i)+"\n              ")]),t._v(" "),a("span",{staticClass:"right uploadDelete",on:{click:function(a){t.toDelFundFile(e.id,i)}}},[t._v("删除")]),t._v(" "),a("a",{staticClass:"formgroup-file-item-btn right"},[a("input",{staticClass:"formgroup-file-item-btn-inputfile",attrs:{type:"file",multiple:"multiple"},on:{change:function(a){t.changefile(e.id,i,a)}}}),t._v("替换")])])}),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",data:{id:e.id},action:"",multiple:"","auto-upload":!0,"show-file-list":!1,"http-request":t.uploadfileRequest}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],2):t._e(),t._v(" "),1==e.control?a("div",{staticClass:"content-type-textarea"},[a("el-input",{attrs:{type:"textarea",resize:"none"},on:{change:t.getPercent},model:{value:e.contents,callback:function(a){t.$set(e,"contents",a)},expression:"item.contents"}})],1):t._e(),t._v(" "),4==e.control?a("el-radio-group",{staticClass:"content-type-radio",on:{change:t.getPercent},model:{value:e.contents,callback:function(a){t.$set(e,"contents",a)},expression:"item.contents"}},t._l(e.elsed,function(e,n){return a("el-radio",{key:n,attrs:{label:e}},[t._v(t._s(e))])})):t._e(),t._v(" "),t._l(e.child,function(e,n){return a("div",{key:n},[a("div",{staticClass:"content-type-ts"},[t._v(t._s(e.zhName)+"\n              "),1==e.grade?a("div",{staticClass:"content-type-rate-box"},[a("el-rate",{staticClass:"content-type-rate",attrs:{max:5,colors:["#F7BA2A","#F7BA2A","#F7BA2A"],"allow-half":"","show-score":"","text-color":"#F7BA2A"},on:{change:t.getPercent},model:{value:e.star,callback:function(a){t.$set(e,"star",a)},expression:"childItem.star"}})],1):t._e()]),t._v(" "),1==e.control?a("div",{staticClass:"content-type-textarea"},[a("el-input",{attrs:{type:"textarea",resize:"none"},on:{change:t.getPercent},model:{value:e.contents,callback:function(a){t.$set(e,"contents",a)},expression:"childItem.contents"}})],1):t._e(),t._v(" "),10==e.control?a("div",{staticClass:"upload-lists"},[t._l(e.contents,function(n,i){return a("div",{key:i,staticClass:"upload-list clear"},[a("div",{staticClass:"upload-list-name"},[t._v("\n                  "+t._s(i)+"\n                ")]),t._v(" "),a("span",{staticClass:"right uploadDelete",on:{click:function(a){t.toDelFundFile(e.id,i)}}},[t._v("删除")]),t._v(" "),a("a",{staticClass:"formgroup-file-item-btn right"},[a("input",{staticClass:"formgroup-file-item-btn-inputfile",attrs:{type:"file",multiple:"multiple"},on:{change:function(a){t.changefile(e.id,i,a)}}}),t._v("替换")])])}),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",data:{id:e.id},action:"",multiple:"","auto-upload":!0,"show-file-list":!1,"http-request":t.uploadfileRequest}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],2):t._e(),t._v(" "),4==e.control?a("el-radio-group",{staticClass:"content-type-radio",on:{change:t.getPercent},model:{value:e.contents,callback:function(a){t.$set(e,"contents",a)},expression:"childItem.contents"}},t._l(e.elsed,function(e,n){return a("el-radio",{key:n,attrs:{label:e}},[t._v(t._s(e))])})):t._e()],1)})],2)}),t._v(" "),a("div",{staticClass:"content-confirm content-type-box "},[null!=t.nextMduleId?a("button",{on:{click:t.toConfirm}},[t._v("下一步")]):a("button",{on:{click:t.toConfirm}},[t._v("提交")])])],2),t._v(" "),a("div",{staticClass:"content-body-right-box right"},[t._m(1),t._v(" "),a("div",{staticClass:"scroll-box"},[0==t.historyList.length?a("div",{staticClass:"history-null-data"},[t._v("\n            暂无提交记录\n          ")]):a("div",{staticClass:"content-body-right-items-box"},t._l(t.historyList,function(e,n){return a("div",{key:n,staticClass:"item-box",on:{click:function(a){t.getmoduleDetail(e.id)}}},[a("div",{staticClass:"item-time"},[a("span",{staticClass:"blue-point"}),t._v(t._s(e.addTime))]),t._v(" "),a("div",{staticClass:"item-text"},[t._v(t._s(e.name)+"提交新版本")])])}))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-title clear"},[e("div",{staticClass:"left"},[this._v("项目管理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-body-right-header"},[e("span",{staticClass:"icon-save"}),this._v(" "),e("span",{staticClass:"header-name"},[this._v("版本记录")])])}]};var y=a("C7Lr")(h,p,!1,function(t){a("4GgW")},"data-v-68c0ddc4",null);e.default=y.exports}});
//# sourceMappingURL=105.90005ea63f236cee4bb5.js.map