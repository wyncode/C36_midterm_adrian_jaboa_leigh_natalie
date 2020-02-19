const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { handleDrinkIngredients } = require('./utilities');

router.get('/api/drinks', async (req, res, next) => {
  const userChoice = req.query.drink;

  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userChoice}`;

  axios
    .get(url)
    .then(function(response) {
      const arr = response.data.drinks.map(drink => ({
        ...drink,
        ingredients: handleDrinkIngredients(drink)
      }));
      res.json(arr);
    })
    .catch(function(error) {
      // handle error
      res.json(error);
    });
  // .finally(function() {
  //   // always executed
  // });
});

router.get('/api/category', async (req, res, next) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

  axios
    .get(url)
    .then(function(response) {
      const arr = response.data;
      res.json(arr);
    })
    .catch(function(error) {
      // handle error
      res.json(error);
    });
});

module.exports = router;
