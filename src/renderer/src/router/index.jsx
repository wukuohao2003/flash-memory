import App from '../App'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from '../components/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/app'}></Navigate>
    },
    {
        path: '/app',
        element: <App></App>,
        children: [
            {
                path: "/app/",
                element: <Navigate to={'/app/login'}></Navigate>
            },
            {
                path: '/app/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router