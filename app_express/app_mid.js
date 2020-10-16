const express = require('express');
var app = express();
var count = 0;
app.set('port', process.env.port || 3000);

app.use(function (req,res,next){
    console.log('Count: ', count);
    count = count+1;
    next();
})
app.use('/user/:id', function (req, res, next){
    console.log('Request URL:' ,req.originalUrl);
    // console.error(err, "에러");
next();

}, function (req, res){
    
  throw new Error("Internal Server Error, 서버 내부 오류 - 이 에러는 웹 서버가 요청사항을 수행할 수 없을 경우에 발생함"); 

});

app.use(function(err, req, res, next){
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), ' 번 포트에서 대기중,,,')
})