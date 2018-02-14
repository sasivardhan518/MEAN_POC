var mongoose = require('mongoose');
var responseObject = require('../base structures/errorStructure');
var {status} = require('../Enums/enum');
var con;
var conflag=false;
var request;
var response;
var init=function initdb(req, res){
	response = res;
	mongoose.connect("mongodb://localhost/TimeTracker",callback);
}

var callback = function(err,data){
	if(err){
		console.log(err);
		response.json(new responseObject(err.message, status.failed, null)); 
	}
	else{
		console.log("connection success");
		conflag=true;
		con = mongoose.connection;
	}
}
module.exports={con,init,conflag};
