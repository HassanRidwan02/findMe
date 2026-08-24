import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Mail,
  ArrowRight,
  Search,
  PackageOpen,
} from "lucide-react";

export default function FilterSection({ items = [] }) {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { value: "all", label: "All Items" },
    { value: "phone", label: "Phones" },
    { value: "wallet", label: "Wallets" },
    { value: "id", label: "ID Cards" },
    { value: "charger", label: "Chargers" },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      category === "all" || item.category === category;

    const matchesSearch = item.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Lost & Found
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find what you’re looking for
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Browse reported items and help reconnect lost belongings
            with their owners.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search for an item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="mt-12 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              Reported Items
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "items"} found
            </p>
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <PackageOpen className="text-slate-400" size={30} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-800">
              No items found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try searching for another item or selecting a different
              category.
            </p>
          </div>
        ) : (
          /* Cards */
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Type Badge */}
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                      item.type === "lost"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Category */}
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 line-clamp-1 text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                      <span className="truncate">
                        {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CalendarDays
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Mail
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                      <span className="truncate">
                        {item.email}
                      </span>
                    </div>

                  </div>

                  {/* CTA */}
                  <Link
                    to={`/lost/${item.id}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}