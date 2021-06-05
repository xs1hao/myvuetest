<template>
  <div class="container">
    In bar component~
    <div>
      <p class="background-info">
        使用mixins 拿到的
        <!-- <pre class="font-weight-6"> {{studentName}}</pre> -->
      </p>
      <functionctional-button @click="parentLog">
        函数式组件
      </functionctional-button>

      <jsx-component :student="student"></jsx-component>
    </div>
    <Counter :names="'王二小'"
             @parent-log="parentLog($event)"></Counter>
  </div>
</template>

<script>
import Counter from '../components/counter/counter.vue'
import { Person } from '../mixins/mixins'
import FunctionctionalButton from '../components/functionalComponent/FunctionalButton'
import JsxComponent from '../components/jsxComponent/index.jsx'


export default {
  mixins: [Person],
  name: 'BarHaHa',
  data() {
    return {}
  },
  methods: {
    parentLog(eve) {
      console.log('In Bar_component', eve)
    },
  },
  components: {
    Counter,
    FunctionctionalButton,
    JsxComponent
  },
  //   生命周期函数测试
  //   beforeCreate() {
  //     console.log('beforeCreate ~')
  //   },
  created() {
    //   console.log('created ~')
    // console.log(this.student);
  },
  //   beforeMount() {
  //     console.log('beforeMount ~')
  //   },
  //   mounted() {
  //     console.log('mounted ~')
  //   },
  //   beforeUpdate() {
  //     console.log('beforeUpdate ~')
  //   },
  //   updated() {
  //     console.log('updated ~')
  //   },
  //   beforeDestroy() {
  //     console.log('beforeDestroy ~')
  //   },
  //   destroyed() {
  //     console.log('destroyed ~')
  //   }
}
</script>

<style lang="less" scoped>
</style>
