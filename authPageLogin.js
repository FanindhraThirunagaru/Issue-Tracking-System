var http = require('http');
var mysql = require('mysql');
var url = require('url');

var con = mysql.createConnection({
	host: "localhost",
	user: "testroot",
	password: "Fanny@&161808"
});

http.createServer(function (req,res){
	var q = url.parse(req,true).query;
	res.write(q);
	res.end();
});

/*http.createServer(function (req,res){
	var q = url.parse(req,true).query;
	res.write(q);
	var userName = q.userName,userPassword = q.userPassword;
	con.connect(function(err){
		if(err) throw err;
		var sql = "select userPassword from users where userName ="+userName;
		con.query(sql,function(err,result,fields){
			if(err) throw err;
			console.log(userPassword);
		});
	});
	res.end();
}).listen(8080);*/
