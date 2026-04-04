const express = require("express");
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"Apeksha",marks:10,city:"Mathura"},
    {id:2,name:"Gunnu",marks:70,city:"Agra"},
    {id:3,name:"Gungun",marks:70,city:"Delhi"}
];
app.get("/students",(req,res)=>{
    res.json(students);
});
//Delete - Remove Students 
app.delete("/students/:id",(req,res)=>{
    const id = req.params.id;
    const index = students.findIndex((s)=>s.id==id);
    if(index===-1){
        return res.status(404).json({message:"Student not found"});
    }
    if(students[index].marks>=70){
        return res.status(400).json({
            message:"Student scored more than 70 so it cannot be deleted"
        });
    }
    const deleteStudent=students.splice(index,1);
    res.json({
        message:"Student deleted successfully",deleteStudent:deleteStudent[0],
    });
});
app.listen(5000,()=>console.log("Server Started"));