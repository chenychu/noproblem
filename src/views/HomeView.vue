<script>
export default {
  data() {
    return {
      homeimg: [{}, {}, {}],
    };
  },
  methods: {
    // dynamic(event) {
    //   let countX = -(event.clientX / document.documentElement.clientWidth) * 12;
    //   let countY =
    //     -(event.clientY / document.documentElement.clientHeight) * 18;
    //   document.getElementById(
    //     "backvideo"
    //   ).style.transform = `translate3d(${countX}%, ${countY}%, 0px) scale(1.2)`;
    // },
  },
};
</script>

<template>
  <div class="thescroll">
    <section id="home">
      <img class="homeback" src="../assets/images/home/homeback.jpg" alt="" />
      <div class="up">
        <div style="margin: 2vw 0 0 0">美好生活，一站搞定</div>
        <div>探索精彩活动，发现多彩世界</div>
        <div>一切尽在无困难平台！</div>
        <div style="margin: 1vw 0 0 0">加入我们，开启高效便捷新生活！</div>
        <div class="entitle" style="margin-top: 0.5vw">
          A Better Life, One Stop Solution
        </div>
        <div class="entitle">
          Explore exciting activities and discover a colorful world
        </div>
        <div class="entitle">
          Everything is on the platform "WITHOUT PROBLEM"
        </div>
        <div class="entitle">
          Join us and embark on an efficient and convenient new life!
        </div>
      </div>
      <div class="down">
        <div class="left">
          <el-carousel height="36vh" indicator-position="outside">
            <el-carousel-item
              ><img
                style="width: 100%; height: 100%; object-fit: cover"
                src="../assets/images/home/img1.jpg"
                alt=""
            /></el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <input placeholder="请输入需要查询的服务" type="text" />
          <button>搜索</button>
        </div>
      </div>
    </section>
    <!-- -----------------生活模块----------------- -->
    <section id="life">
      <div class="piclist">
        <img src="../assets/images/servepics/lifeback.jpg" alt="" />
        <div class="sectitle">生活模块</div>
      </div>
      <div class="serlist">
        <router-link to="/lifebill">
          <div class="serve">
            <div class="sername">生活缴费</div>
            <img src="../assets/images/servepics/lifebill.jpg" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
        <router-link to="/film">
          <div class="serve">
            <div class="sername">观影指南</div>
            <img
              style="top: -15vh"
              src="../assets/images/servepics/film.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/parkcar">
          <div class="serve">
            <div class="sername">停车指南</div>
            <img
              style="top: -30vh"
              src="../assets/images/servepics/parkcar.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/logistics">
          <div class="serve">
            <div class="sername">物流查询</div>
            <img
              style="top: -45vh"
              src="../assets/images/servepics/logistics.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/smartbus">
          <div class="serve">
            <div class="sername">智慧巴士</div>
            <img
              style="top: -60vh"
              src="../assets/images/servepics/smartbus.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/subway">
          <div class="serve">
            <div class="sername">地铁交通</div>
            <img
              style="top: -75vh"
              src="../assets/images/servepics/subway.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
      </div>
    </section>

    <!-- -----------------社区模块----------------- -->
    <section id="zone">
      <div class="piclist">
        <img src="../assets/images/servepics/zoneback.jpg" alt="" />
        <div class="sectitle">社区模块</div>
      </div>
      <div class="serlist">
        <router-link to="/outpatient">
          <div class="serve">
            <div class="sername">门诊预约</div>
            <img src="../assets/images/servepics/outpatient.jpg" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
        <router-link to="/zone">
          <div class="serve">
            <div class="sername">社区服务</div>
            <img
              style="top: -15vh"
              src="../assets/images/servepics/zone.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/law">
          <div class="serve">
            <div class="sername">法律咨询</div>
            <img
              style="top: -30vh"
              src="../assets/images/servepics/law.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/volunteer">
          <div class="serve">
            <div class="sername">志愿活动</div>
            <img
              style="top: -45vh"
              src="../assets/images/servepics/volunteer.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/welfare">
          <div class="serve">
            <div class="sername">爱心公益</div>
            <img
              style="top: -60vh"
              src="../assets/images/servepics/welfare.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/youth">
          <div class="serve">
            <div class="sername">青年驿站</div>
            <img
              style="top: -75vh"
              src="../assets/images/servepics/youth.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
      </div>
    </section>

    <!-- -----------------更多模块----------------- -->
    <section id="more">
      <div class="piclist">
        <img src="../assets/images/servepics/moreback.jpg" alt="" />
        <div class="sectitle">更多模块</div>
      </div>
      <div class="serlist">
        <router-link to="/house">
          <div class="serve">
            <div class="sername">房源信息</div>
            <img src="../assets/images/servepics/house.jpg" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
        <router-link to="/job">
          <div class="serve">
            <div class="sername">工作招聘</div>
            <img
              style="top: -15vh"
              src="../assets/images/servepics/job.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/book">
          <div class="serve">
            <div class="sername">数字图书</div>
            <img
              style="top: -30vh"
              src="../assets/images/servepics/book.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/activity">
          <div class="serve">
            <div class="sername">活动管理</div>
            <img
              style="top: -45vh"
              src="../assets/images/servepics/activity.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/kitchen">
          <div class="serve">
            <div class="sername">厨房助手</div>
            <img
              style="top: -60vh"
              src="../assets/images/servepics/kitchen.jpg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div></router-link
        ><router-link to="/trash">
          <div class="serve">
            <div class="sername">垃圾分类</div>
            <img
              style="top: -75vh"
              src="../assets/images/servepics/trash.jpg"
              alt=""
            />>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
            <div class="process"></div></div
        ></router-link>
      </div>
    </section>
    <!-- -----------------页脚----------------- -->
    <div id="about" style="background-color: white">
      <div class="school">
        <img id="schlogo" src="../assets/images/home/school.png" alt="" />
        <img id="sch" src="../assets/images/home/school-log.png" alt="" />
      </div>
      <div class="information">
        <div class="info1">
          <div class="title">友情链接</div>
          <a href="https://jsjds.blcu.edu.cn/index.htm" target="“_blank”"
            >计算机设计大赛</a
          >
          <a href="https://www.aiit.edu.cn/index.php" target="“_blank”"
            >安徽信息工程学院</a
          >
          <a href="https://xinghuo.xfyun.cn/spark" target="“_blank”"
            >讯飞星火认知大模型</a
          >
          <a href="https://cn.vuejs.org/" target="“_blank”">VUE-渐进式JS框架</a>
        </div>
        <div class="info2">
          <div class="title">友情链接</div>
          <a href="https://jsjds.blcu.edu.cn/index.htm" target="“_blank”"
            >计算机设计大赛</a
          >
          <a href="https://www.aiit.edu.cn/index.php" target="“_blank”"
            >安徽信息工程学院</a
          >
          <a href="https://xinghuo.xfyun.cn/spark" target="“_blank”"
            >讯飞星火认知大模型</a
          >
          <a href="https://cn.vuejs.org/" target="“_blank”">VUE-渐进式JS框架</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" setup>
@font-face {
  font-family: "shuhan";
  src: url("../assets/font/上首蜀汉体.ttf") format("truetype");
}

@keyframes process {
  to {
    transform: scaleX(1);
  }
}

* {
  padding: 0;
  margin: 0;
  user-select: none;
  -webkit-user-drag: none;
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
    .thescroll {
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      overflow: scroll;
      width: 100%;
      height: 100%;
      section {
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 8vh 0 0 0;
        scroll-snap-align: start;
        align-items: center;
        justify-content: center;
        background-color: rgb(18, 56, 116);
        .piclist {
          overflow: hidden;
          position: relative;
          width: 28vw;
          height: 90vh;
          border-radius: 2vh 0 0 2vh;
          img {
            width: 100%;
          }
          .sectitle {
            position: absolute;
            z-index: 80;
            left: 1vw;
            bottom: -1vw;
            color: blue;
            font-size: 5vw;
            font-family: shuhan;
          }
        }
        .serlist {
          display: flex;
          flex-direction: column;
          width: 60vw;
          height: 90vh;
          border-left: solid black;
          border-radius: 0 2vh 2vh 0;
          background-color: white;
          a {
            padding: 0;
            .serve {
              &:hover {
                .sername {
                  font-size: 6vh;
                  color: white;
                }
                img {
                  opacity: 1;
                }
                svg {
                  color: white;
                }
                .process {
                  animation: process 0.3s ease-in-out both;
                }
              }
              cursor: pointer;
              position: relative;
              display: flex;
              align-items: center;
              padding: 0 0 0 4vw;
              width: 100%;
              height: 15vh;
              .sername {
                z-index: 2;
                color: black;
                font-size: 5vh;
                font-family: shuhan;
                transition: all 0.1s ease-in-out;
              }
              img {
                position: absolute;
                opacity: 0;
                top: 0vh;
                left: -28.15vw;
                width: 28vw;
                height: 90vh;
                box-sizing: border-box;
                border: solid 0.5vh blue;
                border-radius: 2vh 0 0 2vh;
                transition: all 0.3s ease;
              }
              svg {
                z-index: 2;
                position: absolute;
                right: 1vw;
                width: 4vh;
                color: black;
                transition: all 0.35s ease-in-out;
              }

              .process {
                content: "";
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 15vh;
                transform: scaleX(0);
                transform-origin: left center;
                background-color: blue;
                border-radius: 0 2vh 2vh 0;
              }
            }
          }
        }
      }
      #home {
        overflow: hidden;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        font-family: shuhan;
        .homeback {
          position: absolute;
          right: 0;
          width: 100%;
          z-index: 0;
        }
        .up {
          transition: all 0.2s ease-in-out;
          z-index: 1;
          width: 100%;
          padding: 0 0 0 4vw;
          color: rgb(255, 235, 210);
          font-size: 4vw;
          line-height: 4vw;
          .entitle {
            font-size: 1.2vw;
            line-height: 1vw;
            transition: all 0.5s ease-in-out;
            &:hover {
              filter: blur(0.5vh);
            }
          }
        }
        .down {
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 50%;
          .left {
            margin: -0.8vw 0 0 4vw;
            width: 30%;
            height: 36vh;
            background-color: white;
          }
          .right {
            position: relative;
            display: flex;
            align-items: flex-end;
            margin: 0 4vw 0 4vw;
            width: 58%;
            height: 34.6vh;
            input,
            button {
              height: 8vh;
              border: 0;
              border-radius: 2vh;
              font-family: shuhan;
              font-size: 3.5vh;
            }
            input {
              padding: 0 1vw 0 1.5vw;
            }
            button {
              margin: 0 0 0 1vw;
              width: 12vh;
              color: white;
              background-color: blue;
            }
          }
        }
      }

      #life {
        z-index: 0;
      }

      #zone {
        z-index: 0;
      }

      #serve {
        z-index: 0;
      }

      #about {
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 8vh 0 0 0;
        scroll-snap-align: start;
        flex-direction: column;
        padding: 0;
        .school {
          position: relative;
          overflow: hidden;
          height: 70vh;
          background-color: rgb(18, 56, 116);
          border-radius: 0 0 4vw 4vw;
          #schlogo {
            position: absolute;
            left: 2vw;
            bottom: 1.8vw;
            height: 8vh;
          }
          #sch {
            position: absolute;
            right: -2vw;
            bottom: -2vw;
          }
        }
        .information {
          display: flex;
          height: 30vh;
          [class^="info"] {
            display: flex;
            flex-direction: column;
            margin: 0 0 0 4vw;
            padding: 1.6vw 0 0 0;
            width: 10vw;
            height: 100%;
            font-size: 1vw;
            line-height: 1vw;
            font-family: shuhan;
            .title {
              color: rgb(18, 56, 116);
              margin: 0 0 0.6vw 0;
              font-size: 2vw;
              line-height: 1.6vw;
              font-family: shuhan;
            }
            a {
              color: black;
              box-sizing: border-box;
              &:hover {
                border-bottom: solid 1px;
              }
            }
          }
          .info2 {
            margin: 0 0 0 1vw;
          }
        }
      }
    }
  }
}

@keyframes process {
  to {
    transform: scaleX(1.05);
  }
}
</style>
