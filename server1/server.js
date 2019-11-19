const http = require('http');

http.createServer((req, res) => {
  res.write('server 1');
  res.end();
}).listen(4001);