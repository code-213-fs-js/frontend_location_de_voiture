import PageTitle from "../components/PageTitle";
import { cars, categories } from "../data";

export default function ManageCars() {
  return (
    <>
      <PageTitle
        title="Gestion des voitures"
        description="Liste des voitures enregistrées."
      />
      <form className="form-card admin-form">
        <label>
          Marque
          <input type="text" />
        </label>
        <label>
          Modèle
          <input type="text" />
        </label>
        <label>
          Année
          <input type="number" />
        </label>
        <label>
          Prix / jour (DA)
          <input type="number" />
        </label>
        <label>
          Catégorie
          <select defaultValue="">
            <option value="">Choisir...</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <button className="button" type="button">
          + Ajouter une voiture
        </button>
      </form>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Voiture</th>
              <th>Catégorie</th>
              <th>Prix / jour</th>
              <th>Disponibilité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>
                  {car.brand} {car.model}
                </td>
                <td>{car.category_id.name}</td>
                <td>{car.pricePerDay} DA</td>
                <td>{car.status === "available" ? "Disponible" : "Indisponible"}</td>
                <td>
                  <button className="small-button">Modifier</button>
                  <button className="small-button">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
