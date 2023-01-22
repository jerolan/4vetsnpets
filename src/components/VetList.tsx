import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { CRUD } from "../context/CRUDContext";

function VetList() {
  const [dataArray, setDataArray] = useState([]);
  const { crudDelete, getDatabase } = CRUD();
  const { user } = UserAuth();

  useEffect(() => {
    async function getData() {
      const data = await getDatabase("vets", "lara@vet.com");
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
                  {data.name} {data.lastName}
                </h2>
                <p>
                  <strong>Job: </strong>
                  {data.job}
                </p>
                <p>
                  <strong>Available: </strong>
                  {data.availability ? "Yes" : "No"}
                </p>
              </div>
              <div
                className="vetpet-list__btns"
                style={user.rol === "user" ? { display: "none" } : {}}
              >
                <button onClick={() => crudDelete(data.id, "vets")} style={{"background":"red"}}>
                  Delete
                </button>
                <button style={{"background":"#5c75db"}}>Update</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default VetList;
