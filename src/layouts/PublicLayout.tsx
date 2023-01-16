import { Outlet } from "react-router-dom";

function PublicLayout() {
    return(<main>
        <Outlet/>
    </main>)
}

export default PublicLayout;