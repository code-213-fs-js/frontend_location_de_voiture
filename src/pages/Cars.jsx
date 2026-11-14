import PageTitle from "../components/PageTitle";
import CarCard from "../components/CarCard";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function Cars() {
  const [cars,setCars]=useState([])
  const [categories,setCategories]=useState([])
  const [categoryId,setCategoryId]=useState([])
  useEffect(()=>{
    api.get("/cars/available").then((res)=>setCars(res.data))
    api.get("/categories").then((res)=>setCategories(res.data))
  },[])

  const showcars = categoryId ? cars.filter((car)=>
  car.category_id?._id === categoryId):cars

  return (
    <>
      <PageTitle
        title="Nos voitures"
        description="Consultez les voitures proposées à la location."
      />
      <div className="filters">
        <label>
          Catégorie
          <select defaultValue="" value={categoryId}
            onChange={(e)=>setCategoryId(e.target.value)}>
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
        {showcars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </>
  );
}
