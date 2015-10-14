var express = require('express');

var app = express();

require('./config/express').addMiddleware(app)
require('./routes')(app)

app.listen(process.env.PORT || 4000, function() {
	console.log("Express server listening")
});