const http = require('http');

const server = http.createServer((req, res)=> {

  // Write status code and HTTP headers
  res.writeHead(200, {
      'Content-Type': 'text/html',
      'Ex2-My-Fantastic-Header': 'Hello World my header!',
      'Request-Url': req.url
    }
  );

  // Write a response to the client
  res.write(`Hello World!\n`);
  res.write(`Used method: ${req.method}`);

  // End the response
  res.end();
});

server.listen(8080);
