import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./PlanSlice";
import { setInfoTask } from "./handleFormSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./plan.css";

function PlanUI() {
  const infoTask = useSelector((state) => state.handleForm);
  const listTasks = useSelector((state) => state.dailyplan);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setInfoTask(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(infoTask));
  };
  return (
    <div>
      <h1>Daily Plan</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={infoTask.name}
          onChange={handleChange}
        />

        <label htmlFor="time">Time to Complete:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={infoTask.time}
          onChange={handleChange}
        />

        <label htmlFor="deadline">List:</label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={infoTask.deadline}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
      <div className="displayList">
        {listTasks
          ? listTasks.map((task, index) => (
              <Card sx={{ maxWidth: 345 }} key={index}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {task.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time to Complete: {task.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deadline: {task.deadline}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => dispatch(deleteTask(index))}
                  >
                    Done
                  </Button>
                  <Button size="small">See More</Button>
                </CardActions>
              </Card>
            ))
          : "Error: List tasks isn't existing!"}
      </div>
    </div>
  );
}

export default PlanUI;
