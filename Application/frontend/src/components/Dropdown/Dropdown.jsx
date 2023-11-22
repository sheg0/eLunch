import { useState } from "react";
import "./Dropdown.css";
import { GiBalaclava } from "react-icons/gi";
//import { AiFillCaretDown } from "react-icons/ai";

export default function Dropdown({
  setActivatedFromAbove,
  meals,
  selected,
  setSelected,
  setName,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {selected} <GiBalaclava />
        <span className="fas fa-caret-down"></span>
        <div>
          {isActive && (
            <div className="dropdown-content">
              {meals.map((meal) => (
                <div
                  onClick={(e) => {
                    setSelected(meal.checked);
                    setIsActive(false);
                    setActivatedFromAbove(false);
                    setName(meal.name);
                  }}
                  className="dropdown-item"
                >
                  {meal.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
