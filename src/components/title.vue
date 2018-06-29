<template>
	<div class="tit-containe" v-if="isShow">
    <div class="tit">
      <div class="back" id="back" @click="backpre" v-show="showback">
        <img src="@/assets/img/back.png">
      </div>
      <div class="back" id="back" v-show="!showback"></div>
      <div class="Bustitle" id="title">{{ title }}</div>
      <div class="null" @click="rightButton">{{ rightTxt }}</div>
    </div>
    <div class="hdie-tit"></div>
  </div>
</template>

<style lang="scss" scoped="">
.hdie-tit {
  width: 100%;
  height: 1rem;
}
.tit {
  width: 100%;
  height: 1rem;
  background: #1fcc9e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  div {
    float: left;
  }
}

.back {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 20%;
  height: 1rem;
  font-size: 0.3rem;
  color: #fff;
  line-height: 1rem;
  align-items: center;
  padding-left: 0.2rem;
  box-sizing: border-box;
  img {
    width: 0.37rem;
  }
}

.Bustitle {
  width: 60%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  font-size: 0.36rem;
}

.null {
  width: 20%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.36rem;
  color: #fff;
}
.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today {
  left: 35%;
  top: 0;
  width: 25px;
  height: 25px;
}
.today,
.selected-day {
  color: #fff;
  background-color: #3a98ef;
  border-radius: 50%;
}
</style>

<script>
import util from "../assets/js/utils.js";
export default {
  props: ["showback", "rightTxt", "title"],
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    console.log(this.title)
  },
  created() {
    this.initTit()
    util.MyHistory.historyback();
  },
  methods: {
    initTit () {
      var fromto = util.getQueryString('fromto');
      var title = util.getQueryString('title');
      if(fromto !== "android" && fromto !== "ios"){
        this.isShow = true
      }
      if(title == '1'){
        this.isShow = true
      }
    },
    backpre() {
      if(this.title == '我的等级'){
        util.backWhere()
      }else{
        util.MyHistory.backPre();
      }
      // util.MyHistory.backpre();
    },
    rightButton() {
      this.$emit("rightButton", null);
    }
  }
};
</script>
