import Vue from 'vue'
import DemoBlock from '@/components/DemoBlock'
import App from './App.vue'
import router from './router'
import store from './store'
import DejaVu from '../packages'

Vue.config.productionTip = false
Vue.use(DejaVu)
Vue.component('demo-block', DemoBlock)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
