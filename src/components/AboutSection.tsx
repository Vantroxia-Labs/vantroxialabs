import { COMPANY, STUDIO_STATS } from "@/data/company";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-slate-200/80 py-20 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
              About {COMPANY.legalName}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Focused product engineering, from architecture to production.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {COMPANY.legalName} is an independent software company building dependable
              digital infrastructure for modern businesses. Rather than shipping fragile
              prototypes, we engineer focused vertical platforms designed for long-term
              operational reliability.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Whether helping fitness brands automate member lifecycles on{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                GymMateHub
              </span>{" "}
              or enabling enterprises to satisfy statutory FIRS e-invoicing mandates via{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                AegisRemit
              </span>
              , our products bridge practical business workflows with strict technical
              rigor.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {STUDIO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-white/10 dark:bg-[#0c111d]"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

