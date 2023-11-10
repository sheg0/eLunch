 const Tabelle = ({meals}) =>{
    console.log(meals)
    return(
        <table id="result">
        <thead> 
        <tr>
          <th >Name</th>
          <th >isVegetarian</th>
          <th >isVegan</th>
          <th > hasGluten</th>
          <th >type</th>
        </tr>
      </thead>
      <tbody>
        {meals &&
          meals.map((meal) => {
            console.log(meal)
            return (
              <>
                <tr key={meal._id + 2}>
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
    )
    
}

export default Tabelle;