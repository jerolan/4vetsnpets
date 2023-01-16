import PetView from "../components/PetView";
import VetView from "../components/VetView";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/signin");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h1>Home</h1>
      {user.rol === "admin" ? <VetView /> : <PetView />}
      <button onClick={handleLogout}>Sign out</button>
    </>
  );
}

export default Home;
