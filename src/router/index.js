import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import live from '@/components/live/live'
import citySelect from '@/components/citySelect/citySelect'
import houseKeyword from '@/components/live/houseKeyword'
import customerSvc from '@/components/customerService/customerService'
import payStatus from '@/components/payStatus/payStatus'
import suggest from '@/components/suggestion/suggestSubmit'
import integral from '@/components/integral/integral'
import me from '@/components/me/me'
import mymsg from '@/components/myMsg/myMsg'
import footprints from '@/components/footprints/footprints'
import coupon from '@/components/myCoupon/myCoupon'
import order from '@/components/order/order'
import collection from '@/components/myCollection/myCollection'
import tobepaid from '@/components/orderPay/toBePaid'
import tourism from '@/components/tourism/tourism'
import tourismKeyword from '@/components/tourism/tourismKeyword'
import evaluate from '@/components/orderEvaluate/orderEvaluate'
import tailor from '@/components/personalTailor/personalTailor'
import payOprate from '@/components/orderPay/payOperation'
import tourismList from '@/components/tourism/tourismList'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: index,
      children:[
        {
          path:'/',
          name: 'live',
          component: live
        },
        {
          path:'/tourism',
          name: 'tourism',
          component: tourism
        },
        {
          path:'/me',
          name:'me',
          component: me
        },
        {
          path:'/order',
          name:'order',
          component:order
        }
      ]
    },
    {
      path:'/citySelect',
      name:'citySelect',
      component: citySelect
    },
    {
      path:'/houseKeyword',
      name:'houseKeyword',
      component: houseKeyword
    },
    {
      path:'/tourismKeyword',
      name:'tourismKeyword',
      component: tourismKeyword
    },
    {
      path:'/payStatus',
      name:'payStatus',
      component: payStatus
    },
    { //客服中心
      path:'/customerService',
      name:'customerService',
      component: customerSvc
    },
    { // 意见反馈
      path:'/suggest',
      name:'suggest',
      component: suggest
    },
    { // 积分
      path:'/integral',
      name:'integral',
      component: integral
    },
    { // 我的消息
      path:'/mymsg',
      name:'myMsg',
      component: mymsg
    },
    { // 我的足迹
      path:'/footprints',
      name:'footprints',
      component:footprints
    },
    { // 我的足迹
      path:'/mycoupon',
      name:'mycoupon',
      component:coupon
    },
    { // 我的收藏
      path:'/mycollection',
      name:'mycollection',
      component:collection
    },
    { // 待支付
      path:'/tobepaid',
      name:'tobepaid',
      component:tobepaid
    },
    { // 评价
      path:'/evaluate',
      name:'evaluate',
      component:evaluate
    },
    { // 私人订制
      path:'/personalTailor',
      name:'personalTailor',
      component:tailor
    },
    { //支付订单
      path:'/payOperation',
      name:'payOperation',
      component:payOprate
    },
    { //旅游列表
      path:'/tourismList',
      name:'tourismList',
      component:tourismList
    }
  ]
})
