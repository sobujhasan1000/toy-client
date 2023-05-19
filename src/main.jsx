import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './Component/Home/Home';
import SingIn from './Component/SingIn/SingIn';
import Login from './Component/Login/Login';
import Logout from './Component/LogOut/Logout';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/singin",
        element:<SingIn></SingIn>
      },
      {
        path:"/loging",
        element:<Login></Login>
      },
      {
        path:"/logout",
        element:<Logout></Logout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
