webpackJsonp([11],{628:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var d=e(728),t=function(n){return n&&n.__esModule?n:{default:n}}(d);o.default=t.default},647:function(n,o,e){o=n.exports=e(3)(),o.push([n.i,"\nh2[data-v-35da2094]{\n  font-size: 24px;\n  color:#333;\n  font-weight: 400;\n}\np[data-v-35da2094]{\n  font-size: 16px;\n  color:#666\n}\n.codeInput textarea[data-v-35da2094]{\n  background-color: #f9fafc;\n  border-radius: 0;\n}\n.demo[data-v-35da2094]{\n  margin-bottom: 0 !important;\n  padding: 30px;\n  border: 1px solid #eaeefb;\n}\n.demo-area.hover[data-v-35da2094]{\n  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);\n}\n.expand_area[data-v-35da2094] {\n  border-width: 0 1px;\n  border-style: solid;\n  border-color: #eaeefb;\n  background-color: #faf9fc;\n  border-bottom: 1px solid #eaeefb;\n  margin-bottom: 0 !important;\n}\n.expend[data-v-35da2094]{\n  border: 1px solid #eaeefb;\n  border-top: none;\n  text-align: center;\n  font-size: 14px;\n  padding: 10px;\n  color: #ccc;\n  cursor: pointer;\n}\n.demo-area.hover .expend[data-v-35da2094]{\n  color: #999;\n}\n.expend .ky-icon-arrow-down[data-v-35da2094]{\n  margin-right: 7px;\n  transition: .3s transform;\n}\n.demo-area.hover .expend[data-v-35da2094]:hover{\n  color: #20a0ff !important;\n  background-color: #f9fafc;\n}\n","",{version:3,sources:["/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/comm/codeBox/src/main.vue?77744bfe"],names:[],mappings:";AAmDA;EACA,gBAAA;EACA,WAAA;EACA,iBAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;CACA;AACA;EACA,4BAAA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,6EAAA;CACA;AAEA;EACA,oBAAA;EACA,oBAAA;EACA,sBAAA;EACA,0BAAA;EACA,iCAAA;EACA,4BAAA;CACA;AAEA;EACA,0BAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,kBAAA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;EACA,0BAAA;CACA",file:"main.vue",sourcesContent:['<template>\n  <div>\n    \x3c!--标题 s--\x3e\n    <h2>{{title}}</h2>\n    \x3c!--描述 s--\x3e\n    <p>{{description}}</p>\n    \x3c!--效果展示 s--\x3e\n    <div class="demo-area" @mouseenter="hover = true" @mouseleave="hover = false" :class="[hover && \'hover\']">\n      <ky-row class="demo">\n        <slot></slot>\n      </ky-row>\n      \x3c!--代码展示 s--\x3e\n      <ky-row v-if="isExpend" class="expand_area">\n        \x3c!--代码 s--\x3e\n        <ky-col :span="16" style="border-right: 1px solid #eaeefb;padding: 0 10px">\n          <pre style="overflow: auto;font-size: 15px;font-family: Menlo,Monaco,Consolas,Courier,monospace; line-height: 24px;color: #5e6d82">{{code}}</pre>\n        </ky-col>\n        \x3c!--解释 s--\x3e\n        <ky-col :span="8" style="font-size: 14px;padding: 10px;line-height: 24px;color: #5e6d82">\n          {{codeExplain}}\n        </ky-col>\n      </ky-row>\n      \x3c!--展开收起 s--\x3e\n      <ky-row class="expend">\n        <div @click="doExpend"><i class="ky-icon-arrow-down" :style="{transform : isExpend ? \'rotate(-180deg)\' : \'\'}"></i>{{isExpend ? \'收起代码\' : \'展开代码\'}}</div>\n      </ky-row>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    props:[\n      \'title\',\n      \'description\',\n      \'code\',\n      \'codeExplain\'\n    ],\n    data(){\n      return{\n        isExpend:false,\n        hover: false\n      }\n    },\n    methods: {\n      doExpend: function () {\n        this.isExpend = !this.isExpend\n      }\n    }\n  }\n<\/script>\n<style scoped>\n  h2{\n    font-size: 24px;\n    color:#333;\n    font-weight: 400;\n  }\n  p{\n    font-size: 16px;\n    color:#666\n  }\n  .codeInput textarea{\n    background-color: #f9fafc;\n    border-radius: 0;\n  }\n  .demo{\n    margin-bottom: 0 !important;\n    padding: 30px;\n    border: 1px solid #eaeefb;\n  }\n\n  .demo-area.hover{\n    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);\n  }\n\n  .expand_area {\n    border-width: 0 1px;\n    border-style: solid;\n    border-color: #eaeefb;\n    background-color: #faf9fc;\n    border-bottom: 1px solid #eaeefb;\n    margin-bottom: 0 !important;\n  }\n\n  .expend{\n    border: 1px solid #eaeefb;\n    border-top: none;\n    text-align: center;\n    font-size: 14px;\n    padding: 10px;\n    color: #ccc;\n    cursor: pointer;\n  }\n  .demo-area.hover .expend{\n    color: #999;\n  }\n  .expend .ky-icon-arrow-down{\n    margin-right: 7px;\n    transition: .3s transform;\n  }\n\n  .demo-area.hover .expend:hover{\n    color: #20a0ff !important;\n    background-color: #f9fafc;\n  }\n</style>\n'],sourceRoot:""}])},648:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var d=e(650),t=function(n){return n&&n.__esModule?n:{default:n}}(d);o.default=t.default},649:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["title","description","code","codeExplain"],data:function(){return{isExpend:!1,hover:!1}},methods:{doExpend:function(){this.isExpend=!this.isExpend}}}},650:function(n,o,e){e(652);var d=e(2)(e(649),e(651),"data-v-35da2094",null);d.options.__file="/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/comm/codeBox/src/main.vue",d.esModule&&Object.keys(d.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),function(){var o=e(0);o.install(e(1),!1),o.compatible&&(n.hot.accept(),n.hot.data?o.reload("data-v-35da2094",d.options):o.createRecord("data-v-35da2094",d.options))}(),n.exports=d.exports},651:function(n,o,e){n.exports={render:function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("h2",[n._v(n._s(n.title))]),n._v(" "),e("p",[n._v(n._s(n.description))]),n._v(" "),e("div",{staticClass:"demo-area",class:[n.hover&&"hover"],on:{mouseenter:function(o){n.hover=!0},mouseleave:function(o){n.hover=!1}}},[e("ky-row",{staticClass:"demo"},[n._t("default")],2),n._v(" "),n.isExpend?e("ky-row",{staticClass:"expand_area"},[e("ky-col",{staticStyle:{"border-right":"1px solid #eaeefb",padding:"0 10px"},attrs:{span:16}},[e("pre",{staticStyle:{overflow:"auto","font-size":"15px","font-family":"Menlo,Monaco,Consolas,Courier,monospace","line-height":"24px",color:"#5e6d82"}},[n._v(n._s(n.code))])]),n._v(" "),e("ky-col",{staticStyle:{"font-size":"14px",padding:"10px","line-height":"24px",color:"#5e6d82"},attrs:{span:8}},[n._v("\n        "+n._s(n.codeExplain)+"\n      ")])],1):n._e(),n._v(" "),e("ky-row",{staticClass:"expend"},[e("div",{on:{click:n.doExpend}},[e("i",{staticClass:"ky-icon-arrow-down",style:{transform:n.isExpend?"rotate(-180deg)":""}}),n._v(n._s(n.isExpend?"收起代码":"展开代码"))])])],1)])},staticRenderFns:[]},n.exports.render._withStripped=!0,n.hot.accept(),n.hot.data&&e(0).rerender("data-v-35da2094",n.exports)},652:function(n,o,e){var d=e(647);"string"==typeof d&&(d=[[n.i,d,""]]),d.locals&&(n.exports=d.locals);var t=e(4)("09990345",d,!1);d.locals||n.hot.accept(647,function(){var o=e(647);"string"==typeof o&&(o=[[n.i,o,""]]),t(o)}),n.hot.dispose(function(){t()})},676:function(n,o,e){o=n.exports=e(3)(),o.push([n.i,"\n.ky-col[data-v-80863372] {\n  text-align: center;\n  border-right: 1px solid #ccc;\n}\n.ky-col[data-v-80863372]:last-child {\n  border-right: 0;\n}\n.description[data-v-80863372] {\n  margin-bottom: 15px;\n  color: #afafaf;\n}\n.dropdown-des[data-v-80863372] {\n  margin: 45px 0 15px;\n}\n","",{version:3,sources:["/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/business/dropdown/src/main.vue?21fa5bd5"],names:[],mappings:";AAoTA;EACA,mBAAA;EACA,6BAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,oBAAA;EACA,eAAA;CACA;AACA;EACA,oBAAA;CACA",file:"main.vue",sourcesContent:['<template>\n  <div>\n    <h1>Dropdown 下拉菜单</h1>\n    <p>将动作或菜单折叠到下拉菜单中。</p>\n    <code-box\n            :title="codeDemos[0].title"\n            :description="codeDemos[0].description"\n            :code="codeDemos[0].code"\n            :codeExplain="codeDemos[0].codeExplain">\n      <ky-dropdown>\n        <span class="ky-dropdown-link">\n          下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n        </span>\n        <ky-dropdown-menu slot="dropdown">\n          <ky-dropdown-item>刷新</ky-dropdown-item>\n          <ky-dropdown-item>编辑</ky-dropdown-item>\n          <ky-dropdown-item>删除</ky-dropdown-item>\n        </ky-dropdown-menu>\n      </ky-dropdown>\n    </code-box>\n\n    <code-box\n            :title="codeDemos[1].title"\n            :description="codeDemos[1].description"\n            :code="codeDemos[1].code"\n            :codeExplain="codeDemos[1].codeExplain">\n      <ky-row>\n        <ky-col :span="12">\n          <div class="description">hover方式</div>\n          <ky-dropdown>\n            <span class="ky-dropdown-link">\n              下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n            </span>\n            <ky-dropdown-menu slot="dropdown">\n              <ky-dropdown-item>刷新</ky-dropdown-item>\n              <ky-dropdown-item>编辑</ky-dropdown-item>\n              <ky-dropdown-item>删除</ky-dropdown-item>\n            </ky-dropdown-menu>\n          </ky-dropdown>\n        </ky-col>\n        <ky-col :span="12">\n          <div class="description">click方式</div>\n          <ky-dropdown trigger="click">\n            <span class="ky-dropdown-link">\n              下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n            </span>\n            <ky-dropdown-menu slot="dropdown">\n              <ky-dropdown-item>刷新</ky-dropdown-item>\n              <ky-dropdown-item>编辑</ky-dropdown-item>\n              <ky-dropdown-item disabled>删除</ky-dropdown-item>\n            </ky-dropdown-menu>\n          </ky-dropdown>\n        </ky-col>\n      </ky-row>\n    </code-box>\n\n    <code-box\n            :title="codeDemos[2].title"\n            :description="codeDemos[2].description"\n            :code="codeDemos[2].code"\n            :codeExplain="codeDemos[2].codeExplain">\n      <ky-dropdown @command="handleCommand">\n        <span class="ky-dropdown-link">\n          下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n        </span>\n        <ky-dropdown-menu slot="dropdown">\n          <ky-dropdown-item command="refresh">刷新</ky-dropdown-item>\n          <ky-dropdown-item command="edit">编辑</ky-dropdown-item>\n          <ky-dropdown-item command="delete">删除</ky-dropdown-item>\n        </ky-dropdown-menu>\n      </ky-dropdown>\n    </code-box>\n\n    <code-box\n            :title="codeDemos[3].title"\n            :description="codeDemos[3].description"\n            :code="codeDemos[3].code"\n            :codeExplain="codeDemos[3].codeExplain">\n      <ky-dropdown :hide-on-click="false">\n        <span class="ky-dropdown-link">\n          下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n        </span>\n        <ky-dropdown-menu slot="dropdown">\n          <ky-dropdown-item>刷新</ky-dropdown-item>\n          <ky-dropdown-item>编辑</ky-dropdown-item>\n          <ky-dropdown-item>删除</ky-dropdown-item>\n        </ky-dropdown-menu>\n      </ky-dropdown>\n    </code-box>\n\n    <h2 class="dropdown-des">Dropdown Attributes</h2>\n    <ky-table\n            :data="attributesData"\n            style="width: 100%">\n      <ky-table-column\n              prop="params"\n              label="参数"\n              width="140">\n      </ky-table-column>\n      <ky-table-column\n              prop="mark"\n              label="说明"\n              width="300">\n      </ky-table-column>\n      <ky-table-column\n              prop="type"\n              label="类型">\n      </ky-table-column>\n      <ky-table-column\n              prop="available_value"\n              label="可选值">\n      </ky-table-column>\n      <ky-table-column\n              prop="default_value"\n              label="默认值">\n      </ky-table-column>\n    </ky-table>\n\n    <h2 class="dropdown-des">Dropdown Events</h2>\n    <ky-table\n            :data="eventsData"\n            style="width: 100%">\n      <ky-table-column\n              prop="eventsName"\n              label="事件名称"\n              width="140">\n      </ky-table-column>\n      <ky-table-column\n              prop="mark"\n              label="说明">\n      </ky-table-column>\n      <ky-table-column\n              prop="cbParams"\n              label="回调参数">\n      </ky-table-column>\n    </ky-table>\n\n    <h2 class="dropdown-des">Dropdown Menu Item Attributes</h2>\n    <ky-table\n            :data="menuItemAttributesData"\n            style="width: 100%">\n      <ky-table-column\n              prop="params"\n              label="参数"\n              width="140">\n      </ky-table-column>\n      <ky-table-column\n              prop="mark"\n              label="说明">\n      </ky-table-column>\n      <ky-table-column\n              prop="type"\n              label="类型">\n      </ky-table-column>\n      <ky-table-column\n              prop="available_value"\n              label="可选值">\n      </ky-table-column>\n      <ky-table-column\n              prop="default_value"\n              label="默认值">\n      </ky-table-column>\n    </ky-table>\n  </div>\n</template>\n<script>\n  import codeBox from \'../../../comm/codeBox\'\n  export default {\n    data(){\n      return {\n        codeDemos: [\n          {\n            title: \'基础用法\',\n            description: \'鼠标移动到下拉菜单上时，展开下拉菜单。\',\n            codeExplain: `通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。默认是当鼠标悬停在下拉菜单按钮上时下拉菜单显示。`,\n            code:`\n    <ky-dropdown>\n      <span class="ky-dropdown-link">\n        下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n      </span>\n      <ky-dropdown-menu slot="dropdown">\n        <ky-dropdown-item>刷新</ky-dropdown-item>\n        <ky-dropdown-item>编辑</ky-dropdown-item>\n        <ky-dropdown-item>删除</ky-dropdown-item>\n      </ky-dropdown-menu>\n    </ky-dropdown>`\n          },{\n            title: \'触发方式\',\n            description: \'可通过hover或click方式触发下拉菜单的显示。\',\n            codeExplain: `如需通过点击的方式触发，设置trigger属性为click即可。`,\n            code:`\n    <ky-row>\n      <ky-col :span="12">\n        <div class="description">hover方式</div>\n        <ky-dropdown>\n          <span class="ky-dropdown-link">\n            下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n          </span>\n          <ky-dropdown-menu slot="dropdown">\n            <ky-dropdown-item>刷新</ky-dropdown-item>\n            <ky-dropdown-item>编辑</ky-dropdown-item>\n            <ky-dropdown-item>删除</ky-dropdown-item>\n          </ky-dropdown-menu>\n        </ky-dropdown>\n      </ky-col>\n      <ky-col :span="12">\n        <div class="description">click方式</div>\n        <ky-dropdown trigger="click">\n          <span class="ky-dropdown-link">\n            下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n          </span>\n          <ky-dropdown-menu slot="dropdown">\n            <ky-dropdown-item>刷新</ky-dropdown-item>\n            <ky-dropdown-item>编辑</ky-dropdown-item>\n            <ky-dropdown-item disabled>删除</ky-dropdown-item>\n          </ky-dropdown-menu>\n        </ky-dropdown>\n      </ky-col>\n    </ky-row>`\n          },{\n            title: \'菜单项点击事件\',\n            description: \'点击菜单项后会触发事件，用户可以通过相应的菜单项进行不同的操作。\',\n            codeExplain: `在组件kyDropdown上监听菜单项点击事件command，处理函数中通过为各菜单项设置的command指令的不同值来区分。`,\n            code:`\n    <ky-dropdown @command="handleCommand">\n      <span class="ky-dropdown-link">\n        下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n      </span>\n      <ky-dropdown-menu slot="dropdown">\n        <ky-dropdown-item command="refresh">刷新</ky-dropdown-item>\n        <ky-dropdown-item command="edit">编辑</ky-dropdown-item>\n        <ky-dropdown-item command="delete">删除</ky-dropdown-item>\n      </ky-dropdown-menu>\n    </ky-dropdown>\n    <script>\n      export default {\n        methods: {\n          handleCommand(command) {\n            this.$message(\'您点击了Item \' + command);\n          }\n        }\n      }\n    <\\/script>`\n            },{\n            title: \'菜单隐藏方式\',\n            description: \'可通过设置hide-on-click属性，改变下拉菜单的隐藏方式。\',\n            codeExplain: `默认在点击了菜单项后隐藏下拉菜单，设置hide-on-click属性为false可关闭此功能。`,\n            code:`\n    <ky-dropdown :hide-on-click="false">\n      <span class="ky-dropdown-link">\n        下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n      </span>\n      <ky-dropdown-menu slot="dropdown">\n        <ky-dropdown-item>刷新</ky-dropdown-item>\n        <ky-dropdown-item>编辑</ky-dropdown-item>\n        <ky-dropdown-item>删除</ky-dropdown-item>\n      </ky-dropdown-menu>\n    </ky-dropdown>`\n          }\n        ],\n        attributesData: [{\n            params: \'trigger\',\n            mark: \'下拉菜单的触发方式\',\n            type: \'string\',\n            available_value: \'hover, click\',\n            default_value: \'hover\'\n        }, {\n          params: \'hide-on-click\',\n          mark: \'是否在点击菜单项后隐藏菜单\',\n          type: \'boolean\',\n          available_value: \'-\',\n          default_value: \'true\'\n        }],\n        eventsData:[{\n          eventsName: \'command\',\n          mark: \'点击菜单项触发的事件回调\',\n          cbParams: \'kyDropdownItem中command指令的值\'\n        },{\n          eventsName: \'visible-change\',\n          mark: \'下拉框出现／隐藏时触发\',\n          cbParams: \'出现时为true，隐藏时为false\'\n        }],\n        menuItemAttributesData: [{\n          params: \'command\',\n          mark: \'指令\',\n          type: \'string/number/object\',\n          available_value: \'-\',\n          default_value: \'-\'\n        }, {\n          params: \'disabled\',\n          mark: \'禁用\',\n          type: \'boolean\',\n          available_value: \'-\',\n          default_value: \'false\'\n        }]\n      }\n    },\n    methods: {\n      handleCommand: function(command) {\n        this.$message(\'您点击了Item \' + command);\n      }\n    },\n    components: {\n      codeBox\n    }\n  }\n<\/script>\n<style scoped>\n  .ky-col {\n    text-align: center;\n    border-right: 1px solid #ccc;\n  }\n\n  .ky-col:last-child {\n    border-right: 0;\n  }\n\n  .description {\n    margin-bottom: 15px;\n    color: #afafaf;\n  }\n  .dropdown-des {\n    margin: 45px 0 15px;\n  }\n</style>'],sourceRoot:""}])},692:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var d=e(648),t=function(n){return n&&n.__esModule?n:{default:n}}(d);o.default={data:function(){return{codeDemos:[{title:"基础用法",description:"鼠标移动到下拉菜单上时，展开下拉菜单。",codeExplain:"通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。默认是当鼠标悬停在下拉菜单按钮上时下拉菜单显示。",code:'\n  <ky-dropdown>\n    <span class="ky-dropdown-link">\n      下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n    </span>\n    <ky-dropdown-menu slot="dropdown">\n      <ky-dropdown-item>刷新</ky-dropdown-item>\n      <ky-dropdown-item>编辑</ky-dropdown-item>\n      <ky-dropdown-item>删除</ky-dropdown-item>\n    </ky-dropdown-menu>\n  </ky-dropdown>'},{title:"触发方式",description:"可通过hover或click方式触发下拉菜单的显示。",codeExplain:"如需通过点击的方式触发，设置trigger属性为click即可。",code:'\n  <ky-row>\n    <ky-col :span="12">\n      <div class="description">hover方式</div>\n      <ky-dropdown>\n        <span class="ky-dropdown-link">\n          下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n        </span>\n        <ky-dropdown-menu slot="dropdown">\n          <ky-dropdown-item>刷新</ky-dropdown-item>\n          <ky-dropdown-item>编辑</ky-dropdown-item>\n          <ky-dropdown-item>删除</ky-dropdown-item>\n        </ky-dropdown-menu>\n      </ky-dropdown>\n    </ky-col>\n    <ky-col :span="12">\n      <div class="description">click方式</div>\n      <ky-dropdown trigger="click">\n        <span class="ky-dropdown-link">\n          下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n        </span>\n        <ky-dropdown-menu slot="dropdown">\n          <ky-dropdown-item>刷新</ky-dropdown-item>\n          <ky-dropdown-item>编辑</ky-dropdown-item>\n          <ky-dropdown-item disabled>删除</ky-dropdown-item>\n        </ky-dropdown-menu>\n      </ky-dropdown>\n    </ky-col>\n  </ky-row>'},{title:"菜单项点击事件",description:"点击菜单项后会触发事件，用户可以通过相应的菜单项进行不同的操作。",codeExplain:"在组件kyDropdown上监听菜单项点击事件command，处理函数中通过为各菜单项设置的command指令的不同值来区分。",code:'\n  <ky-dropdown @command="handleCommand">\n    <span class="ky-dropdown-link">\n      下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n    </span>\n    <ky-dropdown-menu slot="dropdown">\n      <ky-dropdown-item command="refresh">刷新</ky-dropdown-item>\n      <ky-dropdown-item command="edit">编辑</ky-dropdown-item>\n      <ky-dropdown-item command="delete">删除</ky-dropdown-item>\n    </ky-dropdown-menu>\n  </ky-dropdown>\n  <script>\n    export default {\n      methods: {\n        handleCommand(command) {\n          this.$message(\'您点击了Item \' + command);\n        }\n      }\n    }\n  <\/script>'},{title:"菜单隐藏方式",description:"可通过设置hide-on-click属性，改变下拉菜单的隐藏方式。",codeExplain:"默认在点击了菜单项后隐藏下拉菜单，设置hide-on-click属性为false可关闭此功能。",code:'\n  <ky-dropdown :hide-on-click="false">\n    <span class="ky-dropdown-link">\n      下拉菜单<i class="ky-icon-caret-bottom ky-icon--right"></i>\n    </span>\n    <ky-dropdown-menu slot="dropdown">\n      <ky-dropdown-item>刷新</ky-dropdown-item>\n      <ky-dropdown-item>编辑</ky-dropdown-item>\n      <ky-dropdown-item>删除</ky-dropdown-item>\n    </ky-dropdown-menu>\n  </ky-dropdown>'}],attributesData:[{params:"trigger",mark:"下拉菜单的触发方式",type:"string",available_value:"hover, click",default_value:"hover"},{params:"hide-on-click",mark:"是否在点击菜单项后隐藏菜单",type:"boolean",available_value:"-",default_value:"true"}],eventsData:[{eventsName:"command",mark:"点击菜单项触发的事件回调",cbParams:"kyDropdownItem中command指令的值"},{eventsName:"visible-change",mark:"下拉框出现／隐藏时触发",cbParams:"出现时为true，隐藏时为false"}],menuItemAttributesData:[{params:"command",mark:"指令",type:"string/number/object",available_value:"-",default_value:"-"},{params:"disabled",mark:"禁用",type:"boolean",available_value:"-",default_value:"false"}]}},methods:{handleCommand:function(n){this.$message("您点击了Item "+n)}},components:{codeBox:t.default}}},728:function(n,o,e){e(794);var d=e(2)(e(692),e(770),"data-v-80863372",null);d.options.__file="/Users/jiangsijie/Documents/kyee_ui/demo/src/views/docs/business/dropdown/src/main.vue",d.esModule&&Object.keys(d.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),function(){var o=e(0);o.install(e(1),!1),o.compatible&&(n.hot.accept(),n.hot.data?o.reload("data-v-80863372",d.options):o.createRecord("data-v-80863372",d.options))}(),n.exports=d.exports},770:function(n,o,e){n.exports={render:function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("h1",[n._v("Dropdown 下拉菜单")]),n._v(" "),e("p",[n._v("将动作或菜单折叠到下拉菜单中。")]),n._v(" "),e("code-box",{attrs:{title:n.codeDemos[0].title,description:n.codeDemos[0].description,code:n.codeDemos[0].code,codeExplain:n.codeDemos[0].codeExplain}},[e("ky-dropdown",[e("span",{staticClass:"ky-dropdown-link"},[n._v("\n        下拉菜单"),e("i",{staticClass:"ky-icon-caret-bottom ky-icon--right"})]),n._v(" "),e("ky-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("ky-dropdown-item",[n._v("刷新")]),n._v(" "),e("ky-dropdown-item",[n._v("编辑")]),n._v(" "),e("ky-dropdown-item",[n._v("删除")])],1)],1)],1),n._v(" "),e("code-box",{attrs:{title:n.codeDemos[1].title,description:n.codeDemos[1].description,code:n.codeDemos[1].code,codeExplain:n.codeDemos[1].codeExplain}},[e("ky-row",[e("ky-col",{attrs:{span:12}},[e("div",{staticClass:"description"},[n._v("hover方式")]),n._v(" "),e("ky-dropdown",[e("span",{staticClass:"ky-dropdown-link"},[n._v("\n            下拉菜单"),e("i",{staticClass:"ky-icon-caret-bottom ky-icon--right"})]),n._v(" "),e("ky-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("ky-dropdown-item",[n._v("刷新")]),n._v(" "),e("ky-dropdown-item",[n._v("编辑")]),n._v(" "),e("ky-dropdown-item",[n._v("删除")])],1)],1)],1),n._v(" "),e("ky-col",{attrs:{span:12}},[e("div",{staticClass:"description"},[n._v("click方式")]),n._v(" "),e("ky-dropdown",{attrs:{trigger:"click"}},[e("span",{staticClass:"ky-dropdown-link"},[n._v("\n            下拉菜单"),e("i",{staticClass:"ky-icon-caret-bottom ky-icon--right"})]),n._v(" "),e("ky-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("ky-dropdown-item",[n._v("刷新")]),n._v(" "),e("ky-dropdown-item",[n._v("编辑")]),n._v(" "),e("ky-dropdown-item",{attrs:{disabled:""}},[n._v("删除")])],1)],1)],1)],1)],1),n._v(" "),e("code-box",{attrs:{title:n.codeDemos[2].title,description:n.codeDemos[2].description,code:n.codeDemos[2].code,codeExplain:n.codeDemos[2].codeExplain}},[e("ky-dropdown",{on:{command:n.handleCommand}},[e("span",{staticClass:"ky-dropdown-link"},[n._v("\n        下拉菜单"),e("i",{staticClass:"ky-icon-caret-bottom ky-icon--right"})]),n._v(" "),e("ky-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("ky-dropdown-item",{attrs:{command:"refresh"}},[n._v("刷新")]),n._v(" "),e("ky-dropdown-item",{attrs:{command:"edit"}},[n._v("编辑")]),n._v(" "),e("ky-dropdown-item",{attrs:{command:"delete"}},[n._v("删除")])],1)],1)],1),n._v(" "),e("code-box",{attrs:{title:n.codeDemos[3].title,description:n.codeDemos[3].description,code:n.codeDemos[3].code,codeExplain:n.codeDemos[3].codeExplain}},[e("ky-dropdown",{attrs:{"hide-on-click":!1}},[e("span",{staticClass:"ky-dropdown-link"},[n._v("\n        下拉菜单"),e("i",{staticClass:"ky-icon-caret-bottom ky-icon--right"})]),n._v(" "),e("ky-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("ky-dropdown-item",[n._v("刷新")]),n._v(" "),e("ky-dropdown-item",[n._v("编辑")]),n._v(" "),e("ky-dropdown-item",[n._v("删除")])],1)],1)],1),n._v(" "),e("h2",{staticClass:"dropdown-des"},[n._v("Dropdown Attributes")]),n._v(" "),e("ky-table",{staticStyle:{width:"100%"},attrs:{data:n.attributesData}},[e("ky-table-column",{attrs:{prop:"params",label:"参数",width:"140"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"mark",label:"说明",width:"300"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"type",label:"类型"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"available_value",label:"可选值"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"default_value",label:"默认值"}})],1),n._v(" "),e("h2",{staticClass:"dropdown-des"},[n._v("Dropdown Events")]),n._v(" "),e("ky-table",{staticStyle:{width:"100%"},attrs:{data:n.eventsData}},[e("ky-table-column",{attrs:{prop:"eventsName",label:"事件名称",width:"140"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"mark",label:"说明"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"cbParams",label:"回调参数"}})],1),n._v(" "),e("h2",{staticClass:"dropdown-des"},[n._v("Dropdown Menu Item Attributes")]),n._v(" "),e("ky-table",{staticStyle:{width:"100%"},attrs:{data:n.menuItemAttributesData}},[e("ky-table-column",{attrs:{prop:"params",label:"参数",width:"140"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"mark",label:"说明"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"type",label:"类型"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"available_value",label:"可选值"}}),n._v(" "),e("ky-table-column",{attrs:{prop:"default_value",label:"默认值"}})],1)],1)},staticRenderFns:[]},n.exports.render._withStripped=!0,n.hot.accept(),n.hot.data&&e(0).rerender("data-v-80863372",n.exports)},794:function(n,o,e){var d=e(676);"string"==typeof d&&(d=[[n.i,d,""]]),d.locals&&(n.exports=d.locals);var t=e(4)("7bdd6f28",d,!1);d.locals||n.hot.accept(676,function(){var o=e(676);"string"==typeof o&&(o=[[n.i,o,""]]),t(o)}),n.hot.dispose(function(){t()})}});