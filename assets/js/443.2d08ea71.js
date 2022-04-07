(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{637:function(t,a,r){"use strict";r.r(a);var s=r(2),v=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"微服务架构设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 微服务架构设计模式")]),t._v(" "),r("h2",{attrs:{id:"本节视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 本节视频")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av27716220",target:"_blank",rel:"noopener noreferrer"}},[t._v("【视频】再谈微服务-微服务架构设计模式"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"微服务架构需要考虑的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构需要考虑的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 微服务架构需要考虑的问题")]),t._v(" "),r("ul",[r("li",[t._v("API Gateway")]),t._v(" "),r("li",[t._v("服务间调用")]),t._v(" "),r("li",[t._v("服务发现")]),t._v(" "),r("li",[t._v("服务容错")]),t._v(" "),r("li",[t._v("服务部署")]),t._v(" "),r("li",[t._v("数据调用")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501200932257-1866725509.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"聚合器微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#聚合器微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 聚合器微服务设计模式")]),t._v(" "),r("p",[t._v("这是一种最常见也最简单的设计模式")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201000148-1677353522.png",alt:""}})]),t._v(" "),r("p",[t._v("聚合器调用多个服务实现应用程序所需的功能。它可以是一个简单的 WEB 页面，将检索到的数据进行处理展示。它也可以是一个更高层次的组合微服务，对检索到的数据增加业务逻辑后进一步发布成一个新的微服务，这符合 "),r("strong",[t._v("DRY")]),t._v(" 原则。另外，每个服务都有自己的缓存和数据库。如果聚合器是一个组合服务，那么它也有自己的缓存和数据库。聚合器可以沿 "),r("code",[t._v("X轴")]),t._v(" 和 "),r("code",[t._v("Z轴")]),t._v(" 独立扩展。")]),t._v(" "),r("h2",{attrs:{id:"代理微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理微服务设计模式")]),t._v(" "),r("p",[t._v("这是聚合模式的一个变种，如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201046898-281749162.png",alt:""}})]),t._v(" "),r("p",[t._v("在这种情况下，客户端并不聚合数据，但会根据业务需求的差别调用不同的微服务。代理可以仅仅委派请求，也可以进行数据转换工作。")]),t._v(" "),r("h2",{attrs:{id:"链式微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链式微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 链式微服务设计模式")]),t._v(" "),r("p",[t._v("这种模式在接收到请求后会产生一个经过合并的响应，如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201150117-1722000003.png",alt:""}})]),t._v(" "),r("p",[t._v("在这种情况下，"),r("code",[t._v("服务A")]),t._v(" 接收到请求后会与 "),r("code",[t._v("服务B")]),t._v(" 进行通信，类似地，"),r("code",[t._v("服务B")]),t._v(" 会同 "),r("code",[t._v("服务C")]),t._v(" 进行通信。所有服务都使用同步消息传递。在整个链式调用完成之前，客户端会一直阻塞。因此，服务调用链不宜过长，以免客户端长时间等待。")]),t._v(" "),r("h2",{attrs:{id:"分支微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支微服务设计模式")]),t._v(" "),r("p",[t._v("这种模式是聚合器模式的扩展，允许同时调用两个微服务链，如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201226507-2146929767.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"数据共享微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据共享微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据共享微服务设计模式")]),t._v(" "),r("p",[t._v("自治是微服务的设计原则之一，就是说微服务是全栈式服务。但在重构现有的“单体应用（Monolithic Application）”时，SQL 数据库反规范化可能会导致数据重复和不一致。因此，在单体应用到微服务架构的过渡阶段，可以使用这种设计模式，如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201353945-1013665174.png",alt:""}})]),t._v(" "),r("p",[t._v("在这种情况下，部分微服务可能会共享缓存和数据库存储。不过，这只有在两个服务之间存在强耦合关系时才可以。对于基于微服务的新建应用程序而言，这是一种反模式。")]),t._v(" "),r("h2",{attrs:{id:"异步消息传递微服务设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步消息传递微服务设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步消息传递微服务设计模式")]),t._v(" "),r("p",[t._v("虽然 REST 设计模式非常流行，但它是同步的，会造成阻塞。因此部分基于微服务的架构可能会选择使用消息队列代替 REST 请求/响应，如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/983980-20170501201415054-327655979.png",alt:""}})])])},[],!1,null,null,null);a.default=v.exports}}]);