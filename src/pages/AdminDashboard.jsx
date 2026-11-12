import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { cars, customers, rentals } from "../data";

export default function AdminDashboard() {
  const pendingRentals = rentals.filter((rental) => rental.status === "pending");

  return (
    <>
      <PageTitle
        title="Tableau de bord"
        description="Bienvenue dans votre espace administration."
      />
      <div className="stats-grid">
        <div className="stat-card">
          <p>Voitures</p>
          <h2>{cars.length}</h2>
        </div>
        <div className="stat-card">
          <p>Clients</p>
          <h2>{customers.length}</h2>
        </div>
        <div className="stat-card">
          <p>Réservations</p>
          <h2>{rentals.length}</h2>
        </div>
        <div className="stat-card">
          <p>En attente</p>
          <h2>{pendingRentals.length}</h2>
        </div>
      </div>
      <h2>Gestion</h2>
      <div className="admin-links">
        <Link to="/admin/cars">Gérer les voitures →</Link>
        <Link to="/admin/categories">Gérer les catégories →</Link>
        <Link to="/admin/customers">Voir les clients →</Link>
        <Link to="/admin/rentals">Gérer les réservations →</Link>
      </div>
    </>
  );
}
