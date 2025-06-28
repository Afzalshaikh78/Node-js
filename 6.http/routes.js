const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;
  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('Welcome to the home page!');
    
  }else if( url === '/about') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('This is the about page.');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found'); 
  }
  
})

const port = 3000;

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);

})