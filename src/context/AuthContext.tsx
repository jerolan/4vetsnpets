import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/config';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const UserContext = createContext<any>({});

export function AuthContextProvider(props:any) {

    function createUser(email:string, password: string, rol: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

  return (
    <>
      <UserContext.Provider value={{createUser}}>{props.children}</UserContext.Provider>
    </>
  );
}

export function UserAuth() {
  return useContext(UserContext);
}
