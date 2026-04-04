const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/data", (req,res)=>{
    res.json({message:"CORS working"});
});

// custom cors
//frontend allow 
app.use(
    cors({
        origin:"http://localhost:5173",  
    })
)


//multiple fronted allow 

const allowedOrigins=[
    "http://localhost:5173",
    "http://localhost:3001",
];

app.use(
    cors({
        origin:allowedOrigins,
    })
)
app.listen(8000, ()=>  console.log("Server Started"));