import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from '../layouts/PrivateLayout';
import ProtectedRoute from "../components/ProtectedRoute";
import UnAuthorized from "../components/UnAuthorized";
import Vets from '../pages/Vets';
import Pets from '../pages/Pets';
import Appointments from '../pages/Appointments';
import Status from '../pages/Status';
import MedHistory from '../pages/MedHistory';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/4vetsnpets",
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/4vetsnpets",
        element: <Home />,
      },
      {
        path: "/4vetsnpets/vets",
        element: <Vets />,
      },
      {
        path: "/4vetsnpets/pets",
        element: <Pets />,
      },
      {
        path: "/4vetsnpets/appointments",
        element: <Appointments />,
      },
      {
        path: "/4vetsnpets/status",
        element: <Status />,
      },
      {
        path: "/4vetsnpets/history",
        element: <MedHistory />,
      },
    ]
  }
]);
