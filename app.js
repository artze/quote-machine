var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static('./public'));

app.use(express.static(__dirname + '/views'))

app.listen(port, function() {
	console.log(`Express running on ${port}`);
})