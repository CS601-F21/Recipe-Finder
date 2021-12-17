/**
 * Author : Shubham Pareek
 * Purpose : Is the file containing the individual components which make the component which showcases the
 *           recipe details
 */

import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { allActions } from "./State/Action-Creators/allActions";
import { useDispatch } from "react-redux";

//div for displaying the time taken to make the recipe
const TimeTakenDiv = (props) => {
  return (
    <div className={["recipeTimeTake", "recipeInfo"].join(" ")}>
      <div className={["heading"].join(" ")}>Cooking Time :</div>
      <div className={["timeTaken", "info"].join(" ")}>{props.timeTaken}</div>
    </div>
  );
};

//div for displaying the difficulty of the recipe
const RecipeDifficultyDiv = (props) => {
  return (
    <div className={["recipeDifficulty", "recipeInfo"].join(" ")}>
      <div className={["heading"].join(" ")}>Difficulty :</div>
      <div className={["difficulty", "info"].join(" ")}>{props.difficulty}</div>
    </div>
  );
};

//div for displaying the ratings of a recipe
const RecipeRatingDiv = (props) => {
  return (
    <div className={["recipeRating", "recipeInfo"].join(" ")}>
      <div className={["heading"].join(" ")}>Rating :</div>
      <div className={["rating", "info"].join(" ")}>{props.rating}</div>
    </div>
  );
};

//div for displaying the taste-profile of a recipe
const RecipeTasteProfileDiv = (props) => {
  return (
    <div className={["recipeTasteProfile", "recipeInfo"].join(" ")}>
      <div className={["heading"].join(" ")}>Taste Profile:</div>
      <div className={["tasteProfile", "info"].join(" ")}>
        {props.tasteProfile}
      </div>
    </div>
  );
};

//div for displaying the ingredients information of a recipe
const IngredientInformationDiv = (props) => {
  return (
    <div className={["ingredientInformation", "recipeInfo"].join(" ")}>
      <div className={["availableIngredients"].join(" ")}>
        {props.availableIngredients}
      </div>
      <div className={["timeTaken", "recipeInfo"].join(" ")}>
        Estimated Time : {props.timeTaken} minutes
      </div>
    </div>
  );
};

//recipe container div, has the IngredientInformationDiv component in it
const RecipeDetailsContainer = (props) => {
  return (
    <div className={["recipeDetailsContainer"].join(" ")}>
      <IngredientInformationDiv
        availableIngredients={props.availableIngredients}
        timeTaken={props.timeTaken}
      />
    </div>
  );
};

//recipe name component, will redirect to /recipe upon click
const RecipeNameContainer = (props) => {
  /**
   * To update the state, we add an onClick event, which updates the state accordingly.
   * We will then call that state in the RecipePage and render the page accordingly.
   */
  return (
    <Link
      to={"/recipe"}
      state={props.recipeInfo}
      className={["recipeNameContainer"].join(" ")}
    >
      {props.name}
    </Link>
  );
};

//recipe calories component, showcases the calories in a recipe
const RecipeCaloriesContainer = (props) => {
  return (
    <div className={["caloriesContainer"].join(" ")}>
      <NutritionalInformationContainer
        type="calories"
        value={props.calories.calories}
      />
    </div>
  );
};

//component for showcasing the recipe nutritional information
const NutritionalInformationContainer = (props) => {
  // console.log(props.value.className())
  return (
    <div>
      {props.type} : {Math.floor(props.value)}
    </div>
  );
};

//component for showcasing the recipe tags
const RecipeTagsContainer = (props) => {
  const tagList = [];
  for (let i = 0; i < props.tags.length; i++) {
    if (typeof props.tags[i] == "string") {
      tagList.push(<LiForTags tags={props.tags[i]} />);
    }
  }
  return (
    <div className={["tagsContainer"]}>
      Common Tags :<ul className={["tagList"].join(" ")}>{tagList}</ul>
    </div>
  );
};

//recipe tags component
const LiForTags = (props) => {
  return (
    <Link className={["tags"].join(" ")} to={"/something"}>
      #{props.tags}
    </Link>
  );
};

//is the component which we will actually be exporting, and is the whole recipe information
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
      <div className={["essentialInformation"].join(" ")}>
        <RecipeNameContainer name={props.name} recipeInfo={props} />
        <RecipeDetailsContainer
          availableIngredients={props.availableIngredients}
          timeTaken={props.minutes}
        />
      </div>
      <div className={["nutritionalInformation"].join(" ")}>
        <RecipeCaloriesContainer calories={props.nutrition} />
        <RecipeTagsContainer tags={props.tags} />
      </div>
    </div>
  );
};

export { RecipeDetails };
