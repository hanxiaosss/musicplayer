import Vue from 'vue'
import Router from 'vue-router'
import TabBottom from '@/components/common/tab_Bottom'
import discover from '@/components/discover/discover'
import mine from '@/components/mine/mine'
import friends from '@/components/friends/friends'
import svideo from '@/components/video/video'
import account from '@/components/account/account'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'discover',
            component: discover
        },
        {
            path: '/discover',
            name: 'discover',
            component: discover
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/friends',
            name: 'friends',
            component: friends
        },
        {
            path: '/svideo',
            name: 'svideo',
            component: svideo
        },
        {
            path: '/account',
            name: 'account',
            component: account
        }
    ]
})