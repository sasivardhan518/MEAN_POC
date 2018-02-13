var express = require("express");
var router = express.Router();
var cors = require('cors');
var bodyParser = require("body-parser");
var path = require("path");
var responseObject = require('../base structures/errorStructure');
var mongoose =  require('mongoose');
var database = require("../database/database");
var users = require("../models/users");

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());  

router.use(cors());

router.post('/addUser', function(req,res,next){
    database.init();
    var user = req.body;
    console.log(req.body);
    console.log(user.emailId);
    var tempUser = new UserModel({userid: user.userId, passowrd: user.password, firstname: user.firstName , lastname: user.lastName, emailid : user.emailId });
    tempUser.save(function(err,data){
      if(err){
        if(err.name == "ValidationError"){
          res.json( new responseObject("Email id validation failed.", "Failed", null));
        }
        else{
          res.json(new responseObject("user id already exists.", "Failed", null));
        }
       
      }else 
      res.json(new responseObject("", "Success", data));
    });
});

module.exports = router;
