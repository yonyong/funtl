(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{897:function(e,r,t){"use strict";t.r(r);var a=t(2),o=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"apache-dubbo-zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-dubbo-zookeeper","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache Dubbo Zookeeper")]),e._v(" "),t("p",[e._v("目前市场上主流的 "),t("strong",[e._v("第二套微服务架构解决方案：Spring Boot + Dubbo + Zookeeper")])]),e._v(" "),t("ul",[t("li",[e._v("Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源 Java RPC 框架。")]),e._v(" "),t("li",[e._v("ZooKeeper 是一种分布式协调服务，用于管理大型主机。在分布式环境中协调和管理服务是一个复杂的过程。")])]),e._v(" "),t("h2",{attrs:{id:"视频合集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频合集","aria-hidden":"true"}},[e._v("#")]),e._v(" 视频合集")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av35685648",target:"_blank",rel:"noopener noreferrer"}},[e._v("【千锋教育】微服务架构之 Spring Boot + Dubbo + Zookeeper"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"分布式协调框架-zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式协调框架-zookeeper","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式协调框架 Zookeeper")]),e._v(" "),t("p",[e._v("ZooKeeper 是一种分布式协调服务，用于管理大型主机。在分布式环境中协调和管理服务是一个复杂的过程。ZooKeeper 通过其简单的架构和 API 解决了这个问题。ZooKeeper 允许开发人员专注于核心应用程序逻辑，而不必担心应用程序的分布式特性。")]),e._v(" "),t("p",[t("router-link",{attrs:{to:"/zh/apache-dubbo-zookeeper/"}},[t("strong",[e._v("开始学习")])])],1),e._v(" "),t("h2",{attrs:{id:"高性能-java-rpc-框架-dubbo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高性能-java-rpc-框架-dubbo","aria-hidden":"true"}},[e._v("#")]),e._v(" 高性能 Java RPC 框架 Dubbo")]),e._v(" "),t("p",[e._v("Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源 Java RPC 分布式服务框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。她最大的特点是按照分层的方式来架构，使用这种方式可以使各个层之间解耦合（或者最大限度地松耦合）。从服务模型的角度来看，Dubbo 采用的是一种非常简单的模型，要么是提供方提供服务，要么是消费方消费服务，所以基于这一点可以抽象出服务提供方（Provider）和服务消费方（Consumer）两个角色。")]),e._v(" "),t("p",[t("router-link",{attrs:{to:"/zh/apache-dubbo-rpc/"}},[t("strong",[e._v("开始学习")])])],1),e._v(" "),t("h2",{attrs:{id:"开发前的准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发前的准备","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发前的准备")]),e._v(" "),t("p",[e._v("正式开发之前咱们先学习一下什么是 "),t("strong",[e._v("敏捷开发")]),e._v(" 和 "),t("strong",[e._v("XP 极限编程")]),e._v("，在实际工作中我们都会采用一些 "),t("strong",[e._v("编程方法论")]),e._v(" 给我们指引方向，让我们少走弯路。")]),e._v(" "),t("p",[t("router-link",{attrs:{to:"/zh/apache-dubbo-prepare/"}},[t("strong",[e._v("开始学习")])])],1),e._v(" "),t("h2",{attrs:{id:"持续集成与持续交付"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续集成与持续交付","aria-hidden":"true"}},[e._v("#")]),e._v(" 持续集成与持续交付")]),e._v(" "),t("p",[e._v("互联网软件的开发和发布，已经形成了一套标准流程，最重要的组成部分就是持续集成（Continuous integration，简称 CI）")]),e._v(" "),t("ul",[t("li",[e._v("持续集成指的是，频繁地（一天多次）将代码集成到主干")]),e._v(" "),t("li",[e._v("持续交付（Continuous delivery）指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。如果评审通过，代码就进入生产阶段。")])]),e._v(" "),t("p",[t("router-link",{attrs:{to:"/zh/apache-dubbo-ci/"}},[t("strong",[e._v("开始学习")])])],1),e._v(" "),t("h2",{attrs:{id:"正式进入开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式进入开发","aria-hidden":"true"}},[e._v("#")]),e._v(" 正式进入开发")]),e._v(" "),t("p",[e._v("该综合练习项目是将之前的  "),t("router-link",{attrs:{to:"/zh/guide/走向单体地狱.html#走向单体地狱"}},[t("strong",[e._v("走向单体地狱")])]),e._v(" MyShop 从传统的 "),t("strong",[e._v("SSM")]),e._v(" 项目改造成基于 Spring Boot + Dubbo + Zookeeper 的微服务架构项目，旨在帮助大家更好的理解 "),t("strong",[e._v("架构是演化而来的，不是设计出来的")]),e._v(" 思想；当传统方式已经不能满足我们的需求时，我们就需要寻找新的解决方案了；")],1),e._v(" "),t("p",[t("router-link",{attrs:{to:"/zh/apache-dubbo-codeing/"}},[t("strong",[e._v("开始学习")])])],1)])},[],!1,null,null,null);r.default=o.exports}}]);