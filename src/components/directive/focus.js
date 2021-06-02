
const sqfocus = {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function(el) {
		// 聚焦元素
		el.focus();
	},
}
/**
 * export 和 export default 的区别:
 * https://www.cnblogs.com/fanyanzhao/p/10298543.html
 * 与export命令的区别：其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
 * export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同，而export default命令对外输出的变量名可以是任意的，这时import命令后面，不使用大括号。

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
 * **/
export default sqfocus;
