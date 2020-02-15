const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/drink', async (req, res, next) => {
  const drinkId = req.query.id;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  axios
    .get(url)
    .then(function(response) {
      const arr = response.data;
      res.json(arr);
    })
    .catch(function(error) {
      res.json(error);
    });
});

module.exports = router;
