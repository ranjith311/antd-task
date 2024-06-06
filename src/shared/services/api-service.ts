import { Task } from "../../screens/tasks/Tasks";
import { genId } from "../utils/common";

const createTask = (task: Task): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      task.id = genId();
      if (task.progress === 100) {
        task.status = "Completed";
      } else if (task.status === "Completed") {
        task.progress = 100;
      } else if (task.status === "Todo") {
        task.progress = 0;
      }

      let allTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
      allTasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      setTimeout(() => {
        resolve(`Task has been created.`);
      }, 1000);
    } catch (error: any) {
      setTimeout(() => {
        reject(`Failed to create task: ${error.message}`);
      }, 1000);
    }
  });
};

const getAllTasks = (): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    try {
      let allTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
      console.log(allTasks);
      setTimeout(() => {
        resolve(allTasks.reverse());
      }, 1000);
    } catch (error: any) {
      setTimeout(() => {
        reject(`Failed to retrieve tasks: ${error.message}`);
      }, 1000);
    }
  });
};

const deleteOneTask = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    let allTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    const index = allTasks.findIndex((task: any) => task.id === id);

    if (index !== -1) {
      allTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      setTimeout(() => {
        resolve(`Task with id ${id} has been deleted.`);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(`Task with id ${id} not found.`);
      }, 1000);
    }
  });
};

const updateTask = (id: number, payload: Partial<Task>): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    let allTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    const index = allTasks.findIndex((task: any) => task.id === id);

    if (payload.progress === 100) {
      payload.status = "Completed";
    } else if (payload.status === "Completed") {
      payload.progress = 100;
    } else if (payload.status === "Todo") {
      payload.progress = 0;
    }

    if (index !== -1) {
      allTasks[index] = { ...allTasks[index], ...payload };
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      setTimeout(() => {
        resolve(allTasks);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(`Task with id ${id} not found.`);
      }, 1000);
    }
  });
};

export const API_SERVICE = {
  createTask,
  getAllTasks,
  deleteOneTask,
  updateTask,
};
