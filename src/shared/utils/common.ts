import { Task } from "../../screens/tasks/Tasks";

export const genId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};



export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};



export const generateCardData = (
  arr: Task[]
): { title: string; content: string }[] => {
  if (arr.length === 0) {
    return [];
  }

  const counts: Record<string, number> = {
    Todo: 0,
    "In Progress": 0,
    Completed: 0,
    Halted: 0,
  };

  arr.forEach((task) => {
    if (counts.hasOwnProperty(task.status)) {
      counts[task.status] += 1;
    }
  });

  const predefinedOrder = ["Todo", "In Progress", "Completed", "Halted"];

  return predefinedOrder.map((status) => ({
    title: status,
    content: counts[status].toString(),
  }));
};



export const generateChartData = (arr: any[]) => {
  if (arr.length === 0) return [];

  const groupBy = <T extends Record<string, any>>(array: T[], key: keyof T) =>
    array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {} as Record<string, T[]>);

  const groupedByProject = groupBy(arr, "project");

  const data = Object.entries(groupedByProject).flatMap(
    ([project, tasks]: [string, any[]]) => {
      const groupedByStatus = groupBy(tasks, "status");
      return Object.entries(groupedByStatus).map(
        ([status, tasks]: [string, any[]]) => ({
          project,
          value: tasks.length,
          type: status,
        })
      );
    }
  );

  data.sort((a, b) => (a.project > b.project ? 1 : -1));

  return data;
};




export const getDefaultKeySider = (
  items: { path?: string }[],
  currentPath: string
): number => {
  if (!Array.isArray(items) || typeof currentPath !== "string") {
    console.error(
      "Invalid arguments provided to calculateNumericDefaultSelectedKeys"
    );
    return 1; 
  }

  const index = items.findIndex(
    (item) => typeof item.path === "string" && item.path === currentPath
  );
  return index !== -1 ? index + 1 : 1; 
};




export const getCurrentTitle = (pathname: string, items: any) => {
  const item = items.find((i: any) => i.path === pathname);
  return item ? item.label : "Dashboard";
};

interface TaskSummary {
  type: string;
  tasks: number;
}



export const generatePieData = (tasks: Task[]): TaskSummary[] => {
  if (!Array.isArray(tasks)) {
    console.log("invlid input ---------");
  }

  const taskSummary = tasks.reduce((acc, task) => {
    if (!task || typeof task.status !== "string") {
      return acc;
    }

    const { status } = task;

    if (!acc[status]) {
      acc[status] = 0;
    }
    acc[status]++;
    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(taskSummary).map((status) => ({
    type: status,
    tasks: taskSummary[status],
  }));
};


export const setTitle = (title:string)=>{
  document.title = `${title} | Bug Tracker`
}
