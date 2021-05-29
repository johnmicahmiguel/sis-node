require('dotenv').config();
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res.status(200).send({'message': "Welcome to NodeJS API"});
})
 
app.listen(process.env.PORT || 8080, ()=>{console.log("Server started!")});

