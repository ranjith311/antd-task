import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITask {
  id: Number;
  description: String;
  progress: String;
  status: String;
}

interface ITaskState {
  tasks: ITask[];
}

const initialState: ITaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
