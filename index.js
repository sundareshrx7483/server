const http = require('http');



const server = http.createServer((req,res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.end("Hi! I'm Server");
})
server.listen(3000, (port) => {
    
    console.log(`server running on 3000`)
})