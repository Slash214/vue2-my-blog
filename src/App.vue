<template>
  <div id="app">
    <router-view/>
    <slider></slider>
  </div>
</template>

<script>
import slider from './components/Slider.vue'
export default {
  components: {
    slider
  }
}
</script>

<style lang="scss">
</style>
