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
    path: "/home",
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/home",
        element: <Home />,
      },
    ]
  }
]);
