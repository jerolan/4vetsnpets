import {router} from './router';
import { RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from './services/config';

initializeApp(config.firebaseConfig);

function App (){
    return(<>
        <RouterProvider router={router}/>
    </>);
}

export default App;