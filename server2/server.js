const http = require('http');

http.createServer((req, res) => {
  res.write('server 2');
  res.end();
}).listen(4002);