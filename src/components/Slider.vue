<template>
  <div class="slider cl">
    <div class="box">
        <router-link tag="a" to="/">首页</router-link>
        <router-link tag="a" to="/blog">博客</router-link>
        <router-link tag="a" to="/tool">工具</router-link>
        <router-link tag="a" to="/collect">收藏</router-link>
        <router-link tag="a" to="/about">关于</router-link>
        <router-link tag="a" to="/contact">联系</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slider {
   position: fixed;
   top: 50%;
   left: 20%;
  .box {
    width: 50px;
    // height: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      color: #fff;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background-color: blueviolet;
    }
  }
}
</style>
