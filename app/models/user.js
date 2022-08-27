const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name : {type : string},
    last_name : {type : string},
    username : {ype : string, required : true, unique : true},
    mobile : {type : string, required : true, unique : true},
    roles : {type : string, default : ["USER"]},
    email : {type : string, required : true, unique : true},
    password : {type : string, required : true},
    skills : {type : string, default : [] },
    teams : {type : string, default : []},
},{
    timestamps : true
});

const UserModle =  mongoose.model("user", UserSchema);
module.exports = {
    UserModle
}
