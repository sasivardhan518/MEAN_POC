var express = require("express");
var router = express.Router();
var cors = require('cors');
var bodyParser = require("body-parser");
var path = require("path");

var mongoose =  require('mongoose');
var database = require("../database/database");
var users = require("../models/users");


router.use(cors());

router.get('/addUser', function(req,res,next){
    database.init();
    console.log(req);
    var tempUser = new UserModel({userid: "test", passowrd: "12", firstname: "333", lastname: "dsd", emailid : "sdhsjdh@jhdj.cjfdf"});
    tempUser.save(function(err,data){
      if(err){
        res.send("User id already exists");
      }else
      res.json(data);
    });
});

module.exports = router;
