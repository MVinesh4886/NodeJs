const http = require("http");
const server = http.createServer(function (req, res) {
  console.log("Krishna");
});

server.listen(4000, "127.0.0.1");
console.log("server has started");
