import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <div className="car-image">🚗</div>
      <div className="car-info">
        <p className="muted">{car.category_id.name}</p>
        <h3>{car.brand} {car.model}</h3>
        <p>{car.year}</p>
        <div className="car-bottom">
          <strong>{car.pricePerDay} DA <span>/ jour</span></strong>
          <Link className="button" to={`/cars/${car._id}`}>Détails</Link>
        </div>
      </div>
    </article>
  );
}
