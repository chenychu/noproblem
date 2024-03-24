<template>
  <div class="contains" @mousemove="dynamic">
    <video
      id="backvideo"
      src="../assets/video/backvideo2.mp4"
      autoplay
      loop
      muted
      pause-on-hover
      style="transform: translate3d(0%, 0%, 0px) scale(1)"
    ></video>
    <div class="logintext">
      <h1>即刻加入，让生活畅通无阻</h1>
    </div>
    <div class="panel">
      <div id="login">
        <div class="logtitle">登录</div>

        <input type="text" :placeholder="username" />
        <input type="password" :placeholder="password" />
        <input type="text" :placeholder="oncecode" />
        <button id="login-submit" @click="submit">登录</button>
        <button id="change-register" @click="changeToRegister">
          还没有账号？点此注册
        </button>
      </div>
      <div id="register">
        <div class="logtitle">注册</div>
        <input type="text" :placeholder="username" />
        <input type="password" :placeholder="password" />
        <input type="password" :placeholder="sureword" />
        <input type="text" :placeholder="oncecode" />
        <button id="login-submit" @click="submit">注册</button>
        <button id="change-login" @click="changeToLogin">
          已有账号？点此登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "电话号码/邮箱地址",
      password: "密码",
      sureword: "确认密码",
      oncecode: "验证码",
    };
  },
  methods: {
    submit() {},
    changeToRegister() {
      document.getElementById("login").style.display = "none";
      document.getElementById("register").style.display = "flex";
    },
    changeToLogin() {
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "flex";
    },
    dynamic(event) {
      let countX = -(event.clientX / document.documentElement.clientWidth) * 18;
      let countY =
        -(event.clientY / document.documentElement.clientHeight) * 18;
      document.getElementById(
        "backvideo"
      ).style.transform = `translate3d(${countX}%, ${countY}%, 0px) scale(1.2)`;
    },
  },
  // mounted:{

  // }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "shuhan";
  src: url("../assets/font/上首蜀汉体.ttf") format("truetype");
}

* {
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

body {
  padding: 0;
  margin: 0;

  #app {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    .contains {
      position: relative;
      display: flex;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
      }
      .logintext {
        position: absolute;
        margin-top: 8vh;
        width: 50vw;
        height: 80vh;
        left: 5vw;
        background-color: rgba(245, 245, 220, 0.089);
      }
      .panel {
        position: absolute;
        margin-top: 8vh;
        right: 5vw;
        width: 36vw;
        height: 80vh;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 4vh;
        #login {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          .logtitle {
            color: black;
            font-size: 5vh;
          }
          input {
            width: 20vw;
            height: 6vh;
            padding: 0 0.8vw 0 0.8vw;
            font-size: 1vw;
            border-radius: 2vh;
          }
        }
        #register {
          display: none;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          .logtitle {
            color: black;
            font-size: 5vh;
          }
          input {
            width: 20vw;
            height: 6vh;
            padding: 0 0.8vw 0 0.8vw;
            font-size: 1vw;
            border-radius: 2vh;
          }
        }
      }
    }
  }
}
</style>
