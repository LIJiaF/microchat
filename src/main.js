// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store/store.js'

import user from './assets/js/pub_user.js'

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.user = user

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
