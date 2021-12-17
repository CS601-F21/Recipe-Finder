/**
 * Author : Shubham Pareek
 * Purpose : Page containing the recipe
 */
import { propertyOf } from "lodash";
import react, { Component, useState } from "react";
import { useParams, useLocation } from "react-router";

const RecipePage = (props) => {
  /**
   * The useLocation hook lets us access the state which has been passed
   * down from the previous page
   *
   * <RecipeDetails
   *              name = {props.name}
   *              ingredients = {props.ingredients}
   *              tags = {props.tags}
   *              minutes = {props.minutes}
   *              description = {props.description}
   *              nutrition = {props.nutrition}
   *              steps = {props.steps}
   *              availableIngredients = {props.availableIngredients}
   *          />
   *  are the props received
   */
  //need to use the useLocation Hook since we are passing down states from the prev page to the current one
  const location = useLocation();
  const recipeInfo = location.state;
  return (
    <div className={["activeScreen", "fullRecipeScreen"].join(" ")}>
      <BasicInfoPanel
        name={recipeInfo.name}
        minutes={recipeInfo.minutes}
        description={recipeInfo.description}
        tags={recipeInfo.tags}
      />
      <RecipePanel
        ingredients={recipeInfo.ingredients}
        steps={recipeInfo.steps}
        nutrition={recipeInfo.nutrition}
      />
    </div>
  );
};

//panel to display basic info about the recipe
const BasicInfoPanel = (props) => {
  console.log("basic info props are ");
  console.log(props);
  return (
    <div className={["basicInfoPanel"].join(" ")}>
      <RecipeNameAndMinutesPanel name={props.name} minutes={props.minutes} />
      <RecipeDescriptionAndTagsPanel
        description={props.description}
        tags={props.tags}
      />
    </div>
  );
};

//recipe description and tags panel
const RecipeDescriptionAndTagsPanel = (props) => {
  return (
    <div className={["descriptionAndTagsPanel"]}>
      <RecipeDescriptionPanel description={props.description} />
      <RecipeTagsPanel tags={props.tags} />
    </div>
  );
};

//recipe name and time to cook panel
const RecipeNameAndMinutesPanel = (props) => {
  return (
    <div className={["nameAndTimePanel"].join(" ")}>
      <RecipeNamePanel name={props.name} />
      <RecipeTimePanel time={props.minutes} />
    </div>
  );
};

//recipe name panel
const RecipeNamePanel = (props) => {
  return (
    <div className={["recipePageRecipeName"].join(" ")}>
      <h2 className="titleText">{props.name}</h2>
    </div>
  );
};

//displays time taken to cook recipe
const RecipeTimePanel = (props) => {
  return (
    <div className={["recipePageTimeTaken"].join(" ")}>
      <h4 className="timeText">Time : {props.time} Minutes</h4>
    </div>
  );
};

//displays recipe description
const RecipeDescriptionPanel = (props) => {
  return (
    <div className={["recipePageDescription"]}>
      <h4 className="descriptionTitle">Recipe Description/Comment</h4>
      <div className={"recipePageDescriptionContainer"}>
        <p className="descriptionText">{props.description}</p>
      </div>
    </div>
  );
};

//displaying recipe tags
const RecipeTagsPanel = (props) => {
  // console.log("The tags received are");
  const tagList = [];

  for (let i = 0; i < props.tags.length; i++) {
    tagList.push(<PTagForTags text={props.tags[i]} />);
  }
  return (
    <div className={["recipePageTags"].join(" ")}>
      <h3 className="tags">Recipe Tags</h3>
      <div className="tagContainer">{tagList}</div>
    </div>
  );
};

//helper for tags
const PTagForTags = (props) => {
  return <p className="tag">{props.text}</p>;
};

//actual recipe over here
const RecipePanel = (props) => {
  return (
    <div className={["recipePanel"].join(" ")}>
      <RecipeIngredientsPanel ingredients={props.ingredients} />
      <RecipeStepsPanel steps={props.steps} />
      <RecipeNutritionPanel nutrition={props.nutrition} />
    </div>
  );
};

//ingredients which recipe requires
const RecipeIngredientsPanel = (props) => {
  const tagList = [];

  for (let i = 0; i < props.ingredients.length; i++) {
    tagList.push(<PTagForTags text={props.ingredients[i]} />);
  }
  return (
    <div className={["recipePageIngredients"].join(" ")}>
      <h1 className="ingredientHeader">Ingredients</h1>
      <div className="ingredientTagContainer">{tagList}</div>
    </div>
  );
};

//step by step instruction
const RecipeStepsPanel = (props) => {
  const liList = [];

  for (let i = 0; i < props.steps.length; i++) {
    liList.push(<InstructionsLiElement text={props.steps[i]} />);
  }
  return (
    <div className={["recipePageInstructions"].join(" ")}>
      <h1 class="instructionsHeader">Instructions</h1>
      <div className="instructions">
        <ol className="instructionsOrderedList">{liList}</ol>
      </div>
    </div>
  );
};

//helper
const InstructionsLiElement = (props) => {
  return <li className="singleInstruction">{props.text}</li>;
};

//nutritional information of the recipe
const RecipeNutritionPanel = (props) => {
  console.log("Nutrition props are");
  console.log(props.nutrition);
  return (
    <div className={["recipePageNutrition"].join(" ")}>
      <div className={["calories", "nutritionInfo"].join(" ")}>
        Total Calories : {props.nutrition.calories}
      </div>
      <div className={["protein", "nutritionInfo"].join(" ")}>
        Protein : {props.nutrition.calories}
      </div>
      <div className={["totalFat", "nutritionInfo"].join(" ")}>
        Total Fat : {props.nutrition.calories}
      </div>
      <div className={["saturatedFat", "nutritionInfo"].join(" ")}>
        Saturated Fat : {props.nutrition.calories}
      </div>
      <div className={["sodium", "nutritionInfo"].join(" ")}>
        Sodium : {props.nutrition.calories}
      </div>
      <div className={["sugar", "nutritionInfo"].join(" ")}>
        Sugar : {props.nutrition.calories}
      </div>
    </div>
  );
};

export { RecipePage };
