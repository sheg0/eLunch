import Alcohol from "../../../images/Alcohol.png";
import Dairyfree from "../../../images/Dairyfree.png";
import Glutenfree from "../../../images/Glutenfree.png";
import Meat from "../../../images/Meat.png";
import Vegan from "../../../images/Vegan.png";
import Veggie from "../../../images/Veggie.png";
import MealImageCheckbox from "./MealImageCheckbox";
import { ButtonGroup } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const MealImageCheckboxes = () => {
  return (
    <div className="MealInput-Name">
      <p>Tags</p>
      <div className="MealInput-Content">
        <ButtonGroup>
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
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MealImageCheckboxes;
