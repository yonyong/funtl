(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{467:function(e,t,s){"use strict";s.r(t);var v=s(2),_=Object(v.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"单点登录系统机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单点登录系统机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 单点登录系统机制")]),e._v(" "),s("h2",{attrs:{id:"本节视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/av28842078",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】项目实战-iToken-单点登录服务-单点登录系统机制"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"http-无状态协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-无状态协议","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP 无状态协议")]),e._v(" "),s("p",[s("code",[e._v("web")]),e._v(" 应用采用 "),s("code",[e._v("browser/server")]),e._v(" 架构，"),s("code",[e._v("http")]),e._v(" 作为通信协议。"),s("code",[e._v("http")]),e._v(" 是无状态协议，浏览器的每一次请求，服务器会独立处理，不与之前或之后的请求产生关联，这个过程用下图说明，三次请求/响应对之间没有任何联系")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer2018042722120001.png",alt:""}})]),e._v(" "),s("p",[e._v("但这也同时意味着，任何用户都能通过浏览器访问服务器资源，如果想保护服务器的某些资源，必须限制浏览器请求；要限制浏览器请求，必须鉴别浏览器请求，响应合法请求，忽略非法请求；要鉴别浏览器请求，必须清楚浏览器请求状态。既然 "),s("code",[e._v("http")]),e._v(" 协议无状态，那就让服务器和浏览器共同维护一个状态吧！这就是会话机制")]),e._v(" "),s("h2",{attrs:{id:"会话机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#会话机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 会话机制")]),e._v(" "),s("p",[e._v("浏览器第一次请求服务器，服务器创建一个会话，并将会话的 "),s("code",[e._v("id")]),e._v(" 作为响应的一部分发送给浏览器，浏览器存储会话 "),s("code",[e._v("id")]),e._v("，并在后续第二次和第三次请求中带上会话 "),s("code",[e._v("id")]),e._v("，服务器取得请求中的会话 "),s("code",[e._v("id")]),e._v(" 就知道是不是同一个用户了，这个过程用下图说明，后续请求与第一次请求产生了关联")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer2018042722120002.png",alt:""}})]),e._v(" "),s("p",[e._v("服务器在内存中保存会话的两种方式")]),e._v(" "),s("ul",[s("li",[e._v("请求参数")]),e._v(" "),s("li",[e._v("Cookie")])]),e._v(" "),s("p",[e._v("将会话 "),s("code",[e._v("id")]),e._v(" 作为每一个请求的参数，服务器接收请求自然能解析参数获得会话 "),s("code",[e._v("id")]),e._v("，并借此判断是否来自同一会话，很明显，这种方式不靠谱。那就浏览器自己来维护这个会话 "),s("code",[e._v("id")]),e._v(" 吧，每次发送 "),s("code",[e._v("http")]),e._v(" 请求时浏览器自动发送会话 "),s("code",[e._v("id")]),e._v("，"),s("code",[e._v("cookie")]),e._v(" 机制正好用来做这件事。"),s("code",[e._v("cookie")]),e._v(" 是浏览器用来存储少量数据的一种机制，数据以 "),s("code",[e._v("key/value")]),e._v(" 形式存储，浏览器发送 "),s("code",[e._v("http")]),e._v(" 请求时自动附带 "),s("code",[e._v("cookie")]),e._v(" 信息")]),e._v(" "),s("p",[s("code",[e._v("tomcat")]),e._v(" 会话机制当然也实现了 "),s("code",[e._v("cookie")]),e._v("，访问 "),s("code",[e._v("tomcat")]),e._v(" 服务器时，浏览器中可以看到一个名为 "),s("code",[e._v("JSESSIONID")]),e._v(" 的 "),s("code",[e._v("cookie")]),e._v("，这就是 "),s("code",[e._v("tomcat")]),e._v(" 会话机制维护的会话 "),s("code",[e._v("id")]),e._v("，使用了 "),s("code",[e._v("cookie")]),e._v(" 的请求响应过程如下图")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer2018042722120003.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"登录状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 登录状态")]),e._v(" "),s("p",[e._v("有了会话机制，登录状态就好明白了，我们假设浏览器第一次请求服务器需要输入用户名与密码验证身份，服务器拿到用户名密码去数据库比对，正确的话说明当前持有这个会话的用户是合法用户，应该将这个会话标记为“已授权”或者“已登录”等等之类的状态，既然是会话的状态，自然要保存在会话对象中，"),s("code",[e._v("tomcat")]),e._v(" 在会话对象中设置登录状态如下")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('HttpSession session = request.getSession();\nsession.setAttribute("isLogin", true);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("用户再次访问时，"),s("code",[e._v("tomcat")]),e._v(" 在会话对象中查看登录状态")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('HttpSession session = request.getSession();\nsession.getAttribute("isLogin");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("实现了登录状态的浏览器请求服务器模型如下图描述")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer2018042722120004.png",alt:""}})]),e._v(" "),s("p",[e._v("每次请求受保护资源时都会检查会话对象中的登录状态，只有 "),s("code",[e._v("isLogin=true")]),e._v(" 的会话才能访问，登录机制因此而实现")])])},[],!1,null,null,null);t.default=_.exports}}]);