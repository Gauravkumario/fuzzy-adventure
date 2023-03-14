import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div>Dashboard goes here</div>
    <Outlet />
    </>
  )
}

export default Dashboard