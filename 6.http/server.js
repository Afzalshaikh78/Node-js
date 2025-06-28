const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req, 'requsest')
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
})

const port = 3000;
server.listen(port, () => {
  console.log(`server is now listening on port ${port}`)
})