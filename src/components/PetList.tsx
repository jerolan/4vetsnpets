import { useEffect, useState } from "react";
import { CRUD } from "../context/CRUDContext";

function PetList() {
  const [dataArray, setDataArray] = useState([]);
  const { crudDelete, getDatabase } = CRUD();

  useEffect(() => {
    async function getData() {
      const data = await getDatabase("pets", "lara@vet.com");
      setDataArray(data);

    }
    getData();
  }, []);

  return (
    <>
      {dataArray.map((data: any) => {
        return (
          <div className="vetpet-container" key={data.name}>
            <div className="vetpet-list">
              <div className="vetpet-list__img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt={data.name}
                />
              </div>
              <div className="vetpet-list__content">
                <h2>
                  {data.name}
                </h2>
                <p><strong>Age: </strong>{data.age} years</p>
                <p><strong>Type: </strong>{data.type}</p>
                <p><strong>Size: </strong>{data.size}</p>
                <p><strong>Breed: </strong>{data.breed}</p>
                <p><strong>Weight: </strong>{data.weight} kg</p>
              </div>
              <div
                className="vetpet-list__btns"
              >
                <button onClick={() => crudDelete(data.id, "pets")} style={{"background":"red"}}>
                  Delete
                </button>
                {/* <button style={{"background":"#5c75db"}}>Update</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PetList;
