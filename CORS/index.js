/*What is Cross Origin Resource Sharing(CORS).

Cross-Origin Resource Sharing(CORS) is an HTTP-header based mechanism that allows a server to
indicate any origins(domain, schema, or port) other than its own from which a browser should permit loading resources.

CORS (Cross-Origin Resource Sharing) is a web security
 policy that allows web browsers to securely access resources 
 on a server from a different domain than the one where the current web page is hosted.



//  How does CORS Work?
.Website on "example.com" makes a request to the API on "api.example.org"
.Before the actual request is sent , the browser sends a preflight request to the
server hosting the API("api.example.org"). This preflight is an HTTP OPTIONS request that asks the
server whether it will allow the actual request.
.The server hosting the API responds to the preflight request with a set of headers that
indicate whether the request is allowed or not. THese headers include "Access-conrol-allow -origin",
"Access-Control-Allow-Methods" and "Access-Control-Allow-Origin",
"Access-Control-Allow-Methods" and "Access-Control-Allow-Headers"
.If the server responds with headers that allow the request, the browser sends the actual request to the
Api and retrive the request data.



for example, the preflight request might look this.

OPTIONS / api/data HTTP/1.1
Host:api.example.org
Origin:https://example.com
Access-Control-Request:GET
Access-Control-Request-Headers:authorization

And the server might responds with headers like this:

HTTP/1.1 200 ok
Access-Control-Allow-origin: https://example.com
Access-Control-Allow-methods:GET,POST
Access-control-allow-headers:authorization

This indicates that the request from "example.com" is allowed, and the actual GET request API can proceed.




// Why are you getting a CORS error?
One of the top reasons for CORS errors in developement is that the server you are sending a request
 to might not include the expected access-control-allow-origin header in 
 the responses it sends back to you. Or if it does, it doesn't include your frontend app's URL in the list 
 of approved origins



//  few ways to resolve CORS erros:
1.Setting CORS headers in the API responses on the APP side.

const express=require("express");
const cors=require("cors");
const app=express();


app.use(cors);
// Your API endpoints here


2.Enabling core in server-side API:
Individual api level

app.get('/api, (req,res) =>{
    res.setHeader("Access-Control-Allow-origin","*")});

    // res.setHeader("Access-Control-Allow-Origin" ,"https://example.com") allows only the mentioned domain to access the request.
    res.setHeader("Access-Control-Allow-methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-header","Content-Type");
// Your API logic here
});

*/