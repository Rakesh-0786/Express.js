require('dotenv').config;

const Port=process.env.Port || 8000;

const app=require('./app.js');

app.listen(Port, () =>{
    console.log(`Server is Listening at http://localhost:${Port}`);
});





