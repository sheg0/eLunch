import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
    
    switch(action.type){
        case 'GET_MEAL':
            
           
           
        case 'SET_MEAL':
            return {
                meals: action.payload
            }
        case 'CREATE_MEAL':
            return {
                meals: [action.payload, ...state.meals]
            }
        case 'DELETE_MEAL':
            console.log(state);
            return{
                meals: state.meals.filter((w) => w._id !== action.payload._id)
            }
        case 'EDIT_MEAL':
            return {
                meals: state.meals.map((meal) => {
                    if (meal._id === action.payload._id) {
                        return {
                            ...meal,
                            ...action.payload
                        };
                    } else {
                        return meal;
                    }
                })
            }
            
        default:
            return state;
    }
    

}

export const WorkoutContextProvider = ({children}) => { //the children property represents the app property that we wrapped in index js
    const [state,dispatch] = useReducer(workoutsReducer, {
        meals: null
    });

 

    return(
    <WorkoutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutContext.Provider>
    )
}

