import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          FindMe
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium">
          <NavLink
            to="/"
            className="transition hover:text-blue-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/lost"
            className="transition hover:text-blue-600"
          >
            Report Lost
          </NavLink>

          <NavLink
            to="/found"
            className="transition hover:text-blue-600"
          >
            Report Found
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/lost"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-600"
            >
              Report Lost
            </NavLink>

            <NavLink
              to="/found"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-600"
            >
              Report Found
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}