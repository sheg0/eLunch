import Alcohol from "../../images/wine-bottle.png";
import Dairyfree from "../../images/milk-box.png";
import Glutenfree from "../../images/gluten-free.png";
import Meat from "../../images/meat.png";
import Vegan from "../../images/vegan.png";
import Veggie from "../../images/vegetarian.png";
import MealImageCheckbox from "./MealImageCheckbox";

const MealImageCheckboxes = () => {
  return (
    <>
      <MealImageCheckbox
        src={Alcohol}
        alt="Alcohol icon"
        mealPropertyName={"isWithAlcohol"}
        title="Mit Alkohol"
      />
      <MealImageCheckbox
        src={Dairyfree}
        alt="Dairyfree icon"
        mealPropertyName={"isLactoseFree"}
        title="Laktosefrei"
      />
      <MealImageCheckbox
        src={Glutenfree}
        alt="Glutenfree icon"
        mealPropertyName={"isGlutenFree"}
        title="Glutenfrei"
      />
      <MealImageCheckbox
        src={Meat}
        alt="Meat icon"
        mealPropertyName={"isWithMeat"}
        title="Mit Fleisch"
      />
      <MealImageCheckbox
        src={Vegan}
        alt="Vegan icon"
        mealPropertyName={"isVegan"}
        title="Vegan"
      />
      <MealImageCheckbox
        src={Veggie}
        alt="Vegetarian icon"
        mealPropertyName={"isVegetarian"}
        title="Vegetarisch"
      />
    </>
  );
};

export default MealImageCheckboxes;
