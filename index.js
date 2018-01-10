const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// set view engine to EJS
app.set('view engine', 'ejs');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

let allPosts = [];

app.get('/', function(req, res){
  res.render('index');
});

app.get('/posts', function(req, res){
  res.render('posts');
});

app.get('/posts/submit', function(req, res){
  res.render('submit');
});

app.post('/posts/submit', function(req, res){
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
    res.render('posts');
  };
});

app.listen(3000, function(){
  console.log('Server started on PORT 3000');
});