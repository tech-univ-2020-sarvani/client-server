const http = require('http');
function getRequest(url, cb) {
	let result = '';
	http.get(url, function callback(response) {
		response.on('data', function (data) {
			result += data;
		});
		response.on('end', () => {
			console.log('......running');
			cb(result);
		});
	});
}
//getRequest('http://google.com');

function post(body) {
	const options = {
        hostname: 'localhost',
        port: 3080,
        path:'/file',
		method: 'post',
		headers: { 'Content-Type': 'application/json' }
	};

	const req = http.request(options, function (res) {
		let chunks = [];

		res.on('data', function (chunk) {
			chunks.push(chunk);
		});

		res.on('end', function (chunk) {
			let body2 = Buffer.concat(chunks);
			console.log(body2.toString());
		});

		res.on('error', function (error) {
			console.error(error);
		});
	});

	req.write(JSON.stringify(body));
	req.end();
}

post({ name: 'sarvani' });

module.exports = getRequest;