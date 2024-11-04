import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp)
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {

  const signupWithEmailAndPassword=(email,password)=>{
    return (createUserWithEmailAndPassword(firebaseAuth,email,password))
  }

  const signinWithEmailAndPassword=(email,password)=>{
    return (signInWithEmailAndPassword(firebaseAuth,email,password)
            .then((val)=>alert("success"))
            .catch((error)=>console.log("Signin Error: ",error)))
  }
  return (
    <FirebaseContext.Provider value={{
      signupWithEmailAndPassword,
      signinWithEmailAndPassword
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};
