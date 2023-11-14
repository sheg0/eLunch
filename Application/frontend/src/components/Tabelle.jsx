import { useState } from "react";

const Tabelle = ({ meals }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Name</th>
            <th>isVegetarian</th>
            <th>isVegan</th>
            <th> hasGluten</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {meals &&
            meals.map((meal) => {
              return (
                <>
                  <tr key={meal._id + 1}>
                    <td>{meal.name}</td>
                    <td>{meal.isVegetarian}</td>
                    <td>{meal.isVegan}</td>
                    <td>{meal.hasGluten}</td>
                    <td>{meal.type}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabelle;
