import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

function GinCards() {
  const [drinkData, setDrinkData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        // {...props}
        show={open}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
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

  const getDrink = async () => {
    const { data } = await axios.get(' /api/search/gin');
    setDrinkData(data.drinks);
    console.log(data);
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div id="card-parent">
      {drinkData &&
        drinkData.map(drink => {
          return (
            <React.Fragment key={drink.idDrink}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drink.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                  <Button onClick={handleOpen} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>

              <MyVerticallyCenteredModal
                show={handleOpen}
                onHide={handleClose}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default GinCards;
