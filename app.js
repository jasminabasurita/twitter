const express = require('express');
const app = express();

const nunjucks = require('nunjucks');


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

var locals = {
  title: 'I hate nunjucks',
  people: [
    {name: 'I. Haight Nunjucks'},
    {name: "It's time to leave! This has no importance."}
  ]
}