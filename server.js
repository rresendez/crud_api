
const express = require('express');
const app = express();

console.log(' Yo amo a Maria Fernanda Fuentes Campos ');

app.listen(3000,function(){
  console.log("listening on port 3000");
})

app.get('/', function (req,res){
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
})

app.post('/quotes', function(req,res){
  console.log("Helloooo");
})
