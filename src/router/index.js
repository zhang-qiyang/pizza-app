import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'
//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'
//三级路由
import CallMe from '@/components/about/contact/CallMe'
import Phone from '@/components/about/contact/Phone'
import Person from '@/components/about/contact/Person'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    },
    {
      path:'/about',
      name:'About',
      redirect:'/about/history',
      component:About,
      children:[
        {
          path:'/about/contact',
          name:'contactLink',
          redirect:'/about/contact/phone',
          component:Contact,children: [
            {
              path:'/about/contact/callMe',
              name:'callMeLink',
              component:CallMe
            },
            {
              path:'/about/contact/phone',
              name:'phoneNum',
              component:Phone
            },
            {
              path:'/about/contact/person',
              name:'personName',
              component:Person
            }
          ]
        },
        {
          path:'/about/delivery',
          name:'deliveryLink',
          component:Delivery
        },
        {
          path:'/about/history',
          name:'historyLink',
          component:History
        },
        {
          path:'/about/orderingGuide',
          name:'orderingGuideLink',
          component:OrderingGuide
        },
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'*',
      redirect:'/'
    }
  ],
  mode:'history'
})
