import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
function Register(){
    const navigate=useNavigate();
    return(
        <div className="register-outer">
            <form className="register-card" onSubmit={()=>navigate("/")}>
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID" required></input>
                <label for="username"></label>
                <input type="text" id="username" className="login-textfield" autoComplete="off" placeholder="USERNAME" required></input>
                <label for="password"></label>
                <input type="text" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD" required></input>
                <label for="confirm-password"></label>
                <input type="text" id="confirm-password" className="login-textfield" autoComplete="off" placeholder="CONFIRM PASSWORD" required></input>
                <div className="login-button-and-swap">
                    <button className="login-button">SIGN UP</button>
                    <Link style={{textDecoration:"none"}} to="/signin"><p className="swap-login-register">Already have an account? <strong>Sign in</strong></p></Link>
                </div>
            </form>
        </div>
    );
}
export default Register;