var express = require('express');
var app = express();

// regular app.get function

app.get('/', function(request, response){
	response.sendfile(__dirname + '/public/index.html');
});

// express static middleware

// app.use(express.static('public'));

app.listen(3000);