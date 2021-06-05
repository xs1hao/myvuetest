//子组件,只接受数据展示，用函数式组件
export default {
	functional: true,
	name: 'item',
	render(h, context) {
		return (
			<div class="background-info" {...context.data}>
                <p>
                    In functionalJsxComponent
                </p>
				{context.props.data.title}
			</div>
		)
	},
}
