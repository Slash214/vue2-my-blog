<template>
  <div @click="addLike()">
    <svg height="320" width="320" class="like" >
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
        fill="gray"
      />
    </svg>
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
    <div class="dot dot-4"></div>
    <div class="dot dot-5"></div>
    <div class="dot dot-6"></div>
    <div class="dot dot-7"></div>
    <div class="dot dot-8"></div>

    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-1">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-2">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-3">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-4">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>

    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-5">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-6">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-7">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="40" width="40" viewBox="0 0 320 320" class="h h-8">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>

    <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-1">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-2">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-3">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
    <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-4">
      <path
        class="path"
        d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'GiveLike',
  data () {
    return {}
  },
  methods: {
    addLike () {
      // onclick="document.body.classList.toggle('liked')"
      console.log(1)
    }
  }
}
</script>

<style>
svg.like {
  /* position: relative;
  top: calc(50vh - 160px);
  left: calc(50vw - 160px); */
  box-shadow: 0 0 250px rgba(0, 0, 0, 0.4);
  /*如果给出了第三个值, 那么第三个值将会被当作<blur-radius>解释。*/
  border-radius: 100%;
  background-color: #212121;
  cursor: pointer;
  transform: scale(0.3);
}
.liked svg.like {
  animation: blink 1s forwards;
}
.liked svg.like path {
  fill: #fff;
}

@keyframes blink {
  10% {
    transform: scale(0.42);
    background-color: #8815b7;
    box-shadow: 0 0 250px #f1e794;
  }
  100% {
    background-color: #e01f4f;
    box-shadow: 0 0 250px #ffeb3b;
  }
}

div.dot {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #fff;
  position: fixed;
  top: calc(50vh - 6px);
  left: calc(50vw - 6px);
  z-index: -1;
}
div.dot::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #fff;
}
div.dot::after {
  content: '';
  position: absolute;
  top: -160px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background-color: #fff;
  display: none;
}
.liked div.dot {
  opacity: 0;
  transform: translateY(-100px);
  background-color: #00e5ff;
  transition: transform 1s, opacity 0.5s 1s, background-color 0.2s 0.4s;
}
body.liked div.dot:after {
  display: block;
}
.liked div.dot-2 {
  transform: rotate(45deg) translateY(-100px);
}
.liked div.dot-3 {
  transform: rotate(90deg) translateY(-100px);
}
.liked div.dot-4 {
  transform: rotate(135deg) translateY(-100px);
}
.liked div.dot-5 {
  transform: rotate(180deg) translateY(-100px);
}
.liked div.dot-6 {
  transform: rotate(225deg) translateY(-100px);
}
.liked div.dot-7 {
  transform: rotate(270deg) translateY(-100px);
}
.liked div.dot-8 {
  transform: rotate(315deg) translateY(-100px);
}

.h {
  position: fixed;
  top: calc(50vh - 20px);
  left: calc(50vw - 20px);
  transform: scale(1);
  z-index: -1;
}
.h:nth-child(odd) {
  fill: skyblue;
}
.h:nth-child(even) {
  fill: yellow;
}

.liked .h {
  opacity: 0;
  transition: margin 1.1s cubic-bezier(0.13, 0.7, 0.32, 0.92), opacity 0.5s 1.1s,
    fill 0.2s 1s, transform 0.2s 1s;
}
.liked .h:nth-child(odd) {
  fill: white;
  transform: scale(1.5);
}
.liked .h-1 {
  margin-top: -200px;
}
.liked .h-5 {
  margin-top: 200px;
}

.liked .h-3 {
  margin-left: 200px;
}
.liked .h-7 {
  margin-left: -200px;
}
.liked .h-2 {
  margin-top: -140px;
  margin-left: 140px;
}
.liked .h-8 {
  margin-top: -140px;
  margin-left: -140px;
}
.liked .h-4 {
  margin-top: 140px;
  margin-left: 140px;
}
.liked .h-6 {
  margin-top: 140px;
  margin-left: -140px;
}

.fly {
  position: fixed;
  top: calc(50vh - 55px);
  left: calc(50vw - 55px);
  fill: skyblue;
  z-index: -1;
  transform: scale(0.5);
}
.liked .fly-1 {
  animation: fly-1 1s 0.1s;
}
.liked .fly-2 {
  animation: fly-2 1s 0.1s;
}
.liked .fly-3 {
  animation: fly-3 1s 0.1s;
}
.liked .fly-4 {
  animation: fly-4 1s 0.1s;
}
@keyframes fly-1 {
  25% {
    margin-top: -100px;
    margin-left: 100px;
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    margin-top: 100px;
    margin-left: -100px;
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.5);
  }
}
@keyframes fly-2 {
  25% {
    margin-top: -100px;
    margin-left: -100px;
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    margin-top: 100px;
    margin-left: 100px;
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.5);
  }
}
@keyframes fly-3 {
  25% {
    margin-top: 100px;
    margin-left: 100px;
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    margin-top: -100px;
    margin-left: -100px;
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.5);
  }
}
@keyframes fly-4 {
  25% {
    margin-top: 100px;
    margin-left: -100px;
    transform: scale(0.9);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    margin-top: -100px;
    margin-left: 100px;
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
