<template>
  <div class="contains">
    <div class="left">
      <div class="phonebill">
        手机充值
        <div class="phoneinput">手机号:<input type="text" /></div>
        <div class="phoneinput">充&nbsp;&nbsp;值:<input type="number" /></div>
        <div class="choosemoney">
          <div class="money">10元</div>
          <div class="money">20元</div>
          <div class="money">30元</div>
          <div class="money">50元</div>
          <div class="money">100元</div>
          <div class="money">200元</div>
          <div class="money">300元</div>
          <div class="money">500元</div>
          <input placeholder="自定义" type="number" />
        </div>
        <button>立即充值</button>
      </div>
      <div class="bills">
        <div v-for="category in categories" :key="category.id">
          <component :is="getComponentType(category)" :category="category" :recharges="recharges" />
        </div>
      </div>
    </div>
    <div class="right">
      <el-carousel height="36vh">
        <el-carousel-item
          ><img style="width: 100%;height: 100%; object-fit: cover;" src="../assets/images/home/img1.jpg" alt=""
        /></el-carousel-item>
      </el-carousel>
      <Weather />
    </div>
  </div>
</template>

<script>
import Weather from "../components/weather.vue";
import {listRecord, getRecord, delRecord, addRecord, updateRecord} from "../api/system/living/record.js"
import {listCategory} from "../api/system/living/category.js"
import { listRecharge, getRecharge, delRecharge, addRecharge, updateRecharge } from "@/api/system/living/recharge";
import Bill from '../components/lifeBill.vue'

import { reactive } from 'vue'

const categoryQuery = reactive({
  pageNum: 1,
  pageSize: 10,
  id: null,
  deleteFlag: null,
  name: null,
  sort: null,
  appType: null,
  imgUrl: null,
  type: null
})
const recordQuery = reactive({
  pageNum: 1,
  pageSize: 10,
  id: null,
  deleteFlag: null,
  paymentAmount: null,
  paymentTypeId: null,
  rechargeTime: null,
  type: null,
  ruleId: null,
  status: null,
  phoneLivingId: null,
  title: null
})
const rechargeQuery = reactive({
  pageNum: 1,
  pageSize: 10,
  id: null,
  deleteFlag: null,
  amount: null,
  categoryId: null,
  billNo: null,
  paymentNo: null,
  paymentTypeId: null,
  rechargeTime: null,
  userId: null,
  payStatus: null,
  title: null,
  chargeUnit: null,
  ownerName: null
})

export default {
  name: "lifebill",
  components: {
    Weather,
    Bill,
  },
  data(){
    return{
      records: [],
      categories:[],
      recharges:[],
    }
  },
  created() {
    this.getRecords();//电话缴费记录
    this.getCategory();//缴费分类
    this.getRecharge();//水 电 燃气缴费记录
  },
  methods: {
    async getRecords() {
      try {
        const response = await listRecord(recordQuery);
        this.records = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCategory(){
      try {
        const response = await listCategory(categoryQuery);
        this.categories = response.rows;
      } catch (error) {
        console.error(error);
      }
    },
    async getRecharge(){
      try {
        const response = await listRecharge(rechargeQuery);
        this.recharges = response.rows;
      } catch (error) {
        console.error(error);
      }
    },
    getComponentType(category) {
      switch (category.id) {
        case 18:
          return 'Bill'
        case 19:
          return 'Bill'
        case 20:
          return 'Bill'
        default:
          return ''
      }
    }
  },
};
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
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 100vh;
      padding: 8vh 0 0 0;
      .left,
      .right {
        overflow: hidden;
        height: 90vh;
        border-radius: 2vw;
        background-color: rgba(255, 255, 255, 0.425);
      }
      .left {
        margin: 0 0 0 4vw;
        display: flex;
        width: 55vw;
        height: 90vh;
        color: black;
        .phonebill,
        .bills {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: greenyellow;
          width: 50%;
          height: 100%;
          font-family: shuhan;
          font-size: 4vh;
          .bill {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 30vh;
            border-bottom: solid;
          }
          .gas {
            border-bottom: 0;
          }
        }

        .phonebill {
          padding: 4vw 1vh 0 1vh;
          box-sizing: border-box;
          border-right: solid;
          font-size: 6vh;
          line-height: 6vh;
          .phoneinput {
            margin: 2vw 0 0 0;
            display: flex;
            align-items: center;
            font-size: 4vh;
            input {
              padding: 0 0 0 2vw;
              width: 16vw;
              height: 5vh;
              border-radius: 1vh;
              color: black;
              font-family: shuhan;
              font-size: 3vh;
            }
          }
          .choosemoney {
            overflow: hidden;
            margin: 2vw 0 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            width: 90%;
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
            margin: 2vw 0 0 0;
            border: 0;
            border-radius: 2vh;
            font-size: 2vw;
            font-family: shuhan;
            width: 15vw;
            height: 3vw;
            color: white;
            background-color: blue;
            transition: all 0.12s ease-in-out;
            &:hover {
              background-color: rgb(0, 0, 190);
            }
          }
        }
        .bills {
          box-sizing: border-box;
          border-left: solid;
          .record {
            font-size: 2.5vh;
          }
        }
      }
    }
    .right {
      margin: 0 4vw 0 0;
      width: 35vw;
    }
  }
}
</style>
