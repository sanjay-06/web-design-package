var express=require("express"); 
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection;
var crypto = require('crypto'); 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 
var app=express() 
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
}));
var dishRouter = require('./routes/dishRouter'); 
var getHash = ( pass , phone ) => {
				
	var hmac = crypto.createHmac('sha512', phone);
	data = hmac.update(pass);
	gen_hmac= data.digest('hex');
	console.log("hmac : " + gen_hmac);
	return gen_hmac;
}

app.post('/submit', function(req,res){ 
	var username=req.body.username;
	var firstname = req.body.fname;
	var pass=req.body.pass;
	var lastname=req.body.lname; 
	var email =req.body.email; 
	var phone = req.body.anumber;
	var bnumber =req.body.bnumber;
	var dob=req.body.dob;
	var address=req.body.address;
	var Password=getHash( pass , phone ); 
	var data = {
		"Username": username,
		"Password": Password,
		"firstname": firstname,
		"lastname":lastname, 
		"email":email, 
		"phonenumber":phone, 
		"Alternatenumber":bnumber,
		"dateofbirth":dob,
		"address":address, 
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			console.log(collection);
	});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanjayprasad682001@gmail.com',
    pass: 'sanjayshp'
  }
});

var mailOptions = {
  from: 'sanjayprasad682001@gmail.com',
  to: email,
  subject: 'Your user account is created! -wheelsformeals',
  text:'Thank you for using wheelsformeals let us stay connected.Avail exciting offers on the local restaurants!!!',
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
	return res.redirect("signup_success.html");  
})
app.post('/submit_a',function(req,res){
	console.log(req.body);
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
		var username1=req.body.username;
		var Password1=req.body.password;
		var phone=req.body.phonenumber;
		var hash=getHash(req.body.password,req.body.phonenumber);
		var http = require('http');
		var passcheck;  
		MongoClient.connect(url, function(err, db) {  
		if (err) throw err;
		var dbo = db.db("gfg");  
		var query = { Username: req.body.username };  
		dbo.collection("details").find(query).toArray(function(err, result) {  
		if (err)
		{
			throw err;
		}  
				passcheck=result[0].Password;
			if(passcheck===hash)
			{
				res.redirect('1.html');
			}
			else
			{
				res.redirect('index.html');
			}
		db.close();
		});  
		});
	});
app.use('/dishes',dishRouter);

app.post('/aboutsubmit',function(req,res){
    console.log(req.body);
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: req.body.email,
    pass: req.body.password
  }
});
var mailOptions = {
  from: req.body.email,
  to: 'sanjayprasad682001@gmail.com',
  subject: req.body.subject,
  text:req.body.message,
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	return res.redirect('about.html');
});
app.post('/pay',function(req,res){
	res.redirect('preloader.html');
});
app.post('/modal',function(req,res){
	console.log(req.body);
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
		var username1=req.body.Username;
		var Password1=req.body.Password;
		var phone=req.body.Phonenumber;
		var hash=getHash(req.body.Password,req.body.Phonenumber);
		var http = require('http');
		var passcheck;  
		MongoClient.connect(url, function(err, db) {  
		if (err) throw err;
		var dbo = db.db("gfg");  
		var query = { Username: req.body.Username };  
		dbo.collection("details").find(query).toArray(function(err, result) {  
		if (err)
		{
			throw err;
		}  
				passcheck=result[0].Password;
			if(passcheck===hash)
			{
				res.redirect('1.html');
			}
			else
			{
				res.setHeader('Content-Type','text/html');
				res.end('<html><body><h1>Unauthorized 403: not supported </h1></body></html>')
				res.redirect('home.html');
			}
		db.close();
		});  
	});
})
app.get('/',function(req,res){ 
	res.set({ 
		'Access-control-Allow-Origin': '*'
		}); 
	return res.redirect('index.html'); 
	}).listen(3000);
console.log("server listening at port 3000"); 
