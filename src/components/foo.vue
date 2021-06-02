<template>
	<div class="container">
		<input type="text" v-model="msg" v-sqfocus/>
		<button @click="changeMsg()" v-background-d="{color: '#23c6c8'}">点我</button>
        <p>
            {{msg | restText}}
        </p>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			msg: 'I an in foo component.',
		}
	},
	methods: {
		changeMsg: function() {
			const strArr = this.msg
				.split(' ')
				.reverse()
				.join(' ');
			// console.log(this.$el); 
			this.msg = strArr;
		},
	},
	components: {},
    // 当全局过滤器和局部过滤器重名时，会采用局部过滤器
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString();
            const res = value.charAt(0).toUpperCase() + value.slice(1);
            console.log(res); 
            // return '德玛西亚';
            return res;
        }
    }
}
</script>

<style scoped>
button {
	margin: 10px;
}
</style>
