// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the comments page
// 5. Create a route for the 404 page
// 6. Start and listen on the server

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 2. Create a route for the home page
  if (req.url === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
  // 3. Create a route for the about page
  else if (req.url === '/about') {
    fs.readFile('./views/about.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
  // 4. Create a route for the comments page
  else if (req.url === '/comments') {
    fs.readFile('./views/comments.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
  // 5. Create a route for the 404 page
  else {
    fs.readFile('./views/404.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
});

// 6. Start and listen on the server
server.listen(3000, 'localhost', () => {
  console.log('Server started on http://localhost:3000');
});