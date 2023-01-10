import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const menuItems = [
  {
    path: "/",
    name: "name",
    icon: "icon",
  },
];

export function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}
