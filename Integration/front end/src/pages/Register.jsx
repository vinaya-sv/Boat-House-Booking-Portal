import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
import { useState } from 'react';
import axios from 'axios';
import { localhost } from '../services/localhost';
function Register(){
    const navigate=useNavigate();
    const [data, setUserData]=useState({
        "name": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
      })
    const handleInputChange=(event)=>{
        const {id, value}=event.target;
        setUserData(prevData=>({...prevData, [id]:value}));
        console.log("hai");
    }
    const [errors, setErrors] = useState({});
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform validation
        const validationErrors = {};
        if (!data.name) {
          validationErrors.name = 'Name is required';
        }
        if (!data.email) {
          validationErrors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
          validationErrors.email = 'Invalid email format';
        }
        if (!data.password) {
          validationErrors.password = 'Password is required';
        }
        if (!data.confirmPassword) {
          validationErrors.confirmPassword = 'Confirm password is required';
        } else if (data.password !== data.confirmPassword) {
          validationErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data or perform further actions
            console.log('Form submitted:', data);
            navigate("/signin");
            const postRegisterData=async ()=>{
                const response=await axios.post(`${localhost}/api/v1/auth/register`, data);
                console.log(response.data);
            }
            postRegisterData();
        } else {
            // Form has validation errors
            console.log('Form has errors:', validationErrors);
        }
      };
      const isValidEmail = (email) => {
        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    return(
        <div className="register-outer">
            <form className="register-card" onSubmit={handleFormSubmit}>
                <label for="email"></label>
                <input type="email" id="email" className="login-textfield" autoComplete="off" placeholder="EMAIL ID" value={data.email} onChange={handleInputChange} required></input>
                <label for="username"></label>
                <input type="text" id="name" className="login-textfield" autoComplete="off" placeholder="USERNAME" value={data.name} onChange={handleInputChange} required></input>
                <label for="password"></label>
                <input type="password" id="password" className="login-textfield" autoComplete="off" placeholder="PASSWORD" value={data.password} onChange={handleInputChange} required></input>
                <label for="confirm-password"></label>
                <input type="password" id="confirmPassword" className="login-textfield" autoComplete="off" placeholder="CONFIRM PASSWORD" value={data.confirmPassword} onChange={handleInputChange} required></input>
                <div className="login-button-and-swap">
                    <button className="login-button">SIGN UP</button>
                    <Link style={{textDecoration:"none"}} to="/signin"><p className="swap-login-register">Already have an account? <strong>Sign in</strong></p></Link>
                </div>
            </form>
        </div>
    );
}
export default Register;