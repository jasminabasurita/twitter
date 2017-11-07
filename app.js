const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

const routes = require('./routes');


app.listen(3000, function(){
  console.log('Twitter up and running!')
})
app.use(function(req, res, next){
  console.log(req.method, req.path);
  next();
})
app.use(express.static('public'))
app.use(express.static('files'))
app.use(routes);

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
// })

// app.get('/', function(req, res, next){
//   res.send('Hello World!')
// })

// app.get('/news', function(req, res, next){
//   res.send("Here's the news!")
// })

// app.get('/views', function(req, res, next){
//   res.render('index', locals, function (err, output) {
//     if (err) throw err;
//     res.send(output);
//     console.log(output);
//   });
// });


// var locals = {
//   title: 'nunjucks will make our lives easier eventually',
//   people: [
//     {name: 'For real'},
//     {name: "Even if it sucks at the moment"}
//   ]
// };
