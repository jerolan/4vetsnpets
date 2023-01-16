import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import SideBar from "../components/SideBar";

function PrivateLayout() {
  return (
    <ProtectedRoute>
      <SideBar>
        <Outlet />
      </SideBar>
    </ProtectedRoute>
  );
}

export default PrivateLayout;
