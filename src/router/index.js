import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import aboutUs from '@/views/aboutUs/aboutUs'
import homeC from '@/views/home/homeContent'
import product from '@/views/product/product'
import resolve from '@/views/resolve/resolve'
import one from '@/views/resolve/one'
import two from '@/views/resolve/two'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
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
        }
      ]
    },
    {
      path:'/resolve1',
      name:'one',
      component: one
    },
    {
      path:'/resolve2',
      name:'two',
      component: two
    },
  ]
})
