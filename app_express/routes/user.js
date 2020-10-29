var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('user');
})
router.get('/:id', (req, res) => {
    res.send(req.params);
})
router.get('/:id/:pwd', (req, res) => {
    res.send(req.params);
})


module.exports = router;