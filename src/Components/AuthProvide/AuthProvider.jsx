import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../AuthComponents/Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [visitor,setVisitor]=useState(null)
    const [loader,setLoader] = useState(true)


  const authData = {
    visitor,
    loader,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
