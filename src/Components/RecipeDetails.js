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
            <div className = {["availableIngredients"].join(" ")} >
                {props.availableIngredients}
            </div>
            <div className = {['timeTaken', 'recipeInfo'].join(" ")}>
                Estimated Time : {props.timeTaken} minutes
            </div>
        </div>
    )
}

const RecipeDetailsContainer = (props) => {
    return (
        <div className={["recipeDetailsContainer"].join(" ")}>
            <IngredientInformationDiv availableIngredients = {props.availableIngredients} timeTaken = {props.timeTaken}/>
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
    return (
        <div className={["caloriesContainer"].join(" ")}>
            <NutritionalInformationContainer type = "calories" value = {props.calories.calories}/>
        </div>
    )
}

const NutritionalInformationContainer = (props) => {
    // console.log(props.value.className())
    return (
        <div>{props.type} : {Math.floor(props.value)}</div>
    )
}

const RecipeTagsContainer = (props) => {
    const tagList = [];
    for (let i = 0; i < props.tags.length; i++){
        if (typeof props.tags[i] == 'string'){
            tagList.push(<LiForTags tags = {props.tags[i]}/>)
        }
    }
    return (
        <div className = {['tagsContainer']}>
            Common Tags : 
            <ul className = {['tagList'].join(" ")}>
                {tagList}                
            </ul>
        </div>
    )
}

const LiForTags = (props) => {
    return (
        /**
         * TODO make the tags hyperlinks to recipes which have similar tags
         */
        <Link className = {['tags'].join(" ")} to={"/something"} >#{props.tags}</Link>
        // <li className = {['tags'].join(" ")}>#{props.tags}</li>
    )
}

const RecipeDetails = (props) => {
    /**
     * <RecipeDetails 
                    name = {props.name}
                    ingredients = {props.ingredients}
                    tags = {props.tags}
                    minutes = {props.minutes}
                    description = {props.description}
                    nutrition = {props.nutrition}
                    steps = {props.steps}
                    availableIngredients = {props.availableIngredients}
                />
        are the props received
     */
    return (
        <div className={["recipeInfoContainer"].join(" ")}>
            <div className = {['essentialInformation'].join(" ")}>
                <RecipeNameContainer name = {props.name} recipeInfo = {props}/>
                <RecipeDetailsContainer  availableIngredients = {props.availableIngredients} timeTaken = {props.minutes}/>
            </div>
            <div className = {["nutritionalInformation"].join(" ")}>
                <RecipeCaloriesContainer calories = {props.nutrition}/>
                <RecipeTagsContainer tags = {props.tags} />
            </div>
        </div>
    )
}

export { RecipeDetails }