import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function VetProtected(props: any) {
  const { user } = UserAuth();
  return user.rol === 'admin' ? props.children : <Navigate to={"/4vetsnpets"} replace/>;
}

export default VetProtected;