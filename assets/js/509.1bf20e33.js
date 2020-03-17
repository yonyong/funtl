(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{260:function(t,s,a){"use strict";a.r(s);var r=a(2),n=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"再谈-restful-风格的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再谈-restful-风格的-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 再谈 RESTful 风格的 API")]),t._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 本节视频")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av41504406/",target:"_blank",rel:"noopener noreferrer"}},[t._v("【视频】Spring Cloud Alibaba-MyShop-再谈 RESTful 风格 API"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("在前后分离和微服务成为现代软件开发的大趋势下，API 设计也应该变得越来越规范和高效。本篇希望把 API 相关的概念以最朴素的方式梳理，对 API 设计有一个更全面和细致的认识，构建出更规范、设计清晰和文档完善的 API。")]),t._v(" "),a("p",[t._v("对于前端和客户端开发者而言，可能会经常吐槽我们后端工程师的 API 设计，原因可能是文档不完善、返回数据丢字段、错误码不清晰等。我们身为后端开发者，怎么让接口 URL 设计的合理，数据格式怎么定，错误码怎么处理，然后怎么才能合适的描述我们的 API，API 怎么认证用户的请求，都是我们后端开发工程师需要考虑的问题。")]),t._v(" "),a("h2",{attrs:{id:"什么是-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 API")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets1/1-API-750x410.png",alt:""}})]),t._v(" "),a("p",[t._v("广义的 API（Application Programming Interface）是指应用程序编程接口，包括在操作系统中的动态链接库文件例如 "),a("code",[t._v(".dll")]),t._v("（动态链接库，Windows 专用）或 "),a("code",[t._v(".so")]),t._v("（Linux 系统下专用的类库），或者基于 TCP 层的 Socket 连接，用来提供预定义的方法和函数，调用者无需访问源码和理解内部原理便可实现相应功能。而当前通常指通过 HTTP 协议传输的 Web Service 技术。")]),t._v(" "),a("p",[t._v("API 在概念上和语言无关，理论上具有网络操作能力的所有编程语言都可以提供 API 服务。Java、PHP、NodeJS 甚至 C 都可以实现 Web API，都是通过响应 HTTP 请求并构造 HTTP 包来完成的，但是内部实现原理不同。")]),t._v(" "),a("p",[t._v("API 在概念上和 JSON 和 XML 等媒体类型无关，JSON 和 XML 只是一种传输或媒体格式，便于计算机解析和读取数据，因此都有一个共同特点就是具有几个基本数据类型，同时提供了嵌套和列表的数据表达方式。JSON 因为更加轻量、容易解析、和 JavaScript 天生集成，因此成为现在主流传输格式。")]),t._v(" "),a("p",[t._v("综上所述，API 设计的目的是为了让程序可读，应当遵从简单、易用、无状态等特性，这也是为什么 RESTful 风格流行的原因。")]),t._v(" "),a("h2",{attrs:{id:"简单理解-restful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单理解-restful","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单理解 RESTFul")]),t._v(" "),a("blockquote",[a("p",[t._v("RESTFul = 有意义的 URL + 合适的 HTTP 动词")])]),t._v(" "),a("p",[t._v("REST（Representational State Transfer，表现层状态转换），RESTful 是一种对基于 HTTP 的应用设计风格，只是提供了一组设计原则和约束条件，而不是一种标准。网络上有大量对 RESTful 风格的解读，简单来说 RESTful 定义 URI 和 HTTP 状态码，让你的 API 设计变得更简洁、清晰和富有层次，对缓存等实现更有帮助。RESTful 不是灵丹妙药，也不是银弹。")]),t._v(" "),a("h3",{attrs:{id:"没有银弹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有银弹","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有银弹")]),t._v(" "),a("blockquote",[a("p",[t._v("《没有银弹：软件工程的本质性与附属性工作》（英语：No Silver Bullet—Essence and Accidents of Software Engineering）是 IBM 大型机之父佛瑞德·布鲁克斯所发表一篇关于软件工程的经典论文，原先是在 1986 年都柏林 IFIP 研讨会的一篇受邀论文，隔年电机电子工程师学会《Computer》也转载了这篇文章，他们用了几张《伦敦狼人》之类的电影剧照来当作说明，还加上了一段〈终结狼人〉的附注，用来引出非银弹则不能成功的（现代）传说。该论述中强调由于软件的复杂性本质，而使真正的银弹并不存在；所谓的没有银弹是指没有任何一项技术或方法可使软件工程的生产力在十年内提高十倍。")])]),t._v(" "),a("p",[t._v("简单点说就是："),a("strong",[t._v("复杂的软件工程问题无法靠简单的答案来解决。")])]),t._v(" "),a("h2",{attrs:{id:"restful-的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-的本质","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTFul 的本质")]),t._v(" "),a("blockquote",[a("p",[t._v("RESTful 的本质是基于 HTTP 协议对资源的增删改查操作做出定义。")])]),t._v(" "),a("p",[t._v("理解 HTTP 协议非常简单，HTTP 是通过网络 Socket 发送一段字符串，这个字符串由键值对组成的 Header 部分和纯文本的 Body 部分组成。Url、Cookie、Method 都在 Header 中。")]),t._v(" "),a("p",[t._v("典型的 RESTful API 场景：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("URL")]),t._v(" "),a("th",[t._v("HTTP Method")]),t._v(" "),a("th",[t._v("幂等性")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("获取一组数据列表")]),t._v(" "),a("td",[t._v("/path/records")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("幂等")])]),t._v(" "),a("tr",[a("td",[t._v("根据 ID 获取某笔数据")]),t._v(" "),a("td",[t._v("/path/records/{recordID}")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("幂等")])]),t._v(" "),a("tr",[a("td",[t._v("新建数据")]),t._v(" "),a("td",[t._v("/path/records")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[t._v("非幂等")])]),t._v(" "),a("tr",[a("td",[t._v("完整更新数据")]),t._v(" "),a("td",[t._v("/path/records/{recordID}")]),t._v(" "),a("td",[t._v("PUT")]),t._v(" "),a("td",[t._v("幂等")])]),t._v(" "),a("tr",[a("td",[t._v("部分更新数据")]),t._v(" "),a("td",[t._v("/path/records/{recordID}")]),t._v(" "),a("td",[t._v("PATCH")]),t._v(" "),a("td",[t._v("非幂等")])]),t._v(" "),a("tr",[a("td",[t._v("删除数据")]),t._v(" "),a("td",[t._v("/path/records/{recordID}")]),t._v(" "),a("td",[t._v("DELETE")]),t._v(" "),a("td",[t._v("幂等")])]),t._v(" "),a("tr",[a("td",[t._v("跨域访问预请求")]),t._v(" "),a("td",[t._v("/path/records/{recordID}")]),t._v(" "),a("td",[t._v("OPTION")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("虽然 HTTP 协议定义了其他的 Method，但是就普通场景来说，用好上面的几项已经足够了")]),t._v(" "),a("h2",{attrs:{id:"restful-的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-的注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful 的注意事项")]),t._v(" "),a("ul",[a("li",[t._v("URL 只是表达被操作的资源位置，因此不应该使用动词，且注意单复数区分")]),t._v(" "),a("li",[t._v("除了 POST 和 DELETE 之外，其他的操作需要幂等的，例如对数据多次更新应该返回同样的内容")]),t._v(" "),a("li",[t._v("设计风格没有对错之分，RESTful 一种设计风格，与此对应的还有 RPC 甚至自定义的风格")]),t._v(" "),a("li",[t._v("RESTful 和语言、传输格式无关")]),t._v(" "),a("li",[t._v("无状态，HTTP 设计本来就是没有状态的，之所以看起来有状态因为我们浏览器使用了 Cookies，每次请求都会把 Session ID（可以看做身份标识）传递到 Headers 中。")]),t._v(" "),a("li",[t._v("RESTful 没有定义 Body 中内容传输的格式，有另外的规范来描述怎么设计 Body 的数据结构。")])]),t._v(" "),a("h2",{attrs:{id:"json-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-api","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON API")]),t._v(" "),a("p",[t._v("因为 RESTful 风格仅仅规定了 URL 和 HTTP Method 的使用，并没有定义 Body 中数据格式的。我们怎么定义请求或者返回对象的结构，以及该如何针对不同的情况返回不同的 HTTP 状态码？")]),t._v(" "),a("p",[t._v("具体可参考 "),a("a",{attrs:{href:"http://jsonapi.org/format/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("JSON API 官网英文版")]),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"http://jsonapi.org.cn/format/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("JSON API 中文版")]),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"mime-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" MIME 类型")]),t._v(" "),a("p",[t._v("JSON API 数据格式已经被 IANA 机构接受了注册，因此必须使用 "),a("code",[t._v("application/vnd.api+json")]),t._v(" 类型。客户端请求头中 Content-Type 应该为 "),a("code",[t._v("application/vnd.api+json")]),t._v("，并且在 Accept 中也必须包含 "),a("code",[t._v("application/vnd.api+json")]),t._v("。如果指定错误服务器应该返回 "),a("code",[t._v("415")]),t._v(" 或 "),a("code",[t._v("406")]),t._v(" 状态码。")]),t._v(" "),a("h3",{attrs:{id:"json-文档结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-文档结构","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON 文档结构")]),t._v(" "),a("p",[t._v("在顶级节点使用 "),a("code",[t._v("data")]),t._v("、"),a("code",[t._v("errors")]),t._v("、"),a("code",[t._v("meta")]),t._v("，来描述数据、错误信息、元信息，注意 "),a("code",[t._v("data")]),t._v(" 和 "),a("code",[t._v("errors")]),t._v(" 应该互斥，不能再一个文档中同时存在，"),a("code",[t._v("meta")]),t._v(" 在项目实际上用的很少，只有特别情况才需要用到，比如返回服务器的一些信息。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/articles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/articles?page[offset]=2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/articles?page[offset]=10"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"articles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JSON API paints my bikeshed!"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relationships"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/articles/1"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"included"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"copyright"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Copyright 2015 Example Corp."')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("h3",{attrs:{id:"data-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" data 属性")]),t._v(" "),a("p",[t._v("一个典型的 data 的对象格式，我们的有效信息一般都放在 attributes 中。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"articles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JSON API paints my bikeshed!"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relationships"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/articles/1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[a("strong",[t._v("id：")]),t._v(" 显而易见为唯一标识，可以为数字也可以为hash字符串，取决于后端实现")]),t._v(" "),a("li",[a("strong",[t._v("type：")]),t._v(" 描述数据的类型，可以对应为数据模型的类名")]),t._v(" "),a("li",[a("strong",[t._v("attributes：")]),t._v(" 代表资源的具体数据")]),t._v(" "),a("li",[a("strong",[t._v("relationships、links：")]),t._v(" 为可选属性，用来放置关联数据和资源地址等数据")])]),t._v(" "),a("h3",{attrs:{id:"errors-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" errors 属性")]),t._v(" "),a("p",[t._v("这里的 errors 和 data 有一点不同，一般来说返回值中 errors 作为列表存在，因为针对每个资源可能出现多个错误信息。最典型的例子为，我们请求的对象中某些字段不符合验证要求，这里需要返回验证信息，但是 HTTP 状态码会使用一个通用的 401，然后把具体的验证信息在 errors 给出来。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10011")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name can\'t be null"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10011")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content can\'t be null"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("在 title 字段中给出错误信息，如果我们在本地或者开发环境想打出更多的调试堆栈信息，我们可以增加一个 detail 字段让调试更加方便。需要注意的一点是，"),a("strong",[t._v("我们应该在生产环境屏蔽部分敏感信息，detail 字段最好在生产环境不可见。")])]),t._v(" "),a("h3",{attrs:{id:"常用返回码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用返回码","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用返回码")]),t._v(" "),a("h4",{attrs:{id:"_200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok","aria-hidden":"true"}},[t._v("#")]),t._v(" 200 OK")]),t._v(" "),a("p",[t._v("200 是一个最常用的状态码用来表示请求成功，例如 GET 请求到某一个资源，或者更新、删除某资源。"),a("strong",[t._v("需要注意的是使用 POST 创建资源应该返回 201 表示数据被创建。")])]),t._v(" "),a("h4",{attrs:{id:"_201-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_201-created","aria-hidden":"true"}},[t._v("#")]),t._v(" 201 Created")]),t._v(" "),a("p",[t._v("如果客户端发起一个 POST 请求，在 RESTful 部分我们提到，POST 为创建资源，如果服务器处理成功应该返回一个创建成功的标志，在 HTTP 协议中，201 为新建成功的状态。文档规定，服务器必须在 data 中返回 id 和 type。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('HTTP/1.1 201 Created\nLocation: http://example.com/photos/550e8400-e29b-41d4-a716-446655440000\nContent-Type: application/vnd.api+json\n\n{\n  "data": {\n    "type": "photos",\n    "id": "550e8400-e29b-41d4-a716-446655440000",\n    "attributes": {\n      "title": "Ember Hamster",\n      "src": "http://example.com/images/productivity.png"\n    },\n    "links": {\n      "self": "http://example.com/photos/550e8400-e29b-41d4-a716-446655440000"\n    }\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("在 HTTP 协议中，2xx 的状态码都表示成功，还有 202、204 等用的较少，就不做过多介绍了，4xx 返回客户端错误，会重点介绍。")]),t._v(" "),a("h4",{attrs:{id:"_401-unauthorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized","aria-hidden":"true"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),a("p",[t._v("如果服务器在检查用户输入的时候，需要传入的参数不能满足条件，服务器可以给出 401 错误，标记客户端错误，需要客户端自查。")]),t._v(" "),a("h4",{attrs:{id:"_415-unsupported-media-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_415-unsupported-media-type","aria-hidden":"true"}},[t._v("#")]),t._v(" 415 Unsupported Media Type")]),t._v(" "),a("p",[t._v("当服务器媒体类型 Content-Type 和 Accept 指定错误的时候，应该返回 415。")]),t._v(" "),a("h4",{attrs:{id:"_403-forbidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden","aria-hidden":"true"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),a("p",[t._v("当客户端访问未授权的资源时，服务器应该返回 403 要求用户授权信息。")]),t._v(" "),a("h4",{attrs:{id:"_404-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found","aria-hidden":"true"}},[t._v("#")]),t._v(" 404 Not Found")]),t._v(" "),a("p",[t._v("这个太常见了，当指定资源找不到时服务器应当返回 404。")]),t._v(" "),a("h4",{attrs:{id:"_500-internal-server-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error","aria-hidden":"true"}},[t._v("#")]),t._v(" 500 Internal Server Error")]),t._v(" "),a("p",[t._v("当服务器发生任何内部错误时，应当返回 500，并给出 errors 字段，必要的时候需要返回错误的 code，便于查错。一般来说，500 错误是为了区分 4xx 错误，包括任何服务器内部技术或者业务异常都应该返回 500。")]),t._v(" "),a("h3",{attrs:{id:"hateoas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hateoas","aria-hidden":"true"}},[t._v("#")]),t._v(" HATEOAS")]),t._v(" "),a("p",[t._v("HATEOAS（Hypermedia As The Engine Of Application State，超媒体应用程序状态引擎）是一种思想，怎么在项目中使用是需要灵活运用的，在实际项目中要使用 HATEOAS 也要付出额外的工作量(包括开发和前后端联调)；")]),t._v(" "),a("p",[t._v("在 RESTful 和 JSON API 部分我们都贯穿了 HATEOAS 思想。比如在某个系统中产品和订单是一对多的关系，那我们给产品的返回值可以定义为：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"products"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"550e8400-e29b-41d4-a716-446655440000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example for relationships and links"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relationships"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"orders"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/products/550e8400-e29b-41d4-a716-446655440000/orders"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/products/550e8400-e29b-41d4-a716-446655440000"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("实际上 HATEOAS 算作是 JSON API 定义了的一部分，HATEOAS 思想是 "),a("strong",[t._v("RESTful 是利用 HTTP 协议来进行增删改查，那我们怎么在没有文档的情况下找到这些资源的地址呢")]),t._v("，一种可行的办法就是在 API 的返回体里面加入导航信息，也就是 links。这样就像 HTML 中的 A 标签实现了超文本文档一样，实现了 "),a("strong",[t._v("超媒体应用程序状态追踪")]),t._v("。")]),t._v(" "),a("p",[t._v("从返回中我们能得到 links 中 product 的的资源地址，同时也能得到 orders 的地址，这样我们不需要客户端自己拼装地址，就能够得到请求 orders 的地址。如果我们严格按照 HATEOAS 开发，客户端只需要在配置文件中定义一个入口地址就能够完成所有操作，在资源地址发生变化的时候也能自动适配。")])])},[],!1,null,null,null);s.default=n.exports}}]);