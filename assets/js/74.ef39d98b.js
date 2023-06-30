(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{452:function(_,v,l){"use strict";l.r(v);var i=l(3),t=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"机器学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机器学习"}},[_._v("#")]),_._v(" 机器学习")]),_._v(" "),v("h2",{attrs:{id:"_1-机器学习基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-机器学习基础"}},[_._v("#")]),_._v(" 1. 机器学习基础")]),_._v(" "),v("ol",[v("li",[_._v("选择合适的算法\n"),v("ol",[v("li",[_._v("考虑使用机器学习算法的目的\n"),v("ol",[v("li",[_._v("如果想要预测目标变量的值，则可以选择监督学习算法")]),_._v(" "),v("li",[_._v("否则可以选择无监督学习算法")])])]),_._v(" "),v("li",[_._v("确定目标变量类型\n"),v("ol",[v("li",[_._v("目标变量是离散型，可以选择分类算法")]),_._v(" "),v("li",[_._v("目标变量是连续型，需要选择回归算法")])])])])])]),_._v(" "),v("h2",{attrs:{id:"_2-k-临近算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-k-临近算法"}},[_._v("#")]),_._v(" 2. k-临近算法")]),_._v(" "),v("ol",[v("li",[_._v("工作原理：存在一个样本数据集合，也称作训练样本集，比关切样本集中每个数据都存在标签，即我们知道样本集中每一数据与所属分类的对应关系。输入没有标签的新数据后，将数据的每个特征与样本集中数据对应的特征进行比较，然后算法提取样本集中特征最相似（最邻近）数据的分类标签。一般来说，我们只选取数据集中前k个最相似的数据，这就是k-临近算法中k的出处，通常k是不大于20的整数。最后，选择k个最相似数据中出现次数最多的分类，作为新数据的分类。")]),_._v(" "),v("li",[_._v("优点：精度高、对异常值不敏感、无数据输入假定")]),_._v(" "),v("li",[_._v("缺点：计算复杂度高、空间复杂度高、无法给出数据的内在含义")]),_._v(" "),v("li",[_._v("适用数据范围：数值型和标称型")]),_._v(" "),v("li",[_._v("k-临近算法的一般流程：\n"),v("ol",[v("li",[_._v("收集数据：可以使用任何方法")]),_._v(" "),v("li",[_._v("准备数据：距离计算所需要的数值，最好是结构化的数据格式")]),_._v(" "),v("li",[_._v("分析数据：可以使用任何方法")]),_._v(" "),v("li",[_._v("测试算法：计算错误率")]),_._v(" "),v("li",[_._v("使用方法：首先需要输入样本数据和机构化的输出结果，然后运行k-临近算法判定输入数据分别属于哪个分类，最后应用对计算出的分类执行后续的处理")])])])]),_._v(" "),v("h2",{attrs:{id:"_3-决策树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-决策树"}},[_._v("#")]),_._v(" 3. 决策树")]),_._v(" "),v("ol",[v("li",[_._v("优点：计算复杂度不高，输出结果易于理解，对中间值的缺失不敏感，可以处理不相关特征数据")]),_._v(" "),v("li",[_._v("缺点：可能会产生过度匹配问题")]),_._v(" "),v("li",[_._v("使用数据类型：数值型和标称型")]),_._v(" "),v("li",[_._v("决策树的一般流程\n"),v("ol",[v("li",[_._v("收集数据：可以使用任何方法")]),_._v(" "),v("li",[_._v("准备数据：树构造算法只适用于标称型数据，因此数值型数据必须离散化")]),_._v(" "),v("li",[_._v("分析数据：可以使用任何方法，构造树完成之后，我们应该检查图形是否符合预期")]),_._v(" "),v("li",[_._v("训练算法：构造树的数据结构")]),_._v(" "),v("li",[_._v("测试算法：使用经验树计算错误率")]),_._v(" "),v("li",[_._v("使用算法：此步骤可以适用于任何监督学习算法，而使用决策树可以更好地理解数据的内在含义")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);