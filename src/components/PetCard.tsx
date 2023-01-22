function PetCard(props:any) {
  return (
    <>
      <div className="pet-card">
        <div className="pet-card__img">
            <img src={props.img} alt="Pet" />
        </div>
        <div className="pet-card__content">
            <h2>{props.name}</h2>
            <p><strong>Age: </strong>{props.age} years</p>
            <p><strong>Type: </strong>{props.type}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Size: </strong>{props.size}</p>
            <p><strong>Weight: </strong>{props.weight} kg</p>
        </div>
      </div>
    </>
  );
}

export default PetCard;
