// Router for cake related requests
const express = require('express');

// Create the Router
const router = express.Router();

// cs-linuxlab-21.stlawu.edu:3000/cakes/
router.get('/', function(request, response) {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
});
router.get('/:id', function(request, response, next){
  if(request.params.id === 'vanilla') {
    response.send('Vanilla cakes');
  }
  else if(request.params.id === 'chocolate') {
    response.send('Chocolate cakes');
  }
  else{
    next(); // Pass on this request
  }
});

module.exports = router;
