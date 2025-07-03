// const http = require('http');

// const server = http.createServer((request, response) => {
//   console.log(request.method, request.url, 'request received');
//   const url = request.url;
//   if(url === '/' && request.method === 'GET') {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Welcome to the home page!');
//   } else if (url === '/api' && request.method === 'GET') {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     const obj = {
//       name: 'John Doe',
//       age: 30,
//       occupation: 'Software Developer'
//     };
//     response.end(JSON.stringify(obj));
//   } else {
//     response.writeHead(404, { 'Content-Type': 'text/plain' });
//     response.end('404 Not Found');
//   }

// })

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server is now listening on port ${port}`);
// })

const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("helloworld \n");
  response.write("hello world from node.js");
  response.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
