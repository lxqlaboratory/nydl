import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'

import '@/icons' // icon
import axios from 'axios'
Vue.prototype.$reqs = axios
Vue.config.productionTip = false

import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)

import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import globalVariable from '@/api/globalVariable'
Vue.prototype.GLOBAL = globalVariable
