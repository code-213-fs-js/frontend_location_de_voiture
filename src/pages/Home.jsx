import { Link } from "react-router-dom";
import { cars } from "../data";
import CarCard from "../components/CarCard";

export default function Home() {
  const availableCars = cars.filter((car) => car.status === "available");

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">LOCATION SIMPLE ET RAPIDE</p>
          <h1>Trouvez la voiture idéale pour votre prochain trajet.</h1>
          <p>
            Choisissez votre voiture et envoyez une demande de réservation en
            quelques étapes.
          </p>
          <Link to="/cars" className="button">
            Voir les voitures
          </Link>
        </div>
        <div className="hero-emoji">🚘</div>
      </section>
      <section>
        <div className="section-heading">
          <div>
            <h2>Quelques voitures</h2>
            <p className="muted">Découvrez notre sélection.</p>
          </div>
          <Link to="/cars">Voir tout →</Link>
        </div>
        <div className="car-grid">
          {availableCars.slice(0, 3).map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
