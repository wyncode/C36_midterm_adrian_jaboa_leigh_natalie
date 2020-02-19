const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { handleDrinkIngredients } = require('./utilities');

router.get('/api/drink', async (req, res, next) => {
  const drinkId = req.query.id;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  axios
    .get(url)
    .then(function(response) {
      const drink = response.data;
      const ingredients = handleDrinkIngredients(drink);
      res.json({ ...drink, ingredients });
    })
    .catch(function(error) {
      res.json(error);
    });
});

module.exports = router;
