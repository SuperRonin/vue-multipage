// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import common from '@/assets/css/common.css'
import rem from '@/assets/js/rem'
import $http from '@/assets/js/http'
import mygrade from './my-grade.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mygrade',
  components: { mygrade },
  template: '<mygrade/>'
})
