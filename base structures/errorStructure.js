
module.exports = function responseObject(err, status, data){
    this.Error = err;
    this.Status = status;
    this.Data = data;
}
