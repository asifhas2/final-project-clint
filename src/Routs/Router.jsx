import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Auth from "../Layouts/Auth";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/coverage',
            Component:Coverage,
            loader:()=>fetch('/warehouses.json')
        }
    ]
  },
  {
    path:'/',
    Component:Auth,
    children:[
        {
            path:'/login',
            Component:Login,
        },
        {
            path:'/register',
            Component:Register,
        }
    ]
  }
]);