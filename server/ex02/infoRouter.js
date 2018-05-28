var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/loading/:itemName', loadingPage);
router.get('/infos/:itemName', showItemDetail);


function loadingPage(req, res, next){
    //동작 이뤄지고 나서
    console.log(req.parms/itemName);
    res.redirect('/infos/:'+req.params/itemName);
}

function showItemDetail(req, res, next){
    var item = req.params.itemName;
    res.send(item);
}       

module.exports = router;