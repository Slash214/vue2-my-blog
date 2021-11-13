<template>
  <div class="tool">
    <div class="box">
      <h4 class="title">工具合集</h4>
      <p class="erj_info">
        实用的工具集合，能提高我们的开发效率，从而增加上班摸鱼时间和减少夜晚加班时间
      </p>
      <div class="ScratchableLatex">
        <div class="card" v-for="i in 12" :key="i">
          <span class="wb">努力开发中</span>
          <span class="loading"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tool {
  .box {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    .title {
      margin: 50px 0 0 0;
      display: inline-block;
      text-align: center;
      width: 120px;
      font-size: 30px;
      color: #333;
      padding-bottom: 10px;
      font-weight: 600;
      border-bottom: 3px solid rgb(224, 74, 74);
    }
    .erj_info {
      font-size: 16px;
      padding: 10px 0 20px 0;
      color: #999;
      line-height: 1.5;
    }
    .ScratchableLatex {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 220px;
        height: 220px;
        line-height: 200px;
        padding: 10px;
        margin: 0 20px 20px 0;
        background: #fff;
        border: 1px solid #111;
        box-shadow: 0 0 5px 1px #eee;
        transition: all 0.3s ease-in-out;
        &:hover {
          border-radius: 10px;
          box-shadow: 0 0 10px 2px #eee;
          border: none;
          background: rgba(0, 0, 0, 0.5);
        }
        .wb {
          font-size: 24px;
        }
        .loading {
          width: 15px;
          display: inline-block;
          min-height: 3px;
          padding-right: 3px;
          margin-left: 3px;
          padding-left: 3px;
          border-left: 3px solid currentColor;
          border-right: 3px solid currentColor;
          background-color: currentColor;
          background-clip: content-box;
          animation: dotAnimate 1s infinite step-start both;
          &:before {
            content: '...';
          } /* IE8 */
          &::before {
            content: '';
          }
        }
        @keyframes dotAnimate {
            25% {
              border-color: transparent;
              background-color: transparent;
            }
            50% {
              border-right-color: transparent;
              background-color: transparent;
            }
            75% {
              border-right-color: transparent;
            }
          }
      }
    }
  }
}
</style>
