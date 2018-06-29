<template>
    <div class="member">
        <swTitle :showback="true" :title="title"></swTitle>
        <ul>
            <li class="member-model" :class="item.own === '0' ? 'lock-bg-color' : ''"  v-for="(item,index) in privilegeinfos">
                <div class="member-model-img" :class="item.own === '0' ? 'filter' : ''">
                    <img :src="item.iconurl" alt="">
                </div>
                <div class="member-model-info"  :class="item.own === '0' ? 'lock-color' : ''">
                    <p>{{ item.privilegename }}</p>
                    <p>{{ item.description }}</p>
                </div>
                <img v-if="item.own === '0'" class="lock-img" src="../../../assets/img/lockmember.png" alt="">
            </li>
        </ul>
        <swBusLoading v-show="showLoading"></swBusLoading>
    </div>
</template>


<style lang="scss" scoped>

.filter {
    filter: gray;filter: grayscale(100%);-o-filter: grayscale(100%);-moz-filter: grayscale(100%);-webkit-filter: grayscale(100%);
}
.lock-bg-color {
  background-color: #e7e7e7;
}
.lock-color {
  color: #999999;
}
.hdie-tit {
  height: 1rem;
}
.member {
  margin-top: 0.2rem;
  .member-model {
    position: relative;
    height: 1.5rem;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-start;
    padding: 0.15rem 3%;
    box-sizing: border-box;
    align-items: top;
    border-bottom: 1px solid #ededed;
    .member-model-img {
      width: 16%;
      float: left;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    .member-model-info {
      width: 80%;
      float: left;
      padding-top: 0.15rem;
      // display: flex;
      // flex-direction: column;
      // justify-content: flex-start;
      // padding-top: 0.05rem;
      // padding-left: 0.2rem;
      // box-sizing: border-box;
      p:first-child {
        font-size: 0.3rem;
        margin-bottom: 0.2rem;
      }
      p:last-child {
        color: #999;
        font-size: 0.25rem;
        line-height: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .lock-img {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.5rem;
    }
  }
}
</style>

<script>
import swBusLoading from "@/components/bus-loading2";
import swTitle from "@/components/title.vue";
import util from "../../../assets/js/utils.js";
export default {
  name: "member",
  data() {
    return {
      title: '会员特权',
      showLoading: true,
      privilegeinfos: ""
    };
  },
  mounted() {
    this.mygrade();
  },
  methods: {
    mygrade() {
      const that = this;
      let token = util.getQueryString("token");

      if (!token) {
        token = util.getToken();
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
            that.privilegeinfos = res.privilegeinfos;
          }
        })
        .catch(function(err) {
          that.showLoading = false;
          console.log(err);
        });
    }
  },
  components: { swBusLoading, swTitle }
};
</script>

