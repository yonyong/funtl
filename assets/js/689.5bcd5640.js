(window.webpackJsonp=window.webpackJsonp||[]).push([[689],{233:function(v,e,_){"use strict";_.r(e);var a=_(2),r=Object(a.a)({},function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"了解前后分离的演变史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#了解前后分离的演变史","aria-hidden":"true"}},[v._v("#")]),v._v(" 了解前后分离的演变史")]),v._v(" "),_("h2",{attrs:{id:"本节视频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[v._v("#")]),v._v(" 本节视频")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.bilibili.com/video/av43446816/",target:"_blank",rel:"noopener noreferrer"}},[v._v("【视频】Vue 渐进式 JavaScript 框架-了解前后分离的演变史"),_("OutboundLink")],1)])]),v._v(" "),_("h2",{attrs:{id:"为什么需要前后分离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要前后分离","aria-hidden":"true"}},[v._v("#")]),v._v(" 为什么需要前后分离")]),v._v(" "),_("h3",{attrs:{id:"后端为主的-mvc-时代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后端为主的-mvc-时代","aria-hidden":"true"}},[v._v("#")]),v._v(" 后端为主的 MVC 时代")]),v._v(" "),_("p",[v._v("为了降低开发的复杂度，以后端为出发点，比如：Struts、SpringMVC 等框架的使用，就是后端的 MVC 时代;可以参考 "),_("router-link",{attrs:{to:"/zh/mvc/什么是-MVC-模式.html#什么是-mvc-模式"}},[_("strong",[v._v("【什么是 MVC 模式】")])])],1),v._v(" "),_("p",[v._v("以 "),_("code",[v._v("SpringMVC")]),v._v(" 流程为例：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer2018120811230001.png",alt:""}})]),v._v(" "),_("ul",[_("li",[v._v("发起请求到前端控制器("),_("code",[v._v("DispatcherServlet")]),v._v(")")]),v._v(" "),_("li",[v._v("前端控制器请求 "),_("code",[v._v("HandlerMapping")]),v._v(" 查找 "),_("code",[v._v("Handler")]),v._v("，可以根据 "),_("code",[v._v("xml")]),v._v(" 配置、注解进行查找")]),v._v(" "),_("li",[v._v("处理器映射器 "),_("code",[v._v("HandlerMapping")]),v._v(" 向前端控制器返回 "),_("code",[v._v("Handler")])]),v._v(" "),_("li",[v._v("前端控制器调用处理器适配器去执行 "),_("code",[v._v("Handler")])]),v._v(" "),_("li",[v._v("处理器适配器去执行 "),_("code",[v._v("Handler")])]),v._v(" "),_("li",[_("code",[v._v("Handler")]),v._v(" 执行完成给适配器返回 "),_("code",[v._v("ModelAndView")])]),v._v(" "),_("li",[v._v("处理器适配器向前端控制器返回 "),_("code",[v._v("ModelAndView")]),v._v("，"),_("code",[v._v("ModelAndView")]),v._v(" 是 "),_("code",[v._v("SpringMVC")]),v._v(" 框架的一个底层对象，包括 "),_("code",[v._v("Model")]),v._v(" 和 "),_("code",[v._v("View")])]),v._v(" "),_("li",[v._v("前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图("),_("code",[v._v("JSP")]),v._v(")")]),v._v(" "),_("li",[v._v("视图解析器向前端控制器返回 "),_("code",[v._v("View")])]),v._v(" "),_("li",[v._v("前端控制器进行视图渲染，视图渲染将模型数据(在 "),_("code",[v._v("ModelAndView")]),v._v(" 对象中)填充到 "),_("code",[v._v("request")]),v._v(" 域")]),v._v(" "),_("li",[v._v("前端控制器向用户响应结果")])]),v._v(" "),_("h4",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),_("p",[v._v("MVC 是一个非常好的协作模式，能够有效降低代码的耦合度，从架构上能够让开发者明白代码应该写在哪里。为了让 View 更纯粹，还可以使用 Thymeleaf、Freemarker 等模板引擎，使模板里无法写入 Java 代码，让前后端分工更加清晰。")]),v._v(" "),_("h4",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),_("ul",[_("li",[v._v("前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：\n"),_("ul",[_("li",[v._v("第一种是前端写 DEMO，写好后，让后端去套模板。好处是 DEMO 可以本地开发，很高效。不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；")]),v._v(" "),_("li",[v._v("另一种协作模式是前端负责浏览器端的所有开发和服务器端的 View 层模板开发。好处是 UI 相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。")])])]),v._v(" "),_("li",[v._v("前后端职责纠缠不清：模板引擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码。还有一个很大的灰色地带是 "),_("code",[v._v("Controller")]),v._v("，页面路由等功能本应该是前端最关注的，但却是由后端来实现。 "),_("code",[v._v("Controller")]),v._v(" 本身与 "),_("code",[v._v("Model")]),v._v(" 往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在 "),_("code",[v._v("Controller")]),v._v(" 层。这些问题不能全归结于程序员的素养，否则 JSP 就够了。")]),v._v(" "),_("li",[v._v("对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作，但由于后端框架限制，我们很难使用 "),_("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/web/wa-lo-comet/index.html",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("【Comet】")]),_("OutboundLink")],1),v._v("、"),_("a",{attrs:{href:"https://segmentfault.com/a/1190000002998812",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("【BigPipe】")]),_("OutboundLink")],1),v._v(" 等技术方案来优化性能。")])]),v._v(" "),_("p",[_("strong",[v._v("注：在这期间（2005 年以前），包括早期的 "),_("code",[v._v("JSP")]),v._v("、"),_("code",[v._v("PHP")]),v._v(" 可以称之为 "),_("code",[v._v("Web 1.0")]),v._v(" 时代。在这里想说一句，如果你是一名 Java 初学者，请你不要再把一些陈旧的技术当回事了，比如 "),_("code",[v._v("JSP")]),v._v("，因为时代在变、技术在变、什么都在变（引用扎克伯格的一句话："),_("code",[v._v("唯一不变的是变化本身")]),v._v("）；当我们 "),_("code",[v._v("千锋教育")]),v._v(" 机构去给大学做实训时，有些同学会认为我们没有讲什么 "),_("code",[v._v("干货")]),v._v(" ，其实不然，只能说是你认知里的干货对于市场来说早就过时了而已。")])]),v._v(" "),_("h2",{attrs:{id:"什么是前后分离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是前后分离","aria-hidden":"true"}},[v._v("#")]),v._v(" 什么是前后分离")]),v._v(" "),_("h3",{attrs:{id:"基于-ajax-带来的-spa-时代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于-ajax-带来的-spa-时代","aria-hidden":"true"}},[v._v("#")]),v._v(" 基于 AJAX 带来的 SPA 时代")]),v._v(" "),_("p",[v._v("时间回到 2005 年 "),_("code",[v._v("AJAX")]),v._v("（Asynchronous JavaScript And XML，异步 JavaScript 和 XML，老技术新用法） 被正式提出并开始使用 "),_("code",[v._v("CDN")]),v._v(" 作为静态资源存储，于是出现了 JavaScript 王者归来（在这之前 JS 都是用来在网页上贴狗皮膏药广告的）的 SPA（Single Page Application）单页面应用时代。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer201812090001.png",alt:""}})]),v._v(" "),_("h4",{attrs:{id:"优点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点-2","aria-hidden":"true"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),_("p",[v._v("这种模式下，"),_("strong",[v._v("前后端的分工非常清晰，前后端的关键协作点是 "),_("code",[v._v("AJAX")]),v._v(" 接口")]),v._v("。看起来是如此美妙，但回过头来看看的话，这与 JSP 时代区别不大。复杂度从服务端的 JSP 里移到了浏览器的 JavaScript，浏览器端变得很复杂。类似 Spring MVC，"),_("strong",[v._v("这个时代开始出现浏览器端的分层架构")]),v._v("：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer201812090002.png",alt:""}})]),v._v(" "),_("h4",{attrs:{id:"缺点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2","aria-hidden":"true"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("前后端接口的约定：")]),v._v(" 如果后端的接口一塌糊涂，如果后端的业务模型不够稳定，那么前端开发会很痛苦；不少团队也有类似尝试，通过接口规则、接口平台等方式来做。"),_("strong",[v._v("有了和后端一起沉淀的 "),_("code",[v._v("接口规则")]),v._v(" ，还可以用来模拟数据，使得前后端可以在约定接口后实现高效并行开发")]),v._v("。")]),v._v(" "),_("li",[_("strong",[v._v("前端开发的复杂度控制：")]),v._v(" SPA 应用大多以功能交互型为主，JavaScript 代码过十万行很正常。大量 JS 代码的组织，与 View 层的绑定等，都不是容易的事情。")])]),v._v(" "),_("h3",{attrs:{id:"前端为主的-mv-时代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端为主的-mv-时代","aria-hidden":"true"}},[v._v("#")]),v._v(" 前端为主的 MV* 时代")]),v._v(" "),_("p",[v._v("此处的 MV* 模式如下：")]),v._v(" "),_("ul",[_("li",[v._v("MVC（同步通信为主）：Model、View、Controller")]),v._v(" "),_("li",[v._v("MVP（异步通信为主）：Model、View、Presenter")]),v._v(" "),_("li",[v._v("MVVM（异步通信为主）：Model、View、ViewModel")])]),v._v(" "),_("p",[v._v("为了降低前端开发复杂度，涌现了大量的前端框架，比如："),_("code",[v._v("AngularJS")]),v._v("、"),_("code",[v._v("React")]),v._v("、"),_("code",[v._v("Vue.js")]),v._v("、"),_("code",[v._v("EmberJS")]),v._v(" 等，这些框架总的原则是先按类型分层，比如 Templates、Controllers、Models，然后再在层内做切分，如下图：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer201812090003.png",alt:""}})]),v._v(" "),_("h4",{attrs:{id:"优点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点-3","aria-hidden":"true"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("前后端职责很清晰：")]),v._v(" 前端工作在浏览器端，后端工作在服务端。清晰的分工，可以让开发并行，测试数据的模拟不难，前端可以本地开发。后端则可以专注于业务逻辑的处理，输出 RESTful（可以参考 "),_("router-link",{attrs:{to:"/zh/apache-http-client/你怎么理解-RESTful.html#你怎么理解-restful"}},[_("strong",[v._v("【如何设计一个良好的 API】")])]),v._v("）等接口。")],1),v._v(" "),_("li",[_("strong",[v._v("前端开发的复杂度可控：")]),v._v(" 前端代码很重，但合理的分层，让前端代码能各司其职。这一块蛮有意思的，简单如模板特性的选择，就有很多很多讲究。并非越强大越好，限制什么，留下哪些自由，代码应该如何组织，所有这一切设计，得花一本书的厚度去说明。")]),v._v(" "),_("li",[_("strong",[v._v("部署相对独立：")]),v._v(" 可以快速改进产品体验")])]),v._v(" "),_("h4",{attrs:{id:"缺点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3","aria-hidden":"true"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),_("ul",[_("li",[v._v("代码不能复用。比如后端依旧需要对数据做各种校验，校验逻辑无法复用浏览器端的代码。如果可以复用，那么后端的数据校验可以相对简单化。")]),v._v(" "),_("li",[v._v("全异步，对 SEO 不利。往往还需要服务端做同步渲染的降级方案。")]),v._v(" "),_("li",[v._v("性能并非最佳，特别是移动互联网环境下。")]),v._v(" "),_("li",[v._v("SPA 不能满足所有需求，依旧存在大量多页面应用。URL Design 需要后端配合，前端无法完全掌控。")])]),v._v(" "),_("h2",{attrs:{id:"nodejs-带来的全栈时代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-带来的全栈时代","aria-hidden":"true"}},[v._v("#")]),v._v(" NodeJS 带来的全栈时代")]),v._v(" "),_("p",[v._v("前端为主的 MV* 模式解决了很多很多问题，但如上所述，依旧存在不少不足之处。随着 NodeJS 的兴起，JavaScript 开始有能力运行在服务端。这意味着可以有一种新的研发模式：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/assets/63918611gw1efj2vvjwtfj20ge0gzab9.jpg",alt:""}})]),v._v(" "),_("p",[v._v("在这种研发模式下，前后端的职责很清晰。对前端来说，两个 UI 层各司其职：")]),v._v(" "),_("ul",[_("li",[v._v("Front-end UI layer 处理浏览器层的展现逻辑。通过 CSS 渲染样式，通过 JavaScript 添加交互功能，HTML 的生成也可以放在这层，具体看应用场景。")]),v._v(" "),_("li",[v._v("Back-end UI layer 处理路由、模板、数据获取、Cookie 等。通过路由，前端终于可以自主把控 URL Design，这样无论是单页面应用还是多页面应用，前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。")])]),v._v(" "),_("p",[v._v("通过 Node，Web Server 层也是 JavaScript 代码，这意味着部分代码可前后复用，需要 SEO 的场景可以在服务端同步渲染，由于异步请求太多导致的性能问题也可以通过服务端来缓解。前一种模式的不足，通过这种模式几乎都能完美解决掉。")]),v._v(" "),_("p",[v._v("与 JSP 模式相比，全栈模式看起来是一种回归，也的确是一种向原始开发模式的回归，不过是一种螺旋上升式的回归。")]),v._v(" "),_("p",[v._v("基于 NodeJS 的全栈模式，依旧面临很多挑战：")]),v._v(" "),_("ul",[_("li",[v._v("需要前端对服务端编程有更进一步的认识。比如 TCP/IP 等网络知识的掌握。")]),v._v(" "),_("li",[v._v("NodeJS 层与 Java 层的高效通信。NodeJS 模式下，都在服务器端，RESTful HTTP 通信未必高效，通过 SOAP 等方式通信更高效。一切需要在验证中前行。")]),v._v(" "),_("li",[v._v("对部署、运维层面的熟练了解，需要更多知识点和实操经验。")]),v._v(" "),_("li",[v._v("大量历史遗留问题如何过渡。这可能是最大最大的阻力。")])]),v._v(" "),_("p",[_("strong",[v._v("注：看到这里，相信很多同学就可以理解，为什么我总在课堂上说：“前端想学后台很难，而我们后端程序员学任何东西都很简单”；就是因为我们后端程序员具备相对完善的知识体系。")])]),v._v(" "),_("p",[_("strong",[_("code",[v._v("全栈！So Easy！╮(￣▽￣)╭！")])])]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("综上所述，模式也好，技术也罢，没有好坏优劣之分，只有适合不适合；前后分离的开发思想主要是基于 "),_("code",[v._v("SoC")]),v._v("（关注度分离原则），上面种种模式，都是让前后端的职责更清晰，分工更合理高效。")])])},[],!1,null,null,null);e.default=r.exports}}]);