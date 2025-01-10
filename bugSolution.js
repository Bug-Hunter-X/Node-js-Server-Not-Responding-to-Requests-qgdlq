const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors gracefully
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});