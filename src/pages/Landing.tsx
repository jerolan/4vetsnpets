import Header from "../components/Header";

function Landing() {
  return (
    <div className="landing-container">
      <div className="main">
        <Header />
        <div className="content">
          <div className="info box">
            <h1>4VetsnPets</h1>
            <h3>Your pet's health in one place</h3>
            <div className="paragraph">
                <p>A better way to keep all your pet's medical information safe and to make 
                    appointments for a grooming session or a medical check. Stay organized and
                    make your furry friend happy.
                </p>
            </div>
            <button className="btn">Sign up</button>
          </div>
          <div className="pet-img box">
            <div className="spot"></div>
            <img src="src/assets/img/landing-dog.png" alt="German Shepherd" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
