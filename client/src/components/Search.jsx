import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Search({match}) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios.get(`/api/search?recipe=${match.params.searchTerm}`)
      .then(res => setDrinks(res.data.drinks || []))
  }, [])
  
  return (
    <div style={{ marginTop: '300px' }}>
      {drinks.map(drink => <h1>{drink.strDrink}</h1>)}
    </div>
  );
  
}

export default Search;
