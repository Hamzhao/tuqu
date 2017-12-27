<template>
  <div class="menu">
    <div class="menu-item">
      <router-link to="/" tag="span" exact>
        <i class="live"></i>
        <span>特色住宿</span>
      </router-link>
    </div>
    <div class="menu-item">
      <router-link to="/tourism" tag="span">
        <i class="tour"></i>
        <span>旅游度假</span>
      </router-link>
    </div>
    <div class="menu-item">
      <router-link to="/order" tag="span">
        <i class="order"></i>
        <span>订单</span>
      </router-link>
    </div>
    <div class="menu-item">
      <router-link to="/me" tag="span">
        <i class="my"></i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return{
          menuShow:"index"
        }
      },
      methods: {
        changeMenu: function() {
          var Path = this.$route.path.slice(1,this.$route.path.length)
          this.menuShow = Path
          console.log(this.menuShow)
        }
      }
    }
</script>
<style scoped>
  img {
    width: 100%;
  }
  .menu{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.307rem;
    background: rgba(255,255,255,1);
  }
  .menu-item {
    float: left;
    width: 25%;
    padding-top: 0.147rem;
    color: #666;
    font-size: 0;
    text-align: center;
  }
  .menu-item i {
    display: block;
    width: 33.067%;
    height: 0.733rem;
    margin: 0 auto;
  }
  .live {
     background: url("../../assets/tesezhusu_off.png") no-repeat;
    background-size: 100% 100%;
   }
  .router-link-active .live {
    background: url("../../assets/tesezhusu_on.png") no-repeat;
    background-size: 100% 100%;
  }
  .tour {
    background: url("../../assets/lvyoudujia_off.png") no-repeat;
    background-size: 100% 100%;
  }
  .router-link-active .tour {
    background: url("../../assets/lvyoudujia_on.png") no-repeat;
    background-size: 100% 100%;
  }
  .order {
    background: url("../../assets/dingdan_off.png") no-repeat;
    background-size: 100% 100%;
  }
  .router-link-active .order {
    background: url("../../assets/dingdan_on.png") no-repeat;
    background-size: 100% 100%;
  }
  .my {
    background: url("../../assets/wode_off.png") no-repeat;
    background-size: 100% 100%;
  }
  .router-link-active .my {
    background: url("../../assets/wode_on.png") no-repeat;
    background-size: 100% 100%;
  }
  .menu-item span {
    font-size: 0.32rem;
  }
  .menu .router-link-exact-active,.menu .router-link-active {
    color: #ef9439;
  }
</style>
