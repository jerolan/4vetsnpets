import PetView from "../components/PetView";
import VetView from "../components/VetView";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user } = UserAuth();

  return (
    <>
      <h1>Home</h1>
      {user.rol === "admin" ? <VetView /> : <PetView />}
     
    </>
  );
}

export default Home;
