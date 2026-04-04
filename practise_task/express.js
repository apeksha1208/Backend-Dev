const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req,res)=>{
    return res.send("Home page");
});
app.get("/attendance", (req,res)=>{
    const name = req.query.name;
    
    const present = req.query.present;
    if (present === "yes"){
        res.send(`${name} is present`);

    }
    else{
        res.send(`${name} is absent`);
    }
})

// const students=[
//     {name:"abhishek",id:1,branch:"CSE"},
//     {name:"shivansh",id:2,branch:"CSE"},
//     {name:"yashu",id:3,branch:"CSE"},
// ];
// const register=[
//     {name:"abh",email:"xyz",pass:"abc"},
//     {name:"shi",email:"mno",branch:"def"},
// ];
// app.post("/students/register",(req,res)=>{
//     const data2=req.body;
//     register.push(data2);
//     res.send(register);
// })
// app.post("/students/add", async(req,res)=>{
//     const data =req.body;
//     //students.push({name:data.name, id:data.id, branch:data.branch});
//     students.push(data);
//     res.send(students);
// });

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const credentials=[
    {email:"abc@gmail.com", password:"1234"},
    {email:"def@gmail.com", password:"5678"}
];
//register page
app.post("/auth/register", async (req,res)=>{
    const data = req.body;
    const {email,password}=data;
    const existinguser=credentials.find((cred)=>cred.email==data.email)
    if(existinguser){
        return res.status(400).send("user already exist");
    }
    const passwordregex = /^[A-Za-z0-9@]+$/;
    if(!passwordregex.test(password))
    {
        return res.status(400).send("Invalid Password");
    }
    credentials.push(data);
    res.send("Registeration Successful");
});
// login page
app.post("/auth/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = credentials.find(
        (cred)=>cred.email==email && cred.password==password,
    );
    console.log(user);
    if(user){
        res.send({message:"Login Successfully",user});
    }
    else{
        res.send("Invalid credentials");
    }
});