import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class RandomButton extends React.Component {
    constructor(props) {
      super(props);
    }
    handleClick = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.strDrink }));
      console.log("TEST")
    }



    render() {
      return (
        <div>
          <ButtonToolbar>
  {/* <button onClick={this.handleClick}> CLICK ME </button> */}
  <Button onClick={this.handleClick} variant="link" size ="lg" block>Discover</Button>
</ButtonToolbar>
        </div>
      );
    }
 
}



export default RandomButton;
