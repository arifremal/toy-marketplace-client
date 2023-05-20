import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {visitor, loader}=useContext(AuthContext)
    const path = useLocation()
    if(loader){
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if(visitor?.email){
        
        return children
    }
    return <Navigate to={'/login'} state={{from:path}} replace ></Navigate>
};

export default PrivateRoute;