var PORT = 8888;
var HOST = '127.0.0.1';

var net = require('net');
var client = new net.Socket();
var message = 'You wanna a piece on me boy?';

client.connect(PORT, HOST, function () {
	setInterval(function () {
		client.write(message);
	}, 1000);
});


client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
	console.log('Connection closed');
});