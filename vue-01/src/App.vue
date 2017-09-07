<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

     <el-button>默认按钮</el-button>
     <el-button type="primary">主要按钮</el-button>
     <el-button type="text">文字按钮</el-button>
     <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
     <br />
     <el-input placeholder="elinput输入框">a</el-input>
     <input placeholder="input输入框">b</input>


    <ul>
      <li><router-link to="/index"><h3>点我跳转到第1个页面</h3></router-link></li>
      <li><router-link to="/second"><h3>点我跳转到第2个页面</h3></router-link></li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="view"></router-view>

  </div>
</template>

<script>

</script>

<style>
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  width: 800px;
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
}

li {
  width: auto;
  margin: 0;
}

a {
  font-size: 18px;
  color: blue;
  font-weight: bold;
  font-family: '微软也黑' sans-serif;
}

.view{
  width: 100%;

}
</style>
