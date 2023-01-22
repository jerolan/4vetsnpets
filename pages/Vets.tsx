import { Link } from "react-router-dom";
import VetList from "../components/VetList";
import { UserAuth } from "../context/AuthContext";

function Vets() {
  const { user } = UserAuth();
  return (
    <div className="vet-container">
      <h1>Vets!</h1>
      <br />
      <Link to={"/4vetsnpets/add-vet"} className="vet-btn" style={user.rol === "user" ? { display: "none" } : {}}>Add</Link>
      <div className="vet-cards">
        <VetList />
      </div>
    </div>
  );
}

export default Vets;
