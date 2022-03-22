// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//js
import FastClick from 'fastclick'
FastClick.attach(document.body);

/*Swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

//axios
import axios from 'axios'
Vue.prototype.$http = axios

//vuex
import store from './store/index.js'

//css
import 'css/reset.css'
import 'css/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


