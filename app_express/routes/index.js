var express = require('express');
var router = express.Router();
router.get('/', (req,res)=>{
    res.render('index', {title:'Express--templete render'});
})

module.exports = router;