<template>
  <div class="contains">
    <div class="film">
      <div class="left">
        <h1>正在热映<button class="more">查看更多</button></h1>
        <el-divider />
        <div class="upfilm">
          <div v-for="film in films" :key="film.id">
            <div v-if="isCurrentTimeGreaterThanPlayDate(film.playDate)">
              <img
                  @click="toTicket(film.id)"
                  :src="film.coverUrl"
                  alt=""
              />
              <p>{{film.name}}</p>
              <button class="text" @click="toTicket(film.id)">购票</button>
            </div>
          </div>

<!--          <div class="up02">-->
<!--            <img src="../assets/images/filmimg/film02.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">购票</button>-->
<!--          </div>-->
<!--          <div class="up03">-->
<!--            <img src="../assets/images/filmimg/film03.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">购票</button>-->
<!--          </div>-->
<!--          <div class="up04">-->
<!--            <img src="../assets/images/filmimg/film04.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">购票</button>-->
<!--          </div>-->
        </div>
        <h1 style="margin-top: 2vh">
          即将上映<button class="more">查看更多</button>
        </h1>
        <el-divider />
        <div class="willfilm">
          <div v-for="film in films" :key="film.id">
            <div v-if="!isCurrentTimeGreaterThanPlayDate(film.playDate)">
              <img
                  @click="toTicket(film.id)"
                  :src="film.coverUrl"
                  alt=""
              />
              <p>{{film.name}}</p>
              <button class="text" @click="toTicket(film.id)">预定</button>
            </div>
          </div>

<!--          <div class="will02">-->
<!--            <img src="../assets/images/filmimg/film06.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">预约</button>-->
<!--          </div>-->
<!--          <div class="will03">-->
<!--            <img src="../assets/images/filmimg/film07.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">预约</button>-->
<!--          </div>-->
<!--          <div class="will04">-->
<!--            <img src="../assets/images/filmimg/film08.jpg" alt="" />-->
<!--            <button class="text" @click="toTicket">预约</button>-->
<!--          </div>-->
        </div>
      </div>
      <div class="right">
        <h1>今日票房(综合)</h1>
        <div class="today">
          <div class="thefilm" v-for="film in sortedFilms" :key="film.id">
            <div v-if="isCurrentTimeGreaterThanPlayDate(film.playDate)">
              <p>{{film.name}} {{film.saleNum}}</p>
            </div>
          </div>
<!--          <div class="thefilm" style="color: orangered">-->
<!--            哥斯拉大战金刚2-->
<!--            <div>7332.51万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            功夫熊猫4-->
<!--            <div>1419.39万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            我们一起摇太阳-->
<!--            <div>919.48万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            周处除三害-->
<!--            <div>522.63万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            坠落的审判-->
<!--            <div>308.03万元</div>-->
<!--          </div>-->
        </div>
        <h1>最受期待</h1>
        <div class="expect">
          <div class="thefilm" v-for="film in likeFilms" :key="film.id">
            <div v-if="!isCurrentTimeGreaterThanPlayDate(film.playDate)">
              <p>{{film.name}} {{film.likeNum}}</p>
            </div>
          </div>
<!--          <div class="thefilm">-->
<!--            沙丘2-->
<!--            <div>275.67万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            熊出没·逆转时空-->
<!--            <div>265.86万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            第二十条-->
<!--            <div>97.32万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            被我弄丢的你-->
<!--            <div>86.71万元</div>-->
<!--          </div>-->
<!--          <div class="thefilm">-->
<!--            飞驰人生2-->
<!--            <div>85.37万元</div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import {listFilm} from "../api/system/movie/film.js"
import {Carousel} from "ant-design-vue";

const filmQuery = reactive({
  pageNum: 1,
  pageSize: 20,
  id: null,
  deleteFlag: null,
  categoryId: null,
  name: null,
  coverUrl: null,
  duration: null,
  favoriteNum: null,
  introduction: null,
  languageId: null,
  likeNum: null,
  playDate: null,
  playTypeId: null,
  recommend: null,
  score: null,
  video: null
})
export default {
  data() {
    return {
      films:[],
      randomFilms:[],
      // sortFilms:[],
    };
  },
  components:{
    "a-carousel":Carousel,
  },
  created() {
    this.getFilmList();
  },
  computed:{
    sortedFilms() {
      // 根据票房对电影进行排序
      return this.sortFilms = this.films.sort((a, b) => b.saleNum - a.saleNum);
    },
    likeFilms() {
      // 根据票房对电影进行排序
      return this.sortFilms = this.films.sort((a, b) => b.likeNum - a.likeNum);
    },
  },
  methods: {
     toTicket(id) {
      window.location.href = "/ticket?id=" + id;
    },
    async getFilmList(){
      try {
        const response = await listFilm(filmQuery);
        this.films = response.rows;
        // this.randomFilms = this.films.sort(() => Math.random() - 0.5).slice(0, 4);
      } catch (error) {
        console.error(error);
      }
    },
    isCurrentTimeGreaterThanPlayDate(playDate) {
      // 获取当前时间
      const currentTime = new Date();

      // 将playDate转换为Date对象
      const playDateObj = new Date(playDate);

      // 比较当前时间和playDate
      return currentTime > playDateObj;
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
            max-height: 300px; /* 你可以根据需要调整这个值 */
            overflow-y: scroll;
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
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
