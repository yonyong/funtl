(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{594:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-docker","aria-hidden":"true"}},[s._v("#")]),s._v(" CentOS 安装 Docker")]),s._v(" "),a("blockquote",[a("p",[s._v("警告：切勿在没有配置 Docker YUM 源的情况下直接使用 yum 命令安装 Docker.")])]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("h3",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),a("p",[s._v("Docker CE 支持 64 位版本 CentOS 7，并且要求内核版本不低于 3.10。 CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 "),a("code",[s._v("overlay2")]),s._v(" 存储层驱动）无法使用，并且部分功能可能不太稳定。")]),s._v(" "),a("h3",{attrs:{id:"卸载旧版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),a("p",[s._v("旧版本的 Docker 称为 "),a("code",[s._v("docker")]),s._v(" 或者 "),a("code",[s._v("docker-engine")]),s._v("，使用以下命令卸载旧版本：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-selinux \\\n                  docker-engine-selinux \\\n                  docker-engine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"使用-yum-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-yum-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 yum 安装")]),s._v(" "),a("p",[s._v("执行以下命令安装依赖包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils \\\n           device-mapper-persistent-data \\\n           lvm2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),s._v(" "),a("p",[s._v("执行下面的命令添加 "),a("code",[s._v("yum")]),s._v(" 软件源：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager \\\n    --add-repo \\\n    https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo yum-config-manager \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     --add-repo \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     https://download.docker.com/linux/centos/docker-ce.repo    ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果需要最新版本的 Docker CE 请使用以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --enable docker-ce-edge\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果需要测试版本的 Docker CE 请使用以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --enable docker-ce-test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Docker CE")]),s._v(" "),a("p",[s._v("更新 "),a("code",[s._v("yum")]),s._v(" 软件源缓存，并安装 "),a("code",[s._v("docker-ce")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache fast\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"使用脚本自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用脚本自动安装")]),s._v(" "),a("p",[s._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，CentOS 系统上可以使用这套脚本安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sh get-docker.sh --mirror Aliyun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的 Edge 版本安装在系统中。")]),s._v(" "),a("h2",{attrs:{id:"启动-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动 Docker CE")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" docker\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"建立-docker-用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组","aria-hidden":"true"}},[s._v("#")]),s._v(" 建立 docker 用户组")]),s._v(" "),a("p",[s._v("默认情况下，"),a("code",[s._v("docker")]),s._v(" 命令会使用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unix socket"),a("OutboundLink")],1),s._v(" 与 Docker 引擎通讯。而只有 "),a("code",[s._v("root")]),s._v(" 用户和 "),a("code",[s._v("docker")]),s._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),a("code",[s._v("root")]),s._v(" 用户。因此，更好地做法是将需要使用 "),a("code",[s._v("docker")]),s._v(" 的用户加入 "),a("code",[s._v("docker")]),s._v(" 用户组。")]),s._v(" "),a("p",[s._v("建立 "),a("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将当前用户加入 "),a("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$USER")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("退出当前终端并重新登录，进行如下测试。")]),s._v(" "),a("h2",{attrs:{id:"测试-docker-是否安装正确"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试 Docker 是否安装正确")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run hello-world\n\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\nca4f61b1923c: Pull complete\nDigest: sha256:be0cd392e45be79ffeffa6b05338b98ebb16c87b255f48e297ec7f98e123905c\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n 3. The Docker daemon created a new container from that image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://cloud.docker.com/\n\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/engine/userguide/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("若能正常输出以上信息，则说明安装成功。")]),s._v(" "),a("h2",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像加速")]),s._v(" "),a("p",[s._v("鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，强烈建议安装 Docker 之后配置 "),a("code",[s._v("国内镜像加速")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"添加内核参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加内核参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加内核参数")]),s._v(" "),a("p",[s._v("默认配置下，如果在 CentOS 使用 Docker CE 看到下面的这些警告信息：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("WARNING: bridge-nf-call-iptables is disabled\nWARNING: bridge-nf-call-ip6tables is disabled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("请添加内核配置参数以启用这些功能。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/sysctl.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("-EOF\nnet.bridge.bridge-nf-call-ip6tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.bridge.bridge-nf-call-iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nEOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后重新加载 "),a("code",[s._v("sysctl.conf")]),s._v(" 即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl -p\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方 CentOS 安装文档"),a("OutboundLink")],1),s._v("。")])])])},[],!1,null,null,null);e.default=t.exports}}]);