import InputField from "./InputField";
import { Checkbox } from "@mui/material";

export default function UpdateMeal() {
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Meal</h3>

      <InputField
        label="Name:"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />
      <div className="checkbox">
        <label>isLactoseFree</label>
        <Checkbox
          onChange={(e) => setisLactoseFree(e.target.value)}
          value={isLactoseFree}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="checkbox">
        <label>isGlutenFree</label>
        <Checkbox
          onChange={(e) => setisGlutenFree(e.target.value)}
          value={isGlutenFree}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="checkbox">
        <label>isWithAlcohol</label>
        <Checkbox
          onChange={(e) => setisWithAlcohol(e.target.value)}
          value={isWithAlcohol}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="checkbox">
        <label>isWithMeat</label>
        <Checkbox
          onChange={(e) => setIsWithMeat(e.target.value)}
          value={isWithMeat}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>

      <div className="checkbox">
        <label>IsVegetarian</label>
        <Checkbox
          onChange={(e) => setIsVegetarian(e.target.value)}
          value={isVegetarian}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>

      <div className="checkbox">
        <label>isVegan</label>
        <Checkbox
          onChange={(e) => setIsVegan(e.target.value)}
          value={isVegan}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="checkbox">
        <label>hasGluten</label>
        <Checkbox
          onChange={(e) => setHasGluten(e.target.value)}
          value={hasGluten}
          inputProps={{ "aria-label": "controlled" }}
          //className={emptyFields.includes("hasGluten") ? "error" : ""}
        />
      </div>

      <InputField
        label="type:"
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes("type") ? "error" : ""}
      />

      <AddButton variant="contained">Add Meal</AddButton>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
