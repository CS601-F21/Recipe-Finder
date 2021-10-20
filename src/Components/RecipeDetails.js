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

const RecipeDetailsContainer = (props) => {
    return (
        <div className={["recipeDetailsContainer"].join(" ")}>
            <TimeTakenDiv timeTaken = {props.timeTaken}/>
            <RecipeDifficultyDiv difficulty = {props.difficulty}/>
            <RecipeRatingDiv rating = {props.rating}/>
            <RecipeTasteProfileDiv tasteProfile = {props.tasteProfile}/>
        </div>
    )
}

const RecipeNameContainer = (props) => {
    return (
        <div className={["recipeNameContainer"].join(" ")}>
            {props.recipeName}
        </div>
    )
}

const RecipeDetails = (props) => {
    return (
        <div className={["recipeInfoContainer"].join(" ")}>
            <RecipeNameContainer recipeName={props.recipeName}/>
            <RecipeDetailsContainer timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                rating = {props.rating}  tasteProfile = {props.tasteProfile} />
            </div>
    )
}

export { RecipeDetails }