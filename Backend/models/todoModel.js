const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
    toDos:{
        type:String,
    }
});

module.exports = mongoose.model("ToDo", toDoSchema);
