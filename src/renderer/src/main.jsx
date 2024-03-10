import './assets/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import DashBoard from './components/DashBoard/DashBoard'
const router = createBrowserRouter([
  {
    path: '/', element: <App></App>, children: [
      { path: '/dashboard', element: <DashBoard></DashBoard> },
      { path: '/', element: <Navigate to={'/dashboard'}></Navigate> },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
