<template>
  <div class="paidCtx">
      <div class="order-detail">
        <div class="order-head">
          <span class="orderNum">订单编号：{{data.orderNum}}</span>
          <span class="status active" v-show="data.status == 0">待支付</span>
          <span class="status active" v-show="data.status == 1">待使用</span>
          <span class="status active" v-show="data.status == 2">待评价</span>
          <span class="status cancel" v-show="data.status == 3">已取消</span>
        </div>
        <div class="order-content">
          <div class="title">{{data.title}}</div>
          <div class="date" v-if="data.type == 0">
            <span>入住：{{data.checkIn}}</span>
            <span>退房：{{data.checkOut}}</span>
          </div>
          <div class="date" v-else>
            <span>出行日期：{{data.startdate}}</span>
            <span>返程日期：{{data.enddate}}</span>
          </div>
          <div class="totalPrice">
            总费用：<span>￥{{floatNum(data.totalPrice)}}</span>
          </div>
        </div>
      </div>
      <div class="price-detail">
        <div class="price-compute" v-if="data.type == 0">
          <div>
            <span class="price-name">房费:</span>
            <span class="num">￥{{floatNum(data.totalPrice)}}</span>
          </div>
          <div>
            <span class="price-name">押金:</span>
            <span class="num">￥{{floatNum(data.deposit)}}</span>
          </div>
          <div>
            <span class="price-name">积分抵扣:</span>
            <span class="num">￥{{floatNum(data.integral)}}</span>
          </div>
          <div>
            <span class="price-name">抵优惠券:</span>
            <span class="num">-￥{{floatNum(data.coupon)}}</span>
          </div>
        </div>
        <div class="price-compute" v-else>
          <div>
            <span class="price-name">成人:</span>
            <span class="num">￥{{floatNum(data.totalPrice)}}</span>
          </div>
          <div>
            <span class="price-name">儿童:</span>
            <span class="num">￥{{floatNum(data.deposit)}}</span>
          </div>
          <div>
            <span class="price-name">积分抵扣:</span>
            <span class="num">￥{{floatNum(data.integral)}}</span>
          </div>
          <div>
            <span class="price-name">抵优惠券:</span>
            <span class="num">-￥{{floatNum(data.coupon)}}</span>
          </div>
        </div>
        <div class="Paid">待支付费用：<span>￥{{floatNum(data.pay)}}</span></div>
      </div>
      <div class="information">
        <div class="title" v-if="data.type == 0">入住人信息</div>
        <div class="title" v-else>出行人信息</div>
        <div class="content">
          <div class="items" v-for="item in data.information">
            <div>姓名：{{item.name}}</div>
            <div>手机：{{item.tel}}</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="showPrice fl">
          <div class="price">￥{{floatNum(data.pay)}}</div>
          <span>待付金额</span>
        </div>
        <div class="btn fr" :class="data.status == 0 ? 'btn-submit':'btn-delete'">
          {{data.status == 0 ? '提交订单':'删除订单'}}
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        data:{
          id:'1',
          orderNum:'1245678',
          title:'深圳大梅沙住宿公寓舒适大床房',
          checkIn:'2017.05.25',
          checkOut:'2017.05.30',
          startdate:'2017.05.26',
          enddate:'2017.05.26',
          totalPrice:380,
          deposit:1000,
          adult:380,
          children:1000,
          integral:100,
          coupon:100,
          pay:280,
          type:'1', //0住宿 1旅游
          information:[
            {name:'xxx',tel:'18576783787'},
            {name:'xxx',tel:'18576783787'},
            {name:'xxx',tel:'18576783787'}
          ],
          status:'0'
        }
      }
    },
    mounted(){
      let id = this.$route.query.id
      this.data.status = this.$route.query.status
//        模拟ajax根据id查找,具体以下面vueresource的get为准
//        this.$http.get().then(()=>{})
    },
    methods:{
      floatNum:function (num) { //价格格式化，保留两位小数
        return parseInt(num).toFixed(2)
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/common.css";
  .paidCtx {
    min-height: 100%;
    padding-bottom: 1.307rem;
    background: #f5f5f5;
    box-sizing: border-box;
  }
  .order-head {
    position: relative;
    padding: 0.227rem 3.2%;
    border-bottom: solid 1px #ccc;
    background: white;
    overflow: hidden;
  }
  .order-head .orderNum{
    font-size: 0.32rem;
  }
  .order-head .status{
    position: absolute;
    top: 50%;
    right: 3.2%;
    font-size: 0.267rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .order-head .active{
    color: #ef9439;
  }
  .order-head .cancel{
    color: #666;
  }
  .order-content,.price-detail {
    padding: 0.2rem 3.466%;
    background: white;
    border-bottom: solid 1px #ccc;
  }
  .price-detail {
    margin-top: 0.24rem;
    border-top: solid 1px #ccc;
  }
  .order-content .title{
    width: 100%;
    color: #333;
    font-size: 0.32rem;
    margin-bottom: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .order-content .date span{
    margin-right: 12px;
    color: #666;
    font-size: 0.267rem;
  }
  .order-content .totalPrice{
    margin-top: 0.4rem;
    color: #333;
    font-size: 0.32rem;
  }
  .order-content .totalPrice span{
    color: #ef9439;
    font-size: 0.32rem;
  }
  .price-compute div{
    margin-bottom: 0.2rem;
    font-size: 0;
    line-height: 1;
  }
  .price-compute .price-name{
    display: inline-block;
    width: 12.894%;
    margin-right: 2%;
    line-height: 1;
    color: #333;
    font-size: 0.24rem;
  }
  .price-compute .num {
    color: #ef9439;
    font-size: 0.24rem;
  }
  .price-detail .Paid {
    padding: 0.227rem 0 0;
    color: #333;
    font-size: 0.32rem;
    border-top: solid 1px #ccc;
  }
  .price-detail .Paid span{
    color: #ef9439;
    font-size: 0.32rem;
    line-height: 1;
  }
  .information .title{
    color: #333;
    margin-top: 0.493rem;
    padding: 0 3.2% 0.107rem;
  }
  .information .content .items{
    margin-bottom: 0.267rem;
    border-top: solid 1px #ccc;
  }
  .information .content .items div{
    padding: 0.32rem 3.2%;
    color: #666;
    background: white;
  }
  .information .content .items div {
    border-bottom: solid 1px #ccc;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.307rem;
    font-size: 0;
    background: white;
    border-top: solid 1px #f5f5f5;
    overflow: hidden;
  }
  .footer .showPrice {
    width: 44%;
    line-height: 1;
    padding: .32rem 0 0 3.2%;
    box-sizing: border-box;
  }
  .footer .showPrice .price{
    color: #ef9439;
    font-size: 0.347rem;
  }
  .footer .showPrice span{
    color: #666;
    font-size: 0.24rem;
    line-height: 0.56rem;
  }
  .footer .btn {
    width: 55.733%;
    height: 1.307rem;
    line-height: 1.307rem;
    font-size: 0.347rem;
    text-align: center;
    border: solid 1px #ef9439;
    box-sizing: border-box;
  }
  .footer .btn-submit {
    color: white;
    background: #ef9439;
  }
  .footer .btn-delete {
    color: #ef9439;
    background: #f5f5f5;
  }
</style>
