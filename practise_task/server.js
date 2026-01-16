const http = require("http");
const fs=require("fs");
const myServer = http.createServer((req, res) => {
    const log=`${Date.now()} : ${req.url} New Req Rec.\n`
    fs.appendFile("log.txt", log , (err,data)=>{
        switch(req.url){
            case '/':
                res.end("Home Page");
                break;
            case '/about' :
                res.end("About Page");
                break;
            case '/contact':
                res.end("Contact Page");
                break;
            default:
                res.end("404 page not found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));

//http requ , root directory (/) value print hota h vo hme log.txt ke ander chiye agar hm slash ke baad manually apna naame bhi likhte h toh vo bhuilana chiye 