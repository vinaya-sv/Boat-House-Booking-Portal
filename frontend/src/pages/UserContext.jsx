import { createContext, useContext, useEffect, useState } from "react";

const UserContext=createContext();

export const useUserContext=()=>{
    return useContext(UserContext);
}

export const UserProvider=({children})=>{
    const [isLoggedIn, setLoggedIn]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setLoggedIn(true);
            setAdminUser(localStorage.getItem("role"));
        }
    },[])
    const [adminOrUser, setAdminUser]=useState();
    const login=(user)=>{
        setLoggedIn(true);
    }

    const logout=()=>{
        setLoggedIn(false);
        setAdminUser(null);
        localStorage.clear();
    }

    return (
        <UserContext.Provider value={{isLoggedIn, adminOrUser, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}
