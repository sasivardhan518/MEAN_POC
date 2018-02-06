var express = require("express");
var router = express.Router();
var cors = require('cors');

router.use(cors());

router.get('/test', function(req,res,next){
  res.send({"Test API":"hii", "name": "shashi"});

});

module.exports = router;
