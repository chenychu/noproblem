<script setup>
</script>

<template>
  <div class="contains">
    <div class="column first">
      <div class="title">社区</div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="社区A" name="1">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="社区B" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="社区C" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="column second">
      <div class="title">小区</div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="小区A" name="1">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="小区B" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="小区C" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="小区D" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
        <el-collapse-item title="小区E" name="5">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
        <el-collapse-item title="小区F" name="6">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>

        </el-collapse-item>
        <el-collapse-item title="小区G" name="7">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>

        </el-collapse-item>
        <el-collapse-item title="小区H" name="8">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="column third">
      <div class="title">楼栋</div>
            <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="楼栋A" name="1">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼栋B" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼栋C" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼栋D" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼栋E" name="5">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼栋F" name="6">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>

        </el-collapse-item>
        <el-collapse-item title="楼栋G" name="7">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>

        </el-collapse-item>
        <el-collapse-item title="楼栋H" name="8">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="column fourth">
      <div class="title">楼层</div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="楼层A" name="1">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼层B" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼层C" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼层D" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
        <el-collapse-item title="楼层E" name="5">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
            <el-collapse-item title="楼层F" name="6">
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "shuhan";
  src: url("../assets/font/上首蜀汉体.ttf") format("truetype");
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
    .contains {
      overflow: hidden;
      position: relative;
      display: flex;
      padding: 8vh 0 0 0;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: space-evenly;
      .column {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1vw 1vh 1vh;
        width: 24vw;
        height: 90vh;
        border-radius: 2vh;
        color: black;
        background-color: wheat;
        font-size: 2vw;
        line-height: 2vw;
        font-family: shuhan;
        .el-collapse {
          overflow: hidden;
          margin: 1vh 0 0 0 ;
          width: 100%;
          border-radius: 2vh;
          background-color: white;
          .el-collapse-item {
            width: 100%;
            padding: 0 0 0 1.2vw;
            button {
              font-size: 1.5vw;
              font-family: shuhan;
            }
          }
        }
      }
    }
  }
}
</style>
