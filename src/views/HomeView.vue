<template>
  <div class="contains" style="color: black; font-size: 80px">
    <div class="thescroll">
      <section id="sec01" @mousemove="dynamic">
        <video
          id="backvideo"
          src="../assets/video/backvideo.mp4"
          autoplay
          loop
          muted
          pause-on-hover
          style="transform: translate3d(0%, 0%, 0px) scale(1)"
        ></video>
        <div class="slogan">美好生活欢迎您</div>
        <div class="content01">
          <div id="title">无困难</div>
          <div id="right">
            <el-carousel :interval="4000" height="45vh">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
            <input class="search" />
          </div>
        </div>
      </section>
      <section id="sec02">
        <h1>01</h1>
        <div class="service">
          <div class="serve1">
            <router-link to="/lifebill">生活缴费</router-link>
          </div>
          <div class="serve2">
            <router-link to="/film">观影指南</router-link>
          </div>
          <div class="serve3">
            <router-link to="/parkcar">停车指南</router-link>
          </div>
          <div class="serve4">
            <router-link to="/logistics">物流查询</router-link>
          </div>
          <div class="serve5">
            <router-link to="/smartbus">智慧巴士</router-link>
          </div>
          <div class="serve6">
            <router-link to="/subway">地铁交通</router-link>
          </div>
        </div>
      </section>
      <section id="sec03">
        <h1>02</h1>
        <div class="service">
          <div class="serve1">
            <router-link to="/outpatient">门诊预约</router-link>
          </div>
          <div class="serve2">
            <router-link to="/government">政府服务</router-link>
          </div>
          <div class="serve3">
            <router-link to="/law">法律咨询</router-link>
          </div>
          <div class="serve4">
            <router-link to="/voluteer">支援活动</router-link>
          </div>
          <div class="serve5">
            <router-link to="/welfare">爱心公益</router-link>
          </div>
          <div class="serve6">
            <router-link to="/youth">青年驿站</router-link>
          </div>
        </div>
      </section>
      <section id="sec04">
        <h1>03</h1>
        <div class="service">
          <div class="serve1">
            <router-link to="/house">房源信息</router-link>
          </div>
          <div class="serve2">
            <router-link to="/job">工作招聘</router-link>
          </div>
          <div class="serve3">
            <router-link to="/book">数字图书</router-link>
          </div>
          <div class="serve4">
            <router-link to="/activity">活动管理</router-link>
          </div>
          <div class="serve5">
            <router-link to="/kitchen">厨房助手</router-link>
          </div>
          <div class="serve6">
            <router-link to="/trash">垃圾分类</router-link>
          </div>
        </div>
      </section>
      <!-- <section id="sec05">
        <h1>04</h1>
        <div class="service">
          <div class="serve1"></div>
          <div class="serve2"></div>
          <div class="serve3"></div>
          <div class="serve4"></div>
          <div class="serve5"></div>
          <div class="serve6"></div>
        </div>
      </section> -->
      <section id="sec06">
        <!-- <h1>footer</h1> -->
        <div class="footer"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    dynamic(event) {
      let countX = -(event.clientX / document.documentElement.clientWidth) * 12;
      let countY =
        -(event.clientY / document.documentElement.clientHeight) * 18;
      document.getElementById(
        "backvideo"
      ).style.transform = `translate3d(${countX}%, ${countY}%, 0px) scale(1.2)`;
    },
  },
};
</script>

<style lang="scss" setup>
@font-face {
  font-family: "shuhan";
  src: url("../assets/font/上首蜀汉体.ttf") format("truetype");
}

* {
  padding: 0;
  margin: 0;
  user-select: none;
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
      width: 100%;
      height: 100vh;
      background-color: rgb(138, 138, 138);
      .thescroll {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        overflow: scroll;
        width: 100%;
        height: 100%;
        section {
          width: 100%;
          height: 100vh;
          scroll-snap-align: start;
          text-align: center;
          .service {
            margin: 4vw 0 0 2vw;
            width: 70vw;
            height: 80vh;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 2vw;
            div {
              border-radius: 2vw;
              background-color: skyblue;
            }
          }
        }
        #sec01 {
          position: relative;
          display: flex;
          overflow: hidden;
          align-items: flex-end;

          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 120%;
          }
          .slogan {
            position: absolute;
            z-index: 2;
            top: 20vh;
            left: 3vw;
            transition: all 0.1s ease;
            width: 35vw;
            height: 10vh;
          }
          .content01 {
            z-index: 98;
            width: 100%;
            margin: 0 0 2vw 0;
            display: flex;
            overflow: hidden;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
            #title {
              margin-right: 20vw;
              color: white;
              font-size: 6vw;
            }
            #right {
              width: 50vw;
              height: 70vh;
              .el-carousel {
                margin-bottom: 8vh;
              }
              .el-carousel__item h3 {
                color: #475669;
                opacity: 0.75;
                line-height: 200px;
                margin: 0;
                text-align: center;
              }

              .el-carousel__item:nth-child(2n) {
                background-color: rgba(140, 150, 160, 0.5);
              }

              .el-carousel__item:nth-child(2n + 1) {
                background-color: rgba(140, 150, 160, 0.5);
              }
              .search {
                width: 20vw;
                height: 10vh;
                background-color: white;
                border-radius: 6vw;
              }
            }
          }
        }

        #sec02 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: white;
          h1 {
            margin: 0 0 0 6vw;
          }
        }
        #sec03 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          h1 {
            margin: 0 0 0 6vw;
          }
        }
        #sec04 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: white;
          h1 {
            margin: 0 0 0 6vw;
          }
        }
        #sec05 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          h1 {
            margin: 0 0 0 6vw;
          }
        }
        #sec06 {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          background-color: #475669;
          .footer {
            width: 100%;
            height: 50vh;
            background-color: rgb(255, 255, 255);
          }
        }
      }
    }
  }
}
</style>
