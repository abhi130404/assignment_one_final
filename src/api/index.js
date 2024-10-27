const express = require('express');
const users=require('./MOCK_DATA.json');

const app=express();
const port=8000;

app.listen(port,()=>console.log('server started at port : ${port}'))

app.get("/users",(req,res)=>{
    return res.json(users);
})