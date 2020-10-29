const express = require('express');
const path = require('path');
// const { allowedNodeEnvironmentFlags } = require('process');
const nunjucks=require('nunjucks');

const app = express();

app.set('port', process.env.port || 3000);
nunjucks.configure('./views/html', 
    {express: app,
    watch: false});
// app.set('views', './views');
app.set('view engine', 'html');

app.get('/', (req,res)=>{
    // res.render('index',{title:'Express - template render', header:'view engine - pug'});
    res.render('about');
})
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
//     // res.send('main page')

// })
// app.get('/about', (req, res) => {
//     // res.send('this is about');
//     res.sendFile(__dirname + '/about.html');

// })
// app.get('/user', (req, res) => {
//     // res.send('this is user');
//     res.sendFile(path.join(__dirname, '/user.html'));

// })
// app.get('/main', (req, res)=>{
//     res.render('main');
// })

// app.get('/user/:id/:pwd', (req, res) => {
//     console.log(req.params);
//     // res.send('user: ' + req.params.id + 'pwd: ' + req.params.password);
//     // res.sendFile(path.join(__dirname, '/user.html'));

// })
// app.get('/post', (req, res) => {
//     // console.log(req.query.id + ',' + req.query.password);
//     // console.log(req.query.content);
//     // res.send('id:'+ req.query.id+'\n'+'password:'+ req.query.password);
//     res.sendFile(__dirname, '/post.html');
// })
// app.post('/post', (req, res) => {
//     res.send('this post page');
//     // res.sendFile(__dirname, '/post.html');

// })
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중...');
})