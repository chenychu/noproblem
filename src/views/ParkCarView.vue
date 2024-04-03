<template>
  <div class="contains">
    <div class="left">
      <div class="userinfo">
        <div class="user">用户名</div>
        <div
          style="margin: 1vh 0; display: flex; justify-content: space-evenly"
        >
          <div class="balance">余额:114514</div>
          <div class="score">积分:114514</div>
        </div>
        <button class="addcar">添加车辆信息</button>
        <div class="carinfo">暂无车辆信息</div>
      </div>
      <div class="choosemoney">
        <div class="money">10元</div>
        <div class="money">20元</div>
        <div class="money">50元</div>
        <div class="money">100元</div>
        <div class="money">200元</div>
        <div class="money">300元</div>
        <div class="money">500元</div>
        <div class="money">800元</div>
        <input placeholder="自定义" type="number" />
      </div>
      <button>立即充值</button>
    </div>
    <div class="mid">
      <div class="title">附近停车场</div>
      <div class="parks">
        <div class="park"></div>
        <div class="park"></div>
        <div class="park"></div>
        <div class="park"></div>
        <div class="park"></div>
        <div class="park"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
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
      overflow: hidden;
      position: relative;
      display: flex;
      padding: 8vh 3vw 0 3vw;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: space-evenly;

      .left,
      .mid,
      .right {
        width: 30vw;
        height: 90vh;
        background-color: orangered;
        border-radius: 2vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1vh;
        color: black;
        font-family: shuhan;
      }
      .left {
        .userinfo {
          padding: 1vh;
          width: 100%;
          height: 40vh;
          border-radius: 2vh;
          font-size: 1.5vw;
          line-height: 1.5vw;
          font-family: shuhan;
          color: black;
          background-color: white;
          .user {
            font-size: 3vw;
            line-height: 3vw;
          }
          .addcar {
            &:hover {
              background-color: rgb(235, 105, 0);
            }
            transition: all 0.1s ease-in-out;
            width: 100%;
            height: 5vh;
            border: 0;
            border-radius: 2vh;
            font-size: 1.5vw;
            line-height: 1.5vw;
            font-family: shuhan;
            color: white;
            background-color: orange;
          }
          .carinfo {
            margin: 1vh 0 0 0;
            width: 100%;
            text-align: center;
          }
        }
        .choosemoney {
          overflow: hidden;
          margin: 2vw 0 0 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          width: 100%;
          height: 30vh;
          border-radius: 2vh;
          background-color: white;
          font-size: 4vh;
          line-height: 3vh;
          .money {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            &:hover {
              cursor: pointer;
              background: rgb(200, 200, 200);
            }
          }
          input {
            width: 8.2vw;
            border: 0;
            padding: 0 0 0 1.5vw;
            font-size: 3.5vh;
            font-family: shuhan;
          }
        }
        button {
          &:hover {
            background-color: rgb(235, 105, 0);
          }
          margin: 2vw 0 0 0;
          border: 0;
          border-radius: 2vh;
          font-size: 2vw;
          font-family: shuhan;
          width: 15vw;
          height: 3vw;
          color: white;
          background-color: orange;
          transition: all 0.12s ease-in-out;
        }
      }
      .mid {
        .title {
          width: 100%;
          font-size: 3vw;
          line-height: 3vw;
          color: white;
          text-align: center;
        }
        .parks{
          width: 100%;
          height: 82vh;
          border-radius: 1vh;
          background-color: white;
        }
      }
    }
  }
}
</style>
