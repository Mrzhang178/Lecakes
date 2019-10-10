import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LunboOne from '@/components/lunbotu/lunboOne'
// import LunboTwo from '@/components/lunbotu/lunboTwo'
// import LunboThree from '@/components/lunbotu/lunboThree'
// import LunboFour from '@/components/lunbotu/lunboFour'
// import LunboFive from '@/components/lunbotu/lunboFive'
import DessertGift from '@/components/DessertGift'
import XiaoliangGift from '@/components/xiaoliangGift'
import XiandingGift from '@/components/XiandingGift'
import BirthdayCake from '@/components/BirthdayCake'
import ShoppingCart from '@/components/ShoppingCart'
import Home from '@/components/Home'
import News from '@/components/news'
import Member from '@/components/member'


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
      children:[
        {
          path: '/dessertGift/xiaoliangGift',
          name: 'XiaoliangGift',
          component: XiaoliangGift,
        },
        {
          path: '/dessertGift/xiandingGift',
          name: 'XiandingGift',
          component: XiandingGift,
        }
      ]
    },
    {
      path: '/birthdayCake',
      name: 'BirthdayCake',
      component: BirthdayCake
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
    }
  ]
})
