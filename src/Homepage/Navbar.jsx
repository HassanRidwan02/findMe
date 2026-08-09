import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  PackageSearch,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-white";

  const activeLink =
    "text-sky-400 after:absolute after:-bottom-1 after:left-3 after:h-0.5 after:w-[calc(100%-24px)] after:rounded-full after:bg-sky-400";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/30">
            <PackageSearch
              size={22}
              className="text-white"
            />
          </div>

          <div>
            <h2 className="text-xl font-black tracking-tight text-white">
              FindMe
            </h2>

            <p className="text-xs text-slate-400">
              Lost & Found
            </p>
          </div>
        </NavLink>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/lost"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            Report Lost
          </NavLink>

          <NavLink
            to="/found"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            Report Found
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <Search size={18} />
          </button>

          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-300 hover:scale-105">
            Browse Items
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-2 px-6 py-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-sky-500/20 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/lost"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-sky-500/20 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              Report Lost
            </NavLink>

            <NavLink
              to="/found"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-sky-500/20 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              Report Found
            </NavLink>

            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 py-3 font-semibold text-white">
              Browse Items
            </button>
          </div>
        </div>
      )}
    </header>
  );
}