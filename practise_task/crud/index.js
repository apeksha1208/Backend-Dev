// const express=require("express");
// const users = require("./MOCK_DATA (1).json");

// const app=express();

// app.get('/users',(req,res)=>{
//     res.json(users);
// });
// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// });

const express=require("express");
const users = require("./MOCK_DATA (1).json");
const app=express();
app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users',(req,res)=>{
    res.json(users);
});
app.get('/api/users/:id',(req,res)=>{
    const id =req.params.id;
    const user = users.find(u=>u.id==id);
    return res.json(user);
});
// app.post("/api/users",(req,res)=>{
//     const body=req.body;
//     //users.push({...body,id:users.length+1});
//     return res.json({msg:"User created successfully"})
// });
app.post("/api/users",(req,res)=>{
    const body=req.body;
    //users.push({...body,id:users.length+1});'
    const newUSer= {
        id:users.length+1,
        ...body
    }
    users.push(newUSer);
    FileSystem.writeFile("./",JSON.stringify(users, null, 2),(err)=>{
        if(err){
            return res.status(500).json({msg: "Error saving user"});
        }
    })
    return res.status(201).json({msg:"User created successfully",user:newUSer,});
});
// app.patch("/api/users",(req,res)=>{
//     return res.json({msg:"User updated successfully"})
// });
app.patch("/api/users",(req,res)=>{
    const id = Number(req.parmas.id);
    const body = res.body;
    const userIndex = user.findIndex((u)=>u.id===id);
    if(userIndex===-1){
        return res.status(404).json({msg:"user not found"});
    }
    users[userIndex]={...users[userIndex],...body};
    fs.writeFile("./",JSON.stringify(users, null,2),(err)=>{
        if(err){
            return res.status(500).json({msg: "Error updating user"});
        }
    }); 
    return res.json({msg:"User updated successfully"},user:users[userIndex],)
});
app.delete("/api/users",(req,res)=>{
    return res.json({msg:"User deleted successfully"})
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});