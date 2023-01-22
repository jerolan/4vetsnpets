import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";

function Adopt() {
  const { data, error, loading } = useAxios({ endpoint: "pets" });

  return (
    <>
      <div className="adopt-container">
        <h1>Pets available for adoption</h1>
        <br />
        {loading && <p>Loading...</p>}
        {!loading && error && <p>Error loading Posts: {error}</p>}
        {!loading && data && (
          <div className="adopt-cards">
            {data.map((pet: any) => {
              return (
                <PetCard
                  img={pet.img}
                  name={pet.name}
                  age={pet.age}
                  type={pet.type}
                  gender={pet.gender}
                  size={pet.size}
                  weight={pet.weight}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Adopt;
