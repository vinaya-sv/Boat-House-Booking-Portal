import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css'
import { useState } from 'react';
import { useUserContext } from './UserContext';
function Login(){
    const [userOrAdmin, setUserOrAdmin]=useState("");
    const {login}=useUserContext();
    const navigate=useNavigate();
    const handleSubmit=()=>{
        login(userOrAdmin);
        if(userOrAdmin=="user")
            navigate("/");
        if(userOrAdmin=="admin")
            navigate("/admin-dashboard/statistics");
    }
    return (
        <div className="login-outer">
            <form className="login-card" onSubmit={handleSubmit}>
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID" required></input>
                <label for="password"></label>
                <input type="password" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD" required></input>
                <div className="user-or-admin">
                    <div className="login-user" onClick={()=>setUserOrAdmin("user")} style={{backgroundColor:(userOrAdmin=="user")?"black":"white",color:(userOrAdmin!="user")?"black":"white"}}>USER</div>
                    <div className="login-admin" onClick={()=>setUserOrAdmin("admin")} style={{backgroundColor:(userOrAdmin=="admin")?"black":"white",color:(userOrAdmin!="admin")?"black":"white"}}>ADMIN</div>
                </div>
                <div className="login-button-and-swap">
                    <button type="submit" className="login-button">SIGN IN</button>
                    <Link style={{textDecoration:"none"}} to="/signup"><p className="swap-login-register">Don't have an account? <strong>Sign up</strong></p></Link>
                </div>
            </form>
        </div>
    );
}
export default Login;