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
      <MealImageCheckbox src={Alcohol} meal={meal} setMeal={setMeal} />
      <MealImageCheckbox src={Dairyfree} meal={meal} setMeal={setMeal} />
      <MealImageCheckbox src={Glutenfree} meal={meal} setMeal={setMeal} />
      <MealImageCheckbox src={Meat} meal={meal} setMeal={setMeal} />
      <MealImageCheckbox src={Vegan} meal={meal} setMeal={setMeal} />
      <MealImageCheckbox src={Veggie} meal={meal} setMeal={setMeal} />
    </>
  );
};

export default MealImageCheckboxes;
