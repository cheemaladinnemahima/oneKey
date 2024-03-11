const express = require('express');
const sequelize = require('./config/db');
const port = 3000;
const app = express();
app.get('/',(req,res)=>{
   res.json('Welcome to onekey.....')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})






