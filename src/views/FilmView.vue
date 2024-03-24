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
        <h1>今日票房</h1>
        <div class="today">
          <div class="todayfilm1"></div>
          <div class="todayfilm2"></div>
          <div class="todayfilm3"></div>
          <div class="todayfilm4"></div>
          <div class="todayfilm5"></div>
        </div>
        <h1>最受期待</h1>
        <div class="expect">
          <div class="expect1"></div>
          <div class="expect2"></div>
          <div class="expect3"></div>
          <div class="expect4"></div>
          <div class="expect5"></div>
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
      background-color: #fff;
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
          color: black;
          h1 {
            padding: 0 0 0 0.8vw;
            width: 100%;
            position: relative;
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
          margin: 5vh 0 0 0vw;
          width: 30vw;
          height: 80vh;
          background-color: rgb(255, 201, 130);
          .today {
            width: 100%;
            height: 35vh;
            display: flex;
            background-color: aliceblue;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            div {
              width: 100%;
              height: 6vh;
              background-color: rgb(194, 194, 194);
            }
          }
          .expect {
            width: 100%;
            height: 35vh;
            display: flex;
            background-color: aliceblue;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            div {
              width: 100%;
              height: 6vh;
              background-color: rgb(194, 194, 194);
            }
          }
        }
      }
    }
  }
}
</style>
