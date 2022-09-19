import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import dayjs from './dayjs'

const axios = require('axios')// 引用axios
axios.default.baseURL = 'http://43.142.61.134:9090/user' // 设置一个基础请求地址
Vue.prototype.$axios = axios // 全局注册，之后可在其他组件中通过 this.$axios 发送数据

// Vue.config.productionTip = false 阻止没必要的报错

Vue.filter('dateformat', function (time) {
  //对time格式化，如：年-月-日 小时-分钟-秒
  const day = dayjs(time).format('YYYY-MM-DD HH:mm:s');//这里这个函数是从day.js里导进来的，就是第66行
  //把结果return出去
  return day
}),

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
