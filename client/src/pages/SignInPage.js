
import {  useNavigate} from "react-router-dom";
import React from "react";
import userController from "../controllers/userController";

import 'bootstrap/dist/css/bootstrap.min.css';



export default function LoginForm() {
    
    const controller = userController();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        await controller.login();
        navigate("/")
    }
    return (
        
        <form onSubmit={handleLogin}> 
        <h1>Welcome Back!</h1>
        <div class="nav justify-content-center"  >
            <div class="nav justify-content-center">
                <label class="sr-only" for="exampleInputEmail1">Email address: </label>
                <input class="form-control mb-2"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={controller.updateLoginForm}
                    value={controller.loginForm.email}
                    type="email"
                    name="email"
                />
            </div>
            <div class="nav justify-content-center">
                <label class="sr-only" for="exampleInputPassword1">Password: </label>
                <input class="form-control mb-2"  placeholder="Password"
                    onChange={controller.updateLoginForm}
                    value={controller.loginForm.password}
                    type="password"
                    name="password"
                />
            </div></div >
            <div class="btn btn-primary2">
                <button type="submit" class="btn btn-primary mb-2">Log In</button>
            </div> 
        </form>
        
    );
}