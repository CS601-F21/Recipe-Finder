const removeIngredient = (ingredient) => {
    return (dispatch) => {
        dispatch({
            type: "removeIngredient",
            payload : ingredient
        })
    }
}

export { removeIngredient }