import { ArrowDownRight, ArrowUpRight, Layers, ShieldCheck, Terminal } from "lucide-react";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-white/10"
    >
      {/* Subtle architectural background */}
      <div className="bg-arch-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="animate-pulse-slow pointer-events-none absolute -top-28 left-1/4 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] dark:bg-indigo-600/20"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-slow pointer-events-none absolute -bottom-24 right-1/5 h-80 w-80 rounded-full bg-cyan-400/15 blur-[110px] dark:bg-cyan-500/15"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Positioning & CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400"
              />
              {COMPANY.legalName} • Software Engineering Studio
            </div>

            <h1
              id="main-heading"
              tabIndex={-1}
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 focus:outline-none sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08] dark:text-white"
            >
              Software built for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-cyan-300 dark:to-sky-400">
                regulated markets
              </span>{" "}
              and real-world scale.
            </h1>

            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Vantroxia Labs LTD designs, engineers, and operates vertical SaaS
              platforms — from FIRS-compliant enterprise e-invoicing to
              multi-tenant fitness club infrastructure.
            </p>

            {/* Primary CTA + direct product jump links */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#products"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-500"
              >
                Explore Products
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              {PRODUCTS.map((product) => (
                <a
                  key={product.id}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-500/50 hover:text-indigo-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
                >
                  <span>{product.name}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                </a>
              ))}
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck
                  className="h-4 w-4 text-indigo-600 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <span>Multi-tenant &amp; audit-ready</span>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Layers
                  className="h-4 w-4 text-indigo-600 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <span>Cloud SaaS &amp; On-Premise</span>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Terminal
                  className="h-4 w-4 text-indigo-600 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <span>API-first integrations</span>
              </li>
            </ul>
          </div>

          {/* Right column: Interactive Product Ecosystem Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-[#0d121f]/90 dark:shadow-black/40">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Vantroxia Ecosystem
                  </h2>
                </div>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-400">
                  vantroxialabs.com
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {PRODUCTS.map((product) => (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition-colors hover:border-indigo-500/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/45 dark:hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-cyan-400">
                            {product.index}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {product.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                            />
                            {product.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          {product.category}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors group-hover:border-indigo-500/40 group-hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:group-hover:border-cyan-400/40 dark:group-hover:text-cyan-300"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-2.5 dark:border-white/10">
                      <span className="font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                        {product.domain}
                      </span>
                      <span className="text-[11px] font-medium text-indigo-600 group-hover:underline dark:text-cyan-400">
                        Open platform →
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2.5 text-xs text-slate-600 dark:bg-white/[0.04] dark:text-slate-400">
                <span>All platforms monitored with OpenTelemetry</span>
                <span className="shrink-0 font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  TLS • HTTPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
