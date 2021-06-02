import sqfocus from './focus';
import backgroundD from './background';
// 自定义指令
const directives = {
    sqfocus,
    backgroundD
}
 
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}