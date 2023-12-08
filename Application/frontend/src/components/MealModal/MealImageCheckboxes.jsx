import Alcohol from "../../images/Alcohol.png";
import Dairyfree from "../../images/Dairyfree.png";
import Glutenfree from "../../images/Glutenfree.png";
import Meat from "../../images/Meat.png";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";
import MealImageCheckbox from "./MealImageCheckbox";

const MealImageCheckboxes = ({ meal, setMeal }) => {
  return (
    <>
      <MealImageCheckbox
        src={Alcohol}
        alt="Alcohol icon"
        meal={meal}
        mealPropertyName={"isWithAlcohol"}
        setMeal={setMeal}
      />
      <MealImageCheckbox
        src={Dairyfree}
        alt="Dairyfree icon"
        meal={meal}
        mealPropertyName={"isLactoseFree"}
        setMeal={setMeal}
      />
      <MealImageCheckbox
        src={Glutenfree}
        alt="Glutenfree icon"
        meal={meal}
        mealPropertyName={"isGlutenFree"}
        setMeal={setMeal}
      />
      <MealImageCheckbox
        src={Meat}
        alt="Meat icon"
        meal={meal}
        mealPropertyName={"isWithMeat"}
        setMeal={setMeal}
      />
      <MealImageCheckbox
        src={Vegan}
        alt="Vegan icon"
        meal={meal}
        mealPropertyName={"isVegan"}
        setMeal={setMeal}
      />
      <MealImageCheckbox
        src={Veggie}
        alt="Vegetarian icon"
        meal={meal}
        mealPropertyName={"isVegetarian"}
        setMeal={setMeal}
      />
    </>
  );
};

export default MealImageCheckboxes;
