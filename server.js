
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

console.log(' Yo amo a Maria Fernanda Fuentes Campos ');

var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/';

var db;
app.set('view engine', 'ejs');

MongoClient.connect(url,function(err,client){
  if(err) console.log(err);
  db = client.db('crud')

    app.listen(3000,function(){
      console.log("listening on port 3000");

    })


})

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function (req,res){
  db.collection('quotes').find().toArray(function(err,results){
  res.render('index.ejs', {quotes: results})
  })
})

app.post('/quotes', function(req,res){
  db.collection('quotes').save(req.body, function(err,result){
    if(err) console.log(err)
    console.log(result);
    res.redirect('/');

  })
})
