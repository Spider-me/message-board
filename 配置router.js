//路由配置-->路由模块
//列表页路由配置
//导包
const express = require('express');
const fs = require('fs');
//导入各个路由配置函数模块
//导入之后handle成为一个对象，包含四个函数名
const handle = require('./handle');
//实例化路由router对象
const router = express.Router();
//router.get/post
//router对象调用方法支持链式语法
//router.get().post().get()


//handle.函数名 =>对象.函数名()
//列表页路由配置router方法
router.get('/', handle.showIndex);
//编辑页路由配置router方法
router.get('/publish', handle.showPublish);
//提交表单数据方法
router.post("/publish", handle.showlePublish);
// 静态资源css文件的请求方法
router.get("/public/main.css", handle.showcssPublish);
//导出路由模块对象
module.exports = router;