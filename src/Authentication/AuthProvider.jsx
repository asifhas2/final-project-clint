import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);


  const registerEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUserEmailPassword = (email, password) => {
    setLoading();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle=()=>{
    setLoading();
    return signInWithPopup(auth,googleProvider);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })

    return ()=>{
      unSubscribe();
    }
  },[])


  const authInfo = {
    user,
    loading,
    registerEmailPassword,
    signInUserEmailPassword,
    signInGoogle,
    logOut,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
