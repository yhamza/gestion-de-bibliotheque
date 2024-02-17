const express=require('express');
const app=express();


//.env
require('dotenv').config();
const port=process.env.PORT;
//path
const path = require("path");
const filePath=path.join(__dirname,'../dist/create.html')
//cookieParser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//json
app.use(express.json())
//bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//connect to db
const mongoose = require('mongoose');
const dbConnection = require('./config/database');
const url=process.env.URL;
dbConnection(url);



//routes
app.use(require('./routes/main'))


app.listen(port,(req,res)=>{
    console.log(`server start on ${port}`);
})