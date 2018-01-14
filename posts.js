const express = require('express');
const router = express.Router();

let allPosts = [];

router.get('/', function(req, res){
  res.render('index');
});

router.get('/posts', function(req, res){
  res.render('posts', { allPosts: allPosts });
});

router.get('/posts/submit', function(req, res){
  res.render('submit');
});

router.post('/posts/submit', function(req, res){
  addPost();

  function addPost(){
    let email = req.body.email;
    let title = req.body.title;
    let description = req.body.description;
    let post = {
      email: email,
      title: title,
      description: description
    };
    allPosts.push(post);
    res.redirect('/');
  };
});

module.exports = router;