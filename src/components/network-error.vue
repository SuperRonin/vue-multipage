<template>
    <div class="network-error" id="networkError" :show="isShow">
		<img src="images/networkerror.png" alt="">
		<p>网络不给力,点击屏幕重试</p>
	</div>
</template>


<style lang="scss" scoped>
/* 网络加载失败 */
.network-error{
	position: fixed;
	top: 5rem;
	left: 50%;
	width: 100%;
	height: 100%;
	color: #999;
	font-size: 1.6rem;
	text-align: center;
	background-color: #f4f5f7;
	z-index: 9999;
	-webkit-transform: translateX(-50%);
	        transform: translateX(-50%);
}
.network-error img{
	width: 35%;
	margin-top: 10rem;
	margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: ["isShow"],
  data() {
    return {};
  },
  mounted () {
	  this.loading()
  },
  methods: {
    loading() {
      
    }
  }
};
</script>
