// Importing dotenv and configuring it to load environment variables from a .env file
require('dotenv').config();
// console.log(process.env) //remove this after you've confirmed it is working
// console.log("Hello nancy");

const express = require('express');
// import express from "express";

const app = express();
//math.api, Math.random use -  most powerfull

// Define the port to listen on, using the environment variable PORT or defaulting to 4000
// const port = process.env.PORT || 4000;
const port = 4000;
// const port = 3000; port pe listen

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('nancydotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login on this port 4000</h1>');

});

// Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`);
// });
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`);
});
