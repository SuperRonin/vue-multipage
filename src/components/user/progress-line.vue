<template>
  <div class="progress-container">
      <div class="progress-line">
        <div class="line-container">
                <div class="line-box">
                    <div class="line line-top" id="lineTop"></div>
                    <div class="line line-bottom"></div>
                    <div class="user-logo" id="userLogo">
                      <!-- <p id="usernickname">{{ progressObj.usernickname }}</p> -->
                      <div class="logo">
                        <img :src="progressObj.headimageurl || '../../static/img/default_user_logo.png'" alt="">
                      </div>  
                    </div>
                </div>
                <div class="grade-list-box">
                    <ul class="grade-list">
                        <!-- <li>v0</li>
                        <li>v1</li>
                        <li>v1</li>
                        <li>v2</li>
                        <li>v3</li>
                        <li>v4</li>
                        <li>v5</li>
                        <li>v6</li>
                        <li>v7</li> -->
                        <li v-for="(item,index) in [0,1,2,3,4,5]">
                          <img :class="progressObj.userlevel == item ? 'lv-scale' : 'img-opacity' " :src="'../../static/img/v'+ item +'.png'" alt="">
                        </li>
                    </ul>
                </div>
        </div>
        <!-- <div class="tips" v-if="progressObj.userlevel != '7'">距下一等级还需<span class="font-30">{{ progressObj.needgrowthvalue || 0 }}</span>成长值</div> -->
        
        <div class="tips">{{ progressObj.needgrowthvalue}}</div>
        <!-- <div class="tips" v-if="progressObj.userlevel == '5'"><span class="font-30">陪您走过春秋冬夏，鉴证美好旅程</span></div> -->
    </div>
    <div class="gro-inte">
        <div class="arrow-right gro" @click="hrefGrowth">成长值 <span class="color-orange">{{ progressObj.usergrowthvalue || 0 }}</span></div>
        <div class="arrow-right inte" @click="hrefIntegral">积分 <span class="color-orange">{{ progressObj.userintegral || 0 }}</span></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import url("../../assets/css/common.css");
.img-opacity{
  opacity: 0.6;
}
.lv-scale{
  width: 0.4rem!important;
}
.left-start{
  left: 0!important;
}
.color-orange{
  color: #F9941E;
}
.font-30{
  font-size: 0.3rem;
}
.line-top-animation {
  animation: trans 1s linear;
  animation-fill-mode: forwards;

  -webkit-animation: trans 1s linear;
  -webkit-animation-fill-mode: forwards;

  -moz-animation: trans 1s linear;
  -moz-animation-fill-mode: forwards;

  -ms-animation: trans 1s linear;
  -ms-animation-fill-mode: forwards;

  -o-animation: trans 1s linear;
  -o-animation-fill-mode: forwards;
}
.user-logo-animation {
  animation: transLogo 1s linear;
  animation-fill-mode: forwards;

  -webkit-animation: transLogo 1s linear;
  -webkit-animation-fill-mode: forwards;
  
  -moz-animation: transLogo 1s linear;
  -moz-animation-fill-mode: forwards;
  
  -ms-animation: transLogo 1s linear;
  -ms-animation-fill-mode: forwards;
  
  -o-animation: transLogo 1s linear;
  -o-animation-fill-mode: forwards;
}
.progress-container{
  background-color: #fff;
}
.progress-line {
  height: 3.2rem;
  padding: 0.8rem 0 0.2rem 0;
  box-sizing: border-box;
  // background: url('/user/my-grade/static/img/11.jpg') 100% 100%;
  background: url("../../assets/img/2222.png") center no-repeat;
  background-size: 100% 100%;
  .line-container {
    .line-box {
      width: 100%;
      // display: flex;
      // flex-direction: row;
      // justify-content: center;
      // align-items: center;
      position: relative;
      .line {
        position: absolute;
        height: 0.1rem;
      }
      .line-top {
        width: 0.1rem;
        z-index: 1;
        background-color: #efd46d;
      }

      .line-bottom {
        width: 100%;
        background-color: #ccc;
      }
      .user-logo {
        // width: 0.8rem;
        // height: 0.8rem;
        position: absolute;
        left: 0.08rem;
        top: -0.4rem;
        z-index: 1;
        
        .logo{
          width: 0.8rem;
          height: 0.8rem;
          position: absolute;
          left: 0;
          top: 0;
          text-align: center;
          background-color: rgba(152, 227, 194, 0.8);
          border-radius: 50%;
        }
        p{
          text-align: center;
          position: absolute;
          left: -0.6rem;
          top: -0.35rem;
          z-index: 1;
          width: 2rem;
          color: #fff;
          font-size: 0.2rem;
        }
        img {
          width: 0.5rem;
          border-radius: 50%;
          position: absolute;
          left: 0.15rem;
          top: 0.15rem;
        }
      }
    }
    .grade-list-box {
      padding-top: 0.4rem;
      .grade-list {
        // display: flex;
        // flex-direction: row;
        // justify-content: space-around;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        li{
          width: 16.6%;
          float: left;  
         img{
            width: 0.3rem;
          }
        }
      }
    }
  }
  .tips {
    color: #fff;
    font-size: 0.25rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
.gro-inte {
  // display: flex;
  // flex-direction: row;
  // justify-content: space-around;
  width: 100%;
  height: 0.5rem;
  padding: 0.25rem 0;
  margin-top: 0.2rem;
  > div {
    width: 49%;
    float: left;
    font-size: 0.3rem;
    text-align: center;
  }
  .inte {
    border-left: 1px solid #ccc;
  }
}
// @keyframes trans {
//   from {
//     width: 0px;
//   }
//   to {
//     width: 200px;
//   }
// }
// @keyframes transLogo {
//   from {
//     transform: translateX(0px);
//   }
//   to {
//     transform: translateX(100px);
//   }
// }
</style>

<script>
import util from "../../assets/js/utils.js";
export default {
  props: {
    progressObj: {
      type: Object
    }
  },
  data(){
    return {
      progress : ''
    }
    
  },
  created() {
    console.log()
  },
  methods: {
    hrefGrowth() {

      zhuge.track('个人中心_我的_账户信息_我的等级_查看成长值明细',{});

      location.href = '../my-growth/my-growth.html?token=' + util.getToken()
    },
    hrefIntegral() {

      zhuge.track('个人中心_我的_账户信息_我的等级_查看积分明细',{});

      location.href = '../my-integral/my-integral.html?token=' + util.getToken()
    }
  }

};
</script>
