import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
     const {dispatch} = useWorkoutsContext()
  const handleClick = async () => {
      const response = await fetch("api/workouts/" + workout._id, {
        method: 'DELETE'
      })
      const json = await response.json() 

      if (response.ok){
        dispatch({type: 'DELETE_WORKOIUT', payload: json})
      }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>reps:</strong>
        {workout.reps}
      </p>
      <p>
        <strong>{workout.createdAt}</strong>
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};
export default WorkoutDetails;
