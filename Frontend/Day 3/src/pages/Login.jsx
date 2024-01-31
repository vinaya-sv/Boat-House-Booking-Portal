import { Link } from 'react-router-dom';
import '../assets/css/Login.css'
import { useState } from 'react';
function Login(){
    const [userOrAdmin, setUserOrAdmin]=useState("");
    return (
        <div className="login-outer">
            <div className="login-card">
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID"></input>
                <label for="password"></label>
                <input type="password" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD"></input>
                <div className="user-or-admin">
                    <div className="login-user" onClick={()=>setUserOrAdmin("user")} style={{backgroundColor:(userOrAdmin=="user")?"black":"white",color:(userOrAdmin!="user")?"black":"white"}}>USER</div>
                    <div className="login-admin" onClick={()=>setUserOrAdmin("admin")} style={{backgroundColor:(userOrAdmin=="admin")?"black":"white",color:(userOrAdmin!="admin")?"black":"white"}}>ADMIN</div>
                </div>
                <div className="login-button-and-swap">
                    <Link style={{textDecoration:"none"}} to="/"><button className="login-button">SIGN IN</button></Link>
                    <Link style={{textDecoration:"none"}} to="/signup"><p className="swap-login-register">Don't have an account? <strong>Sign up</strong></p></Link>
                </div>

            </div>
        </div>
    );
}
export default Login;