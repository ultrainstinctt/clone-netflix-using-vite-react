import {  createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,SignInWithEmailAndPassword,signout,onAuthStateChange,}from"firebase/auth";

import {auth,db} from "../services/firebase";
const AuthContext =createContext();
export function AuthContextProvider({children}){

    const[user,setuser]=useState({});
    useEffect(()=>{
        const unsub=onAuthStateChange(auth,(CurrentUser)=>{
            setuser(CurrentUser)
        });
        return()=>{
            unsub();
        };
    }, [] );

    

    function signUp (email,password){
        createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn (email,password){
        return SignInWithEmailAndPassword(auth,email,password);
    }
    function logOut (){
       return signout(auth,email,password);
    }



    return(
    <AuthContext.Provider value={{user,signUp,logIn,logOut}}>
        {children}
    </AuthContext.Provider>);
}
export function UserAuth(){
    return useContext(AuthContext);
}