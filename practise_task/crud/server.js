const express = require("express");
const fs = require("fs");
const users=require("./MOCK_DATA (1).json");
const app = express();
app.use(express.urlencoded({extended:false}));

app.get("/api/users",(req,res)=>{
    res.json(users);
});
app.post("/api/users",(req,res)=>{
    const {first_name,last_name,email,gender,job_title}=req.body;
    const newUser={
        id:users.length+1,
        first_name,
        last_name,
        email,
        gender,job_title,
    };
    users.push(newUser);
    fs.writeFile("./MOCK_DATA (1).json",JSON.stringify(users,null,2),(err)=>{
        res.status(201).json({msg:"user created"});
    });
});

app.patch("/api/users/:id",(req,res)=>{
    const id=req.params.id;
    const userIndex=users.findIndex((u)=>u.id == id);
    if(userIndex===-1){
        return res.status(404).json({msg:"user not found"});
    }
    users[userIndex]={
        ...users[userIndex],
        ...req.body,
    };
    fs.writeFile("./MOCK_DATA (1).json",JSON.stringify(users,null,2),()=>{
        res.status(200).json({msg:"user updated",user:users[userIndex]});
    });
})
app.listen(8000,()=>{console.log("Server started")});