const addIngredient = (ingredient) => {
    return (dispatch) => {
        dispatch({
            type: "addIngredient",
            payload : ingredient
        })
    }
}

export { addIngredient }