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
import Toyview from './Component/ToyView/Toyview';
import MyToys from './Component/MyToys/MyToys';
import UPdatetoy from './Component/UpdateToy/UPdatetoy';
import Page4o4 from './Component/Page4o4/Page4o4';
import Blog from './Component/Blog/Blog';
import PrivateRotute from './Privateroute/PrivateRotute';

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
        element:<PrivateRotute><AllToy></AllToy></PrivateRotute>,
        loader: ()=>fetch('http://localhost:5000/postanimals')
      },
      {
        path:"/mytoys",
        element:<PrivateRotute><MyToys></MyToys></PrivateRotute>,
        loader: ()=>fetch('http://localhost:5000/postanimals')
      },
      {
        path:"/singletoys/:id",
        element:<Toyview></Toyview>,
        loader: ({params})=>fetch(`http://localhost:5000/postanimals/${params.id}`)
      },
      {
        path:"/update/:id",
        element:<UPdatetoy></UPdatetoy>,
        loader: ({params})=>fetch(`http://localhost:5000/postanimals/${params.id}`)
      },
      {
        path:"/addtoy",
        element:<AddToy></AddToy>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:'*',
    element:<Page4o4></Page4o4>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
