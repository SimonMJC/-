var express = require('express');
var router = express.Router();

// router.get('/', (req, res) => {
//     res.render('post');
// })
// router.post('/', (req, res) => {
//     res.send('this post page');
// })

//**********ROUTER GROUP***********//
router.route('/')
.get((req, res)=> {
    res.render('post');
})
.post((req, res) => {
    res.send('this is post page')
})

module.exports = router;