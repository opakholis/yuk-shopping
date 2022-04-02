import * as React from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../lib/firebase";
import { createUser } from "./db";

const authContext = React.createContext();

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return React.useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = React.useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signupWithEmail = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return handleUser(userCredential.user);
        // console.log("user", user);
      })
      .catch((err) => {
        const error = err.code;
        console.warn("error: ", error);
      });
  };

  const signinWithEmail = async (email, password) => {
    const signin = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((err) => {
        const error = err.code;
        console.warn("error: ", error);
      });
    return signin;
  };

  const signout = async () => {
    return signOut(auth).then(() => handleUser(false));
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signupWithEmail,
    signinWithEmail,
    signout,
  };
}
