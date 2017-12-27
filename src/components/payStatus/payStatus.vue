<template>
  <div>
    <div class="payCtx" v-show="status == 400">
      <img src="../../assets/payFailed.png" alt="支付失败">
      <div>支付失败</div>
      <button>确定</button>
    </div>
    <div class="payCtx" v-show="status != 400">
      <img src="../../assets/paySucceed.png" alt="支付成功">
      <div>支付成功</div>
      <button>确定</button>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          status:200
        }
      }
    }
</script>
<style scoped>
  body {
    background: #f5f5f5;
  }
  .payCtx {
    width: 100%;
    padding-top: 3.04rem;
    text-align: center;
  }
  .payCtx img {
    width: 20.4%;
  }
  .payCtx div{
    color: #666;
    font-size: 0.32rem;
  }
  .payCtx button {
    width: 31.067%;
    height: 0.8rem;
    margin-top: 1.6rem;
    background-color: rgba(239, 148, 57, 1);
    color: #f5f5f5;
    font-size: 0.32rem;
    border: none;
    border-radius: 4px;
  }
</style>
