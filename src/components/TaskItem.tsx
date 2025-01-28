// src/components/TaskItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/taskSlice";

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<Props> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => dispatch(deleteTask(id))} style={{backgroundColor:"red",  margin: "10px"}}>Delete</button>
    </div>
  );
};

export default TaskItem;
