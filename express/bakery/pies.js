// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const pies = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
];

// cs-linuxlab-##.stlawu.edu:3000/piess/
router.get('/', function(request, response) {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/pies/apple">Apple</a></li>
      <li><a href="/pies/cherry">Cherry</a></li>
    </ul>
  `);
});

// cs-linuxlab-##.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {

  // Pretend database lookup
  const pie = pies.find(pie => pie.id === request.params.id);

  if (!pie) {
    next(); // Pass on this request
  } else {
    response.render('pies/detail', {pie: pie});
  }
});

module.exports = router;
