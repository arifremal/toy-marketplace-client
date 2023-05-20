import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Components/Home";
import Login from "../AuthComponents/Login";
import SignUp from "../AuthComponents/SignUp";
import SingleToy from "../Components/SingleToy";
import MyToy from "../ToyComponents/MyToy";
import AddaToy from "../ToyComponents/AddaToy";
import AllToy from "../ToyComponents/AllToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Components/Blog";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<NotFound></NotFound>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/view/:id',
          element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/toys/${params.id}`)

        },
        {
          path:'/mytoy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path:'/addatoy',
          element:<PrivateRoute><AddaToy></AddaToy></PrivateRoute>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>

        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
        
    ]
  },
]);
export default router;
