import { Link, useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    return(<>
        <div className="notfound">
            <h1>Not found!</h1>
            <img src="https://www.pngkey.com/png/full/846-8464834_1920-x-1279-22-confused-dog.png" alt="Confused Dog" />
            <Link to={"/4vetsnpets"} className="notfound-btn">Home</Link>

        </div>
    
    </>);
}

export default NotFound;