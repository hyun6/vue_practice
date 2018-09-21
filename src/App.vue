<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todo-list v-bind:todo_1=msg></todo-list>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h3>Routes</h3>
    <router-link to="/page_main">Main 페이지</router-link>
    <router-link to="/page_login">Login 페이지</router-link>
    <router-view></router-view>
    <todo-footer v-on:click_event=on_click_event></todo-footer>
  </div>
</template>

<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>

import './main.js'
import Vue from 'vue'

var eventBus = new Vue();

Vue.component('todo-footer', {
  template : '<button v-on:click="on_click">click me</button>',
  methods: {
    on_click: function() {
      this.$emit("click_event", 'gg');
      eventBus.$emit('on_event_bus', 100);
    }
  }
});


var comp_todo_list = {
  template: "<div>this-is-list: {{todo_1}}</div>",
  props: {
    todo_1:String,
    todo_2:Number
  } // ['todo_1'] 과 같이 타입 정보가 없이 정의될 경우 잘못 사용될 우려가 있기 때문에 명시적으로 타입을 나타내는 방식으로 사용한다
};

export default {  
  name: 'app',
  components: {
    "todo-list": comp_todo_list
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App!!!"
    };
  },
  methods: {
    on_click_event: function(arg){
      console.log('on_click_event: ' + arg);
    }
  },
  created: function() {
    eventBus.$on('on_event_bus', function(arg){
      console.log('on_event_bus: ' + arg );
    });
  },
  beforeUpdate: function() {
    console.log('bfUpdate');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
