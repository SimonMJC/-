const express = require('express');
const path = require('path');
// const router = express.Router();

//route module import
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');


const app = express();

//app setting
app.set('port', process.env.port || 3000);
app.set('views', './views/ejs');
app.set('view engine', 'ejs');

//Router module use to handler
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중...');
})
//404 NOT FOUND
app.use((req, res, next)=>{
    res.status(404).send('Not Found');
})