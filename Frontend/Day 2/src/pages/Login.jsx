import { Link } from 'react-router-dom';
import '../assets/css/Login.css'
function Login(){
    return (
        <div className="login-outer">
            <div className="login-card">
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="email id"></input>
                <label for="password"></label>
                <input type="password" id="password" className="login-textfield" autoComplete="off" placeholder="password"></input>
                <button className="login-button"><Link style={{textDecoration:"none"}} to="/">Login</Link></button>
                

            </div>
        </div>
    );
}
export default Login;