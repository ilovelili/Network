var PORT = 8888;
var HOST = '127.0.0.1';


var net = require('net');
 
var server = net.createServer(function(socket) {
	socket.on('data', function(chunk) {
		//socket.write(chunk);
		console.log(socket.write(chunk));
	});
}); 

server.listen(PORT, HOST);