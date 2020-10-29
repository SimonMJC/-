const express = require('express');
const path = require('path');
const nunjucks=require('nunjucks');

const app = express();
app.set('port', process.env.port || 3000);
app.set('views', './views/ejs');
app.set('view engine', 'ejs');
// nunjucks.configure('./views/html', 
// {express: app,
// watch:true})


app.get('/', function(req, res){
    res.render('index', {title: 'Express render by EJS'});
    // res.render('index', {title: 'Express render by nunjucks'});
})

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기중,,,');
})