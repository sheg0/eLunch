import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext); //context has now dispatch and state properties

    if(!context){
        throw Error('useWorkoutsContext must be used inside an WorkoutContextProvider');
    }

    return context;
}