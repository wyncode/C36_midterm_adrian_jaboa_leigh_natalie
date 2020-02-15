const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/random', async (req, res, next) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  axios
    .get(url)
    .then(function(response) {
      const arr = response.data.drinks[0];
      res.json(arr);
    })
    .catch(function(error) {
      res.json(error);
    });
  // .finally(function() {
  //   // always executed
  // });
});

module.exports = router;
