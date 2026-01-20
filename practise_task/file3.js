const fs = require("fs");
//const promises = require ("fs").promises;

//create file with Synch function
//fs.writeFileSync("./file10.txt","Welcome to GLa");
//fs.writeFile("./file10.txt","Welcome to Mathura",(err)=>{});

//Read file with sync
//const result = fs.readFileSync("./notes.txt","utf-8") //utf8 ke thorugh ye notes.txt jaa rha h 
//console.log(result);
//async 

// fs.readFile("./notes.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log(result);
//     }
// });

//fs.appendFileSync("./file3.txt",new Date().getDate().toLocaleString()+"\n");
//fs.appendFileSync("./file3.txt",`${Date.now()} Hey Apeksha \n`);

 //copy file
//fs.cpSync("./file3.txt","./file_copy.txt")
// to delte this copy file
//fs.unlinkSync("./file_copy.txt")

//console.log(fs.statSync("file3.txt"))

//chek krne ke liye ky ye file h ya kuch or
//console.log(fs.statSync("file3.txt").isFile())

//create directory
//fs.mkdirSync("./New_Folder")

//remove directory

//fs.rmSync("./New_Folder", { recursive: true, force: true });
//read directory jitne bhi file h .txt vo sab dekh skhte h 
// fs.readdir("./", (err, files) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(files);
//     }
// });
// fs.readdir("./",((err,files)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log("Error",files);
//     }
// }));
fs.renameSync("file2.js", "file_two.js");