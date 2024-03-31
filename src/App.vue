<script>
import { RouterLink, RouterView } from "vue-router";
import Loading from "./components/loading.vue";
export default {
  name: "App",
  components: {
    Loading,
  },
  methods: {
    check_loading() {
      let timer = setInterval(() => {
        if (document.readyState === "complete") {
          clearInterval(timer);
          this.$refs.loading.out();
        }
      }, 300);
      fetch("127.0.0.1:5000")
        .then((v) => v.text())
        .then((v) => console.log(v));
    },
    scrollToHome() {
      document.getElementById("home").scrollIntoView();
    },
    scrollToP1() {
      document.getElementById("life").scrollIntoView();
    },
    scrollToP2() {
      document.getElementById("zone").scrollIntoView();
    },
    scrollToP3() {
      document.getElementById("more").scrollIntoView();
    },
    scrollToFooter() {
      document.getElementById("about").scrollIntoView();
    },
  },
  mounted() {
    this.check_loading();
    this.$router.beforeEach((to, from, next) => {
      this.$refs.loading.in(next);
    });
  },
};
</script>

<template>
  <div>
    <Loading ref="loading" />
    <button class="tohome" @click="scrollToHome()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        data-v-ea893728=""
      >
        <path
          fill="currentColor"
          d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
        ></path>
      </svg>
    </button>
    <div class="main">
      <header>
        <div class="left">
          <a href="javascript:history.back(-1)">
            <img id="logo" src="./assets/logo.png" />
            <img id="title" src="./assets/title.png" />
          </a>
        </div>
        <div id="nav">
          <router-link style="color: blue" to="/">
            <div class="bar">首页</div>
            <div class="baren">HOME</div>
          </router-link>
          <div @click="scrollToP1()" style="cursor: pointer">
            <div class="bar">生活</div>
            <div class="baren">LIFE</div>
          </div>
          <div @click="scrollToP2()" style="cursor: pointer">
            <div class="bar">社区</div>
            <div class="baren">ZONE</div>
          </div>
          <div @click="scrollToP3()" style="cursor: pointer">
            <div class="bar">更多</div>
            <div class="baren">MORE</div>
          </div>
          <div @click="scrollToFooter()" style="cursor: pointer">
            <div class="bar">关于</div>
            <div class="baren">ABOUT</div>
          </div>
          <button>
            <router-link style="color: white" to="/login"
              >登录/注册</router-link
            >
          </button>
        </div>
      </header>
      <!-- ---------------子页面----------------- -->
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-user-drag: none;
}

body {
  padding: 0;
  margin: 0;
  #app {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    .tohome {
      position: absolute;
      padding: 0.5vh 0 0 0;
      z-index: 99;
      right: 0;
      bottom: 2vh;
      width: 3vw;
      height: 3vw;
      border: none;
      border-radius: 1vw 0 0 1vw;
      background-color: black;
      svg {
        color: white;
        width: 2vw;
      }
    }
    .main {
      z-index: 1;
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      padding: 0;
      animation: generate 1.2s ease-in-out forwards;
      header {
        z-index: 99;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 8vh;
        background-color: white;
        .left {
          display: flex;
          height: 8vh;
          align-items: center;
          a {
            margin: 0 0 0 4vw;
            display: flex;
            height: 8vh;
            align-items: center;
            #logo {
              height: 6vh;
            }
            #title {
              height: 6vh;
            }
          }
        }
        #nav {
          display: flex;
          align-items: center;
          margin: 0 4vw 0 0;
          height: 8vh;
          color: black;
          font-family: shuhan;
          a,
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 4vw;
            .bar {
              line-height: 1.2vw;
              font-size: 1.2vw;
            }
            .baren {
              font-size: 0.8vw;
              line-height: 0.8vw;
            }
          }
          button {
            border: 0cm;
            border-radius: 0.6vw;
            overflow: hidden;
            margin: 0 0 0 1vw;
            a {
              display: flex;
              justify-content: center;
              height: 2vw;
              width: 8vw;
              background-color: black;
              font-size: 1.2vw;
              line-height: 1.2vw;
              font-family: shuhan;
            }
          }
        }
      }
    }
  }
}

@keyframes generate {
  0% {
    transform: translate(0px, 100vh) scale(0.8);
  }

  60% {
    transform: scale(0.8);
  }

  100% {
    transform: translate(0px, 0vh) scale(1);
  }
}
</style>
