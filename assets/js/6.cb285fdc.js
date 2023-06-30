(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{382:function(s,t,a){s.exports=a.p+"assets/img/mysql-web.aba04bbe.png"},383:function(s,t,a){s.exports=a.p+"assets/img/2019-09-17-20-23-54.aa14ad6e.png"},384:function(s,t,a){s.exports=a.p+"assets/img/2019-09-17-20-26-10.3c952745.png"},385:function(s,t,a){s.exports=a.p+"assets/img/2019-09-17-20-31-35.2cdf1b6f.png"},386:function(s,t,a){s.exports=a.p+"assets/img/stopmysql.7b291bae.png"},387:function(s,t,a){s.exports=a.p+"assets/img/resetmysql.7fe426b6.png"},388:function(s,t,a){s.exports=a.p+"assets/img/startmysql.bb5c7ecd.png"},389:function(s,t,a){s.exports=a.p+"assets/img/loginmysql.127ff870.png"},473:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql笔记"}},[s._v("#")]),s._v(" MySQL笔记")]),s._v(" "),t("h2",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1. 安装")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("下载"),t("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL🔗"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:a(382),alt:"安装"}})])]),s._v(" "),t("li",[t("p",[s._v("解压文件到安装目录，如D:\\mysql-8.0.17-winx64")])]),s._v(" "),t("li",[t("p",[s._v("创建配置文件my.ini")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置3306端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\mysql-8.0.17-winx64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\mysql-8.0.17-winx64\\data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connect_errors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为UTF8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-storage-engine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("INNODB")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default_authentication_plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql_native_password")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端默认字符集")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端连接服务端时默认使用的端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("以管理员身份打开cmd，加载至MySQL安装目录，初始化命令：mysqld --initialize --console")]),s._v(" "),t("p",[s._v("画横线处为初始密码")]),s._v(" "),t("p",[t("img",{attrs:{src:a(383),alt:"初始化"}})])]),s._v(" "),t("li",[t("p",[s._v("启动服务，分别执行")]),s._v(" "),t("p",[s._v("mysqld --install")]),s._v(" "),t("p",[s._v("mysqld --net start mysql")]),s._v(" "),t("p",[t("img",{attrs:{src:a(384),alt:"开启服务"}})])]),s._v(" "),t("li",[t("p",[s._v("停止服务")]),s._v(" "),t("p",[s._v("net stop mysql")])])]),s._v(" "),t("h2",{attrs:{id:"_2-mysql使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql使用"}},[s._v("#")]),s._v(" 2. mysql使用")]),s._v(" "),t("h3",{attrs:{id:"_2-1-基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本用法"}},[s._v("#")]),s._v(" 2.1. 基本用法")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("进入MySQL")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mysql-8.0.17-winx64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\nEnter password: ******\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建数据库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create database test1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建表格：直接创建比较复杂，可以使用Navicat等工具")])]),s._v(" "),t("li",[t("p",[s._v("进入表格：use test1")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use test1\nDatabase changed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("插入数据")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into table2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OCCUR_TIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ac'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.49")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("退出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\nBye\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-2-mysql插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mysql插入数据"}},[s._v("#")]),s._v(" 2.2. MySQL插入数据")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymysql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接数据库：ip，username，password，sqlname")]),s._v("\ndb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pymysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建游标")]),s._v("\ncursor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cursor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次插入10条语句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" df"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("iloc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sql语句")]),s._v("\n    sql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insert into table_name(col1_name, col2_name) "')]),s._v(" \\\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"values ('%s', '%s')\"")]),s._v(" \\\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行sql语句")]),s._v("\n    cursor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交到数据库执行")]),s._v("\ndb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭数据库")]),s._v("\ndb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"_2-3-mysql查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-mysql查询"}},[s._v("#")]),s._v(" 2.3. MySQL查询")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("查找")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 列名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("筛选")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选条件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("排序")])])]),s._v(" "),t("h3",{attrs:{id:"_2-4-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-函数"}},[s._v("#")]),s._v(" 2.4. 函数")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("命令")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键字")]),s._v(" "),t("th",[s._v("功能")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Distinct")]),s._v(" "),t("td",[s._v("不同/去重")])]),s._v(" "),t("tr",[t("td",[s._v("Order by asc/dsc")]),s._v(" "),t("td",[s._v("升降序排列")])]),s._v(" "),t("tr",[t("td",[s._v("Update")]),s._v(" "),t("td",[s._v("修改表数据")])]),s._v(" "),t("tr",[t("td",[s._v("Top/Limit")]),s._v(" "),t("td",[s._v("限定条目")])]),s._v(" "),t("tr",[t("td",[s._v("Like")]),s._v(" "),t("td",[s._v("模糊查找")])]),s._v(" "),t("tr",[t("td",[s._v("In")]),s._v(" "),t("td",[s._v("多值操作")])]),s._v(" "),t("tr",[t("td",[s._v("Between")]),s._v(" "),t("td",[s._v("介于两值之间")])]),s._v(" "),t("tr",[t("td",[s._v("As")]),s._v(" "),t("td",[s._v("别名")])]),s._v(" "),t("tr",[t("td",[s._v("Join")]),s._v(" "),t("td",[s._v("多个表之间的关系")])]),s._v(" "),t("tr",[t("td",[s._v("Union")]),s._v(" "),t("td",[s._v("合并多个Select结果")])]),s._v(" "),t("tr",[t("td",[s._v("Select Into")]),s._v(" "),t("td",[s._v("从一个表中取数据放入另一个表")])])])])]),s._v(" "),t("li",[t("p",[s._v("约束 Constraints")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键字")]),s._v(" "),t("th",[s._v("功能")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("not null")]),s._v(" "),t("td",[s._v("强制不接受Null值")])]),s._v(" "),t("tr",[t("td",[s._v("unique")]),s._v(" "),t("td",[s._v("约束唯一标识")])]),s._v(" "),t("tr",[t("td",[s._v("primary key")]),s._v(" "),t("td",[s._v("主键")])]),s._v(" "),t("tr",[t("td",[s._v("foreign key")]),s._v(" "),t("td",[s._v("指向另一个表中的主键")])]),s._v(" "),t("tr",[t("td",[s._v("check")]),s._v(" "),t("td",[s._v("用于限制列中值的范围")])]),s._v(" "),t("tr",[t("td",[s._v("default")]),s._v(" "),t("td",[s._v("默认值")])]),s._v(" "),t("tr",[t("td",[s._v("create index")]),s._v(" "),t("td",[s._v("创建索引")])]),s._v(" "),t("tr",[t("td",[s._v("drop")]),s._v(" "),t("td",[s._v("删除索引、表、数据库")])]),s._v(" "),t("tr",[t("td",[s._v("alter")]),s._v(" "),t("td",[s._v("在表中添加、修改或删除列")])]),s._v(" "),t("tr",[t("td",[s._v("auto increment")]),s._v(" "),t("td",[s._v("自增字段")])]),s._v(" "),t("tr",[t("td",[s._v("view")]),s._v(" "),t("td",[s._v("可视化表")])]),s._v(" "),t("tr",[t("td",[s._v("date")]),s._v(" "),t("td",[s._v("日期")])])])])]),s._v(" "),t("li",[t("p",[s._v("函数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("函数名")]),s._v(" "),t("th",[s._v("功能")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("avg(col_name)")]),s._v(" "),t("td",[s._v("平均值（不包含Null）")])]),s._v(" "),t("tr",[t("td",[s._v("count(col_name)")]),s._v(" "),t("td",[s._v("制定列值的数目（不含Null）")])]),s._v(" "),t("tr",[t("td",[s._v("first(col_name)")]),s._v(" "),t("td",[s._v("返回指定字段中第一个记录的值")])]),s._v(" "),t("tr",[t("td",[s._v("last(col_name)")]),s._v(" "),t("td",[s._v("返回指定字段中最后一个记录的值")])]),s._v(" "),t("tr",[t("td",[s._v("max(col_name)")]),s._v(" "),t("td",[s._v("返回一列中的最大值")])]),s._v(" "),t("tr",[t("td",[s._v("min(col_name)")]),s._v(" "),t("td",[s._v("返回一列中的最小值")])]),s._v(" "),t("tr",[t("td",[s._v("sum(col_name)")]),s._v(" "),t("td",[s._v("返回数值列的总和")])]),s._v(" "),t("tr",[t("td",[s._v("group by(col_namae)")]),s._v(" "),t("td",[s._v("根据一个或多个列对结果进行分组")])]),s._v(" "),t("tr",[t("td",[s._v("having")]),s._v(" "),t("td",[s._v("where不能和合计函数一起使用")])]),s._v(" "),t("tr",[t("td",[s._v("ucase")]),s._v(" "),t("td",[s._v("把字段值转换成大写")])]),s._v(" "),t("tr",[t("td",[s._v("lcase")]),s._v(" "),t("td",[s._v("把字段值转换成小写")])]),s._v(" "),t("tr",[t("td",[s._v("mid")]),s._v(" "),t("td",[s._v("从文本字段中提取字符")])]),s._v(" "),t("tr",[t("td",[s._v("len")]),s._v(" "),t("td",[s._v("返回文本字段长度")])]),s._v(" "),t("tr",[t("td",[s._v("round")]),s._v(" "),t("td",[s._v("把数值字段舍入为指定小数位")])]),s._v(" "),t("tr",[t("td",[s._v("now")]),s._v(" "),t("td",[s._v("返回当前的日期和时间")])]),s._v(" "),t("tr",[t("td",[s._v("formart")]),s._v(" "),t("td",[s._v("对字段的显示进行格式化")])])])])])]),s._v(" "),t("h3",{attrs:{id:"_2-5-sql性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-sql性能优化"}},[s._v("#")]),s._v(" 2.5. SQL性能优化")]),s._v(" "),t("ol",[t("li",[s._v("减少数据访问")]),s._v(" "),t("li",[s._v("返回更少的数据")]),s._v(" "),t("li",[s._v("减少交互次数")]),s._v(" "),t("li",[s._v("减少数据库服务器CPU运算")]),s._v(" "),t("li",[s._v("利用更多的资源")])]),s._v(" "),t("h2",{attrs:{id:"_3-备注"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-备注"}},[s._v("#")]),s._v(" 3. 备注")]),s._v(" "),t("ol",[t("li",[s._v("MySQL大小写不敏感")]),s._v(" "),t("li",[s._v("MySQL字符或英文的问题\n"),t("ol",[t("li",[s._v("错误提示"),t("code",[s._v("pymysql.err.InternalError: (1054, \"Unknown column 'xxxxx' in 'field list'\")")])]),s._v(" "),t("li",[s._v("解决方法：在SQL语句中将 %s 加引号改成 '%s'")])])])]),s._v(" "),t("h2",{attrs:{id:"_4-navicat可视化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-navicat可视化工具"}},[s._v("#")]),s._v(" 4. Navicat可视化工具")]),s._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/5f693b4c9468",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装激活教程🔗"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("连接数据库并修改初始密码")]),s._v(" "),t("p",[t("img",{attrs:{src:a(385),alt:"navicat"}})])])]),s._v(" "),t("h2",{attrs:{id:"_5-mysql密码重置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-mysql密码重置"}},[s._v("#")]),s._v(" 5. MySQL密码重置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建一个文本文件，比如abc.txt，写入下面的指令，新root密码为123456")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("以管理员身份打开cmd")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("停止mysql")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("net stop mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("img",{attrs:{src:a(386),width:"400"}})]),s._v(" "),t("li",[t("p",[s._v("执行重置命令，执行完成后，Ctrl+c退出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqld --init-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("mysql-8.0.17-winx64"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('abc.txt"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--console")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("img",{attrs:{src:a(387),width:"900"}})]),s._v(" "),t("li",[t("p",[s._v("启动MySQL")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("net start mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("img",{attrs:{src:a(388),width:"400"}})]),s._v(" "),t("li",[t("p",[s._v("用新的密码登录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("img",{attrs:{src:a(389),width:"500"}})])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);