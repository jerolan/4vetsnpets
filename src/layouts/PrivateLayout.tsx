import { Outlet } from "react-router-dom";

function PrivateLayout() {
    return(<main>
        <Outlet/>
    </main>)
}

export default PrivateLayout;