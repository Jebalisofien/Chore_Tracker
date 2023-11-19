import { useEffect } from "react";
import userController from "../controllers/userController";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
    const controller = userController();
    useEffect(() => {
        if (controller.loggedIn === null) {
            controller.checkAuth();
        }
    }, []);
        if (controller.loggedIn === null) {
        return  <div>Please login</div>;
        }
        if (controller.loggedIn === false) {
        return <Navigate to="/"> Welcome </Navigate>;
        }
        return <div>{props.children}</div>;
    }
