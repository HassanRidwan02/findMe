import {
  Search,
  ArrowRight,
  MapPin,
  Wallet,
  Smartphone,
  BadgeCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:70px_70px] opacity-25" />

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300">
            Helping students recover what matters
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Lost Something?
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Find It Faster.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Browse recently reported items, report what you've lost, and help
            others reconnect with their belongings—all from one place.
          </p>

          {/* Search */}
          <div className="mt-10 flex rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <div className="flex items-center px-3">
              <Search className="text-slate-400" size={20} />
            </div>

            <input
              placeholder="Search for phone, wallet, ID card..."
              className="flex-1 bg-transparent px-2 text-white placeholder:text-slate-500 focus:outline-none"
            />

            <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105">
              Browse Items
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-sky-400 hover:bg-white/10">
              Report Item
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white">2.5K+</h2>
              <p className="mt-1 text-slate-400">Items Reported</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">1.8K+</h2>
              <p className="mt-1 text-slate-400">Recovered</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">98%</h2>
              <p className="mt-1 text-slate-400">Success Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:block">
          {/* Main Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Recently Reported
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Live
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: <Smartphone />,
                  name: "iPhone 15",
                  place: "ICT Centre",
                  color: "bg-blue-500/20",
                },
                {
                  icon: <Wallet />,
                  name: "Leather Wallet",
                  place: "Library",
                  color: "bg-amber-500/20",
                },
                {
                  icon: <BadgeCheck />,
                  name: "Student ID",
                  place: "Engineering",
                  color: "bg-green-500/20",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <div className={`${item.color} rounded-xl p-3 text-white`}>
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{item.name}</h4>

                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-400">
                      <MapPin size={14} />
                      {item.place}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                    FOUND
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -left-12 top-10 rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-500/20 p-3">
                <Wallet className="text-sky-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Wallet Recovered</h4>

                <p className="text-sm text-slate-400">2 minutes ago</p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -right-8 bottom-8 rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
            <h4 className="text-4xl font-bold text-white">98%</h4>

            <p className="mt-2 text-slate-400">
              Successful recoveries this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}