import App from '../App'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from '../components/Login';
import Login1 from '../components/Login1';
import Register from '../components/Register';
import Forgotpwd from '../components/Forgotpwd';

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
                element: <Login></Login>,
                children: [
                    {
                        path: '/app/login/',
                        element: <Navigate to={'/app/login/login'}></Navigate>
                    },
                    {
                        path: "/app/login/login",
                        element: <Login1 />
                    },
                    {
                        path: '/app/login/register',
                        element: <Register />
                    },
                    {
                        path: '/app/login/forgotpwd',
                        element: <Forgotpwd />
                    }
                ]
            }
        ]
    }
])

export default router