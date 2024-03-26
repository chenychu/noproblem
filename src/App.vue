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
    },
    scrollToP1() {
      document.getElementById("sec02").scrollIntoView();
    },
    scrollToP2() {
      document.getElementById("sec03").scrollIntoView();
    },
    scrollToP3() {
      document.getElementById("sec04").scrollIntoView();
    },
    scrollToFooter() {
      document.getElementById("sec06").scrollIntoView();
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
    <div class="main">
      <div id="upbtn"></div>
      <header>
        <div style="display: flex; align-items: center">
          <a href="javascript:history.back(-1)">
            <img class="logo" src="./assets/logo.png" />
          </a>
          <div>无困难</div>
          <div>Without Problem</div>
        </div>

        <div id="router">
          <router-link to="/">首页</router-link>
          <div @click="scrollToP1()" style="cursor: pointer">Part1</div>
          <div @click="scrollToP2()" style="cursor: pointer">Part2</div>
          <div @click="scrollToP3()" style="cursor: pointer">Part3</div>
          <!-- <div style="cursor: pointer">Part4</div> -->
          <div @click="scrollToFooter()" style="cursor: pointer">关于我们</div>

          <button><router-link to="/login">登录/注册</router-link></button>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "shuhan";
  src: url("../assets/font/上首蜀汉体.ttf") format("truetype");
}

* {
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;

  #app {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;

    .main {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      padding: 0;
      animation: generate 1.2s ease-in-out forwards;
      header {
        backdrop-filter: blur(30px);
        border:solid .3vh rgba(255, 255, 255, 0.3);
        z-index: 99;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        position: fixed;
        top: 0px;
        left: 0px;
        padding: 0 5vw;
        width: 100%;
        height: 14vh;
        // background-color: rgba(0, 0, 0, 0.3);
        color: black;

        .logo {
          width: 80px;
        }

        .logotitle {
          margin: 1vw;
          font-size: 60px;
        }

        #router {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 14vh;
          div {
            // padding: 1.5vh 0 0 0;
            width: 6vw;
            height: 2vw;

            margin: 0 0.2vh;
            font-size: 1.6vw;
            font-family: shuhan;
          }

          a {
            width: 6vw;
            height: 2vw;
            margin: 0 0.2vh;
            font-size: 1.6vw;
            font-family: "shuhan";
          }

          .router-link-exact-active {
            color: rgb(0, 104, 189);
            width: 4vw;
            height: 2vw;
          }

          button {
            width: 10vw;
            height: 2vw;
            color: white;
            margin: 0 0.5vw;
            border: 0;
            border-radius: 2vw;
            background-color: rgb(0, 0, 0);
            font-size: 1.6vw;
            font-family: "shuhan";
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
