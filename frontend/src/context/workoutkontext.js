import {creatContext, useReducer} from 'react'

export const WorkoutContext =creatContext()

export const workoutsReducer = (state, action) =>{
       switch (action.type){
        case 'SET_WORKOUTS': return {
            workouts: action.payload
        }


       }
} 

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] =useReducer(workoutsReducer, {workouts: null})



    return (
        <WorkoutContext.Provider>
            {children}
        </WorkoutContext.Provider>
    )
}
