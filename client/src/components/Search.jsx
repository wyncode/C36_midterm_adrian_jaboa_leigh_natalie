import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal({ activeDrink, onHide }) {
  if (!activeDrink) return null;

  const {
    strDrink: drinkTitle,
    strDrinkThumb: drinkPicture,
    ingredients,
    strInstructions: drinkInstructions
  } = activeDrink;

  return (
    <Modal
      id="drinkModal"
      show={activeDrink}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header id="modalHead" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {drinkTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          style={{ height: '150px', width: '150px', textAlign: 'center' }}
          src={drinkPicture}
          alt={drinkTitle}
        ></img>
        <h3>Instructions:</h3>
        <p>{drinkInstructions}</p>
        <h3>Ingredients:</h3>
        {ingredients.map(({ ingredient, measure }) => (
          <p>
            {ingredient} {measure ? `-> ${measure}` : ''}
          </p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Search({ match }) {
  const [drinks, setDrinks] = useState([]);
  const [activeDrink, setActiveDrink] = useState(null);

  const handleOpen = drink => setActiveDrink(drink);

  const handleClose = () => setActiveDrink(null);

  useEffect(() => {
    axios
      .get(`/api/search?recipe=${match.params.searchTerm}`)
      .then(res => setDrinks(res.data.drinks || []));
  }, []);
  return (
    <div id="card-parent">
      {drinks &&
        drinks.map(drink => {
          return (
            <React.Fragment key={drink.idDrink}>
              <Card className="recipes__box" style={{ width: '18rem' }}>
                <Card.Img
                  className="recipes__box-img"
                  variant="top"
                  src={drink.strDrinkThumb}
                />
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                  <Button onClick={() => handleOpen(drink)} variant="primary">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
      <MyVerticallyCenteredModal
        show={handleOpen}
        onHide={handleClose}
        activeDrink={activeDrink}
      />
    </div>
  );
}
export default Search;
