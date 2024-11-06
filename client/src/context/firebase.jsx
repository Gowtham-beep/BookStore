import React, { 
    createContext,
   useContext,
   useEffect,
   useState} from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import {getFirestore,collection,addDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const imgur_client_id=import.meta.env.VITE_IMGUR_CLIENT_ID
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp)
const FirebaseContext = createContext(null);
const provider=new GoogleAuthProvider()
const db=getFirestore(firebaseApp)


export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user,setUser]=useState(null)
  const signupWithEmailAndPassword=(email,password)=>{
    return (createUserWithEmailAndPassword(firebaseAuth,email,password))
    .then((userCredential)=>{
      if(userCredential){
        alert("Signup scucess..!")
      }else{
        alert("Signup failed ")
      }
    })
    .catch((error)=>alert(error))
  }

  const signinWithEmailAndPassword=(email,password)=>{
    return (signInWithEmailAndPassword(firebaseAuth,email,password)
            .then((val)=>alert("success"))
            .catch((error)=>console.log("Signin Error: ",error)))
  }
  const signinWithGoogle=()=>{
    signInWithPopup(firebaseAuth,provider)
  }
const handleSignOut=()=>{
  signOut(firebaseAuth)
  console.log("Signed Out")
}

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,user=>{
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  },[])
  const isLoggedIn=user? true:false

  const storeDataOfBooks = async (title, genre, isbn, price, stock, description, coverimg) => {
    if (!user) {
      alert("User must be logged in to add a book.");
      return;
    }

    try {
        return await addDoc(collection(db, 'books'), {
        title,
        genre,
        isbn,
        price,
        stock,
        description,
        coverimg,
        userId: user.uid,
        userEmail: user.email,
        userName: user.displayName,
        photoUrl: user.photoURL,
      });
    } catch (error) {
      console.error("Error uploading image or storing book data:", error);
      alert("Failed to add book. Please try again.");
    }
  };
  
  return (
    <FirebaseContext.Provider value={{
      signupWithEmailAndPassword,
      signinWithEmailAndPassword,
      signinWithGoogle,
      isLoggedIn,
      handleSignOut,
      storeDataOfBooks
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};
