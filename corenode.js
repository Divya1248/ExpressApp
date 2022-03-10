const http = require("http");

let app = http.createServer((req, res) => {
    res.writeHead(200, "ok", { "content-type": "text/html" });
    res.end("")
})
app.listen(5000, err => {
    if (err) throw err;
    console.log("server is runing port number 5000")
})