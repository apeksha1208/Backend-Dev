const express=require("express");
const app=express();
//serve files from 'public directory
//Absolute Path :C\USER\DESKTOP\FILENAME
//Relative Path : ./public
const staticPath=_dirname+"/public"

app.use(Express.static("public"));
app.listen(8080,()=>console.log("Server started"));''
 