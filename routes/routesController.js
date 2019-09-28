const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    // return message: '/ in stocksController' with status 200
    res.send('path / is being accessed');
});

router.get('/array', function (req, res){
    let array = ['a', 'b', 'c'];
    res.status(200).send({"Array": array});
});

module.exports = router;
