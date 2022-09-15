import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:Home
  },{
    path:'/city',
    name:'City',
    component:City
  },{
    path:'/detail/:id',
    name:'Detail',
    component:Detail
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPostition){
    return{x: 0, y: 0}
  }
})

export default router
