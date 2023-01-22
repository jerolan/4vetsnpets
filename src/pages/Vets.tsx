import VetList from "../components/VetList";
import { CRUD } from "../context/CRUDContext";
import { useEffect, useState } from "react";

function Vets() {
  return (
    <>
      <h1>Vets!</h1>
      <br />
      
      <VetList />
    </>
  );
}

export default Vets;
