const http = require("http");
const routes = require("./route");

console.log(routes.sometext);
const server = http.createServer(routes.requestHandler);

server.listen(4000, () => {
  console.log("server has started");
});
