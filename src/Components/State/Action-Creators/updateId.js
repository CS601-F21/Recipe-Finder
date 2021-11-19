const updateId = () => {
    return (dispatch) => {
        dispatch({
            type: "updateId",
        })
    }
}

export { addIngredient }