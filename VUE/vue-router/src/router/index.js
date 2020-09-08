import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import Hi from '@/components/hi.vue'
import Hi1 from '@/components/hi1.vue'
import Hi2 from '@/components/hi2.vue'
import Error from "@/components/Error.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '*',

            component: Error,
        },

        {
            path: '/hi',
            name: 'Hi',
            component: Hi,
            children: [
                {
                    path: 'hi1',
                    name: 'hi1',
                    component: Hi1
                }, {
                    path: 'hi2',
                    name: 'hi2',
                    component: Hi2
                }
            ]
        },
        {
            path: '/abc',
            name: 'abc',
            component: Error,
            beforeEnter: (to, from, next) => {
                // 钩子函数
                console.log("我进入了404页面");
                console.log(to);
                console.log(from);
                next()

            }
        }
    ]
})