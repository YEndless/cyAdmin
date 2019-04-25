import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:resolve => require(['../pages/Index.vue'],resolve),
      meta:{
        title : '主页',
        // type:'login'
      },
      children:[
        {
          path:'/',
          component:resolve => require(['../pages/main.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/user',
          component:resolve => require(['../pages/user.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/article',
          component:resolve => require(['../pages/article.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/add',
          component:resolve => require(['../pages/add.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/other',
          component:resolve => require(['../pages/other.vue'],resolve),
          meta:{
            title:''
          },
        }
      ],
    },

    {
      path:'/Login',
      component:resolve => require(['../pages/Login.vue'],resolve),
      meta:{
        title:''
      },
    }
  ]
})
