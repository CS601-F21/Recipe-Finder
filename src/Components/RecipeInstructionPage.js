/**
 * Author : Shubham Pareek
 * Purpose : Page which displays the recipe instructions
 */
import React from "react";

const RecipeInstructionPage = (props) => {
  /**
   *
   * props will have the following keys :
   *      name : string
   *      instructions : string
   *      ingredients : list
   *      ingredientQuantity :  object
   *      nutritionValue : object
   *      fullMatch : string/boolean
   *      missingIngredients : string
   */
  console.log("Received props");
  console.log(props);
  const recipe = props.recipeInfo;
  return (
    <div className={["recipeInstructionPage"].join(" ")}>
      <BasicHorizontalDiv
        className={[
          "instructionPageRecipeNameContainer",
          "instructionPageContainer",
        ].join(" ")}
        value={recipe.name}
        isObject={false}
        text={null}
      />
      <BasicHorizontalDiv
        className={[
          "instructionPageIngredientsContainer",
          "instructionPageContainer",
        ].join(" ")}
        value={recipe.ingredientQuantity}
        isObject={true}
        text={null}
      />
      <BasicHorizontalDiv
        className={[
          "instructionPageInstructionsContainer",
          "instructionPageContainer",
        ].join(" ")}
        value={recipe.instructions}
        isObject={false}
        text="Instructions"
      />
      <BasicHorizontalDiv
        className={[
          "instructionPageNutritionalValuesContainer",
          "instructionPageContainer",
        ].join(" ")}
        value={recipe.nutritionValue}
        isObject={true}
        text={null}
      />
    </div>
  );
};

const BasicHorizontalDiv = (props) => {
  /**
   * This is just a basic div which will show wtv information is it that the user has passed
   * Since we cannot directly show an object, we have an isObject property which lets us differentiate between
   * the different kind of values that will be passed into this component
   */
  const className = props.className;
  const text = props.text;

  if (props.isObject) {
    return <div className={className}></div>;
  } else {
    return <div className={className}>{props.value}</div>;
  }
};

export { RecipeInstructionPage };
