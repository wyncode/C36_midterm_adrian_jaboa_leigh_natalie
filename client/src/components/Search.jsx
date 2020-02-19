import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

function Search({ match }) {
  const [drinks, setDrinks] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeDrink, setActiveDrink] = useState({});
  const handleOpen = drink => {
    setActiveDrink(drink);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        show={props.open}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.activeDrink.strDrink}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drink.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                  <Button onClick={handleOpen} variant="primary">
                    Details
                  </Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={handleOpen}
                onHide={handleClose}
                open={open}
                activeDrink={activeDrink}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
}
export default Search;
