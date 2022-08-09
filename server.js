const express = require("express");
let path = require('path');
const app = express();

app.use(express.static(__dirname));

app.listen(3001, () => {
  console.log("Application started and Listening on port 3001");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get(/js/, function(req, res) {
  res.send(path.resolve(__dirname, 'js'));
});