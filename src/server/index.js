if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

var db = require( './db' );

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(require('body-parser').json());
app.use(require('morgan')('combined'));
// app.use(require('flash')());
app.use('/api/items', require('./api/items'));
app.use('/api/users', require('./api/users'));
app.use(express.static('public'));
app.set('superSecret', process.env.SECRET);

var port = 4000;
if (process.env.PORT) {
  port = Number(process.env.PORT);
}

app.listen(port, function(err) {
  if (err) {
    console.log(err.stack || `${err.name}: ${err.message}`);
  } else {
    console.log(`server running on port: ${port}`);
  }
});
