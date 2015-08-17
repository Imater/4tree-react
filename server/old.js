var express = require('express');
var path = require('path');

var app = express(); // better instead

app.use(express.static(path.join(__dirname, '../.tmp')));

var port = 8081;
app.listen(port);
console.info('listen on port', port)
