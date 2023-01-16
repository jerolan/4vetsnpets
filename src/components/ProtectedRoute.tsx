import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function ProtectedRoute(props:any){
    const { isAuthenticated } = UserAuth();
    return isAuthenticated ? props.children : <Navigate to="/signin" replace/>;
}

export default ProtectedRoute;