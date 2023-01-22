import { Link } from "react-router-dom";
import VetList from "../components/VetList";
import { CRUD } from "../context/CRUDContext";
import { useEffect, useState } from "react";

function Vets() {
  return (
    <div className="vet-container">
      <h1>Vets!</h1>
      <br />
      <Link to={"/4vetsnpets/add-vet"} className="vet-btn">Add</Link>
      <div className="vet-cards">
        <VetList />
      </div>
    </div>
  );
}

export default Vets;
