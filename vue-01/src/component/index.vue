<template>
    <div id="index">
      <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h1 style="line-height: 36px; color: #20A0FF">{{title}}</h1>
            </div>
            <div v-for="article in articles" class="text item">
              {{article.title}}
            </div>
      </el-card>
    </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return {
        display : "我是第 1 个子页面",
        articles: [],
        title:''
      }
    },
    mounted:function() { //页面进入是发起http请求请求接口获取数据
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调
          console.log(response);
          this.articles = response.data.subjects
          this.title = response.data.title
          // this.articles = response.data["subjects"] 也可以

      }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
      });
    },
  }
</script>
