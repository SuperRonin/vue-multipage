<template>
  <div class="mygrade">
    <swTitle :showback="true" :title="title"></swTitle>
    <swBusProgressLine :progressObj="progressObj"></swBusProgressLine>
    <div class="my-privilege" v-if="hideprivilege">
      <div class="pri-tit">
        <span>我的特权</span>
        <span @click="hrefMember" class="arrow-right color-ceccf">更多</span>
      </div>
      <div class="pri-box">
          <ul class="pri-list" id="priList">
            <li v-for="(item,index) in privilegeinfos">
              <img :src="item.iconurl"  :class="item.own == '0' ? 'filter' : ''" alt="">
              <p :class="item.own == '0' ? 'color-ceccf' : ''">{{ item.privilegename }}</p>
              <!-- <p :class="item.own == '0' ? 'color999' : ''">{{ item.privilegename }}</p> -->
            </li>
          </ul>
      </div>    
    </div>
    <div class="intro">
      <div class="intro-tit">说明</div>
      <div class="info">
        <ul>
          <li class="circle info-title">Bus365会根据您累计的成长值情况评定您的会员级别</li>
          <li>
            <table>
              <tr>
                <td>等级</td>
                <td>成长值范围</td>
              </tr>
              <tr>
                <td>Lv0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Lv1</td>
                <td>1-499</td>
              </tr>
              <tr>
                <td>Lv2</td>
                <td>500-999</td>
              </tr>
              <tr>
                <td>Lv3</td>
                <td>1000-1999</td>
              </tr>
              <tr>
                <td>Lv4</td>
                <td>2000-4999</td>
              </tr>
              <tr>
                <td>Lv5</td>
                <td>5000及以上</td>
              </tr>
            </table>
          </li>
          <li class="circle  info-title grede-way">成长值累计方式如下：</li>
          <li>
            <ol>
              <li>1. 完善个人信息可获得成长值。</li>
              <li>2. 预订汽车票每笔订单可获得10成长值。</li>
              <li>3. 预订城际拼车、专线巴士每笔订单可获得25成长值。</li>
              <li>4. 预订旅游产品每笔订单可获得25成长值。</li>
              <li>5. 预订火车票每笔订单可获得10 成长值。</li>
              </ol>
          </li>
        </ul>
      </div>
    </div>
    <swBusLoading v-show="showLoading"></swBusLoading>
    <!-- <busWelcomeLoading v-show="showLoading"></busWelcomeLoading> -->
  </div>
</template>

<style lang="scss" scoped>
.filter {
    filter: gray;filter: grayscale(100%);-o-filter: grayscale(100%);-moz-filter: grayscale(100%);-webkit-filter: grayscale(100%);
}
body {
  background-color: #f4f4f4 !important;
}
table tr:first-child{
  color: #333;
}
table{
  text-align: center;
  font-size: 0.24rem;
  margin-left: 0.2rem;
  color: #666;
}
tr td:first-child{
  padding: 0.15rem 0.8rem;
}
td{
  padding: 0.15rem 1.5rem;
  border: 1px solid #ddd;
}
ol{
  line-height: 0.45rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  box-sizing: border-box;
  color: #555;
}
.flex-start{
  justify-content: flex-start!important;
}
.color-orange {
  color: #f9941e;
}
.my-privilege {
  font-size: 0.28rem;
  margin-top: 0.12rem;
  background: #fff;
  .pri-tit {
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // align-items: center;
    
    padding: 0.2rem 5%;
    border-bottom: 1px solid #ededed;
    span:first-child{
      font-size: 0.3rem;
    }
    span:last-child{
      float: right;
    }
  }
  .pri-box {
    padding: 0.4rem 0;
    .pri-list {
      // display: flex;
      // flex-direction: row;
      // justify-content: space-around;
      // align-items: center;
      width: 100%;
      height: 1.2rem;
      text-align: center;
      li {
        width: 24%;
        float: left;
        text-align: center;
        font-size: 0.24rem;
        img {
          width: 0.7rem;
          margin-bottom: 0.15rem;
        }
      }
    }
  }
}
.intro {
  background: #fff;
  margin-top: 0.12rem;
  padding-bottom: 0.5rem;
  .intro-tit {
    font-size: 0.3rem;
    border-bottom: 1px solid #ededed;
    padding: 0.2rem 5%;
  }
  .info{
    font-size: 0.28rem;
    padding-left: 0.2rem;
  }
  .info-title{
    padding: 0.2rem 0;
    padding-top: 0.4rem;
  }
  .grede-way{
    padding-bottom: 0.1rem;
  }
}
.circle::before {
    position: relative;
    top: -0.02rem;
    content: "";
    display: inline-block;
    width: 0.12rem;
    height: 0.12rem;
    background: #555;
    border-radius: 0.06rem;
    margin-right: 0.1rem;
}
</style>


<script>
import swTitle from "@/components/title.vue";
import swBusProgressLine from "@/components/user/progress-line";
import swBusLoading from "@/components/bus-loading2";
import util from "../../../assets/js/utils.js";
// import VConsole from "../../../../static/js/vconsole.min.js";
export default {
  created() {
    util.MyHistory.historyback();
  },
  data() {
    return {
      title: '我的等级',
      showLoading: true,
      hideprivilege: true,
      progressVal: 2,
      curImg: "./static/img/logo.png",
      progressObj: {
        usernickname: "",
        userlevel: "",
        usergrowthvalue: "",
        userintegral: "",
        headimageurl: "",
        needgrowthvalue: "",
        maxgrowthvalue: "",
        headimageurl: ""
      },
      privilegeinfos: []
    };
  },
  mounted() {
    // new VConsole()
    this.mygrade();
    util.MyHistory.remove('register.html');
  },
  methods: {
    toggleImg() {
      this.curImg = "./static/img/qr.png";
    },
    hrefMember(){

      zhuge.track('个人中心_我的_账户信息_我的等级_查看更多特权',{});

      location.href = '../member/member.html?token=' + util.getToken()
    },
    mygrade() {
      const that = this;
      let token = util.getQueryString('token');

      if(!token){
        token = util.getToken()
      }
      this.$http
        .get("user/levelprivilegeinfo0", {
          params: {
            token: token
          }
        })
        .then(function(res) {
          that.showLoading = false;
          if (res.success) {
            if(res.privilegeinfos && res.privilegeinfos.length > 0){
              res.privilegeinfos.forEach((element,index) => {
                if(index > 3) return false
                // if(element.own == '1'){
                  that.privilegeinfos.push(element)
                // }
              });
              // 特权为1个时，单独处理
              if(res.privilegeinfos.length == 1){
                let ele = document.getElementById('priList');
                ele.className += ' flex-start'
              }
            }else{
              that.hideprivilege = false;
            }
            that.progressObj.needgrowthvalue = res.needgrowthvalue;
            that.progressObj.usernickname = res.usernickname;
            that.progressObj.userlevel = res.userlevel;
            that.progressObj.usergrowthvalue = res.usergrowthvalue;
            that.progressObj.userintegral = res.userintegral;
            // 设置默认logo
            if (res.headimageurl == "" || !res.headimageurl) {
              that.progressObj.headimageurl = "../../static/img/default_user_logo.png";
            } else {
              that.progressObj.headimageurl = res.headimageurl;
            }
            
            that.progressObj.maxgrowthvalue = res.maxgrowthvalue;
            that.userAnimate(res.userlevel, res.intervalratio);
          }
        })
        .catch(function(err) {
          that.showLoading = false;
          console.log(err);
        });
    },
    userAnimate(userlevel, intervalratio) {
      const that = this;

      

      // 计算动画
      if (intervalratio && userlevel) {
        let line = document.getElementById("lineTop");
        let userLogo = document.getElementById("userLogo");
        let usernickname = document.getElementById("usernickname");
        // 单个等级对应的rem值
        let vipTransRem = 750 / 6 / 100;
        let animateRem = vipTransRem * intervalratio + vipTransRem * userlevel + 0.2;
        console.log(animateRem)
       if(userlevel == '5'){
          animateRem = 6.45
       }
        let logoTrans = 0.1;
        let lineTrans = 0.5;
        let interval = setInterval(function() {
          logoTrans += 0.03;
          lineTrans += 0.03;
          if (logoTrans >= animateRem) {
            clearInterval(interval);
            return;
          }
          userLogo.style.left = logoTrans + "rem";
          line.style.width = lineTrans + "rem";
        }, 25);

        // 会员0-1级时处理会员名称位置，防止超出屏幕
        // if(userlevel === 0 || animateRem === 0 || !animateRem || !userlevel){
        //   if(usernickname.innerHTML.length > 3){
        //     usernickname.setAttribute("class","left-start")
        //   }
        // }
      }
      
    }
  },
  components: { swTitle, swBusProgressLine, swBusLoading }
};
</script>




