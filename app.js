const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('Twitter up and running!')
})

app.use(function(req, res, next){
  console.log(req.method, req.path);
  next();
})

app.get('/', function(req, res, next){
  res.send('Hello World!')
})

app.get('/news', function(req, res, next){
  res.send("Here's the news!")
})
