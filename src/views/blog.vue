<template>
  <div class="blog cl">
    <div class="main">
      <div class="bg_img_box">
        <div class="main_bg"></div>
      </div>
      <ul class="box">
        <li v-for="i in menu" :key="i.id">
          <p>{{ i.menuName }}：</p>
          <div class="label">
            <span class="active">全部</span>
            <span v-for="s in i.cont" :key="s">{{ s }}</span>
          </div>
        </li>
      </ul>
      <div style="margin-top: 100px" v-if="loading">
        <Loading></Loading>
      </div>
      <div v-if="!loading" class="list">
        <div class="card" v-for="i in 10" :key="i">
          <a class="title" href="https://juejin.cn/post/6977399909532041247" target="_blank"
            >我是标题我是标题我是标题我是标题</a
          >
          <div class="tagGroup">
            <span class="tag" v-for="i in 5" :key="i">JavaScript</span>
          </div>
          <div class="cont">
            <img
              src="https://static.yangzw.vip/blog/妙用CSS变量，让你的CSS变得更心动.jpg"
              alt=""
            />
            <p>
              CSS变量又叫CSS自定义属性，为什么会突然提起这个很少人用到的东西呢？因为最近在重构个人官网，不知道为什么突然喜欢用上CSS变量，可能其自身隐藏的魅力，让笔者对它刮目相看。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
  data () {
    return {
      loading: false,
      menu: [
        { id: 1, menuName: '方向', cont: ['前端', '后端', '服务器'] },
        {
          id: 2,
          menuName: '语言',
          cont: ['JavaScript', 'CSS', 'Adobe Premiere']
        },
        {
          id: 3,
          menuName: '要点',
          cont: ['CSS', 'ES6', 'Node', 'Vue', 'Angular']
        },
        { id: 4, menuName: '媒体', cont: ['asd1'] }
      ]
    }
  },
  methods: {},
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.blog {
  position: relative;
  background: url('../static/img/bg3.png') repeat;
  width: 100%;
  height: 100%;
  .main {
    min-height: 100vh;
    .bg_img_box {
      width: 100%;
      height: 300px;
      overflow: hidden;
      .main_bg {
        width: 100%;
        height: 300px;
        background-color: rebeccapurple;
        background: url('../static/img/m.jpg') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;
        animation: scaleDraw ease-in-out infinite 10s;
        @keyframes scaleDraw {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }
        &::after {
          z-index: 0;
          position: absolute;
          content: ' ';
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.4;
        }
      }
    }
    .box {
      width: 800px;
      margin: 20px auto;
      li {
        display: flex;
        padding: 20px 0;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        p {
          font-weight: 550;
          color: #111;
        }
        .label {
          color: #333;
          font-size: 14px;
          span {
            padding: 5px 10px;
            margin-left: 20px;
            &:first-child {
              margin-left: 10px;
            }
            &:hover {
              background-color: rgba(113, 75, 253, 0.5);
            }
          }
          .active {
            background-color: rgb(113, 75, 253);
            color: #fff;
          }
        }
      }
    }
    .list {
      width: 800px;
      min-width: 800px;
      max-width: 800px;
      margin: 0 auto;
      .card {
        position: relative;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgb(156, 156, 156);
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title {
          font-size: 24px;
          font-weight: 550;
          color: #333;
          padding-bottom: 10px;
        }
        .tagGroup {
          padding: 20px 0;
          .tag {
            margin-left: 10px;
            color: #999;
            border: 1px solid rgb(22, 193, 245);
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            padding: 3px 5px;
            &:hover {
              color: #fff;
              background-color: rgb(22, 193, 245);
            }
            &:first-child {
              margin-left: 0;
            }
          }
        }
        .cont {
          display: flex;
          text-align: justify;
          img {
            width: 180px;
            height: 100px;
            border-radius: 5px;
            object-fit: cover;
          }
          p {
            font-size: 16px;
            padding-left: 20px;
            line-height: 1.5em;
          }
        }
      }
    }
  }
}
</style>
