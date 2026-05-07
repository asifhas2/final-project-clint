import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Auth from "../Layouts/Auth";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRouts from "./PrivateRouts";
import Raider from "../Pages/Raider/Raider";
import SendPercel from "../Pages/Parcel/SendPercel";
import DashBord from "../Layouts/DashBord";
import MyParcels from "../Pages/DashBoard/MyParcels";
import Payment from "../Pages/DashBoard/Payment";
import PaymentSuccessful from "../Pages/DashBoard/PaymentSuccessful";
import PaymentCanceled from "../Pages/DashBoard/PaymentCanceled";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json"),
      },
      {
        path: "/rider",
        element: (
          <PrivateRouts>
            <Raider></Raider>
          </PrivateRouts>
        ),
         loader: () => fetch("/warehouses.json"),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRouts>
            <SendPercel></SendPercel>
          </PrivateRouts>
        ),
        loader: () => fetch("/warehouses.json"),
      },
    ],
  },
  {
    path: "/",
    Component: Auth,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path:'/dashBord',
    element:<PrivateRouts><DashBord></DashBord></PrivateRouts>,
    children:[
        {
            path:'my-parcels',
            Component:MyParcels
        },
        {
            path:'payment/:id',
            Component:Payment
        },
        {
          path:'payment-success',
          Component:PaymentSuccessful
        }
        ,
        {
          path:'payment-canceled',
          Component:PaymentCanceled
        },
        {
          path:'payments-history',
          Component:PaymentHistory
        },

    ]
  }
]);
