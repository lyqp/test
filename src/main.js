import Vue from 'vue'
import App from './components/Doc.vue'
import router from '@/router/index.js'
import dayjs from './dayjs'

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
