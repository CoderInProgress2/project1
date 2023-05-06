$ mkdir first-servers
$ cd first-servers
$ touch hello.js
$ nano hello.js
const http = require("http");
const host ='localhost'
const port = 8000;  
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("a web server");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
$ node hello.js
$ curl http://localhost:8000
