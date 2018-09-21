import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// 모듈을 통해 사용할 경우 명시적으로 use를 해줘야 함
Vue.use(VueRouter)

const User = {
  template: "<div> User  <router-view></router-view> </div>"
}

const UserPost = {
  template: "<div> User Post </div>"
}

const UserProfile = {
  template: "<div> User Profile </div>"
}

var routes = [{
  path: "/user",
  component: User,
  children: [{
      path: "posts",
      component: UserPost
    },
    {
      path: "profile",
      component: UserProfile
    }
  ]
}];

var router = new VueRouter({
  mode: 'history', // 브라우저 URL에서 (ex ../#/page_name) /# 을 없애줌
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
