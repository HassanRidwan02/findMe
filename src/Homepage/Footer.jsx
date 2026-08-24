import {
  PackageSearch,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-500/20 transition group-hover:scale-105">
                <PackageSearch size={21} />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight">
                  FindMe
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Lost & Found
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Helping Crescent University students report,
              discover, and recover lost belongings around campus.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-sky-400" />
              Built for the campus community
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">

            <div>
              <h3 className="text-sm font-semibold text-white">
                Platform
              </h3>

              <div className="mt-4 space-y-3">
                <Link
                  to="/"
                  className="block text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Home
                </Link>

                <Link
                  to="/lost"
                  className="block text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Browse Items
                </Link>

                <Link
                  to="/lost"
                  className="block text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Report Lost
                </Link>

                <Link
                  to="/found"
                  className="block text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Report Found
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Categories
              </h3>

              <div className="mt-4 space-y-3">
                <span className="block text-sm text-slate-400">
                  Phones
                </span>

                <span className="block text-sm text-slate-400">
                  Laptops
                </span>

                <span className="block text-sm text-slate-400">
                  Wallets
                </span>

                <span className="block text-sm text-slate-400">
                  ID Cards
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Need Help?
              </h3>

              <div className="mt-4 space-y-3">
                <Link
                  to="/report-lost"
                  className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Report an Item
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

                <span className="block text-sm text-slate-400">
                  Contact Support
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/[0.08]" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-slate-500">
            © {year} FindMe Lost & Found. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Crescent University, Abeokuta
          </p>

        </div>

      </div>
    </footer>
  );
}