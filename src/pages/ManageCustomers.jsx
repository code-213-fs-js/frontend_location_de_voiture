import PageTitle from "../components/PageTitle";
import { customers } from "../data";

export default function ManageCustomers() {
  return (
    <>
      <PageTitle
        title="Gestion des clients"
        description="Liste des clients inscrits."
      />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>E-mail</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
