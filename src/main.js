import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'normalize.css/normalize.css'
import less from 'less'

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(less);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iView,
  render: h => h(App)
})
