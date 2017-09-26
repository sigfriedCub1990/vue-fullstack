webpackJsonp([0],{359:function(e,t,a){var n=a(17)(a(377),a(395),null,null);e.exports=n.exports},364:function(e,t,a){"use strict";t.a={pagination:{current:"current",currentAppend:"page",pages:"total",pagesAppend:"page"}}},365:function(e,t,a){"use strict";var n=a(364),r=a(366);t.a={"zh-CN":r.a,en:n.a}},366:function(e,t,a){"use strict";t.a={pagination:{current:"当前第",currentAppend:"页",pages:"共",pagesAppend:"页"}}},370:function(e,t,a){"use strict";t.a={user:{breadcrumb:{home:"Home",current:"Users"},model:{username:"Username",role:"Role",password:"Password"},create:{title:"Create a user"},rules:{username:"Please input the username",password:"Please input the password"},action:{userExisted:"User existed"}}}},371:function(e,t,a){"use strict";var n=a(370),r=a(372);t.a={"zh-CN":r.a,en:n.a}},372:function(e,t,a){"use strict";t.a={user:{breadcrumb:{home:"首页",current:"用户管理"},model:{username:"用户名",role:"角色",password:"密码"},create:{title:"创建用户"},rules:{username:"请输入用户名",password:"请输入密码"},action:{userExisted:"用户已存在"}}}},373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(27),r=a.n(n),o=a(33),i=a(45),s=(a.n(i),a(119)),l=a.n(s),c=a(391),u=a.n(c);t.default={props:{rowKey:String,showPagination:{type:Boolean,default:!0},full:{type:Boolean,default:!0}},data:function(){return{pending:!1,page:{current:1,limit:0,total:0}}},computed:r()({},a.i(o.a)(["globalConfig"])),watch:{"globalConfig.pageLimit":function(e){this.page.current=1,this.page.limit=e,this.$emit("page-change",1)}},components:{ContentLoading:l.a,Pagination:u.a},methods:{query:function(e,t){for(var a=arguments.length,n=Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return this.customQuery.apply(this,[e,"query",t].concat(n))},customQuery:function(e,t,a){var n=this;a=a||this.page.current,this.pending=!0;for(var r=arguments.length,o=Array(r>3?r-3:0),s=3;s<r;s++)o[s-3]=arguments[s];var l=i.merge.apply(void 0,[this.showPagination?{page:{current:a,limit:this.globalConfig.pageLimit}}:{}].concat(o));return e[t](l).then(function(e){return e.json()}).then(function(e){return n.pending=!1,n.page.current=a||n.page.current,n.page.total=e.page?e.page.total:e.results.length,e.results||e})},onPageChange:function(e){this.$emit("page-change",e)}},created:function(){this.page.limit=this.globalConfig.pageLimit}}},374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(27),r=a.n(n),o=a(33),i=a(365);t.default={locales:i.a,props:{current:{type:Number,default:1},total:{type:Number,default:1,required:!0}},computed:r()({},a.i(o.a)(["globalConfig"]),{pages:function(){return Math.round(this.total/this.globalConfig.pageLimit+.5)}}),methods:{change:function(e,t){t||this.$emit("page-change",e)},reset:function(){this.$emit("page-change",1)}}}},377:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(390),r=a.n(n),o=a(117),i=a(371);t.default={locales:i.a,data:function(){return{search:{},form:{username:"",password:""},rules:{username:[{required:!0,message:this.$t("user.rules.username"),trigger:"blur"}],password:[{required:!0,message:this.$t("user.rules.password"),trigger:"blur"}]},formVisible:!1,users:[]}},components:{DataTable:r.a},methods:{fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$refs.users.query(o.a,t,{search:this.search}).then(function(t){e.users=t}).catch(function(e){console.error(e)})},createUser:function(){this.formVisible=!0},cancelForm:function(){this.form.username="",this.form.password="",this.formVisible=!1},saveForm:function(){var e=this;this.$refs.form.validate(function(t){t&&o.a.save(null,e.form).then(function(){e.cancelForm(),e.$message({type:"success",message:e.$t("message.created")}),e.fetch()}).catch(function(t){e.$message({type:"error",message:422===t.status?e.$t("user.action.userExisted"):e.$t("message.createFailed")})})})},deleteUser:function(e){var t=this;this.$confirm("This action will remove the selected user: "+e.username+" forever, still going on?",this.$t("confirm.title"),{type:"warning"}).then(function(){o.a.delete({_id:e._id}).then(function(){t.$message({type:"success",message:t.$t("message.removed")}),t.fetch()})}).catch(function(){})}},mounted:function(){var e=this;this.$nextTick(function(){e.fetch()})}}},381:function(e,t,a){t=e.exports=a(354)(!0),t.push([e.i,".ui-data-table .toolbar{margin-bottom:.5rem}.ui-data-table .toolbar .el-form-item{margin-bottom:0}.ui-data-table .data-table{position:relative;font-size:.75rem;border-left:none;border-right:none}.ui-data-table .data-table .el-table:before{background:none}.ui-data-table .data-table .actions{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.ui-data-table .data-table .actions .el-tooltip{margin-left:1rem}.ui-data-table .data-table .actions .el-tooltip:first-child{margin-left:0}.ui-data-table .data-table .actions .el-tooltip .el-tooltip__rel{display:inline-block;line-height:1rem}.ui-data-table .data-table .actions .icon{margin-left:.5rem;line-height:1rem;font-size:1rem;color:#20a0ff;cursor:pointer}.ui-data-table .data-table .actions .icon:first-child{margin-left:0}.ui-data-table .data-table .actions .icon:hover{color:#58b7ff}@media (max-width:64rem){.ui-data-table .data-table .actions .el-tooltip{margin-left:.5rem}}","",{version:3,sources:["/home/travis/build/erguotou520/vf-mock/src/components/DataTable.vue"],names:[],mappings:"AACA,wBACE,mBAAsB,CACvB,AACD,sCACE,eAAiB,CAClB,AACD,2BACE,kBAAmB,AACnB,iBAAmB,AACnB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,4CACE,eAAiB,CAClB,AACD,oCACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,gDACE,gBAAkB,CACnB,AACD,4DACE,aAAe,CAChB,AACD,iEACE,qBAAsB,AACtB,gBAAkB,CACnB,AACD,0CACE,kBAAoB,AACpB,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,cAAgB,CACjB,AACD,sDACE,aAAe,CAChB,AACD,gDACE,aAAe,CAChB,AACD,yBACA,gDACI,iBAAoB,CACvB,CACA",file:"DataTable.vue",sourcesContent:["\n.ui-data-table .toolbar {\n  margin-bottom: 0.5rem;\n}\n.ui-data-table .toolbar .el-form-item {\n  margin-bottom: 0;\n}\n.ui-data-table .data-table {\n  position: relative;\n  font-size: 0.75rem;\n  border-left: none;\n  border-right: none;\n}\n.ui-data-table .data-table .el-table::before {\n  background: none;\n}\n.ui-data-table .data-table .actions {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.ui-data-table .data-table .actions .el-tooltip {\n  margin-left: 1rem;\n}\n.ui-data-table .data-table .actions .el-tooltip:first-child {\n  margin-left: 0;\n}\n.ui-data-table .data-table .actions .el-tooltip .el-tooltip__rel {\n  display: inline-block;\n  line-height: 1rem;\n}\n.ui-data-table .data-table .actions .icon {\n  margin-left: 0.5rem;\n  line-height: 1rem;\n  font-size: 1rem;\n  color: #20a0ff;\n  cursor: pointer;\n}\n.ui-data-table .data-table .actions .icon:first-child {\n  margin-left: 0;\n}\n.ui-data-table .data-table .actions .icon:hover {\n  color: #58b7ff;\n}\n@media (max-width: 64rem) {\n.ui-data-table .data-table .actions .el-tooltip {\n    margin-left: 0.5rem;\n}\n}"],sourceRoot:""}])},382:function(e,t,a){t=e.exports=a(354)(!0),t.push([e.i,".ui-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:.75rem 1rem;border-top:1px solid #d3dce6;background-color:#fff}.ui-pagination .navs>a{float:left;width:2rem;height:1.75rem;line-height:1.75rem;text-align:center;border-right:1px solid #d3dce6;background-color:#fff;color:#475669;border:1px solid #d3dce6;border-right:none;cursor:pointer}.ui-pagination .navs>a:last-child{border-right:1px solid #d3dce6}.ui-pagination .navs>a[disabled]{color:#c0ccda;cursor:not-allowed;background-color:#eff2f7}.ui-pagination .navs>a:hover{background-color:#20a0ff;color:#fff;border-color:#20a0ff}","",{version:3,sources:["/home/travis/build/erguotou520/vf-mock/src/components/Pagination.vue"],names:[],mappings:"AACA,eACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,mBAAoB,AACxB,oBAAsB,AACtB,6BAA8B,AAC9B,qBAAuB,CACxB,AACD,uBACE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,oBAAqB,AACrB,kBAAmB,AACnB,+BAAgC,AAChC,sBAAuB,AACvB,cAAe,AACf,yBAA0B,AAC1B,kBAAmB,AACnB,cAAgB,CACjB,AACD,kCACE,8BAAgC,CACjC,AACD,iCACE,cAAe,AACf,mBAAoB,AACpB,wBAA0B,CAC3B,AACD,6BACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB",file:"Pagination.vue",sourcesContent:["\n.ui-pagination {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #d3dce6;\n  background-color: #fff;\n}\n.ui-pagination .navs > a {\n  float: left;\n  width: 2rem;\n  height: 1.75rem;\n  line-height: 1.75rem;\n  text-align: center;\n  border-right: 1px solid #d3dce6;\n  background-color: #fff;\n  color: #475669;\n  border: 1px solid #d3dce6;\n  border-right: none;\n  cursor: pointer;\n}\n.ui-pagination .navs > a:last-child {\n  border-right: 1px solid #d3dce6;\n}\n.ui-pagination .navs > a[disabled] {\n  color: #c0ccda;\n  cursor: not-allowed;\n  background-color: #eff2f7;\n}\n.ui-pagination .navs > a:hover {\n  background-color: #20a0ff;\n  color: #fff;\n  border-color: #20a0ff;\n}"],sourceRoot:""}])},386:function(e,t,a){var n=a(381);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(355)("6d28ce42",n,!0)},387:function(e,t,a){var n=a(382);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(355)("97822a02",n,!0)},390:function(e,t,a){a(386);var n=a(17)(a(373),a(394),null,null);e.exports=n.exports},391:function(e,t,a){a(387);var n=a(17)(a(374),a(396),null,null);e.exports=n.exports},394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-data-table flex flex-1 flex-column"},[e.$slots.toolbar?a("div",{staticClass:"toolbar"},[e._t("toolbar")],2):e._e(),e._v(" "),a("div",{ref:"wrapper",staticClass:"data-table flex flex-1",style:{margin:e.full?"0 -1rem":"0"}},[e._t("default"),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("content-loading",{attrs:{show:e.pending}})],1)],2),e._v(" "),e.showPagination?a("pagination",{style:{margin:e.full?"0 -1rem -1rem":".5rem 0"},attrs:{current:e.page.current,total:e.page.total||0},on:{"page-change":e.onPageChange}}):e._e()],1)},staticRenderFns:[]}},395:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("content-module",{attrs:{name:"users"}},[a("el-breadcrumb",{staticStyle:{"margin-bottom":".5rem"},attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/dashboard"}},[e._v(e._s(e.$t("user.breadcrumb.home")))]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.$t("user.breadcrumb.current")))])],1),e._v(" "),a("data-table",{ref:"users",on:{"page-change":e.fetch}},[a("div",{attrs:{slot:"toolbar"},slot:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"plus"},nativeOn:{click:function(t){e.createUser(t)}}},[e._v(e._s(e.$t("operation.create")))])],1),e._v(" "),a("el-table",{attrs:{data:e.users,border:"",height:"100%"}},[a("el-table-column",{attrs:{property:"_id",label:"ID",sortable:"","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{property:"username",label:e.$t("user.model.username"),sortable:"","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{property:"role",label:e.$t("user.model.role"),"min-width":"90"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("operation.operation"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.deleteUser(t.row)}}},[e._v(e._s(e.$t("operation.remove")))])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.$t("user.create.title")},on:{close:e.cancelForm},model:{value:e.formVisible,callback:function(t){e.formVisible=t},expression:"formVisible"}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"close-on-click-modal":!1,"close-on-press-escape":!1}},[a("el-form-item",{attrs:{label:e.$t("user.model.username"),prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.form.username=t},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.model.password"),prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.form.password=t},expression:"form.password"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.formVisible=!1}}},[e._v(e._s(e.$t("confirm.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.saveForm(t)}}},[e._v(e._s(e.$t("confirm.ok")))])],1)],1)],1)},staticRenderFns:[]}},396:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-pagination"},[a("span",{staticClass:"current"},[e._v(e._s(e.$t("pagination.current"))+" "+e._s(e.current)+" "+e._s(e.$t("pagination.currentAppend"))+"  "+e._s(e.$t("pagination.pages"))+" "+e._s(e.pages)+" "+e._s(e.$t("pagination.pagesAppend")))]),e._v(" "),a("div",{staticClass:"navs"},[a("a",{attrs:{disabled:e.current<=1},on:{click:function(t){e.change(1,e.current<=1)}}},[a("span",{staticClass:"iconfont icon-home-page"})]),e._v(" "),a("a",{attrs:{disabled:e.current<=1},on:{click:function(t){e.change(e.current-1,e.current<=1)}}},[a("span",{staticClass:"el-icon-arrow-left"})]),e._v(" "),a("a",{attrs:{disabled:e.current>=e.pages},on:{click:function(t){e.change(e.current+1,e.current>=e.pages)}}},[a("span",{staticClass:"el-icon-arrow-right"})]),e._v(" "),a("a",{attrs:{disabled:e.current>=e.pages},on:{click:function(t){e.change(e.pages,e.current>=e.pages)}}},[a("span",{staticClass:"iconfont icon-last-page"})]),e._v(" "),a("a",{on:{click:function(t){e.$emit("page-change",e.current)}}},[a("span",{staticClass:"iconfont icon-refresh"})])])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.8660dc3fdef7485cb1ba.js.map