var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Idli(2 Pcs) + Poori(1 Pcs)+ Pongal(Mini) + Vadai',RATE:'125'},
    {no:'2',ITEM:'Naan(2 Pcs) And Paneer Butter Masala',RATE:'130'},
    {no:'3',ITEM:'Sambar Vadai + Curd Vadai + Musambi Juice',RATE:'91'},
    {no:'4',ITEM:'Masala Roast Dosa',RATE:'63'},
    {no:'5',ITEM:'Mushroom Masal Roast',RATE:'75'},
    {no:'6',ITEM:'Ghee Masala Roast Dosa',RATE:'74'},
    {no:'7',ITEM:'Dum Mushroom Biriyani',RATE:'74'},
    {no:'8',ITEM:'Spl Mushroom Biriyani',RATE:'90'},
    {no:'9',ITEM:'Jeera Rice',RATE:'111'},
    {no:'10',ITEM:'Mushroom Pulao',RATE:'132'},
    {no:'11',ITEM:'Chilli Mushroom',RATE:'116'},
    {no:'12',ITEM:'Gobi 65',RATE:'100'},
    {no:'13',ITEM:'Honey Chilli Potato',RATE:'116'},
    {no:'14',ITEM:'Mushroom Pepper Fry',RATE:'121'},
    {no:'15',ITEM:'Mushroom Fried Rice',RATE:'111'},
    {no:'16',ITEM:'Schezwan Fried Rice',RATE:'111'},
    {no:'17',ITEM:'Schezwan Veg Noodles',RATE:'111'},
    {no:'18',ITEM:'Paneer Noodles',RATE:'116'},
    {no:'19',ITEM:'Fruit Salad With Vanilla Ice Cream',RATE:'74'},
    {no:'20',ITEM:'Black Currant Milk Shake',RATE:'84'},
    {no:'21',ITEM:'Kaju Badam Dry Fruits Sweets',RATE:'231'}
            ];
    dbo.collection("shree aksshayam").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("shree aksshayam").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});