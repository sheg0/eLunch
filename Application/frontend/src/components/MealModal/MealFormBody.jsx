import MealInputElements from "./MealInputElements";
import MealInputDropdowns from "./MealInputDropdowns";
import MealImageCheckboxes from "./MealImageCheckboxes";
import { useMealListContext } from "../../hooks/useMealListContext";

const MealFormBody = () => {
  return (
    <div>
      <div className="MealModal-Inputfields">
        <MealInputElements />
        <MealInputDropdowns />
        <MealImageCheckboxes />
      </div>
    </div>
  );
};

export default MealFormBody;
