<template>
  <div class="contains">
    <div class="panel">
      <div id="nav">
        <div class="bill1">水费</div>
        <div class="bill2">电费</div>
        <div class="bill3">燃气费</div>
        <div class="bill4">话费</div>
      </div>
      <div id="billpanel"></div>
    </div>
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
      width: 100%;
      height: 100vh;
      background-color: rgb(65, 65, 65);
      display: flex;
      align-items: center;
      justify-content: center;
      .panel {
        margin: 5vw 0 0 0;
        width: 85vw;
        height: 80vh;
        overflow: hidden;
        border-radius: 2vh;
        background-color: beige;
        #nav {
          display: flex;
          width: 15vw;
          height: 100%;
          background-color: azure;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: flex-start;
          div {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 2vh 0;
            width: 100%;
            height: 10vh;
            color: black;
            background-color: rgb(212, 212, 212);
            font-family: "shuhan";
            font-size: 4vh;
            transition: all .3s ease;
            &:hover {
              background-color: rgb(179, 179, 179);
            }
          }
        }
      }
    }
  }
}
</style>
