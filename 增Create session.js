//导包
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
//sql操作数据库
//query(sql语句, cb(error, results){})

//插入
//name是字段名，不能乱写
const newitem = {
	name:"abc",
	content:"随便写",
	mail:"ppp@aa.com",
	date:"2016-10-30"
}
const sqlstr = 'INSERT INTO `posts` set ?' ;
connection.query(sqlstr, newitem, function(error, results) {
	if(error) throw error;
	console.log(results);
})
//关闭数据库
//connection.end();