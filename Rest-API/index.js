// Rest api tells which types or which format of data are trnafered 
// example like while delivered a product  we already know which type of data are like amazone, flikart and meeso 

// What is REST API?
// 1.REST stands for Representational State Transfer Interface'
// 2.API stands for Application Programming Interface
// 3.REST api is define as an interface that two computers
// systems use to exchange information securely over the internet.
// It was first introduced and defined by DR.Roy Fielding in his Doctoral dissertation in 2000.


// REST:-
// REST stands for Representational State Tranfer.
// It is an Architectural style for building distributed systems, particularly web applications.
// The idea behind REST is to provide a standard way for systems to communicate with each other over the internet, 
// using s simple and Lightweight protocol.

// REST is based on a few core principles, including-
// 1.Client-Server architecture 
// 2.Stateless communication
// 3.Resource-Based Interaction
// 4.Uniform Interface
// 5.Cacheable

// API:-
// API stands for "Application Programming Interface".
// An API is set of protocols , tools, and standard that enables the communication between different software applications.
// In other words, an API is a set of rules that developers can use to build software that communicates with another system or application.
// APIs allows developers to access certain features or data from an application without needing to understand the underlying code or infrastructure of that application.



/*Example of REST API:-
.An analogy example of RESTful API could be a restaurant menu.
.just like a restaurant menu provides a list of dishes and their descriptions, 
a RESTful API provides a list of available resources and their endpoints.
.Each dish on the menu may have different options, such as the type of meat or sauce 
each endpoint in a RESTful API may have different parameters or methods.

.When a customer orders a dish from the menu, the kitchen
prepares and serves the dish according to the customer's specifications.
Similarly, when a client application sends a rewquest to 
a Restful api the api returns the request data according
to the specified endpoint and parameters.

.Finaly, just as a restaurant menu may have different sections or different types of dishes, a RESTful API
may have different namespaces for different types of resources or functionality.





// Stateless and Stateful REST API:-
.Stateless REST API:-
A stateless REST API is an API that does not store
any client-specific data or session information between
requests. Each request contains all the necessary information
 for the server to understand and process the request, without relying
 on any previous interactions or data.

 Example:-
 AN example of a stateless REST API is a weather forecasting application.
 The Server provides weather information based on the user's request and the request
 sent to the server contains all the necessary infomation to the server to process the request.



//  Stateful REST API:-
A restful REST API is an API that maintains state or context information between requests.
THe server store information about the client and uses it to process subsequent requests.
the server store the user/client requests through cookies, token and session.

// example:- An Example of a stateful REST API is an online shopping cart application.
The server needs to maintain the state of the shopping cart between
requests. Each time the user adds  a product to the cart the server store the product information along
with the user's session information .






// Why REST API is needed:-
there are several reasons why REST API is need , some of them are as follows

1.IT is widely adopted
2.It is simple and has uniform interface based on HTTP protocol
3.It is scalable since they are stateless
4.Due to its flexibility where it can be used with different
types of data formats such as JSON or XML and can be integrated with different systems and 
technologies.


how to work REST API:-
THe REST Api works by using HTTP request methods such as GET, PUT,PATCH,DELETE
and some other http request methods.

.A client send request to the server using one of this method along with the
URL that identifies the resource and the server process the request and return
the responses that contains the requested resources.




*/