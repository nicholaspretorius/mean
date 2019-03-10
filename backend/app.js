const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Hello');
  next();
});

app.use((req, res, next) => {
  res.send('My name is Nicholas!');
});

module.exports = app;
