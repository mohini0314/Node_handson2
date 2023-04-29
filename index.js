const express = require('express');

const server = express();
const port = 9000;

server.get('/', (req,res)=>{
    res.end('<h1>Node JS</h1>');
})

server.get('/api/main', (req,res)=>{
    const title = "What is Express?";
    const express = "Express is a popular and widely used Node.js framework for building web applications and APIs.";
    res.send([title,express]);
})

server.listen(9000);