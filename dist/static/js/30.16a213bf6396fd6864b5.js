webpackJsonp([30],{"//ld":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAEMUlEQVRIS62VfUxWZRjGf/d5AEU0K0UIRfyoicPm1GTqsKE4m/GWrrKmNQJbRVu4tsy1vr8WThdbjKZiW2lufYzS5osFYuDIoSW6hisRMk2iZprCFEg4527nPSEcwQ+Es71/nfdcv+u6P55HGOBndIGOcM7bi1QJqDBXBkI/do0moU4AcQKKzEbVuLqCtNwQ4PZ8HXShpSNVVQIIAVUd15vRPgHGrdXYVtu+F+E+lAWgQ6+V/qoAVZXR65jmOE7Aja8id6Hap8Q9AHEbdQjn7AW2EgDSUY27lsurvQ8B4t7TeKfddamu6HxFB/dHtPu3IUBMbrsOlODlOgMCGBEJmdOF9EkW8cOhoRnW73f44rB6Y9qfBGkThMIlFlER/t6rKos22/z0Vz8A88YLW5danGuDl3c5lNYrk0ZC0TITAr6+26bwR3pP4PpZPFl4IEmIjhKO/K3k7XU42eRVOcJA5ZMmVBLPaVf1izMMM+KEnKBN0eFeAInRsOF+Q2K0P3ZjszKn0KatA+aMFb5abqhuVNK32JfUh4RDTY5BBKZ9YNPcdlmJ4oaB62BUFHx0UPm2TlkwUchOtkIi7+6xya9SZsTB6JuE744p5y92uX8l1eLZWRZrK23y9vbS5O2PGmbFyyWhzk93PGaYOUY49KfXvN6e2fHw5XLDz6e8srU7/x92nVOUNAp2rwjj1HllaoFN9+XIThbemG8406Ik5fcEREdBWZYhKhwWfmxz7KxnwTemuQstsqZbbDnksLrE8ZlcnChsXBI6gRm7roOL3RhGPOdu8ie22RTXdlnzATrL82qZzaYD/uV2+7B1qeHCRWVinj/BW2kWT820KNjn8E6F35gPcOAZw5jhQvbXNtt/8QMeniLkBwxHTyt3f9gFWDJZ2LDYUHnc4ZHPPfFpt0HaRAtjwZo92rUHJ1YZBoUJzxXbfFbjB7yQYvF8isXOWocV2zwhd6l2ZnhlW/e9w9RYIXW8cEukN96l9Q6PF3UD7M82JNws5O6xeb/KD9iVabgzVsgoskMbOzQCSjMNE27178rZVqXiNw2Nb/kx5UxLtz0oWmaRkmBR/YeS/klXGe65Q9j8oOFkk5K83puuzqa7Z467xa7g7l8dDjbimz5fD1bOEl5K9SK/XW6zo1aZmyC8Ns8KHQ0PfWpT3egNlzvS7qZXuC5br3zY+wCRYVD1tCF2mD92c5uSU+xQUtf3a0NELviO68SR8GaaxZQY4Z9WCB5R1v/g0PzvlV1e/sZ1rVBmCcEwMcX9ug86xQU5ARQjBAfHmPLjWdJ26d2NXTjiILoPsYLhagUbXpSaK2W8/gQiTQIlIgTFmG8aV8np6yncVQECR93Y7i8xOayyYp50XI9o9//4ASLtApWiEjTGCjaslrq+CvZoemxux+8I5SjBoVGmpH6lNPdX1JdgIMV60/oPguDhX/rvcpQAAAAASUVORK5CYII="},D7Av:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("2hMI"),s=e("ij9N"),l=e("yclV"),n={data:function(){return{options:{target:s.a.url+"/web/File/sliceUpload",testChunks:!0,headers:{webToken:window.localStorage.getItem("htcx_webtoken"),uid:window.localStorage.getItem("htcx_uid"),key:window.localStorage.getItem("htcx_server_key")},maxChunkRetries:1,chunkSize:2097152},attrs:{accept:"image/*"},fileStatusText:{success:"成功",error:"失败",uploading:"上传中",paused:"暂停",waiting:"等待上传"}}},created:function(){},computed:{},mounted:function(){},methods:{downloadClick:function(){Object(i._118)({fileName:"xmzddr"}).then(function(t){1==t.data.msgNo?window.location.href=t.data.payload:Object(l.g)("info",t.data.message)})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"personal-content-body"},[e("div",{staticClass:"table-content"},[t._m(0),t._v(" "),e("div",{staticClass:"table-group"},[e("div",{staticClass:"table-group-content"},[e("div",{staticClass:"clear table-group-title"},[e("div",{staticClass:"left breadcrumb"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"administrativeManageHomepageNew"}}},[t._v("行政管理")]),t._v(" "),e("el-breadcrumb-item",[t._v("项目数据转移")])],1)],1),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"datamig_body"},[t._m(1),t._v(" "),e("div",{staticClass:"datamig_sectitle"},[t._v("步骤1 导入模板下载")]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"datamig_btnbox marginb_20"},[e("div",{staticClass:"table-group-title-btn btn-blue",on:{click:t.downloadClick}},[t._v("立即下载")])]),t._v(" "),e("div",{staticClass:"datamig_sectitle"},[t._v("步骤2 上传导入")]),t._v(" "),e("uploader",{staticClass:"uploader_example",attrs:{options:t.options,fileStatusText:t.fileStatusText}},[e("uploader-unsupport"),t._v(" "),e("uploader-drop",[e("p",[t._v("将文件拖拽到此处或")]),t._v(" "),e("uploader-btn",[t._v("选择文件")])],1),t._v(" "),e("uploader-list")],1)],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clear table-content-title"},[a("div",{staticClass:"left"},[this._v("项目数据转移")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"datamig_title"},[this._v("项目数据迁移"),a("span",[this._v("—— 可将以往的项目数据一键式导入本系统")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"datamig_info"},[a("div",{staticClass:"datamig_info_text"},[this._v("导入模板中包含如下两个文件：")]),this._v(" "),a("div",{staticClass:"datamig_info_list"},[a("div",{staticClass:"datamig_info_text"},[a("img",{attrs:{src:e("HvcF")}}),this._v("项目基本信息导入模板；")]),this._v(" "),a("div",{staticClass:"datamig_info_text"},[a("img",{attrs:{src:e("//ld")}}),this._v("项目文件导入目录，此文件为文件夹目录。\n                  "),a("br"),this._v("(请将以往的文件安装此目录填充，并再压缩成压缩文件并以企业名称全称命)")])])])}]};var c=e("C7Lr")(n,r,!1,function(t){e("j55u")},"data-v-f03b93ba",null);a.default=c.exports},HvcF:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAADgklEQVRIS62VbWiWVRjHf9c523zalk3NNjbXfKMGJb2oq1UrlfnB7Uk0GDr8EEa5JbZPEhIkFYGhJRG1aKsP0QtJKg4fkUG5YCVuohESxWahY+k+2Fi+zbXnPlfc9yZ7Hnu23ZvPgfvTOff/d/2vc13XEdK8ij7UOe6qt0aVqAoVkg79gnf0AdRFERdVpBxV6+sKcn1agMUf6Ixr1+MrVCWKEFXV+akCnRJg/m4tGPS8KoRnUSpBcydzPyFAVaVoD48456K+fRVZhuqUHP8PUPiJZjPgVXpKFKhGtXCyKCfaDwCF72mxG/ajVF90laKR2xFN/DcA5O8a1nQJ3qqTVsDi2bBlueHxYuGFgx5n+0fLNB0OHsyHfRssc7JHaqCiOU733yEBd2fDigVCbhb8fFH5pS85EcuL4KsaizWQkzUFQF4Edjxt2LBEuCNzrDqbTjp2fu8Cii++b6Pl8g3YFnPsrw0aeHIH2Znwba1laaHwR79yvEd5qkRYMGsEVPV5nNMXoaFc2PSQoeYbj8FhOPNKRjhA0zrD2lLD4d8d9S0OT+GuCPz4kmVujnC0y7H5oKPqPuH0BaXvKszNCQm4Nw9O1Nkgooc/8rgyNJbzN1YZ6ssMf/YrTzR5SZcRGrBzpWHrY4aW3xx1LSO5vrk2LhHer7YMxZWSd6cJOFBreLLE8FabR2NHcg9WLhK+rLGoKsV7POIJ/NAOOuotJXnCtsMe+39NBqwtFZrWWfquaJC+xBUacG67JZKRGvDiUuHt1ZZTfynVX0wTcGqrpWim8OYxj487kx18tt5Qfb9h70+O3e3J9xPawaFNNpgnrd2O5w+MiRTkwvE6S5aFZY1eUJqpUvSvp1Q0e5wfGGdUvPaMoaHcEHfKc197dPbCPTnw6XpL2Tyh+aTj9dFOTgREMuDRQgnSNzSavZTTdFYEOl+23DlD8KPxI5k3k2Bc+I235ZAj7Hwfd1yvXiTsrTJB1/qr65LS2OGCqkoszcneERG5Nu6Dk2lg4WwYjEPPwGRSY/t+1ArfGSGWIfZIWl40Qc4DRxBikXzbdm6z3LiJnCZAHKInEBPLVBPr3SFnxvMYHiDyj0CrCDGx9uiF7XIpTOImBAh0+bb9r7Qso/2HlRIPI5p4JhkgMizQLioxa02s91XpnqrgreelYFe8B6ENJZabY1vPNsjl2xVNcpBOsVRa/wFNOLlfDR1ThQAAAABJRU5ErkJggg=="},j55u:function(t,a){}});
//# sourceMappingURL=30.16a213bf6396fd6864b5.js.map