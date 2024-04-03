<template>
  <div class="contains">
    <div class="search">
      <div class="putin">
        <input placeholder="请输入要查询的订单号" type="search" />
        <button>查询</button>
      </div>
      <div class="infors">
        <div>未查询到该订单</div>
        <div>请重新输入订单号</div>
      </div>
    </div>
    <div class="logistics">
      <div class="collection" v-for="logistic in logistics" :key="logistic.id">
        <div class="logistic">{{ logistic.name }}</div>
<!--        <div class="logistic">当当快递</div>-->
<!--        <div class="logistic">德邦快递</div>-->
<!--        <div class="logistic">递四方</div>-->
<!--        <div class="logistic">凡宇快递</div>-->
<!--        <div class="logistic">华强快递</div>-->
<!--        <div class="logistic">极兔快递</div>-->
<!--        <div class="logistic">加运美</div>-->
<!--        <div class="logistic">佳吉快运</div>-->
<!--        <div class="logistic">佳怡物流</div>-->
<!--        <div class="logistic">嘉里大通</div>-->
<!--        <div class="logistic">京东快递</div>-->
<!--        <div class="logistic">聚美优品</div>-->
<!--        <div class="logistic">跨越速运</div>-->
<!--        <div class="logistic">快捷快递</div>-->
<!--        <div class="logistic">联邦快递</div>-->
<!--        <div class="logistic">龙邦速运</div>-->
<!--        <div class="logistic">民邦速运</div>-->
<!--        <div class="logistic">民航快递</div>-->
<!--        <div class="logistic">全晨快递</div>-->
<!--        <div class="logistic">全峰快递</div>-->
<!--        <div class="logistic">全一快递</div>-->
<!--        <div class="logistic">申通快递</div>-->
<!--        <div class="logistic">圣安物流</div>-->
<!--        <div class="logistic">盛辉物流</div>-->
<!--        <div class="logistic">顺丰速运</div>-->
<!--        <div class="logistic">速尔快递</div>-->
<!--        <div class="logistic">天天快递</div>-->
<!--        <div class="logistic">万象物流</div>-->
<!--        <div class="logistic">小红帽</div>-->
<!--        <div class="logistic">信丰物流</div>-->
<!--        <div class="logistic">易通达</div>-->
<!--        <div class="logistic">优速快递</div>-->
<!--        <div class="logistic">圆通速递</div>-->
<!--        <div class="logistic">远成物流</div>-->
<!--        <div class="logistic">运通速运</div>-->
<!--        <div class="logistic">韵达快递</div>-->
<!--        <div class="logistic">增益快递</div>-->
<!--        <div class="logistic">宅急送</div>-->
<!--        <div class="logistic">芝麻开门</div>-->
<!--        <div class="logistic">中国邮政</div>-->
<!--        <div class="logistic">中铁飞豹</div>-->
<!--        <div class="logistic">AAE</div>-->
<!--        <div class="logistic">Aramex</div>-->
<!--        <div class="logistic">DHL</div>-->
<!--        <div class="logistic">EMS</div>-->
<!--        <div class="logistic">OCS</div>-->
<!--        <div class="logistic">TNT</div>-->
<!--        <div class="logistic">UPS</div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {listLogistics_company} from "@/api/system/logistics-inquiry/logistics_company.js";

const companyQuery = reactive({
  pageNum: 1,
  pageSize: 10,
  id: null,
  deleteFlag: null,
  name: null,
  sort: null,
  imgUrl: null,
  introduce: null,
  shippingMethod: null,
  phone: null
})
export default {
  data(){
    return{
      logistics:[],
    }
  },
  created() {
    this.getLogistic()
  },
  methods:{
    async getLogistic(){
      const response = await listLogistics_company(companyQuery)
      this.logistics=response.rows;
    }
  }
}
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
      .search,
      .logistics {
        overflow: hidden;
        height: 90vh;
        background-color: orange;
      }
      .search {
        border-radius: 2vh 0 0 2vh;
        padding: 1vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30vw;
        .putin {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          input,
          button {
            height: 8vh;
            box-sizing: border-box;
            border: 0;
            font-family: shuhan;
            font-size: 3.5vh;
          }
          input {
            border-radius: 2vh 0 0 2vh;
            width: 22.2vw;
            padding: 0 0 0 1vw;
          }
          button {
            border-radius: 0 2vh 2vh 0;
            width: 12.8vh;
            color: white;
            background-color: blue;
          }
        }
        .infors {
          margin: .6vw 0 0 0;
          padding: 1vw 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 98%;
          height: 80vh;
          border-radius: 2vh;
          background-color: white;
          color: black ;
          font-family: shuhan;
          font-size: 3vh;
        }
      }
      .logistics {
        border-radius: 0 2vh 2vh 0;
        width: 60vw;
        padding: 1vh;
        .collection{
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          width: 100%;
          height: 100%;
          border-radius: 2vh;
          background-color: white;
          .logistic{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3vh;
            font-family: shuhan;
            color: black;
            transition: all .1s ease-in-out;
            &:hover{
              cursor: pointer;
              background-color: rgb(220, 220, 220);
            }
          }
        }
      }
    }
  }
}
</style>
