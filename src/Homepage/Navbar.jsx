import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  PackageSearch,
} from "lucide-react";

export default function Navbar({scrollToItems}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/5 hover:text-white";

  const activeLink =
    "bg-sky-400/10 text-sky-400";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/85 backdrop-blur-xl">

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          {/* Icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-500/20 transition duration-300 group-hover:scale-105 group-hover:shadow-sky-500/30">

            <PackageSearch
              size={21}
              className="text-white"
            />

            {/* Small status dot */}
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-green-400" />
          </div>

          {/* Brand */}
          <div className="leading-none">
            <h1 className="text-[17px] font-semibold tracking-tight text-white">
              FindMe
            </h1>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Lost & Found
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex">

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

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden lg:block">
          <button
            // to="/lost"
            onClick={scrollToItems}
            className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-500/30"
          >
            Browse Items

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-200 hover:bg-white/[0.08] hover:text-white lg:hidden"
        >
          {isOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/[0.08] bg-slate-950/95 transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-5 py-5 sm:px-6">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                isActive
                  ? "bg-sky-400/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/lost"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                isActive
                  ? "bg-sky-400/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Report Lost
          </NavLink>

          <NavLink
            to="/found"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                isActive
                  ? "bg-sky-400/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Report Found
          </NavLink>

          {/* Mobile CTA */}
          <Link
            to="/lost"
            onClick={closeMenu}
            className="group mt-4 flex items-center justify-center gap-2 rounded-xl bg-sky-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Browse Items

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}