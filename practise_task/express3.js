const express=require("express");
const app=express();
//object bna rhe like array just neeche vali line se 
app.use(express.json());
let credentials=[
    {email:"abc@gmail.com", password:"1234"},
    {email:"def@gmail.com", password:"6789"},
];
app.get("/auth/users", (req,res)=>{
    res.json({message:"user fetched successfully",credentials});
});

//Email ko Reset kiya
app.put("/auth/reset",(req,res)=>{
    const {oldEmail,password, newEmail} = req.body;

    const user=credentials.find(
    (cred)=>cred.email==oldEmail && cred.password==password,
);
if(!user){
    return res.status(400).json({message:"Invalid Password"});
}
// update Email
user.email=newEmail;
res.json({message:"Email Updated Successfully",user});
});
app.listen(3000,()=>console.log("Server Started"));