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
            <div className="random-drink_header"><Button id="randomButtonDrink" onClick={handleClick} variant="link" size ="lg" block>MIX IT UP!</Button></div>
          {
            drink && (
              <div id="randomButtonDiv">
                <div id="randombuttonImgParent">
                  <img id="randomButtonImg" src={drink.strDrinkThumb} alt="random " />
                  <p id="randomDrinkTextId">{drink.strDrink}</p>
                    <h5 id="ingredients">Ingredients:</h5>
                  {(drink.ingredients || []).map(({ ingredient, measure, }, i ) => <p key={i} id="ThankGoodness4Tommy"> -{ingredient} {measure ? `-> ${measure}` : ''}</p>)}
                  <button className="exit_button" onClick={() => setDrink(null)}>Exit</button>
                </div>
              </div>

         )
          }
        </div>
      );

}

export default RandomButton;
