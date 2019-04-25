<template>
  <el-carousel :interval="5000" type="card" :height="imgHeight+'px'">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <el-row>
        <el-col :span="24">
          <img ref="imgHeight" :src="item.idView" class="banner_img" @load="imgLoad"/>
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    name: "main",
    data(){
      return{
        articleList:[],
        imgList: [
          {id: 0, idView: require('../assets/b1.jpg')},
          {id: 1, name: '详情', idView: require('../assets/b2.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/b3.jpg')},
          {id: 3, name: '推荐', idView: require('../assets/b4.jpg')},
          {id: 4, name: '推荐', idView: require('../assets/b5.jpg')},
        ]
      }
    },
    methods:{
      imgLoad(){
        this.$nextTick(()=>{
          this.imgHeight=this.$refs.imgHeight[0].height
          console.log(this.$refs.imgHeight[0].height)
        })
      }
    },
    mounted(){
      this.imgLoad();
      window.addEventListener('resize',()=>{
        this.imgHeight = this.$refs.imgHeight[0].height
        this.imgLoad();
      })
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

