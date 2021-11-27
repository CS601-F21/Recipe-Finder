import { Link } from "react-router-dom"
import { bindActionCreators } from 'redux';
import { allActions } from './State/Action-Creators/allActions'
import { useDispatch } from "react-redux";


const TimeTakenDiv = (props) => {
    return (
        <div className={["recipeTimeTake", "recipeInfo"].join(" ")}>
            <div className={["heading"].join(" ")}>
                Cooking Time :
            </div>
            <div className={["timeTaken", "info"].join(" ")}>
                {props.timeTaken}
            </div>
        </div>
    )
}

const RecipeDifficultyDiv = (props) => {
    return (
        <div className={["recipeDifficulty", "recipeInfo"].join(" ")}>
            <div className={["heading"].join(" ")}>
                Difficulty :
            </div>
            <div className={["difficulty", "info"].join(" ")}>
                {props.difficulty}
            </div>
        </div>
    )
}

const RecipeRatingDiv = (props) => {
    return (
        <div className={["recipeRating", "recipeInfo"].join(" ")}>
            <div className={["heading"].join(" ")}>
                Rating :
            </div>
            <div className={["rating", "info"].join(" ")}>
                {props.rating}
            </div>
        </div>
    )
}

const RecipeTasteProfileDiv = (props) => {
    return (
        <div className={["recipeTasteProfile", "recipeInfo"].join(" ")}>
            <div className={["heading"].join(" ")}>
                Taste Profile:
            </div>
            <div className={["tasteProfile", "info"].join(" ")}>
                {props.tasteProfile}
            </div>
        </div>
    )
}

const IngredientInformationDiv = (props) => {
    return (
        <div className = {['ingredientInformation', 'recipeInfo'].join(" ")}>
            <div className = {["test"].join(" ")} >
                {props.ingredientInformation}
            </div>
        </div>
    )
}

const RecipeDetailsContainer = (props) => {
    return (
        <div className={["recipeDetailsContainer"].join(" ")}>
            <IngredientInformationDiv ingredientInformation = {props.ingredientInformation}/>
        </div>
    )
}

const RecipeNameContainer = (props) => {
    /**
     * TODO:
     * We have a state which contains the current food item the user clicked on
     * 
     * To update the state, we add an onClick event, which updates the state accordingly. 
     * We will then call that state in the RecipePage and render the page accordingly.
     */
    return (
        <Link to = {"/recipe"} state = {props.recipeInfo} className={["recipeNameContainer"].join(" ")}>
            {props.name}
        </Link>
    )

    
}

const RecipeCaloriesContainer = (props) => {
    // <div className={["foodImageContainer"].join(" ")}>
    //                 <img className={['foodImage'].join(" ")} src={image}/>
    //             </div>

    // console.log("int calories container ");
    // console.log(props.calories.energy);

    /**
     * The nutritional information object has the following keys
     * energy
     * fat
     * protein
     * salt
     * saturates
     * sugars
     */
    return (
        <div className={["caloriesContainer"].join(" ")}>
            {/* {Math.floor(props.calories.energy)} */}
            <NutritionalInformationContainer type = "calories" value = {props.calories.energy}/>
            <NutritionalInformationContainer type = "protein" value = {props.calories.protein}/>
            <NutritionalInformationContainer type = "fat" value = {props.calories.fat}/>
            <NutritionalInformationContainer type = "salt" value = {props.calories.salt}/>
            <NutritionalInformationContainer type = "saturates" value = {props.calories.saturates}/>
            <NutritionalInformationContainer type = "sugar" value  = {props.calories.sugars}/>
        </div>
    )
}

const NutritionalInformationContainer = (props) => {
    // console.log(props.value.className())
    return (
        <div>{props.type} : {Math.floor(props.value)}</div>
    )
}

const RecipeDetails = (props) => {
    // console.log(props)
    return (
        <div className={["recipeInfoContainer"].join(" ")}>
            <div className = {['essentialInformation'].join(" ")}>
                <RecipeNameContainer name = {props.name} recipeInfo = {props}/>
                <RecipeDetailsContainer  ingredientInformation = {props.missingIngredients}  />
            </div>
            <div className = {["nutritionalInformation"].join(" ")}>
                <RecipeCaloriesContainer calories = {props.nutritionValue} />
            </div>
        </div>
    )
}

export { RecipeDetails }