import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// 모듈을 통해 사용할 경우 명시적으로 use를 해줘야 함
Vue.use(VueRouter)

var page_main = {
  template: "<div> main {{my_name}}</div>",
  data: function() {
    var moon_name;
    moon_name = 'moon';
    return {
      my_name: moon_name
    };
  },
  props: {
    status: String
  }
};

var page_login = {
  template: "<div> login </div>"
}


var routes = [
  { path: "/page_main", component: page_main },
  { path: "/page_login", component: page_login }
];

var router = new VueRouter({
  mode: 'history', // 브라우저 URL에서 (ex ../#/page_name) /# 을 없애줌
  routes
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
