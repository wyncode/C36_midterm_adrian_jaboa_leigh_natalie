const handleDrinkIngredients = drink => Object.keys(drink).reduce((acc, drinkKey) => {
    if (!(drinkKey.includes('Ingredient') || drinkKey.includes('Measure'))) return acc;

    const value = drink[drinkKey]
    if (!value) return acc;

    if (drinkKey.includes('Ingredient')) {
        const index = drinkKey.replace('strIngredient', '');
        acc[index - 1] = { ...acc[index - 1], ingredient: drink[drinkKey] }
    } 

    if (drinkKey.includes('Measure')) {
        const index = drinkKey.replace('strMeasure', '');
        acc[index - 1] = {  ...acc[index - 1], measure: drink[drinkKey] }
    }
    
    return acc;
  }, []) 


  module.exports.handleDrinkIngredients = handleDrinkIngredients