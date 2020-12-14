const http = require('http');
const path = require('path');
const express = require('express');
const config = require('./util/config');

const PORT = config.getConfig().port || 3000;


const apiVerson1 = require(path.resolve(__dirname, "./routes/api1"))
const app = express();

app.use('v1', apiVerson1)

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('server is listening on %s', PORT);
})