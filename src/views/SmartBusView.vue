<template>
  <div class="contains">
    <div class="first">
      <div class="orders">
        <div class="user">用户名</div>
        <div
          style="
            margin: 1vh 0 0 -1vw;
            display: flex;
            justify-content: space-evenly;
            font-size: 1.6vw;
          "
        >
          <div class="balance">余额:114514</div>
          <div class="score">积分:114514</div>
        </div>
        <div class="orderinfo">暂无订单信息</div>
      </div>
      <div class="paths">
        <div class="path" style="background-color: rgb(223, 255, 160)">
          <div>路线</div>
          <div>起点</div>
          <div>终点</div>
          <div>价格</div>
          <div>里程</div>
        </div>
        <div class="path s">
          <div>一号线</div>
          <div>光谷金融街</div>
          <div>南湖大厦</div>
          <div>8元</div>
          <div>20km</div>
        </div>
        <div class="path s">
          <div>二号线</div>
          <div>光谷金融街</div>
          <div>万达广场</div>
          <div>8元</div>
          <div>22km</div>
        </div>
        <div class="path s">
          <div>三号线</div>
          <div>香炉礁</div>
          <div>金石沙滩</div>
          <div>9元</div>
          <div>30km</div>
        </div>
        <div class="path s">
          <div>十二号线</div>
          <div>河口</div>
          <div>辛寨子</div>
          <div>12元</div>
          <div>40km</div>
        </div>
      </div>
    </div>
    <div class="stations">
      <div class="collection">
        <div class="station">河口站</div>
        <div class="station">蔡大岭站</div>
        <div class="station">黄泥川站</div>
        <div class="station">龙王塘站</div>
        <div class="station">塔尼湾站</div>
        <div class="station">旅顺站</div>
        <div class="station">铁山站</div>
        <div class="station">旅顺新港站</div>
      </div>
    </div>
  </div>
</template>

<script>
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
      padding: 8vh 5vw 0 5vw;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: space-evenly;
      .first,
      .stations {
        overflow: hidden;
        height: 90vh;
        background-color: yellowgreen;
      }
      .first {
        border-radius: 2vh 0 0 2vh;
        padding: 1vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40vw;
        .orders {
          padding: 0.5vw 0 0 1vw;
          width: 98%;
          height: 42vh;
          border-radius: 2vh;
          background-color: white;
          color: black;
          font-family: shuhan;
          font-size: 3vh;
          .user {
            font-size: 2.5vw;
            line-height: 2.5vw;
          }
          .orderinfo{
            margin: 1vh 0 0 0;
            text-align: center;
            width: 100%;
          }
        }
        .paths {
          margin: 0.6vw 0 0 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 98%;
          height: 45vh;
          border-radius: 2vh;
          background-color: white;
          color: black;
          font-size: 3vh;
          font-family: shuhan;
          .path {
            &:hover {
              background-color: rgb(207, 207, 207);
              cursor: pointer;
            }
            transition: all 0.15s ease-in-out;
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 6vw;
            div {
              width: 6vw;
            }
          }
          .s {
            font-size: 1.29vw;
          }
        }
      }
      .stations {
        border-radius: 0 2vh 2vh 0;
        width: 50vw;
        padding: 1vh;
        .collection {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 2vh;
          background-color: white;
          .station {
            display: flex;
            padding: 0 0 0 2vw;
            align-items: center;
            height: 4vw;
            font-size: 2.4vw;
            font-family: shuhan;
            color: black;
            transition: all 0.1s ease-in-out;
            &:hover {
              cursor: pointer;
              font-size: 3vw;
              background-color: rgb(220, 220, 220);
            }
          }
        }
      }
    }
  }
}
</style>
