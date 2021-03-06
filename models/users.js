var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  userId: { type: String, unique: true, trim: true, required: true,index: true },
  password: { type: String, default: "1234567", required: true },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  emailId: { type: String, required: true }
}, { collection: 'users' });

// usersSchema.statics.getId = function (_userid, cb) {
//   console.log("userid" + _userid);
//   return UserModel.find({ userId: new RegExp(_userid, 'i') }, { userId: 1, _id: 1 }, cb);
// };

// usersSchema.methods.getUserId = function (_userid, cb) {
//   console.log("userid" + _userid);
//   return UserModel.find({ userId: new RegExp(_userid, 'i') }, { userId: 1, _id: 1 }, cb);
// };

usersSchema.statics.getUsers = function (callback) {
  return UserModel.find({}, callback);
};

UserModel = mongoose.model('Users', usersSchema);

module.exports = { UserModel };
