<template>
  <div class="couponCtx">
    <div class="tabList">
      <div :class="tabIndex == 0?'listItem active':'listItem'" @click="tabChange(0)">全部优惠券</div>
      <div :class="tabIndex == 1?'listItem active':'listItem'" @click="tabChange(1)">可使用</div>
      <div :class="tabIndex == 2?'listItem active':'listItem'" @click="tabChange(2)">已使用</div>
      <div :class="tabIndex == 3?'listItem active':'listItem'" @click="tabChange(3)">已失效</div>
    </div>
    <section>
      <div v-for="item in couponData" :class="item.status == 0 ? 'coupon':'coupon nocoupon'">
        <div class="price fl">
          <div class="num">{{item.price}}</div>
          <div class="condition">{{item.condition}}</div>
        </div>
        <div class="content fl">
          <div class="name">{{item.name}}</div>
          <div class="date">有效期{{item.startdate}}-{{item.enddate}}</div>
        </div>
        <button class="fr btn" @touchstart="useCoupon(item.id)" v-show="item.status == 0">立即使用</button>
        <span class="fr tips" v-show="item.status == 1">已使用</span>
        <span class="fr tips" v-show="item.status == 2">已过期</span>
        <span class="new" v-show="item.status == 0">新</span>
      </div>
    </section>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          tabIndex:0,
          couponData:[{
            id:'1',
            price:'50',
            condition:'无门槛',
            name:'新人红包',
            startdate:'2017.10-1',
            enddate:'2017.12.30',
            status:'0'
          },{
            id:'2',
            price:'100',
            condition:'满1000',
            name:'旅游团体优惠券',
            startdate:'2017.10.1',
            enddate:'2017.12.30',
            status:'0'
          },{
            id:'3',
            price:'60',
            condition:'满400',
            name:'订房优惠券',
            startdate:'2017.10.1',
            enddate:'2017.12.30',
            status:'0' //未使用
          },{
            id:'4',
            price:'60',
            condition:'满450',
            name:'超级无敌特色住宿优惠券',
            startdate:'2017.10.1',
            enddate:'2017.12.30',
            status:'2' //已过期
          },{
            id:'5',
            price:'60',
            condition:'满500',
            name:'特色住宿优惠券',
            startdate:'2017.10.1',
            enddate:'2017.12.30',
            status:'1' //已使用
          }]
        }
      },
      methods:{
        tabChange:function(val) {
          this.tabIndex = val;
          alert('请求接口')
//          this.$http.get().then((res) => {
//            this.couponData = res.body.data
//          })
        },
        useCoupon:function (id) {
          alert('执行id：'+id+'的优惠券使用事件')
        }
      }
    }
</script>
<style scoped>
  @import "../../assets/css/common.css";
  .couponCtx {
    height: 100%;
    background: #f5f5f5;
  }
  .tabList{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    width: 100%;
    height: 0.933rem;
    padding-top: 0.48rem;
    color: #333;
    font-size: 0.28rem;
    background: white;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center
  }
  .tabList .listItem {
    border-bottom: solid 0.08rem white;
  }
  .tabList .active {
    color: #ef9439;
    border-bottom: solid 0.08rem #ef9439;
  }
  section {
    padding: 1.466rem 3.2% 0;
  }
  .coupon{
    position: relative;
    margin-bottom: 0.4rem;
    padding: 0.493rem 4.558% 0.413rem 5.84%;
    color: #ef9439;
    background: white;
    border: solid 1px #cccccc;
    overflow: hidden;
  }
  .coupon .price {
    width: 13.105%;
  }
  .coupon .price div{
    line-height: 1;
  }
  .coupon .num {
    font-size: 0.533rem;
  }
  .coupon .num:before {
    content: '￥';
    font-size: 0.36rem;
  }
  .coupon .condition {
    font-size: 0.266rem;
  }
  .coupon .content {
    width: 46.296%;
    margin-left: 10.683%;
  }
  .coupon .name {
    width: 100%;
    line-height: 1;
    font-size: 0.373rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .coupon .date {
    line-height: 1.5;
    font-size: 0.32rem;
    white-space: nowrap;
  }
  .coupon .btn{
    position: absolute;
    top: 50%;
    right: 4.558%;
    height: 0.427rem;
    color: #ef9439;
    font-size: 0.266rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    border: solid 1px #ef9439;
    border-radius: 0.2135rem;
    background: transparent;
  }
  .coupon .tips{
    position: absolute;
    top: 50%;
    right: 4.558%;
    font-size: 0.266rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .coupon .new {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.733rem;
    height: 0.64rem;
    padding: 0.09rem;
    color: white;
    font-size: 0.266rem;
    background: url("../../assets/icon-sanjiao.png") no-repeat;
    background-size: contain;
    box-sizing: border-box;
  }
  .nocoupon {
    color: #999;
  }
</style>
