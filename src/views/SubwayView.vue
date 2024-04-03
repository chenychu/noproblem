<template>
    <div class="contains">
        <div class="text">该页面已迁移到移动端，请访问移动端APP</div>
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
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      .text{
        color: black;
        font-size: 2vw;
        font-family: shuhan;
      }
    }
  }
}</style>
