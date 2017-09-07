import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

Vue.use(VueRouter);
Vue.use(VueResource);

//1:定义路由组件
import Index from './component/index.vue'
const Second = {template : '<div>我是第二个页面</div>'}

//2、定义路由
const routes = [
  {path:'/index' , component:Index},
  {path:'/second' , component:Second}
]

//3、创建router实例,然后传'routes'配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:routes // （缩写）相当于 routes: routes
})

//4、创建和挂在实例


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
