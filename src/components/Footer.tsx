import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 dark:border-white/10 dark:bg-[#05070c]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo showSubtitle />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {COMPANY.tagline}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    <span>{product.name}</span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      ({product.domain})
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#products" className="hover:text-slate-950 dark:hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-slate-950 dark:hover:text-white">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-950 dark:hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-950 dark:hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center dark:border-white/10 dark:text-slate-400">
          <p>
            &copy; {COMPANY.copyrightYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="font-mono">{COMPANY.domain}</p>
        </div>
      </div>
    </footer>
  );
}
