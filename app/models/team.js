const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name : {type : string, required : true},
    description : {type : string},
    users : {type : [mongoose.types.ObjectId], default : [] },
    owner : {type : mongoose.types.ObjectId, required : true},
},{
    timestamps : true
});

const TeamModle =  mongoose.model("team", TeamSchema);
module.exports = {
    TeamModle
}
