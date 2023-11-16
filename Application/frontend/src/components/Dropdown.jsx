import { useState } from "react"
import './Dropdown.css' 
export default function Dropdown({setActivatedFromAbove,meals,selected,setSelected}){

const [isActive,setIsActive] = useState(false);



return(
    <div className="dropdown">
        <div className="dropdown-btn" onClick={e => {setIsActive(!isActive) } }> 
            {selected}
            <span className="fas fa-caret-down"></span>
            <div>
                {isActive && (  
                <div className="dropdown-content">
                    {meals.map((meal) => 
                        <div onClick={e => {setSelected(meal.name); setIsActive(false); setActivatedFromAbove(false)}} className="dropdown-item">{meal.name}</div>
                    )}   
                </div> )   }
            </div>
            
        </div>
    </div>

)



}