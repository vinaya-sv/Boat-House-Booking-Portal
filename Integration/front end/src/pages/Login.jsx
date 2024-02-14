import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css'
import { useState } from 'react';
import { useUserContext } from './UserContext';
import { localhost } from '../services/localhost';
import axios from 'axios';
function Login(){
    const [loginData, setLoginData]=useState({
        "email":"",
        "password":""
    });
    const [userOrAdmin, setUserOrAdmin]=useState("");
    const {login,setAdminUser}=useUserContext();
    const navigate=useNavigate();
    const [loginFailure, setLoginFailure]=useState(false);
    const handleSubmit=async (event)=>{
        event.preventDefault();
        try{
            const response=await axios.post(`${localhost}/api/v1/auth/login`,loginData);
            const {token,user}=response.data;
            //
            localStorage.setItem("token",token);
            localStorage.setItem("id",user.id);
            localStorage.setItem("role",user.role);
            console.log(user.role);
            //
            login(userOrAdmin);
            if(user.role=="USER")
                navigate("/");
            if(user.role=="ADMIN")
                navigate("/admin-dashboard/statistics");
        }
        catch(error){
            setLoginFailure(true);
        }
    }
    const handleInputChange=(event)=>{
        const {id,value}=event.target;
        setLoginData(prevData=>({
            ...prevData, [id]:value
        }))
    }
    return (
        <div className="login-outer">
            <form className="login-card" onSubmit={handleSubmit}>
                {loginFailure?
                <div className="error-message-display">Login failed! Please try again</div>
                :
                ""
                }
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID" value={loginData.email}  onChange={handleInputChange} required></input>
                <input type="password" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD" value={loginData.password} onChange={handleInputChange} required></input>
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