<template>
  <div class="contains">
    <div class="panel">
      <div id="searchpanel">
        <div class="up"><input class="search" placeholder="快递单号" /></div>
        <div class="down"></div>
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
      width: 100%;
      height: 100vh;
      background-color: rgb(65, 65, 65);
      display: flex;
      align-items: center;
      justify-content: center;
      .panel {
        margin: 5vw 0 0 0;
        display: flex;
        width: 85vw;
        height: 80vh;
        overflow: hidden;
        border-radius: 2vh;
        background-color: beige;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        #searchpanel {
          width: 50%;
          height: 80vh;
          padding: 2vh;
          // background-color: pink;
        }
      }
    }
  }
}
</style>
