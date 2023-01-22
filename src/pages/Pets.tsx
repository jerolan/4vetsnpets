import { Link } from "react-router-dom";
import PetList from "../components/PetList";

function Pets() {
  return (
    <div className="vet-container">
      <h1>Pets!</h1>
      <br />
      <Link to={"/4vetsnpets/add-pet"} className="vet-btn">Add</Link >
      <div className="vet-cards">
        <PetList />
      </div>
    </div>
  );
}

export default Pets;
