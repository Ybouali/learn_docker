const http = require("http");

http.createServer(function(req, res) {

    console.log("Request received ...");
    res.end("Hello", "utf-8");
}).listen(3000);
console.log("Server listening on port 3000 ...");