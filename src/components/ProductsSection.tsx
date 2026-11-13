import { ArrowUpRight, CheckCircle2, Dumbbell, FileCheck2, Globe } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/products";

function ProductIcon({ id, accent }: { id: string; accent: Product["accent"] }) {
  const accentClasses =
    accent === "indigo"
      ? "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20 dark:bg-indigo-500/15 dark:text-indigo-300 dark:ring-indigo-400/25"
      : "bg-cyan-500/10 text-cyan-700 ring-cyan-500/20 dark:bg-cyan-500/15 dark:text-cyan-300 dark:ring-cyan-400/25";

  return (
    <div
      aria-hidden="true"
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${accentClasses}`}
    >
      {id === "gymmatehub" ? (
        <Dumbbell className="h-6 w-6" />
      ) : (
        <FileCheck2 className="h-6 w-6" />
      )}
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
              Our Products
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Platforms built and operated by Vantroxia Labs
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Each product is engineered end-to-end with dedicated domain architecture,
            automated deployments, and direct web access.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {PRODUCTS.map((product) => {
            const isIndigo = product.accent === "indigo";
            const borderHover = isIndigo
              ? "hover:border-indigo-500/45 dark:hover:border-indigo-400/45"
              : "hover:border-cyan-500/45 dark:hover:border-cyan-400/45";
            const buttonClasses = isIndigo
              ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20"
              : "bg-cyan-700 hover:bg-cyan-600 shadow-cyan-700/20";

            return (
              <article
                key={product.id}
                className={`flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-colors duration-200 sm:p-8 dark:border-white/10 dark:bg-[#0c111d] ${borderHover}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <ProductIcon id={product.id} accent={product.accent} />
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {product.index}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                      {product.domain}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <p className="mt-5 text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
                    {product.tagline}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {product.description}
                  </p>

                  {/* Key Capabilities */}
                  <ul className="mt-6 space-y-2.5">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isIndigo
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-cyan-700 dark:text-cyan-400"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Deployment & Stack Badges */}
                  <div className="mt-6 space-y-3 border-t border-slate-200/80 pt-5 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Delivery:
                      </span>
                      {product.deploymentModels.map((mode) => (
                        <span
                          key={mode}
                          className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Stack:
                      </span>
                      {product.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Single consistent CTA link per product card */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-5 dark:border-white/10">
                  {product.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors ${buttonClasses}`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}

                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {product.url}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
