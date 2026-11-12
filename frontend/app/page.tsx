const pillars = [
  { number: "01", title: "Discover", description: "Explore brands, models and exact watch references." },
  { number: "02", title: "Understand", description: "Learn movements, materials and technical specifications." },
  { number: "03", title: "Verify", description: "Trace information to sources and see what is still uncertain." },
  { number: "04", title: "Compare", description: "Evaluate dimensions, features and ownership trade-offs." },
  { number: "05", title: "Own", description: "Build a private record of your collection and service history." },
  { number: "06", title: "Explore", description: "Discover the engineering and craft behind watchmaking." },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
      <header className="flex items-center justify-between border-b border-white/10 pb-5">
        <a href="/" className="text-sm font-semibold tracking-[0.28em] text-white">TIMEVERSE<span className="text-violet-400">.</span></a>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-400">BY DATTU SHARMA</span>
      </header>

      <section className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 text-xs tracking-[0.32em] text-violet-300">THE WORLD OF WATCH INTELLIGENCE</p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Time deserves<br />to be <span className="text-violet-300">understood.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400">
            A new way to discover watches, understand their engineering, verify the details and make confident ownership decisions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#discover" className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300">Explore the platform</a>
            <span className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300">Research-led · Evidence-first</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-zinc-900 to-black p-8 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] text-zinc-500">TIMEVERSE / 001</p>
            <div className="my-12 flex items-center justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border border-violet-300/30 bg-black/50 shadow-[0_0_90px_rgba(139,92,246,0.16)]">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/10">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-zinc-800 to-black">
                    <div className="absolute h-14 w-[2px] -translate-y-5 rotate-[25deg] bg-violet-300" />
                    <div className="absolute h-20 w-[1px] translate-x-5 rotate-[120deg] bg-zinc-200" />
                    <div className="h-2 w-2 rounded-full bg-violet-300" />
                    <span className="absolute bottom-5 text-[8px] tracking-[0.3em] text-zinc-500">T V</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between border-t border-white/10 pt-5">
              <div><p className="text-xs text-zinc-500">OUR PRINCIPLE</p><p className="mt-1 text-sm text-zinc-200">Every detail has a source.</p></div>
              <span className="text-xs tracking-widest text-violet-300">EST. 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="border-t border-white/10 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-[10px] tracking-[0.3em] text-violet-300">THE PLATFORM</p><h2 className="mt-2 text-2xl font-medium">One world. Every watch story.</h2></div>
          <p className="max-w-sm text-sm text-zinc-500">The first release is being built. These are product pillars, not yet-live features.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-violet-300/30">
              <p className="text-xs tracking-widest text-violet-300">{pillar.number} / 06</p>
              <h3 className="mt-6 text-lg">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-xs text-zinc-600">
        <span>TIMEVERSE — BY DATTU SHARMA</span><span>Built on research. Designed around trust.</span>
      </footer>
    </main>
  );
}
