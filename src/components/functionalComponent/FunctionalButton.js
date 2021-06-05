/**
 * https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
 * vue 函数式组件写法：
 * 使用场景：简单的展示组件；
 * 2021年6月5日16:55:09
 * **/

export default {
	functional: true,
	render(createElement, context) {
        /**
         * contenx 是一个上下文对象；
         * 组件需要的一切都是通过 context 参数传递；
         * 包含了 8 个属性；
         */
		const { props, listeners, children } = context;
		return createElement(
			'button',
			{
				attrs: props,
				on: {
					click: listeners.click,
				},
			},
			children
		)
	},
}
