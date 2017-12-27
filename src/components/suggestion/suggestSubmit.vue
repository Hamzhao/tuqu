<template>
  <div class="main">
    <div v-show="submitStatu == 400" class="suggest">
      <textarea v-model="text" placeholder="留下您宝贵的建议..."></textarea>
      <div class="info">
        <span>
          <label for="name">姓名：</label>
          <input id="name" type="text" v-model="username">
        </span>
        <span>
          <label for="tel">手机号：</label>
          <input id="tel" type="text" v-model="telNum">
        </span>
      </div>
      <button @click="submit">提交</button>
    </div>
    <div class="resultCtx" v-show="submitStatu != 400">
        <img src="../../assets/icon-suggest.png" alt="提交成功">
        <div>感谢您的建议，我们会努力改进</div>
        <button>确定</button>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          text:'',
          username:'',
          telNum:'',
          submitStatu:'400'
        }
      },
      methods:{
        submit: function() {
          var suggest = this.text;
          var name = this.username;
          var tel = this.telNum;
          var pattern = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
          if(pattern.test(tel)){
            alert('调用接口，传值 建议：'+suggest+',姓名：'+name+',手机号：'+tel)
          } else{
            alert('请填写正确格式的手机号码')
          }

          //ajax回调函数
          var dataStatu = ''
          this.submitStatu = dataStatu
        }
      }
    }
</script>
<style>
  .main {
    height: 100%;
    padding: 0;
    margin: 0;
    background: #f5f5f5;
  }
  .suggest {
    font-size: 0;
  }
  textarea {
    width: 100%;
    height: 8rem;
    padding: 0.533rem 3.067%;
    color: #333;
    font-size: 0.293rem;
    border: none;
    border-bottom: solid 1px rgba(204, 204, 204, 1);
    box-sizing: border-box;
    letter-spacing: 1.1px;
    outline: none;
    resize: none;
  }
  textarea::-webkit-input-placeholder {
    color: #999;
  }
  .suggest .info{
    padding: 0.32rem 3.2%;
    font-size: 0;
    background: white;
    border-bottom: solid 1px rgba(204, 204, 204, 1);
  }
  .suggest .info span{
    display: inline-block;
    width: 50%;
    color: #333;
    font-size: 0.32rem;
  }
  .suggest .info input{
    width: inherit;
    border: none;
    outline: none;
  }
  .suggest button {
    display: block;
    width: 40%;
    height: 0.933rem;
    margin: 1.667rem auto 0;
    color: white;
    font-size: 0.347rem;
    border: none;
    background-color: rgba(239, 148, 57, 1);
  }
  /*submitStatue*/
  .resultCtx {
    width: 100%;
    height: 100%;
    padding-top: 3.04rem;
    text-align: center;
    background: #f5f5f5;
  }
  .resultCtx img {
    width: 20.4%;
  }
  .resultCtx div{
    color: #666;
    font-size: 0.32rem;
  }
  .resultCtx button {
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
