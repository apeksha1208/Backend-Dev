const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
    let response="";
    switch (req.url) {
        case '/':
            response = "Home Page";
            break;
        case '/about':
            response = "About Page";
            break;
        case '/contact':
            response = "contact page";
            break;
        default:
            response = "404 Page Not Found";
        }
    const log = `${Date.now()} |  ${req.url} | ${response} \n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            res.end("Error");
            return;
        }
        res.end(response);
    });
});
myserver.listen(8000, () => console.log("Server Started"));