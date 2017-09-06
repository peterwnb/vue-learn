# Vue第一课

## Vue运行环境
- ###### Nodejs 6.7.0
- ###### webpack 1.13.2
- ###### vue-cli 2.4.0      

## 安装环境
- ###### 运行终端，windows下执行cmd命令
- ###### 安装nodejs    
  ```下载相应版本nodejs，安装并配置环境变量```  
- ###### 安装淘宝镜像
  ```npm install -g cnpm --registry=https://registry.npm.taobao.org```   
- ###### 安装webpack
  ```cnpm install webpack -g ```   
- ###### 安装vue脚手架
  ```npm install vue-cli -g```
- ###### 根据模板创建项目
  ```
    cd d:\code\vue\vue-learn   
    vue init webpack-simple  工程你名字<工程名不能包含用中文>   
    egg:  vue init webpack-simple
  ```
  会有一些初始化的设置，如下输入:   
  `Target directory exists. Continue? (Y/n)`直接回车默认(然后会下载    vue2.0模板，这里可能需要连代理)   
  `Project name (vue-test)`直接回车默认   
  `Project description (A Vue.js project)` 直接回车默认   
  `Author` 写你自己的名字    
- ###### 安装项目依赖   
  一定要从官方仓库安装，npm服务器在国外，所以这一步安装速度会很慢   
  `mpm install`      

  不要从国内镜像cnpm下载（会导致后面缺是很多依赖库）   
  `cnpm install`   

- ###### 安装vue路由模块 `vue-router` 和 网络请求模块`vue-resource`   
  `cnpm install vue-router vue-resource --save`   
- ###### 启动项目
  `npm run dev`
