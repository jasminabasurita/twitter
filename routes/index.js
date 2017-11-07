const express = require('express');
const tweetBank = require('../tweetBank');

const bodyParser = require('body-parser');


module.exports = function(io) {

  const router = express.Router();
  // could use one line instead: const router = require('express').Router();

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
  });

  router.get('/users/:name', function (req, res) {
    var name = req.params.name;
    var list = tweetBank.find({name: name});
    res.render('index', {tweets: list, showForm: true, name: name})
  })

  router.get('/tweets/:id', function(req, res){
    let tweets = tweetBank.find({id: req.params.id});
    res.render('index', {tweets: tweets})
  })

  router.get('/submit', function(req, res) {
    res.render('index', {showForm: true})
  })

  router.post('/tweets', function(req,res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', {name: name, tweet: text});
    res.redirect('/')
  })

  router.post('/delete', function(req, res) {
    var tweet = req.body.tweet;
    console.log(tweet)
    tweetBank.remove(tweet);
    res.redirect('/');
  })

  return router;
}
