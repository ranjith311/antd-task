
import React from 'react';
import AppLayout from './shared/layout/AppLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { genId } from './shared/utils/common';
import './App.scss';
import './shared/styles/common.scss'

const App: React.FC = () => {

  const arr = [
    {
      "id": genId(),
      "description": "Task 1 description",
      "project": "Project 1",
      "progress": "33",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 2 description",
      "project": "Project 1",
      "progress": "14",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 3 description",
      "project": "Project 1",
      "progress": "26",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 4 description",
      "project": "Project 1",
      "progress": "0",
      "status": "Todo"
    },
    {
      "id": genId(),
      "description": "Task 5 description",
      "project": "Project 1",
      "progress": "40",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 6 description",
      "project": "Project 1",
      "progress": "58",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 7 description",
      "project": "Project 1",
      "progress": "5",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 8 description",
      "project": "Project 1",
      "progress": "42",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 9 description",
      "project": "Project 1",
      "progress": "15",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 10 description",
      "project": "Project 1",
      "progress": "59",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 11 description",
      "project": "Project 2",
      "progress": "10",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 12 description",
      "project": "Project 2",
      "progress": "29",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 13 description",
      "project": "Project 2",
      "progress": "63",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 14 description",
      "project": "Project 2",
      "progress": "85",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 15 description",
      "project": "Project 2",
      "progress": "79",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 16 description",
      "project": "Project 2",
      "progress": "72",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 17 description",
      "project": "Project 2",
      "progress": "52",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 18 description",
      "project": "Project 2",
      "progress": "45",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 19 description",
      "project": "Project 2",
      "progress": "7",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 20 description",
      "project": "Project 2",
      "progress": "53",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 21 description",
      "project": "Project 1",
      "progress": "70",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 22 description",
      "project": "Project 1",
      "progress": "57",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 23 description",
      "project": "Project 1",
      "progress": "100",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 24 description",
      "project": "Project 1",
      "progress": "100",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 25 description",
      "project": "Project 1",
      "progress": "100",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 26 description",
      "project": "Project 3",
      "progress": "97",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 27 description",
      "project": "Project 2",
      "progress": "1",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 28 description",
      "project": "Project 2",
      "progress": "27",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 29 description",
      "project": "Project 2",
      "progress": "77",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 30 description",
      "project": "Project 2",
      "progress": "7",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 31 description",
      "project": "Project 2",
      "progress": "18",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 32 description",
      "project": "Project 2",
      "progress": "33",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 33 description",
      "project": "Project 3",
      "progress": "53",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 34 description",
      "project": "Project 3",
      "progress": "100",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 35 description",
      "project": "Project 3",
      "progress": "48",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 36 description",
      "project": "Project 3",
      "progress": "94",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 37 description",
      "project": "Project 3",
      "progress": "93",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 38 description",
      "project": "Project 3",
      "progress": "38",
      "status": "Completed"
    },
    {
      "id": genId(),
      "description": "Task 39 description",
      "project": "Project 3",
      "progress": "86",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 40 description",
      "project": "Project 3",
      "progress": "0",
      "status": "Todo"
    },
    {
      "id": genId(),
      "description": "Task 41 description",
      "project": "Project 3",
      "progress": "45",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 42 description",
      "project": "Project 3",
      "progress": "88",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 43 description",
      "project": "Project 3",
      "progress": "27",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 44 description",
      "project": "Project 3",
      "progress": "72",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 45 description",
      "project": "Project 3",
      "progress": "97",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 46 description",
      "project": "Project 3",
      "progress": "72",
      "status": "Todo"
    },
    {
      "id": genId(),
      "description": "Task 47 description",
      "project": "Project 3",
      "progress": "92",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 48 description",
      "project": "Project 3",
      "progress": "84",
      "status": "Halted"
    },
    {
      "id": genId(),
      "description": "Task 49 description",
      "project": "Project 3",
      "progress": "98",
      "status": "In Progress"
    },
    {
      "id": genId(),
      "description": "Task 50 description",
      "project": "Project 1",
      "progress": "39",
      "status": "In Progress"
    }
  ]

  localStorage.setItem("tasks", JSON.stringify(arr))

  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;