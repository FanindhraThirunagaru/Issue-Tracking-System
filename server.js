const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/", function(req, res) {

  const connection = mysql.createConnection({
  	host: "localhost",
  	user: "testroot",
  	password: "Fanny@&161808",
    database: "project"
  });

  var userName = req.body.username;
  var password = req.body.password;
  connection.connect(function(err){
    if(err) throw err;
		var sql = "select userPassword from users where userName = '"+userName+"';";
		connection.query(sql,function(err,result){
			if(err) throw err;
      if(result === {}){
        res.send("User Not Found!!!");
      }else if (result[0].userPassword === password) {
        res.send("Login successful");
      }else{
        res.send("password incorrect");
      }
		});
  });
});

app.get("/register", function(req, res) {
  res.sendFile(__dirname + "/createAccount.html");
});

app.post("/register", function(req, res) {
  var firstName = req.body.firstname;
  var middleName = req.body.middlename;
  var lastName = req.body.lastname;
  var mailID = req.body.email;
  var password = req.body.password;
  var userName = req.body.userName;

  const connection = mysql.createConnection({
  	host: "localhost",
  	user: "testroot",
  	password: "Fanny@&161808",
    database: "project"
  });

  const employeeValues = [[firstName,middleName,lastName,mailID]];

  connection.connect(function(err){
    var sql = "insert into employees (firstName,middleName,lastName,mailID) values ?;";
    connection.query(sql,[employeeValues],function(err, result){
      if(err) throw err;
      else{
        res.write("Employee created successfully");
      }
    });
    connection.query("select employeeID from employees where mailID = '"+mailID+"';",function(err, result){
      if(err) throw err;
      else{
        const userValues = [[userName,password,result[0].employeeID]];
        connection.query("insert into users values ?;",[userValues],function(err, result){
          res.end("/nsuccessful");
        });
      }
    });
  });

});

app.get("/addProjects", function(req, res) {
  res.sendFile(__dirname + "/addProjects.html");
});

app.listen(8080, function() {
  console.log("Main Server Started!!!");
});
