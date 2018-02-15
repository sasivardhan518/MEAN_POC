var uniqid = require('uniqid');

const usersSession = [];

const sessionManager = function(){
    setSession= (userid) =>{
        var token = uniqid();
        usersSession.push({ userid : userid, token : token, lastAccessedTime: new Date() });
        return token;
        console.log(usersSession);
        //console.log(userid);
    };
    checkSessionValidity = (userid) =>{
        var userSession = usersSession.find(function(user){
            return user.userid == userid;
        });
        var lastAccessedTime  = userSession.lastAccessedTime;
        var currentTime = new Date();
        var timeDiff = (currentTime - lastAccessedTime)/1000/60;
        if(timeDiff > 5){
            usersSession = usersSession.filter(function(user){
                return userSession.userid != userid;
            });
            return false;
        }else {
            updateSession(userid);
            return true;
        }
    };
    updateSession = (userid) =>{
        var userSession = usersSession.find(function(user){
            return user.userid == userid;
        });
        userSession.lastAccessedTime = new Date();
    };
    return {
        setSession,
        checkSessionValidity,
        updateSession
    }
}();


module.exports = { sessionManager}
