import restText from './resetText';

const filters = {
    restText
}
 
export default {
  install(Vue) {
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key])
    })
  },
}