import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Components/Home";
import Login from "../AuthComponents/Login";
import SignUp from "../AuthComponents/SignUp";
import SingleToy from "../Components/SingleToy";
import MyToy from "../ToyComponents/MyToy";
import AddaToy from "../ToyComponents/AddaToy";
import AllToy from "../ToyComponents/AllToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
          element:<SingleToy></SingleToy>,
          loader:({params})=> fetch(`http://localhost:5000/toys/${params.id}`)

        },
        {
          path:'/mytoy',
          element:<MyToy></MyToy>
        },
        {
          path:'/addatoy',
          element:<AddaToy></AddaToy>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>

        }
        
    ]
  },
]);
export default router;
