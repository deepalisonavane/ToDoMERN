const ToDoModel = require("../models/todoModel");
//get all todos
module.exports.getToDos = async (req,res)=>{
    const toDos = await ToDoModel.find()
    res.send(toDos)
}
//save todos
module.exports.saveToDos = async (req,res)=>{
    const {toDos} = req.body;
ToDoModel.create({toDos})
.then((data)=>{
    console.log("sucessfully saved");
    res.status(201).send(data);
})
.catch((err)=>{console.log(err)
    res.send({error:err,msg:"something went wrong"})
    })};

//updating todos

module.exports.updateToDos = async (req,res)=>{
    const {id} = req.params;
    const {toDos} = req.body;

ToDoModel.findByIdAndUpdate(id, {toDos})
.then(()=>{
    res.send("updated sucessfully");
})
.catch((err)=>{console.log(err)
    res.send({error:err,msg:"something went wrong"})
    })};

//deleting todos

module.exports.deleteToDos = async (req,res)=>{
    const {id} = req.params;

ToDoModel.findByIdAndDelete(id)
.then(()=>{
    res.send("deleted sucessfully");
})
.catch((err)=>{console.log(err)
res.send({error:err,msg:"something went wrong"})
})};