// Http modules:
// Hypertext transport protocol modules of Nodejs
// HTTP modules is the core modules of Nodejs
// Http modules provide way to create server and handle http request and response
// It exposes various classes , functions and properties to work with HTTP 
// To use the HTTP server and clients one must require (node:http or require).



// Feature of HTTP methods:
// Create an HTTP server using http.createServer()
// Listen to incomming request using the server.listen() method.
// Handle incoming requests and send responses using the request and response object passed to the server's request event
//Set Headers on the response object using response.setHeader()
// Write data to the response object using response.write()
// End the Responde using response.end()
// Send an HTTP request to a server using http.request()
// Receice a response fron a server using the response event http.clientRequest object returned  by http.request()


// Server with HTTP module:
const http=require('http');
const http=require('node:http'); //both getting the http module

const server=http.createServer((req,res) =>{ //create server
    res.statusCode=200; //set to 200 to indicate it is successful
    res.setHeader('Content-type','text/plain'); //set content type to plain text
    res.end("Hello "); //ent with hello world text return
});
const Port=3000; //initializing the port no.
const HOSTNAME='localhost';  //define the hostname

server.listen(Port, () =>{ //list to the define port.
    console.log(`Server running at ${HOSTNAME}: ${Port}`);
});