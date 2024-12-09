const http = require('node:http');

// eslint-disable-next-line no-unused-vars
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen('1245', () => {
  console.log('...');
});

module.exports = app;
