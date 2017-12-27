<template>
  <div class="integralCtx">
    <div class="integral">
      <div class="value">{{num}}</div>
      <router-link to="" tag="a">获取积分</router-link>
    </div>
    <div class="integralRule">
      <div class="ruleTitle">积分规则</div>
      <div class="rule-content">{{rule}}</div>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          num:'0',
          rule:'规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则'
        }
      }
    }
</script>
<style>
  .integralCtx {
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 0;
    background: #f5f5f5;
  }

  .integral {
    padding: 0.587rem 0 0.507rem;
    text-align: center;
    color: white;
    font-size: 0.533rem;
    background-color: rgba(239, 148, 57, 1);
  }
  .integral a{
    color: white;
    font-size: 0.293rem;
  }
  .integralRule{
    padding: 0.733rem 3.2% 0;
    color: #333;
  }
  .integralRule .ruleTitle {
    font-size: 0.347rem;
    font-weight: 700;
  }
  .integralRule .rule-content {
    margin-top: 0.32rem;
    font-size: 0.32rem;
  }
</style>
