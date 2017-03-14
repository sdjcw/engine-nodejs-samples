var express = require('express');
var morgan = require('morgan');
var assert = require('assert')

assert.equal('1.3.0', require('accepts/package.json').version)

var app = express();

app.use(morgan('short'));

app.get('/', function(req, res) {
  return res.send('Hello');
});

app.listen(process.env.LEANCLOUD_APP_PORT || 3000);
