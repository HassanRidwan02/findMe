
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:70px_70px] opacity-30"></div>

      {/* Spotlight */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Glow Effects */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            Helping people reconnect with their belongings
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-white">
            Find Your Lost
            <br />
            <span className="text-sky-400">
              Belongings Easily
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Search thousands of reported items, report lost belongings,
            and help others recover what matters most.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-sky-400">
              Browse Items
            </button>

            <button className="rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-sky-400 hover:bg-slate-800">
              Report Item
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}