import { Activity, Blocks, Lock, Server } from "lucide-react";
import { ENGINEERING_PILLARS } from "@/data/company";

const PILLAR_ICONS = [Blocks, Lock, Server, Activity];

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="border-t border-slate-200/80 bg-slate-100/60 py-20 sm:py-24 dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
            Engineering Principles
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            How we build resilient software
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Every Vantroxia Labs product shares a disciplined engineering baseline — clean
            domain boundaries, security-by-default multi-tenancy, and full-stack telemetry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <div
                key={pillar.code}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 transition-colors hover:border-slate-300 sm:p-7 dark:border-white/10 dark:bg-[#0c111d] dark:hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {pillar.code}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
