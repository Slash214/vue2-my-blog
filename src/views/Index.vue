<template>
  <div class="index">
    <div class="glass"></div>
    <div class="session">
      <div class="header">
        <div class="logo">JOSHUA</div>
        <nav>
          <router-link tag="a" to="/blog">博客</router-link>
          <!-- <router-link tag="a" to="/blog">开源</router-link> -->
          <router-link tag="a" to="/tool">工具</router-link>
          <router-link tag="a" to="/collect">收藏</router-link>
          <router-link tag="a" to="/about">关于</router-link>
          <router-link tag="a" to="/contact">联系</router-link>
        </nav>
      </div>
      <div class="mian">
        <div data-text="Lorem ipsum dolor" class="heightlight">Lorem ipsum dolor</div>
        <div class="title">Hi, I'm Joshua Yang Welcome To My Blog</div>
        <h4 class="lines">真正的大师，永远怀着一颗学徒的心</h4>
      </div>
      <div class="footer">
        <p>© 2018-2021 Joshua Yang 蜀ICP备19024285号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log('')
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Reggae+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
.index {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('../static/img/wjjs.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #fff;
  position: relative;
  color: #fff;
  &::after {
    z-index: 0;
    position: absolute;
    content: ' ';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
  }
  .session {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 40px auto;
      .logo {
        font-size: 30px;
        text-transform: uppercase;
        text-rendering: optimizeLegibility;
        // background-color: #2d2d2d;
        letter-spacing: 0.1em;
        text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
      }
      nav {
        font-family: 'Reggae One', CenturyGothic, 'AppleGothic', sans-serif;
        font-size: 20px;
        display: flex;
        // background: red;
        a {
          color: #f8f8f8;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          padding-left: 30px;
          text-shadow: unset;
          transition: 0.2s;
          cursor: pointer;
          &:hover {
            transform: translateY(-5px);
            text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
              0 0 100px #0ebeff, 0 0 200px #0ebeff;
          }
        }
      }
    }
    .mian {
      padding-top: 200px;
      text-align: center;
      font-size: 50px;
      font-weight: 600;
      .heightlight {
        padding-bottom: 50px;
        position: relative;
        margin: auto;
        font-size: 40px;
        word-spacing: 0.2em;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        color: transparent;
        background-color: #e8a95b;
        background-clip: text;
        &::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            120deg,
            transparent 0%,
            transparent 6rem,
            white 11rem,
            transparent 11.15rem,
            transparent 15rem,
            rgba(255, 255, 255, 0.3) 20rem,
            transparent 25rem,
            transparent 27rem,
            rgba(255, 255, 255, 0.6) 32rem,
            white 33rem,
            rgba(255, 255, 255, 0.3) 33.15rem,
            transparent 38rem,
            transparent 40rem,
            rgba(255, 255, 255, 0.3) 45rem,
            transparent 50rem,
            transparent 100%
          );
          background-clip: text;
          background-size: 150% 100%;
          background-repeat: no-repeat;
          animation: shine 5s infinite linear;
          @keyframes shine {
            0% {
              background-position: 50% 0;
            }
            100% {
              background-position: -190% 0;
            }
          }
        }
      }
      .title {
        text-align: center;
        text-transform: uppercase;
        color: transparent;
        background: linear-gradient(
          45deg,
          #ffeb3b,
          #009688,
          yellowgreen,
          pink,
          #03a9f4,
          #2790b0,
          #8bc34a
        );
        background-size: cover;
        background-position: center center;
        background-clip: text;
        animation: huerotate 3s infinite;
        @keyframes huerotate {
          100% {
            filter: hue-rotate(360deg);
          }
        }
      }
      .lines {
        display: inline-block;
        font-size: 20px;
        font-weight: 400;
        padding-top: 50px;
      }
    }
    .footer {
      font-size: 12px;
      border-radius: 5px 5px 0 0;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 10px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
