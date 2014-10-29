var PORT = 8888;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('You wanna a piece on me boy?');

var client = dgram.createSocket('udp4');

//while (true) {
setInterval(function(){
	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        //client.close();
    });
}, 1000);
    
//}