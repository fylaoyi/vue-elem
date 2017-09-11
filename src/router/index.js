import Vue from 'vue'
import Router from 'vue-router'
import good from '@/components/good'
import rating from '@/components/rating'
import store from '@/components/store'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'good',
      component: good
    },{
      path:'/good',
      component:good
    },
    {
      path:'/rating',
      component:rating
    },{
      path:'/store',
      component:store
    }
  ]
})
