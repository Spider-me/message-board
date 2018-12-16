//程序入口文件 -> 启动服务器，配置各种包
//搭建服务器
//导包
const express = require('express');
//const template = require('art-template');
const bodyParser = require('body-parser');
const router = require("./配置router");

//模拟数据库返回数据
//数据持久化 1.本地文件进行保存,2.保存在数据库
//var list = {
//	item: [{
//			name: 'www',
//			email: 'aaa@qq.com',
//			content: 'woshini'
//	}]
//}

//实例化app
const app = express();

//配置第三方包
//使用第三方包渲染.art文件或者是htnl文件
app.engine('html', require('express-art-template'));

//req没有请求体，增加请求体-->用第三方包
//配置body-parser
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json())
//统一处理所有静态资源(png/css/字体)
//对于所有的的静态资源的请求(link 的href) 一次性处理完毕
//express框架
//static("路径") --> 想暴露/公开/开放 静态文档
//app.use(请求的前缀，要公开的静态资源的路径)
//app.use(express.static("./public"));
app.use("/abc", express.static("./public"));
//公开静态资源的路径
app.use("/abc", express.static("./node_modules"));
//公开当前项目的所有文件,不安全。
//app.use(express.static("./"));


//要写在配置包代码下面，监听端口之前
//使用路由对象
app.use(router);


 
//监听端口
app.listen(12346, () => {
	console.log('run it -----');
})