// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./dbconnection");
// const menuRoutes = require("./rroute");

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use("/");

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server running on http://localhost:${PORT}");
//  });
 
 var express = require("express")
var cors = require("cors")
var app = express()

var database = require("./dbconnection")
const path = require('path');

const parser = require("body-parser")
const route = require("./rroute")

app.use(cors())
app.use(express.json());  
app.use(parser.json())


app.use("/",route)


app.listen(5000,function(){
 console.log("Indexsuccess")
})