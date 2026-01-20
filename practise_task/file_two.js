// const http = require("http"); //it import the build-in nodejs

// const server = http.createServer((req, res) => {  //it create a new server 
//     if (req.url === '/home') {
//         res.writeHead(200, { 
//             "Content-Type": "text/html"
//         });
//         res.end("<h1>Home Page</h1>");
//     } 
//     else if (req.url === '/about') {  //checks the url path request by client
//         res.writeHead(200,
//              { "Content-Type": "text/html" 
//              });
//         res.end("<h1>About Page</h1>");
//     } 
//     else {
//         res.writeHead(404, {
//              "Content-Type": "text/html" 
//             });
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// });


// server.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });
//JS Object
// let user={
//     username:"apeksha",
//     email:"apeksha@gmail.com"
// }
// //JSON Object
// let json={
//     "username":"apeksha",
//     "email":"apeksha@gmail.com"
// }
//JSON.stringify(user) js object -> json string
//JSON.parse() json->string->json data
const server=HTMLOutputElement.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"application/json",
    });
    //res.end(user);
    res.end(JSON.stringyfy)
})