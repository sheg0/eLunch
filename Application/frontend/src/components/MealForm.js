import { useState } from "react"
import { useMealsContext } from '../hooks/useMealsContext'


const MealForm = () => {
    //**** 
    const { dispatch } = useMealsContext();
    //**** 
    const [name, setName] = useState('');
    const [isVegetarian, setIsVegetarian] = useState('');
    const [isVegan, setIsVegan] = useState('');
    const [hasGluten, setHasGluten] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const meal = {name,isVegetarian,isVegan,hasGluten,type};

        const response = await fetch('/api/meals',{
            method:'POST',
            body: JSON.stringify(meal),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if(!response.ok){
          
            setError(json.error);
            
            setEmptyFields(json.emptyFields);
            
        }
        if(response.ok){
   
            setName('');
            setIsVegetarian('');
            setIsVegan('');
            setHasGluten('');
            setType('');
            setError(null);
            setEmptyFields([]);

            console.log('New Meal Added',json);
            //console.log(workout);

            dispatch({type: 'CREATE_MEAL', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New Meal</h3>
            <label>Name:</label>
            <input
                type= "text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>IsVegetarian:</label>
            <input
                type= "text"
                onChange={(e) => setIsVegetarian(e.target.value)}
                value={isVegetarian}
                className={emptyFields.includes('isVegetarian') ? 'error' : ''}

            />

            <label>isVegan:</label>
            <input
                type= "text"
                onChange={(e) => setIsVegan(e.target.value)}
                value={isVegan}
                className={emptyFields.includes('isVegan') ? 'error' : ''}   
            />

            <label>hasGluten:</label>
            <input
                type= "text"
                onChange={(e) => setHasGluten(e.target.value)}
                value={hasGluten}
                className={emptyFields.includes('hasGluten') ? 'error' : ''}  
            />

            <label>type:</label>
            <input
                type= "text"
                onChange={(e) => setType(e.target.value)}
                value={type}
                className={emptyFields.includes('type') ? 'error' : ''}  
            />

            <button variant="contained">Add Meal</button>
            {error && <div className="error">{error}</div>}
            
        </form> 
    )
}

export default MealForm