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
let tempRandomIngredientsSet = new Set();
tempRandomIngredientsSet.add("turmeric")
tempRandomIngredientsSet.add("honey")
tempRandomIngredientsSet.add("almond")
tempRandomIngredientsSet.add("potatoe")

let recipe = {
    "recipeName" : "Daal",
    "cookingTime" : "20 mins",
    "difficulty" : "2/5",
    "rating" : "5/7",
    "ingredients" : tempRandomIngredientsSet //random ingredients for now
}


let defaultState = {
    "ingredients" : tempRandomIngredientsSet,
    "suggestedRecipes" : [
        recipe,
    ]
}

const reducer = (state = defaultState, action) => {
    // console.log("aaaaaaaaaaaaaa")
    // console.log(state)
    switch (action.type) {
        case "addIngredient" :
            let newIngredient = action.payload;

            let [ingredients, suggestedRecipes] = state;
            ingredients.add(newIngredient);

            /*
                TODO:
                do api search here, and pass the ingredientSet as the arguments
                // suggestedRecipes.add()//json object we got from api call 
            */

            /** Temp Code since we do not have an API right now */
            tempRandomIngredientsSet = Set();
            tempRandomIngredientsSet.add("paneer")
            tempRandomIngredientsSet.add("tomato")
            tempRandomIngredientsSet.add("onion")
            tempRandomIngredientsSet.add("cashew")

            recipe = {
                "recipeName" : "Paneer Butter Masala",
                "cookingTime" : "20 mins",
                "difficulty" : "3/5",
                "rating" : "5/5",
                "ingredients" : tempRandomIngredientsSet //random ingredients for now
            }

            suggestedRecipes.add(recipe);

            let newState = {
                "ingredients" : ingredients,
                "suggestedRecipe" : suggestedRecipes
            }


            return ( newState )

        case "removeIngredient":
            let ingredientToBeRemoved = action.payload;
            
            ingredients = state.ingredients;
            suggestedRecipes = state.suggestedRecipes;
            
            ingredients.remove(ingredientToBeRemoved);

            //iterating backwards since it helps us avoid the pitfall of missing an 
            //element after splicing
            for (let i = suggestedRecipes.length -1; i >= 0; i--){
                recipe = suggestedRecipes[i];
                if (recipe.ingredients.contains(ingredientToBeRemoved)) {
                    suggestedRecipes.splice(i, 1);
                }
            }

            newState = {
                "ingredients" : ingredients,
                "suggestedRecipe" : suggestedRecipes
            }

            return ( newState )
        default :
        return state;

    }
}

export default reducer;
