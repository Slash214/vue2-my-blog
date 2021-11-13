import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/static/style/rest.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
