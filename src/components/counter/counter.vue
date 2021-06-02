<template>
  <div class="counter">
     <p>
         {{this.count}}
     </p>
    <button @click="add()">加一个</button>
    <button @click="sub()">减一个</button>
    <button @click="pLog()">Parent加一个</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
      count: {
          type: Number,
          default: 13,
          required: false,
          validator: function(value) {
              return value > 0;
          }
      },
      names: {
          type: String,
          required: true,
          validator: function(value) {
              return value.length > 1;
          }
      }
  },
  data() {
    return {
        
    }
  },
  methods: {
      add(){
          this.count++;
      },
      sub(){
          this.count--;
      },
      pLog() {
          this.$emit('parent-log', this.names)
      }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
    button{
        margin: 10px;
    }
</style>
