import Vue from 'vue'
import DemoBlock from '@/components/DemoBlock'
import IconPad from '@/components/IconPad'
import App from './App.vue'
import router from './router'
import store from './store'
import DejaVu from '../packages'

Vue.config.productionTip = false
Vue.use(DejaVu)
Vue.component('demo-block', DemoBlock)
Vue.component('icon-pad', IconPad)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
