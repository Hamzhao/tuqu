// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './assets/js/index'
import resource from 'vue-resource'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

//引入vuex
import store from './store'

Vue.use(Vuex)
Vue.use(resource)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  data:{
    bus: new Vue()
  },
  template: '<App/>',
  components: { App }
})
