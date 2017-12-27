<template>
  <div class="tailor">
    <div class="bg"><img src="../../assets/tailor-bg.png" alt="bg"></div>
    <header>
      <img src="../../assets/tailor.png" alt="nav">
    </header>
    <section>
      <div class="row">
        <i><img src="../../assets/icon-startplace.png" alt="icon"></i>
        <input type="text" placeholder="请填写您的出发地">
      </div>
      <div class="row">
        <i><img src="../../assets/icon-date2.png" alt="icon"></i>
        <input type="text" placeholder="请选择您的出发日期" v-model="date">
        <!--隐藏input date选择日期-->
        <input class="dateSelect" type="date" v-model="date">
      </div>
      <div class="row">
        <i><img src="../../assets/icon-personal.png" alt="icon"></i>
        <input type="text" placeholder="请填写您的名字">
      </div>
      <div class="row">
        <i><img src="../../assets/icon-telephone.png" alt="icon"></i>
        <input type="text" placeholder="请填写您的手机号">
      </div>
      <textarea placeholder="选填，请输入其他的需求"></textarea>
    </section>
    <footer>
      <button>提交</button>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        date:''
      }
    }
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
  .tailor{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .tailor .bg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .tailor .bg img{
    height: 100%;
  }
  header {
    width: 100%;
    padding: 1.467rem 3.2% 0;
    box-sizing: border-box;

  }
  section {
    margin-top: 1.333rem;
  }
  section .row, section textarea{
    display: block;
    width: 60%;
    margin: 0 auto 0.4rem;;
    background: white;
    box-sizing: border-box;
  }
  section .row {
    position: relative;
    padding: 0.2rem 4%;
  }
  section .row i {
    display: inline-block;
    width: 6.522%;
    margin-right: 3.623%;
    vertical-align: middle;
  }
  section .row input {
    width: auto;
    font-size: 0.293rem;
    border: none;
    vertical-align: middle;
  }
  section .row .dateSelect{
    position: absolute;
    width: 100%;
    left: 0;
    opacity: 0;
  }
  section textarea{
    height: 1.373rem;
    font-size: 0.293rem;
    margin-top: 0.667rem;
    padding: 0.133rem 4%;
    resize: none;
    outline: none;
    border: none;
  }
  footer {
    margin-top: 1.866rem;
  }
  footer button{
    display: block;
    width: 48%;
    height: 0.773rem;
    margin: 0 auto;
    color: white;
    background: #ef9439;
    border: none;
  }
</style>
