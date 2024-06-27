const http = require("http")

http
.createServer((req, res)=>{
    // send the HTTP header
    // HTTP Status: 200 : OK 
    // Content Type: text/plain
res.writeHead(200, {"content-type": "text/html"})
// send the response body as "Hello world"
res.write(`<h1>Hello TBOY!</h1>`)
res.end()
}).listen(3000)

console.log("Server is running on port http://localhost:3000/");