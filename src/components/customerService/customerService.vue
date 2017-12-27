<template>
  <div class="customer-service">
    <section>
      <div class="l">
        <i></i>
        <dl>
          <dt>客服热线</dt>
          <dd>400-160-8815</dd>
        </dl>
      </div>
      <div class="r">
        <button>立即咨询</button>
      </div>
    </section>
  </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
  .customer-service{
    width: 100%;
    padding: 0.973rem 3.2% 0;
    margin: 0;
    height: 100%;
    background: #f5f5f5;
    box-sizing: border-box;
  }
  .customer-service section {
    margin: 0 auto;
    padding: 0 4.273%;
    background: white;
    overflow: hidden;
    box-sizing: border-box;
  }
  .l{
    float: left;
    width: 50%;
    padding: 0.453rem 0;
  }
  .l i {
    display: inline-block;
    width: 11.838%;
    height: 0.56rem;
    background: url("../../assets/icon-kefu.png") no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .l dl{
    display: inline-block;
    margin:0 0 0 9.346%;
    color: #333;
    font-size: 0.32rem;
    text-align: left;
    vertical-align: middle;
  }
  .l dd{
    margin: 0.267rem 0 0;
    color: #ef9439;
  }
  .r{
    float: right;
    width: 50%;
    padding: 0.573rem 0;
    text-align: right;
  }
  .r button {
    width: 46.329%;
    height: 0.587rem;
    color: #ef9439;
    font-size: 0.32rem;
    border: solid 1px rgba(239, 148, 57, 1);
    background: transparent;
  }
</style>
