(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{437:function(s,n,e){"use strict";e.r(n);var t=e(2),a=Object(t.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用路由网关的服务过滤功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用路由网关的服务过滤功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用路由网关的服务过滤功能")]),s._v(" "),e("h2",{attrs:{id:"本节视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/av27864725",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】微服务框架-SpringCloud-使用路由网关的服务过滤功能"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("Zuul 不仅仅只是路由，还有很多强大的功能，本节演示一下它的服务过滤功能，比如用在安全验证方面。")]),s._v(" "),e("h2",{attrs:{id:"创建服务过滤器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建服务过滤器","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建服务过滤器")]),s._v(" "),e("p",[s._v("继承 "),e("code",[s._v("ZuulFilter")]),s._v(" 类并在类上增加 "),e("code",[s._v("@Component")]),s._v(" 注解就可以使用服务过滤功能了，非常简单方便")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.funtl.hello.spring.cloud.zuul.filter;\n\nimport com.netflix.zuul.ZuulFilter;\nimport com.netflix.zuul.context.RequestContext;\nimport com.netflix.zuul.exception.ZuulException;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.io.IOException;\n\n/**\n * Zuul 的服务过滤演示\n * <p>Title: LoginFilter</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/5/29 22:02\n */\n@Component\npublic class LoginFilter extends ZuulFilter {\n\n    private static final Logger logger = LoggerFactory.getLogger(LoginFilter.class);\n\n    /**\n     * 配置过滤类型，有四种不同生命周期的过滤器类型\n     * 1. pre：路由之前\n     * 2. routing：路由之时\n     * 3. post：路由之后\n     * 4. error：发送错误调用\n     * @return\n     */\n    @Override\n    public String filterType() {\n        return "pre";\n    }\n\n    /**\n     * 配置过滤的顺序\n     * @return\n     */\n    @Override\n    public int filterOrder() {\n        return 0;\n    }\n\n    /**\n     * 配置是否需要过滤：true/需要，false/不需要\n     * @return\n     */\n    @Override\n    public boolean shouldFilter() {\n        return true;\n    }\n\n    /**\n     * 过滤器的具体业务代码\n     * @return\n     * @throws ZuulException\n     */\n    @Override\n    public Object run() throws ZuulException {\n        RequestContext context = RequestContext.getCurrentContext();\n        HttpServletRequest request = context.getRequest();\n        logger.info("{} >>> {}", request.getMethod(), request.getRequestURL().toString());\n        String token = request.getParameter("token");\n        if (token == null) {\n            logger.warn("Token is empty");\n            context.setSendZuulResponse(false);\n            context.setResponseStatusCode(401);\n            try {\n                context.getResponse().getWriter().write("Token is empty");\n            } catch (IOException e) {\n            }\n        } else {\n            logger.info("OK");\n        }\n        return null;\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br")])]),e("h3",{attrs:{id:"filtertype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtertype","aria-hidden":"true"}},[s._v("#")]),s._v(" filterType")]),s._v(" "),e("p",[s._v("返回一个字符串代表过滤器的类型，在 Zuul 中定义了四种不同生命周期的过滤器类型")]),s._v(" "),e("ul",[e("li",[s._v("pre：路由之前")]),s._v(" "),e("li",[s._v("routing：路由之时")]),s._v(" "),e("li",[s._v("post： 路由之后")]),s._v(" "),e("li",[s._v("error：发送错误调用")])]),s._v(" "),e("h3",{attrs:{id:"filterorder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filterorder","aria-hidden":"true"}},[s._v("#")]),s._v(" filterOrder")]),s._v(" "),e("p",[s._v("过滤的顺序")]),s._v(" "),e("h3",{attrs:{id:"shouldfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldfilter","aria-hidden":"true"}},[s._v("#")]),s._v(" shouldFilter")]),s._v(" "),e("p",[s._v("是否需要过滤，这里是 "),e("code",[s._v("true")]),s._v("，需要过滤")]),s._v(" "),e("h3",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" run")]),s._v(" "),e("p",[s._v("过滤器的具体业务代码")]),s._v(" "),e("h2",{attrs:{id:"测试过滤器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试过滤器","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试过滤器")]),s._v(" "),e("p",[s._v("浏览器访问：http://localhost:8769/api/a/hi?message=HelloZuul 网页显示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Token is empty\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("浏览器访问：http://localhost:8769/api/b/hi?message=HelloZuul&token=123 网页显示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Hi，your message is :"HelloZuul" i am from port：8763\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])},[],!1,null,null,null);n.default=a.exports}}]);