/**
 * Author : Shubham Pareek
 * Purpose : Action to remove an ingredient
 */

const removeIngredient = (ingredient) => {
  return (dispatch) => {
    dispatch({
      type: "removeIngredient",
      payload: ingredient,
    });
  };
};

export { removeIngredient };
