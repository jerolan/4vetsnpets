import { Outlet } from "react-router-dom";
import ProtectedRoute from '../components/ProtectedRoute';

function PrivateLayout() {
    return(<ProtectedRoute>
        <Outlet/>
    </ProtectedRoute>)
}

export default PrivateLayout;