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
import MyToys from './Component/MyToys/MyToys';
import UPdatetoy from './Component/UpdateToy/UPdatetoy';
import Page4o4 from './Component/Page4o4/Page4o4';
import Blog from './Component/Blog/Blog';
import PrivateRotute from './Privateroute/PrivateRotute';
import Shop from './Component/Shop/Shop';
import Toys from './Component/AllToys/Toys';
import SingelToyview from './Component/ToyView/SingelToyview';

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
        loader: ()=>fetch('https://joyful-animals-server.vercel.app/postanimals')
      },
      {
        path:"/shop",
        element:<Shop></Shop>,
        loader: ()=>fetch('https://joyful-animals-server.vercel.app/postanimals')
      },
      {
        path:"/mytoys",
        element:<PrivateRotute><MyToys></MyToys></PrivateRotute>,
        loader: ()=>fetch('https://joyful-animals-server.vercel.app/postanimals')
      },
      {
        path:"/singletoys/:id",
        element:<PrivateRotute><SingelToyview></SingelToyview></PrivateRotute>,
        loader: ({params})=>fetch(`https://joyful-animals-server.vercel.app/postanimals/${params.id}`)
      },
      {
        path:"/update/:id",
        element:<UPdatetoy></UPdatetoy>,
        loader: ({params})=>fetch(`https://joyful-animals-server.vercel.app/postanimals/${params.id}`)
      },
      {
        path:"/addtoy",
        element:<PrivateRotute><AddToy></AddToy></PrivateRotute>
      },
      {
        path:"/toys",
        element:<PrivateRotute><Toys></Toys></PrivateRotute>
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
    <div className='lg:mx-16 md:mx-6'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
