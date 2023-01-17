import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import SideBar from "../components/SideBar";
import { CRUDContextProvider } from "../context/CRUDContext";

function PrivateLayout() {
  return (
    <CRUDContextProvider>
      <ProtectedRoute>
        <SideBar>
          <Outlet />
        </SideBar>
      </ProtectedRoute>
    </CRUDContextProvider>
  );
}

export default PrivateLayout;
