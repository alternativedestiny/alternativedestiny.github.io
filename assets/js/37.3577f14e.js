(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{341:function(t,s,a){t.exports=a.p+"assets/img/lstm.95d342ab.jpg"},446:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lstm-学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lstm-学习笔记"}},[t._v("#")]),t._v(" LSTM 学习笔记")]),t._v(" "),s("h2",{attrs:{id:"_1-lstm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-lstm"}},[t._v("#")]),t._v(" 1. LSTM")]),t._v(" "),s("h3",{attrs:{id:"_1-1-lstm原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-lstm原理"}},[t._v("#")]),t._v(" 1.1. LSTM原理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("普通RNN的问题：")]),t._v(" "),s("blockquote",[s("p",[t._v("在RNN中信息原的记忆要进过长途跋涉才能抵达最后一个时间点. 然后我们得到误差, 而且在反向传递得到的误差的时候, 他在每一步都会 乘以一个自己的参数 W.\n如果这个 W 是一个小于1 的数, 比如0.9. 这个0.9 不断乘以误差, 误差传到初始时间点也会是一个接近于零的数, 所以对于初始时刻, 误差相当于就消失了. 我们把这个问题叫做梯度消失或者梯度弥散 Gradient vanishing.\n反之如果 W 是一个大于1 的数, 比如1.1 不断累乘, 则到最后变成了无穷大的数, RNN被这无穷大的数撑死了, 这种情况我们叫做梯度爆炸, Gradient exploding. 这就是普通 RNN 没有办法回忆起久远记忆的原因.")])])]),t._v(" "),s("li",[s("p",[t._v("LSTM（long short-term memory）长短期记忆")]),t._v(" "),s("blockquote",[s("p",[t._v("LSTM 和普通 RNN 相比, 多出了三个控制器. (输入控制, 输出控制, 忘记控制).")])]),t._v(" "),s("img",{attrs:{src:a(341),width:"600"}})]),t._v(" "),s("li",[s("p",[t._v("参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://morvanzhou.github.io/tutorials/machine-learning/keras/2-4-B-LSTM/",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是LSTM🔗"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/88892937",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速理解LSTM，从懵逼到装逼🔗"),s("OutboundLink")],1)])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-lstm-预测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-lstm-预测"}},[t._v("#")]),t._v(" 1.2. LSTM 预测")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("前提：")]),t._v(" "),s("blockquote",[s("p",[t._v("个人认为程序的预测的关键首先在于训练集与测试集的选择，好的训练集与测试集应当有合理的、可预期的规律，而不是拿上数据就开始训练：在预测某一时段的数据时，并不只是用之前的数据直接做训练，而应该考虑该数据是否有一定的分布规律。\n比如一个数据有每天有一定的相似性，那么是否应该将过去几天同一时刻的数据纳入训练模型，从而分配有针对性的数据集。之后才是模型调参、训练等。")])])]),t._v(" "),s("li",[s("p",[t._v("代码详解")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" seaborn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sns\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sequential\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dense"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Activation\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LSTM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Dropout\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preprocessing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MinMaxScaler\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" EarlyStopping\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" keras "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" losses\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx.csv'")]),t._v("\ndf1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decimal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low_memory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_bad_lines"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf_all "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nv1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'col1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("141120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("141180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据归一化处理：将原始数据映射到0—1范围内")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'float32'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nscaler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MinMaxScaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_range"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit_transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据数据量分训练集和测试集大小，这里的数据是1min一个点，一天1440条数据")]),t._v("\ntrain_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1380")]),t._v("\ntest_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据集，非固定格式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 起始位置，数据长度，天数")]),t._v("\n    x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 出入，输出")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# size条输入")]),t._v("\n        old_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中一条输入")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            old_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第n周第m点的数据")]),t._v("\n        x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第day周第i点数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用过去14周第一天的数据去预测第15周第一天的数据")]),t._v("\ndays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x_train：训练集输入，y_train：训练集输出")]),t._v("\nx_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x_test：测试集输入，y_test：测试集输出")]),t._v("\nx_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x_train.shape(训练数据组数，时间间隔，数据维数(特征个数))")]),t._v("\nx_train "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模型结构")]),t._v("\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sequential"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义 LSTM 模型，第一个隐藏层含有 100 个神经元")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LSTM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input_shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dropout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂时从网络中移除神经网络中的单元")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dense"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出维数")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Activation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'relu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 激活函数")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用均方差损失函数，优化器Adam，评估标准")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loss"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("losses"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean_squared_error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 损失函数mse")]),t._v("\n            optimizer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adam'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 优化器")]),t._v("\n            metrics"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mae'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'acc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 评估标准")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模型将会进行 30 个 epochs 的训练，每个 batch 的大小为 100")]),t._v("\nhistory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    validation_data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    callbacks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EarlyStopping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'val_loss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" patience"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    verbose"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shuffle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("summary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 做出预测")]),t._v("\ntest_predict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrain_predict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预测值求逆")]),t._v("\ntest_predict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse_transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_predict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrain_predict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse_transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_predict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 真实值求逆")]),t._v("\ny_test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse_transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny_train "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scaler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse_transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br"),s("span",{staticClass:"line-number"},[t._v("68")]),s("br"),s("span",{staticClass:"line-number"},[t._v("69")]),s("br"),s("span",{staticClass:"line-number"},[t._v("70")]),s("br"),s("span",{staticClass:"line-number"},[t._v("71")]),s("br"),s("span",{staticClass:"line-number"},[t._v("72")]),s("br"),s("span",{staticClass:"line-number"},[t._v("73")]),s("br"),s("span",{staticClass:"line-number"},[t._v("74")]),s("br"),s("span",{staticClass:"line-number"},[t._v("75")]),s("br"),s("span",{staticClass:"line-number"},[t._v("76")]),s("br"),s("span",{staticClass:"line-number"},[t._v("77")]),s("br"),s("span",{staticClass:"line-number"},[t._v("78")]),s("br"),s("span",{staticClass:"line-number"},[t._v("79")]),s("br"),s("span",{staticClass:"line-number"},[t._v("80")]),s("br"),s("span",{staticClass:"line-number"},[t._v("81")]),s("br"),s("span",{staticClass:"line-number"},[t._v("82")]),s("br"),s("span",{staticClass:"line-number"},[t._v("83")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-attention-注意力机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-attention-注意力机制"}},[t._v("#")]),t._v(" 2. Attention 注意力机制")])])}),[],!1,null,null,null);s.default=r.exports}}]);