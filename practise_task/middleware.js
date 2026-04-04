// const express = require("express");
// const app=express();

// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next();
// });
app.use(express.static("public"));
// app.get("/test",(req,res)=>{
//     res.send("Route executed");
// });
// app.listen(8000,()=>console.log("Server Started"));

//req check,authentication check,logging check , kis type ka data arha h ,data modification,error handle,access control
//application level middleware
const express = require("express");
const app=express();
// app.use((req,res,next)=>{
//     console.log("Request url:",req.url);
//     console.log("Request Method:",req.method);
//     next();
// });
// app.listen(5000, () => {
//     console.log("Server Started on port 5000");
// });
//Built in mmiddleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use((req,res.next)=>{
//     console.log("Rqu url:",req,url);
//     console.log("Req url:",req.method);
//     next();
// });
// app.get("/home",(req,res)=>{
//     res.send("Welcome Home");
// });

// //Route level middleware
// const checkLogin=(req,res,next)=>{
//     const isLoggedIn=true;
//     if(!isLoggedIn){
//         return res.sttaus(401).send("Please login first");
//     }
//     next();
// };
// app.get("/dashboard",checkLogin,(req,res)=>{
//     res.send("Welcome to DashBoard");
// });
// app.listen(8000,()=>console.log("Server started"));

//Authentication middleware
// const authMiddleware=(req,res,next)=>{
//     const token = req.headers.authorization;
//     if(!token){
//         return res.status(403).json({message:"Token Required"});
//     }
//     if(token!=="akku"){
//         return res.status(401).json({message:"Invalid token"});
//     }
//     next();
// }
// app.get("/profile",authMiddleware,(req,res)=>{
//     res.json({message:"Profile data"});
// });
// app.listen(8080,()=>console.log("Server started"));

// 5- Error Handling middleware

// app.get("/error", (req,res)=>{
//     throw new Error ("Something Went Wrong");
// });

// app.use((err, req,res,next)=>{
//     console.log("Error Middleware:", err.message);
//     res.status(500).json({message:"Internal Server Error"});
// });