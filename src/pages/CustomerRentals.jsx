import PageTitle from "../components/PageTitle";
import StatusBadge from "../components/StatusBadge";
import { myRentals } from "../data";

export default function CustomerRentals() {
  return (
    <>
      <PageTitle
        title="Mes réservations"
        description="Consultez l'historique de vos demandes de location."
      />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Voiture</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Total</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myRentals.map((rental) => (
              <tr key={rental._id}>
                <td>
                  {rental.car_id.brand} {rental.car_id.model}
                </td>
                <td>{new Date(rental.startDate)}</td>
                <td>{new Date(rental.endDate)}</td>
                <td>{rental.totalPrice} DA</td>
                <td>
                  <StatusBadge status={rental.status} />
                </td>
                <td>
                  {rental.status === "pending" && (
                    <button className="small-button" type="button">
                      Annuler
                    </button>
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
