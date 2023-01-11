import {router} from './router';
import { RouterProvider } from "react-router-dom";

function App (){
    return(<main className='app'>
        <RouterProvider router={router}/>
    </main>);
}

export default App;