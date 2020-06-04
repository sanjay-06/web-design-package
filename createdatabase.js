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
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mutton Biriyani And Lime Juice',RATE:'237'},
    {no:'2',ITEM:'Chicken Biriyani And Lime Juice',RATE:'226'},
    {no:'3',ITEM:'Veg Tomato Soup',RATE:'109'},
    {no:'4',ITEM:'Chicken Milagu Soup',RATE:'120'},
    {no:'5',ITEM:'Mirchi Tikka',RATE:'296'},
    {no:'6',ITEM:'Hariyali Tikka',RATE:'296'},
    {no:'7',ITEM:'Nattu Kozhi Kulambu',RATE:'219'},
    {no:'8',ITEM:'Mushroom Biriyani',RATE:'179'},
    {no:'9',ITEM:'Chicken Biriyani',RATE:'225'},
    {no:'10',ITEM:'Mutton Biriyani',RATE:'241'},
    {no:'11',ITEM:'Egg Biriyani And Lime Juice',RATE:'226'},
    {no:'12',ITEM:'Chicken Curry Dosa',RATE:'153'},
    {no:'13',ITEM:'Egg Kalaki',RATE:'31'},
    {no:'14',ITEM:'Garlic Omelette',RATE:'61'}
            ];
    dbo.collection("rhr").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("rhr").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Double Cheese Margherita',RATE:'325'},
    {no:'2',ITEM:'Achari Do Pyaza',RATE:'315'},
    {no:'3',ITEM:'Paneer Makhani',RATE:'395'},
    {no:'4',ITEM:'Pepper Barbecue & Onion',RATE:'395'},
    {no:'5',ITEM:'Chicken Golden Delight',RATE:'450'},
    {no:'6',ITEM:'Capsicum Pizza Mania',RATE:'75'},
    {no:'7',ITEM:'Paneer & Onion Pizza Mania',RATE:'95'},
    {no:'8',ITEM:'Golden Corn Pizza Mania',RATE:'87'},
    {no:'9',ITEM:'Cheesy Dip',RATE:'15'},
    {no:'10',ITEM:'Choco Lava Cake',RATE:'89'},
    {no:'11',ITEM:'7Up (500ml)',RATE:'70'},
    {no:'12',ITEM:'Chicken Parcel',RATE:'45'},
    {no:'13',ITEM:'Brownie Fantasy',RATE:'99'},
    {no:'14',ITEM:'Spiced Chicken Meatballs',RATE:'289'},
    {no:'15',ITEM:'Lebanese Chicken',RATE:'280'}
            ];
    dbo.collection("Oyalo").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Oyalo").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'South Indian Meal',RATE:'109'},
    {no:'2',ITEM:'Chapati With Kurma',RATE:'61'},
    {no:'3',ITEM:'Masala Roast Dosa',RATE:'81'},
    {no:'4',ITEM:'Ghee Masala Roast Dosa',RATE:'87'},
    {no:'5',ITEM:'Cheese Chilli Sandwich',RATE:'67'},
    {no:'6',ITEM:'Anandhaas Special Sandwich',RATE:'73'},
    {no:'7',ITEM:'Dum Mushroom Biriyani',RATE:'91'},
    {no:'8',ITEM:'Dum Vegetable Biriyani',RATE:'81'},
    {no:'9',ITEM:'Variety Rice',RATE:'51'},
    {no:'10',ITEM:'Chilli Gobi',RATE:'133'},
    {no:'11',ITEM:'Chilli Paneer',RATE:'145'},
    {no:'12',ITEM:'Baby Corn Manchurian Gravy',RATE:'121'},
    {no:'13',ITEM:'Mushroom Schezwan Manchurian',RATE:'133'},
    {no:'14',ITEM:'Schezwan Noodles',RATE:'140'},
    {no:'15',ITEM:'Chocolate Milkshake',RATE:'97'}
            ];
    dbo.collection("shree anandhaas").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("shree anandhaas").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mushroom Biryani',RATE:'225'},
    {no:'2',ITEM:'Thalappakatti Egg Biriyani',RATE:'222'},
    {no:'3',ITEM:'Thalappakatti Chicken Biryani',RATE:'254'},
    {no:'4',ITEM:'Thalappakatti Mutton Biriyani',RATE:'334'},
    {no:'5',ITEM:'Chicken 65 Biryani',RATE:'315'},
    {no:'6',ITEM:'Chicken 65 Biriyani Jumbo',RATE:'679'},
    {no:'7',ITEM:'Boneless Black Pepper Chicken',RATE:'317'},
    {no:'8',ITEM:'Chilly Chicken',RATE:'265'},
    {no:'9',ITEM:'Moru Moru Prawns',RATE:'398'},
    {no:'10',ITEM:'Veg Kothu Parotta',RATE:'211'},
    {no:'11',ITEM:'Egg Kothu Parotta',RATE:'219'},
    {no:'12',ITEM:'Schezwan Egg Fried Rice',RATE:'210'},
    {no:'13',ITEM:'Veg Noodles',RATE:'180'},
    {no:'14',ITEM:'Schezwan Egg Noodles',RATE:'200'},
    {no:'15',ITEM:'Chicken Noodles',RATE:'220'}
            ];
    dbo.collection("Thalapakatti").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Thalapakatti").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mutton Biriyani And Lime Juice',RATE:'237'},
    {no:'2',ITEM:'Chicken Biriyani And Lime Juice',RATE:'226'},
    {no:'3',ITEM:'Egg Biriyani And Lime Juice',RATE:'226'},
    {no:'4',ITEM:'Chicken Curry Dosa',RATE:'153'},
    {no:'5',ITEM:'Egg Kalaki',RATE:'31'},
    {no:'6',ITEM:'Garlic Omelette',RATE:'61'},
    {no:'7',ITEM:'Veg Tomato Soup',RATE:'109'},
    {no:'8',ITEM:'Chicken Milagu Soup',RATE:'120'},
    {no:'9',ITEM:'Mirchi Tikka',RATE:'296'},
    {no:'10',ITEM:'Hariyali Tikka',RATE:'296'},
    {no:'11',ITEM:'Nattu Kozhi Kulambu',RATE:'219'},
    {no:'12',ITEM:'Mushroom Biriyani',RATE:'179'},
    {no:'13',ITEM:'Chicken Biriyani',RATE:'225'},
    {no:'14',ITEM:'Mutton Biriyani',RATE:'241'}
            ];
    dbo.collection("sms").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("sms").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Curd Semiya',RATE:'72'},
    {no:'2',ITEM:'Rajabhojanam',RATE:'216'},
    {no:'3',ITEM:'Chana Bhature(Chola Poori)',RATE:'102'},
    {no:'4',ITEM:'South Indian Meals',RATE:'132'},
    {no:'5',ITEM:'Paneer Tikka',RATE:'174'},
    {no:'6',ITEM:'Gobi Tikka',RATE:'156'},
    {no:'7',ITEM:'Paneer Butter Masala',RATE:'168'},
    {no:'8',ITEM:'Paneer Tikka Masala',RATE:'180'},
    {no:'9',ITEM:'Hyderabadi Mushroom Biriyani',RATE:'156'},
    {no:'10',ITEM:'Mushroom Biriyani',RATE:'96'},
    {no:'11',ITEM:'Jeera Rice',RATE:'150'},
    {no:'12',ITEM:'Paneer Pulao',RATE:'168'},
    {no:'13',ITEM:'Kashmiri Pulao',RATE:'180'},
    {no:'14',ITEM:'Veg Schezwan Noodles',RATE:'156'},
    {no:'15',ITEM:'Chocolate Truffle',RATE:'60'},
    {no:'16',ITEM:'Butterscotch Swiss Roll',RATE:'75'}
            ];
    dbo.collection("sree annapoorna").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("sree annapoorna").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Paneer Tikka Sub(15 cm,6 ") Combo',RATE:'239'},
    {no:'2',ITEM:'Veggie Delite Sub(15 cm,6") Combo',RATE:'220'},
    {no:'3',ITEM:'Chicken Tandoori Sub(15 cm,6") Combo',RATE:'258'},
    {no:'4',ITEM:'Chicken Teriyaki Sub(15 cm,6") Combo',RATE:'272'},
    {no:'5',ITEM:'Tandoori Tofu Sub',RATE:'162'},
    {no:'6',ITEM:'Veggie Delite Sub',RATE:'172'},
    {no:'7',ITEM:'Hara Bhara Kebab Sub',RATE:'172'},
    {no:'8',ITEM:'Veg Seekh Sub',RATE:'172'},
    {no:'9',ITEM:'Tandoori Tofu Signature Wraps',RATE:'200'},
    {no:'10',ITEM:'Peri Peri Chicken Signature Wraps',RATE:'229'},
    {no:'11',ITEM:'Oatmeal Raisin Cookie',RATE:'48'},
    {no:'12',ITEM:'Tandoori Tofu Salad',RATE:'220'},
    {no:'13',ITEM:'Chip With Non Veg Signature Wrap Combos',RATE:'248'},
    {no:'14',ITEM:'Chip With Veg Signature Wrap Combos',RATE:'220'}
            ];
    dbo.collection("subway").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("subway").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Egg Veechu Parotta',RATE:'99'},
    {no:'2',ITEM:'Plain Parotta',RATE:'33'},
    {no:'3',ITEM:'Kongu Kozhi Kozhambu',RATE:'209'},
    {no:'4',ITEM:'Kongu Mutton Kozhambu',RATE:'195'},
    {no:'5',ITEM:'Egg Masala',RATE:'99'},
    {no:'6',ITEM:'Plain Biriyani',RATE:'154'},
    {no:'7',ITEM:'Egg Biriyani',RATE:'165'},
    {no:'8',ITEM:'Mutton Biriyani',RATE:'209'},
    {no:'9',ITEM:'Chicken Biriyani',RATE:'187'},
    {no:'10',ITEM:'Mutton Chuka',RATE:'185'},
    {no:'11',ITEM:'Mutton Keema Ball',RATE:'132'},
    {no:'12',ITEM:'Mutton Pepper Fry',RATE:'185'},
    {no:'13',ITEM:'Chicken 65',RATE:'165'},
    {no:'14',ITEM:'Pepper Chicken',RATE:'165'}
            ];
    dbo.collection("valarmathi").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("valarmathi").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Peanut Butter Indulgence Thickshake',RATE:'222'},
    {no:'2',ITEM:'Choco Brownie Crumble Thickshake',RATE:'222'},
    {no:'3',ITEM:'Triple Choco-chip Thickshake',RATE:'210'},
    {no:'4',ITEM:'Very Berry Thickshake',RATE:'210'},
    {no:'5',ITEM:'Belgian Chocolate Thickshake',RATE:'222'},
    {no:'6',ITEM:'Belgian Chocolate Milkshake',RATE:'199'},
    {no:'7',ITEM:'Superman Secret Milkshake',RATE:'187'},
    {no:'8',ITEM:'Dark Knight Thickshake',RATE:'222'},
    {no:'9',ITEM:'Shape Your Shake',RATE:'199'},
    {no:'10',ITEM:'Strawberry Six Pack Milkshake',RATE:'269'},
    {no:'11',ITEM:'Strawberry Six Pack Thickshake',RATE:'293'},
    {no:'12',ITEM:'Chocolate Shake',RATE:'105'},
    {no:'13',ITEM:'Oreo shake',RATE:'176'},
    {no:'14',ITEM:'Five Star Milkshake',RATE:'224'},
    {no:'15',ITEM:'Mixed Berry Shake',RATE:'186'}
            ];
    dbo.collection("thick shake factory").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("thick shake factory").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mushroom Biryani',RATE:'215'},
    {no:'2',ITEM:'Venu Egg Biriyani',RATE:'232'},
    {no:'3',ITEM:'Venu Chicken Biryani',RATE:'244'},
    {no:'4',ITEM:'Venu Mutton Biriyani',RATE:'434'},
    {no:'5',ITEM:'Chicken 65 Biryani',RATE:'325'},
    {no:'6',ITEM:'Chicken 65 Biriyani Jumbo',RATE:'689'},
    {no:'7',ITEM:'Boneless Black Pepper Chicken',RATE:'327'},
    {no:'8',ITEM:'Chilly Chicken',RATE:'285'},
    {no:'9',ITEM:'Moru Moru Prawns',RATE:'418'},
    {no:'10',ITEM:'Veg Kothu Parotta',RATE:'191'},
    {no:'11',ITEM:'Egg Kothu Parotta',RATE:'209'},
    {no:'12',ITEM:'Schezwan Egg Fried Rice',RATE:'220'},
    {no:'13',ITEM:'Veg Noodles',RATE:'190'},
    {no:'14',ITEM:'Schezwan Egg Noodles',RATE:'210'},
    {no:'15',ITEM:'Chicken Noodles',RATE:'228'}
            ];
    dbo.collection("Venu").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Venu").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Choco Eclair Icecream',RATE:'72'},
    {no:'2',ITEM:'Butterscotch Sundae',RATE:'94'},
    {no:'3',ITEM:'Strawberry Sundae',RATE:'77'},
    {no:'4',ITEM:'Black Forest Pleasure Sundae',RATE:'170'},
    {no:'5',ITEM:'Get Smart Sundae',RATE:'182'},
    {no:'6',ITEM:'Protein Blast Sundae',RATE:'170'},
    {no:'7',ITEM:'Chocolate Shake',RATE:'105'},
    {no:'8',ITEM:'Oreo shake',RATE:'176'},
    {no:'9',ITEM:'Mixed Fruit Caramel Sundae',RATE:'154'},
    {no:'10',ITEM:'Love Lychee Sundae',RATE:'160'},
    {no:'11',ITEM:'Brownie Earthquake',RATE:'170'},
    {no:'12',ITEM:'Cotton Candy Ice cream',RATE:'88'},
    {no:'13',ITEM:'Caramel Popcorn Ice cream',RATE:'99'},
    {no:'14',ITEM:'Choco Mousse',RATE:'72'},
    {no:'15',ITEM:'Mixed Berry Shake',RATE:'176'}
          ];
    dbo.collection("boomerang").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("boomerang").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Cucumber Peanut Salad',RATE:'172'},
    {no:'2',ITEM:'Rajabhojanam',RATE:'216'},
    {no:'3',ITEM:'Chana Bhature(Chola Poori)',RATE:'102'},
    {no:'4',ITEM:'South Indian Meals',RATE:'132'},
    {no:'5',ITEM:'Paneer Tikka',RATE:'174'},
    {no:'9',ITEM:'Hyderabadi Mushroom Biriyani',RATE:'156'},
    {no:'10',ITEM:'Mushroom Biriyani',RATE:'96'},
    {no:'11',ITEM:'Jeera Rice',RATE:'150'},
    {no:'12',ITEM:'Paneer Pulao',RATE:'168'},
    {no:'13',ITEM:'Kashmiri Pulao',RATE:'180'},
    {no:'14',ITEM:'Veg Schezwan Noodles',RATE:'156'},
    {no:'15',ITEM:'Chocolate Truffle',RATE:'60'},
    {no:'16',ITEM:'Butterscotch Swiss Roll',RATE:'75'},
    {no:'6',ITEM:'Gobi Tikka',RATE:'156'},
    {no:'7',ITEM:'Paneer Butter Masala',RATE:'168'},
    {no:'8',ITEM:'Paneer Tikka Masala',RATE:'180'}
            ];
    dbo.collection("annalakshmi").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("annalakshmi").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mysore Masala Dosa',RATE:'133'},
    {no:'2',ITEM:'Spring Dosa',RATE:'152'},
    {no:'3',ITEM:'Onion Tomato Uttapam',RATE:'110'},
    {no:'4',ITEM:'Bise Bele Rice',RATE:'105'},
    {no:'5',ITEM:'Paneer Pulao With Kurma',RATE:'114'},
    {no:'6',ITEM:'Veg Pizza',RATE:'143'},
    {no:'7',ITEM:'Veg Corn Pizza',RATE:'162'},
    {no:'8',ITEM:'Veg Cheese Toast Sandwich',RATE:'100'},
    {no:'9',ITEM:'Jeera Rice',RATE:'86'},
    {no:'10',ITEM:'Paneer Tawa Pulao',RATE:'143'},
    {no:'11',ITEM:'Idiyappam With Coconut Stew',RATE:'90'},
    {no:'12',ITEM:'Pineapple Sheera',RATE:'86'},
    {no:'13',ITEM:'Kerala Parotta',RATE:'76'},
    {no:'14',ITEM:'Appam With Avial',RATE:'76'},
    {no:'15',ITEM:'Vanilla Milkshake',RATE:'105'},
    {no:'16',ITEM:'Ginger Lemon Juice',RATE:'57'},
    {no:'17',ITEM:'Sitafal Milkshake',RATE:'114'}
            ];
    dbo.collection("aryabhavan").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("aryabhavan").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Mushroom Masal Roast',RATE:'75'},
    {no:'2',ITEM:'Ghee Masala Roast Dosa',RATE:'74'},
    {no:'3',ITEM:'Dum Mushroom Biriyani',RATE:'74'},
    {no:'4',ITEM:'Spl Mushroom Biriyani',RATE:'90'},
    {no:'5',ITEM:'Jeera Rice',RATE:'111'},
    {no:'6',ITEM:'Mushroom Pulao',RATE:'132'},
    {no:'7',ITEM:'Chilli Mushroom',RATE:'116'},
    {no:'8',ITEM:'Gobi 65',RATE:'100'},
    {no:'9',ITEM:'Honey Chilli Potato',RATE:'116'},
    {no:'10',ITEM:'Mushroom Pepper Fry',RATE:'121'},
    {no:'11',ITEM:'Mushroom Fried Rice',RATE:'111'},
    {no:'12',ITEM:'Schezwan Fried Rice',RATE:'111'},
    {no:'13',ITEM:'Schezwan Veg Noodles',RATE:'111'},
    {no:'14',ITEM:'Paneer Noodles',RATE:'116'},
    {no:'15',ITEM:'Fruit Salad With Vanilla Ice Cream',RATE:'74'},
    {no:'16',ITEM:'Black Currant Milk Shake',RATE:'84'},
    {no:'17',ITEM:'Kaju Badam Dry Fruits Sweets',RATE:'231'},
    {no:'18',ITEM:'Idli(2 Pcs) + Poori(1 Pcs)+ Pongal(Mini) + Vadai',RATE:'125'},
    {no:'19',ITEM:'Naan(2 Pcs) And Paneer Butter Masala',RATE:'130'},
    {no:'20',ITEM:'Sambar Vadai + Curd Vadai + Musambi Juice',RATE:'91'},
    {no:'21',ITEM:'Masala Roast Dosa',RATE:'63'}
            ];
    dbo.collection("aryas").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("aryas").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Hot Cottage Savoury Chimney',RATE:'120'},
    {no:'2',ITEM:'English Slaw Savoury Chimney',RATE:'110'},
    {no:'3',ITEM:'Oriental Chicken Savoury Chimney',RATE:'120'},
    {no:'4',ITEM:'Butter Chicken Savoury Chimney',RATE:'140'},
    {no:'5',ITEM:'Mamas May Chicken Savoury Chimney',RATE:'130'},
    {no:'6',ITEM:'Butter Chicken Savoury Chimney + Mint Mojito',RATE:'310'},
    {no:'7',ITEM:'Lemon Iced Tea',RATE:'140'},
    {no:'8',ITEM:'Love Lychee Sundae',RATE:'170'},
    {no:'9',ITEM:'Brownie Earthquake',RATE:'180'},
    {no:'10',ITEM:'Cotton Candy Ice cream',RATE:'78'},
    {no:'11',ITEM:'Caramel Popcorn Ice cream',RATE:'109'},
    {no:'12',ITEM:'Choco Mousse',RATE:'69'},
    {no:'13',ITEM:'Mixed Berry Shake',RATE:'196'},
    {no:'14',ITEM:'Choco Almond',RATE:'169'},
    {no:'15',ITEM:'Hot Choco Fudge',RATE:'120'}
            ];
    dbo.collection("budapest").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("budapest").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Chicken Wings Fifteen Pieces',RATE:'399'},
    {no:'2',ITEM:'Veg Twisted Whopper Combo',RATE:'317'},
    {no:'3',ITEM:'Chicken Double Whopper',RATE:'219'},
    {no:'4',ITEM:'Chicken Tandoor Grill',RATE:'149'},
    {no:'5',ITEM:'Chicken Keema Wrap',RATE:'79'},
    {no:'6',ITEM:'Strawberry Smoothie',RATE:'169'},
    {no:'7',ITEM:'Mango Thick Shake',RATE:'139'},
    {no:'8',ITEM:'Paneer Kings Melt',RATE:'129'},
    {no:'9',ITEM:'Makhani Supreme Chicken',RATE:'99'},
    {no:'10',ITEM:'BK Grill Chicken',RATE:'99'},
    {no:'11',ITEM:'Crispy Veg Wrap',RATE:'59'},
    {no:'12',ITEM:'Chicken Curry Rice + Thick Chocolate Shake',RATE:'249'},
    {no:'13',ITEM:'Creamy Curry Rice + Thick Chocolate Shake',RATE:'199'},
    {no:'14',ITEM:'BK Fried Chicken Six Pieces',RATE:'579'},
    {no:'15',ITEM:'Forced Family Time Combo(Veg)',RATE:'610'}
            ];
    dbo.collection("burgerKing").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("burgerKing").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'White Chocolate King Cappuccino',RATE:'137'},
    {no:'2',ITEM:'Classic Cold Coffee',RATE:'77'},
    {no:'3',ITEM:'Grilled Chicken Kulcha',RATE:'88'},
    {no:'4',ITEM:'Cafe Americano',RATE:'120'},
    {no:'5',ITEM:'King Cappuccino',RATE:'125'},
    {no:'6',ITEM:'Cafe Frappe',RATE:'140'},
    {no:'7',ITEM:'Crunchy Frappe',RATE:'147'},
    {no:'8',ITEM:'Alphonso Mango Milkshake',RATE:'132'},
    {no:'9',ITEM:'Classic Lemonade',RATE:'132'},
    {no:'10',ITEM:'Angara Tandoori Chicken',RATE:'157'},
    {no:'11',ITEM:'Big Crunch Chicken Classic',RATE:'144'},
    {no:'12',ITEM:'Big Crunch Chicken Cheese',RATE:'155'},
    {no:'13',ITEM:'Cheesy Corn n Spinach',RATE:'157'},
    {no:'14',ITEM:'Angara Tandoori Chicken',RATE:'244'},
    {no:'15',ITEM:'Angara Tandoori Paneer',RATE:'202'}
            ];
    dbo.collection("cafe coffee day").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("cafe coffee day").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Chilli Garlic Potato Pops',RATE:'129'},
    {no:'2',ITEM:'Chicken Nuggets',RATE:'149'},
    {no:'3',ITEM:'Chicken Burger',RATE:'139'},
    {no:'4',ITEM:'Paneer Sandwich',RATE:'129'},
    {no:'5',ITEM:'Chocolate River',RATE:'179'},
    {no:'6',ITEM:'Chocolate Rocher',RATE:'199'},
    {no:'7',ITEM:'Brownie Sundae',RATE:'189'},
    {no:'8',ITEM:'Iced Cappuccino',RATE:'129'},
    {no:'9',ITEM:'Chocolate Scoop',RATE:'79'},
    {no:'10',ITEM:'Melting Marshmallow Pancake',RATE:'249'},
    {no:'11',ITEM:'Caramel Popcorn Ice cream',RATE:'101'},
    {no:'12',ITEM:'Choco Mousse',RATE:'82'},
    {no:'13',ITEM:'Mixed Berry Shake',RATE:'166'},
    {no:'14',ITEM:'Lemon Iced Tea',RATE:'111'}
            ];
    dbo.collection("Chocolate room").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Chocolate room").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Veg Kothu Parotta',RATE:'170'},
    {no:'2',ITEM:'Chicken Pulao',RATE:'200'},
    {no:'3',ITEM:'Egg Kothu Parotta',RATE:'180'},
    {no:'4',ITEM:'Fish Biriyani',RATE:'220'},
    {no:'5',ITEM:'Chicken Kothu Parotta',RATE:'190'},
    {no:'6',ITEM:'Shawarma Roll',RATE:'110'},
    {no:'7',ITEM:'Chicken Omelette',RATE:'100'},
    {no:'8',ITEM:'Omelette',RATE:'50'},
    {no:'9',ITEM:'Hyderabadi Chicken Dry',RATE:'200'},
    {no:'10',ITEM:'Pepper Chicken Dry',RATE:'210'},
    {no:'11',ITEM:'Mushroom Biriyani',RATE:'190'},
    {no:'12',ITEM:'Kcm Special Egg Biriyani',RATE:'220'},
    {no:'13',ITEM:'Hyderabadi Chicken Biriyani',RATE:'210'},
    {no:'14',ITEM:'Plain Biriyani',RATE:'180'},
    {no:'15',ITEM:'Jeera Rice',RATE:'60'}
            ];
    dbo.collection("Cockraco").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Cockraco").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Red Velvet Cake',RATE:'850'},
    {no:'2',ITEM:'Nutty Almond Cake',RATE:'900'},
    {no:'3',ITEM:'Ferrero Rocher Cake',RATE:'1049'},
    {no:'4',ITEM:'Jacky Jack Fruit',RATE:'180'},
    {no:'5',ITEM:'Muskmelon (Scoop)',RATE:'85'},
    {no:'6',ITEM:'Strawberry Cheese Cake',RATE:'190'},
    {no:'7',ITEM:'Willy Wonka',RATE:'180'},
    {no:'8',ITEM:'Nutella Brownie',RATE:'190'},
    {no:'9',ITEM:'Choco Almond',RATE:'149'},
    {no:'10',ITEM:'Hot Choco Fudge',RATE:'150'},
    {no:'11',ITEM:'Fruit Exotica',RATE:'170'},
    {no:'12',ITEM:'Fruit Overload',RATE:'180'},
    {no:'13',ITEM:'Arabian Nights',RATE:'180'},
    {no:'14',ITEM:'Karamel Sutra',RATE:'190'},
    {no:'15',ITEM:'Chocolate Overdose',RATE:'195'}
            ];
    dbo.collection("Cream stone").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Cream stone").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Double Cheese Margherita',RATE:'335'},
    {no:'2',ITEM:'Achari Do Pyaza',RATE:'305'},
    {no:'3',ITEM:'Paneer Makhani',RATE:'395'},
    {no:'4',ITEM:'Pepper Barbecue & Onion',RATE:'395'},
    {no:'5',ITEM:'Chicken Golden Delight',RATE:'450'},
    {no:'6',ITEM:'Capsicum Pizza Mania',RATE:'75'},
    {no:'7',ITEM:'Paneer & Onion Pizza Mania',RATE:'95'},
    {no:'8',ITEM:'Golden Corn Pizza Mania',RATE:'79'},
    {no:'9',ITEM:'Cheesy Dip',RATE:'25'},
    {no:'10',ITEM:'Choco Lava Cake',RATE:'99'},
    {no:'11',ITEM:'7Up (500ml)',RATE:'60'},
    {no:'12',ITEM:'Chicken Parcel',RATE:'45'},
    {no:'13',ITEM:'Brownie Fantasy',RATE:'99'},
    {no:'14',ITEM:'Spiced Chicken Meatballs',RATE:'299'},
    {no:'15',ITEM:'Lebanese Chicken',RATE:'260'}
            ];
    dbo.collection("Dominos").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Dominos").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Veg Special Meal',RATE:'208'},
    {no:'2',ITEM:'Non Veg Meal With Curd',RATE:'173'},
    {no:'3',ITEM:'Mushroom Dosa',RATE:'145'},
    {no:'4',ITEM:'Gopi Dosa',RATE:'139'},
    {no:'5',ITEM:'Kal Dosa',RATE:'76'},
    {no:'6',ITEM:'Kathi Chicken Roll',RATE:'231'},
    {no:'7',ITEM:'French Fries',RATE:'110'},
    {no:'8',ITEM:'Gopi Pallipalayam',RATE:'214'},
    {no:'9',ITEM:'Paneer Pallipalayam',RATE:'226'},
    {no:'10',ITEM:'Kerala Fried Chicken',RATE:'243'},
    {no:'11',ITEM:'Nattu Kozhi Fry',RATE:'260'},
    {no:'12',ITEM:'Egg Biriyani',RATE:'196'},
    {no:'13',ITEM:'Chicken Biriyani',RATE:'219'},
    {no:'14',ITEM:'Ambar Mutton Biriyani',RATE:'284'},
    {no:'15',ITEM:'Jeera Rice',RATE:'203'},
    {no:'16',ITEM:'Chicken Pulao Rice',RATE:'226'},
    {no:'17',ITEM:'Schezwan Veg Noodles',RATE:'208'},
    {no:'18',ITEM:'Chicken Noodles',RATE:'226'},
    {no:'19',ITEM:'Poricha Kozhi',RATE:'422'},
    {no:'20',ITEM:'Coke Can(300 ml)',RATE:'37'},
    {no:'21',ITEM:'Payasam',RATE:'46'}
            ];
    dbo.collection("haribhavanam").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("haribhavanam").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Peri Peri Fries',RATE:'105'},
    {no:'2',ITEM:'Chicken Popcorn',RATE:'150'},
    {no:'3',ITEM:'Honey Chilli Wings Non Veg',RATE:'150'},
    {no:'4',ITEM:'Spicy Chicken Sandwich',RATE:'165'},
    {no:'5',ITEM:'Cheesy White Pasta Veg',RATE:'185'},
    {no:'6',ITEM:'Green Apple Fizz',RATE:'90'},
    {no:'7',ITEM:'Blue Curacao Mojito',RATE:'95'},
    {no:'8',ITEM:'Virgin Mojito',RATE:'95'},
    {no:'9',ITEM:'Brownie Chocolate Shake',RATE:'165'},
    {no:'10',ITEM:'Milo Shake',RATE:'165'},
    {no:'11',ITEM:'Desi Indian Maggie Veg',RATE:'95'},
    {no:'12',ITEM:'Desi Indian Maggie Non Veg',RATE:'122'},
    {no:'13',ITEM:'Paneer Burger',RATE:'165'},
    {no:'14',ITEM:'Classic Maggie Veg',RATE:'72'}
            ];
    dbo.collection("Hidden fork").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("Hidden fork").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Chilli Cheese Sandwich',RATE:'120'},
    {no:'2',ITEM:'Makhani Paneer Sandwich',RATE:'155'},
    {no:'3',ITEM:'Aloo Tikki Burger',RATE:'125'},
    {no:'4',ITEM:'Chicken Double Loaded Burger',RATE:'160'},
    {no:'5',ITEM:'Chicken Cheese Burger',RATE:'145'},
    {no:'6',ITEM:'9" Makhani Paneer Pizza',RATE:'280'},
    {no:'7',ITEM:'9" Chicken Supreme Pizza',RATE:'330'},
    {no:'8',ITEM:'Chicken Pasta',RATE:'195'},
    {no:'9',ITEM:'Blueberry Smoothie',RATE:'110'},
    {no:'10',ITEM:'Red Velvet Cake',RATE:'105'},
    {no:'11',ITEM:'Ginger Lemon Ice Tea',RATE:'110'},
    {no:'12',ITEM:'Red Velvet Cake',RATE:'950'},
    {no:'13',ITEM:'Nutty Almond Cake',RATE:'800'},
    {no:'14',ITEM:'Ferrero Rocher Cake',RATE:'1149'},
    {no:'15',ITEM:'Jacky Jack Fruit',RATE:'280'}
            ];
    dbo.collection("hideout").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("hideout").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Ice Cream Shakes',RATE:'154'},
    {no:'2',ITEM:'Chocolate Over Load Ice Cream Cake',RATE:'940'},
    {no:'3',ITEM:'Dark Chocolate Secrets Ice Cream Cake',RATE:'2360'},
    {no:'4',ITEM:'Ganache Collections',RATE:'120'},
    {no:'5',ITEM:'Marzipan Collections',RATE:'120'},
    {no:'6',ITEM:'Almond Crunch Ice Cream',RATE:'114'},
    {no:'7',ITEM:'Kiwi Ice Cream',RATE:'114'},
    {no:'8',ITEM:'Happy BIrthday Chocolate Box',RATE:'400'},
    {no:'8',ITEM:'Best Mom In World Chocolate Box',RATE:'240'},
    {no:'10',ITEM:'Get Smart Sundae',RATE:'182'},
    {no:'11',ITEM:'Protein Blast Sundae',RATE:'170'},
    {no:'12',ITEM:'Chocolate Shake',RATE:'105'},
    {no:'13',ITEM:'Oreo shake',RATE:'176'},
    {no:'14',ITEM:'Mixed Fruit Caramel Sundae',RATE:'154'}
          ];
    dbo.collection("ibaco").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("ibaco").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Veg Kothu Parotta',RATE:'165'},
    {no:'2',ITEM:'Egg Kothu Parotta',RATE:'165'},
    {no:'3',ITEM:'Carrot Halwa',RATE:'66'},
    {no:'4',ITEM:'Paneer 65',RATE:'209'},
    {no:'5',ITEM:'Gopi 65',RATE:'176'},
    {no:'6',ITEM:'Paneer Manchurian',RATE:'220'},
    {no:'7',ITEM:'Gobi Gravy',RATE:'198'},
    {no:'8',ITEM:'Boiled Egg Masala',RATE:'165'},
    {no:'9',ITEM:'Veg Noodles',RATE:'198'},
    {no:'10',ITEM:'Egg Noodles',RATE:'231'},
    {no:'11',ITEM:'Chicken Biriyani',RATE:'249'},
    {no:'12',ITEM:'Mutton Biriyani',RATE:'270'},
    {no:'13',ITEM:'Plain Biriyani',RATE:'190'},
    {no:'14',ITEM:'Mushroom Biriyani',RATE:'200'},
    {no:'15',ITEM:'Hyderabadi Chicken Biriyani',RATE:'200'}
            ];
    dbo.collection("junior kuppanna").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("junior kuppanna").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Panipuri',RATE:'72'},
    {no:'2',ITEM:'Crispy Corn Basket',RATE:'216'},
    {no:'3',ITEM:'Bhelpuri',RATE:'102'},
    {no:'4',ITEM:'Rabdi with Kesar Boondi',RATE:'132'},
    {no:'5',ITEM:'Paneer Tikka',RATE:'174'},
    {no:'6',ITEM:'Gobi Tikka',RATE:'156'},
    {no:'7',ITEM:'Paneer Butter Masala',RATE:'168'},
    {no:'8',ITEM:'Paneer Tikka Masala',RATE:'180'},
    {no:'9',ITEM:'Malai Kulfi',RATE:'156'},
    {no:'10',ITEM:'Mushroom Biriyani',RATE:'96'},
    {no:'11',ITEM:'Jeera Rice',RATE:'150'},
    {no:'12',ITEM:'Paneer Pulao',RATE:'168'},
    {no:'13',ITEM:'Kashmiri Pulao',RATE:'180'},
    {no:'14',ITEM:'Jamun E Jannat',RATE:'156'},
    {no:'15',ITEM:'Pav Bhaji',RATE:'210'},
    {no:'16',ITEM:'Paneer Bhatura',RATE:'320'}
            ];
    dbo.collection("kailash parbat").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("kailash parbat").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Rasamalai Shake',RATE:'159'},
    {no:'2',ITEM:'Vanilla Vacation',RATE:'139'},
    {no:'3',ITEM:'Cold Coffee Crave Shake',RATE:'169'},
    {no:'4',ITEM:'Fuse Shake',RATE:'234'},
    {no:'5',ITEM:'Snicker Blast Shake',RATE:'209'},
    {no:'6',ITEM:'Caramel Obsession Sundae',RATE:'299'},
    {no:'7',ITEM:'Cool Custard Apple Shake',RATE:'219'},
    {no:'8',ITEM:'Kaju Gulkand Shake',RATE:'199'},
    {no:'9',ITEM:'Kesar Badami Shake',RATE:'209'},
    {no:'10',ITEM:'Oreo shake',RATE:'176'},
    {no:'11',ITEM:'Mixed Fruit Caramel Sundae',RATE:'154'},
    {no:'12',ITEM:'Snicker Milkshake',RATE:'226'},
    {no:'13',ITEM:'Five Star Milkshake',RATE:'234'},
    {no:'14',ITEM:'Mixed Berry Shake',RATE:'176'}
          ];
    dbo.collection("keventers").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("keventers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Veg Kothu Parotta',RATE:'170'},
    {no:'2',ITEM:'Egg Kothu Parotta',RATE:'180'},
    {no:'3',ITEM:'Chicken Kothu Parotta',RATE:'190'},
    {no:'4',ITEM:'Shawarma Roll',RATE:'110'},
    {no:'5',ITEM:'Omelette',RATE:'50'},
    {no:'6',ITEM:'Chicken Omelette',RATE:'100'},
    {no:'7',ITEM:'Hyderabadi Chicken Dry',RATE:'200'},
    {no:'8',ITEM:'Pepper Chicken Dry',RATE:'210'},
    {no:'9',ITEM:'Plain Biriyani',RATE:'180'},
    {no:'10',ITEM:'Mushroom Biriyani',RATE:'190'},
    {no:'11',ITEM:'Kcm Special Egg Biriyani',RATE:'220'},
    {no:'12',ITEM:'Hyderabadi Chicken Biriyani',RATE:'210'},
    {no:'13',ITEM:'Fish Biriyani',RATE:'220'},
    {no:'14',ITEM:'Jeera Rice',RATE:'60'},
    {no:'15',ITEM:'Chicken Pulao',RATE:'200'}
            ];
    dbo.collection("kcm").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("kcm").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'8 Pc Hot And Crispy Chicken',RATE:'667'},
    {no:'2',ITEM:'Solo Bucket',RATE:'333'},
    {no:'3',ITEM:'Ultimate Savings Bucket',RATE:'666'},
    {no:'4',ITEM:'Friendship Bucket',RATE:'667'},
    {no:'5',ITEM:'6 Pc Chicken Boneless Strips',RATE:'205'},
    {no:'6',ITEM:'Large Popcorn',RATE:'210'},
    {no:'7',ITEM:'4 Pc Hot Chicken Wings',RATE:'143'},
    {no:'8',ITEM:'Large Popcorn With Medium Fries',RATE:'285'},
    {no:'9',ITEM:'Pepsi Can 330ml',RATE:'58'},
    {no:'10',ITEM:'Medium Fries',RATE:'95'},
    {no:'11',ITEM:'Rice 5pc Meal',RATE:'214'},
    {no:'12',ITEM:'Chicken Flaming Feast Box',RATE:'666'},
    {no:'13',ITEM:'Chizza Feast',RATE:'457'},
    {no:'14',ITEM:'Stay Home Bucket',RATE:'666'},
    {no:'15',ITEM:'Big 12',RATE:'714'}    
          ];
    dbo.collection("kfc").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("kfc").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Rice 5pc Meal',RATE:'204'},
    {no:'2',ITEM:'Chicken Flaming Feast Box',RATE:'666'},
    {no:'3',ITEM:'Mcsaver Egg And Cheese Muffin',RATE:'95'},
    {no:'4',ITEM:'Mcsaver Chicken Maharaja Mac Meal',RATE:'334'},
    {no:'5',ITEM:'Mcsaver Salad Wrap Meal',RATE:'258'},
    {no:'6',ITEM:'Big Spicy Chicken Wrap Meal',RATE:'360'},
    {no:'7',ITEM:'Mcspicy Paneer Meal',RATE:'268'},
    {no:'8',ITEM:'Chicken Kebab Burger',RATE:'81'},
    {no:'9',ITEM:'McAloo Tikki Burger',RATE:'47'},
    {no:'10',ITEM:'McCafe Iced Americano',RATE:'137'},
    {no:'11',ITEM:'Double Chocolate Frappe',RATE:'242'},
    {no:'12',ITEM:'Ultimate Savings Bucket',RATE:'766'},
    {no:'13',ITEM:'Friendship Bucket',RATE:'668'},
    {no:'14',ITEM:'Stay Home Bucket',RATE:'686'}
          ];
    dbo.collection("mcdonalds").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("mcdonalds").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotels");
  var myobj=[
    {no:'1',ITEM:'Margherita',RATE:'149'},
    {no:'2',ITEM:'Farmers Pick',RATE:'299'},
    {no:'3',ITEM:'Chicken Sausage',RATE:'229'},
    {no:'4',ITEM:'Spiced Chicken Meatballs',RATE:'269'},
    {no:'5',ITEM:'Lebanese Chicken',RATE:'299'},
    {no:'6',ITEM:'Chicken Pepperoni',RATE:'569'},
    {no:'7',ITEM:'Cheese Garlic Bread',RATE:'139'},
    {no:'8',ITEM:'Garlic Breadstix',RATE:'99'},
    {no:'9',ITEM:'Choco Volcano',RATE:'99'},
    {no:'10',ITEM:'Mirinda Pet Bottle',RATE:'57'},
    {no:'11',ITEM:'Paneer & Onion Pizza Mania',RATE:'105'},
    {no:'12',ITEM:'Golden Corn Pizza Mania',RATE:'89'},
    {no:'13',ITEM:'Cheesy Dip',RATE:'20'},
    {no:'14',ITEM:'Choco Lava Cake',RATE:'109'},
          ];
    dbo.collection("pizzahut").insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number"+res.insertedCount);
  });
    dbo.collection("pizzahut").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
  });
});