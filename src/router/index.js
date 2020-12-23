import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import aboutUs from '@/views/aboutUs/aboutUs'
import homeC from '@/views/home/homeContent'
import product from '@/views/product/product'
import resolve from '@/views/resolve/resolve'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: home,
      hidden: true,
      redirect:'/homec',
      children:[
        {
          path:'/homec',
          name:'homec',
          component: homeC
        },
        {
          path:'/product',
          name:'product',
          component: product
        },
        {
          path:'/aboutUs',
          name:'aboutUs',
          component: aboutUs
        },
        {
          path:'/resolve',
          name:'resolve',
          component: resolve
        },
      ]
    }
  ]
})
