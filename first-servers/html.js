$ touch html.js
$ nano html.js
const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
$ cp html.js csv.js
$ cp html.js json.js
$ cp html.js htmlFile.js
$ cp html.js routes.js
