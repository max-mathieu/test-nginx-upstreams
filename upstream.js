var app = require('express')();
var port = process.argv[2];
app.get('/', function(req, res) {
	res.send(port + ' was called');
});
app.listen(port);
console.log('Listening on port ' + port + '\n');
