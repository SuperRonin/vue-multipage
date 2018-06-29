// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import common from '@/assets/css/common.css'
import $http from '@/assets/js/http'
import rem from '@/assets/js/rem'
import member from './member.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#member',
  components: { member },
  template: '<member/>'
})
