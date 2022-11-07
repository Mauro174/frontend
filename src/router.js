import Vue from 'vue'
import Router from 'vue-router'
import MyHome from './components/Home-comp.vue'
import MyLogin from './components/Login-comp.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: MyHome},
        {path: '/login', component: MyLogin}
    ]
})