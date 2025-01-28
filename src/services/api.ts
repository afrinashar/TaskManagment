// src/services/api.ts
import axios from "axios";

export const fetchTasks = async () => {
    const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
  return response.data;
};
