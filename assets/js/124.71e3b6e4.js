(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{603:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-compose-实战-django"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-实战-django","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 实战 Django")]),s._v(" "),t("p",[s._v("本小节内容适合 "),t("code",[s._v("Python")]),s._v(" 开发人员阅读。")]),s._v(" "),t("p",[s._v("我们现在将使用 "),t("code",[s._v("Docker Compose")]),s._v(" 配置并运行一个 "),t("code",[s._v("Django/PostgreSQL")]),s._v(" 应用。")]),s._v(" "),t("p",[s._v("在一切工作开始前，需要先编辑好三个必要的文件。")]),s._v(" "),t("p",[s._v("第一步，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑 "),t("code",[s._v("Dockerfile")]),s._v(" 文件来指定 Docker 容器要安装内容。内容如下：")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PYTHONUNBUFFERED 1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /code\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /code\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" requirements.txt /code/\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r requirements.txt\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" . /code/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("以上内容指定应用将使用安装了 Python 以及必要依赖包的镜像。更多关于如何编写 "),t("code",[s._v("Dockerfile")]),s._v(" 文件的信息可以查看 [镜像创建](../image/create.md#利用 Dockerfile 来创建镜像) 和 "),t("router-link",{attrs:{to:"/zh/dockerfile/"}},[s._v(" Dockerfile 使用")]),s._v("。")],1),s._v(" "),t("p",[s._v("第二步，在 "),t("code",[s._v("requirements.txt")]),s._v(" 文件里面写明需要安装的具体依赖包名。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Django"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("1.8,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("2.0\npsycopg2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第三步，"),t("code",[s._v("docker-compose.yml")]),s._v(" 文件将把所有的东西关联起来。它描述了应用的构成（一个 web 服务和一个数据库）、使用的 Docker 镜像、镜像之间的连接、挂载到容器的卷，以及服务开放的端口。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python3 manage.py runserver 0.0.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/code\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000:8000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("现在我们就可以使用 "),t("code",[s._v("docker-compose run")]),s._v(" 命令启动一个 "),t("code",[s._v("Django")]),s._v(" 应用了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose run web django-admin.py startproject django_example "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Compose 会先使用 "),t("code",[s._v("Dockerfile")]),s._v(" 为 web 服务创建一个镜像，接着使用这个镜像在容器里运行 "),t("code",[s._v("django-admin.py startproject composeexample")]),s._v(" 指令。")]),s._v(" "),t("p",[s._v("这将在当前目录生成一个 "),t("code",[s._v("Django")]),s._v(" 应用。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nDockerfile       docker-compose.yml          django_example       manage.py       requirements.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果你的系统是 Linux,记得更改文件权限。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$USER")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("首先，我们要为应用设置好数据库的连接信息。用以下内容替换 "),t("code",[s._v("django_example/settings.py")]),s._v(" 文件中 "),t("code",[s._v("DATABASES = ...")]),s._v(" 定义的节点内容。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("DATABASES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.postgresql'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这些信息是在 "),t("a",{attrs:{href:"https://store.docker.com/images/postgres/",target:"_blank",rel:"noopener noreferrer"}},[s._v("postgres"),t("OutboundLink")],1),s._v(" 镜像固定设置好的。然后，运行 "),t("code",[s._v("docker-compose up")]),s._v(" ：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose up\n\ndjango_db_1 is up-to-date\nCreating django_web_1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nCreating django_web_1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nAttaching to django_db_1, django_web_1\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The files belonging to this database system will be owned by user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" This user must also own the server process.\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The database cluster will be initialized with locale "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en_US.utf8"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The default database encoding has accordingly been "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF8"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\ndb_1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The default text search configuration will be "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"english"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Performing system checks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" System check identified no issues "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0 silenced"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" November 23, 2017 - 06:21:19\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Django version 1.11.7, using settings "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_example.settings'")]),s._v("\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Starting development server at http://0.0.0.0:8000/\nweb_1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Quit the server with CONTROL-C.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("这个 "),t("code",[s._v("Django")]),s._v(" 应用已经开始在你的 Docker 守护进程里监听着 "),t("code",[s._v("8000")]),s._v(" 端口了。打开 "),t("code",[s._v("127.0.0.1:8000")]),s._v(" 即可看到 "),t("code",[s._v("Django")]),s._v(" 欢迎页面。")]),s._v(" "),t("p",[s._v("你还可以在 Docker 上运行其它的管理命令，例如对于同步数据库结构这种事，在运行完 "),t("code",[s._v("docker-compose up")]),s._v(" 后，在另外一个终端进入文件夹运行以下命令即可：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose run web python manage.py syncdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);