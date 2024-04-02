<template>
  <div class="contains">
    <div class="main">
      <div class="info">
        <h1 class="filmname">{{ film.name }}</h1>
        <div class="btns">
          <button style="color: white; background-color: rgb(223, 45, 45)" @click="getfilmLike">
            想看:{{film.favoriteNum}}
          </button>
          <button style="color: white; background-color: rgb(223, 45, 45)" @click="getFavorite">
            看过:{{film.likeNum}}
          </button>
          <button>评分:{{film.score}}</button>
        </div>
        <div class="theinfo">
          <div class="filminfo">
            {{ film.introduction }}
          </div>
          <div class="actorinfo">
            <div class="actor">
              <img src="../assets/images/actors/阮经天.jpg" alt="" />
              <h3>阮经天</h3>
            </div>
            <div class="actor">
              <img src="../assets/images/actors/袁富华.jpg" alt="" />
              <h3>袁富华</h3>
            </div>
            <div class="actor">
              <img src="../assets/images/actors/陈以文.jpg" alt="" />
              <h3>陈以文</h3>
            </div>
            <div class="actor">
              <img src="../assets/images/actors/王净.jpg" alt="" />
              <h3>王净</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="cinemas">
        <div class="cinema"></div>
        <div class="cinema"></div>
        <div class="cinema"></div>
        <div class="cinema"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFilm,getFilmLikeById,getFilmFavorite} from "@/api/system/movie/film.js";

export default {
  data(){
    return{
      film:[],
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');
    this.getfilm(filmId)
  },
  methods:{
    async getfilm(filmId){
      const response = await getFilm(filmId)
      this.film = response.data;
    },
    async getfilmLike(filmId){
      const response = await getFilmLikeById(filmId)
    },
    async getFavorite(filmId){
      const response = await getFilmFavorite(filmId)
    },
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

img {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
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
      background-color: black;
      .main {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-image: linear-gradient(90deg, transparent, #000000),
          url("../assets/images/filmimg/filmbackpic012.jpeg"); // #fff表示需要兼容的底色

        background-repeat: no-repeat;
        background-position: left;
        .info {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40vh;
          padding: 0 4vw;
          // background-color: rgba(240, 248, 255, 0.144);
          .filmname {
            color: #d1d1d1;
            font-family: "shuhan";
            font-size: 12vh;
            user-select: none;
          }
          .btns {
            position: absolute;
            top: 10vh;
            left: 31.3vw;
            button {
              width: 7vw;
              height: 4.5vh;
              margin: 0 0.4vw;
              font-family: "shuhan";
              font-size: 1.5vw;
              border-radius: 4.5vh;
              border: 0;
              user-select: none;
            }
          }
          .theinfo {
            position: absolute;
            display: flex;
            bottom: 4vh;
            width: 100%;
            height: 20vh;
            font-size: 2vh;
            .filminfo {
              width: 46vw;
              height: 100%;
              color: white;
              padding: 1vw 3vw 0 0;
            }
            .actorinfo {
              display: flex;
              width: 46vw;
              height: 100%;
              margin: 1.2vw 0 0 0;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: flex-start;
              .actor {
                margin: 0 1vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                  border-radius: 1vh;
                }
                h3 {
                  cursor: pointer;
                  user-select: none;
                }
              }
            }
          }
        }
        .cinemas {
          position: absolute;
          display: flex;
          flex-direction: column;
          top: 15vh;
          right: 2vh;
          width: 50vw;
          height: 55vh;
          border-radius: 2vh;
          background-color: #ffffff31;
        }
      }
    }
  }
}
</style>
