import { Outlet } from "react-router-dom";
import UnAuthorized from '../components/UnAuthorized';

function PublicLayout() {
    return(<UnAuthorized>
        <Outlet/>
    </UnAuthorized>)
}

export default PublicLayout;