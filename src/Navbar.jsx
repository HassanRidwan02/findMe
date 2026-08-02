import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          FindMe
        </h1>

        <div className="flex gap-8 font-medium">

          <NavLink
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/lost"
            className="hover:text-blue-600 transition"
          >
            Report Lost
          </NavLink>

          <NavLink
            to="/found"
            className="hover:text-blue-600 transition"
          >
            Report Found
          </NavLink>

        </div>
      </div>
    </nav>
  );
}