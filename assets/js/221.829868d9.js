(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{873:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"gitlab-创建第一个项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-创建第一个项目","aria-hidden":"true"}},[s._v("#")]),s._v(" GitLab 创建第一个项目")]),s._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av27548374",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】平台即服务-GitLab-第一个托管项目"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"gitlab-创建第一个项目-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-创建第一个项目-2","aria-hidden":"true"}},[s._v("#")]),s._v(" GitLab 创建第一个项目")]),s._v(" "),t("p",[s._v("点击 "),t("code",[s._v("+")]),s._v(" 号 --\x3e "),t("code",[s._v("新建项目")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511800438.png",alt:""}})]),s._v(" "),t("p",[s._v("输入项目名称及描述信息，设置可见等级为私有，这样别人就看不见你的项目")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511800627.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),t("p",[s._v("我们选择通过增加一个 README 的方式来初始化项目")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511800836.png",alt:""}})]),s._v(" "),t("p",[s._v("直接提交修改即可")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511800904.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"使用-ssh-的方式拉取和推送项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssh-的方式拉取和推送项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 SSH 的方式拉取和推送项目")]),s._v(" "),t("h3",{attrs:{id:"生成-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成 SSH KEY")]),s._v(" "),t("p",[s._v("使用 ssh-keygen 工具生成，位置在 Git 安装目录下，我的是 "),t("code",[s._v("C:\\Program Files\\Git\\usr\\bin")])]),s._v(" "),t("p",[s._v("输入命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('ssh-keygen -t rsa -C "your_email@example.com"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行成功后的效果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Microsoft Windows [版本 10.0.14393]\n(c) 2016 Microsoft Corporation。保留所有权利。\n\nC:\\Program Files\\Git\\usr\\bin>ssh-keygen -t rsa -C "topsale@vip.qq.com"\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/c/Users/Lusifer/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /c/Users/Lusifer/.ssh/id_rsa.\nYour public key has been saved in /c/Users/Lusifer/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:cVesJKa5VnQNihQOTotXUAIyphsqjb7Z9lqOji2704E topsale@vip.qq.com\nThe key\'s randomart image is:\n+---[RSA 2048]----+\n|  + ..=o=.  .+.  |\n| o o + B .+.o.o  |\n|o   . + +=o+..   |\n|.=   .  oo...    |\n|= o     So       |\n|oE .    o        |\n| .. .. .         |\n| o*o+            |\n| *B*oo           |\n+----[SHA256]-----+\n\nC:\\Program Files\\Git\\usr\\bin>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h3",{attrs:{id:"复制-ssh-key-信息到-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制-ssh-key-信息到-gitlab","aria-hidden":"true"}},[s._v("#")]),s._v(" 复制 SSH-KEY 信息到 GitLab")]),s._v(" "),t("p",[s._v("秘钥位置在："),t("code",[s._v("C:\\Users\\你的用户名\\.ssh")]),s._v(" 目录下，找到 "),t("code",[s._v("id_rsa.pub")]),s._v(" 并使用编辑器打开，如：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511801618.png",alt:""}})]),s._v(" "),t("p",[s._v("登录 GitLab，点击“用户头像”--\x3e“设置”--\x3e“SSH 密钥”")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511801730.png",alt:""}})]),s._v(" "),t("p",[s._v("成功增加密钥后的效果")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511801884.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"使用-tortoisegit-克隆项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-tortoisegit-克隆项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 TortoiseGit 克隆项目")]),s._v(" "),t("ul",[t("li",[s._v("新建一个存放代码仓库的本地文件夹")]),s._v(" "),t("li",[s._v("在文件夹空白处按右键")]),s._v(" "),t("li",[s._v("选择“Git 克隆...”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511802101.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("服务项目地址到 URL")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511802242.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("如果弹出连接信息请选择是")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511802354.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("成功克隆项目到本地")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511802402.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"使用-tortoisegit-推送项目（提交代码）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-tortoisegit-推送项目（提交代码）","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 TortoiseGit 推送项目（提交代码）")]),s._v(" "),t("ul",[t("li",[s._v("创建或修改文件（这里的文件为所有文件，包括：代码、图片等）")]),s._v(" "),t("li",[s._v("我们以创建 "),t("code",[s._v(".gitignore")]),s._v(" 过滤配置文件为例，该文件的主要作用为过滤不需要上传的文件，比如：IDE 生成的工程文件、编译后的 class 文件等")]),s._v(" "),t("li",[s._v("在工程目录下，新建 "),t("code",[s._v(".gitignore")]),s._v(" 文件，并填入如下配置：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".gradle\n*.sw?\n.#*\n*#\n*~\n/build\n/code\n.classpath\n.project\n.settings\n.metadata\n.factorypath\n.recommenders\nbin\nbuild\ntarget\n.factorypath\n.springBeans\ninterpolated*.xml\ndependency-reduced-pom.xml\nbuild.log\n_site/\n.*.md.html\nmanifest.yml\nMANIFEST.MF\nsettings.xml\nactivemq-data\noverridedb.*\n*.iml\n*.ipr\n*.iws\n.idea\n.DS_Store\n.factorypath\ndump.rdb\ntransaction-logs\n**/overlays/\n**/logs/\n**/temp/\n**/classes/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("ul",[t("li",[s._v("右键呼出菜单，选择“提交 Master...”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511802947.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("点击“全部”并填入“日志信息”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511803046.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("点击“提交并推送”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511803174.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("成功后的效果图")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511803209.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"查看-gitlab-确认提交成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-gitlab-确认提交成功","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 GitLab 确认提交成功")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1511803280.png",alt:""}})])])},[],!1,null,null,null);a.default=e.exports}}]);