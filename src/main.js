import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
Vue.use(axios)
Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://api.github.com/users/'
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
