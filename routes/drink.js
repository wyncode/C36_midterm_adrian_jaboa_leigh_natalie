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


router.get('/api/search', async (req, res, next) => {
  const recipeName = await req.query.recipe
  console.log(recipeName)
  const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${recipeName}`)

  res.json(data)
})

module.exports = router;
