
/**
 * 在 vue中 使用jsx 语法；
 * https://juejin.cn/post/6844903607909744654
 * 
 */

/* eslint-disable no-unused-vars */
import Item from './functionalJsxComponent/index'

export default {
	data() {
		return {
			name: 'In jsx_component',
			id: 0,
            showItem: false
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
        capitalize: function (value) {
            return '德玛西亚';
        }
	},
    filters: {
        capitalize: function (value) {
            return '德玛西亚';
        }
    },
	// eslint-disable-next-line no-unused-vars
	render(h) {
        // 在 jsx 中使用 v-if, 先定义模板；然后在使用；
        let ifTemplate = <p>{this.name}</p>;
        if (this.showItem) {
            ifTemplate = <Item data={this.student.likeBooks[this.id]}></Item> 
        }
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
							{/* <span>{this.capitalize(item.title)}</span>-- */}
							<span>{item.title}</span>--
							<span>{item.author}</span>
						</div>
					)
				})}
                {
                    ifTemplate

                /* {
                    this.showItem 
                    ? <Item data={this.student.likeBooks[this.id]}></Item> 
                    : <p> meiyou </p>
                } */}
			</div>
		)
	},
}
