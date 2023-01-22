import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function UnAuthorized(props: any) {
  const { isAuthenticated } = UserAuth();
  return !isAuthenticated ? props.children : <Navigate to={"/4vetsnpets"} replace/>;
}

export default UnAuthorized;
