const express=require("express");
const app=express();
//object bna rhe like array just neeche vali line se 
app.use(express.json());
let students= [
    {id:1,name:"vaishnavi", marks:60,city:"hyderabad"},
    {id:2,name:"manvi", marks:70,city:"agra"},
];
//view student
app.get("/students",(req,res)=>{
    res.json(students);
});
//patch-update any one field(marks or city)
app.patch("/students/:id" ,(req,res)=>{
    const id=req.params.id;//store value from path(params krta hai)
    const {status}=req.body;
    const student=students.find((s)=>s.id==id);
    if(!student){
        return res.status(404).json({message:"student not found"});
    }
    if(status!=="active"&& status!=="inactive"){
        return res.status(400).json({message:"Status must be active or inactive"});
    }
    student.status=status;
    //apply partial update
    
    res.json({message:"Student updated Successfully",student});

});
app.listen(8000,()=>console.log("Server Started"));