import { CRUD } from "../context/CRUDContext";

function Vets() {
  const { dataArray } = CRUD();

  return (
    <>
      <h1>Vets!</h1>
      <br />
      <div>
        {dataArray.map((data:any)=>{
          return <li key={data.id} >{data.name}</li>
        })}
      </div>
    </>
  );
}

export default Vets;
