//连接数据库
const mysql = require('mysql');
//配置数据库信息
const connection = mysql.createConnection({
	//主机名
	host: 'localhost',
	//用户名
	user: 'root',
	//密码
	password: 'root',
	//数据库名字
	database: '留言板'
});
//连接数据库
connection.connect();
//导包--->时刻记得导包
//实现处理函数(req,res)=>{}
const fs = require('fs');
//列表页(可以有很多的不同处理函数)
//编辑页(可以有更多的不同处理函数)
//列表页(可以有不同处理函数)
//如果项目很大，需要再按页面分开编写代码
//列表页路由配置函数
exports.showIndex = (req, res) => {
	//render方法
	//读文件
	//使用数据
	//返回带着数据的页面字符串并且结束响应
	//读取data.json数据
	//	fs.readFile("./data.json", "utf8", (err, data) => {
	//		//把json字符串转成json对象,对象才能.item
	//		data = JSON.parse(data);
	//		res.render('列表页.html', {
	//			//items: list.item
	//			items: data.item
	//		})
	//		//	fs.readFile("./views/列表页.html", 'utf8', (err, data) => {
	//		//		if(err) {
	//		//			throw err;
	//		//		}
	//		//		//使用模板引擎
	//		//		//source 页面字符串
	//		//		//data 数据
	//		//		//render方法返回带数据的页面字符串
	//		//		data = template.render(data,{
	//		//			items:list.item
	//		//		})
	//		//		res.send(data);
	//		//
	//		//	})
	//	})
	const sqlstr = 'SELECT * FROM posts order by id DESC';
	connection.query(sqlstr, (error, results) => {
		if(error) throw error;
		//console.log(results);
		res.render('列表页.html', {
			items: results
		});
	});
}
//编辑页路由配置函数
exports.showPublish = (req, res) => {
	//	fs.readFile("./views/编辑页面.html", 'utf8', (err, data) => {
	//		if(err) {
	//			throw err;
	//		}
	//		
	//		res.send(data);
	res.render('编辑页面.html');
	//	})
}
//提交表单数据函数
exports.showlePublish = (req, res) => {
	//获取表单数据
	//post -> 请求体
	//req没有请求体，增加请求体-->用第三方包
	//console.log(req.body);
	const body = req.body;
	//先读取文件 ->
	//fs.readFile("./data.json", "utf8", (err, data) => {
	//	if(err) throw err;
	//	//吧json字符串转成json对象
	//	data = JSON.parse(data);
	//	data.item.unshift(body);
	//	//此时data类型是json对象，但要求的是字符串,所以要转成字符串
	//	data = JSON.stringify(data);
	//	//写入文件
	//	fs.writeFile("./data.json", data, (err) => {
	//		//重定向到列表页		
	//		res.redirect('/');
	//	})
	//})

	//向list.item数组追加新数据
	//回到列表页要渲染新数据。

	//list.item.unshift(body);//把新数据放进文件
	//console.log(list.item);
	//添加好数据后，返回列表页
	//把/publish 变成 / -> 之后重新发起请求 -->进入列表页
	//服务器重定向
	//res.redirect('/');
	//日期：body.date = new Date();
	const sqlstr = 'INSERT INTO posts SET ?';
	connection.query(sqlstr, body, (error, results) => {
		if(error) throw error;
		//服务器重定向
		res.redirect('/');
	});
}
// 静态资源css文件的请求函数
exports.showcssPublish = (req, res) => {
	// 读取样式文件
	fs.readFile("./public/main.css", "utf8", (err, data) => {
		//data是字符串
		//客户端要的是css文件
		//设置头部
		//Content-Type默认类型是text/html,要手动更改
		res.setHeader("Content-Type", "text/css");
		res.send(data);
	})
}
//导出
//exports.showIndex = showIndex;//相当于直接在函数前面直接导出，申明函数const直接改成exports.函数名