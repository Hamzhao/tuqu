<template>
  <div class="meCtx">
    <header>
      <div class="headImg">
        <img src="../../assets/woniu.png" alt="icon">
      </div>
      <div class="userInfo">
        <div>{{username}}</div>
        <div>积分：{{intergral}}</div>
      </div>
    </header>
    <section>
      <div class="operate">
        <div class="release">
          <img src="../../assets/icon-release.png" alt="icon">
          <span>我要发布</span>
        </div>
        <router-link to="/footprints" tag="div" class="tr placed">
          <img src="../../assets/icon-foot.png" alt="icon">
          <span>我的足迹</span>
        </router-link>
      </div>

      <div class="other">
        <router-link to="/myMsg" tag="div" class="row">
          <img src="../../assets/icon-msgCenter.png" alt="icon">
          <span class="title">消息中心</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
          <span class="msgNum">{{msgCount}}</span>
        </router-link>
        <router-link to="/mycoupon" tag="div" class="row">
          <img src="../../assets/icon-coupon.png" alt="icon">
          <span class="title">我的优惠券</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
        </router-link>
        <router-link to="/mycollection" tag="div" class="row">
          <img src="../../assets/icon-collection.png" alt="icon">
          <span class="title">我的收藏</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
        </router-link>
        <router-link to="/integral" tag="div" class="row">
          <img src="../../assets/icon-jifen.png" alt="icon">
          <span class="title">我的积分</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
        </router-link>
        <router-link to="/suggest" tag="div" class="row">
          <img src="../../assets/icon-suggestion.png" alt="icon">
          <span class="title">意见反馈</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
        </router-link>
      </div>

      <div class="customerSevice">
        <router-link to="/customerService" tag="div" class="row">
          <img src="../../assets/icon-kefuCenter.png" alt="icon">
          <span class="title">客服中心</span>
          <i class="fr"><img src="../../assets/icon-rightArrow.png" alt="icon"></i>
        </router-link>
      </div>
      <button>退出登录</button>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '这是昵称',
        intergral: '100',
        messageNum: '9'
      }
    },
    computed: {
      msgCount: function () {
        let n = this.messageNum;
        if (n < 10) {
          return '0' + n;
        } else {
          return n;
        }
      }
    }
  }
</script>
<style scoped>
  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .tr {
    text-align: right;
  }

  .meCtx {
    height: 100%;
    padding: 0;
    margin: 0;
    background: #f5f5f5;
  }

  header {
    width: 100%;
    height: 3.227rem;
    padding-top: 0.4rem;
    background: url("../../assets/headImg-bg.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
  }

  .headImg {
    position: relative;
    width: 1.373rem;
    height: 1.373rem;
    line-height: 1.4rem;
    margin: 0 auto;
    text-align: center;
    border: solid 2px #ef9439;
    border-radius: 50%;
    background: white;
  }

  .headImg img {
    position: absolute;
    width: 76.699%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .userInfo div {
    margin-top: 0.24rem;
    color: white;
    font-size: 0.241rem;
    text-align: center;
  }

  .operate {
    padding: 0.44rem 15.067% 0.44rem 9.733%;
    font-size: 0;
    background: white;
    overflow: hidden;
  }

  .operate div {
    display: inline-block;
    width: 50%;
    color: #333;
    font-size: 0.373rem;
    font-weight: 700;
  }

  .release img {
    width: 12.411%;
    vertical-align: middle;
  }

  .placed img {
    width: 8.511%;
    vertical-align: middle;
  }

  .other, .customerSevice {
    margin-top: 0.4rem;
    background: white;
    border-top: solid 1px rgba(204, 204, 204, 1);
  }

  .other .row, .customerSevice .row {
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 3.2%;
    font-size: 0;
    border-bottom: solid 1px rgba(204, 204, 204, 1);
    overflow: hidden;
  }

  .other .row img, .customerSevice .row img {
    width: 4.273%;
    vertical-align: middle;
  }

  .other .row .title, .customerSevice .row .title {
    margin-left: 1.709%;
    color: #333;
    font-size: 0.293rem;
    vertical-align: middle;
  }

  .other .row i, .customerSevice .row i {
    display: inline-block;
    width: 1.425%;
  }

  .other .row i img, .customerSevice .row i img {
    width: 100%;
    vertical-align: middle;
  }

  .other .row .msgNum {
    position: absolute;
    top: 50%;
    right: 6.133%;
    width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: #f5f5f5;
    font-size: 0.213rem;
    border-radius: 50%;
    background-color: rgba(239, 148, 57, 1);
    transform: translateY(-0.22rem);
  }

  button {
    display: block;
    width: 62.933%;
    height: 0.8rem;
    margin: 1.96rem auto 0;
    color: #666;
    font-size: 0.32rem;
    border: solid 1px rgba(204, 204, 204, 1);
    background: transparent;
  }
</style>
