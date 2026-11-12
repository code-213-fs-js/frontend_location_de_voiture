import PageTitle from "../components/PageTitle";
import CarCard from "../components/CarCard";
import { cars, categories } from "../data";

export default function Cars() {
  const availableCars = cars.filter((car) => car.status === "available");

  return (
    <>
      <PageTitle
        title="Nos voitures"
        description="Consultez les voitures proposées à la location."
      />
      <div className="filters">
        <label>
          Catégorie
          <select defaultValue="">
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="car-grid">
        {availableCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </>
  );
}
