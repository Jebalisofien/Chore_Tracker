import { useState, useEffect } from "react";
import userController from "../controllers/userController";

function LogoutPage() {
    const controller = userController();
    useEffect(() => {
        
            controller.logout();
        
    }, []);

    return (
        <div className="App">
        you are logedout
        </div>
    );
    }


    export default LogoutPage;