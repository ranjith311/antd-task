import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../screens/dashboard/Dashboard'
import Tasks from '../../screens/tasks/Tasks'
import { PATH_DASHBOARD, PATH_TASKS } from '../constants/pathContstants'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH_DASHBOARD} element={<Dashboard />} />
        <Route path={PATH_TASKS} element={<Tasks />} />
      </Routes>
    </>
  )
}

export default AppRoutes