import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
  
} from "react-router-dom";
import './index.css'
import Catalog from './pages/catalog.jsx';
import Info from './pages/about.jsx'

const router = createBrowserRouter([{path: "/", element: <App/>},
  {path: "/catalog", element: <Catalog/>},
  {path: "/about", element: <Info/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
