<template>

  <div id="banner">
    <el-carousel height="400px">
<!--      测试使用 -->
<!--      <el-carousel-item >-->
<!--        <img src="../assets/img/banner1.png" alt="">-->
<!--      </el-carousel-item>        -->
<!--      <el-carousel-item >-->
<!--        <img src="../assets/img/banner2.png" alt="">-->
<!--      </el-carousel-item>-->
<!--      <el-carousel-item >-->
<!--        <img src="../assets/img/banner3.png" alt="">-->
<!--      </el-carousel-item>-->
      <el-carousel-item v-for="item in banner_list" :key="item.name">
          <router-link :to="item.link">
            <img :src="item.img" :alt="item.name">
          </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  // data:function(){},
  data() {
    return {
      banner_list: []
    }
  },
  created() {
    //当banner组件一创建，就向后台发请求，拿回轮播图数据
    this.$axios.get(this.$settings.base_url + '/home/banner/').then(response => {
      console.log(response.data)
      this.banner_list = response.data
    })
  },

}
</script>

<style scoped>
.el-carousel__item {
  height: 400px;
  min-width: 1200px;
}

.el-carousel__item img {
  height: 400px;
  /* 屏幕的百分之五十，减去图片的一半尺寸*/
  margin-left: calc(50% - 1920px / 2);
}
</style>