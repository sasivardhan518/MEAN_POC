var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema= new Schema({
	userid:{type:String,index:true,unique:true,trim:true,required:true},
    password:{type:String,default:"1234567"},
    firstname:{type:String,trim:true,required:true},
    lastname:{type:String,trim:true,required:true},
	emailid:{type:String,required:true,match: /.+\@.+\..+/,index:true}
},{collection:'users'});
 
usersSchema.statics.getId=function(_userid,cb){
	 console.log("userid"+_userid);
	 return UserModel.find({ userid: new RegExp(_userid, 'i') },{userid:1,_id:1}, cb);
};

usersSchema.methods.getUserId=function(_userid,cb){
	console.log("userid"+_userid);
	 return UserModel.find({ userid: new RegExp(_userid, 'i') },{userid:1,_id:1}, cb);
};

usersSchema.statics.getUsers=function(callback){
    return UserModel.find({}, callback); 
};
    



UserModel = mongoose.model('Users',usersSchema);

module.exports= {UserModel}; 