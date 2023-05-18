import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Components/Home";
import Login from "../AuthComponents/Login";

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
        }
        
    ]
  },
]);
export default router;
