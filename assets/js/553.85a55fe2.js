(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{502:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用-gitlab-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-gitlab-runner","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 GitLab Runner")]),s._v(" "),e("h2",{attrs:{id:"本节视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/av28384201",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】项目实战-iToken-部署持续集成-使用 GitLab Runner"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("理解了上面的基本概念之后，有没有觉得少了些什么东西 —— 由谁来执行这些构建任务呢？\n答案就是 GitLab Runner 了！")]),s._v(" "),e("p",[s._v("想问为什么不是 GitLab CI 来运行那些构建任务？")]),s._v(" "),e("p",[s._v("一般来说，构建任务都会占用很多的系统资源 (譬如编译代码)，而 GitLab CI 又是 GitLab 的一部分，如果由 GitLab CI 来运行构建任务的话，在执行构建任务的时候，GitLab 的性能会大幅下降。")]),s._v(" "),e("p",[s._v("GitLab CI 最大的作用是管理各个项目的构建状态，因此，运行构建任务这种浪费资源的事情就交给 GitLab Runner 来做拉！")]),s._v(" "),e("p",[s._v("因为 GitLab Runner 可以安装到不同的机器上，所以在构建任务运行期间并不会影响到 GitLab 的性能")]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("ul",[e("li",[s._v("在目标主机上安装 GitLab Runner，这里的目标主机指你要部署的服务器")]),s._v(" "),e("li",[s._v("Ubuntu 安装脚本：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh | sudo bash\nsudo apt-get update\nsudo apt-get install gitlab-ci-multi-runner\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"注册-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册-runner","aria-hidden":"true"}},[s._v("#")]),s._v(" 注册 Runner")]),s._v(" "),e("p",[s._v("安装好 GitLab Runner 之后，我们只要启动 Runner 然后和 GitLab CI 绑定：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@iZbp1fmnx8oyubksjdk7leZ gitbook]# gitlab-ci-multi-runner register\nRunning in system-mode.                            \n                                                   \nPlease enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):\nhttp://192.168.75.146:8080/\nPlease enter the gitlab-ci token for this runner:\n1Lxq_f1NRfCfeNbE5WRh\nPlease enter the gitlab-ci description for this runner:\n[iZbp1fmnx8oyubksjdk7leZ]: deploy-gaming\nPlease enter the gitlab-ci tags for this runner (comma separated):\ndeploy\nWhether to run untagged builds [true/false]:\n[false]: true\nWhether to lock Runner to current project [true/false]:\n[false]: \nRegistering runner... succeeded                     runner=P_zfkhTb\nPlease enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:\nshell\nRunner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded! \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("ul",[e("li",[s._v("gitlab-ci-multi-runner register：执行注册命令")]),s._v(" "),e("li",[s._v("Please enter the gitlab-ci coordinator URL：输入 ci 地址")]),s._v(" "),e("li",[s._v("Please enter the gitlab-ci token for this runner：输入 ci token")]),s._v(" "),e("li",[s._v("Please enter the gitlab-ci description for this runner：输入 runner 名称")]),s._v(" "),e("li",[s._v("Please enter the gitlab-ci tags for this runner：设置 tag")]),s._v(" "),e("li",[s._v("Whether to run untagged builds：这里选择 true ，代码上传后会能够直接执行")]),s._v(" "),e("li",[s._v("Whether to lock Runner to current project：直接回车，不用输入任何口令")]),s._v(" "),e("li",[s._v("Please enter the executor：选择 runner 类型，这里我们选择的是 shell")])]),s._v(" "),e("p",[s._v("CI 的地址和令牌，在 项目 --\x3e 设置 --\x3e CI/CD --\x3e Runner 设置：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer1521043282.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"gitlab-ci-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" .gitlab-ci.yml")]),s._v(" "),e("p",[s._v("在项目工程下编写 .gitlab-ci.yml 配置文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("stages:\n  - install_deps\n  - test\n  - build\n  - deploy_test\n  - deploy_production\n\ncache:\n  key: ${CI_BUILD_REF_NAME}\n  paths:\n    - node_modules/\n    - dist/\n\n# 安装依赖\ninstall_deps:\n  stage: install_deps\n  only:\n    - develop\n    - master\n  script:\n    - npm install\n\n# 运行测试用例\ntest:\n  stage: test\n  only:\n    - develop\n    - master\n  script:\n    - npm run test\n\n# 编译\nbuild:\n  stage: build\n  only:\n    - develop\n    - master\n  script:\n    - npm run clean\n    - npm run build:client\n    - npm run build:server\n\n# 部署测试服务器\ndeploy_test:\n  stage: deploy_test\n  only:\n    - develop\n  script:\n    - pm2 delete app || true\n    - pm2 start app.js --name app\n\n# 部署生产服务器\ndeploy_production:\n  stage: deploy_production\n  only:\n    - master\n  script:\n    - bash scripts/deploy/deploy.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br")])]),e("p",[s._v("上面的配置把一次 Pipeline 分成五个阶段：")]),s._v(" "),e("ul",[e("li",[s._v("安装依赖(install_deps)")]),s._v(" "),e("li",[s._v("运行测试(test)")]),s._v(" "),e("li",[s._v("编译(build)")]),s._v(" "),e("li",[s._v("部署测试服务器(deploy_test)")]),s._v(" "),e("li",[s._v("部署生产服务器(deploy_production)")])]),s._v(" "),e("p",[s._v("设置 Job.only 后，只有当 develop 分支和 master 分支有提交的时候才会触发相关的 Jobs。")]),s._v(" "),e("p",[s._v("节点说明：")]),s._v(" "),e("ul",[e("li",[s._v("stages：定义构建阶段，这里只有一个阶段 deploy")]),s._v(" "),e("li",[s._v("deploy：构建阶段 deploy 的详细配置也就是任务配置")]),s._v(" "),e("li",[s._v("script：需要执行的 shell 脚本")]),s._v(" "),e("li",[s._v("only：这里的 master 指在提交到 master 时执行")]),s._v(" "),e("li",[s._v("tags：与注册 runner 时的 tag 匹配")])]),s._v(" "),e("h2",{attrs:{id:"其它配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 其它配置")]),s._v(" "),e("p",[s._v("为保证能够正常集成，我们还需要一些其它配置：")]),s._v(" "),e("ul",[e("li",[s._v("安装完 GitLab Runner 后系统会增加一个 gitlab-runner 账户，我们将它加进 root 组：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gpasswd -a gitlab-runner root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("配置需要操作目录的权限，比如你的 runner 要在 gaming 目录下操作：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chmod 775 gaming\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("由于我们的 shell 脚本中有执行 git pull 的命令，我们直接设置以 ssh 方式拉取代码：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('su gitlab-runner\nssh-keygen -t rsa -C "你在 GitLab 上的邮箱地址"\ncd \ncd .ssh\ncat id_rsa.pub\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("复制 id_rsa.pub 中的秘钥到 GitLab：")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer1521043534.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("通过 ssh 的方式将代码拉取到本地")])]),s._v(" "),e("h2",{attrs:{id:"测试集成效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试集成效果","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试集成效果")]),s._v(" "),e("p",[s._v("所有操作完成后 push 代码到服务器，查看是否成功：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/clipboard1.png",alt:""}})]),s._v(" "),e("p",[s._v("passed 表示执行成功")]),s._v(" "),e("h2",{attrs:{id:"其他命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),e("p",[s._v("删除注册信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('gitlab-ci-multi-runner unregister --name "名称"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看注册列表：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gitlab-ci-multi-runner list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])},[],!1,null,null,null);n.default=t.exports}}]);