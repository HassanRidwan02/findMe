import { useState } from "react";

export default function FilterSection() {
  const [category, setCategory] = useState("all");

  const items = [
    {
      id: 1,
      name: "Black Wallet",
      category: "wallet",
      description:
        "A black leather wallet containing student ID and ATM cards.",
      location: "Engineering Building",
      date: "23-03-2026",
      image: "https://placehold.co/600x400",
      email: "wallet@example.com",
      type: 'lost'
    },
    {
      id: 2,
      name: "iPhone 12",
      category: "phone",
      description:
        "Black iPhone 12 with a transparent case and green beads attached.",
      location: "Engineering Building",
      date: "23-03-2026",
      image: "https://placehold.co/600x400",
      email: "iphone12@example.com",
      type: 'found'
    },
    {
      id: 3,
      name: "iPhone 15",
      category: "phone",
      description:
        "Blue iPhone 15 found near the Computing Building entrance.",
      location: "Computing Building",
      date: "25-03-2026",
      image: "https://placehold.co/600x400",
      email: "iphone15@example.com",
      type: 'lost'
    },
    {
      id: 4,
      name: "School ID Card",
      category: "id",
      description:
        "Crescent University student ID card belonging to a Computer Science student.",
      location: "Library",
      date: "24-03-2026",
      image: "https://placehold.co/600x400",
      email: "id@example.com",
      type: 'lost'
    },
    {
      id: 5,
      name: "Laptop Charger",
      category: "charger",
      description:
        "HP laptop charger found inside the ICT Centre.",
      location: "ICT Centre",
      date: "20-03-2026",
      image: "https://placehold.co/600x400",
      email: "charger@example.com",
      type: 'found'
    },
  ];

  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

  const categories = [
    "all",
    "phone",
    "wallet",
    "id",
    "charger",
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-[1080px] px-5">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Browse Lost Items
          </h2>

          <p className="mt-3 text-slate-500">
            Filter items by category and help reunite owners with their
            belongings.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-5 py-2 font-medium capitalize transition duration-300 ${
                category === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                  item.type === "lost"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.type}
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase text-blue-700">
                  {item.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-800">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">📍 Location:</span>{" "}
                    {item.location}
                  </p>

                  <p>
                    <span className="font-semibold">📅 Date:</span>{" "}
                    {item.date}
                  </p>

                  <p className="truncate">
                    <span className="font-semibold">📧 Contact:</span>{" "}
                    {item.email}
                  </p>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}