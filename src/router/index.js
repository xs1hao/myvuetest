// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Parent from '../pages/parent.vue';
import Home from '../pages/home';
import Default from '../pages/default';
import Bar from '../pages/bar';
import Foo from '../pages/foo';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/parent', component: Parent,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar }
      ]
    }
  ]
})

export default router;