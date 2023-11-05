import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({meal}) => {
    const { dispatch } = useWorkoutsContext(); //grab dispatch function
    const handleClickDelete = async () => {

        
        const response = await fetch('/api/meals/' + meal._id ,{
            method:'DELETE',   
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_MEAL', payload: json});
        }
    }

    const handleClickEdit = async () => {

        
        const response = await fetch('/api/meals/' + meal._id ,{
            method:'PATCH',   
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'EDIT_MEAL', payload: json});
        }
    }

    
    
    
    
    
    return(
        <div className="meal-details">
            <h4>{meal.name}</h4>
            <p><strong> isVegetarian: </strong>{meal.isVegetarian}</p>
            <p><strong> isVegan: </strong>{meal.isVegan}</p>
            <p><strong> hasGluten: </strong>{meal.hasGluten}</p>
            <p><strong> type: </strong>{meal.type}</p>
    
            <p>{formatDistanceToNow(new Date(meal.createdAt), {addSuffix: true})}</p>

            <div className='box'>
                <button className="material-symbols-outlined-delete" onClick={handleClickDelete}>delete</button>
            
                <button className="material-symbols-outlined-edit" onClick={handleClickEdit} >edit</button>
            </div>
            
        </div>
    )
}


export default WorkoutDetails