
import {  useNavigate} from "react-router-dom";
import React from "react";
import userController from "../controllers/userController";


function SignUpPage() {
    const controller = userController();
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        await controller.signup();
        navigate("/signin")
    }
    return (
        <form onSubmit={handleSignup}> 
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    
                    <input class="form-control is-valid" placeholder="First name"  required
                        onChange={controller.updateRegisterForm}
                        value={controller.loginRegForm.firstName}
                        type="string"
                        name="firstName"
                    />
                </div></div>
                <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                        
                        <input class="form-control is-valid" placeholder="Last name"  required
                            onChange={controller.updateRegisterForm}
                            value={controller.loginRegForm.lastName}
                            type="string"
                            name="lastName"
                        />
                    </div>
                </div>
                <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input class="form-control is-valid" placeholder="Email"  required
                            onChange={controller.updateRegisterForm}
                            value={controller.loginRegForm.email}
                            type="email"
                            name="email"
                        />
                    </div>
                </div>
                <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input class="form-control is-valid" placeholder="Password"  required
                            onChange={controller.updateRegisterForm}
                            value={controller.loginRegForm.password}
                            type="password"
                            name="password"
                        />
                    </div>
                </div>
            <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
            
        
        </form>
        
    );
}


    export default SignUpPage;