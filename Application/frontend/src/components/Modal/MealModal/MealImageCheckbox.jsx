import { useMealListContext } from "../../../hooks/useMealListContext";
import StyledIconButton from "../../Styled_MUI_Components/StyledIconButton";

const MealImageCheckbox = ({ mealPropertyName, src, alt }) => {
  const { meal, setMeal } = useMealListContext();
  const handleKeyDown = (e) => {
    // Older browsers may return "Spacebar"
    // instead of " " for the Space Bar key
    //-------------------------------------
    if (e.key === " " || e.key === "Spacebar") {
      setMeal({ ...meal, [mealPropertyName]: !meal[mealPropertyName] });
    }
  };
  return (
    <StyledIconButton
      onClick={() =>
        setMeal({ ...meal, [mealPropertyName]: !meal[mealPropertyName] })
      }
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <img
        src={src}
        alt={alt}
        style={meal[mealPropertyName] ? {} : { filter: "grayscale(100%)" }}
      />
    </StyledIconButton>
  );
};

export default MealImageCheckbox;
