import Vue from 'vue'
import Router from 'vue-router'
import TabBottom from '@/components/common/tab_Bottom'
import discover from '@/components/discover/discover'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'discover',
        component: discover
    }]
})