const http = require('http');
// const { Console } = require('console');
const fs = require('fs').promises;

const server = http.createServer(async (req, res)=>{
    //callback function
    // const data = await fs.readFile('./server2.html');
    console.log(req.method +':'+ req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h6>Hello Node!</h6>');
    // res.end('<p>Hello Server</p>')
    if(req.method =='GET'){
        if(req.url == '/'){
            fs.readFile('server1.html')
            .then((data) => {
                res.end(data)
            })
        
        }else if(req.url == '/about'){
            res.end('<p>this is about page</p>');
        }else if(req.url == '/user'){
            res.end('<p>this is user page</p>');
        }else if(req.url == '/list'){
            res.end('<p>this is list page</p>');
        }else if(req.url == '/post'){
            // res.end(data);
        }
    }else if(req.method =='POST'){
        if(req.url =='/post'){
            res.end('<p>this is POST test</p>');
        }
    }
}).listen(8080, function() {
    //connect server
    console.log('8080 port에서 대기중');
}).on('error', function(err){
    console.log('8080 port에 이미 서버가 실행중')
})

// const _server = http.createServer(function (req, res){
//     //callbackmo function
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write('<h1>Hello Node!</h1>');
//     res.write('<h6>Hello Node!</h6>');
//     res.end('<p>Hello Server</p>')
// }).listen(8081, function() {
//     //connect server
//     console.log('8080 port waiting');
// })

// server.on('error', function(err){
//     console.log(err);
// })

// 2차시 수업 마지막에 나왔던 예제 작성해서 코드와 실행화면을 캡처
//  8080, 8081 웹서버애플리케션을 둘 다 실행시켜보자.
// 8081 포트에 접속하면 브라우저에 문자를 출력하는 것이 아니라
//  html 파일의 내용을 브라우저에 출력할 수 있도록 프로그램 작성하고 실행화면과 코드 캡쳐