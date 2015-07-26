var express = require('express');
var app = express();

app.use(express.static('public'));

// regular app.get function

app.get('/blocks', function(request, response){
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

// express static middleware

// app.use(express.static('public'));

app.listen(3000);