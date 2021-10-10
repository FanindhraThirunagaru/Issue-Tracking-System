const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", function(req, res) {
  var userName = req.body.username;
  var password = req.body.password;
  res.send(userName + " " + password);
});

app.get("/createAccount",function(req,res){
  res.sendFile(__dirname+"/createAccount.html");
});

app.post("/createAccount", function(req,res){
  var firstName = req.body.firstname;
  var middleName = req.body.middlename;
  var lastName = req.body.lastname;
  res.send(firstName+" "+middleName+" "+lastName);
});

app.listen(8080, function() {
  console.log("Main Server Started!!!");
});
