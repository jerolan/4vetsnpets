import { Link } from "react-router-dom";

function Header(){
    return(<header className="header">
        <nav className="header-nav">
            <Link to="/"><img src="src/assets/img/logo.png" alt="4 vets n' pets logo" className="header-nav__logo"/></Link>
            <h2 className="header-nav__title">4VetsnPets</h2>
        </nav>
    </header>)
}

export default Header;