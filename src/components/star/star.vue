<template>
  <div id="" class="">
       <span class="star" :class="index <= currentIndex?'active':''" v-for="(item,index) in lengths" @click="change(index)"></span>
  </div>
</template>

<script>

import star from './star.js'

export default star

</script>

<style  scoped>
  .star{
    width: 0.33rem;
    height: 0.33rem;
    display: block;
    float: left;
    margin: 0 0.08rem;
    cursor: pointer;
    background: url(../../assets/star.png) no-repeat center center;
    background-size: 0.33rem 0.33rem;
  }
  .active{
    background: url(../../assets/star_a.png) no-repeat center center;
    background-size: 0.33rem 0.33rem;
  }
</style>
