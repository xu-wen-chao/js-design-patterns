(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{283:function(r,t,e){"use strict";e.r(t);var a=e(0),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"为什么选择-rollup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-rollup","aria-hidden":"true"}},[r._v("#")]),r._v(" 为什么选择 rollup")]),r._v(" "),e("h2",{attrs:{id:"rollup-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup-简介","aria-hidden":"true"}},[r._v("#")]),r._v(" rollup 简介")]),r._v(" "),e("p",[r._v("如对前端工程化稍有关注，那么我们经常可以看见 rollup 的身影，比如 vue、react 以及最近出来的构建工具 vite，它们有都用到 rollup。")]),r._v(" "),e("p",[r._v("简单来说 rollup 就是一个 JavaScript 模块构建工具，那么它与我们更为熟悉的 webpack 有什么区别呢？下面将介绍、分析 rollup 的特性，及其应用场景。")]),r._v(" "),e("h2",{attrs:{id:"rollup-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup-特性","aria-hidden":"true"}},[r._v("#")]),r._v(" rollup 特性")]),r._v(" "),e("p",[r._v("rollup 使用的是 ES6 标准的模块机制，也就是常见的 import、export。能支持导入、导出 ES 模块，同时支持导出 common.js、AMD、IIEF 等模块、脚本。")]),r._v(" "),e("h2",{attrs:{id:"rollup-优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup-优势","aria-hidden":"true"}},[r._v("#")]),r._v(" rollup 优势")]),r._v(" "),e("p",[r._v("rollup 不仅使用 ES 模块，而且会对代码进行静态分析（ES 模块的静态特性，也是静态分析的前提） ，在构建、编译阶段分析、移除未使用到的代码，也就是所谓的"),e("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[r._v("tree-shaking"),e("OutboundLink")],1),r._v("。")]),r._v(" "),e("p",[r._v("这也是为什么 rollup 的构建输出体积更小、速度更快的原因。")]),r._v(" "),e("h3",{attrs:{id:"es-模块与-commonjs-模块的不同、优劣"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es-模块与-commonjs-模块的不同、优劣","aria-hidden":"true"}},[r._v("#")]),r._v(" ES 模块与 commonjs 模块的不同、优劣")]),r._v(" "),e("h4",{attrs:{id:"es-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es-模块","aria-hidden":"true"}},[r._v("#")]),r._v(" ES 模块")]),r._v(" "),e("p",[r._v("ES 模块的静态特性，在编译阶段就确定模块的依赖关系，所以不能用于需要在代码运行时才能确定的语法结构中。比如：")]),r._v(" "),e("ol",[e("li",[r._v("import 不能出现在 function、if-else 中。")]),r._v(" "),e("li",[r._v("import 的模块名只能是字符串常量，不能是变量。")]),r._v(" "),e("li",[r._v("通过 import 绑定声明的变量无法重新赋值。")])]),r._v(" "),e("h4",{attrs:{id:"commonjs-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块","aria-hidden":"true"}},[r._v("#")]),r._v(" commonjs 模块")]),r._v(" "),e("p",[r._v("与 ES 模块相反的是，commonjs 是动态的，允许更加灵活的使用，比如条件 require、require 模块名使用变量等，如下。")]),r._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("const")]),r._v(" module_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v("=")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[r._v("'lodash'")]),r._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),r._v("module_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("if")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[r._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[r._v("'lodash'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])])]),e("p",[r._v("但这种便利也让工具无法在编译阶段就能确定模块之间的依赖，无法做静态分析，导致难以进行 tree-shaking 等优化。所以从这个角度看 ES 模块机制是要优秀于 commonjs 等动态模块机制。")]),r._v(" "),e("h2",{attrs:{id:"rollup-or-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup-or-webpack","aria-hidden":"true"}},[r._v("#")]),r._v(" rollup or webpack")]),r._v(" "),e("p",[r._v("两者有以下几点对比。")]),r._v(" "),e("ol",[e("li",[e("p",[r._v("rollup 支持输出 ES 模块，webpack 暂不不支持。目前，2020 年 3 月 13 日，从官网中可知 webpack 的"),e("a",{attrs:{href:"https://webpack.js.org/configuration/output/#librarytarget-module",target:"_blank",rel:"noopener noreferrer"}},[r._v("输出 ES 模块"),e("OutboundLink")],1),r._v("目前还是实验性特性。所以 rollup 构建速度更快、输出体积更小，更容易进行 tree-shaking 等优化。")])]),r._v(" "),e("li",[e("p",[r._v("webpack 有更成熟、完整的生态，对于多数主流框架、应用基础开发都有成熟的工具链。")])])]),r._v(" "),e("p",[r._v("综上，如果是开发一个应用，那么应该选择 webpack，其生态能满足应用开发复杂、多变的需求。而开发一个库时，功能往往比较单一，加之库的体积是使用者所关注的重要一点，所以使用 rollup 更合适。")]),r._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://rollupjs.org/guide/en/#introduction",target:"_blank",rel:"noopener noreferrer"}},[r._v("rollup-introduction"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://rollupjs.org/guide/en/#faqs",target:"_blank",rel:"noopener noreferrer"}},[r._v("rollup-faqs"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[r._v("import"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module#import-%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[r._v("import-命令"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[r._v("tree-shaking"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);