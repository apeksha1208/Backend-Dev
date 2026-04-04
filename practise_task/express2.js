const express=require("express");
const app=express();
app.use(express.json());
let credentials=[
    {email:"apeksha@gmail.com",password:"123"},
    {email:"aman@gmail.com",password:"235"},
];
app.get("/auth/users",(req,res)=>{
    res.json({message:"User fetched successfully",credentials})
});
//recent password route
app.put("/auth/reset",(req,res)=>{
    const {email,password,newPassword}=req.body;
    //find user 
    const user=credentials.find(
        (cred)=>cred.email ==email && cred.password==password,
    );
    if(!user){
        return res.status(400).json({message:"Invalid email or password"})
    }
    //update password
    user.password=newPassword;
    res.json({message:"Password updated successfully",user})
});
//forget password
app.put("/auth/forget",(req,res)=>{
    const {email,newPassword}=req.body;
    const user=credentials.find((cred)=>cred.email==email);
    if(!user){
        return res.status(400).json({message:"Email not found"});
    }
    user.password=newPassword;
    res.json({message:"password reset via forget password",user});
});
app.listen(8088,()=>console.log("Server Started"));