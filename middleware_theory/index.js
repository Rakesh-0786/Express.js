
// middleware:
// The middleware in Node.js is a function that will have all the 
// access for requesting an object , responding to an object, and moving to
//  the next middleware function in the application requrest -response cycle.
 

// Express serves as a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

// Middleware gets executed after the server receives the request and before the controller actions send the response. Middleware has and access to the request object, responses object, and next, it can process the request before the server sends a response. An Express-based application is a series of middleware function calls. In this article, we will discuss what is middleware in express.js.

// https:media.geeksforgeeks.org/wp-content/uploads/20211007172251/middleware.png

// What is Middleware in Express JS
// Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. 
// They are the functions that are invoked by the Express.js routing layer.

// It is a flexible tool that helps in adding functionalities like logging, authentication, error handling, and more to Express applications. 


// MIddleware Syntax:
// The basic syntax for the  middleware function is:

// app.get(path, (req, res,next) => {}, (req,res) =>{})

// Middleware functions take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle, i.e., two objects and one function.

// Middleware functions execute some code that can have side effects on the app and usually add information to the request or response objects. They are also capable of ending the cycle by sending a response when some condition is satisfied. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, next().

// The middle part (req,res,next)=>{} is the middleware function. Here we generally perform the actions required before the user is allowed to view the webpage or call the data and many other functions. So let us create our own middleware and see its uses.


// Using Middleware in Express
// Follow the steps below to use Middleware in Express.js:

// Step 1: Go to your project directory and enter the following command to create a NodeJs project. Make sure that NodeJs is installed in your machine.

// npm init -y
// Step 2: Install two dependencies using the following command.

// npm install express nodemon
// Step 3: In the scripts section of the package.json file, add the following code line.

// "start": "nodemon index.js", 
// Step 4: Create an index.js file in the directory. Make sure that it is not inside any subdirectories of the directory you are working in.

// Step 5: Now we will set up our express app and send a response to our server. Here is the code for the index.js file.

const express = require("express");
const app = express();

const port = process.env.port || 3000;
app.get("/", (req, res) => {
	res.send(`<div>
	<h2>Welcome to GeeksforGeeks</h2>
	<h5>Tutorial on Middleware</h5>
</div>`);
});
app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});


// Creating a Middleware in the app.get() function, modify accordingly to the following code.

app.get(
	"/r",
	(req, res, next) => {
		console.log("Hey!! This Side From Rakesh!");
		next();
	},
	(req, res) => {
		res.send(
			`<div>
				<h2>Welcome to GeeksforGeeks</h2>
				<h5>Tutorial on Middleware</h5>
			</div>`
		);
	}
);


// Types of Middleware
// Express JS offers different types of middleware and you should choose the middleware on the basis of functionality required.

// Application-level middleware: Bound to the entire application using app.use() or app.METHOD() and executes for all routes.
// Router-level middleware: Associated with specific routes using router.use() or router.METHOD() and executes for routes defined within that router.
// Error-handling middleware: Handles errors during the request-response cycle. Defined with four parameters (err, req, res, next).
// Built-in middleware: Provided by Express (e.g., express.static, express.json, etc.).
// Third-party middleware: Developed by external packages (e.g., body-parser, morgan, etc.).
// Middleware Chaining
// Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware processes the request.

// The next() function in the express is responsible for calling the next middleware function if there is one.

// Modified requests will be available to each middleware via the next function

// middleware chaining example
// Middleware chaining example

// In the above case, the incoming request is modified and various operations are performed using several middlewares, and middleware is chained using the next function. The router sends the response back to the browser.

// Advantages of using Middleware
// Middleware can process request objects multiple times before the server works for that request.
// Middleware can be used to add logging and authentication functionality.
// Middleware improves client-side rendering performance.
// Middleware is used for setting some specific HTTP headers.
// Middleware helps with Optimization and better performance.



/*
middleware:
Middleware is a function that executes after receiving an
 HTTP request and before sending the response. It is a type 
 of code that stands between the request and the response.

//  why we use middleware?
Middleware can be used for various tasks such as:

Request Logging: Logging all incoming requests.
Authentication and Authorization: Checking if a user is authenticated.
Error Handling: Handling and managing errors.
Data Parsing: Parsing the request body or headers.

// example:
const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next(); // Move to the next middleware or route handler
};

// Use the middleware
app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


types:

Middleware can be categorized based on their usage and functionality. Here are the different types of middleware:

1. Application-Level Middleware
This middleware is applied directly to your application using the app.use() method in Express.

Example:

javascript
Copy code
const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
    console.log('Application-Level Middleware');
    next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);
2. Router-Level Middleware
This middleware is applied to specific routers. It is used with the Express Router.

Example:

javascript
Copy code
const express = require('express');
const router = express.Router();

const routerMiddleware = (req, res, next) => {
    console.log('Router-Level Middleware');
    next();
};

router.use(routerMiddleware);

router.get('/', (req, res) => {
    res.send('Router Level');
});

const app = express();
app.use('/router', router);

app.listen(3000);
3. Error-Handling Middleware
This middleware is used to handle errors. It is defined with four arguments: err, req, res, and next.

Example:

javascript
Copy code
const express = require('express');
const app = express();

const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

app.get('/', (req, res) => {
    throw new Error('BROKEN'); // Trigger error
});

app.use(errorMiddleware);

app.listen(3000);
4. Built-in Middleware
Express comes with some built-in middleware for common tasks, such as express.static, express.json, and express.urlencoded.

Example:

javascript
Copy code
const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(3000);
5. Third-Party Middleware
Third-party middleware is created by other developers and can be installed via npm (Node Package Manager).

Example:

javascript
Copy code
const express = require('express');
const app = express();
const morgan = require('morgan'); // Third-party middleware for logging

app.use(morgan('dev')); // Use morgan for logging requests

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);
Conclusion
Middleware comes in various types, each serving specific purposes, such as application-level, router-level, error-handling, built-in, and third-party middleware. Each type helps make the application more modular, maintainable, and flexible. By understanding and utilizing different types of middleware, you can effectively manage various aspects of your application’s functionality and behavior.




//   app.use(express.json()); और app.use(cookieParser()); का उपयोग
ये दोनों लाइनें आपके Express.js एप्लिकेशन में मिडलवेयर का उपयोग करने के उदाहरण हैं। यहाँ प्रत्येक लाइन का उद्देश्य और इसका उपयोग क्यों किया जाता है, बताया गया है:

app.use(express.json());
उद्देश्य:
इस मिडलवेयर का उपयोग JSON पेलोड्स के साथ आने वाली रिक्वेस्ट्स को पार्स करने के लिए किया जाता है। यह Express में बिल्ट-इन मिडलवेयर फंक्शन है।

विवरण:

यह इनकमिंग रिक्वेस्ट्स के JSON बॉडी को पार्स करता है और पार्स किए गए डेटा को req.body पर उपलब्ध कराता है।
यह उन रिक्वेस्ट्स को हैंडल करने के लिए आवश्यक है जहां क्लाइंट JSON फॉर्मेट में डेटा भेजता है, जैसे कि API रिक्वेस्ट्स।
उदाहरण उपयोग:

javascript
Copy code
const express = require('express');
const app = express();

app.use(express.json()); // JSON बॉडी को पार्स करने के लिए

app.post('/data', (req, res) => {
    console.log(req.body); // पार्स किए गए JSON डेटा को एक्सेस करें
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use(cookieParser());
उद्देश्य:
इस मिडलवेयर का उपयोग क्लाइंट रिक्वेस्ट ऑब्जेक्ट से अटैच किए गए कुकीज को पार्स करने के लिए किया जाता है। cookieParser एक थर्ड-पार्टी मिडलवेयर है जिसे अलग से इंस्टॉल करना होता है।

विवरण:

यह रिक्वेस्ट हेडर्स से कुकीज को पार्स करता है और req.cookies में कुकी नामों से की गई ऑब्जेक्ट को पॉप्युलेट करता है।
क्लाइंट द्वारा भेजी गई कुकीज को पढ़ने के लिए उपयोगी है, जिसे विभिन्न उद्देश्यों जैसे सेशन मैनेजमेंट, ऑथेंटिकेशन और पर्सनलाइजेशन के लिए उपयोग किया जा सकता है।
इंस्टॉलेशन:
आपको cookie-parser को npm का उपयोग करके इंस्टॉल करना होगा:

bash
Copy code
npm install cookie-parser
उदाहरण उपयोग:

javascript
Copy code
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()); // कुकीज को पार्स करने के लिए

app.get('/', (req, res) => {
    console.log(req.cookies); // पार्स की गई कुकीज को एक्सेस करें
    res.send('Cookies received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
दोनों का संयोजन:
आप अपने Express एप्लिकेशन में JSON बॉडीज और कुकीज दोनों को हैंडल करने के लिए इन दोनों मिडलवेयर फंक्शंस का उपयोग कर सकते हैं।

संयुक्त उपयोग का उदाहरण:

javascript
Copy code
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json()); // JSON बॉडीज को पार्स करने के लिए
app.use(cookieParser()); // कुकीज को पार्स करने के लिए

app.post('/data', (req, res) => {
    console.log('JSON Body:', req.body); // पार्स किए गए JSON डेटा को एक्सेस करें
    console.log('Cookies:', req.cookies); // पार्स की गई कुकीज को एक्सेस करें
    res.send('Data and cookies received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
निष्कर्ष
express.json(): JSON रिक्वेस्ट बॉडीज को पार्स करने के लिए मिडलवेयर।
cookieParser(): रिक्वेस्ट हेडर्स से कुकीज को पार्स करने के लिए मिडलवेयर।
ये मिडलवेयर फंक्शंस आपके एप्लिकेशन को इनकमिंग रिक्वेस्ट्स के विभिन्न प्रकार के डेटा को हैंडल करने में मदद करते हैं, जिससे आपका Express एप्लिकेशन अधिक सक्षम बनता है।

parse ?
ChatGPT
Parsing Explained
Parsing का मतलब है डेटा को एक फॉर्मेट से दूसरे फॉर्मेट में बदलना ताकि वह डेटा आसानी से समझा और उपयोग किया जा सके। इसे उदाहरण के साथ समझें:

What is Parsing? (Parsing क्या है?)
Definition in English:
Parsing is the process of analyzing a string of symbols, either in natural language or in computer languages, to convert it into a structured format that can be easily understood and used by a computer program.

Explanation in Hindi:
Parsing वह प्रक्रिया है जिसमें किसी स्ट्रिंग या डेटा को एनालाइज़ किया जाता है और उसे एक स्ट्रक्चर्ड फॉर्मेट में बदल दिया जाता है, ताकि वह कंप्यूटर प्रोग्राम द्वारा आसानी से समझा और उपयोग किया जा सके।

Examples of Parsing
Parsing JSON
JSON Parsing:
When you receive JSON data in a request, parsing it converts the JSON string into a JavaScript object.

Example:

javascript
Copy code
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30
In the example above, JSON.parse(jsonString) takes a JSON string and converts it into a JavaScript object.

Parsing URL-encoded Data
URL-encoded Data Parsing:
When you receive data from an HTML form submission, it is often URL-encoded. Parsing it converts the string into an object with key-value pairs.

Example:

javascript
Copy code
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body); // Access parsed URL-encoded data
    res.send('Form data received');
});

app.listen(3000);
In the example above, express.urlencoded({ extended: true }) parses the URL-encoded data and makes it available in req.body.

Why Parsing is Important (Parsing क्यों महत्वपूर्ण है?)
English:
Parsing is essential because it transforms data into a format that can be processed by a program. Without parsing, raw data might be difficult to work with and could lead to errors.

Hindi:
Parsing महत्वपूर्ण है क्योंकि यह डेटा को एक ऐसे फॉर्मेट में बदलता है जिसे प्रोग्राम द्वारा प्रोसेस किया जा सके। बिना parsing के, रॉ डेटा के साथ काम करना मुश्किल हो सकता है और इससे त्रुटियाँ हो सकती हैं।

Parsing in Middleware
Express Middleware for Parsing:

JSON Parsing: app.use(express.json()) parses JSON payloads and makes the data available on req.body.
URL-encoded Parsing: app.use(express.urlencoded({ extended: true })) parses URL-encoded data from forms and makes it available on req.body.
Cookie Parsing: app.use(cookieParser()) parses cookies from the request headers and makes them available on req.cookies.
Example in Middleware:

javascript
Copy code
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(cookieParser()); // Parses cookies

app.post('/data', (req, res) => {
    console.log('JSON Body:', req.body); // Access parsed JSON data
    console.log('Cookies:', req.cookies); // Access parsed cookies
    res.send('Data and cookies received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
Conclusion (निष्कर्ष)
English:
Parsing is the process of converting raw data into a structured format that can be easily understood and used by programs. In Express, middleware like express.json(), express.urlencoded(), and cookieParser() are used to parse different types of incoming data.

Hindi:
Parsing वह प्रक्रिया है जिसमें रॉ डेटा को एक स्ट्रक्चर्ड फॉर्मेट में बदल दिया जाता है ताकि प्रोग्राम द्वारा उसे आसानी से समझा और उपयोग किया जा सके। Express में, express.json(), express.urlencoded(), और cookieParser() जैसे मिडलवेयर का उपयोग विभिन्न प्रकार के इनकमिंग डेटा को पार्स करने के लिए किया जाता है।
*/