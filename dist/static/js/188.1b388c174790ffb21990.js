webpackJsonp([188],{"8Op5":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2hMI"),i={data:function(){return{detailsInfo:{},selectTime:null,keyWord:null,type:null,downId:null,upId:null,params:{}}},mounted:function(){this.params=this.$route.query,this.getArticleDetails(this.params.id)},methods:{getArticleDetails:function(t){var a=this;if(null==t)return!1;var s={id:t,type:this.params.type};"time"==this.params.searchType?s.issueTime=this.selectTime:"keyWord"==this.params.searchType&&(s.search=this.keyWord),Object(e._179)(s).then(function(t){1==t.data.msgNo&&(a.detailsInfo=t.data.payload.data,a.downId=t.data.payload.downId,a.upId=t.data.payload.upId)})},goBack:function(){0==this.params.type?this.$router.push({path:"/home/organizationNotice"}):1==this.params.type&&this.$router.push({path:"/home/organizationSx"})}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content-title clear"}),t._v(" "),s("div",{staticClass:"list-contaienr"},[0==t.params.type?s("div",{staticClass:"list-header"},[t._v("共"+t._s(t.params.total)+"篇机构公告（"+t._s(t.params.unreadTotal)+"篇公告未读)")]):t._e(),t._v(" "),1==t.params.type?s("div",{staticClass:"list-header"},[t._v("共"+t._s(t.params.total)+"篇企业私信（"+t._s(t.params.unreadTotal)+"篇私信未读)")]):t._e(),t._v(" "),s("div",{staticClass:"list-nav"},[0==t.params.type?s("span",{on:{click:t.goBack}},[t._v("机构公告  >")]):t._e(),t._v(" "),1==t.params.type?s("span",{on:{click:t.goBack}},[t._v("企业私信  >")]):t._e(),t._v(" "),s("span",[t._v("文章详情页")])]),t._v(" "),s("div",{staticClass:"list-line"}),t._v(" "),s("div",{staticClass:"list-body"},[s("div",{staticClass:"article-name"},[t._v(t._s(t.detailsInfo.title))]),t._v(" "),s("div",{staticClass:"article-publish-time"},[t._v("发布时间："+t._s(t.detailsInfo.issue_time)+" 来源："+t._s(t.detailsInfo.source))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.detailsInfo.contents)}})]),t._v(" "),s("div",{staticClass:"list-footer"},[s("button",{on:{click:function(a){t.getArticleDetails(t.upId)}}},[t._v("上一篇")]),t._v(" "),s("button",{on:{click:function(a){t.getArticleDetails(t.downId)}}},[t._v("下一篇")])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"article-title-icon"})])}]};var l=s("C7Lr")(i,n,!1,function(t){s("IGxW")},"data-v-1d2f6f08",null);a.default=l.exports},IGxW:function(t,a){}});
//# sourceMappingURL=188.1b388c174790ffb21990.js.map