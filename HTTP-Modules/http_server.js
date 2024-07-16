//  create a  server using node.js with http-module

// server with http module

// how to handle different URLs in Node.js
// In node.js different URLs can be handle using conditional statement and http module.

//  it is very hard to handle multiple path in node.js  So for handling complex or multiple path or maintain the complexity there is a framework or backened framwork to handle this.
 

const { error } = require('console');
const http=require('http');

const server=http.createServer((req,res) =>{
    // Home page
    // About Page
    // Contact Page
    // Product Page
    // Rest ... > Error

    if(req.url=='/'){
       res.statusCode=200;
       res.setHeader('Content-Type','text/plain');
       res.end("Welcome to Node Js server by Rakesh Kumar");

    } else if(req.url=='/about'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('About Page!');

    } else if(req.url=='/contact'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain ')
        res.end('Contact Page');

    } else if(req.url=='/product'){
        const options={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        
        const apiReq=http.request(options, (apiReq) => {
            apiReq.on('data',(data) =>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.end(data.toString());
                // console.log(data.toString());
            })
        });
        apiReq.on("error", () =>{
            console.log(e);
        });
        
        apiReq.end();

    } else {
        res.statusCode=500;
        res.setHeader('Content-Type','text/plain');
        res.end("Server Error!");
    }
});


//     res.statusCode=500;
//     // res.setHeader('Content-type','text/plain');
//     res.setHeader('Content-type','application/json');
// //    res.end("Node Server Created By Rakesh Kumar!");
// res.end(JSON.stringify({error:"Server Error!"}));
// });

const PORT=5000;
const HOSTNAME='localhost';

server.listen(PORT,() =>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})

