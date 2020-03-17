(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{523:function(a,t,r){"use strict";r.r(t);var e=r(2),i=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"为什么需要链路追踪"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要链路追踪","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么需要链路追踪")]),a._v(" "),r("h2",{attrs:{id:"本节视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av40796154/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring Cloud Alibaba-SkyWalking-分布式链路追踪"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"什么是链路追踪"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是链路追踪","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是链路追踪")]),a._v(" "),r("p",[a._v("微服务架构是通过业务来划分服务的，使用 REST 调用。对外暴露的一个接口，可能需要很多个服务协同才能完成这个接口功能，如果链路上任何一个服务出现问题或者网络超时，都会形成导致接口调用失败。随着业务的不断扩张，服务之间互相调用会越来越复杂。")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/2279594-dd72907e82f89fd6.png",alt:""}})]),a._v(" "),r("p",[a._v("随着服务的越来越多，对调用链的分析会越来越复杂。它们之间的调用关系也许如下：")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/2279594-4b7d1b6abe595390.png",alt:""}})]),a._v(" "),r("p",[a._v("面对以上情况，我们就需要一些可以帮助理解系统行为、用于分析性能问题的工具，以便发生故障的时候，能够快速定位和解决问题，这就是所谓的 APM（应用性能管理）。")]),a._v(" "),r("h2",{attrs:{id:"什么是-skywalking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-skywalking","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 SkyWalking")]),a._v(" "),r("p",[a._v("目前主要的一些 APM 工具有: Cat、Zipkin、Pinpoint、SkyWalking；Apache SkyWalking 是观察性分析平台和应用性能管理系统。提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案。")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets1/Lusifer_2019011401370001.jpeg",alt:""}})]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Skywalking Agent：")]),a._v(" 使用 JavaAgent 做字节码植入，无侵入式的收集，并通过 HTTP 或者 gRPC 方式发送数据到 SkyWalking Collector。")]),a._v(" "),r("li",[r("strong",[a._v("SkyWalking Collector：")]),a._v(" 链路数据收集器，对 agent 传过来的数据进行整合分析处理并落入相关的数据存储中。")]),a._v(" "),r("li",[r("strong",[a._v("Storage：")]),a._v(" SkyWalking 的存储，时间更迭，SW 已经开发迭代到了 6.x 版本，在 6.x 版本中支持以 ElasticSearch(支持 6.x)、Mysql、TiDB、H2、作为存储介质进行数据存储。")]),a._v(" "),r("li",[r("strong",[a._v("UI：")]),a._v(" Web 可视化平台，用来展示落地的数据。")])]),a._v(" "),r("h2",{attrs:{id:"skywalking-功能特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-功能特性","aria-hidden":"true"}},[a._v("#")]),a._v(" SkyWalking 功能特性")]),a._v(" "),r("ul",[r("li",[a._v("多种监控手段，语言探针和服务网格(Service Mesh)")]),a._v(" "),r("li",[a._v("多语言自动探针，Java，.NET Core 和 Node.JS")]),a._v(" "),r("li",[a._v("轻量高效，不需要大数据")]),a._v(" "),r("li",[a._v("模块化，UI、存储、集群管理多种机制可选")]),a._v(" "),r("li",[a._v("支持告警")]),a._v(" "),r("li",[a._v("优秀的可视化方案")])])])},[],!1,null,null,null);t.default=i.exports}}]);