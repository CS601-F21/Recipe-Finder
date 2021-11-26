


const addIngredient = async (ingredient) => {

    /**
    * The payload (ingredient) is going to be an object of the following format
    * {
    *  'ingredientsToBeAdded' : string //string that the user has input
    * }
    */
    console.log("got ingredient ");
    console.log(ingredient)
    let ingredient_list =  [];
    ingredient_list.push(ingredient['ingredientsToBeAdded']);
    //setting up post body
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "ingredients": ingredient_list})
    };


    // let store = Store
        // console.log('in action taker store is ')
    // console.log(store)

    const request = await fetch('http://127.0.0.1:5000/', requestOptions);

    const response = await request.json();

    /**
    *  response is an object with two keys, absolute_match and potential_match
    *  absolute match and potential match are arrays of json objects
    *  the keys are
    *          'ingredient_quantity' : object
    *                      key of object are the ingredients themselves and the 
    *                      value is the quantity for the particular ingredient
    *          'instruction' : string
    *                      is the instruction for making the recipe
    *          'ingredients' : [] Array containing all the ingredients
    *          'nutrition_value' : object
    *                      the nutrition value object has the following keys 
    *                          'energy' : int total calories
    *                          'fat', 'protein', 'salt', 'saturates', 'sugars'
    *                          all are int
    *                      
    */

    let absolute_match = response['absolute_match'];
    let potential_match = response['potential_match'];

    console.log('action taker got following response')
    console.log(response)
    let suggestions = absolute_match.concat(potential_match);


    /**
        * The payload we will send to the reducer will be of the following format 
        * payload : object 
        *     {
        *         ingredients : [] //list of ingredients the user has input
        *         suggestedRecipes : [] //list of json objects and each json object is a recipe
        *     }
    */

    const dispatchObject = {
        'ingredients' : ingredient_list,
        'suggestion' : suggestions
    }

    const objToBeReturned = (dispatch, getState) => {
        dispatch({
                type: "addIngredient",
                payload : dispatchObject
            })
        console.log("in dispatch, current state after dispatching the ingredients is");
        console.log(getState)
        dispatch({
            type : "updateSuggestions",
            payload : dispatchObject
        })
    }

    return objToBeReturned;

        // return (dispatch) => {
        //     dispatch({
        //         type: "addIngredient",
        //         payload : dispatchObject
        //     })
        // }
}

export { addIngredient }