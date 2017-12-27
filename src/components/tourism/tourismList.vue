<template>
  <div class="template-ctn">
    <header>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/swiper1.png" alt="swiper">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/swiper2.png" alt="swiper">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/swiper1.png" alt="swiper">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
      </swiper>
    </header>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: false,
          loop:true,
          delay:2000,
          direction : 'horizontal',
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },

  }
</script>
<style scoped>
  @import "../../assets/css/common.css";
  .swiper-container {
    position: relative;
    height: 3.333rem;
    overflow: hidden;
  }
  .swiper-container,.swiper-wrapper img, .swiper-pagination {
    width: 100%;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0.133rem;
    padding-right: 3.2%;
    text-align: right;
    box-sizing: border-box;
  }
</style>
