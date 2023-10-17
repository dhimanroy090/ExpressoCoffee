import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Addcoffe from "./Pages/Addcoffe/Addcoffe";
import UpdateCoffee from "./Pages/UpdateCoffee/UpdateCoffee";
import ViewCoffee from "./Pages/Home/Popular/ViewCoffee/ViewCoffee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffees')
      },
      {
        path:"addcoffee",
        element: <Addcoffe></Addcoffe>

      },

      {
        path:"view/:id",
        element:<ViewCoffee></ViewCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      },

      {
        path:'update/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
