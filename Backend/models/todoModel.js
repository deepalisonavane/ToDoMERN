const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
    toDos:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("ToDo", toDoSchema);
