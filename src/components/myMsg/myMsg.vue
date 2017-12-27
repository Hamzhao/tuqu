<template>
  <div class="msgCtx">
    <div class="msgItem" v-for="item in msgData">
      <img src="../../assets/icon-msg.png" alt="">
      <dl class="title">
        <dd>您的订单已支付，请查看订单。</dd>
        <dd>跳转到订单详情</dd>
      </dl>
      <span class="time-ago">系统消息——{{item.hourAgo}}个小时前</span>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          msgData:[{hourAgo:'2'},{hourAgo:'3'}]
        }
      }
    }
</script>
<style scoped>
  .msgCtx{
    height: 100%;
    background: #f5f5f5;
  }
  .msgItem {
    padding: 0.253rem 3.2%;
    background: white;
    border-top: solid 1px rgba(204, 204, 204, 1);
    overflow: hidden;
  }
  .msgItem img{
    width: 5.983%;
    vertical-align: middle;
  }
  .msgItem dl{
    display: inline-block;
    margin: 0 0 0 2.4%;
    vertical-align: middle;
  }
  .msgItem dd {
    margin: 0;
    color: #ef9439;
    font-size: 0.253rem;
  }
  .msgItem .time-ago{
    float: right;
    color: #666;
    font-size: 0.213rem;
  }
</style>
