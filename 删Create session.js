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

//删除
const ID = 257;
const sqlstr = 'DELETE FROM posts WHERE id = ?' ;
connection.query(sqlstr, ID, function(error, results) {
	if(error) throw error;
	console.log(results);
})
//关闭数据库
//connection.end();