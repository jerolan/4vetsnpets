import {router} from './router';
import { RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from './services/config';

initializeApp(config.firebaseConfig);

function App (){
    return(<main className='app'>
        <RouterProvider router={router}/>
    </main>);
}

export default App;