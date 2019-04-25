<template>
  <div class="">
    <Layout>
      <Header style="background: #222">
        <div class="layout-logo">后台管理系统</div>
          <div class="layout-nav">
            <Menu mode="horizontal" theme="dark" active-name="1" style="background: #222">
              <Submenu name="3">
                <template slot="title">
                  <!--<Icon type="ios-stats" />-->
                  <!--<div v-if="user != null">-->
                  <!---->
                  <!--</div>-->
                  <img v-bind:src="user.avatar" class="head">
                  {{user.nickName}}
                </template>
                  <MenuItem name="3-1">个人信息</MenuItem>
                  <MenuItem name="3-4">修改密码</MenuItem>
                  <MenuItem name="3-4">
                    <a href="/Login" @click.native="logout">
                      退出登录
                    </a>
                  </MenuItem>
              </Submenu>
            </Menu>
          </div>
      </Header>
      <Layout class="aaa">
        <Sider hide-trigger>
          <Menu :theme="theme3" active-name="1" class="aaa">
            <el-row class="tac">
              <el-col :span="20">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">

                  <el-menu-item index="0">
                    <router-link to="/">
                      <i class="el-icon-setting"></i>
                      <span style="color: white">首页</span>
                    </router-link>
                  </el-menu-item>
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">
                        <router-link to="/user">
                          用户管理
                        </router-link>
                      </el-menu-item>
                      <el-menu-item index="1-2">
                        <router-link to="/article">
                          文章管理
                        </router-link>
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>设置</span>
                    </template>
                    <el-menu-item-group>
                      <!--<el-menu-item index="1-3">信息</el-menu-item>-->
                      <el-menu-item index="1-4">
                        <router-link to="/add">
                          修改密码
                        </router-link>
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="3">
                    <router-link to="/other">
                      <i class="el-icon-location" ></i>
                      <span style="color: white">其他</span>
                    </router-link>
                  </el-menu-item>
                  <!--<el-menu-item index="4">-->
                    <!--<i class="el-icon-document"></i>-->
                    <!--<span slot="title">导航三</span>-->
                  <!--</el-menu-item>-->
                </el-menu>
              </el-col>
            </el-row>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 72px 24px'}">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </Layout>
      </Layout>

    </Layout>
    <BackTop :height="100" :bottom="100">
      <div class="back-top">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
  // <img :src="picUrl">
  import pic from "@/assets/tt.png";


  export default {
      name: "Index",
      data(){
        return {
          picUrl:pic,
          user: JSON.parse(localStorage.getItem('loginUser')),
        }
      },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        localStorage.removeItem('loginUser')
        this.$route.go(0);
      },
    }
  }
</script>
<style scoped>
  .back-top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  h3{
    font-size: 30px;
  }
  .aaa{
    font-size:25px ;
  }
  .bbb{
    color: #666
  }
  .bbb:hover{
    color: rgba(0, 153, 229, .7);
  }
  .logo-img{
    width: 200px;
    height: 200px;
    text-align: right;
  }

  .layout-logo{
    float: left;
    color: white;
    font-size: 30px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 0;
  }
  .layout-left{
    margin-left: 100px;
    background: white;
  }

  .head {
    width: 45px;
    height: 45px;
    margin-top: 8px;
    border-radius: 50%;
    border: 1px solid #fff;
  }
</style>
