import React from 'react';
import axios from 'axios';

function Search({ match }) {
  const userSearch = match.params.query;

  const handleClick = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${userSearch}`
      )
      .then(response =>
        console.log(
          response.data.drinks.map(eachDrink => console.log(eachDrink))
        )
      );
  };

  return (
    <div style={{ marginTop: '300px' }}>
      <button onClick={handleClick}>log it</button>
      <h1>This is a test</h1>
    </div>
  );
}

export default Search;
