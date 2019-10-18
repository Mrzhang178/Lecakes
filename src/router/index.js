import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LunboOne from '@/components/lunbotu/lunboOne'
import LingquanXiadan from '@/components/lunbotu/lingquanxiadan'
import DessertGift from '@/components/DessertGift'
import BirthdayCake from '@/components/BirthdayCake'
import ShoppingCart from '@/components/ShoppingCart'
import Home from '@/components/Home'
import News from '@/components/news'
import Member from '@/components/member'
import Prodetails from '@/components/prodetails'
import Pinglun from '@/components/pinglun'
import Entry from '@/components/entry'
import NewsHome from '@/components/newsHome'
import BirZhuFu from '@/components/birZhuFu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      	
    },
    {
      path: '/lunboOne',
      name: 'LunboOne',
      component: LunboOne
    },
    {
      path: '/lingquanxiadan',
      name: 'LingquuanXiadan',
      component: LingquanXiadan
    },
    {
          path: '/news',
          name: 'News',
          component: News,
    },
    {
          path: '/member',
          name: 'Member',
          component: Member,
    },
    {
      path: '/dessertGift',
      name: 'DessertGift',
      component: DessertGift,
    },
    {
      path: '/birthdayCake',
      name: 'BirthdayCake',
      component: BirthdayCake,
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/prodetails',
      name: 'Prodetails',
      component: Prodetails
    },
    {
      path: '/pinglun',
      name: 'Pinglun',
      component: Pinglun
    },
    {
      path: '/entry',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/newsHome',
      name: 'NewsHome',
      component: NewsHome
    },
    {
      path: '/birZhuFu',
      name: 'BirZhuFu',
      component: BirZhuFu
    }
  ]
})
