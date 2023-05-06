$ nano json.js
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
};
const requestListener = function (req, res) {
  res.setHeader("Content-Type:","application/json");
  res.writeHead(200);
  res.end(`{"message":"This is a JSON response"}`);
};
