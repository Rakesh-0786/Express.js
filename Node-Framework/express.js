const express=require('express');

const app=express();

app.get('/', (req,res) =>{
    res.send("Hello!");
})

app.get('/about', (req,res) =>{
    res.send("About Page!");
})

app.get('/contact', (req,res) =>{
    res.send("Contact Page!");
})




const port=2000;
const HOSTNAME='localhost';

app.listen(port,() =>{
    console.log(`Server running at ${HOSTNAME}:${port}`);
})