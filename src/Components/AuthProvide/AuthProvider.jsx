import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../AuthComponents/Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [visitor, setVisitor] = useState(null);
  const [loader, setLoader] = useState(true);

  // create visitor
  const createVisitor = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInVisitor = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
const googlProvider = new GoogleAuthProvider();
const googleUser=()=>{
    setLoader(true)
    return signInWithPopup(auth,googlProvider)
}
const loggedOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentVisitor) => {
      setVisitor(currentVisitor);

      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authData = {
    visitor,
    loader,
    createVisitor,
    signInVisitor,
    googleUser,
    loggedOut
    
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
