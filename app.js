require('dotenv').config();
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res,status(200).send({'message': "Welcome to NodeJS API"});
})
 
app.listen(5000, ()=>{console.log("Server started!")});

