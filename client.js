var request = require('request');
setInterval(function() {
	request.get('http://test-upstream.dev/', function(err, res, body) {
		console.log(new Date().getTime(), res.statusCode, body);
	});
}, 10);
