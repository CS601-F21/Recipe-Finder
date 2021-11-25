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
    
}

const reducer = (state = defaultState, action) => {
    // console.log(state)
    let {ingredients, suggestedRecipe} = state;
    let newState ={};
    let ingredient_list = [];
    switch (action.type) {
        case "addIngredient" :
            let newIngredient = action.payload;
            // console.log("state is ");
            // console.log(state);
            // let {ingredients, suggestedRecipe} = state;
            if (ingredients == undefined){
                ingredients = new Set();
            }
            ingredients.add(newIngredient.ingredientsToBeAdded);
            // console.log(`all ingredients is`);
            // console.log(ingredients);

            /*
                TODO:
                do api search here, and pass the ingredientSet as the arguments
                // suggestedRecipes.add()//json object we got from api call 
            */

            /** Temp Code since we do not have an API right now */
            let tempRandomIngredientsSet = new Set();
            tempRandomIngredientsSet.add("paneer")
            tempRandomIngredientsSet.add("tomato")
            tempRandomIngredientsSet.add("onion")
            tempRandomIngredientsSet.add("cashew")

            let recipe = {
                "recipeName" : "lol",
                "timeTaken" : "20 mins",
                "difficulty" : "3/5",
                "rating" : "5/5",
                "tasteProfile" : "sweet",
                "ingredients" : tempRandomIngredientsSet //random ingredients for now
            }

            if (suggestedRecipe == undefined){
                suggestedRecipe = [];
            }

            console.log("gonna send the following array");
            console.log(ingredients)
            ingredient_list = Array.from(ingredients)

            /**
             * ACTUAL POST REQUEST BEING MADE HERE
             */
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "ingredients": ingredient_list })
            };

            fetch('http://127.0.0.1:5000/', requestOptions)
            .then(response => console.log(response))
            // .then(data => this.setState({ postId: data.id }));

            /**
             * ACTUAL POST REQUEST END
             */

            suggestedRecipe.push(recipe);

            newState = {
                "ingredients" : ingredients,
                "suggestedRecipe" : suggestedRecipe
            }

            // console.log("the new state is ");
            // console.log(newState.ingredients);


            return ( newState )

        case "removeIngredient":
            let ingredientToBeRemoved = action.payload.ingredientToBeRemoved;
            console.log(`going to remove ${ingredientToBeRemoved}`);
            
            ingredients.delete(ingredientToBeRemoved);
            // console.log("remaining ingredients are ");
            // console.log(ingredients);

            //iterating backwards since it helps us avoid the pitfall of missing an 
            //element after splicing
            for (let i = suggestedRecipe.length -1; i >= 0; i--){
                let recipe = suggestedRecipe[i];
                console.log(`recipe is`);
                console.log(recipe);
                if (recipe.ingredients.has(ingredientToBeRemoved)) {
                    suggestedRecipe.splice(i, 1);
                }
            }

            newState = {
                "ingredients" : ingredients,
                "suggestedRecipe" : suggestedRecipe
            }

            return ( newState )
        // /**
        //  * TODO THIS WHOLE THING
        //  */
        // case "updateId":

        default :
        return state;

    }
}

export default reducer;
