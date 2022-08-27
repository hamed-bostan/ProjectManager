const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    title : {type : string, required : true},
    text : {type : string},
    image : {type : string, default : "/defaults/default.png" },
    owner : {type : mongoose.types.ObjectId, required : true},
    team : {type : mongoose.types.ObjectId},
    private : {type : Boolean, default : true},
},{
    timestamps : true
});

const ProjectModel =  mongoose.model("project", ProjectSchema);
module.exports = {
    ProjectModel
}

