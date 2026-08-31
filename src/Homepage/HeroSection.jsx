import {
  Search,
  ArrowRight,
  MapPin,
  Wallet,
  Smartphone,
  BadgeCheck,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({onBrowseItems}) {
  const recentItems = [
    {
      icon: Smartphone,
      name: "iPhone 15",
      place: "ICT Centre",
      status: "Found",
      iconStyle: "bg-blue-500/10 text-blue-400",
    },
    {
      icon: Wallet,
      name: "Leather Wallet",
      place: "University Library",
      status: "Found",
      iconStyle: "bg-amber-500/10 text-amber-400",
    },
    {
      icon: BadgeCheck,
      name: "Student ID Card",
      place: "Engineering Block",
      status: "Lost",
      iconStyle: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px] animate-pulse" />

      <div className="absolute right-[-100px] top-40 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-[-250px] left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">

        {/* ================= LEFT ================= */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="animate-[fadeIn_0.6s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-sm font-medium text-sky-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              Crescent University Lost & Found
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
            Lost something?
            <br />

            <span className="text-sky-400">
              Let's help you find it.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A simple place for Crescent University students to report,
            discover, and recover lost belongings around campus.
          </p>

          {/* Search */}
          <div className="mt-9 max-w-xl">
            <div className="group flex items-center rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 focus-within:border-sky-400/40 focus-within:bg-white/[0.08]">
              <Search
                size={20}
                className="ml-3 shrink-0 text-slate-500 transition group-focus-within:text-sky-400"
              />

              <input
                type="text"
                placeholder="Search phone, wallet, ID card..."
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                className="hidden rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 sm:block"
              >
                Search
              </button>
            </div>

            <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Search size={13} />
              Search through reported items across campus
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onBrowseItems}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Browse Items

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={17} className="text-sky-400" />
              Campus-focused
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock3 size={17} className="text-sky-400" />
              Quick reporting
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <BadgeCheck size={17} className="text-sky-400" />
              Easy recovery
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative hidden min-h-[540px] lg:block">

          {/* Main Dashboard */}
          <div className="absolute right-0 top-10 w-[480px] rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Campus activity
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Recently reported
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/10 px-3 py-1.5 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Live
              </div>
            </div>

            {/* Items */}
            <div className="mt-5 space-y-3">
              {recentItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-sky-400/20 hover:bg-white/[0.06]"
                    style={{
                      animation: `fadeUp 0.6s ease-out ${index * 120}ms both`,
                    }}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconStyle}`}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {item.name}
                      </h4>

                      <p className="mt-1 flex items-center gap-1 truncate text-xs text-slate-500">
                        <MapPin size={12} />
                        {item.place}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        item.status === "Found"
                          ? "bg-green-400/10 text-green-400"
                          : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dashboard Footer */}
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-sky-500/[0.06] p-4">
              <div>
                <p className="text-xs text-slate-500">
                  Need to report?
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  It only takes a few minutes.
                </p>
              </div>

              <Link
                to="/report-lost"
                className="rounded-lg bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-400"
              >
                Report
              </Link>
            </div>
          </div>

          {/* Floating Recovery Card */}
          <div className="absolute -left-5 top-0 z-10 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-400/10 p-2.5">
                <BadgeCheck size={20} className="text-green-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Item recovered
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Just now
                </p>
              </div>
            </div>
          </div>

          {/* Floating Location Card */}
          <div className="absolute -bottom-2 -left-8 z-10 animate-[float_5s_ease-in-out_1s_infinite] rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-400/10 p-2.5">
                <MapPin size={20} className="text-sky-400" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Last reported
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white">
                  ICT Centre
                </p>
              </div>
            </div>
          </div>

          {/* Small Stats Card */}
          <div className="absolute -right-4 bottom-10 z-10 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <p className="text-xs text-slate-500">
              Items this month
            </p>

            <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
              128
            </p>

            <p className="mt-1 text-xs font-medium text-green-400">
              +18% this month
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}