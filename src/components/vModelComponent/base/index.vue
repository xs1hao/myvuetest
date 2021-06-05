<template>
  <div class="container">

    <input type="checkbox"
           v-bind:checked="checked"
           @change="$emit('change',$event.target.checked)">
  </div>
</template>

<script>
export default {
  name: '',
  model:{
      prop: 'checked',
      event: 'change'
  },
  props:{
      checked: Boolean
  },
  data() {
    return {}
  },
  components: {},
}
</script>

<style lang="less" scoped>
</style>
