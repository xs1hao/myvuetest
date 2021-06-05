/* eslint-disable no-unused-vars */
import Item from './functionalJsxComponent/index'

export default {
	data() {
		return {
			name: 'In jsx_component',
			id: 0,
		}
	},
	props: {
		student: {
			type: Object,
		},
	},
	methods: {
		// 监听 onInput 事件进行赋值操作
		$_handleInput(e) {
			this.name = e.target.value
			console.log(this.student)
		},
		logOneBook(e) {
			this.id++
			if (this.id >= 4) {
				this.id = 0
			}
		},
	},
	// eslint-disable-next-line no-unused-vars
	render(h) {
		// 传递 value 属性 并监听 onInput事件
		return (
			<div style="margin: 20px">
				<input value={this.name} onInput={this.$_handleInput}></input>
				{this.student.likeBooks.map((item) => {
					return (
						<div
							class="m-t-10 cur-pointer"
							onClick={this.logOneBook}
						>
							<span>{item.title}</span>--
							<span>{item.author}</span>
						</div>
					)
				})}
				<Item data={this.student.likeBooks[this.id]}></Item>
			</div>
		)
	},
}
