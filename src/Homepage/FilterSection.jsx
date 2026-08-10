import { useState } from "react";
import { items } from '../data.js'
import {Link} from 'react-router-dom'

export default function FilterSection() {
  const [category, setCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null)

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
              className="relative overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase ${
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

                <button
                  className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                <Link
                  to={`/lost/${item.id}`}
                  >
                    View Details
                </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}