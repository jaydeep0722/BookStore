import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AppContext = createContext();

const Googleprovider = new GoogleAuthProvider();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Register user
  const RegisterUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const LoginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const LoginWithGoogle = async () => {
    await signInWithPopup(auth, Googleprovider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    RegisterUser,
    LoginUser,
    LoginWithGoogle,
    logOut,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
