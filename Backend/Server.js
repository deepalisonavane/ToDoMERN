const express = require("express");
const mongoose  = require("mongoose");
const routes = require("./routes/ToDoRoutes")
require("dotenv").config();

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb connected...")) 
.catch((err)=>console.log(`thiis${err}`))


app.use("/api",routes);

app.listen(PORT ,()=>{
    console.log(`LISTENING TO ${PORT}`)
})
