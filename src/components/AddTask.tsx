// src/components/AddTask.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask: React.FC = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), title: task, completed: false }));
      setTask("");
    }
  };

  return (
    <div>
      <input
      style={{borderRadius:"10px", padding:"10px", margin: "10px"}}
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button style={{backgroundColor:"blue", padding:"10px", margin: "10px"}} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
