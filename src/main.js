import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import {getRequest, postRequest} from './untils/http'
// // 挂载全局使用的方法
// Vue.prototype.getRequest = getRequest;
// Vue.prototype.postRequest = postRequest;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
