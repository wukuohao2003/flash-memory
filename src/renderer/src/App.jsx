import React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{height:"100%",weight:"100%"}}>
      <Outlet></Outlet>
    </div>
  )
}
