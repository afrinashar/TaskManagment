// src/components/TaskList.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchAllTasks } from "../redux/taskSlice";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks, status } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load tasks.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
