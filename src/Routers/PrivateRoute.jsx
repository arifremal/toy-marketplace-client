import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {visitor, loader}=useContext(AuthContext)
    if(loader){
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if(visitor?.email){
        return children
    }
    return <Navigate to={'/login'} replace ></Navigate>
};

export default PrivateRoute;