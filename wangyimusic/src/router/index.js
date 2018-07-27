import Vue from 'vue'
import Router from 'vue-router'
import TabBottom from '@/components/common/tab_Bottom'
import discover from '@/components/discover/discover'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'discover',
            component: discover
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        }
    ]
})