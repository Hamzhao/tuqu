<template>
  <div class="container">
    <router-view></router-view>
    <f-Menu></f-Menu>
  </div>
</template>
<script>
    import footMenu from './footMenu.vue'
    export default {
      components:{
        "f-Menu": footMenu
      }
    }
</script>
<style>
  .container {
    height: 100%;
  }
</style>
