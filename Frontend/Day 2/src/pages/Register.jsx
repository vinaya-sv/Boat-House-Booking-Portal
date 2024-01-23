import '../assets/css/Register.css';
function Register(){
    return(
        <div className="register-outer">
            <div className="register-card">
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="email id"></input>
                <label for="username"></label>
                <input type="text" id="username" className="login-textfield" autoComplete="off" placeholder="username"></input>
                <label for="password"></label>
                <input type="text" id="password" className="login-textfield" autoComplete="off" placeholder="password"></input>
                <label for="confirm-password"></label>
                <input type="text" id="confirm-password" className="login-textfield" autoComplete="off" placeholder="confirm password"></input>
                <button className="login-button">Login</button>
            </div>
        </div>
    );
}
export default Register;