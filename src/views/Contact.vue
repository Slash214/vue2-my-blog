<template>
  <div class="contact">
    <div class="move-text">
      <p class="first common">I Am Joshua Yang</p>
      <p class="second common">Welcome To My Personal Website</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) 0 0/400%
    400%;
  -webkit-animation: move-bg 10s infinite;
  animation: move-bg 10s infinite;
  .move-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    border-right: 1px solid transparent;
    font-family: Consolas, Monaco, Monospace;
    white-space: nowrap;
    padding: 10px;
    .common {
      overflow: hidden;
      border-right: 1px solid transparent;
      white-space: nowrap;
      font-family: Consolas,Monaco,Monospace;
    }
    .first {
      width: 17ch;
      padding-bottom: 5px;
      margin: 0 auto;
      animation: dy 2s steps(16) 0s backwards, caret .5s steps(1) 0s 4 forwards;
      @keyframes dy {
        0% {
          width: 0;
        }
      }
      @keyframes caret {
        50% {
          border-right-color: currentColor;
        }
      }
    }
    .second {
      // background: cyan;
      width: 31ch;
      animation: dy 2s steps(34) 2s backwards,caret .5s steps(1) 2s 4 forwards;
      @keyframes dy {
        0% {
          width: 0;
        }
      }
      @keyframes caret {
        50% {
          border-right-color: currentColor;
        }
      }
    }
  }
}
@keyframes move-bg {
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 100%;
  }
}
</style>
