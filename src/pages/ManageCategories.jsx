import PageTitle from "../components/PageTitle";
import { categories } from "../data";

export default function ManageCategories() {
  return (
    <>
      <PageTitle
        title="Gestion des catégories"
        description="Consultez les catégories de voitures."
      />
      <form className="form-card admin-form">
        <label>
          Nom
          <input type="text" />
        </label>
        <label>
          Description
          <input type="text" />
        </label>
        <button className="button" type="button">
          + Ajouter une catégorie
        </button>
      </form>
      <div className="simple-list">
        {categories.map((category) => (
          <div key={category._id}>
            <span>{category.name}</span>
            <span>
              <button className="small-button">Modifier</button>
              <button className="small-button">Supprimer</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
