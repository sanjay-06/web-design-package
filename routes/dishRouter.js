var express=require('express')
var dishRouter=express.Router()
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
dishRouter.route('/chocolateroom')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Chocolate room").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Chocolate room",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/creamstone')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Cream stone").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Cream stone",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/hiddenfork')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Hidden fork").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Hidden fork",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/aryabhavan')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("aryabhavan").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Aryabhavan",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/boomerang')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("boomerang").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Boomerang",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/budapest')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("budapest").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"budapest",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/burgerking')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("burgerKing").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"BurgerKing",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/cafecoffeeday')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("cafe coffee day").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Cafe Coffee Day",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/haribhavanam')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("haribhavanam").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Haribhavanam",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/hideout')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("hideout").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Hideout",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/ibaco')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("ibaco").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Ibaco",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/juniorkuppanna')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("junior kuppanna").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Junior Kuppanna",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/kcm')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("kcm").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"KCM",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/keventers')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("keventers").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"keventers",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/kfc')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("kfc").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"KFC",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/mcdonalds')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("mcdonalds").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Mc donalds",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/pizzahut')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("pizzahut").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Pizza Hut",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/shreeaksshayam')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("shree aksshayam").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Shree Aksshayam",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/shreeanandhaas')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("shree anandhaas").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Shree Anandhaas",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/sms')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("sms").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"SMS",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/sreeannapoorna')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("sree annapoorna").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Shree Annapoorna",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/subway')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("subway").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Subway",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/thickshake')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("thick shake factory").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Thick Shake Factory",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/valarmathi')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("valarmathi").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Valarmathi",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/dominos')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Dominos").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Dominos Pizza",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/thalappakatti')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Thalapakatti").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Thalapakatti",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/venu')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("venu").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Dindukkal Venu Briyani",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/cockraco')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Cockraco").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Cockraco",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/oyalo')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("Oyalo").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Oyalo",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/aryas')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("aryas").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Aryas",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/rhr')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("rhr").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"RHR",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/kailashparbat')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("kailash parbat").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Kailash Parbat",
              "record" : result
          });
            db.close();
            });
        });
})
dishRouter.route('/annalakshmi')
.get((req,res)=>{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("hotels");
          dbo.collection("annalakshmi").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', {
              "title":"Annalakshmi",
              "record" : result
          });
            db.close();
            });
        });
})
module.exports = dishRouter;