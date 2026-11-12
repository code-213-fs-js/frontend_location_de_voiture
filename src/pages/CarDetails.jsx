import { Link, useParams } from "react-router-dom";
import { cars } from "../data";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((item) => item._id === id);

  if (!car) return <h2>Voiture introuvable.</h2>;

  const isAvailable = car.status === "available";

  return (
    <div className="details-layout">
      <div className="details-image">🚗</div>
      <div>
        <p className="muted">{car.category_id.name}</p>
        <h1>
          {car.brand} {car.model}
        </h1>
        <p>Année {car.year}</p>
        <h2>
          {car.pricePerDay} DA <span className="muted">/ jour</span>
        </h2>
        <p className={isAvailable ? "available" : "unavailable"}>
          {isAvailable ? "Disponible" : "Indisponible"}
        </p>
        {isAvailable && (
          <form className="rent-form">
            <label>
              Date de début
              <input type="date" />
            </label>
            <label>
              Date de fin
              <input type="date" />
            </label>
            <button className="button" type="button">
              Envoyer la demande
            </button>
          </form>
        )}
        <Link to="/login" className="button">
          Se connecter pour réserver
        </Link>
        <p>
          <Link to="/cars">← Retour aux voitures</Link>
        </p>
      </div>
    </div>
  );
}
