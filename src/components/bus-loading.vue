<template>
     <div class="busLoading" id="busLoading" :show="isShow">
      <img src="../assets/img/4.0_logo.png" alt="">
      <div class="loading-container" id="loadingContainer" style=""></div>
      <p>正在为您奋力加载</p>
	  </div>
</template>


<style lang="scss" scoped>
/* busloading */
.busLoading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
}
.loading-container {
  position: relative;
  top: 100px;
  width: 200px;
  height: 200px;
  transform: scale(0.5);
  background: url(../assets/img/busloading.png) no-repeat;
  background-position: -230px -10px;
  overflow: hidden;
  margin: 0 auto;
}
.busLoading {
  img{
    position: absolute;
    left: 49.5%;
    top: 195px;
    transform: translate(-50%, -50%);
    width: 45px;
  }
  p{
    position: absolute;
    left: 49.5%;
    top: 270px;
    transform: translate(-50%, -50%);
    font-size: 0.3rem;
    color: #333;
  }
}
</style>

<script>
export default {
  props: ["isShow"],
  data() {
    return {};
  },
  mounted() {
    this.loading();
  },
  methods: {
    loading() {
      var loading_container = document.getElementById("loadingContainer");
      var ps = -230;
      var busloading_animate = setInterval(function() {
        ps -= 220;
        if (ps === -14090) {
          ps = -14310;
        }
        if (ps === -27950) {
          ps = -230;
        }
        loading_container.style.backgroundPosition = ps + "px -10px";
      }, 20);
    },
    hideLoading() {
      document.getElementById('busLoading');
      busLoading.style.display = 'none';
    }
  }
};
</script>
