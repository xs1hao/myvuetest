// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import router from './router/index.js'
import App from './App';
import Directives from './components/directive';
import Filters from './components/filters';

import './assets/style.less';
/**
 * Vue.use();
 * 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
 * 该方法需要在调用 new Vue() 之前被调用。
 * 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
 * 
 * **/
// 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
// 该方法需要在调用 new Vue() 之前被调用。
// 当 install 方法被同一个插件多次调用，插件将只会被安装一次。

Vue.use(Directives);
Vue.use(Filters);

var vm = new Vue({
    el: '#app',
    router, // 将路由挂载到根实例上；
    // components: { App },
    // template: '<App/>',
    render: h => h(App)
})
window.vm = vm;