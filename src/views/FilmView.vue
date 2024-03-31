<template>
  <div class="contains">
    <div class="film">
      <div class="left">
        <h1>正在热映<button class="more">查看更多</button></h1>
        <el-divider />
        <div class="upfilm">
          <div class="up01">
            <img
              @click="toTicket"
              src="../assets/images/filmimg/film01.jpg"
              alt=""
            />
            <button class="text" @click="toTicket">购票</button>
          </div>
          <div class="up02">
            <img src="../assets/images/filmimg/film02.jpg" alt="" />
            <button class="text" @click="toTicket">购票</button>
          </div>
          <div class="up03">
            <img src="../assets/images/filmimg/film03.jpg" alt="" />
            <button class="text" @click="toTicket">购票</button>
          </div>
          <div class="up04">
            <img src="../assets/images/filmimg/film04.jpg" alt="" />
            <button class="text" @click="toTicket">购票</button>
          </div>
        </div>
        <h1 style="margin-top: 2vh">
          即将上映<button class="more">查看更多</button>
        </h1>
        <el-divider />
        <div class="willfilm">
          <div class="will01">
            <img src="../assets/images/filmimg/film05.jpg" alt="" />
            <button class="text" @click="toTicket">预约</button>
          </div>
          <div class="will02">
            <img src="../assets/images/filmimg/film06.jpg" alt="" />
            <button class="text" @click="toTicket">预约</button>
          </div>
          <div class="will03">
            <img src="../assets/images/filmimg/film07.jpg" alt="" />
            <button class="text" @click="toTicket">预约</button>
          </div>
          <div class="will04">
            <img src="../assets/images/filmimg/film08.jpg" alt="" />
            <button class="text" @click="toTicket">预约</button>
          </div>
        </div>
      </div>
      <div class="right">
        <h1>今日票房(综合)</h1>
        <div class="today">
          <div class="thefilm" style="color: orangered">
            哥斯拉大战金刚2
            <div>7332.51万元</div>
          </div>
          <div class="thefilm">
            功夫熊猫4
            <div>1419.39万元</div>
          </div>
          <div class="thefilm">
            我们一起摇太阳
            <div>919.48万元</div>
          </div>
          <div class="thefilm">
            周处除三害
            <div>522.63万元</div>
          </div>
          <div class="thefilm">
            坠落的审判
            <div>308.03万元</div>
          </div>
        </div>
        <h1>最受期待</h1>
        <div class="expect">
          <div class="thefilm">
            沙丘2
            <div>275.67万元</div>
          </div>
          <div class="thefilm">
            熊出没·逆转时空
            <div>265.86万元</div>
          </div>
          <div class="thefilm">
            第二十条
            <div>97.32万元</div>
          </div>
          <div class="thefilm">
            被我弄丢的你
            <div>86.71万元</div>
          </div>
          <div class="thefilm">
            飞驰人生2
            <div>85.37万元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toTicket() {
      window.location.href = "/ticket";
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  user-select: none;
}

button {
  cursor: pointer;
  border: 0;
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
      background-color: rgb(18, 56, 116);
      font-family: shuhan;
      .film {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-evenly;
        .left {
          margin: 5vh 0vw 0 0.8vw;
          width: 50vw;
          height: 80vh;
          color: white;
          h1 {
            padding: 0 0 0 0.8vw;
            width: 100%;
            position: relative;
            font-family: shuhan;
            font-size: 1.6vw;
            .more {
              position: absolute;
              top: 0.5vh;
              right: 0;
              width: 8vw;
              height: 3.5vh;
              margin: 0 0 0 37vw;
              color: white;
              border-radius: 2vh;
              background-color: black;
              font-size: 2vh;
              font-family: "shuhan";
            }
          }

          .upfilm {
            margin: 1vh 0;
            width: 100%;
            height: 35vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
              height: 100%;
              width: 11vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 100%;
                border-radius: 2vh;
                cursor: pointer;
              }
              button {
                margin-top: 0.5vh;
                width: 100%;
                height: 4vh;
                background-color: black;
                color: white;
                font-family: "shuhan";
                font-size: 2vh;
                border-radius: 2vh;
              }
            }
          }
          .willfilm {
            margin: 1vh 0;
            width: 100%;
            height: 35vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
              height: 100%;
              width: 11vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 100%;
                border-radius: 2vh;
                cursor: pointer;
              }
              button {
                margin-top: 0.5vh;
                width: 100%;
                height: 4vh;
                background-color: black;
                color: white;
                font-family: "shuhan";
                font-size: 2vh;
                border-radius: 2vh;
              }
            }
          }
        }
        .right {
          margin: 1vw 0 0 0vw;
          width: 30vw;
          height: 80vh;
          font-size: 2.3vh;
          h1 {
            border-bottom: solid 0.2vh white;
          }
          .today,
          .expect {
            width: 100%;
            height: 35vh;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            .thefilm {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 2vh;
              margin: 1vh 0 0 0;
              width: 100%;
              height: 6.6vh;
              border-radius: 2vh;
              background-color: rgba(125, 160, 255, 0.8);
            }
          }
        }
      }
    }
  }
}
</style>
