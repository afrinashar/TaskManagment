// src/redux/taskSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks } from "../services/api";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  status: "idle" | "loading" | "failed";
}

const initialState: TaskState = {
  tasks: [],
  status: "idle",
};

export const fetchAllTasks = createAsyncThunk("tasks/fetchTasks", fetchTasks);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(fetchAllTasks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
