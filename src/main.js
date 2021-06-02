// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import router from './router/index.js'
import App from './App';
import Directives from './components/directive';
import Filters from './components/filters';

Vue.use(Directives);
Vue.use(Filters);

new Vue({
    el: '#app',
    router, // 将路由挂载到根实例上；
    // components: { App },
    // template: '<App/>',
    render: h => h(App)
})