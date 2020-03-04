// Router for pie related requests
const express = require('express');

// Create the Router
const router = express.Router();

// cs-linuxlab-21.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/cakes/apple">Apple</a></li>
      <li><a href="/cakes/cherry">Cherry</a></li>
    </ul>
  `);
});
router.get('/:id', function(request, response, next){
  if(request.params.id === 'apple') {
    response.send('Apple pies');
  }
  else if(request.params.id === 'cherry') {
    response.send('Cherry pies');
  }
  else{
    next(); // Pass on this request
  }
});

module.exports = router;
