<template>
  <div class="myintegral">
      <swTitle :showback="true" :title="title"></swTitle>
      <div class="top-box">
          <div class="myintegral-num">
            <span>积分：</span>
            <span>{{ currentscore }}</span>
          </div>
          <div class="myintegral-intr">
            <span class="arrow-right"><a href="../../../user/help/integration-explain.html?title=1">积分说明</a></span>
          </div>
      </div>
      <div class="list-box">
          <ul>
              <li v-for="(item,index) in userscoredetails">
                   <div class="time-line">
                      <span class="circle"><b class="border"></b></span>
                      <span class="line"></span>
                  </div>
                  <div class="info">
                      <div class="info-origin">
                          <div>{{ item.reason }}</div>
                          <div class="color-FF9209">{{ item.changescore }}</div>
                      </div>
                      <div class="info-time color-9f">{{ item.changetime }}</div>
                  </div>
              </li>
          </ul>
      </div>
      <swBusLoading v-show="showLoading"></swBusLoading>
  </div>
</template>

<style lang="scss" scoped>
.top-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  .myintegral-num {
    font-size: 0.3rem;
  }
  .myintegral-intr {
    font-size: 0.25rem;
    a{
      color: #666!important;
    }
  }
}
.list-box {
  padding: 0.3rem 0.4rem;
  li:last-child {
    height: 0.7rem;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    box-sizing: border-box;
    height: 1.1rem;
    .time-line {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-right: -0.18rem;
      // padding: 0 0.2rem;
      //   .border {
      //     position: absolute;
      //     left: 0.1rem;
      //     top: -0.06rem;
      //     padding: 0.14rem;
      //     transform: translateX(-50%);
      //     border-radius: 100%;
      //     border: 1px solid #1fcc9e;
      //     position: relative;
      //   }
      .circle {
        width: 0.12rem;
        height: 0.12rem;
        border: 1px solid #1fcc9e;
        padding: 0.1rem;
        border-radius: 100%;
        position: relative;
        z-index: 999;
        background-color: #fff;
        b {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 0.2rem;
          height: 0.2rem;
          display: inline-block;
          background-color: #1fcc9e;
          border-radius: 100%;
        }
      }

      .line {
        // width: 0.01rem;
        // height: 0.5rem;
        // background-color: #1FCC9E;
      }
    }
    .info {
        width: 100%;
      padding-left: 0.4rem;
      border-left: 1px solid #1fcc9e;
      box-sizing: border-box;
      align-items: center;
      .info-origin {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .info-origin {
        font-size: 0.28rem;
      }
      .info-time {
        font-size: 0.24rem;
        padding-top: 0.2rem;
      }
    }
  }
}
</style>


<script>
import swBusLoading from "@/components/bus-loading2";
import swTitle from "@/components/title.vue";
import util from "../../../assets/js/utils.js";
export default {
  data() {
    return {
      title:'我的积分',
      showLoading: true,
      currentscore: 0,
      userscoredetails:[]
    };
  },
  mounted () {
    this.scoregrowdetails();
    util.MyHistory.remove('register.html');
  },
  methods: {
      scoregrowdetails () {
      const that = this;
      let token = util.getQueryString('token');

      if(!token){
        token = util.getToken()
      }
      this.$http
        .get("/user/scoregrowdetails0", {
          params: {
            // token:
            //   '{"clienttype":"web","ordertoken":"undefined","clienttoken":"D58D15B967745BD2D63159E042777295DFF85CE8FEED608514E1E3272892DB6705C8C42242997D7922430D09E71BE5DBC791DF4544D2DC06070CC1AA72461B59468C343B10C26FEF85FC459CBB3D7815"}',
            token: token,
            scoretype: '0'
          }
        })
        .then(function(res) {
          that.showLoading = false;
          if(res.success === "true"){
            that.userscoredetails = res.userscoredetails
            that.currentscore = res.currentscore
          }
          console.log(res)
        })
        .catch(function(err) {
          that.showLoading = false;
          console.log(err);
        });
    }
  },
  components: { swTitle, swBusLoading }
};
</script>
