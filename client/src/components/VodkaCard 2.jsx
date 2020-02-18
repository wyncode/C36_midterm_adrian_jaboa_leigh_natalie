import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function VodkaCards() {
  const [drinkData, setDrinkData] = useState([]);

  const getDrink = async () => {
    const { data } = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka'
    );
    setDrinkData(data.drinks);
    console.log(data.dinks, 'wtf');
  };

  useEffect(() => {
    getDrink();
  }, []);
  return (
    <div id="card-parent">
      {drinkData.map(drink => {
        return (
          <React.Fragment>
            <CardGroup id="card" style={{ width: 200, margin: 15 }}>
              <Card
                className="p-3"
                style={{ width: 300, margin: 0, padding: 20 }}
              >
                <Card.Img variant="top" src={drink.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>
                    <a>{drink.strDrink}</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default VodkaCards;
