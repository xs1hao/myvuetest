<template>
  <div class="container">
    In bar component~
    <Counter :names="'王二小'"
             @parent-log="parentLog($event)"></Counter>
  </div>
</template>

<script>
import Counter from './counter/counter.vue'
export default {
  name: '',
  data() {
    return {
      
    }
  },
  methods: {
    parentLog(eve) {
      console.log(eve)
    },
  },
  components: {
    Counter,
  },
}
</script>

<style lang="less" scoped></style>
