var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');


var routes = require('./routes/index');

app.use('/', routes);


//Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started @ port'+app.get('port'));
});

module.exports = router;