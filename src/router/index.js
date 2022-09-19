import Vue from "vue"
import VueRouter from 'vue-router'

// 导入相对应的路由
import login from '../view/login.vue';
import signup from '../view/signup.vue';
import music from '../components/music.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: 'login',
            component: login
        },
        {
            path: "/login",
            name: 'login1',// 必须具有唯一性
            component: login
        },
        {
            path: "/signup",
            name: 'signup',
            component: signup
        },
        {
                path: '/music',
                name: 'music',
                component: music
        },
    ]
})

export default router