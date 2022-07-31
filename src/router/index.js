import Vue from "vue"
import VueRouter from 'vue-router'

// 导入相对应的路由
import index from '../components/index.vue'
import Doc from '../components/Doc.vue'
import music from '../components/music.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/doc',
            name:'doc',
            component:Doc
        },
        {
            path:'/music',
            name:'music',
            component:music
        }
    ]
})

export default router