const http= require("http")
const fs = require("fs");
const myserver = http.createServer((req,res)=>{
    let responseText="";
    switch(req.url){
        case "/":
            responseText=("Home Page");
            break;
        case "/about":
            responseText=("About Page");
            break;
        case "/contact":
            responseText=("Contact Page");
            break;
        default:
            responseText=("Home Page");
    }
    const log = `${Date.now()} | ${req.url} | ${responseText}\n`;
    fs.appendFile("log.txt",log,(err)=>{
        if(err){
            res.end("Error");
            return;
        }
        res.end(responseText)
    });
});
myserver.listen(8000,()=>console.log("Server Started"));
