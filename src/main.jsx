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
import AuthProvider from './Provider/AuthProvider';
import AddToy from './Component/AddToy/AddToy';
import AllToy from './Component/AllToys/AllToy';

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
        path:"/alltoys",
        element:<AllToy></AllToy>,
        loader: ()=>fetch('http://localhost:5000/postanimals')
      },
      {
        path:"/addtoy",
        element:<AddToy></AddToy>
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
