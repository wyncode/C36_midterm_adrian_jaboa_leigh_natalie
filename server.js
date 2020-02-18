if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const drinksRouter = require('./routes/drinks');
const randomRouter = require('./routes/randomDrink');
const drinkRouter = require('./routes/drink');

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(express.json());

app.use(drinksRouter);
app.use(randomRouter);
app.use(drinkRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
