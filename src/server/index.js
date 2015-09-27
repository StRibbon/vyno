if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

var db = require( './db' );

var express = require('express');
var app = express();
app.use(require('body-parser').json());
app.use('/api/items', require('./api/items'));
app.use(express.static('public'));

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
