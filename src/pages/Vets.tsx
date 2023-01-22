import { CRUD } from "../context/CRUDContext";
import { useEffect, useState } from "react";

function Vets() {
  const [array, setArray] = useState([]);
  const { vetArray, getDatabase } = CRUD();

  // useEffect(() => {
  //   async function getData() {
  //     const data = await getDatabase("pets", "nosoyvet@mail.com");
  //     setArray(data);

  //   }
  //   getData();
  // }, []);

  return (
    <>
      <h1>Vets!</h1>
      <br />
      <div>
        {vetArray.map((data: any) => {
          return <li key={data.id}>{data.name}</li>;
        })}
      </div>
    </>
  );
}

export default Vets;
