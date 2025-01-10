# Node.js Server Bug

This repository demonstrates a common bug encountered when developing Node.js HTTP servers: the server starts, but it either doesn't respond to requests at all or returns unexpected responses.  The `bug.js` file contains the erroneous code.  The solution is provided in `bugSolution.js`.

## Bug Description
The server should respond with 'Hello, World!' when a request is made to `http://localhost:8080`. However, in `bug.js` either no response or an unexpected response is returned.  This can stem from various issues like improper error handling or incorrect use of the `http` module.

## Solution
The `bugSolution.js` file fixes this issue ensuring the server properly handles incoming requests and sends the correct response.