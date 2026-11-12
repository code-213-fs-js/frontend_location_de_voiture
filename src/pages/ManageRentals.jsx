import PageTitle from "../components/PageTitle";
import StatusBadge from "../components/StatusBadge";
import { rentals } from "../data";

export default function ManageRentals() {
  return (
    <>
      <PageTitle
        title="Gestion des réservations"
        description="Consultez les demandes et leur statut."
      />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Voiture</th>
              <th>Période</th>
              <th>Total</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental) => (
              <tr key={rental._id}>
                <td>{rental.customer_id.name}</td>
                <td>
                  {rental.car_id.brand} {rental.car_id.model}
                </td>
                <td>
                  {new Date(rental.startDate)} au
                  {new Date(rental.endDate)}
                </td>
                <td>{rental.totalPrice} DA</td>
                <td>
                  <StatusBadge status={rental.status} />
                </td>
                <td>
                  {rental.status === "pending" && (
                    <>
                      <button className="small-button">Confirmer</button>
                      <button className="small-button">Refuser</button>
                    </>
                  )}
                  {rental.status === "confirmed" && (
                    <button className="small-button">Annuler</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
