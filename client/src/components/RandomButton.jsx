import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


const RandomButton = () => {
    const [drink, setDrink] = useState(null)

    const handleClick = () => {
      fetch('/api/random')
      .then(response => response.json())
      .then(data => setDrink(data));
    }

      return (
        <div className="random-drink-container">
           <Button className="randonButtonDrink" onClick={handleClick} variant="link" size ="lg" block>Discover</Button>
          {
            drink && (
          <div id="randomButtonDiv">
            <p className="close-button" onClick={() => setDrink(null)}>X</p>
            <div id="randombuttonImgParent">
             <img id="randomButtonImg" src={drink.strDrinkThumb} alt="random " />
             <p id="randomDrinkTextId">{drink.strDrink}</p>
              <h5>Ingredients</h5>
            {(drink.ingredients || []).map(({ ingredient, measure, }, i ) => <p key={i} id="ThankGoodness4Tommy">{ingredient} {measure ? `-> ${measure}` : ''}</p>)}
             </div>
          </div>
         )
          }
        </div>
      );
 
}




export default RandomButton;
