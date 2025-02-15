// src/App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
