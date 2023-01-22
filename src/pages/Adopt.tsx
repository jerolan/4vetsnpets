import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from 'react';


function Adopt() {
const pets = useAxios({ endpoint: 'pets' }); 


  return (
    <>
      <div className="adopt-container">
        <h1>Adopt</h1>
        {pets.loading && <p>Loading...</p>}
        {!pets.loading && pets.error && <p>Error loading Posts: {pets.error}</p>}
        {!pets.loading && pets.data && <div>
            {pets.data.map((pet:any)=>{
                return <li key={pet.id}>{pet.name}</li>
            })}
            </div>}
      </div>
    </>
  );
}

export default Adopt;
