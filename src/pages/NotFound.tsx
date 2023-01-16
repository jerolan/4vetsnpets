import { useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    return(<>
        <div>
            <h1>Not found!</h1>
        </div>
    
    </>);
}

export default NotFound;