export const categories = [
  {
    _id: "66a0c1f2e4b0a1b2c3d4e501",
    name: "Économique",
    description: "Petites voitures peu coûteuses, idéales pour la ville.",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e502",
    name: "Berline",
    description: "Voitures confortables pour les longs trajets.",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e503",
    name: "SUV",
    description: "Grands véhicules spacieux pour la famille.",
  },
];

export const cars = [
  {
    _id: "66a0c1f2e4b0a1b2c3d4e601",
    brand: "Renault",
    model: "Symbol",
    year: 2022,
    pricePerDay: 4500,
    status: "available",
    category_id: categories[0],
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e602",
    brand: "Hyundai",
    model: "i10",
    year: 2023,
    pricePerDay: 4000,
    status: "available",
    category_id: categories[0],
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e603",
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    pricePerDay: 7500,
    status: "available",
    category_id: categories[1],
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e604",
    brand: "Kia",
    model: "Sportage",
    year: 2023,
    pricePerDay: 11000,
    status: "unavailable",
    category_id: categories[2],
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e605",
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    pricePerDay: 12000,
    status: "available",
    category_id: categories[2],
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e606",
    brand: "Dacia",
    model: "Duster",
    year: 2023,
    pricePerDay: 9000,
    status: "available",
    category_id: categories[2],
  },
];

export const customers = [
  {
    _id: "66a0c1f2e4b0a1b2c3d4e701",
    name: "Amine Benali",
    email: "amine.benali@email.com",
    phone: "0550123456",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e702",
    name: "Sara Merabet",
    email: "sara.merabet@email.com",
    phone: "0661234567",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e703",
    name: "Yacine Khelifi",
    email: "yacine.khelifi@email.com",
    phone: "0770345678",
  },
];

export const rentals = [
  {
    _id: "66a0c1f2e4b0a1b2c3d4e801",
    customer_id: customers[0],
    car_id: cars[0],
    startDate: "2026-11-20T00:00:00.000Z",
    endDate: "2026-11-23T00:00:00.000Z",
    totalPrice: 13500,
    status: "pending",
    createdAt: "2026-11-10T09:15:00.000Z",
    updatedAt: "2026-11-10T09:15:00.000Z",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e802",
    customer_id: customers[1],
    car_id: cars[3],
    startDate: "2026-11-15T00:00:00.000Z",
    endDate: "2026-11-20T00:00:00.000Z",
    totalPrice: 55000,
    status: "confirmed",
    createdAt: "2026-11-05T14:30:00.000Z",
    updatedAt: "2026-11-06T10:00:00.000Z",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e803",
    customer_id: customers[0],
    car_id: cars[2],
    startDate: "2026-10-02T00:00:00.000Z",
    endDate: "2026-10-05T00:00:00.000Z",
    totalPrice: 22500,
    status: "rejected",
    createdAt: "2026-09-28T11:00:00.000Z",
    updatedAt: "2026-09-29T08:45:00.000Z",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e804",
    customer_id: customers[2],
    car_id: cars[4],
    startDate: "2026-12-01T00:00:00.000Z",
    endDate: "2026-12-08T00:00:00.000Z",
    totalPrice: 84000,
    status: "pending",
    createdAt: "2026-11-11T16:20:00.000Z",
    updatedAt: "2026-11-11T16:20:00.000Z",
  },
  {
    _id: "66a0c1f2e4b0a1b2c3d4e805",
    customer_id: customers[0],
    car_id: cars[1],
    startDate: "2026-09-10T00:00:00.000Z",
    endDate: "2026-09-12T00:00:00.000Z",
    totalPrice: 8000,
    status: "cancelled",
    createdAt: "2026-09-01T13:10:00.000Z",
    updatedAt: "2026-09-03T09:00:00.000Z",
  },
];

export const myRentals = rentals.filter(
  (rental) => rental.customer_id._id === customers[0]._id,
);
