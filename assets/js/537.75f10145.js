(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{524:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"skywalking-服务端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-服务端配置","aria-hidden":"true"}},[a._v("#")]),a._v(" SkyWalking 服务端配置")]),a._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av40796620/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring Cloud Alibaba-SkyWalking-服务端配置"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"基于-docker-安装-elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-elasticsearch","aria-hidden":"true"}},[a._v("#")]),a._v(" 基于 Docker 安装 ElasticSearch")]),a._v(" "),t("p",[a._v("在 "),t("router-link",{attrs:{to:"/zh/spring-cloud-alibaba/为什么需要链路追踪.html#为什么需要链路追踪"}},[t("strong",[a._v("为什么需要链路追踪")])]),a._v(" 章节中介绍过 SkyWalking 存储方案有多种，官方推荐的方案是 ElasticSearch ，所以我们需要先安装 ElasticSearch。")],1),a._v(" "),t("h3",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml","aria-hidden":"true"}},[a._v("#")]),a._v(" docker-compose.yml")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("elasticsearch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" wutang/elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("shanghai"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("zone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("6.3.2\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elasticsearch\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 9200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 9300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cluster.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elasticsearch\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("其中，"),t("code",[a._v("9200")]),a._v(" 端口号为 SkyWalking 配置 ElasticSearch 所需端口号，"),t("code",[a._v("cluster.name")]),a._v(" 为 SkyWalking 配置 ElasticSearch 集群的名称")]),a._v(" "),t("h3",{attrs:{id:"测试是否启动成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试是否启动成功","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试是否启动成功")]),a._v(" "),t("p",[a._v("浏览器访问 http://elasticsearchIP:9200/ ，浏览器返回如下信息即表示成功启动")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114024609.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"下载并启动-skywalking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载并启动-skywalking","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载并启动 SkyWalking")]),a._v(" "),t("p",[a._v("官方已经为我们准备好了编译过的服务端版本，下载地址为 "),t("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://skywalking.apache.org/downloads/"),t("OutboundLink")],1),a._v("，这里我们需要下载 6.x releases 版本")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114025523.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"配置-skywalking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-skywalking","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 SkyWalking")]),a._v(" "),t("p",[a._v("下载完成后解压缩，进入 "),t("code",[a._v("apache-skywalking-apm-incubating/config")]),a._v(" 目录并修改 "),t("code",[a._v("application.yml")]),a._v(" 配置文件")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114030006.png",alt:""}})]),a._v(" "),t("p",[a._v("这里需要做三件事：")]),a._v(" "),t("ul",[t("li",[a._v("注释 H2 存储方案")]),a._v(" "),t("li",[a._v("启用 ElasticSearch 存储方案")]),a._v(" "),t("li",[a._v("修改 ElasticSearch 服务器地址")])]),a._v(" "),t("h3",{attrs:{id:"启动-skywalking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-skywalking","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动 SkyWalking")]),a._v(" "),t("p",[a._v("修改完配置后，进入 "),t("code",[a._v("apache-skywalking-apm-incubating\\bin")]),a._v(" 目录，运行 "),t("code",[a._v("startup.bat")]),a._v(" 启动服务端")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114030813.png",alt:""}})]),a._v(" "),t("p",[a._v("通过浏览器访问 http://localhost:8080 出现如下界面即表示启动成功")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114030930.png",alt:""}})]),a._v(" "),t("p",[a._v("默认的用户名密码为：admin/admin，登录成功后，效果如下图")]),a._v(" "),t("p",[t("img",{attrs:{src:"/funtl/assets1/Lusifer_20190114031040.png",alt:""}})])])},[],!1,null,null,null);s.default=r.exports}}]);