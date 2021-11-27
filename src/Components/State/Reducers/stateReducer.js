import _ from 'lodash';
/*
    This is the state reducer for our program, the default state will just 
    be an object which has two objects in turn.
    The objects are defined as :
        1) ingredients => This is a set of all the ingredients that the user
                          has available
        2) suggestedRecipes => This is a list of all the recipes the user can 
                           make with the ingredients they have
            Breakdown of the recipe object :
                The entries in the suggestedRecipe list will be objects with 
                properties about the recipe.
                The following are the properties :
                    a) Image Source
                    b) Recipe Name
                    c) Cooking Time
                    d) Difficulty
                    e) Rating
                    f) Taste Profile
                    g) Ingredients
                The final property ingredients is what we will use for deleting an
                item as well. The ingredients  will be in a set, and everytime the 
                user deletes an ingredient, we will search through the set
                recipe.ingredient and delete every item which the given ingredient.
    
    We can also make our api calls from this file itself, as everytime the user enters
    an ingredient, we make an api call to see if we find any match.
*/
// let tempRandomIngredientsSet = new Set();

// let recipe = {
//     "recipeName" : "Daal",
//     "timeTaken" : "20 mins",
//     "difficulty" : "2/5",
//     "rating" : "5/7",
//     "tasteProfile" : "sweet",
//     "ingredients" : tempRandomIngredientsSet //random ingredients for now
// }


// let defaultState = {
//     "ingredients" : tempRandomIngredientsSet,
//     "suggestedRecipe" : [
//         recipe,
//     ]
// }

let defaultState = {
    "ingredients" : new Set(),
    "suggestedRecipe" : [],
    "currentRecipe" : {}
}


const reducer = (state = defaultState, action) => {

    //we have two main states, the ingredients, which is the list of ingredients the user has
    //the second is suggested recipes, which is the suggestion which we get from the backend
    let {ingredients, suggestedRecipe} = state;

    //this is the new state, we will be returning, this is done because in redux, you cannot directly make a
    //change to a state
    let newState ={};

    switch (action.type) {
        /**
         * The payload we will recieve will be an object having two keys, the ingredient key and the suggestions key.
         * The ingredient will be the list of ingredient we have to update the state with.
         * The suggestions will be a list of json objects which will have all the suggested recipes, we will use this list of of objects
         *  and update the state of the suggestedRecipe list using this
         */
        case "addIngredient" :
            var payload = action.payload;
            var receivedIngredients = payload['ingredients'];

            console.log("received ingredients from state as ");
            console.log(ingredients);
            var newIngredients = Array.from(ingredients)
            for (let i = 0; i < receivedIngredients.length; i++){
                newIngredients.push(receivedIngredients[i])
            }
            
            //the state object has the ingredient key, which has to be a set
            var newSet = new Set(newIngredients);
            state = {
               "ingredients"  : newSet,
               "suggestedRecipe" : suggestedRecipe
            }
            return state;
        
        case "updateSuggestions" :
            payload = action.payload;
            var suggestions = payload['suggestion']

            state = {
                "ingredients"  : ingredients,
                "suggestedRecipe" : suggestions,
             }
             return state;

        case "removeIngredient":
            let ingredientToBeRemoved = action.payload.ingredientToBeRemoved;
            console.log(`going to remove ${ingredientToBeRemoved}`);
            
            //ingredients is the state ingredients defined above
            ingredients.delete(ingredientToBeRemoved);

            // console.log("remaining ingredients are ");
            // console.log(ingredients);

            //iterating backwards since it helps us avoid the pitfall of missing an 
            //element after splicing
            for (let i = suggestedRecipe.length -1; i >= 0; i--){
                let recipe = suggestedRecipe[i];
                console.log(`recipe is`);
                console.log(recipe);
                if (recipe.ingredients.includes(ingredientToBeRemoved)) {
                    suggestedRecipe.splice(i, 1);
                }
            }

            newState = {
                "ingredients" : ingredients,
                "suggestedRecipe" : suggestedRecipe,
            }

            return newState
        default :
        return state;

    }
}

export default reducer;
