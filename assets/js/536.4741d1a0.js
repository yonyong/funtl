(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{526:function(a,e,s){"use strict";s.r(e);var t=s(2),r=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"skywalking-客户端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-客户端配置","aria-hidden":"true"}},[a._v("#")]),a._v(" SkyWalking 客户端配置")]),a._v(" "),s("h2",{attrs:{id:"本节视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/av40797693/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring Cloud Alibaba-SkyWalking-客户端配置"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"java-agent-服务器探针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-agent-服务器探针","aria-hidden":"true"}},[a._v("#")]),a._v(" Java Agent 服务器探针")]),a._v(" "),s("p",[a._v("参考官网给出的帮助 "),s("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/blob/master/docs/en/setup/service-agent/java-agent/README.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("Setup java agent"),s("OutboundLink")],1),a._v("，我们需要使用官方提供的探针为我们达到监控的目的，按照实际情况我们需要实现三种部署方式")]),a._v(" "),s("ul",[s("li",[a._v("IDEA 部署探针")]),a._v(" "),s("li",[a._v("Java 启动方式部署探针（我们是 Spring Boot 应用程序，需要使用 "),s("code",[a._v("java -jar")]),a._v(" 的方式启动应用）")]),a._v(" "),s("li",[a._v("Docker 启动方式部署探针（需要做到一次构建到处运行的持续集成效果，本章节暂不提供解决方案，到后面的实战环节再实现）")])]),a._v(" "),s("p",[a._v("探针文件在 "),s("code",[a._v("apache-skywalking-apm-incubating/agent")]),a._v(" 目录下")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114033410.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"idea-部署探针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-部署探针","aria-hidden":"true"}},[a._v("#")]),a._v(" IDEA 部署探针")]),a._v(" "),s("p",[a._v("继续之前的案例项目，创建一个名为 "),s("code",[a._v("hello-spring-cloud-external-skywalking")]),a._v(" 的目录，并将 "),s("code",[a._v("agent")]),a._v(" 整个目录拷贝进来")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114034146.png",alt:""}})]),a._v(" "),s("p",[a._v("修改项目的 VM 运行参数，点击菜单栏中的 "),s("code",[a._v("Run")]),a._v(" -> "),s("code",[a._v("EditConfigurations...")]),a._v("，此处我们以 "),s("code",[a._v("nacos-provider")]),a._v(" 项目为例，修改参数如下")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("-javaagent:D:\\Workspace\\Others\\hello-spring-cloud-alibaba\\hello-spring-cloud-external-skywalking\\agent\\skywalking-agent.jar\n-Dskywalking.agent.service_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-provider\n-Dskywalking.collector.backend_service"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost:11800\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114034730.png",alt:""}})]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-javaagent")]),a._v("：用于指定探针路径")]),a._v(" "),s("li",[s("code",[a._v("-Dskywalking.agent.service_name")]),a._v("：用于重写 "),s("code",[a._v("agent/config/agent.config")]),a._v(" 配置文件中的服务名")]),a._v(" "),s("li",[s("code",[a._v("-Dskywalking.collector.backend_service")]),a._v("：用于重写 "),s("code",[a._v("agent/config/agent.config")]),a._v(" 配置文件中的服务地址")])]),a._v(" "),s("h2",{attrs:{id:"java-启动方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-启动方式","aria-hidden":"true"}},[a._v("#")]),a._v(" Java 启动方式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("java -javaagent:/path/to/skywalking-agent/skywalking-agent.jar -Dskywalking.agent.service_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-provider -Dskywalking.collector.backend_service"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost:11800 -jar yourApp.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"测试监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试监控","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试监控")]),a._v(" "),s("p",[a._v("启动 "),s("code",[a._v("nacos-provider")]),a._v(" 项目，通过观察日志可以发现，已经成功加载探针")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114035643.png",alt:""}})]),a._v(" "),s("p",[a._v("访问之前写好的接口 http://localhost:8081/echo/hi 之后再刷新 SkyWalking Web UI，你会发现 Service 与 Endpoint 已经成功检测到了")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114035917.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114040024.png",alt:""}})]),a._v(" "),s("p",[a._v("至此，表示 SkyWalking 链路追踪配置成功")]),a._v(" "),s("h2",{attrs:{id:"skywalking-trace-监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-trace-监控","aria-hidden":"true"}},[a._v("#")]),a._v(" SkyWalking Trace 监控")]),a._v(" "),s("p",[a._v("SkyWalking 通过业务调用监控进行依赖分析，提供给我们了服务之间的服务调用拓扑关系、以及针对每个 Endpoint 的 Trace 记录。")]),a._v(" "),s("h3",{attrs:{id:"调用链路监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用链路监控","aria-hidden":"true"}},[a._v("#")]),a._v(" 调用链路监控")]),a._v(" "),s("p",[a._v("点击 "),s("code",[a._v("Trace")]),a._v(" 菜单，进入追踪页")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114040606.png",alt:""}})]),a._v(" "),s("p",[a._v("点击 "),s("code",[a._v("Trace ID")]),a._v(" 展开详细信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114040953.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114041036.png",alt:""}})]),a._v(" "),s("p",[a._v("上图展示了一次正常的响应，总响应时间为 "),s("code",[a._v("185ms")]),a._v(" 共有一个 Span（基本工作单元，表示一次完整的请求，包含响应，即请求并响应）")]),a._v(" "),s("p",[a._v("Span "),s("code",[a._v("/echo/{message}")]),a._v(" 说明如下：")]),a._v(" "),s("ul",[s("li",[a._v("Duration：响应时间 185 毫秒")]),a._v(" "),s("li",[a._v("component：组件类型为 SpringMVC")]),a._v(" "),s("li",[a._v("url：请求地址")]),a._v(" "),s("li",[a._v("http.method：请求类型")])]),a._v(" "),s("h3",{attrs:{id:"服务性能指标监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务性能指标监控","aria-hidden":"true"}},[a._v("#")]),a._v(" 服务性能指标监控")]),a._v(" "),s("p",[a._v("点击 "),s("code",[a._v("Service")]),a._v(" 菜单，进入服务性能指标监控页")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114042528.png",alt:""}})]),a._v(" "),s("p",[a._v("选择希望监控的服务")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114042645.png",alt:""}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Avg SLA：")]),a._v(" 服务可用性（主要是通过请求成功与失败次数来计算）")]),a._v(" "),s("li",[s("strong",[a._v("CPM：")]),a._v(" 每分钟调用次数")]),a._v(" "),s("li",[s("strong",[a._v("Avg Response Time：")]),a._v(" 平均响应时间")])]),a._v(" "),s("p",[a._v("点击 "),s("code",[a._v("More Server Details...")]),a._v(" 还可以查看详细信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190114043403.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_2019011404350001.png",alt:""}})]),a._v(" "),s("p",[a._v("上图中展示了服务在一定时间范围内的相关数据，包括：")]),a._v(" "),s("ul",[s("li",[a._v("服务可用性指标 SLA")]),a._v(" "),s("li",[a._v("每分钟平均响应数")]),a._v(" "),s("li",[a._v("平均响应时间")]),a._v(" "),s("li",[a._v("服务进程 PID")]),a._v(" "),s("li",[a._v("服务所在物理机的 IP、Host、OS")]),a._v(" "),s("li",[a._v("运行时 CPU 使用率")]),a._v(" "),s("li",[a._v("运行时堆内存使用率")]),a._v(" "),s("li",[a._v("运行时非堆内存使用率")]),a._v(" "),s("li",[a._v("GC 情况")])])])},[],!1,null,null,null);e.default=r.exports}}]);