const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// set view engine to EJS
app.set('view engine', 'ejs');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// define routes
app.use(require('./posts'));

app.listen(3000, function(){
  console.log('Server started on PORT 3000');
});