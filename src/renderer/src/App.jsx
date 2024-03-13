import React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <div style={{ height: '100%', width: '100%',boxSizing:'border-box' }}>
      <Outlet></Outlet>
    </div>
  )
}
