const fs=require("fs");
fs.writeFileSync("./example.txt","Hello World");
const result=fs.readFileSync("./unknown.txt","utf-8");
console.log(result);
fs.readFile("./unknown.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error reding files:",err);
    }
    else{
        console.log("File content",result);
    }
});