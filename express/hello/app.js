// Hello World web server
const express = require('express');

// Create the server (Traditionally named app)
const app = express();

// Respond to a single request
app.get('/', function(request, response) {
  response.send('Hello Amber');
});

// Start the server - 3000 is the port number
app.listen(3000);
console.log('Server is ready.');
