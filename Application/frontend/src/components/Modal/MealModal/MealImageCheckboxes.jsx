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
    <div className="EventModal-Container">
      <p className="MealInput-Text">Tags</p>
      <ButtonGroup>
        <MealImageCheckbox
          src={Alcohol}
          alt="Alcohol icon"
          mealPropertyName={"isWithAlcohol"}
        />

        <MealImageCheckbox
          src={Dairyfree}
          alt="Dairyfree icon"
          mealPropertyName={"isLactoseFree"}
        />
        <MealImageCheckbox
          src={Glutenfree}
          alt="Glutenfree icon"
          mealPropertyName={"isGlutenFree"}
        />
        <MealImageCheckbox
          src={Meat}
          alt="Meat icon"
          mealPropertyName={"isWithMeat"}
        />
        <MealImageCheckbox
          src={Vegan}
          alt="Vegan icon"
          mealPropertyName={"isVegan"}
        />
        <MealImageCheckbox
          src={Veggie}
          alt="Vegetarian icon"
          mealPropertyName={"isVegetarian"}
        />
      </ButtonGroup>
    </div>
  );
};

export default MealImageCheckboxes;