const url = require("url");
const http = require("http");
const myserver = http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/":
            res.end("this is home page");
            break;
        case "/about":
            const username=myUrl.query.myname;
            res.end(`hi , ${username}`);
            break;
        default:
            res.end("invalid url");
    }
})
myserver.listen(8000,()=>console.log("server started"));