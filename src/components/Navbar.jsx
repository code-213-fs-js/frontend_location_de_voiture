import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">AutoLoc</Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/cars">Voitures</Link>
        <Link to="/my-rentals">Mes réservations</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/register" className="nav-button">Inscription</Link>
        <Link to="/admin">Administration</Link>
      </nav>
    </header>
  );
}
