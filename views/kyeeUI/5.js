webpackJsonp([5],{642:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(742),t=function(n){return n&&n.__esModule?n:{default:n}}(a);e.default=t.default},647:function(n,e,o){e=n.exports=o(3)(),e.push([n.i,"\nh2[data-v-35da2094]{\n  font-size: 24px;\n  color:#333;\n  font-weight: 400;\n}\np[data-v-35da2094]{\n  font-size: 16px;\n  color:#666\n}\n.codeInput textarea[data-v-35da2094]{\n  background-color: #f9fafc;\n  border-radius: 0;\n}\n.demo[data-v-35da2094]{\n  margin-bottom: 0 !important;\n  padding: 30px;\n  border: 1px solid #eaeefb;\n}\n.demo-area.hover[data-v-35da2094]{\n  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);\n}\n.expand_area[data-v-35da2094] {\n  border-width: 0 1px;\n  border-style: solid;\n  border-color: #eaeefb;\n  background-color: #faf9fc;\n  border-bottom: 1px solid #eaeefb;\n  margin-bottom: 0 !important;\n}\n.expend[data-v-35da2094]{\n  border: 1px solid #eaeefb;\n  border-top: none;\n  text-align: center;\n  font-size: 14px;\n  padding: 10px;\n  color: #ccc;\n  cursor: pointer;\n}\n.demo-area.hover .expend[data-v-35da2094]{\n  color: #999;\n}\n.expend .ky-icon-arrow-down[data-v-35da2094]{\n  margin-right: 7px;\n  transition: .3s transform;\n}\n.demo-area.hover .expend[data-v-35da2094]:hover{\n  color: #20a0ff !important;\n  background-color: #f9fafc;\n}\n","",{version:3,sources:["/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/comm/codeBox/src/main.vue?77744bfe"],names:[],mappings:";AAmDA;EACA,gBAAA;EACA,WAAA;EACA,iBAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;CACA;AACA;EACA,4BAAA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,6EAAA;CACA;AAEA;EACA,oBAAA;EACA,oBAAA;EACA,sBAAA;EACA,0BAAA;EACA,iCAAA;EACA,4BAAA;CACA;AAEA;EACA,0BAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,kBAAA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;EACA,0BAAA;CACA",file:"main.vue",sourcesContent:['<template>\n  <div>\n    \x3c!--标题 s--\x3e\n    <h2>{{title}}</h2>\n    \x3c!--描述 s--\x3e\n    <p>{{description}}</p>\n    \x3c!--效果展示 s--\x3e\n    <div class="demo-area" @mouseenter="hover = true" @mouseleave="hover = false" :class="[hover && \'hover\']">\n      <ky-row class="demo">\n        <slot></slot>\n      </ky-row>\n      \x3c!--代码展示 s--\x3e\n      <ky-row v-if="isExpend" class="expand_area">\n        \x3c!--代码 s--\x3e\n        <ky-col :span="16" style="border-right: 1px solid #eaeefb;padding: 0 10px">\n          <pre style="overflow: auto;font-size: 15px;font-family: Menlo,Monaco,Consolas,Courier,monospace; line-height: 24px;color: #5e6d82">{{code}}</pre>\n        </ky-col>\n        \x3c!--解释 s--\x3e\n        <ky-col :span="8" style="font-size: 14px;padding: 10px;line-height: 24px;color: #5e6d82">\n          {{codeExplain}}\n        </ky-col>\n      </ky-row>\n      \x3c!--展开收起 s--\x3e\n      <ky-row class="expend">\n        <div @click="doExpend"><i class="ky-icon-arrow-down" :style="{transform : isExpend ? \'rotate(-180deg)\' : \'\'}"></i>{{isExpend ? \'收起代码\' : \'展开代码\'}}</div>\n      </ky-row>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    props:[\n      \'title\',\n      \'description\',\n      \'code\',\n      \'codeExplain\'\n    ],\n    data(){\n      return{\n        isExpend:false,\n        hover: false\n      }\n    },\n    methods: {\n      doExpend: function () {\n        this.isExpend = !this.isExpend\n      }\n    }\n  }\n<\/script>\n<style scoped>\n  h2{\n    font-size: 24px;\n    color:#333;\n    font-weight: 400;\n  }\n  p{\n    font-size: 16px;\n    color:#666\n  }\n  .codeInput textarea{\n    background-color: #f9fafc;\n    border-radius: 0;\n  }\n  .demo{\n    margin-bottom: 0 !important;\n    padding: 30px;\n    border: 1px solid #eaeefb;\n  }\n\n  .demo-area.hover{\n    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);\n  }\n\n  .expand_area {\n    border-width: 0 1px;\n    border-style: solid;\n    border-color: #eaeefb;\n    background-color: #faf9fc;\n    border-bottom: 1px solid #eaeefb;\n    margin-bottom: 0 !important;\n  }\n\n  .expend{\n    border: 1px solid #eaeefb;\n    border-top: none;\n    text-align: center;\n    font-size: 14px;\n    padding: 10px;\n    color: #ccc;\n    cursor: pointer;\n  }\n  .demo-area.hover .expend{\n    color: #999;\n  }\n  .expend .ky-icon-arrow-down{\n    margin-right: 7px;\n    transition: .3s transform;\n  }\n\n  .demo-area.hover .expend:hover{\n    color: #20a0ff !important;\n    background-color: #f9fafc;\n  }\n</style>\n'],sourceRoot:""}])},648:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(650),t=function(n){return n&&n.__esModule?n:{default:n}}(a);e.default=t.default},649:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","description","code","codeExplain"],data:function(){return{isExpend:!1,hover:!1}},methods:{doExpend:function(){this.isExpend=!this.isExpend}}}},650:function(n,e,o){o(652);var a=o(2)(o(649),o(651),"data-v-35da2094",null);a.options.__file="/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/comm/codeBox/src/main.vue",a.esModule&&Object.keys(a.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),function(){var e=o(0);e.install(o(1),!1),e.compatible&&(n.hot.accept(),n.hot.data?e.reload("data-v-35da2094",a.options):e.createRecord("data-v-35da2094",a.options))}(),n.exports=a.exports},651:function(n,e,o){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("h2",[n._v(n._s(n.title))]),n._v(" "),o("p",[n._v(n._s(n.description))]),n._v(" "),o("div",{staticClass:"demo-area",class:[n.hover&&"hover"],on:{mouseenter:function(e){n.hover=!0},mouseleave:function(e){n.hover=!1}}},[o("ky-row",{staticClass:"demo"},[n._t("default")],2),n._v(" "),n.isExpend?o("ky-row",{staticClass:"expand_area"},[o("ky-col",{staticStyle:{"border-right":"1px solid #eaeefb",padding:"0 10px"},attrs:{span:16}},[o("pre",{staticStyle:{overflow:"auto","font-size":"15px","font-family":"Menlo,Monaco,Consolas,Courier,monospace","line-height":"24px",color:"#5e6d82"}},[n._v(n._s(n.code))])]),n._v(" "),o("ky-col",{staticStyle:{"font-size":"14px",padding:"10px","line-height":"24px",color:"#5e6d82"},attrs:{span:8}},[n._v("\n        "+n._s(n.codeExplain)+"\n      ")])],1):n._e(),n._v(" "),o("ky-row",{staticClass:"expend"},[o("div",{on:{click:n.doExpend}},[o("i",{staticClass:"ky-icon-arrow-down",style:{transform:n.isExpend?"rotate(-180deg)":""}}),n._v(n._s(n.isExpend?"收起代码":"展开代码"))])])],1)])},staticRenderFns:[]},n.exports.render._withStripped=!0,n.hot.accept(),n.hot.data&&o(0).rerender("data-v-35da2094",n.exports)},652:function(n,e,o){var a=o(647);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var t=o(4)("09990345",a,!1);a.locals||n.hot.accept(647,function(){var e=o(647);"string"==typeof e&&(e=[[n.i,e,""]]),t(e)}),n.hot.dispose(function(){t()})},663:function(n,e,o){e=n.exports=o(3)(),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"main.vue",sourceRoot:""}])},705:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(648),t=function(n){return n&&n.__esModule?n:{default:n}}(a);e.default={data:function(){return{codeDemos:[{title:"基本用法",description:"从顶部出现，默认全屏显示",codeExplain:"可以通过this.$window({title:'',src:''})调用，默认全屏显示，可以设置width、height。",code:'this.$window({title:"测试",src:"http://www.bootcdn.cn/"})'}],tableData:[{params:"title",mark:"window的标题",type:"string",available_value:"—",default_value:"—"},{params:"height",mark:"window的height",type:"string",available_value:"—",default_value:"—"},{params:"width",mark:"window的width",type:"string",available_value:"—",default_value:"—"},{params:"top",mark:"window距离顶部的距离",type:"string",available_value:"—",default_value:"—"},{params:"right",mark:"window距离右边的距离",type:"string",available_value:"—",default_value:"—"},{params:"left",mark:"window距离左边的距离",type:"string",available_value:"—",default_value:"—"},{params:"bottom",mark:"window距离底部的距离",type:"string",available_value:"—",default_value:"—"},{params:"src",mark:"window的src",type:"string",available_value:"—",default_value:"—"},{params:"modal",mark:"是否需要遮罩层",type:"boolean",available_value:"—",default_value:"true"},{params:"modal-append-to-body",mark:"遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Window 的父元素上",type:"boolean",available_value:"—",default_value:"true"},{params:"lock-scroll",mark:"是否在 Window 出现时将 body 滚动锁定",type:"boolean",available_value:"—",default_value:"true"},{params:"custom-class",mark:"Window 的自定义类名",type:"string",available_value:"—",default_value:"—"},{params:"close-on-click-modal",mark:"是否可以通过点击 modal 关闭 Window",type:"boolean",available_value:"—",default_value:"true"},{params:"close-on-press-escape",mark:"是否可以通过按下 ESC 关闭 Window",type:"boolean",available_value:"—",default_value:"true"},{params:"show-close",mark:"是否显示关闭按钮",type:"boolean",available_value:"—",default_value:"true"},{params:"before-close",mark:"关闭前的回调，会暂停 Window 的关闭",type:"function(done)，done 用于关闭 Window",available_value:"—",default_value:"—"}]}},methods:{showWindow:function(){this.$window({title:"测试",src:"http://www.bootcdn.cn/",height:"400px",beforeClose:function(n){n()}})}},components:{codeBox:t.default}}},742:function(n,e,o){o(781);var a=o(2)(o(705),o(753),null,null);a.options.__file="/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/business/window/src/main.vue",a.esModule&&Object.keys(a.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),function(){var e=o(0);e.install(o(1),!1),e.compatible&&(n.hot.accept(),n.hot.data?e.reload("data-v-2c92c808",a.options):e.createRecord("data-v-2c92c808",a.options))}(),n.exports=a.exports},753:function(n,e,o){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("h1",[n._v("Window 窗口")]),n._v(" "),o("p",[n._v("该窗口是一个浮动层形成的可拖动面板，可以用来作为一个应用程序窗口。默认情况下，一个窗口可以移动，调整大小和关闭。\n    无论是作为静态HTML或通过AJAX动态加载其内容也可以被定义。")]),n._v(" "),o("code-box",{attrs:{title:n.codeDemos[0].title,description:n.codeDemos[0].description,code:n.codeDemos[0].code,codeExplain:n.codeDemos[0].codeExplain}},[o("ky-button",{on:{click:n.showWindow}},[n._v("打开window")])],1),n._v(" "),o("h2",[n._v("Options")]),n._v(" "),o("ky-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData}},[o("ky-table-column",{attrs:{prop:"params",label:"参数",width:"180"}}),n._v(" "),o("ky-table-column",{attrs:{prop:"mark",label:"说明",width:"180"}}),n._v(" "),o("ky-table-column",{attrs:{prop:"type",label:"类型"}}),n._v(" "),o("ky-table-column",{attrs:{prop:"available_value",label:"可选值"}}),n._v(" "),o("ky-table-column",{attrs:{prop:"default_value",label:"默认值"}})],1)],1)},staticRenderFns:[]},n.exports.render._withStripped=!0,n.hot.accept(),n.hot.data&&o(0).rerender("data-v-2c92c808",n.exports)},781:function(n,e,o){var a=o(663);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var t=o(4)("27d5c357",a,!1);a.locals||n.hot.accept(663,function(){var e=o(663);"string"==typeof e&&(e=[[n.i,e,""]]),t(e)}),n.hot.dispose(function(){t()})}});