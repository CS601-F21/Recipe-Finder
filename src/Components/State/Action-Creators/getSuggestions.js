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
    let ingredientList =  Array.from(state.mainState.ingredients);

    //setting up post body
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "ingredients": ingredientList})
    };

    const request = await fetch('http://127.0.0.1:5000/', requestOptions);

    const response = await request.json();

    console.log("got back the following response");
    console.log(response);
    

    /**
    *  response is an object with two keys, absolute_match and potential_match
    *  absolute match and potential match are arrays of json objects
    *  the keys are
    *          {"name" : 1, "id" : 0, "minutes" : 1, "tags" : 1, "nutrition" : 1, "n_steps" : 1, "steps" : 1, 
                            "description" : 1, "ingredients" : 1, "n_ingredients" : 1, availableIngredients : 1}
                where tags, steps and ingredients are arrays
                      nutrition is an object
                      everything else is a string
    *                      
    */

    let absoluteMatch = response['absoluteMatch'];
    let potentialMatch = response['potentialMatch'];

    //concatenating this way ensures that we have the absolute matches first
    //followed by the potential matches
    let suggestions = absoluteMatch.concat(potentialMatch);
    


    /**
        * The payload we will send to the reducer will be of the following format 
        * payload : object 
        *     {
        *         ingredients : [] //list of ingredients the user has input
        *         suggestedRecipes : [] //list of json objects and each json object is a recipe
        *     }
    */

    const dispatchObject = {
        'ingredients' : ingredientList,
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