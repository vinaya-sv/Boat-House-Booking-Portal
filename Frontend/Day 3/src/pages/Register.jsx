import { Link } from 'react-router-dom';
import '../assets/css/Register.css';
function Register(){
    return(
        <div className="register-outer">
            <div className="register-card">
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID"></input>
                <label for="username"></label>
                <input type="text" id="username" className="login-textfield" autoComplete="off" placeholder="USERNAME"></input>
                <label for="password"></label>
                <input type="text" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD"></input>
                <label for="confirm-password"></label>
                <input type="text" id="confirm-password" className="login-textfield" autoComplete="off" placeholder="CONFIRM PASSWORD"></input>
                <div className="login-button-and-swap">
                    <Link style={{textDecoration:"none"}} to="/"><button className="login-button">SIGN UP</button></Link>
                    <Link style={{textDecoration:"none"}} to="/signin"><p className="swap-login-register">Already have an account? <strong>Sign in</strong></p></Link>
                </div>
            </div>
        </div>
    );
}
export default Register;