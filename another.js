const http = require('http');
const { Console } = require('console');

const server = http.createServer(function (req, res){
    //callback function
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h6>Hello Node!</h6>');
    res.end('<p>Hello Server</p>')
}).listen(8080, function() {
    //connect server
    console.log('8080 port waiting');
})

server.on('error', function(err){
    console.log('8080 포트에 이미 서버가실행중입니다');
})
