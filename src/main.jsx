import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Properties from './pages/properties/Properties.jsx';
import Details from './pages/details/Details.jsx';
import Contact from './pages/contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/> ,
  },
  {
    path: "/properties",
    element:<Properties/> ,
  },
  {
    path: "/properties-details",
element:<Details/> ,
  },
  {
    path: "/contact",
    element:<Contact/> , 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
