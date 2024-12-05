import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // Set the user object when the user is authenticated
      } else {
        setUser(null); // Set to null if no user is authenticated
      }
    });

    return () => unsubscribe(); // Clean up on component unmount
  }, [auth]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
