var express = require("express");
var router = express.Router();
var cors = require('cors');
var bodyParser = require("body-parser");
var path = require("path");
var responseObject = require('../base structures/errorStructure');
var mongoose =  require('mongoose');
var database = require("../database/database");
var {status} = require("../Enums/enum");
var users = require("../models/users");

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use(cors());
router.use(function(req, res, next){
  database.init(req, res);
  res.Response = new responseObject();
  next();
})

router.post('/addUser', function(req,res,next){
    
    var user = req.body;
    console.log(req.body);
    console.log(user.emailId);
    var tempUser = new UserModel({
      userId: user.userId,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      emailId : user.emailId
    });
    tempUser.save(function(err,data){
      if(err){
        console.log(err);
        if(err.name == "ValidationError"){
          res.Response.setResponse("Email id validation failed.", status.failed , null);
        }
        else{
          res.Response.setResponse("user id already exists.", status.failed, null);
        }
      }else
      res.Response.setResponse(null, status.success, data);
      res.json(res.Response);
    });
});

router.post('/loginUser',function(req,res,next){
  var user = req.body;
  var tempUser = {
    userId: user.userId,
    password: user.password
  };
  UserModel.findOne(tempUser, function(err, data){
    if(err){
      console.log(err);
      res.Response.setResponse(err._message, status.failed, null);
    }else if(data){
      res.Response.setResponse(null, status.success, data);
    }
    else{
      res.Response.setResponse( "Incorrect Username/Password provided. \n Please try to login with valid credentials", status.failed, null);
    }
    res.json(res.Response);
  });
});

module.exports = router;
