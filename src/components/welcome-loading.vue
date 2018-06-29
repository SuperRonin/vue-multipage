<template>
     <div class="welcome-loading">
      <div class="welcome-container" id="welcomeContainer" style="">
      </div>
      <div class="welcome-text">
              <div class="white-mask welcome-animat"></div>
              <img src="../assets/img/logo_line.png" alt="">
              <img src="../assets/img/logo_text.png" alt="">
      </div>
	  </div>
</template>


<style lang="scss" scoped>
/* 轻松购票，快乐出行 */
.welcome-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255, .8);
  overflow: hidden;
}
.welcome-container {
  width: 280px;
  height: 160px;
  transform: scale(0.5);
  background: url(../assets/img/welcome_logo.png) no-repeat;
  background-position: -10px -10px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 4rem;
}
.welcome-text {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: -30px;
}
.welcome-text img {
  width: 60%;
}
.white-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: -10px 0 15px #fff;
}
.welcome-animat {
  animation: trans 3.8s linear infinite;
}
@keyframes trans {
  from {
    left: 0;
  }
  to {
    left: 700px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      // isShowLoading: this.props.showLoading
    };
  },
  created () {
    console.log(this.showLoading)
  },
  mounted() {
    this.loading();
  },
  methods: {
    loading() {
      var welcome_container = document.getElementById("welcomeContainer");
      var ps = -10;
      var welcome_animate = setInterval(function() {
        ps -= 300;
        if (ps === -7210) ps = -7510;
        if (ps === -14410) {
          ps = -10;
          return;
        }
        welcome_container.style.backgroundPosition = ps + "px -10px";
      }, 80);
    }
  }
};
</script>
