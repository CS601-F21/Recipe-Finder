import { Store } from '../Store';


const getSuggestions = async () => {

    // /**
    // * The payload (ingredient) is going to be an object of the following format
    // * {
    // *  'ingredientsToBeAdded' : string //string that the user has input
    // * }
    // */
    // console.log(`action taker addIngredient got following ingredient`);
    // console.log(ingredient);

    /**
     * No payload for getting suggestions as we have already updated the state of the ingredient set
     */

    //before we do a call to the backend server, we need to get the list of current ingredients the
    //user has already given to us before, for that we need access to the current state, which contains 
    //the current ingredients the user has, as well as the list of suggestions for the user
    let state = Store.getState(); 

    //first we need to get the list of current ingredients the user has
    let ingredient_list =  Array.from(state.mainState.ingredients);

    //setting up post body
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "ingredients": ingredient_list})
    };

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

    //concatenating this way ensures that we have the absolute matches first
    //followed by the potential matches
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
        'suggestion' : suggestions,
    }

    //addIngredient and updateSuggestions are two different actions and have two different reducers
    const objToBeReturned = (dispatch) => {
        dispatch({
            type : "updateSuggestions",
            payload : dispatchObject
        })
    }

    return objToBeReturned;
}

export { getSuggestions }

// export { addIngredient }