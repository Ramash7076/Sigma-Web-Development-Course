// const { createServer } = require('node:http');

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello World</h1>'); 
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, e} from "./mymodules.js"
// console.log(a, b, e);

// import Ramash from "./mymodules.js"
// console.log(Ramash);

// (function(exports, require, module, __filename, __dirname){

//     // Module code actually lives here

// });

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename);



