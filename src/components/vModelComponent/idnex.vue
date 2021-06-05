<template>
  <div class="container">

     In  component~ 
     {{lovingVue}}
    <base-checkbox v-model="lovingVue"></base-checkbox>
  </div>
</template>

<script>
import baseCheckbox from './base';
export default {
  name: '',
  data() {
    return {
        lovingVue: true
    }
  },
  components: {
    baseCheckbox
  }
}
</script>

<style lang="less" scoped>

</style>
