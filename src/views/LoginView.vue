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
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
          <h3 class="title">无困难</h3>
          <el-form-item prop="username">
            <el-input
                v-model="loginForm.username"
                type="text"
                auto-complete="off"
                placeholder="账号"
            >
              <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="loginForm.password"
                type="password"
                auto-complete="off"
                placeholder="密码"
                @keyup.enter.native="handleLogin"
            >
              <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
            </el-input>
          </el-form-item>
          <el-form-item prop="code" v-if="captchaEnabled">
            <el-input
                v-model="loginForm.code"
                auto-complete="off"
                placeholder="验证码"
                style="width: 63%"
                @keyup.enter.native="handleLogin"
            >
              <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
            </el-input>
            <div class="login-code">
              <img :src="codeUrl" @click="getCode" class="login-code-img"/>
            </div>
          </el-form-item>
          <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
          <el-form-item style="width:100%;">
            <el-button
                :loading="loading"
                size="medium"
                type="primary"
                style="width:100%;"
                @click.native.prevent="handleLogin"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
            <div style="float: right;" v-if="register">
              <router-link class="link-type" :to="'/register'">立即注册</router-link>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt';
import { useStore } from "@/store/user";

const store = useStore();
export default {
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      username: "电话号码/邮箱地址",
      password: "密码",
      sureword: "确认密码",
      oncecode: "验证码",
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined
    };
  },
  created() {
    this.getCode();
    this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
      });
    }, getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          store.setToken(this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(()=>{});
          }).catch(() => {
            this.loading = false;
            if (this.captchaEnabled) {
              this.getCode();
            }
          });
        }
      });
    },
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
          button {
            width: 10vw;
            height: 6vh;
            border: 0;
            border-radius: 3vh;
            color: white;
            font-family: shuhan;
            background-color: rgb(0, 38, 255);
          }
          &:last-child {
            color: blue;
            background-color: transparent;
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
          button {
            width: 10vw;
            height: 6vh;
            border: 0;
            border-radius: 3vh;
            color: white;
            font-family: shuhan;
            background-color: rgb(0, 38, 255);
          }
          &:last-child {
            color: blue;
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
