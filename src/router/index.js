import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes : [
        {
            path : '/',
            name : 'home',
            component : HelloWorld
        },
        {
            path : '/about',
            name : 'about',
            component : HelloWorld2
        }
    ]
});