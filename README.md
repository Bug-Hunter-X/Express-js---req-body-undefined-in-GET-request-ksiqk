# Express.js - req.body undefined in GET request
This repository demonstrates a common error in Express.js applications where developers attempt to access `req.body` in a GET request.  `req.body` is intended for POST, PUT, and other requests that send data in the request body.  GET requests typically pass data through query parameters, which are accessible via `req.query`.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected implementation.