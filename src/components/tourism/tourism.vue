<template>
  <div>
    <div class="bg"></div>
    <div class="logo">
      <i><img src="../../assets/woniu.png" alt=""></i>
    </div>
    <div class="nickName">{{nickname}}</div>
    <section>
      <div class="index-search">
        <div class="form-item">
          <i class="icon"><img src="../../assets/icon-dingwei.png" alt="icon"></i>
          <router-link :to="{path:'/citySelect',query:{key: 'startPlace'}}">
            <input type="text" placeholder="出发地" :value="getStartPlace" readonly>
          </router-link>
          <div class="myLocation">
            <router-link to="" tag="div">
              <i><img src="../../assets/icon-weizhi.png" alt="icon"></i>
              <span>我的位置</span>
            </router-link>
          </div>
        </div>
        <div class="form-item">
          <i class="icon"><img src="../../assets/icon-date.png" alt="icon"></i>
          <router-link :to="{path:'/citySelect',query:{key: 'endPlace'}}">
            <input type="text" placeholder="目的地" :value="getEndPlace" readonly>
          </router-link>
        </div>
        <div class="form-item">
          <i class="icon"><img src="../../assets/icon-search.png" alt="icon"></i>
          <router-link to="/tourismKeyword">
            <input type="text" placeholder="目的地/主题/关键词" :value="getTourismKeyword" readonly>
          </router-link>
        </div>
        <div class="form-btn">
          <button @click="submitFn">搜索</button>
          <router-link to="/personalTailor" tag="button">私人订制</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return{
        nickname:"我是用户昵称",
      }
    },
    methods:{
      submitFn:function () {
        this.$router.push({path:'/tourismList'})
      }
    },
    computed: {
      ...mapGetters({
        getStartPlace: 'getStartPlace',
        getEndPlace: 'getEndPlace',
        getTourismKeyword:'getTourismKeyword'
      })
    },

  }
</script>
<style scoped>
  .container,.bg{
    width: 100%;
    height: 100%;
  }
  .container .bg
  {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: url("../../assets/tourism-bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .logo {
    padding-top: 1.88rem;
  }
  .logo i{
    display: block;
    width: 2.533rem;
    height: 2.533rem;
    margin: 0 auto 0.187rem;
    text-align: center;
    border-radius: 50%;
    background-image: radial-gradient(
      rgba(239, 148, 57, 0.6) 0%,
      rgba(255, 255, 254, 0.6) 100%);
  }
  .logo img{
    width: 70.526%;
    margin-top: 0.707rem;
  }
  .nickName{
    width: 100%;
    color: white;
    font-size: 0.32rem;
    text-align: center;
  }
  .form-item {
    position: relative;
    width: 100%;
    height: 1.067rem;
    line-height: 1.067rem;
    padding-left: 4.843%;
    margin-bottom: 0.133rem;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .form-item .icon {
    display: inline-block;
    width: 4.986%;
    margin-right: 3.276%;
    vertical-align: -webkit-baseline-middle;
  }
  .form-item .icon img, .myLocation i img{
    width: 100%;
  }
  .index-search {
    width: 93.6%;
    margin: 0.56rem auto 0;
  }
  .index-search input{
    color: #333;
    outline:none;
    font-size: 0.347rem;
    border: transparent;
    background: transparent;
  }
  .index-search input::-webkit-input-placeholder {
    color: #666;
  }
  input.date::-webkit-clear-button{
    display: none;
  }
  .myLocation {
    position: absolute;
    z-index: 50;
    top: 50%;
    right: 0.2rem;
    line-height: 1.5;
    font-size: 0;
    text-align: center;
    transform: translateY(-50%);
  }
  .myLocation i {
    display: block;
    width: 0.387rem;
    height: 0.387rem;
    margin: 0 auto;
  }
  .myLocation span {
    display: block;
    color: #666;
    font-size: 0.213rem;
  }
  .form-btn button{
    width: 100%;
    height: 1.067rem;
    margin-top: 0.52rem;
    color: white;
    font-size: 0.4rem;
    border: transparent;
    background-color: rgba(239, 148, 57, 0.8);
  }
</style>
