(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{538:function(a,r,s){"use strict";s.r(r);var t=s(2),e=Object(t.a)({},function(){var a=this,r=a.$createElement,s=a._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nacos-config-多环境的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos-config-多环境的配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Nacos Config 多环境的配置")]),a._v(" "),s("h2",{attrs:{id:"本节视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/av40735056/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring Cloud Alibaba-Nacos-分布式配置中心-多环境配置"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"spring-boot-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-profile","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring Boot Profile")]),a._v(" "),s("p",[a._v("我们在做项目开发的时候，生产环境和测试环境的一些配置可能会不一样，有时候一些功能也可能会不一样，所以我们可能会在上线的时候手工修改这些配置信息。但是 Spring 中为我们提供了 Profile 这个功能。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。")]),a._v(" "),s("p",[a._v("操作起来很简单，只需要为不同的环境编写专门的配置文件，如："),s("code",[a._v("application-dev.yml")]),a._v("、"),s("code",[a._v("application-prod.yml")]),a._v("， 启动项目时只需要增加一个命令参数 "),s("code",[a._v("--spring.profiles.active=环境配置")]),a._v(" 即可，启动命令如下：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("java -jar hello-spring-cloud-alibaba-nacos-provider-1.0.0-SNAPSHOT.jar --spring.profiles.active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("prod\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"nacos-config-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos-config-profile","aria-hidden":"true"}},[a._v("#")]),a._v(" Nacos Config Profile")]),a._v(" "),s("p",[a._v("spring-cloud-starter-alibaba-nacos-config 在加载配置的时候，不仅仅加载了以 dataid 为 "),s("code",[a._v("${spring.application.name}.${file-extension:properties}")]),a._v(" 为前缀的基础配置，还加载了 dataid 为 "),s("code",[a._v("${spring.application.name}-${profile}.${file-extension:properties}")]),a._v(" 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过 Spring 提供的 "),s("code",[a._v("${spring.profiles.active}")]),a._v(" 这个配置项来配置。")]),a._v(" "),s("p",[a._v("此处我们以之前创建的 "),s("router-link",{attrs:{to:"/zh/spring-cloud-alibaba/创建服务提供者.html#创建服务提供者"}},[s("strong",[a._v("服务提供者")])]),a._v(" 项目为例")],1),a._v(" "),s("h3",{attrs:{id:"在-nacos-server-中增加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-nacos-server-中增加配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 Nacos Server 中增加配置")]),a._v(" "),s("p",[a._v("增加一个名为 "),s("code",[a._v("nacos-provider-config-prod.yaml")]),a._v(" 的配置")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190111041121.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("注意：此时，我将配置文件中的端口由 "),s("code",[a._v("8081")]),a._v(" -> "),s("code",[a._v("8082")])])]),a._v(" "),s("h3",{attrs:{id:"在项目中增加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在项目中增加配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 在项目中增加配置")]),a._v(" "),s("p",[a._v("增加一个名为 "),s("code",[a._v("bootstrap-prod.properties")]),a._v(" 的配置文件，内容如下：")]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.profiles.active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("prod")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.application.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("nacos-provider-config")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.file-extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yaml")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("127.0.0.1:8848")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("主要增加了 "),s("code",[a._v("spring.profiles.active=prod")]),a._v(" 配置，用于指定访问 Nacos Server 中的 "),s("code",[a._v("nacos-provider-config-prod.yaml")]),a._v(" 配置")]),a._v(" "),s("h2",{attrs:{id:"启动应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动应用程序","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动应用程序")]),a._v(" "),s("p",[a._v("此时我们有两个配置文件，分别为 "),s("code",[a._v("bootstrap.properties")]),a._v(" 和 "),s("code",[a._v("bootstrap-prod.properties")]),a._v(" ，我们需要指定启动时加载哪一个配置文件，操作流程如下：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Run")]),a._v(" -> "),s("code",[a._v("Edit Configurations..")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190111043201.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("设置需要激活的配置")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190111043322.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("观察日志，判断是否成功加载配置")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets1/Lusifer_20190111043538.png",alt:""}})])])},[],!1,null,null,null);r.default=e.exports}}]);