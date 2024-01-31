import { createContext, useContext, useState } from "react";

const UserContext=createContext();

export const useUserContext=()=>{
    return useContext(UserContext);
}

export const UserProvider=({children})=>{
    const [isLoggedIn, setLoggedIn]=useState(false);
    const [adminOrUser, setAdminUser]=useState(null);
    
    const login=(user)=>{
        setLoggedIn(true);
        setAdminUser(user);
    }

    const logout=()=>{
        setLoggedIn(false);
        setAdminUser(null);
    }

    return (
        <UserContext.Provider value={{isLoggedIn, adminOrUser, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}
