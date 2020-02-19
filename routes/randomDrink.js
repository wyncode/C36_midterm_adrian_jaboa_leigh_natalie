const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { handleDrinkIngredients } = require('./utilities');


router.get('/api/random', async (_, res) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  axios
    .get(url)
    .then(function(response) {
      const drink = response.data.drinks[0];
      const ingredients = handleDrinkIngredients(drink);
      res.json({ ...drink, ingredients });
    })
    .catch(function(error) {
      res.json(error);
    });
  // .finally(function() {
  //   // always executed
  // });
});

module.exports = router;
