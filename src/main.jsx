import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx'
import App from './App.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots.jsx';
import Error from './components/Error/Error.jsx';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import CardDitails from './components/CardDitails/CardDitails.jsx';
import AddToCart from './components/AddToCart/AddToCart.jsx';
import AddToWish from './components/AddToWish/AddToWish.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarChart } from 'recharts';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('../catagory.json'),
      children:[
        {
          path:'/',
          element:<Cards></Cards>,
          loader:()=>fetch('../allData.json')
        },
        {
          path:'/category/:category',
          element:<Cards></Cards>,
          loader:()=>fetch('../allData.json')
        }
      ]
    
    },
      {
      path:'/statistics',
      element:<Statistics></Statistics>,
      loader:()=>fetch('../allData.json')
    },
      {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
              path:'addtocart',
              element:<AddToCart></AddToCart>,
              loader:()=>fetch('../allData.json')
        },
        {
              path:'addtowish',
              element:<AddToWish></AddToWish>,
              loader:()=>fetch('../allData.json')
        },
        
       ]
    },
      {
      path:'/about-us',
      element:<AboutUs></AboutUs>,
      loader:()=>fetch('../allData.json')
    },
    ,
        {
          path:'/detail/:detailId',
          element:<CardDitails></CardDitails>,
          loader:()=>fetch('../allData.json'),
          
        },
         
        
     
    
  ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <BarChart></BarChart>
  </StrictMode>,
)
