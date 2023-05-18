import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../AuthComponents/Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [visitor,setVisitor]=useState(null)
    const [loader,setLoader] = useState(true)

    // create visitor
    const createVisitor =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInVisitor =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentVisitor=>{
            setVisitor(currentVisitor)
            console.log(currentVisitor);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe()

        }
    },[])

  const authData = {
    visitor,
    loader,
    createVisitor,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
